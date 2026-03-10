#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck disable=SC1090
  . "$NVM_DIR/nvm.sh"
else
  echo "nvm not found at $NVM_DIR"
  exit 1
fi

cd "$ROOT_DIR"
nvm use
corepack enable
corepack prepare pnpm@10.6.0 --activate
pnpm install
