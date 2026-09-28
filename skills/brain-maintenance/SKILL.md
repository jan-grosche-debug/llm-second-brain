---
name: brain-maintenance
description: Maintain the owner's Second Brain. File new facts, decisions and status updates from the session into the correct brain (Personal or Business). Use on "update the brain", at the end of larger tasks and in scheduled maintenance runs.
---

# Brain maintenance

1. **Pick the brain.** Personal topics go to `Personal/`, business topics to `Business/`. Never mix them. If unclear, ask.
2. **Inbox first.** Ingest everything in `<brain>/raw/inbox/` according to that brain's `CLAUDE.md`.
3. **Collect the changes.** From the session, list the new facts, decisions, plans, preferences and status changes the owner actually stated or confirmed. Leave out your own guesses.
4. **Write.**
   - Extend existing pages; create a new one only if no page covers the subject (check `index.md` first).
   - Changing numbers are always written as `value (as of YYYY-MM-DD, source: …)`.
   - If a new fact contradicts an existing one, mark it with `> [!warning] Contradiction` and both sources. Never overwrite it silently.
   - Never store secrets (passwords, tokens, card or account numbers).
5. **Bookkeeping.** Update `index.md` for new pages and `start.md` if priorities or open questions changed, and append `## [YYYY-MM-DD] update | <title>` to `log.md`.
6. **Report.** In one or two lines, list the pages you changed.
