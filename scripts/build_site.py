#!/usr/bin/env python3
"""Build a static browsing site for classes/*/*.md into an output directory.

Stdlib only, on purpose: markdown rendering happens client-side via marked.js
(loaded from a CDN in the page template), so this script only needs to pull
out each note's metadata (title / date / class / url / attendees) and pass
the raw Summary/Transcript markdown through as JSON. That keeps the build
step dependency-free, which matters because it runs in CI on every push.

Usage: python3 scripts/build_site.py --out _site
"""
import argparse
import datetime
import html
import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CLASSES_DIR = ROOT / "classes"

BULLET_RE = re.compile(r"^- \*\*(?P<key>Date|Class|Granola note|Attendees):\*\*\s*(?P<value>.*)$")
HEADING_RE = re.compile(r"^##\s+(?P<name>Summary|Transcript)\s*$")


def parse_note(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()

    title = ""
    meta = {"Date": "", "Class": "", "Granola note": "", "Attendees": ""}
    callouts = []
    sections = {"Summary": "", "Transcript": ""}

    i = 0
    # Title: first "# " line.
    while i < len(lines):
        if lines[i].startswith("# "):
            title = lines[i][2:].strip()
            i += 1
            break
        i += 1

    # Metadata bullets (and any "_..._" callout lines before/around them),
    # up to the first "## Summary" / "## Transcript" heading.
    section_start = len(lines)
    for j in range(i, len(lines)):
        m = HEADING_RE.match(lines[j])
        if m:
            section_start = j
            break
        bm = BULLET_RE.match(lines[j])
        if bm:
            meta[bm.group("key")] = bm.group("value").strip()
        elif lines[j].strip().startswith("_") and lines[j].strip().endswith("_") and len(lines[j].strip()) > 1:
            callouts.append(lines[j].strip().strip("_"))

    # Sections: split remaining text on "## Summary" / "## Transcript" headings.
    current = None
    buf = []
    for j in range(section_start, len(lines)):
        m = HEADING_RE.match(lines[j])
        if m:
            if current:
                sections[current] = "\n".join(buf).strip()
            current = m.group("name")
            buf = []
        else:
            buf.append(lines[j])
    if current:
        sections[current] = "\n".join(buf).strip()

    return {
        "title": title or path.stem,
        "date": meta["Date"],
        "class_line": meta["Class"],
        "url": meta["Granola note"],
        "attendees": meta["Attendees"],
        "callouts": callouts,
        "summary_md": sections["Summary"],
        "transcript_md": sections["Transcript"],
        "slug": path.stem,
    }


def parse_class_readme(path: Path) -> dict:
    title, description = path.stem, ""
    if path.exists():
        lines = path.read_text(encoding="utf-8").splitlines()
        for line in lines:
            if line.startswith("# "):
                title = line[2:].strip()
                break
        rest = [l.strip() for l in lines if l.strip() and not l.startswith("#")]
        description = rest[0] if rest else ""
    return {"title": title, "description": description}


PAGE_HEAD = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<link rel="stylesheet" href="{css_path}">
</head>
<body>
<header class="site-header"><a href="{home_path}">Granola Notes</a></header>
<main>
"""

PAGE_FOOT = """</main>
<footer class="site-footer">Built {built_at} &middot; auto-updated daily from Granola</footer>
</body>
</html>
"""

CSS = """
:root {
  --bg: #fafaf9; --fg: #1c1917; --muted: #78716c; --line: #e7e5e4;
  --accent: #7c5cff; --card: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #17171a; --fg: #f2f2f0; --muted: #9a9a95; --line: #2c2c30; --card: #1f1f23; }
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--fg); line-height: 1.55; }
main { max-width: 860px; margin: 0 auto; padding: 8px 20px 60px; }
a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }
.site-header { padding: 22px 20px 0; max-width: 860px; margin: 0 auto; }
.site-header a { font-weight: 700; font-size: 1.2rem; color: var(--fg); }
.site-footer { max-width: 860px; margin: 40px auto 0; padding: 20px; color: var(--muted); font-size: 0.85rem; border-top: 1px solid var(--line); }
h1 { font-size: 1.6rem; margin: 18px 0 6px; }
h2 { font-size: 1.2rem; margin-top: 2em; }
.subtitle { color: var(--muted); margin-bottom: 28px; }
.card-grid { display: grid; gap: 14px; margin-top: 20px; }
.card { display: block; padding: 16px 18px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; }
.card:hover { border-color: var(--accent); text-decoration: none; }
.card .card-title { font-weight: 600; color: var(--fg); }
.card .card-meta { color: var(--muted); font-size: 0.85rem; margin-top: 4px; }
.meta-list { list-style: none; padding: 0; margin: 14px 0 26px; color: var(--muted); font-size: 0.92rem; }
.meta-list li { padding: 2px 0; }
.meta-list b { color: var(--fg); font-weight: 600; }
.callout { background: #fff3cd; color: #664d03; border: 1px solid #ffe69c; border-radius: 8px; padding: 10px 14px; margin: 10px 0; font-size: 0.9rem; }
@media (prefers-color-scheme: dark) {
  .callout { background: #3a2f00; color: #ffe69c; border-color: #5c4a00; }
}
details.transcript summary { cursor: pointer; font-weight: 600; padding: 10px 0; }
.prose :first-child { margin-top: 0; }
.back-link { display: inline-block; margin-bottom: 10px; color: var(--muted); }
"""


def render_home(classes: list, out_dir: Path, built_at: str) -> None:
    cards = []
    for c in classes:
        cards.append(
            f'<a class="card" href="./{html.escape(c["slug"])}/index.html">'
            f'<div class="card-title">{html.escape(c["title"])}</div>'
            f'<div class="card-meta">{html.escape(c["description"])} &middot; {c["count"]} note(s)</div>'
            f"</a>"
        )
    body = (
        PAGE_HEAD.format(title="Granola Notes", css_path="./assets/style.css", home_path="./index.html")
        + "<h1>Granola Notes</h1>"
        + '<p class="subtitle">Class lecture notes, synced daily from Granola.</p>'
        + f'<div class="card-grid">{"".join(cards)}</div>'
        + PAGE_FOOT.format(built_at=built_at)
    )
    (out_dir / "index.html").write_text(body, encoding="utf-8")


def render_class_index(c: dict, notes: list, out_dir: Path, built_at: str) -> None:
    cards = []
    for n in notes:
        cards.append(
            f'<a class="card" href="./{html.escape(n["slug"])}.html">'
            f'<div class="card-title">{html.escape(n["title"])}</div>'
            f'<div class="card-meta">{html.escape(n["date"] or "")}</div>'
            f"</a>"
        )
    body = (
        PAGE_HEAD.format(title=c["title"] + " – Granola Notes", css_path="../assets/style.css", home_path="../index.html")
        + '<a class="back-link" href="../index.html">&larr; All classes</a>'
        + f'<h1>{html.escape(c["title"])}</h1>'
        + f'<p class="subtitle">{html.escape(c["description"])} &middot; {len(notes)} note(s)</p>'
        + f'<div class="card-grid">{"".join(cards)}</div>'
        + PAGE_FOOT.format(built_at=built_at)
    )
    (out_dir / c["slug"] / "index.html").write_text(body, encoding="utf-8")


NOTE_TEMPLATE = """<a class="back-link" href="./index.html">&larr; __CLASS_TITLE__</a>
<h1 id="note-title"></h1>
<ul class="meta-list">
  <li><b>Date:</b> <span id="note-date"></span></li>
  <li><b>Class:</b> <span id="note-class"></span></li>
  <li><b>Attendees:</b> <span id="note-attendees"></span></li>
  <li><b>Granola note:</b> <span id="note-url"></span></li>
</ul>
<div id="note-callouts"></div>
<h2>Summary</h2>
<div id="note-summary" class="prose"></div>
<details class="transcript">
  <summary>Transcript</summary>
  <div id="note-transcript" class="prose"></div>
</details>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script type="application/json" id="note-data">__DATA_JSON__</script>
<script>
  const data = JSON.parse(document.getElementById('note-data').textContent);
  document.title = data.title + " – Granola Notes";
  document.getElementById('note-title').textContent = data.title;
  document.getElementById('note-date').textContent = data.date || "–";
  document.getElementById('note-class').textContent = data.class_line || "–";
  document.getElementById('note-attendees').textContent = data.attendees || "–";
  const urlEl = document.getElementById('note-url');
  const urlMatch = (data.url || '').match(/https?:\/\/\S+/);
  if (urlMatch) {
    const a = document.createElement('a');
    a.href = urlMatch[0]; a.textContent = data.url; a.target = '_blank'; a.rel = 'noopener';
    urlEl.appendChild(a);
  } else {
    urlEl.textContent = data.url || "–";
  }
  const calloutsEl = document.getElementById('note-callouts');
  (data.callouts || []).forEach(c => {
    const div = document.createElement('div');
    div.className = 'callout';
    div.textContent = c;
    calloutsEl.appendChild(div);
  });
  document.getElementById('note-summary').innerHTML = data.summary_md
    ? marked.parse(data.summary_md) : '<p><em>No summary available.</em></p>';
  document.getElementById('note-transcript').innerHTML = data.transcript_md
    ? marked.parse(data.transcript_md) : '<p><em>No transcript available.</em></p>';
</script>
"""


def render_note(n: dict, c: dict, out_dir: Path, built_at: str) -> None:
    # Escape "</" so a literal "</script>" inside transcript text can't
    # prematurely close the embedded JSON <script> block.
    data_json = json.dumps(n).replace("</", "<\\/")
    note_body = NOTE_TEMPLATE.replace("__CLASS_TITLE__", html.escape(c["title"])).replace(
        "__DATA_JSON__", data_json
    )
    body = (
        PAGE_HEAD.format(title=n["title"] + " – Granola Notes", css_path="../assets/style.css", home_path="../index.html")
        + note_body
        + PAGE_FOOT.format(built_at=built_at)
    )
    (out_dir / c["slug"] / f'{n["slug"]}.html').write_text(body, encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--out", default="_site")
    args = parser.parse_args()

    out_dir = Path(args.out).resolve()
    if out_dir.exists():
        shutil.rmtree(out_dir)
    out_dir.mkdir(parents=True)
    (out_dir / "assets").mkdir()
    (out_dir / "assets" / "style.css").write_text(CSS, encoding="utf-8")

    built_at = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d %H:%M UTC")

    classes = []
    if CLASSES_DIR.exists():
        for class_dir in sorted(p for p in CLASSES_DIR.iterdir() if p.is_dir()):
            meta = parse_class_readme(class_dir / "README.md")
            note_paths = sorted(
                (p for p in class_dir.glob("*.md") if p.name != "README.md"),
                reverse=True,
            )
            notes = [parse_note(p) for p in note_paths]
            c = {"slug": class_dir.name, "title": meta["title"], "description": meta["description"], "count": len(notes)}
            classes.append(c)

            (out_dir / c["slug"]).mkdir(exist_ok=True)
            render_class_index(c, notes, out_dir, built_at)
            for n in notes:
                render_note(n, c, out_dir, built_at)

    render_home(classes, out_dir, built_at)
    print(f"Built site for {len(classes)} class(es) into {out_dir}")


if __name__ == "__main__":
    main()
