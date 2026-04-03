# Styling Guide

Status: partially current. This guide reflects the live styling layers in the repository and notes where the CSS setup still has overlap or duplication.

## Styling Approach

GraphiteEdge currently uses:

- Bulma as a base styling layer
- local custom CSS for site-specific layout, typography, tutorial styling, and navigation polish

This mixed approach is intentional in the current codebase.

Do not assume Bulma alone should replace the local CSS files.

## Active Style Files

Important current styling entry points and shared files include:

- `src/main.js`
  Imports Bulma and `src/assets/main.css`
- `src/assets/main.css`
  Global width/spacing and shared layout adjustments
- `src/assets/styles/main.css`
  design tokens, typography, and additional global styling
- `src/assets/styles/tutorials.css`
  tutorial-specific styling
- `src/components/tutorial-navs/nav.css`
  shared tutorial navigation styling

There is also:

- `src/assets/styles/global.css`

but it is not the primary styling entry point used by `src/main.js`.

## Bulma And Custom CSS

The current site layers Bulma with local CSS rather than choosing one or the other.

In practice:

- Bulma provides the base component and layout vocabulary
- local CSS refines spacing, width, typography, colors, and tutorial-specific presentation

Examples of live Bulma-plus-custom-CSS behavior include:

- `.container`, `.content`, and `.section` adjustments in `src/assets/main.css` and `src/assets/styles/main.css`
- tutorial card/grid styling in `src/assets/styles/tutorials.css`
- section-specific nav accents in `src/components/tutorial-navs/nav.css`

## CSS Variables And Tokens

The repository currently defines color and font variables in:

- `src/assets/styles/main.css`

These include:

- brand and neutral color tokens
- font-family variables
- utility-style shared values used across the site

Tutorial nav components also use:

- `--tutorial-accent`

to set per-section accent colors in the shared nav CSS.

## Tutorial Styling

Tutorial styling is currently split between:

- shared global/site styles
- tutorial-specific styles
- per-component scoped styles inside tutorial pages and components

Treat the current tutorial CSS as part of the live system, not as accidental leftovers.

Important current tutorial-related files include:

- `src/assets/styles/tutorials.css`
- `src/components/tutorial-navs/nav.css`
- scoped styles inside tutorial pages/components where needed

## Current Drift And Overlap

The current styling system is functional, but not fully consolidated.

Visible overlap in the repo includes:

- Bulma imported in more than one place
- `.container`, `.content`, `.section`, and `.box` styling defined in more than one CSS file
- tutorial grid/card styles duplicated inside `src/assets/styles/tutorials.css`

This should be improved incrementally rather than treated as a reason to replace the styling system wholesale.

## Best Current Practice

When editing styles:

- preserve the current Bulma-plus-custom-CSS layering
- prefer small consolidations over broad restyling
- reuse existing CSS variables where practical
- keep tutorial styling calm, readable, and consistent
- avoid introducing Tailwind or a new styling framework unless explicitly requested

## Component-Level Styling

Component-scoped styles are used throughout the app and are part of the current implementation pattern.

Use scoped styles when:

- a component has clearly local presentation concerns
- the style does not belong in a shared global/tutorial stylesheet

Prefer shared files when:

- multiple tutorial pages/components rely on the same pattern
- a style is part of the site-wide or section-wide system

## Responsive Behavior

The repo currently relies on a mix of:

- Bulma responsive utilities/layout
- custom media queries in shared CSS
- component-level responsive adjustments

When adjusting responsive behavior, inspect the current live component/styles before adding a new breakpoint strategy.
