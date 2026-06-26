---
name: graphitedge-site-builder
description: Build, edit, refactor, review, and validate the GraphitEdge website. Use when working on GraphitEdge Vite/Vue site pages, layouts, tutorial content, components, styles, SEO metadata, schema, accessibility, performance, routing, images, or site build quality.
---

# GraphitEdge Site Builder

Use this skill whenever creating, editing, refactoring, or reviewing the GraphitEdge website.

GraphitEdge is a Vite/Vue static tutorial site teaching web development fundamentals, accessibility, SEO, deployment, hosting, and AI-assisted development. Keep it fast, accessible, structured, maintainable, and beginner-friendly.

Every change should support the GraphitEdge teaching approach: clear explanations, practical learning, systems thinking, and confidence-building for beginner to intermediate learners.

## Core Build Principles

When working on the site:

1. Prioritise clarity over cleverness.
2. Keep pages fast on mobile.
3. Use semantic HTML before adding extra JavaScript.
4. Make components reusable but not over-engineered.
5. Keep tutorial content readable and well structured.
6. Use schema where it genuinely describes the page.
7. Avoid loading features globally unless they are needed globally.
8. Preserve accessibility, keyboard navigation, and readable content flow.
9. Do not introduce unnecessary dependencies.
10. Treat performance, accessibility, SEO, and maintainability as part of the same job.

## Performance Requirements

The site is a static Vite/Vue site and should feel fast on mobile devices.

Target performance goals:

- Mobile load experience under 3 seconds where practical.
- Largest Contentful Paint under 2.5 seconds.
- Interaction to Next Paint under 200 ms.
- Cumulative Layout Shift under 0.1.
- Initial JavaScript should remain as small as practical.
- Avoid loading search, syntax highlighting, code playgrounds, or large tutorial widgets on pages that do not need them.

When adding or editing code:

- Use route-level code splitting for major views.
- Lazy-load heavy components using `defineAsyncComponent`.
- Lazy-load search tools and search indexes.
- Do not import all of Highlight.js, Prism, or any syntax library unless strictly required.
- Import only syntax languages used by GraphitEdge: HTML/XML, CSS, JavaScript, Bash, JSON, and Markdown.
- Avoid large animation libraries unless there is a strong teaching purpose.
- Avoid unnecessary client-side JavaScript for static content.
- Prefer semantic HTML and CSS over JavaScript-driven layout.

## Image Rules

Optimise all images for mobile.

Use:

- WebP or AVIF for photos and screenshots where practical.
- SVG for simple vector graphics and icons.
- Explicit `width` and `height` attributes.
- Meaningful `alt` text.
- `loading="lazy"` for below-the-fold images.
- `decoding="async"` for standard images.
- `loading="eager"` and `fetchpriority="high"` only for the main above-the-fold LCP image.

Recommended limits:

- Homepage hero image: under 250 KB where practical.
- Tutorial thumbnails: under 80 KB where practical.
- Inline tutorial screenshots: resize to the largest display size needed.
- Do not use oversized PNG screenshots unless transparency or detail requires it.

## Font Rules

Fonts must not block the mobile experience.

Use:

- WOFF2 font files.
- `font-display: swap`.
- A small number of font families and weights.
- Preload only the primary above-the-fold font if needed.

Do not preload every font.

## CSS Rules

Keep CSS lean and purposeful.

When editing styles:

- Avoid importing a full CSS framework if only a few modules are needed.
- Scope component-specific CSS where practical.
- Remove unused global styles when safe.
- Avoid layout shifts caused by late-loading fonts, images, or dynamic content.
- Use CSS for layout and visual states before adding JavaScript.

## Schema Requirements

Use JSON-LD schema where it genuinely describes the visible content of the page.

Site-wide schema:

- `EducationalOrganization`
- `WebSite`

Tutorial page schema:

- `TechArticle`
- `LearningResource`
- `BreadcrumbList`

Pathway or course landing page schema:

- `Course`
- `BreadcrumbList`
- Optional `ItemList` if listing lessons or tutorial steps.

Step-by-step process tutorial schema:

- `HowTo` only when the page genuinely contains visible ordered steps.

Avoid:

- Fake FAQ schema.
- Review or rating schema unless real visible reviews exist.
- Course schema on every small lesson page.
- Schema that describes content not visible to the learner.

Generate schema from frontmatter where practical.

Recommended tutorial frontmatter fields:

- `title`
- `description`
- `slug`
- `section`
- `pathway`
- `type`
- `difficulty`
- `datePublished`
- `dateModified`
- `author`
- `estimatedTime`
- `keywords`
- `learningObjectives`
- `breadcrumbs`

## SEO Requirements

Each page should have:

- A clear page title.
- A useful meta description.
- One logical H1.
- Structured headings in order.
- Internal links to related lessons or next steps.
- Descriptive link text.
- Canonical URL where appropriate.
- Schema where appropriate.
- Sitemap compatibility.

Do not keyword-stuff. The site should sound like a confident mentor, not a robot wearing a marketing hat.

## Accessibility Requirements

Every page and component should support:

- Semantic HTML.
- Logical heading order.
- Keyboard navigation.
- Visible focus states.
- Sufficient colour contrast.
- Meaningful alt text.
- Labels for form controls.
- Reduced-motion support where animation is used.
- No critical content hidden behind hover-only interactions.

Interactive tutorial components should include accessible instructions.

## Tutorial Page Requirements

Structure tutorial pages for learning. Where appropriate, include:

- Clear introduction.
- Learning objectives.
- Prerequisites.
- Estimated time.
- Step-by-step sections.
- Code examples.
- Checkpoints.
- Guided practice.
- Independent practice.
- Reflection or next step.
- Links to related tutorials.

Do not overload beginner pages with advanced concepts unless clearly marked.

## Component Rules

When creating new components:

- Keep props clear and documented.
- Avoid unnecessary state.
- Avoid global dependencies.
- Use slots where useful.
- Keep accessibility built in.
- Avoid hard-coding content that belongs in Markdown/frontmatter.
- Avoid styling that only works for one page unless the component is intentionally page-specific.

## Before Finishing

Before reporting completion, check:

1. Does the site still build?
2. Did this change increase the initial bundle unnecessarily?
3. Are images optimised?
4. Are new pages given appropriate metadata?
5. Is schema added where useful?
6. Are headings logical?
7. Is the page usable on mobile?
8. Is the page keyboard accessible?
9. Is any heavy feature lazy-loaded?
10. Is the change consistent with GraphitEdge's teaching style?

When reporting back, include:

- Files changed.
- What was improved.
- Any performance risks.
- Any SEO/schema additions.
- Any accessibility considerations.
- Any follow-up recommendations.
