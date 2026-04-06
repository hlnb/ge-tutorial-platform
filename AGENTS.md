# AGENTS.md — GraphiteEdge

## Project purpose

GraphiteEdge is a calm, credible web development education site.
Its job is to teach how the web works end-to-end: design, code, deployment, security, structure, and ethical AI-assisted development.

This is not a content farm.
Prefer structured learning pathways over random isolated posts.
Prefer clarity, reuse, and maintainability over novelty.

## Audience

Primary audience:

- beginners learning web development
- small business owners who want to understand and manage their own websites
- learners who need practical guidance without jargon overload

## Product direction

Key strategic direction:

- GraphiteEdge is being shaped around pathways rather than a blog-like stream
- tutorials should ladder from beginner to intermediate
- AI is framed as an assistant, not a substitute for fundamentals
- shipping fewer, higher-quality tutorials is better than publishing more shallow content

## Tech stack

- Frontend: Vue 3 + Vite
- Styling: Bulma CSS preferred
- Avoid introducing Tailwind unless explicitly requested
- Markdown rendering: markdown-it or current project markdown pipeline
- Hosting/deployment: Vercel
- Auth/data where relevant: Firebase

## Working style

When working on existing systems:

- prefer understanding and improving the current implementation rather than recreating it.

When making changes:

1. Preserve existing architecture unless there is a strong reason to change it
2. Prefer incremental improvements over rewrites
3. Explain major structural recommendations before implementing them
4. Keep changes scoped to the requested task
5. Do not add dependencies casually
6. Keep semantic HTML and accessibility in mind
7. Favour readable code over clever code

### Tutorial workflow

- When creating or revising a GraphiteEdge tutorial, prefer using the graphitedge-tutorial-builder skill if it is available.

## Content and UX rules

- Learning content should be structured, stepwise, and practical
- Avoid talking down to the reader
- Use plain English
- Explain why, not just what
- Prefer examples that show the web as a system, not just snippets
- Keep UI calm, readable, and uncluttered
- Reusable components and consistent layouts are preferred

### Tutorial system (important)

- The tutorial layout system already exists.
- When working on tutorials, prefer understanding, reusing, and refining the current layout, components, and CSS rather than recreating the structure.

- Custom CSS files are used intentionally alongside Bulma.
- Do not assume Bulma alone should replace them.

- Prefer improving consistency across tutorials over introducing new patterns.

## SEO and site integrity

- Preserve existing slugs unless explicitly asked to change them
- Flag any change that could affect internal linking, metadata, navigation, or indexability
- If creating tutorial pages, consider title, meta description, heading structure, and internal links
- Do not silently delete or rename content collections

## Coding preferences

- Prefer composition and reusable components where it improves clarity
- Keep component responsibilities narrow
- Avoid overengineering
- Keep CSS simple and maintainable
- Use comments sparingly and only where they add real value

## Validation

Before finishing work:

- install dependencies only if needed
- run the local build
- run lint if available
- verify changed routes/components still build correctly
- confirm content renders without obvious markdown/layout breakage
- report any unresolved issues clearly

## When working on tutorials

If asked to create or edit a tutorial:

- maintain the GraphiteEdge teaching voice: confident, practical, mentor-like
- include explanation, not just instructions
- surface assumptions
- note prerequisites
- where relevant, explain tradeoffs between tools or hosting choices

## What to avoid

- do not convert the project to Tailwind
- do not redesign the whole site unless explicitly asked
- do not introduce complex state management unless justified
- do not replace Bulma-based styling patterns without approval
- do not collapse educational depth into marketing copy
