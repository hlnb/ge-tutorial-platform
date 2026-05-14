#!/usr/bin/env bash
set -euo pipefail

target="${1:-public/assets/social/tutorial-carousels}"
chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [[ ! -x "$chrome" ]]; then
  echo "Google Chrome was not found at: $chrome" >&2
  exit 1
fi

if [[ ! -d "$target" ]]; then
  echo "Carousel path does not exist: $target" >&2
  exit 1
fi

find "$target" -mindepth 1 -type f -name "*.svg" | sort | while IFS= read -r file; do
  output="${file%.svg}.png"
  "$chrome" \
    --headless \
    --disable-gpu \
    --no-first-run \
    --screenshot="$output" \
    --window-size=1080,1350 \
    "file://$PWD/${file#./}" >/dev/null
  echo "Exported $output"
done

leftovers="$(find "$target" -type f -name "*.svg.png" -print)"
if [[ -n "$leftovers" ]]; then
  echo "Warning: found thumbnail-style files that should usually be removed:" >&2
  echo "$leftovers" >&2
fi
