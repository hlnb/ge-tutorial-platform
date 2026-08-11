# Tutorial Visual Rollout Plan

This document tracks instructional visuals that support the GraphitEdge tutorial curriculum.

Last updated: August 11, 2026

## Purpose

GraphitEdge visuals should teach. They should make structure, sequence, comparison, workflow, and decision-making easier to understand. They should not be decorative filler.

Use this plan with:

- `docs/CURRICULUM_ARCHITECTURE.md`
- `docs/TUTORIAL_WRITING_SCHEDULE.md`
- `docs/CONTENT_WRITING_PLAN.md`
- `src/data/tutorials.js`

## Current State

The first visual rollout has largely landed. The repository already contains and uses diagrams for:

- From Idea to Live Website
- How to Think About Layouts
- How to Read a Design
- Breaking Layouts into Sections
- Black Swan Bistro Parts 2-6
- CSS systems, Flexbox, Grid, multi-page structure, reusable components, responsive refinement, debugging, testing, deployment, SEO, accessibility, and Website Care

Instructional diagrams currently live primarily in:

- `public/assets/images/tutorials/diagrams/`
- `public/assets/images/tutorials/accessibility-essentials/`
- `public/images/tutorials/getting-started/`

Prefer `public/assets/images/tutorials/diagrams/` for new tutorial diagrams unless a more specific existing folder is clearly established.

## Working Principles

- Use visuals only when they clarify a concept, decision, or workflow.
- Place visuals near the first explanation of the idea.
- The next paragraph should refer to what the learner should notice in the visual.
- Prefer SVG for diagrams, comparisons, overlays, workflows, and structure maps.
- Use real screenshots only when inspecting a real interface matters.
- Include useful alt text and captions.
- Keep labels readable on mobile.
- Use existing `.tutorial-figure`, `.tutorial-figure--medium`, and `.tutorial-figure--wide` styles.
- Do not create a new visual component unless the existing figure pattern cannot support the teaching need.

## Visual Categories

| Category | Best for |
|---|---|
| Concept map | Systems, relationships, staged learning journeys |
| Annotated example | Design reading, spacing, hierarchy, structure, pattern spotting |
| Comparison panel | Similar concepts or tradeoffs |
| Progression sequence | Showing change over time or project phases |
| Wireframe or structure sketch | Page planning, semantic regions, multi-page structure |
| Process flow | Deployment, DNS, Git, testing, maintenance, audits |
| Decision matrix | Prioritisation, technology choice, tradeoffs, client changes |
| Checklist funnel | Testing, review, quality assurance, launch readiness |

## Completed First Rollout

These earlier priorities now have assets in the repo and should not be treated as missing visual work:

| Lesson | Status |
|---|---|
| `beginner/idea-to-live-website.vue` | Visuals present |
| `intermediate/think-about-layouts.vue` | Visuals present |
| `intermediate/how-to-read-a-design.vue` | Visuals present |
| `intermediate/breaking-layouts-into-sections.vue` | Visuals present |
| `intermediate/black-swan-bistro-part-2.vue` | Visuals present |
| `intermediate/css-systems-for-reusable-sections.vue` | Visuals present |
| `intermediate/flexbox-for-real-layouts.vue` | Visuals present |

## Priority Visual Work

The next visual work should follow the new curriculum architecture and support lessons that still need to be written.

### Phase 1: Black Swan Bistro Final Phase

These are the highest priority because Parts 7-9 are the immediate authored-content gap.

#### Black Swan Bistro Part 7: Audit the Live Website

Route:

- `/tutorials/advanced/black-swan-bistro-part-7`

Recommended visuals:

1. Live-site audit map
   - type: process flow or checklist funnel
   - placement: after the lesson introduction
   - purpose: show that the audit moves through accessibility, responsive behaviour, performance, SEO, content, links, console errors, and maintainability before code changes begin
   - suggested filename: `tutorial-black-swan-bistro-part-7-audit-map.svg`

2. Evidence-to-finding record
   - type: annotated worksheet/table
   - placement: before guided practice
   - purpose: show how a learner records evidence, impact, severity, and the relevant refresher tutorial
   - suggested filename: `tutorial-black-swan-bistro-part-7-finding-record.svg`

#### Black Swan Bistro Part 8: Prioritise and Improve

Route:

- `/tutorials/advanced/black-swan-bistro-part-8`

Recommended visuals:

1. Impact versus effort matrix
   - type: decision matrix
   - placement: after the prioritisation concept section
   - purpose: separate useful improvements from preference-only changes
   - suggested filename: `tutorial-black-swan-bistro-part-8-impact-effort-matrix.svg`

2. Before/after improvement loop
   - type: process flow
   - placement: before testing guidance
   - purpose: show choose, change, test, compare, document
   - suggested filename: `tutorial-black-swan-bistro-part-8-improvement-loop.svg`

#### Black Swan Bistro Part 9: Respond to a Client Change

Route:

- `/tutorials/advanced/black-swan-bistro-part-9`

Recommended visuals:

1. Client request to code locations
   - type: structure map
   - placement: after the client request
   - purpose: show Sunday dinner, dessert, and Mothers Day promotion mapped to the right pages/sections without duplication
   - suggested filename: `tutorial-black-swan-bistro-part-9-change-location-map.svg`

