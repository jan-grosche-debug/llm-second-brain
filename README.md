# LLM Second Brain

A personal knowledge base made of plain Markdown files, **maintained by an AI agent** (Claude Code / Claude) instead of by hand. It is inspired by Andrej Karpathy's "LLM wiki" idea: you drop raw material into an inbox, and the agent turns it into a linked, sourced and always-current wiki.

I use this setup daily across all my Claude surfaces. It has two strictly separated brains, one personal (studies, fitness, finances) and one for my side business. This repository contains the **structure, rules and automation**, not my personal content.

## How it works

```
Second Brain/
  CLAUDE.md                 global rules (two brains, never mixed)
  Personal/                 ← copy of brain-template/
  Business/                 ← copy of brain-template/
    CLAUDE.md               rules for the agent: ingest, answer, log, lint
    raw/inbox/              drop anything here
    raw/<topic>/            originals, never modified
    wiki/start.md           cockpit: goals, priorities, open questions
    wiki/index.md           catalogue of all pages
    wiki/log.md             append-only change log
    wiki/live-sources.md    where changing numbers really live
    wiki/{people,concepts,topics,sources}/
```

**Core rules the agent follows:**
- **Inbox first.** New files are ingested before anything else: the file is filed with a date, gets a source summary, and every affected page is updated and linked.
- **Every claim has a source.** Unknowns are marked `[open]` and collected in the cockpit.
- **Contradictions are flagged, never overwritten.** They are marked with `> [!warning] Contradiction` and both sources.
- **Changing numbers carry a date.** They are written as `value (as of YYYY-MM-DD, source: …)`, and the agent checks the live source instead of trusting stale values.
- **Knowledge compounds.** Useful answers (comparisons, analyses) become new wiki pages.
- **Linting.** On request the agent finds orphan pages, stale dates, duplicates and resolved questions.
- **No secrets in the brain.** Passwords, tokens and account numbers are never stored.

## What's included

| Path | Purpose |
|---|---|
| `CLAUDE.md` | Global rules for both brains |
| `brain-template/` | Ready-to-copy brain with rules, cockpit, index, log |
| `hooks/session-start-brain.js` | Claude Code **SessionStart hook** that injects the matching brain's cockpit (and the current project's note) into every session |
| `skills/brain-maintenance/` | Claude **skill** that files facts and decisions from a session into the right brain |
| `project-packages/_template/` | Template instructions for new projects that tie each project back to its brain page |

## Setup

1. Copy `brain-template/` twice (e.g. `Personal/` and `Business/`) next to the root `CLAUDE.md`. A synced folder such as Google Drive works well.
2. Open the folder in [Obsidian](https://obsidian.md) if you want graph view and backlinks (optional).
3. Register the hook in `~/.claude/settings.json` and set `BRAIN_ROOT`.
4. Add the `brain-maintenance` skill to Claude and optionally schedule a daily maintenance run.

## License

MIT
