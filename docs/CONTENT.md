# Content Guidelines

Status: current guidance for writing/editing site content in the live GraphiteEdge repository.

## Product Voice

GraphiteEdge should sound:

- calm
- practical
- credible
- mentor-like

Content should help learners understand how the web works as a connected system, not just copy snippets without context.

## Core Writing Principles

- use plain English
- explain why, not just what
- avoid talking down to the reader
- prefer step-by-step clarity over cleverness
- surface assumptions and prerequisites where relevant
- keep learning content practical and structured

## Pathway-First Content Strategy

GraphiteEdge is moving toward a pathway-first tutorial model rather than a blog-style stream of isolated lessons.

Confirmed direction:

- `/tutorials` is the main pathway entry point
- section pages are secondary drill-down pages
- section landing pages should keep hand-written intro content
- section landing page lesson cards should come from curriculum source-of-truth data

When writing content, think about where it sits in a learning journey, not just as a standalone page.

## Tutorial Writing Standards

Tutorials should usually include:

1. clear context
2. prerequisites or assumptions when needed
3. stepwise explanation
4. examples that connect ideas to the real web
5. learner reinforcement through checkpoints, practice, or quizzes
6. a clear next step

Use the existing tutorial structure and components already present in the repo rather than inventing a new content pattern for each page.

## Lesson Flow

Current preferred lesson flow is:

1. breadcrumb navigation
2. tags and title
3. Hunter intro components where appropriate
4. core lesson content
5. recommendations
6. `TestYourKnowledgeSection`
7. closure/summary section

This matches the current live assessment component structure and the clarified project direction.

## Section Landing Pages

For section landing pages:

- keep the intro copy hand-authored
- explain what the section covers
- explain who it is for
- explain how the learner should use the section

Do not treat the tutorial card list itself as long-form editorial copy.

## Tutorial Metadata And Navigation Context

Tutorial content should stay aligned with:

- real route paths
- section placement
- existing tutorial sequence where currently implemented
- future curriculum alignment through `src/data/tutorials.js`

Until the architecture is more centralized, always verify the current section’s real code and route structure before assuming the docs alone describe it perfectly.

## Posts And Non-Tutorial Content

For posts and journal-style content:

- keep the tone educational rather than promotional
- include meta descriptions and clear titles
- use semantic structure and internal links where useful
- avoid reducing educational topics to shallow marketing copy

## Examples And Code

When using examples:

- prefer realistic examples over filler text
- use examples that reveal how the web works as a system
- test code snippets where practical
- avoid examples that are correct only in a narrow or misleading context

## Images And Visuals

- add screenshots or diagrams where they genuinely improve understanding
- keep alt text meaningful
- avoid decorative visual clutter that does not help the learner

## SEO And Internal Linking

When creating or editing content:

- keep slugs stable unless a change is intentional and reviewed
- include clear page titles and meta descriptions
- use heading structure that supports readability
- add useful internal links to related tutorials, pathways, or posts

Do not silently introduce changes that could affect discoverability or internal navigation.

## Best Current Practice

Use the current codebase as the source of truth for:

- page location
- route structure
- component usage
- tutorial system patterns

Use the docs to reinforce that structure, not to replace close reading of the live repo.
