#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
if [ ! -d "dist" ] || [ -z "$(ls -A dist 2>/dev/null)" ]; then
  npm run build
fi
exec npx vite preview --host 0.0.0.0 --port 3000 --strictPort
