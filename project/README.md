# runtime
- `start-preview.sh`: production preview on port 3000 (builds if `dist/` missing) — point cloudflared at `http://127.0.0.1:3000`.
- `start-dev.sh`: dev server on port 5173 — point cloudflared at `http://127.0.0.1:5173`.
- `vite.config.js` sets `allowedHosts: true` so random `*.trycloudflare.com` subdomains pass Vite's host check.
