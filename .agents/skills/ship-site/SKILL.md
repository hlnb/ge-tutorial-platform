---
name: ship-site
description: Safely implement, validate, and summarize GraphiteEdge changes for content, components, layouts, and tutorial pages.
---

# GraphiteEdge shipping workflow

Use this skill when a task involves building or editing the site.

## Goals

- keep diffs scoped
- preserve educational structure
- avoid architecture churn
- validate before handoff

## Workflow

1. Read AGENTS.md and the requested task
2. Identify the smallest safe set of files to change
3. Check for existing patterns before creating new ones
4. Implement the change
5. Run relevant validation:
   - install deps only if necessary
   - run build
   - run lint if available
6. Summarize:
   - what changed
   - what was validated
   - any follow-up work or risk

## Special instructions

- Prefer existing components, layouts, and content conventions
- Preserve slugs and tutorial information architecture unless directed otherwise
- If a request implies a larger restructure, propose the plan before making broad changes
