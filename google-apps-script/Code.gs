/**
 * Granola notes -> Google Docs sync.  (Version 6)
 *
 * Reads the lecture notes archived in the GitHub repo (classes/<class>/YYYY-MM-DD_<slug>.md,
 * written daily by the Claude Granola sync routine) and appends each new lecture to two
 * Google Docs per class, inside Drive's "Granola Notes/<class>/" folder:
 *
 *   "<class> – Summaries"    the AI summary of every lecture
 *   "<class> – Transcripts"  the full transcript of every lecture
 *
 * Docs are only ever appended to, never rebuilt, so they keep their links, comments and
 * anything already in them, even if a note is later deleted from Granola or the repo.
 * Each lecture section ends with a "Granola note: <url>" line; that line is how the script
 * knows a lecture is already in a doc, so nothing is ever added twice.
 *
 * Setup: paste this file into a new project at script.google.com, then run `setup` once.
 */

const ROOT_FOLDER_ID = '1mDkl81JyZdHODQBqyAfUWODThyTWemG5'; // Drive: "Granola Notes"
const REPO = 'emilyvanasse/Granola-Notes';
const BRANCH = 'main';
const TIME_ZONE = 'America/New_York';
const DAILY_HOUR = 18; // runs between 6 and 7pm Eastern, after the 5pm Granola -> GitHub sync

// Google Docs stop accepting text a little past 1,000,000 characters. When a doc would pass
// this, the next lecture goes into "<class> – Transcripts (Part 2)" and you get an email.
const DOC_CHAR_LIMIT = 900000;
// Apps Script kills runs at 6 minutes; stop cleanly before that and resume a minute later.
const MAX_RUNTIME_MS = 3.5 * 60 * 1000;

const KINDS = ['Summaries', 'Transcripts'];
const REPORT_KEY = 'PENDING_REPORT'; // lectures added by runs that haven't been emailed yet
const SOURCE_LINE = /^(Granola note|Archive file): (\S+)\s*$/gm;

/** Run once by hand: installs the daily trigger and does the first full sync. */
function setup() {
  ScriptApp.getProjectTriggers()
    .filter(t => ['syncNotes', 'continueSync'].indexOf(t.getHandlerFunction()) !== -1)
    .forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('syncNotes')
    .timeBased().everyDays(1).atHour(DAILY_HOUR).inTimezone(TIME_ZONE)
    .create();
  syncNotes();
}

/** One-off trigger target used to resume a sync that ran out of time. */
function continueSync() {
  syncNotes();
}

function syncNotes() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) return; // another run is already in progress
  try {
    ScriptApp.getProjectTriggers()
      .filter(t => t.getHandlerFunction() === 'continueSync')
      .forEach(t => ScriptApp.deleteTrigger(t));

    const started = Date.now();
    const root = DriveApp.getFolderById(ROOT_FOLDER_ID);
    const byClass = listRepoNotes_();
    const props = PropertiesService.getScriptProperties();
    const report = JSON.parse(props.getProperty(REPORT_KEY) || '[]'); // carried over from a resumed run
    let added = 0;

    for (const cls of Object.keys(byClass).sort()) {
      const folder = getOrCreateFolder_(root, cls);
      const docs = {};
      KINDS.forEach(kind => { docs[kind] = new ClassDoc_(folder, cls, kind); });

      for (const path of byClass[cls]) {
        if (Date.now() - started > MAX_RUNTIME_MS) {
          KINDS.forEach(kind => docs[kind].close());
          let saved = JSON.stringify(report); // emailed when the sync finishes
          if (saved.length > 8000) { // Script Properties values max out around 9 KB; drop links
            saved = JSON.stringify(report.map(r => ({ cls: r.cls, title: r.title, date: r.date, classDesc: r.classDesc })));
          }
          props.setProperty(REPORT_KEY, saved);
          ScriptApp.newTrigger('continueSync').timeBased().after(60 * 1000).create();
          console.log('Out of time after ' + added + ' lecture(s); resuming in a minute.');
          return;
        }

        const note = parseNote_(fetchText_(rawUrl_(path)), path);
        const missing = KINDS.filter(kind => !docs[kind].has(note.key));
        if (!missing.length) continue;
        missing.forEach(kind => docs[kind].append(note, kind));
        report.push({ cls: cls, title: note.title, date: note.date, classDesc: note.classDesc,
          summaries: docs.Summaries.url(), transcripts: docs.Transcripts.url() });
        added++;
        console.log('Added ' + path + ' to ' + missing.join(' + '));
      }
      KINDS.forEach(kind => docs[kind].close());
    }
    console.log('Done. ' + added + ' new lecture(s) added.');
    sendReport_(report, byClass);
    props.deleteProperty(REPORT_KEY);
  } finally {
    lock.releaseLock();
  }
}