2. Change workflow
   - type: process flow
   - placement: before guided practice
   - purpose: identify, update, test locally, commit, deploy, test production, document
   - suggested filename: `tutorial-black-swan-bistro-part-9-client-change-workflow.svg`

### Phase 2: SEO and Analytics Sub-pathway

The SEO fundamentals lesson already has diagrams. Future SEO/Analytics lessons need visuals that make invisible site-discovery and measurement systems concrete.

| Planned lesson | Visual need |
|---|---|
| Technical SEO Basics | Crawlable page layers diagram: structure, metadata, canonical URL, redirects, performance, indexability |
| Sitemaps, robots.txt, and Indexing | Search engine discovery flow from link/sitemap to crawl, index, and result |
| Google Search Console | Search Console report interpretation map: query, page, impression, click, indexing issue |
| Analytics Setup | Privacy-aware analytics setup flow: tool choice, consent/privacy, script placement, event goals, validation |
| Measuring and Improving a Website | Measurement-to-improvement loop connecting analytics, SEO, accessibility, performance, content, and maintenance |

Suggested filenames:

- `tutorial-technical-seo-basics-crawlable-layers.svg`
- `tutorial-sitemaps-robots-indexing-discovery-flow.svg`
- `tutorial-google-search-console-report-map.svg`
- `tutorial-analytics-setup-privacy-aware-flow.svg`
- `tutorial-measuring-improving-website-improvement-loop.svg`

### Phase 3: Professional Practice

Professional Practice visuals should teach judgement and evidence, not tool trivia.

| Planned lesson | Visual need |
|---|---|
| Developer Portfolio and Project Case Study | Project evidence map: brief, decisions, build, tests, result, reflection |
| Choosing the Right Technology for a Project | Decision tree or tradeoff matrix building on Frameworks 101 |
| Working Effectively With Coding Agents | Human-agent workflow: brief, inspect, ask, change, review, test, document |
| Working From a Client Brief | Brief-to-build map: goals, audience, content, constraints, acceptance criteria |
| Documentation and Handover | Handover packet map: files, deployment, content, maintenance, known issues |

Suggested filenames:

- `tutorial-portfolio-case-study-evidence-map.svg`
- `tutorial-choosing-technology-decision-matrix.svg`
- `tutorial-coding-agents-review-workflow.svg`
- `tutorial-client-brief-to-build-map.svg`
- `tutorial-documentation-handover-packet-map.svg`

### Phase 4: Capstone Transition

Rotto Rocks already has project pages, a brief, wireframes, notes, and a capstone spec. The next visual work should clarify how capstone independence differs from Black Swan Bistro guidance.

Recommended visuals:

1. Guided project to independent capstone
   - type: progression sequence
   - placement: Capstone section/spec introduction
   - purpose: show Black Swan Bistro -> Professional Practice -> Rotto Rocks
   - suggested filename: `tutorial-capstone-guided-to-independent-progression.svg`

2. Capstone decision map
   - type: concept map
   - placement: before capstone success criteria
   - purpose: show the learner-owned decisions: structure, technology, reusable patterns, accessibility, testing, deployment, maintenance
   - suggested filename: `tutorial-rotto-rocks-capstone-decision-map.svg`

## Lower Priority Visual Review

These lessons are complete and already useful, but could receive visual polish later if time allows:

- `intermediate/building-reusable-components.vue`
- `intermediate/css-grid-for-repeated-layouts.vue`
- `intermediate/responsive-refinement-for-reusable-components.vue`
- `intermediate/modern-css-layout-extensions.vue`
- `intermediate/working-with-vite.vue`
- `website-care-and-feeding/monthly-website-health-check.vue`

Do not let these polish tasks outrank the missing content in Black Swan Bistro Parts 7-9, SEO/Analytics, Professional Practice, or Capstone transition.

## Recommended Content Pattern

When inserting a visual into a lesson, use this flow:

1. Short introductory paragraph
2. Instructional figure
3. Brief caption
4. One short interpretation paragraph or 2-4 bullets
5. Code, checklist, or exercise after the visual

## Caption Standard

Each caption should cover:

- what the learner is looking at
- why it matters
- what they will do next

Example:

> This diagram shows how audit evidence becomes a prioritised improvement. It matters because not every issue deserves the same response. Next, you will choose one high-impact fix and test it before and after.

## Alt Text Standard

Alt text should describe the teaching value of the image, not just the object.

Good:

> Flow diagram showing a live-site audit moving from accessibility and responsive checks through SEO, performance, broken links, console errors, and maintainability notes.

Avoid:

> Audit diagram.

## Visual QA Checklist

Before adding any instructional graphic, confirm:

- The visual teaches one concept clearly.
- Labels match lesson vocabulary.
- Text is readable on mobile.
- Contrast is strong enough.
- The next paragraph refers to the visual.
- The visual supports the exercise, checklist, or code that follows.
- `img` elements include meaningful `alt`, `loading`, and `decoding` attributes.
- Above-the-fold images use eager loading only when they are genuinely the LCP image.
- No new dependency is needed.
