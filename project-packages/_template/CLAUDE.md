# {{PROJECT_NAME}}: instructions for the AI agent (created {{DATE}})

This project belongs to the **{{BRAIN}}** brain.

## 0. Goal & scope
- Goal: *(fill in once agreed in the chat)*
- Working directory: `{{FOLDER}}`

## 1. Read first (every session)
1. `<Second Brain>/{{BRAIN}}/wiki/start.md` and, if it exists, `wiki/topics/project-{{SLUG}}.md`.
2. `README.md` in this folder.

## 2. Communication
- Analysis and numbered proposals with a clear recommendation first, then implementation.
- Keep answers short: the result plus what is still open.
- Be honest: only say "works" when a real test shows it. Label anything unverified.

## 3. Git & GitHub
- Pull before any work. Never commit directly to `main`: use a feature branch and a pull request.
- Never commit `.env`, databases, tokens, passwords, webhooks or payment data. Check `git status` and run a secret scan (e.g. gitleaks) before every commit.

## 4. Safety
- Make a dated backup before any risky change. Never delete permanently: move files to `_to_delete/` instead.
- Payments and purchases are always confirmed by the owner.

## 5. Memory
- At the end of every session, write the project status to `{{BRAIN}}/wiki/topics/project-{{SLUG}}.md` and add an entry to `log.md`.