// ---------------------------------------------------------------------------------------
// GitHub

/**
 * Returns { "<class>": ["classes/<class>/2026-09-03_x.md", ...] } sorted oldest first.
 * Reads classes/index.txt (kept up to date by the daily sync) rather than GitHub's API,
 * whose anonymous rate limit is shared with everyone else on Google's servers.
 */
function listRepoNotes_() {
  const index = fetchText_(rawUrl_('classes/index.txt') + '?t=' + Date.now()); // skip stale caches
  const byClass = {};
  index.split(/\r?\n/).forEach(line => {
    const path = line.trim();
    const m = path.match(/^classes\/([^/]+)\/\d{4}-\d{2}-\d{2}_[^/]*\.md$/);
    if (!m) return;
    (byClass[m[1]] = byClass[m[1]] || []).push(path);
  });
  Object.keys(byClass).forEach(cls => byClass[cls].sort());
  return byClass;
}

function rawUrl_(path) {
  return 'https://raw.githubusercontent.com/' + REPO + '/' + BRANCH + '/' +
    path.split('/').map(encodeURIComponent).join('/');
}

function fetchText_(url) {
  const res = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  if (res.getResponseCode() !== 200) {
    throw new Error('GET ' + url + ' failed: ' + res.getResponseCode() + ' ' +
      res.getContentText().slice(0, 300));
  }
  return res.getContentText('UTF-8');
}

// ---------------------------------------------------------------------------------------
// Note parsing (format documented in the repo's CLAUDE.md)

