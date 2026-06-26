# Performance Budget

GraphitEdge should feel fast on mobile first. Treat these budgets as release checks for new pages, tutorials, and shared components.

## Core Targets

- Mobile load experience: under 3 seconds where network conditions allow.
- Largest Contentful Paint (LCP): under 2.5 seconds.
- Interaction to Next Paint (INP): under 200ms.
- Cumulative Layout Shift (CLS): under 0.1.
- Initial JavaScript: under 200 KB compressed where practical.
- Initial CSS: under 50 KB compressed where practical.
- Homepage hero image: under 250 KB.

## Asset Rules

- Use route-level code splitting for major views. Do not eagerly import all pages into shared entry code.
- Keep search libraries and search indexes out of the homepage bundle. Load search code only after the user opens or types in search.
- Keep syntax highlighting to the languages GraphitEdge uses: HTML/XML, CSS, JavaScript, Bash, JSON, and Markdown.
- Lazy-load diagrams, video embeds, code playgrounds, search modals, and large tutorial widgets unless they are essential above the fold.
- Use `OptimizedImage` or equivalent attributes for content images: `width`, `height`, `alt`, `loading`, and `decoding`.
- Default images to `loading="lazy"` and `decoding="async"`.
- For above-the-fold LCP images, use `loading="eager"` and `fetchpriority="high"` intentionally.
- Prefer WebP or AVIF for photographic content. Keep PNG/JPEG fallbacks only when needed.
- Self-host WOFF2 fonts if custom fonts are introduced. Use `font-display: swap`.
- Preload only the main above-the-fold font, and only when measurement shows it helps.
- Analytics and third-party scripts must be async or deferred and must not block rendering.
- Social embeds and videos should load from a user action or lazy placeholder, not during initial render.

## Build Checks

- Run `npm run build` before release and review `dist/stats.html`.
- Watch the largest JavaScript and CSS assets after gzip or Brotli compression.
- Check public image sizes before adding large tutorial screenshots or hero media.
- Avoid adding dependencies for one-off interactions; prefer small local code when it is clearer.
