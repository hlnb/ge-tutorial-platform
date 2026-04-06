# Tutorial Visual Rollout Plan

## Purpose

This document captures a practical plan for adding instructional graphics to GraphiteEdge tutorials.

The goal is not to decorate lessons. The goal is to improve clarity, reduce abstraction, and support a wider range of learners by using visuals as part of the teaching method.

## Audit Summary

The current tutorial library shows a clear pattern:

- earlier foundational lessons often include diagrams, illustrations, or annotated visuals
- later concept-heavy lessons rely more on text, bullets, code, and ASCII wireframes
- the biggest visual gaps appear in lessons about workflow, layout, design reading, structure, and system thinking

The highest-value missing graphics are usually at these teaching moments:

- first explanation of a concept
- comparison of similar concepts
- layout and spacing ideas
- workflow and process explanations
- wireframing and structure planning

## Working Principles

- use visuals only when they improve understanding
- keep visuals instruction-focused, not decorative
- place visuals close to the first explanation of the concept
- ensure the next paragraph explicitly references the visual
- prefer SVG for diagrams, overlays, wireframes, and comparisons
- keep changes incremental and reuse the current tutorial structure

## Visual Categories

Use these visual categories consistently across lessons:

1. Concept map
   - best for workflows, systems, relationships, and staged learning journeys

2. Annotated example
   - best for design reading, spacing, hierarchy, structure, and pattern spotting

3. Comparison panel
   - best for similar concepts such as Flexbox vs Grid, section vs block, or one-off CSS vs shared system

4. Progression sequence
   - best for showing a change over time or a design-to-code transition

5. Wireframe or structure sketch
   - best for page planning, multi-page structure, and project architecture

6. Process flow
   - best for request cycles, deployment, DNS, Git workflows, and staged build paths

## Recommended Standard by Tutorial Type

### Beginner tutorials

- 1 concept map
- 1 annotated example
- 1 comparison or process visual

### Intermediate tutorials

- 1 annotated source visual
- 1 comparison visual
- 1 applied system or wireframe visual

### Project tutorials

- 1 target wireframe or mockup
- 2 build-state snapshots or progression visuals
- 1 structure or system visual

## Priority Tutorials

Update these lessons first because they are concept-heavy and currently rely strongly on text alone:

1. `/src/pages/tutorials/intermediate/think-about-layouts.vue`
2. `/src/pages/tutorials/intermediate/how-to-read-a-design.vue`
3. `/src/pages/tutorials/intermediate/breaking-layouts-into-sections.vue`
4. `/src/pages/tutorials/beginner/idea-to-live-website.vue`
5. `/src/pages/tutorials/intermediate/black-swan-bistro-part-2.vue`
6. `/src/pages/tutorials/intermediate/css-systems-for-reusable-sections.vue`
7. `/src/pages/tutorials/intermediate/flexbox-for-real-layouts.vue`

## Visual Briefs for First Rollout

### 1. From Idea to Live Website

File:
- `/src/pages/tutorials/beginner/idea-to-live-website.vue`

Recommended visuals:

1. From Idea to Live Website
   - type: staged roadmap
   - placement: after "The Big Picture"
   - purpose: replace the text-only stage stack with a clearer visual journey

2. How Black Swan Bistro Fits the Journey
   - type: pathway progression diagram
   - placement: inside or just before "The Black Swan Bistro Example"
   - purpose: connect the project series to the larger learning map

3. Common Beginner Mistakes in the Build Order
   - type: comparison strip
   - placement: before "Common Mistakes Beginners Make"
   - purpose: show rushing-to-polish versus building-in-layers

### 2. How to Think About Layouts

File:
- `/src/pages/tutorials/intermediate/think-about-layouts.vue`

Recommended visuals:

1. See the Big Shapes Before the Details
   - type: annotated page overlay
   - placement: after "Step 1: See the Big Shapes First"
   - purpose: show how a page becomes large regions before any CSS choices

2. Row, Column, or Grid?
   - type: three-panel comparison
   - placement: after "Step 3: Think in Rows and Columns"
   - purpose: make one-dimensional versus two-dimensional thinking visible

3. From Design to Simple Wireframe
   - type: progression sequence
   - placement: after "Step 5: Make a Simple Wireframe"
   - purpose: bridge visual design into low-fidelity structure

### 3. How to Read a Design

File:
- `/src/pages/tutorials/intermediate/how-to-read-a-design.vue`

Recommended visuals:

1. First Pass: What Should You Notice First?
   - type: annotated mockup
   - placement: after "Step 1: Take a First Pass"
   - purpose: show scanning order and page-level reading habits

2. Reading Spacing and Repetition
   - type: spacing and pattern callout image
   - placement: after "Step 2: Read Spacing and Structure"
   - purpose: make invisible layout rules visible

3. From Mockup Clues to Coding Notes
   - type: side-by-side annotated example
   - placement: after "Step 6: Make a Simple Notes Checklist"
   - purpose: show how design clues become implementation notes

### 4. Breaking Layouts into Sections