function parseNote_(md, path) {
  const field = name => {
    const m = md.match(new RegExp('^- \\*\\*' + name + ':\\*\\* *(.*)$', 'm'));
    return m ? m[1].trim() : '';
  };
  const titleMatch = md.match(/^# +(.+)$/m);
  const summaryAt = md.search(/^## Summary\s*$/m);
  const transcriptAt = md.search(/^## Transcript\s*$/m);
  const url = (field('Granola note').match(/https?:\/\/[^\s)>]+/) || [''])[0];
  return {
    key: url || path,
    sourceLabel: url ? 'Granola note' : 'Archive file',
    title: titleMatch ? titleMatch[1].trim() : path,
    date: field('Date'),
    classDesc: (field('Class').split(' — ')[1] || '').trim(),
    summary: summaryAt === -1 ? '' : md.slice(summaryAt, transcriptAt === -1 ? undefined : transcriptAt)
      .replace(/^## Summary\s*$/m, '').trim(),
    transcript: transcriptAt === -1 ? '' : md.slice(transcriptAt).replace(/^## Transcript\s*$/m, '').trim(),
  };
}

// ---------------------------------------------------------------------------------------
// Drive / Docs

function getOrCreateFolder_(parent, name) {
  const it = parent.getFoldersByName(name);
  while (it.hasNext()) {
    const f = it.next();
    if (!f.isTrashed()) return f;
  }
  return parent.createFolder(name);
}

/**
 * One logical doc ("<class> – Transcripts"), which may span "(Part N)" continuation docs
 * if Google's size limit is reached. Tracks which lectures it already contains.
 */
function ClassDoc_(folder, cls, kind) {
  this.folder = folder;
  this.baseName = cls + ' – ' + kind;
  this.keys = new Set();
  this.parts = []; // [{ part, file }]
  const re = new RegExp('^' + escapeRegExp_(this.baseName) + '(?: \\(Part (\\d+)\\))?$');
  const it = folder.getFilesByType(MimeType.GOOGLE_DOCS);
  while (it.hasNext()) {
    const f = it.next();
    const m = !f.isTrashed() && f.getName().match(re);
    if (m) this.parts.push({ part: m[1] ? Number(m[1]) : 1, file: f });
  }
  this.parts.sort((a, b) => a.part - b.part);
  this.parts.forEach(p => {
    const text = DocumentApp.openById(p.file.getId()).getBody().getText();
    let m;
    SOURCE_LINE.lastIndex = 0;
    while ((m = SOURCE_LINE.exec(text))) this.keys.add(m[2]);
  });
  this.doc = null; // opened lazily, only when something is appended
}

/** Link to the doc new lectures currently go into (the latest part). */
ClassDoc_.prototype.url = function () {
  return this.parts.length ? this.parts[this.parts.length - 1].file.getUrl() : '';
};

ClassDoc_.prototype.has = function (key) {
  return this.keys.has(key);
};

ClassDoc_.prototype.append = function (note, kind) {
  const content = kind === 'Summaries' ? note.summary : note.transcript;
  if (!this.doc) {
    if (this.parts.length === 0) this.doc = this.createPart_(1);
    else this.doc = DocumentApp.openById(this.parts[this.parts.length - 1].file.getId());
  }
  let body = this.doc.getBody();
  const existing = body.getText().trim();
  if (!existing || existing === this.doc.getName()) this.setTitle_(this.doc); // left by an interrupted run
  const length = body.getText().length;
  if (length + content.length > DOC_CHAR_LIMIT && length > 1000) {
    const next = this.parts[this.parts.length - 1].part + 1;
    this.doc.saveAndClose();
    this.doc = this.createPart_(next);
    body = this.doc.getBody();
    MailApp.sendEmail(Session.getEffectiveUser().getEmail(),
      'Granola notes: started "' + this.doc.getName() + '"',
      'The previous "' + this.baseName + '" doc is close to Google Docs\' size limit, so new ' +
      'lectures now go into:\n' + this.doc.getUrl());
  }

  setPlain_(body.appendParagraph(''), note.title + (note.date ? ' — ' + note.date : ''))
    .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  if (!content) {
    setPlain_(body.appendParagraph(''), '(Not available for this lecture.)').editAsText().setItalic(true);
  } else if (kind === 'Summaries') {
    appendMarkdown_(body, content);
  } else {
    appendTranscript_(body, content);
  }
  const source = setPlain_(body.appendParagraph(''), note.sourceLabel + ': ' + note.key);
  const sourceEnd = source.getText().length - 1;
  source.editAsText().setFontSize(0, sourceEnd, 9).setForegroundColor(0, sourceEnd, '#777777');
  if (/^https?:\/\//.test(note.key)) {
    const start = note.sourceLabel.length + 2;
    source.editAsText().setLinkUrl(start, start + note.key.length - 1, note.key);
  }
  this.keys.add(note.key);
  this.close(); // save after every lecture: Docs rejects too many unsaved edits in one session
};

ClassDoc_.prototype.createPart_ = function (part) {
  const name = part === 1 ? this.baseName : this.baseName + ' (Part ' + part + ')';
  const doc = DocumentApp.create(name);
  const file = DriveApp.getFileById(doc.getId());
  file.moveTo(this.folder);
  this.setTitle_(doc);
  this.parts.push({ part: part, file: file });
  return doc;
};

ClassDoc_.prototype.setTitle_ = function (doc) {
  const title = doc.getBody().getParagraphs()[0]; // Paragraph.setText returns nothing, so no chaining
  title.setText(doc.getName());
  title.setHeading(DocumentApp.ParagraphHeading.TITLE);
};

ClassDoc_.prototype.close = function () {
  if (this.doc) this.doc.saveAndClose();
  this.doc = null;
};

// ---------------------------------------------------------------------------------------
// Daily email

/** Emails what this sync added, grouped by class, or that nothing was new. */
function sendReport_(report, byClass) {
  const classes = [];
  report.forEach(r => { if (classes.indexOf(r.cls) === -1) classes.push(r.cls); });
  const n = report.length;
  const subject = n
    ? 'Granola notes: ' + n + ' new lecture' + (n === 1 ? '' : 's') + ' added (' + classes.join(', ') + ')'
    : 'Granola notes: nothing new today (' + Utilities.formatDate(new Date(), TIME_ZONE, 'EEE, MMM d') + ')';

  // Most recent lecture per class, so a quiet stretch is easy to tell apart from a broken sync.
  const latest = Object.keys(byClass).sort().map(cls => {
    const m = byClass[cls][byClass[cls].length - 1].match(/\/(\d{4})-(\d{2})-(\d{2})_/);
    return { cls: cls, when: m
      ? Utilities.formatDate(new Date(+m[1], +m[2] - 1, +m[3], 12), TIME_ZONE, 'EEE, MMM d') : 'unknown' };
  });

  const text = [];
  if (n) {
    text.push('New lectures added to your Google Docs today:', '');
    classes.forEach(cls => {
      const items = report.filter(r => r.cls === cls);
      text.push(cls + (items[0].classDesc ? ' — ' + items[0].classDesc : ''));
      items.forEach(r => text.push('  • ' + r.title + (r.date ? ' — ' + r.date : '')));
      const link = items.filter(r => r.summaries).pop();
      if (link) text.push('  Summaries: ' + link.summaries, '  Transcripts: ' + link.transcripts);
      text.push('');
    });
  } else {
    text.push('No new lectures were found today, so your docs are unchanged.', '');
  }
  text.push('Most recent lecture on file:');
  latest.forEach(l => text.push('  ' + l.cls + ': ' + l.when));

  MailApp.sendEmail({
    to: Session.getEffectiveUser().getEmail(),
    subject: subject,
    body: text.join('\n'),
    htmlBody: reportHtml_(report, classes, latest),
    name: 'Granola Notes',
  });
}

/** The HTML email. Table layout with inline styles, since that's what email clients render. */
function reportHtml_(report, classes, latest) {
  const C = { ink: '#111827', muted: '#6b7280', faint: '#9ca3af', line: '#e5e7eb', soft: '#f9fafb',
    page: '#f3f4f6', accent: '#4f46e5', accentSoft: '#eef2ff', accentInk: '#4338ca' };
  const font = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const n = report.length;
  const today = Utilities.formatDate(new Date(), TIME_ZONE, 'EEEE, MMMM d');
  const headline = n ? n + ' new lecture' + (n === 1 ? '' : 's') + ' added' : 'No new lectures today';
  const sub = n
    ? 'Across ' + classes.length + ' class' + (classes.length === 1 ? '' : 'es') + ' · ' + today
    : 'Your docs are up to date · ' + today;
  const button = (href, label, primary) => '<a href="' + esc_(href) + '" style="display:inline-block;' +
    'padding:9px 16px;margin:0 8px 8px 0;border-radius:6px;font-size:13px;font-weight:600;' +
    'text-decoration:none;' + (primary
      ? 'background:' + C.accent + ';color:#ffffff;border:1px solid ' + C.accent + ';'
      : 'background:' + C.accentSoft + ';color:' + C.accentInk + ';border:1px solid #c7d2fe;') +
    '">' + label + '</a>';

  const cards = classes.map(cls => {
    const items = report.filter(r => r.cls === cls);
    const link = items.filter(r => r.summaries).pop();
    const rows = items.map(r => {
      const when = (r.date || '').replace(/^(\w{3} \d{1,2}), \d{4} /, '$1 · ');
      return '<tr><td style="padding:12px 20px;border-top:1px solid ' + C.line + ';">' +
        '<div style="font-size:14px;font-weight:600;color:' + C.ink + ';">' + esc_(r.title) + '</div>' +
        (when ? '<div style="font-size:13px;color:' + C.muted + ';margin-top:3px;">' + esc_(when) + '</div>' : '') +
        '</td></tr>';
    }).join('');
    return '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;' +
      'border:1px solid ' + C.line + ';border-radius:10px;margin:0 0 16px 0;background:#ffffff;">' +
      '<tr><td style="padding:14px 20px;background:' + C.soft + ';border-radius:10px 10px 0 0;">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td style="font-size:15px;font-weight:700;color:' + C.ink + ';">' + esc_(cls) +
      (items[0].classDesc ? '<span style="font-weight:400;color:' + C.muted + ';"> &nbsp;·&nbsp; ' +
        esc_(items[0].classDesc) + '</span>' : '') + '</td>' +
      '<td align="right" style="white-space:nowrap;"><span style="display:inline-block;padding:3px 10px;' +
      'border-radius:999px;background:' + C.accentSoft + ';color:' + C.accentInk + ';font-size:12px;font-weight:600;">' +
      items.length + ' new</span></td></tr></table></td></tr>' + rows +
      (link ? '<tr><td style="padding:14px 20px 8px 20px;border-top:1px solid ' + C.line + ';">' +
        button(link.summaries, 'Open Summaries', true) + button(link.transcripts, 'Open Transcripts', false) +
        '</td></tr>' : '') +
      '</table>';
  }).join('');

  const empty = '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px dashed ' +
    C.line + ';border-radius:10px;margin:0 0 16px 0;"><tr><td align="center" style="padding:28px 20px;">' +
    '<div style="font-size:15px;font-weight:600;color:' + C.ink + ';">Nothing new to add</div>' +
    '<div style="font-size:13px;color:' + C.muted + ';margin-top:4px;">No lectures were recorded since the last update.</div>' +
    '</td></tr></table>';

  const latestRows = latest.map(l => '<tr><td style="padding:6px 0;font-size:13px;color:' + C.ink + ';">' +
    esc_(l.cls) + '</td><td align="right" style="padding:6px 0;font-size:13px;color:' + C.muted + ';">' +
    esc_(l.when) + '</td></tr>').join('');

  return '<div style="margin:0;padding:24px 12px;background:' + C.page + ';font-family:' + font + ';">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">' +
    // Header
    '<tr><td style="background:' + C.ink + ';border-radius:12px 12px 0 0;padding:26px 28px;">' +
    '<div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:' + C.faint + ';font-weight:600;">' +
    'Granola Notes &nbsp;·&nbsp; Daily update</div>' +
    '<div style="font-size:24px;font-weight:700;color:#ffffff;margin-top:8px;">' + esc_(headline) + '</div>' +
    '<div style="font-size:14px;color:#d1d5db;margin-top:4px;">' + esc_(sub) + '</div></td></tr>' +
    // Body
    '<tr><td style="background:#ffffff;padding:24px 28px 8px 28px;">' + (n ? cards : empty) + '</td></tr>' +
    // Latest lecture per class
    '<tr><td style="background:#ffffff;padding:4px 28px 24px 28px;">' +
    '<div style="border-top:1px solid ' + C.line + ';padding-top:16px;font-size:11px;letter-spacing:1.2px;' +
    'text-transform:uppercase;color:' + C.faint + ';font-weight:600;margin-bottom:6px;">Latest lecture on file</div>' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' + latestRows + '</table></td></tr>' +
    // Footer
    '<tr><td style="background:' + C.soft + ';border-top:1px solid ' + C.line + ';border-radius:0 0 12px 12px;' +
    'padding:14px 28px;font-size:12px;color:' + C.faint + ';">Sent automatically after your Granola notes were ' +
    'copied into Google Docs. Your docs keep every lecture, even if it\'s later removed from Granola.</td></tr>' +
    '</table></div>';
}

function esc_(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ---------------------------------------------------------------------------------------
// Minimal Markdown -> Docs (headings, bullet/numbered lists, tables, **bold**, [links](url))

function appendMarkdown_(body, md) {
  const lines = md.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;

    if (/^\s*\|/.test(line)) {
      const rows = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) {
        const cells = lines[i].trim().replace(/^\||\|$/g, '').split('|').map(c => cleanText_(c.trim()));
        if (!cells.every(c => /^:?-{2,}:?$/.test(c))) rows.push(cells);
        i++;
      }
      i--;
      if (!rows.length) continue;
      const width = Math.max.apply(null, rows.map(r => r.length));
      const table = body.appendTable(rows.map(r => r.concat(Array(width - r.length).fill(''))));
      if (table.getNumRows() > 0) table.getRow(0).editAsText().setBold(true);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      const level = heading[1].length <= 2 ? DocumentApp.ParagraphHeading.HEADING2
        : heading[1].length === 3 ? DocumentApp.ParagraphHeading.HEADING3
        : DocumentApp.ParagraphHeading.HEADING4;
      appendRich_(body.appendParagraph(''), heading[2]).setHeading(level);
      continue;
    }

    const item = line.match(/^(\s*)([-*+]|\d+[.)])\s+(.*)$/);
    if (item) {
      const li = appendRich_(body.appendListItem(''), item[3]);
      li.setNestingLevel(Math.min(Math.floor(item[1].replace(/\t/g, '  ').length / 2), 8));
      li.setGlyphType(/\d/.test(item[2]) ? DocumentApp.GlyphType.NUMBER : DocumentApp.GlyphType.BULLET);
      continue;
    }

    appendRich_(body.appendParagraph(''), line.trim()).setHeading(DocumentApp.ParagraphHeading.NORMAL);
  }
}

/** Transcripts are verbatim speech: one paragraph per line, speaker label in bold. */
function appendTranscript_(body, text) {
  text.split(/\r?\n/).forEach(line => {
    if (!line.trim()) return;
    const p = setPlain_(body.appendParagraph(''), line.trim());
    const speaker = p.getText().match(/^([A-Z][\w .'-]{0,30}):\s/);
    if (speaker) p.editAsText().setBold(0, speaker[1].length, true);
  });
}

/** Sets text with no inherited formatting (new paragraphs copy the previous one's style). */
function setPlain_(el, text) {
  el.setText(text);
  if (el.setHeading) el.setHeading(DocumentApp.ParagraphHeading.NORMAL);
  if (text.length) el.editAsText().setBold(false).setItalic(false).setLinkUrl(null);
  return el;
}

/** Sets the element's text from inline markdown and applies bold/link formatting. */
function appendRich_(el, raw) {
  let text = '';
  const bold = [];
  const links = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
  let last = 0;
  let m;
  while ((m = re.exec(raw))) {
    text += cleanText_(raw.slice(last, m.index));
    const start = text.length;
    if (m[1] !== undefined) {
      text += cleanText_(m[1]);
      if (text.length > start) bold.push([start, text.length - 1]);
    } else {
      text += cleanText_(m[2]);
      if (text.length > start) links.push([start, text.length - 1, m[3]]);
    }
    last = re.lastIndex;
  }
  text += cleanText_(raw.slice(last));
  setPlain_(el, text);
  const t = el.editAsText();
  bold.forEach(r => t.setBold(r[0], r[1], true));
  links.forEach(r => t.setLinkUrl(r[0], r[1], r[2]));
  return el;
}

function cleanText_(s) {
  return s
    .replace(/\\([\\`*_{}\[\]()#+\-.!~&|>])/g, '$1')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'").replace(/&amp;/g, '&');
}

function escapeRegExp_(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
