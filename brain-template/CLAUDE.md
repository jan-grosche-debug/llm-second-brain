# Brain rules for the AI agent

You maintain this wiki for its owner. They provide content and questions, and you keep everything up to date.

## Layout
- `raw/` holds originals and copies of sources. Never modify them. `raw/inbox/` is the intake tray.
- `wiki/` is maintained by you only:
  - `start.md`: the cockpit (goals with status, top 3 priorities, open decisions, open questions)
  - `index.md`: a catalogue of all pages, one line each with a short description
  - `log.md`: an append-only change log, `## [YYYY-MM-DD] ingest|answer|update|lint | Title`
  - `live-sources.md`: where changing numbers actually live
  - `people/`, `concepts/`, `topics/`, `sources/` (one summary per ingested source)

## Always first
1. Check `raw/inbox/` before anything else. If it contains anything besides `README.md`, ingest it first, then handle the actual request.

## Ingest ("ingest this" or a new file in the inbox)
1. Move the file to `raw/<topic>/` and put the date in its name. For non-text files (PDF, image), add a `.md` transcript next to it.
2. Create a page in `wiki/sources/` with the content, the date and the key statements.
3. Extend and link every affected person, topic and concept page. Add to existing pages and never create duplicates.
4. Update `index.md`, `log.md` and, if needed, `start.md`.

## Answering questions
- Answer from the wiki and cite the page (`[[page]]`). If something is missing, say so and add it as an open question.
- If an answer produces reusable knowledge (an analysis, a comparison, the basis for a decision), save it as its own page in `topics/` or `concepts/` and link it.

## End of every session
- Before the session ends, write new facts, decisions, plans and preferences into the affected pages without being reminded. Cite the source as `(owner, conversation YYYY-MM-DD)` and add an entry to `log.md`.

## Quality rules
- Every statement needs a source. Never invent anything: mark uncertain points as `[open]` and add them to the open questions in `start.md`.
- Never silently overwrite a contradiction between sources. Mark it instead:
  `> [!warning] Contradiction` with both statements, both sources and the date.
- Never store changing numbers (prices, balances, stock, body weight, lab values, thresholds) as fixed truth. Always write `value (as of YYYY-MM-DD, source: …)`. When asked for such a number, look it up in the live source instead of repeating the wiki value.
- Never store secrets such as passwords, tokens, card or account numbers.

## Cleanup ("lint the wiki")
Find and fix, or report: contradictions, dates older than 90 days, orphan pages (not linked from anywhere), missing links, resolved open questions and duplicates. Log the result in `log.md`.

## Format
- Markdown with Obsidian links `[[name]]`. File names are lowercase and hyphenated, without special characters.
- Every wiki page starts with a header containing `type`, `updated` and `sources`.
