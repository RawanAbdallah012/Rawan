#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
OUT="$ROOT/AlSawyTech-Proposal.pdf"
HTML="file://$ROOT/index.html"
PROFILE="$(mktemp -d /tmp/chrome-proposal-XXXXXX)"

cleanup() {
  rm -rf "$PROFILE" 2>/dev/null || true
}
trap cleanup EXIT

echo "Building PDF from $HTML"

set +e
timeout 75s google-chrome \
  --headless=new \
  --disable-gpu \
  --no-pdf-header-footer \
  --virtual-time-budget=20000 \
  --run-all-compositor-stages-before-draw \
  --user-data-dir="$PROFILE" \
  --print-to-pdf="$OUT" \
  "$HTML"
status=$?
set -e

if [[ ! -s "$OUT" ]]; then
  echo "PDF build failed (exit $status)" >&2
  exit 1
fi

echo "Wrote $OUT (chrome exit=$status)"
ls -lh "$OUT"
