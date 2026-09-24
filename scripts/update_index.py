#!/usr/bin/env python3
"""Regenerate classes/index.txt: one line per lecture note, oldest first within each class.

The Google Docs mirror (google-apps-script/Code.gs) reads this list to find notes, so run
this after adding notes and commit the result along with them.
"""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent
NOTE = re.compile(r"^\d{4}-\d{2}-\d{2}_.+\.md$")

paths = sorted(
    p.relative_to(ROOT).as_posix()
    for p in (ROOT / "classes").glob("*/*.md")
    if NOTE.match(p.name)
)
(ROOT / "classes" / "index.txt").write_text("".join(p + "\n" for p in paths), encoding="utf-8")
print(f"classes/index.txt: {len(paths)} notes")
