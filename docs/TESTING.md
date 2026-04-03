# Testing Guide

Status: current practical validation guidance for the live repository.

## Minimum Validation

Before finishing meaningful site or tutorial changes, prefer to run:

1. `npm run build`
2. `npm run lint`

If either cannot be completed because of environment or tooling issues, note that clearly in the handoff.

## Tutorial-System Checks

For tutorial-related changes, verify:

1. `/tutorials` loads
2. at least one affected section landing page loads
3. at least one affected lesson route loads directly
4. the shared tutorial layout appears as expected
5. sidebar/mobile lesson navigation still works
6. previous/next tutorial navigation still works
7. recommendations render where expected
8. `TestYourKnowledgeSection` renders in the expected place
9. closure/completion flow still makes sense

## Content Checks

Verify:

1. headings and page structure render correctly
2. code examples display correctly
3. links resolve to real routes/resources
4. images and diagrams load correctly
5. no obvious markdown/content formatting breakage is visible

## Responsive Checks

Check at minimum:

1. a desktop-width tutorial page
2. a mobile-width tutorial page
3. the mobile tutorial menu/drawer if the page uses the shared tutorial layout

## Progress And Quiz Checks

If the change touches progress or quizzes, verify:

1. quiz content appears for routes that should have it
2. quiz completion still updates progress
3. progress page still loads
4. completion/review links still work

## General Site Checks

For broader site changes, verify:

1. homepage loads
2. key navigation works
3. changed pages render without console-breaking runtime errors
4. static assets still load

## Performance And Quality Checks

When relevant, also check:

1. Lighthouse or similar performance sanity checks
2. obvious image optimization issues
3. obvious layout shift or oversized content problems

These are valuable, but they do not replace build/lint/basic route verification.
