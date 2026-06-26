---
name: ship-site
description: Safely implement, validate, and summarize GraphitEdge changes for content, components, layouts, tutorial pages, accessibility, SEO/schema, image handling, and site performance. Use for general GraphitEdge site edits and shipping checks.
---

# GraphitEdge shipping workflow

Use this skill when a task involves building or editing the site.

## Mandatory companion standards

Before implementing or reviewing site changes, read `.agents/skills/graphitedge-site-builder/SKILL.md` and apply its requirements. Treat those standards as part of this skill, especially:

- image format, dimensions, alt text, lazy/eager loading, and size limits
- JSON-LD schema choices that match visible page content
- mobile speed, bundle size, lazy-loading, and Core Web Vitals guidance

## Goals

- keep diffs scoped
- preserve educational structure
- avoid architecture churn
- validate before handoff
- keep performance, accessibility, image quality, and schema integrity visible in every site change

## Workflow

1. Read AGENTS.md and the requested task
2. Read `.agents/skills/graphitedge-site-builder/SKILL.md`
3. Identify the smallest safe set of files to change
4. Check for existing patterns before creating new ones
5. Implement the change
6. Check site-builder requirements:
   - images are optimized, sized, labelled, and loaded appropriately
   - schema is present only when accurate and useful
   - heavy code, search, syntax tools, widgets, and media are lazy-loaded where practical
   - new or changed pages have title, meta description, logical H1, heading order, and internal links
7. Run relevant validation:
   - install deps only if necessary
   - run build
   - run lint if available
8. Summarize:
   - what changed
   - what was validated
   - image, schema, accessibility, and performance considerations
   - any follow-up work or risk

## Special instructions

- Prefer existing components, layouts, and content conventions
- Preserve slugs and tutorial information architecture unless directed otherwise
- If a request implies a larger restructure, propose the plan before making broad changes
- Do not add global JavaScript, global CSS, schema, or image assets without checking the site-builder standards first
