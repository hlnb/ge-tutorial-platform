---
name: graphitedge-tutorial-builder
description: Create, expand, revise, or structurally align GraphiteEdge tutorials using the existing tutorial system, hunter lesson components, concept-teaching diagrams, and GraphiteEdge's pathway-first teaching standards.
---

# GraphiteEdge tutorial builder

Use this skill when the task is specifically about GraphiteEdge tutorial authoring or revision, including:

- creating a new tutorial page
- expanding a partial or placeholder tutorial
- adding missing teaching structure to an existing lesson
- aligning a lesson with GraphiteEdge tutorial standards
- adding or planning diagrams, overlays, or other concept-teaching visuals for a tutorial

Do not use this skill for general site edits that are not tutorial-authoring work.

## Goals

- preserve the existing GraphiteEdge tutorial system
- keep the teaching voice confident, practical, and mentor-like
- teach with explanation and structure, not just instructions
- strengthen conceptual understanding with purposeful visuals where needed
- keep practice work scaffolded, bounded, and realistic

## First pass

Before writing or revising lesson content:

1. Read `AGENTS.md`
2. Inspect the target tutorial if it already exists
3. Inspect nearby tutorials in the same pathway or level for patterns
4. Reuse existing GraphiteEdge architecture, section flow, components, and styling conventions before inventing anything new

Check for existing usage of:

- `@/components/hunter/AnticipatorySet.vue`
- `@/components/hunter/LearningObjectives.vue`
- `@/components/hunter/CheckpointBox.vue`
- `@/components/hunter/GuidedPractice.vue`
- `@/components/hunter/IndependentPractice.vue`
- `@/components/hunter/ClosureSection.vue`
- `@/components/TutorialRecommendations.vue`
- `@/composables/usePageSections`
- existing tutorial figure styles, diagrams, captions, and section navigation patterns

Preserve existing layout components, custom CSS, and tutorial conventions when they appear intentional. Do not flatten GraphiteEdge into generic Vue content pages.

## Teaching model

GraphiteEdge lessons should:

- follow a pathway-first model rather than feeling like isolated blog posts
- explain why, not just what
- use plain English without talking down to the learner
- connect concepts to real UI, layout, design-to-code, or web-building decisions
- treat AI as an assistant, not a substitute for understanding fundamentals

Prefer explanations that show how the web works as a system. When possible, connect the lesson to earlier or next-step learning in the pathway.

## Default intermediate lesson structure

For intermediate standalone tutorials, use this structure unless the lesson clearly needs a different pattern:

1. `AnticipatorySet`
2. `LearningObjectives`
3. Concept explanation sections that teach both how and why
4. `CheckpointBox`
5. `GuidedPractice`
6. `IndependentPractice`
7. `Additional Resources` when it genuinely helps
8. `Recap`
9. `ClosureSection`
10. `TutorialRecommendations`

When building or revising the lesson:

- make sure section IDs and `usePageSections` entries match the actual flow
- keep the sequence readable and uncluttered
- do not add structure mechanically if a lesson already has a deliberate equivalent
- if deviating from this structure, make the reason explicit in your summary

## Content rules

- explain the reasoning behind each major concept
- prefer practical examples tied to real page structure, UI decisions, CSS/layout choices, or implementation workflow
- keep the concept sections stepwise and cumulative
- make checkpoint questions test understanding, not trivia
- scaffold guided practice so the learner is supported through each step
- keep independent practice bounded, achievable, and clearly related to the lesson goal
- do not let independent practice turn into a mini-project unless the user explicitly asks for that
- surface assumptions, prerequisites, and tradeoffs where they matter

## Visual teaching requirements

Identify places where a visual would improve understanding, especially when the learner must:

- see structure, hierarchy, grouping, spacing, or alignment
- compare concepts such as row vs column vs grid
- translate a design into implementation decisions
- understand sequence, flow, or layered relationships

Prefer instructional visuals over decorative images.

When adding or planning visuals:

- use graphics to clarify the concept, not just to fill space
- prefer existing GraphiteEdge diagram patterns or SVG-style diagrams that fit the current tutorial system
- note meaningful placement in the lesson near the concept it reinforces
- provide accessible alt text and useful figcaptions
- keep visuals concept-driven, calm, and readable

If a graphic is appropriate but not yet created, leave a clear note or placeholder direction that explains:

- what the diagram should teach
- where it belongs
- what the learner should notice from it

## Reuse rules

- reuse existing `hunter` components where possible
- reuse established tutorial page structure and figure styling
- do not invent new major component types unless clearly necessary
- do not redesign the tutorial system
- do not replace intentional custom CSS with a different styling approach
- do not introduce Tailwind or another framework unless explicitly requested
- keep changes incremental and scoped to the tutorial task

## Workflow

1. Inspect the target lesson and surrounding tutorial patterns
2. Decide whether the task is a new lesson, an expansion, a structural repair, or a visual-teaching improvement
3. Map the lesson to the appropriate GraphiteEdge structure
4. Write or revise the content in the GraphiteEdge teaching voice
5. Add or plan concept-teaching visuals where they materially improve understanding
6. Verify imports, section order, and recommendation placement
7. Validate build/readability, then summarize what changed and any follow-up

## Validation and handoff

Before finishing:

- verify imports are correct and only include what the lesson uses
- verify section placement and page-section navigation stay in sync
- verify `TutorialRecommendations` points at the correct current path
- verify the lesson reads cleanly and does not feel cluttered
- verify visuals, if added, are placed meaningfully and support the nearby concept
- run the local build
- run lint if available
- report unresolved issues clearly

In the handoff summary, include:

- what tutorial structure was added or revised
- what visuals were added, referenced, or proposed
- any assumptions made
- any follow-up work still needed

## Usage example

Example prompts that should trigger this skill:

- `Create a new GraphiteEdge intermediate tutorial about CSS naming systems using the existing tutorial structure.`
- `Expand this placeholder GraphiteEdge lesson and add the missing AnticipatorySet, GuidedPractice, and ClosureSection.`
- `Revise this GraphiteEdge tutorial so it matches our teaching structure and add a diagram that explains the concept more clearly.`
