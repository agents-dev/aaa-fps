# AGENTS.md - aaa-fps

## Always Commit After Task Completion (MANDATORY)

After completing **any** task, sub-task, or fix, you MUST commit before reporting done. No exceptions.

### Required workflow

1. Verify changes: `git status` + `git diff`
2. Stage: `git add -A` (respects `.gitignore` - never force-add `node_modules/`, `dist/`, `tmp/`)
3. Commit: `git commit -m "<concise imperative summary>"` - one commit per task, atomic
4. Push: `git push origin HEAD` (repo is `agents-dev/aaa-fps`, branch `master` by default) - always push if remote exists
5. Verify: `git log --oneline -3` + `git status` clean

### Rules

- Do NOT batch multiple unrelated tasks into one commit
- Do NOT leave working tree dirty after reporting completion
- Do NOT amend or force-push without explicit user instruction
- If task involved UI/logic, test/build first (`npm run build` or `npm run dev` + Playwright) then commit
- Commit message must describe WHAT changed and WHY, e.g., `feat: mobile touch controls` not `fix stuff`

### Example

```bash
git status
git add src/core/controls.js AGENTS.md
git commit -m "feat: add mobile FPS touch controls and auto-commit rule"
git push origin master
```