File:
- `/src/pages/tutorials/intermediate/breaking-layouts-into-sections.vue`

Recommended visuals:

1. One Page, Many Purposes
   - type: section breakdown diagram
   - placement: after "Start with the Main Page Regions"
   - purpose: show that a page is a set of meaningful regions

2. Section or Internal Block?
   - type: comparison panel
   - placement: after "Know the Difference Between Sections and Blocks"
   - purpose: clarify a common beginner mistake

3. From Section Plan to HTML Skeleton
   - type: structure mapping diagram
   - placement: after "Write the HTML Skeleton"
   - purpose: connect visible page planning to semantic HTML

## Production Asset List

Store instructional graphics under:

- `/public/images/tutorials/instructional/beginner/`
- `/public/images/tutorials/instructional/intermediate/`
- `/public/images/tutorials/instructional/projects/`

Use this naming pattern:

- `tutorial-[slug]-[concept]-[type].svg`

### Asset filenames for first rollout

- `tutorial-idea-to-live-website-roadmap-staged-journey.svg`
- `tutorial-idea-to-live-website-black-swan-pathway-progression.svg`
- `tutorial-idea-to-live-website-build-order-comparison.svg`
- `tutorial-think-about-layouts-big-shapes-overlay.svg`
- `tutorial-think-about-layouts-row-column-grid-comparison.svg`
- `tutorial-think-about-layouts-design-to-wireframe-sequence.svg`
- `tutorial-how-to-read-a-design-first-pass-annotated-mockup.svg`
- `tutorial-how-to-read-a-design-spacing-and-patterns-callouts.svg`
- `tutorial-how-to-read-a-design-mockup-to-coding-notes.svg`
- `tutorial-breaking-layouts-into-sections-page-region-breakdown.svg`
- `tutorial-breaking-layouts-into-sections-section-vs-block-comparison.svg`
- `tutorial-breaking-layouts-into-sections-page-to-html-skeleton-map.svg`

## Suggested Aspect Ratios

- roadmap and progression graphics: `16:9`
- page overlays: `16:10`
- comparisons: `16:9` or `4:3`
- structure maps: `16:9`
- annotated mockups: `16:10`

## Recommended Content Pattern

When inserting a visual into a lesson, use this flow:

1. short introductory paragraph
2. instructional figure
3. brief caption
4. one short interpretation paragraph or 2 to 4 bullets
5. code or exercise after the visual, not before it

## Caption Standard

Each caption should cover:

- what the learner is looking at
- why it matters
- what the learner will do next

Example:

> This diagram shows the largest page regions before any CSS decisions. It matters because layout gets easier once structure is clear first. In the next section, you will turn that structure into a simple HTML plan.

## Alt Text Standard

Alt text should describe the teaching value of the image, not just its presence.

Good example:

> Annotated mockup showing repeated card spacing, shared container edges, and highlighted button styles.

Avoid:

> Design diagram.

## Small Structural Improvements

The current tutorial system can already support inline visuals well enough. No broad redesign is needed.

Small improvements that would help consistency:

- add a shared `tutorial-figure` style pattern
- support a reusable comparison figure treatment
- support an annotated visual wrapper with a caption and optional note
- standardise spacing and caption width for instructional images

## Phased Rollout Plan

### Phase 1: High-leverage concept lessons

Add visuals to:

- `/src/pages/tutorials/intermediate/think-about-layouts.vue`
- `/src/pages/tutorials/intermediate/how-to-read-a-design.vue`
- `/src/pages/tutorials/intermediate/breaking-layouts-into-sections.vue`
- `/src/pages/tutorials/beginner/idea-to-live-website.vue`

### Phase 2: Bridge-to-project lessons

Add visuals to:

- `/src/pages/tutorials/intermediate/black-swan-bistro-part-2.vue`
- `/src/pages/tutorials/intermediate/css-systems-for-reusable-sections.vue`
- `/src/pages/tutorials/intermediate/flexbox-for-real-layouts.vue`

### Phase 3: Build the shared pattern

- introduce a lightweight shared figure pattern in tutorial styles
- reuse the same visual categories across future lessons
- ensure captions and alt text follow the same teaching standard

### Phase 4: Bake visuals into new tutorial creation

For future lessons, plan visuals during outlining rather than retrofitting them later.

Priority future lessons:

- `/src/pages/tutorials/intermediate/multi-page-structure.vue`
- `/src/pages/tutorials/intermediate/building-reusable-components.vue`
- `/src/pages/tutorials/intermediate/css-grid-for-repeated-layouts.vue`
- `/src/pages/tutorials/intermediate/responsive-refinement-for-reusable-components.vue`
- `/src/pages/tutorials/advanced/domains-dns-going-live.vue`

## Visual QA Checklist

Before adding any instructional graphic, confirm:

- the visual teaches one concept clearly
- labels match lesson vocabulary
- the next paragraph references the visual directly
- the asset is readable on mobile
- contrast is strong enough
- the graphic supports the code or exercise that follows
- the visual is helping the lesson, not decorating it
