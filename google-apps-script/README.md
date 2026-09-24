# Google Docs mirror

`Code.gs` is a Google Apps Script that copies every lecture archived in this repo into
Google Drive, in `Granola Notes/<class>/`:

- **`<class> – Summaries`**: the AI summary of each lecture
- **`<class> – Transcripts`**: the full transcript of each lecture

Each lecture gets a heading with its title and date. Docs are only ever appended to, so
they keep their links and comments, and nothing already in them is ever removed, even if
the note later disappears from Granola. Each lecture section ends with a small
"Granola note: …" line, and the script uses that line to recognize lectures it has
already added. Don't delete those lines, or the lecture will be added again.

It runs every day between 6 and 7pm Eastern, after the 5pm Claude routine has pushed
that day's Granola notes to `main`.

## One-time setup (about 5 minutes)

1. Go to <https://script.google.com> and click **New project**. Name it
   "Granola notes sync".
2. Delete the placeholder code in `Code.gs` and paste in the whole contents of
   [`Code.gs`](Code.gs) from this folder. Save (Ctrl/Cmd + S).
3. In the function dropdown at the top, choose **`setup`**, then click **Run**.
4. Google asks for permission. Click **Review permissions**, pick your account, then
   **Advanced → Go to Granola notes sync (unsafe)** → **Allow**. ("Unsafe" only means
   Google hasn't reviewed a script you wrote yourself.) The script asks for Drive and
   Docs access (to find the folders and write the docs), plus permission to fetch the
   notes from GitHub and to email you.
5. Wait for the log to say `Done.` The first run adds all existing lectures. If there are
   too many to finish in one go, the log says `resuming in a minute`, and the script
   finishes on its own.

That's it. `setup` also installed the daily trigger (visible under **Triggers**, the
clock icon). Running `setup` again is safe: it never duplicates anything.

## Good to know

- **Size limit.** A Google Doc holds about 1 million characters, and a lecture
  transcript is about 50,000. So a class's Transcripts doc fills up after roughly
  18–20 lectures. When that happens, the script starts
  `<class> – Transcripts (Part 2)` in the same folder and emails you the link. Nothing
  is lost or cut off.
- **New classes.** A new Granola folder shows up as a new `classes/<class>/` folder in
  the repo. The script then creates its Drive subfolder and two docs automatically.
- **Failures.** Apps Script emails you if a run fails. If the error mentions a GitHub
  `403` rate limit, create a GitHub token with no scopes, then add it under **Project
  Settings → Script properties** as `GITHUB_TOKEN`.
