---
applyTo: 'src/assets/styles/**'
description: 'Use when editing CSS files. Preserves the Bulma + custom CSS architecture.'
---

# CSS conventions

GraphiteEdge uses Bulma CSS alongside intentional custom stylesheets. Do not consolidate or replace custom CSS with Bulma utilities.

## Key files

| File                              | Purpose                                            |
| --------------------------------- | -------------------------------------------------- |
| `src/assets/styles/global.css`    | Global base styles                                 |
| `src/assets/styles/main.css`      | Main custom styles                                 |
| `src/assets/styles/tutorials.css` | Tutorial grid layouts, navigation, section styling |
| `src/assets/styles/vendor/`       | Third-party vendor styles                          |
| `src/assets/main.css`             | Top-level import entry point                       |

## Rules

- Bulma classes are preferred for layout and common UI patterns
- Custom CSS in `tutorials.css` and `main.css` is intentional — do not assume Bulma should replace it
- Keep CSS simple and maintainable — avoid deep nesting
- PostCSS is configured with `postcss-import` and autoprefixer
- Component-scoped styles are fine for component-specific concerns
- Prefer improving consistency across existing styles over introducing new patterns

See [docs/STYLE.md](../../docs/STYLE.md) for full CSS architecture details.
