# Handoff: Rotto Rocks — Capstone Tourism Website

A complete design handoff for the **Rotto Rocks** capstone project: a fictional tourism website for guided experiences on Rottnest Island, Western Australia. This package is structured so a student can hand it to **Cursor** (or any AI coding assistant — Claude Code, Copilot, Codeium) and ask it to scaffold the site from these wireframes.

---

## How to use this package with Cursor

1. Download this whole folder and drop it into your project workspace.
2. Open Cursor in the same workspace.
3. Open `README.md` (this file) and use Cursor's "Add to chat" / "@" reference so it has the full spec in context.
4. Open one wireframe variation at a time (e.g. *Variation A* of Home) and ask Cursor:  
   *"Build the Home page in semantic HTML + CSS following Variation A in the wireframes. Use the design tokens in `design-tokens.md` and the file structure in section 9 below."*
5. Repeat per page, then refactor reusable components together in Part 4 (matches the tutorial sequence in the brief).

> **The wireframes are design references, not production code to copy.** They are low-fidelity grey-block layouts showing structure, hierarchy, and intent. Your job (with Cursor's help) is to **rebuild them as real, semantic, accessible HTML and CSS** — choosing real fonts, real colours, real images, real copy — following the design tokens and accessibility rules below.

---

## 1. Overview

| | |
|---|---|
| **Project** | Rotto Rocks — fictional tourism website |
| **Type** | Multi-page responsive marketing site |
| **Audience** | Visitors to Perth / Rottnest Island; families, couples, slow travellers |
| **Goal** | Introduce business · browse tours · compare · plan a visit · enquire |
| **Required pages** | Home · Experiences · About · Plan Your Visit · Contact |
| **Tech direction** | Static HTML + CSS (no framework required) |
| **Difficulty** | Late beginner → intermediate |

The full brand brief is in `project-brief.pdf` (alongside this README). The interactive wireframes are in `wireframes/Rotto Rocks Wireframes.html`.

---

## 2. About the design files

The files in this handoff are **design references created in HTML** — prototypes of layout and hierarchy, not production code. They are intentionally **low-fidelity wireframes**: grey blocks for images, plain bars for text, a single coral accent to indicate primary CTAs.

The task is to **recreate these layouts in your codebase** using semantic HTML, your own CSS, real content, and real imagery — applying the brand palette and typography defined in section 6.

If you (or your instructor) prefer a framework — React + Vite, Astro, Eleventy, Next.js — adapt the structure accordingly. The brief recommends static HTML/CSS for the learning exercise.

---

## 3. Fidelity

**Low-fidelity wireframes.** Use them for:

- Page **structure** and section order
- **Component composition** (what sits inside what)
- **Hierarchy** (heading sizes, primary vs secondary CTAs)
- **Responsive intent** (desktop column counts → mobile single-column)

Do **not** copy the grey blocks, dotted patterns, or coral handwriting callouts — those are wireframe artefacts. Apply the brand palette and typography from section 6 when you build.

---

## 4. Screens / Views

There are 5 required pages, each with 2 explored layout variations in the wireframes. **Pick one variation per page** (or mix elements) before building. The wireframes file (`wireframes/Rotto Rocks Wireframes.html`) is tabbed by page; each tab shows both variations side-by-side with desktop + mobile.

### 4.1 Home

**Purpose:** Introduce Rotto Rocks. Funnel visitors toward the Experiences page or an enquiry.

**Suggested sections (in order):**

1. **Header** with logo, nav (Home, Experiences, About, Plan Your Visit, Contact), accent CTA button
2. **Hero**
   - *Variation A:* full-bleed image with overlaid headline + subhead + 2 CTAs
   - *Variation B:* split — text left (eyebrow chip, h1, h2, lede, 2 CTAs), image right
3. **Intro paragraph** — short pitch, plain text section
4. **Featured tours** — 3-up grid of Tour Cards (or horizontal scroll in Var B), with "View all →"
5. **Why explore with us** — 4-up Feature Cards (icon + heading + 1-line description)
6. **Island highlights** — 4 mini cards or alternating image+text rows
7. **Testimonial** — centred quote with attribution
8. **CTA banner** — closing call to action
9. **Footer**

**Hero headline:** *"Discover the island beyond the postcard."*  
**Primary CTAs:** "Explore tours" (primary, coral) + "Enquire" or "Plan your visit" (secondary, outlined)

### 4.2 Experiences / Tours

**Purpose:** Present available tours in a scannable layout. Help visitors compare by duration, activity level, and interest.

**Suggested sections:**

1. **Header**
2. **Page header** with breadcrumb, h1, lede paragraph
3. **Filter bar**
   - *Variation A:* horizontal filter chips (All / Walking / Cycling / Wildlife / Sunset / Family) + sort
   - *Variation B:* sidebar with checkbox filters (Activity, Duration slider, Level, Group)
4. **Tour list**
   - *Variation A:* 2×2 grid of vertical Tour Cards
   - *Variation B:* stacked horizontal Tour Cards (image left, content right)
5. **Comparison table** — Tour · Duration · Activity · Best for · Group size
6. **CTA banner** — "Send enquiry"
7. **Footer**

**Tour data** (from the brief — use these names verbatim):

| Tour | Duration | Activity | Best for |
|---|---|---|---|
| Wadjemup Highlights Walk | 2 hours | Easy | First-time visitors, families, relaxed explorers |
| Beaches & Bays Cycling Tour | Half day | Moderate | Active visitors, couples, small groups |
| Quokka & Coastal Discovery | 90 minutes | Easy | Families, wildlife lovers, short-stay visitors |
| Sunset Rocks Experience | 2.5 hours | Easy to moderate | Couples, photographers, reflective travellers |

### 4.3 About Rotto Rocks

**Purpose:** Build trust. Explain values, slow tourism, sustainability, small-group benefits.

**Suggested sections:**

1. **Header**
2. **Hero / page intro** — image + title
3. **Our story** — two-column paragraphs (Var A) OR pull-quote with attribution (Var B)
4. **Values** — 3-up Feature Cards (Var A) OR numbered "chapters" alternating image/text (Var B)
5. **Responsible tourism / sustainability** — image-plus-text row with chip list
6. **Meet your guide** — founder card (Var A) OR 2-up guide cards (Var B)
7. **CTA banner**
8. **Footer**

### 4.4 Plan Your Visit

**Purpose:** Help visitors prepare. What to bring, getting there, weather, accessibility, safety, FAQs.

**Suggested sections:**

1. **Header**
2. **Page header** with breadcrumb, h1, lede
3. **Quick info strip** — 4 Feature Cards: Getting there · Best season · Weather · Accessibility *(Var A)*
4. **What to bring** — two-column checklist
5. **Getting there** — 3 numbered step cards: Book ferry → Meet guide → Start exploring
6. **Safety & weather** — image-plus-text row
7. **FAQ accordion** — 4–5 `<details>`/`<summary>` items
8. **CTA banner**
9. **Footer**

*Variation B alternative:* sticky in-page nav sidebar with numbered sections (01 Getting there, 02 What to bring, 03 Weather & safety, 04 Accessibility, 05 FAQ).

### 4.5 Contact / Booking Enquiry

**Purpose:** Capture a booking enquiry. Provide all practical contact info.

**Suggested sections:**

1. **Header**
2. **Page header** — title + lede *(or warm centred "Say hello" headline in Var B)*
3. **Form** *(Var A: left column · Var B: centred narrow form)*
   - Name (text)
   - Email (email)
   - Tour interest (select)
   - Preferred date (date)
   - Group size (number)
   - Notes (textarea)
   - Consent checkbox
   - Submit button (primary coral)
4. **Contact info cards** *(Var B leads with 3 cards: Call / Email / DM)*
5. **Meeting point** — image + address + ferry chips
6. **Footer**

---

## 5. Reusable components

Eight components do most of the work. Build them once, reuse across pages. The wireframes file's **"06 · Reusable Components"** tab draws each in isolation.

| # | Component | Where it appears | Notes |
|---|---|---|---|
| 1 | **Header / Navigation** | Every page | Logo + 5 links + accent CTA. Burger menu on mobile (`<768px`). Mark current page with `aria-current="page"`. |
| 2 | **Hero** | Home, About | Two variants: full-bleed-with-overlay, or split-text-image. Headline = `<h1>`, exactly one per page. |
| 3 | **Tour card** | Home, Experiences | `<article>` with image, `<h3>` title, duration chip, activity chip, 1–2 line description, button. Vertical (grid) and horizontal (list) layouts. |
| 4 | **Feature card** | Home, About, Plan | Icon (or number) + small heading + 1-line description. Three modifiers: icon, numbered, with-image. |
| 5 | **Content section** | Home, About | 50/50 image + text row. Reverse direction in CSS for alternating rows. Stacks under 768px. |
| 6 | **CTA banner** | Bottom of most pages | Heading + 1-line sub + button. Two surface variants: dark or coral. One CTA per page. |
| 7 | **Footer** | Every page | 4-column on desktop, single column on mobile. Brand + 2 link columns + social icons. |
| 8 | **Contact form** | Contact | Label + input groups, 2-column on desktop. All labels connected via `for`/`id`. Visible focus states. |

> **Refactor checkpoint (Part 4 of the tutorial sequence):** build the pages first with repetition, then move repeated chunks into shared CSS classes or HTML partials. The goal is for students to *experience* the duplication before they refactor.

---

## 6. Design tokens

See `design-tokens.md` for the full reference (copy-paste ready as CSS custom properties). Summary:

### Colours

| Use | Name | Hex |
|---|---|---|
| Deep ocean | Navy blue | `#123C55` |
| Coastal blue | Teal blue | `#2A9DAD` |
| Sand | Warm beige | `#F2D6A2` |
| Rock | Soft grey | `#6E777A` |
| Sea foam | Pale aqua | `#D9F1EF` |
| Sunset accent | Coral | `#E76F51` |
| Background | White | `#FFFFFF` |

**Use the coral (`#E76F51`) sparingly** — primary CTAs and small highlights only. Navy is the workhorse for headings; teal supports links and secondary elements.

### Typography (pick one pairing)

| Direction | Headings | Body |
|---|---|---|
| Friendly Tourism | Montserrat (600–700) | Open Sans (400/600) |
| Coastal Editorial | Playfair Display (600) | Source Sans 3 (400/600) |
| Clean Modern | Poppins (600) | Inter (400/500) |

Load via Google Fonts. Body 16px base, ~1.6 line-height. Headings tighter (1.15–1.25 line-height).

### Spacing

A simple 8-pt scale works well: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96`. Section vertical padding: `clamp(32px, 6vw, 96px)`. Container max-width: `1120px`.

### Radii

- Buttons: `4px`
- Cards / inputs: `8px`
- Pills / chips: `999px`

### Shadows

Use one card-level shadow and one hover shadow:

```css
--shadow-card: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-card-hover: 0 6px 20px rgba(0, 0, 0, 0.12);
```

---

## 7. Interactions & behaviour

| Interaction | Behaviour |
|---|---|
| Nav link hover | Background tint or underline; `transition: 0.2s ease` |
| Button hover | Slight lift (`translateY(-2px)`), shadow increase, 0.9 opacity on primary |
| Tour card hover | `translateY(-3px)` + shadow upgrade |
| Mobile nav | Burger opens a drawer or full-screen menu; close on link tap or outside click |
| FAQ accordion | Use native `<details>` / `<summary>` — free keyboard accessibility |
| Form submit | Client-side validation on blur; show inline error text, not just colour |
| Focus states | **Always visible** — outline or ring, never `outline: none` without a replacement |

No bounce or spring animations. Easing is `ease` or `ease-in-out`, durations 150–300ms.

---

## 8. Accessibility requirements

These come straight from the brief and are non-negotiable:

- Semantic HTML structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Clear heading hierarchy — one `<h1>` per page, no skipped levels
- Descriptive link text (no "click here", no "read more" alone)
- Keyboard-accessible navigation (tab through everything)
- Sufficient colour contrast — 4.5:1 for body text, 3:1 for large text; test the coral on white carefully
- Useful image `alt` text (decorative images: `alt=""`)
- Form labels connected to inputs via `for`/`id`
- Visible focus states on every interactive element
- Responsive layout with no horizontal scrolling
- Tap targets ≥ 44×44 px on mobile

Test with: keyboard-only navigation, a screen reader pass (VoiceOver / NVDA), and a Lighthouse audit.

---

## 9. Responsive requirements

- **Mobile:** single column, full-width cards, burger nav, larger tap targets
- **Tablet (≥ 768px):** 2-column grids, horizontal nav appears
- **Desktop (≥ 1024px):** 3- and 4-column grids, sidebar layouts where used
- **Max content width:** ~1120px, centred with horizontal padding
- Use flexible images: `max-width: 100%; height: auto`
- Readable line lengths: 50–75 characters

Use CSS Grid for top-level page layout, Flexbox for component-level rows.

---

## 10. Suggested file structure

From the brief (you can adapt — Astro, 11ty, or React variants are fine):

```
rotto-rocks/
├── index.html                ← Home
├── experiences.html
├── about.html
├── plan-your-visit.html
├── contact.html
├── assets/
│   ├── images/
│   │   ├── hero-rottnest.jpg
│   │   ├── tour-wadjemup.jpg
│   │   ├── tour-cycling.jpg
│   │   ├── tour-quokka.jpg
│   │   ├── tour-sunset.jpg
│   │   └── ...
│   └── icons/
├── css/
│   ├── base.css              ← resets, root tokens, type
│   ├── layout.css            ← header, footer, grids
│   ├── components.css        ← tour card, feature card, CTA, form
│   └── utilities.css         ← spacing, visually-hidden, etc.
└── README.md                 ← your own project notes + reflection
```

---

## 11. Suggested build sequence

This matches **section 17** of the brief. Work through it in order.

1. **Plan the site** — read this README, the brief, and the wireframes. Sketch a content inventory.
2. **Build the Home page structure** — semantic HTML for header, hero, cards, CTA, footer; basic responsive CSS.
3. **Create the multi-page site** — add Experiences, About, Plan Your Visit, Contact; reuse header/footer/card markup.
4. **Refactor reusable components** — extract cards, CTA, page headers, shared classes. Aim for one definition per component.
5. **Polish, test, and deploy** — accessibility audit, responsive testing, image optimisation, SEO basics (`<title>`, meta description, Open Graph), deploy to GitHub Pages / Netlify / Vercel.

---

## 12. Reflection questions (from the brief)

Address these in a short `REFLECTION.md` once the site is built:

1. What content patterns appeared across the site?
2. Which sections became reusable components?
3. How did the design change between mobile and desktop?
4. What accessibility checks did you complete?
5. What was the most difficult layout decision?
6. How did the project brief guide your design choices?
7. What would you improve if this became a real client website?

---

## 13. Files in this handoff

| File | What it is |
|---|---|
| `README.md` | This document — primary spec for the AI assistant |
| `design-tokens.md` | Copy-paste CSS custom properties for colours, type, spacing |
| `wireframes/Rotto Rocks Wireframes.html` | Interactive wireframes — 5 pages × 2 variations + components page |
| `wireframes/Rotto Rocks Wireframes.pdf` | Print-friendly PDF of the wireframes for offline review |
| `project-brief.pdf` | Original client brief (the source of truth for content) |

---

## 14. Assets & imagery

The wireframes use grey placeholder boxes. For the real build, source coastal photography that matches the brief's image direction:

- Rottnest Island beaches and coastline
- Cycling and walking paths
- Quokkas (close-up + in context)
- Ferries, limestone rocks, turquoise water
- Sunset / golden-hour scenes
- People exploring (small groups, not crowds)

**Sources:** Unsplash (search "Rottnest Island", "Western Australia beach", "quokka") or Pexels. Always check the licence. Optimise to `< 250 KB` per image; serve `.webp` where supported with `.jpg` fallback.

Icons: Font Awesome or Lucide (the brief uses Font Awesome). Keep them monoline and consistent.

---

## 15. Done-when checklist

- [ ] 5 pages built, all linked from the nav
- [ ] Consistent header + footer across all pages
- [ ] Tour card and Feature card used in at least 2 places each
- [ ] Single source of truth for the colour and type tokens
- [ ] Site works on a 360 px viewport without horizontal scroll
- [ ] All images have meaningful `alt` text
- [ ] All form fields have associated `<label>`s
- [ ] Keyboard tab order is logical; focus is always visible
- [ ] Lighthouse accessibility score ≥ 95
- [ ] Page weight per page < 1.5 MB
- [ ] Deployed to a public URL
- [ ] `REFLECTION.md` answers all 7 questions

Good luck — and remember: **build first, refactor second.** The duplication is the lesson.
