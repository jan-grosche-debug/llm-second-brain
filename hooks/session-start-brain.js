// Claude Code SessionStart hook: injects the matching brain's cockpit (and the
// project note for the current folder) into every new session, so the agent
// always starts with up-to-date context.
//
// Install: add to ~/.claude/settings.json
//   "hooks": { "SessionStart": [{ "hooks": [{ "type": "command",
//     "command": "node /path/to/hooks/session-start-brain.js" }] }] }
//
// Configure BRAIN_ROOT (env var or the candidates below) and PROJECTS.
const fs = require('fs');
const path = require('path');
const os = require('os');

const CANDIDATES = [
  process.env.BRAIN_ROOT,
  path.join(os.homedir(), 'Documents', 'Second Brain'),
].filter(Boolean);
const ROOT = CANDIDATES.find((p) => { try { return fs.statSync(p).isDirectory(); } catch { return false; } });

// working-directory pattern -> [brain, note inside wiki/]
const PROJECTS = [
  [/bookkeeping/i, 'Business', 'topics/project-bookkeeping.md'],
  [/uni|course/i, 'Personal', 'topics/studies.md'],
  [/second brain[\\/]business/i, 'Business', null],
];
const DEFAULT_BRAIN = 'Personal';

function read(p, max = 4000) {
  try { const t = fs.readFileSync(p, 'utf8'); return t.length > max ? t.slice(0, max) + '\n…(truncated)' : t; }
  catch { return null; }
}

function main(input) {
  let cwd = process.cwd();
  try { const j = JSON.parse(input || '{}'); if (j.cwd) cwd = j.cwd; } catch {}
  if (!ROOT) return 'Second Brain not found (set BRAIN_ROOT). Tell the owner.';

  let brain = DEFAULT_BRAIN, note = null;
  for (const [re, b, n] of PROJECTS) if (re.test(cwd)) { brain = b; note = n; break; }

  const parts = [];
  parts.push(`# Second Brain – binding for this session
Path: ${ROOT}
Two separate brains (never mix). Matching brain for this session: **${brain}**.
Rules: check ${brain}/raw/inbox first; answer from ${brain}/wiki with sources; write new facts, decisions and preferences back into the wiki (plus log.md) before the session ends. Details: ${path.join(ROOT, brain, 'CLAUDE.md')}.`);
  const cockpit = read(path.join(ROOT, brain, 'wiki', 'start.md'));
  if (cockpit) parts.push(`## Cockpit (${brain}/wiki/start.md)\n${cockpit}`);
  if (note) {
    const t = read(path.join(ROOT, brain, 'wiki', note), 3000);
    if (t) parts.push(`## Note for the current project (${note})\n${t}`);
  }
  return parts.join('\n\n');
}

let buf = '';
let done = false;
process.stdin.setEncoding('utf8');
process.stdin.on('data', (d) => { buf += d; });
process.stdin.on('end', () => {
  if (done) return; done = true;
  let ctx;
  try { ctx = main(buf); } catch (e) { ctx = 'Second Brain hook error: ' + e.message; }
  process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: 'SessionStart', additionalContext: ctx } }));
});
setTimeout(() => process.stdin.emit('end'), 1500).unref?.();
