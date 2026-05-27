# Rotto Rocks — Design tokens

Copy these CSS custom properties straight into `css/base.css` (or your equivalent). They are the contract between the wireframes and the build.

## CSS

```css
:root {
  /* ──────────────────────────────────────────────────────────
     COLOURS — from project brief, section 7
     ────────────────────────────────────────────────────────── */
  --color-ocean:        #123C55;  /* Deep ocean navy — primary headings, dark surfaces */
  --color-coastal:      #2A9DAD;  /* Coastal teal — links, secondary accents */
  --color-sand:         #F2D6A2;  /* Warm beige — soft surfaces, eyebrows */
  --color-rock:         #6E777A;  /* Soft grey — body text, captions */
  --color-seafoam:      #D9F1EF;  /* Pale aqua — info bands, hover surfaces */
  --color-sunset:       #E76F51;  /* Coral — PRIMARY CTAs and key highlights only */
  --color-white:        #FFFFFF;  /* Page surface */

  /* Semantic mappings — prefer these in components */
  --bg-page:            var(--color-white);
  --bg-surface:         var(--color-white);
  --bg-surface-soft:    var(--color-seafoam);
  --bg-surface-warm:    var(--color-sand);
  --bg-dark:            var(--color-ocean);
  --fg-default:         #1A2B36;            /* slightly darker than ocean for body */
  --fg-muted:           var(--color-rock);
  --fg-on-dark:         var(--color-white);
  --color-primary:      var(--color-sunset);
  --color-primary-fg:   var(--color-white);
  --color-link:         var(--color-coastal);
  --color-link-hover:   var(--color-ocean);
  --border-default:     #E1E5E8;
  --border-strong:      #C7CDD1;

  /* ──────────────────────────────────────────────────────────
     TYPOGRAPHY — pick ONE direction, delete the other two
     ────────────────────────────────────────────────────────── */
  /* Direction 1: Friendly Tourism */
  --font-heading: "Montserrat", system-ui, sans-serif;
  --font-body:    "Open Sans", system-ui, sans-serif;

  /* Direction 2: Coastal Editorial */
  /* --font-heading: "Playfair Display", Georgia, serif; */
  /* --font-body:    "Source Sans 3", system-ui, sans-serif; */

  /* Direction 3: Clean Modern */
  /* --font-heading: "Poppins", system-ui, sans-serif; */
  /* --font-body:    "Inter", system-ui, sans-serif; */

  /* Type scale (fluid) */
  --text-xs:   0.75rem;   /* 12px — small chips, labels */
  --text-sm:   0.875rem;  /* 14px — secondary text */
  --text-base: 1rem;      /* 16px — body */
  --text-lg:   1.125rem;  /* 18px — lede */
  --text-xl:   1.5rem;    /* 24px — h3 */
  --text-2xl:  2rem;      /* 32px — h2 */
  --text-3xl:  clamp(2.25rem, 4vw, 3.25rem); /* 36–52px — h1 */

  /* Weights */
  --w-regular:  400;
  --w-medium:   500;
  --w-semibold: 600;
  --w-bold:     700;

  /* Line heights */
  --leading-tight:   1.15;
  --leading-snug:    1.3;
  --leading-normal:  1.5;
  --leading-relaxed: 1.7;

  /* Letter spacing */
  --tracking-tight:  -0.01em;
  --tracking-normal: 0;
  --tracking-wide:   0.08em;     /* eyebrow labels, ALL-CAPS chips */

  /* ──────────────────────────────────────────────────────────
     SPACING — 8pt scale
     ────────────────────────────────────────────────────────── */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  24px;
  --space-6:  32px;
  --space-7:  48px;
  --space-8:  64px;
  --space-9:  96px;

  --container-max: 1120px;
  --container-pad: clamp(1rem, 4vw, 2rem);
  --section-pad-y: clamp(2rem, 6vw, 6rem);

  /* ──────────────────────────────────────────────────────────
     RADII & SHADOWS
     ────────────────────────────────────────────────────────── */
  --radius-sm:   4px;     /* buttons */
  --radius-md:   8px;     /* cards, inputs */
  --radius-lg:   16px;    /* large surfaces */
  --radius-full: 999px;   /* chips, pills */

  --shadow-card:       0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-card-hover: 0 6px 20px rgba(0, 0, 0, 0.12);
  --shadow-drawer:     0 25px 45px rgba(15, 23, 42, 0.25);

  /* ──────────────────────────────────────────────────────────
     MOTION
     ────────────────────────────────────────────────────────── */
  --duration-fast:   150ms;
  --duration-base:   200ms;
  --duration-slow:   300ms;
  --easing:          cubic-bezier(0.2, 0.0, 0.2, 1);
}

/* Honor user motion preference */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Google Fonts links

Pick the line that matches the typography direction you chose:

```html
<!-- Direction 1: Friendly Tourism -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">

<!-- Direction 2: Coastal Editorial -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet">

<!-- Direction 3: Clean Modern -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

## Quick visual rules

- **Coral (`#E76F51`) is a scarce resource** — primary buttons, key icon accents, one closing CTA per page. Don't tint sections with it.
- **Navy (`#123C55`) carries headings and the dark CTA banner variant.**
- **Teal (`#2A9DAD`) is the link colour.** Don't use coral for hyperlinks; readers expect coral = action button.
- **Seafoam (`#D9F1EF`) and Sand (`#F2D6A2`)** alternate quiet section backgrounds so the page has rhythm without feeling busy.
- **Rock (`#6E777A`)** is for secondary text and muted captions — never headlines.

## Contrast notes

- Coral `#E76F51` on white: ~3.4:1 — fine for **large** text (≥ 18px bold or 24px regular) and buttons; **not for body copy.**
- Coral on white as a button: pair with white text for ~3.4:1. Boost to bold to stay legible.
- Navy `#123C55` on white: ~10:1 — great everywhere.
- Teal `#2A9DAD` on white: ~3.3:1 — usable for large text and link decorations; underline for safety.
- Rock `#6E777A` on white: ~4.7:1 — passes for body, but reserve for secondary text only.

Use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/) before shipping.
