# AGENTS.md - aaa-fps

## Always Commit After Task Completion (MANDATORY)

After completing **any** task, sub-task, or fix, you MUST commit before reporting done. No exceptions.

### Required workflow

1. Verify changes: `git status` + `git diff`
2. Stage: `git add -A` (respects `.gitignore` - never force-add `node_modules/`, `dist/`, `tmp/`)
3. Commit: `git commit -m "<concise imperative summary>"` - one commit per task, atomic
4. Push: `git push origin HEAD` (repo is `agents-dev/aaa-fps`, branch `master` by default) - always push if remote exists
5. Verify: `git log --oneline -3` + `git status` clean

## Always Publish to GitHub Pages (MANDATORY)

After completing **any** task that changes site content (`src/`, `public/`, `index.html`, `vite.config.js`, `package.json`, `README.md`, `screenshots/`), you MUST publish the update to GitHub Pages in the SAME turn — do not leave Pages stale.

### Required Pages workflow (immediately after commit/push to `master`)

1. Build: `npm run build` (requires `vite.config.js` `base: '/aaa-fps/'` for `https://agents-dev.github.io/aaa-fps/` subpath)
2. Deploy `dist/` to orphan branch `gh-pages`:
   ```bash
   # save dist outside worktree
   TMP_DIST=$(mktemp -d) && cp -r dist/* "$TMP_DIST"/
   git checkout --orphan gh-pages-tmp
   git rm -rf . 2>/dev/null || true
   # sandbox blocks rm -rf on dist/node_modules — use python if needed
   python3 -c "import shutil, pathlib; [shutil.rmtree(p) for p in pathlib.Path('.').iterdir() if p.name not in ['.git']]" 2>/dev/null || true
   cp -r "$TMP_DIST"/* . && touch .nojekyll
   git add -A && git commit -m "deploy: GH Pages - <short reason> (<master-sha>)"
   git branch -M gh-pages && git push -f origin gh-pages
   git checkout master && rm -rf "$TMP_DIST"
   ```
   Alternative if `gh-pages` already exists: checkout `gh-pages`, clean with python, copy `TMP_DIST`, commit `deploy: ...`, push, checkout `master`.
3. Verify: `gh api repos/agents-dev/aaa-fps/pages --jq '{status, html_url}'` must be `built` and `curl -I https://agents-dev.github.io/aaa-fps/` must be `200` and `dist/index.html` must reference `/aaa-fps/assets/`
4. If build is `queued`/`building`, poll every 10s until `built` or `errored`

### Pages Rules

- Do NOT skip Pages deploy when site files changed — stale Pages is a failure
- Do NOT deploy if only `AGENTS.md`/`.gitignore` changed with zero site effect (optional, but allowed to deploy anyway)
- Do NOT use `git push --force` on `master` — only on `gh-pages` orphan deploy
- Keep `agents.md -> AGENTS.md` symlink intact

### Commit Rules

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
