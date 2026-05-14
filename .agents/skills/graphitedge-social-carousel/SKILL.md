---
name: graphitedge-social-carousel
description: Create, revise, export, or organize GraphitEdge Instagram/social carousel assets in public/assets/social/tutorial-carousels, including six-slide tutorial carousels, SVG source files, PNG exports, and caption.md files.
metadata:
  short-description: Build GraphitEdge social carousels
---

# GraphitEdge Social Carousel

Use this skill when creating or updating GraphitEdge Instagram/social carousel assets.

## Asset Location

Store tutorial carousel sets in:

`public/assets/social/tutorial-carousels/<carousel-slug>/`

Each carousel folder should contain:

- `<carousel-slug>-01.svg` through `<carousel-slug>-06.svg`
- Matching PNG exports: `<carousel-slug>-01.png` through `<carousel-slug>-06.png`
- `caption.md`

## Format

- Source: editable SVG.
- Export: PNG for upload.
- Canvas: `1080x1350`, `viewBox="0 0 1080 1350"`.
- Existing brand pattern: soft background, white inner panel, GraphitEdge header, pathway label, slide number, footer title, and `GraphitEdge tutorials`.
- Typography: use existing SVG pattern, usually `Raleway` for headlines and `PT Sans` for supporting text.
- Keep text readable and avoid overlapping lines.

## Workflow

1. Inspect a nearby carousel before creating a new one:
   - `how-to-read-a-design` is the current reference pattern.
2. Choose a concise slug, such as `small-sections-first`.
3. Create six SVG slides unless the user asks for a different count.
4. Add `caption.md` with:
   - Title
   - Pathway
   - URL, if known
   - Caption body
   - CTA
5. Export PNGs from the SVGs.
6. Verify:
   - SVG count matches PNG count.
   - All PNGs are `1080x1350`.
   - No accidental `*.svg.png` thumbnail files remain.

## Caption Guidance

For Meta Business Suite:

- Use carousel PNGs in an Instagram post, not a Story, when a caption is needed.
- Paste the caption body and CTA from `caption.md`.
- Do not paste metadata headings like `Pathway:` or `URL:` unless the user wants them visible.

## Export Script

Use the bundled script to export all SVG files in one carousel folder or in the whole carousel root:

```sh
.agents/skills/graphitedge-social-carousel/scripts/export-carousel-pngs.sh public/assets/social/tutorial-carousels
```

Or:

```sh
.agents/skills/graphitedge-social-carousel/scripts/export-carousel-pngs.sh public/assets/social/tutorial-carousels/<carousel-slug>
```

The script uses headless Google Chrome on macOS and writes PNGs beside the matching SVG files.
