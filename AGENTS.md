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

## Always Spawn Multiple Sub-Agents (MANDATORY)

For EVERY task (feature, fix, refactor, research, docs), you MUST split work across 2-4 parallel sub-agents. Do not do the whole task yourself. Your job is to plan, delegate, integrate, verify, then commit.

### Why
- Speed: independent slices run in parallel.
- Quality: separate implementer + reviewer catches issues.
- Coverage: research, implementation, and verification happen at once.

### Required workflow
1. Plan: break the task into 2-4 concrete, self-contained slices with disjoint files / scopes. Define what DONE looks like for each slice (files to change, output to return).
2. Spawn: call spawn_agent once per slice, in parallel in the same round. Inherit model (omit model field). Give each agent its slice, its file scope, repo path (/home/ubuntu/A1PlaywrightProject), and instruction to edit files directly in its workspace and return the list of files changed + summary.
3. Work locally in parallel: while sub-agents run, do non-overlapping work yourself (integration prep, shared types, test scaffolding). Do NOT redo their slices, do NOT wait idly.
4. Wait sparingly: only wait_agent when you are blocked on their output for integration. Prefer a long timeout (minutes) to avoid busy polling.
5. Integrate: collect changed file lists, merge / reconcile overlaps, run build / tests (npm run build, Playwright where relevant).
6. Review: spawn or reuse one agent as reviewer for the merged diff if the task touches logic/UI.
7. Close: close_agent each sub-agent when no longer needed. Do not leave completed agents open.
8. Commit + Pages: follow the Always Commit and Always Publish rules below.

### How to call it
- Spawn: multi_agent_v1__spawn_agent with message like: "In /home/ubuntu/A1PlaywrightProject, implement <slice>. Files in scope: <paths>. Edit files directly, then return: files changed + summary + test notes."
- Nudge / redirect: multi_agent_v1__send_input with target=<agent_id>, interrupt=true only to redirect.
- Collect: multi_agent_v1__wait_agent with targets=[<ids>], timeout_ms=180000 or longer.
- Cleanup: multi_agent_v1__close_agent with target=<agent_id> for each agent.
- Resume only if you closed too early: multi_agent_v1__resume_agent.

### Rules
- ALWAYS spawn 2+ agents, even for small tasks (e.g. slice A: implementation, slice B: tests/docs/review).
- Keep write scopes disjoint per agent (e.g. Agent-1: src/core/*, Agent-2: src/ui/*, Agent-3: tests + docs).
- Narrow each prompt to the concrete output you need next; include file paths and acceptance criteria.
- Do NOT spawn duplicate agents on the same unresolved slice; send_input to the existing agent instead.
- Do NOT keep agents open after integration; completed agents count toward concurrency limits until closed.
- If a slice is blocked on another slice, do that blocking slice yourself locally instead of delegating it.

### Example
Task: add mobile touch controls.
- Agent-1 (controls): implement touch joystick in src/core/controls.js, return files changed.
- Agent-2 (ui): add touch buttons / HUD in src/ui/*, return files changed.
- Agent-3 (verify): build + Playwright smoke test + docs notes, return results.
You: define interfaces between controls and UI, integrate the three outputs, run npm run build, commit, publish to Pages.

### Commit Example

```bash
git status
git add src/core/controls.js AGENTS.md
git commit -m "feat: add mobile FPS touch controls and auto-commit rule"
git push origin master
```
