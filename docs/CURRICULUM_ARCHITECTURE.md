# GraphitEdge Curriculum Architecture

Status: current audit snapshot based on `src/data/tutorials.js`, `src/pages/tutorials/`, project pages, and docs in this repository.

Last updated: August 11, 2026

## Learning Journey

GraphitEdge now presents the tutorial library as a nine-stage learner journey:

1. Understand the Web
2. Build the Foundations
3. Build Real Interactions
4. Build a Real Website
5. Use Professional Tools
6. Launch It
7. Make It Better
8. Become Independent
9. Capstone

The canonical learner-facing stage data lives in `learningJourney` inside `src/data/tutorials.js`. Existing `sections` remain the source of section landing pages and tutorial grouping. Public tutorial URLs have not been renamed.

## Repository Audit Summary

The repository currently contains 158 tutorial records in `src/data/tutorials.js`. The broad status split is:

| Status | Meaning |
|---|---|
| Complete | Page file exists and substantial teaching content is present |
| Scaffold | Page or metadata exists, but the lesson still needs authored teaching content |
| Hidden/config-only | Route or metadata exists but should not appear as a primary curriculum card yet |
| Legacy redirect | Public route exists to preserve URLs, but equivalent content has moved into another lesson |

## Journey Mapping

| Journey stage | Existing sections and tutorials reused | Notes |
|---|---|---|
| Understand the Web | Getting Started | Includes how the web works, web basics, domains/DNS/hosting, files/project structure, editors, dev environment, browser tools, and copyright/licensing. |
| Build the Foundations | HTML Basics, CSS Basics, JavaScript Basics, Black Swan Bistro Part 1 | Completed fundamentals remain intact. |
| Build Real Interactions | DOM Basics, Applied JavaScript, Working with Data | Applied JavaScript and Working with Data are complete pathways and should be preserved. |
| Build a Real Website | Design to Code, Black Swan Bistro Parts 2-4B, testing/debugging layout lessons | Existing design-to-code and Bistro lessons already form the project spine. |
| Use Professional Tools | Git Basics, Frameworks 101, Working with Vite, First Vue App with Vite, Using Bulma in a Vue Project | Do not create a duplicate general Modern Frameworks pathway. Frameworks 101 already covers the conceptual bridge. |
| Launch It | Deployments, Black Swan Bistro Parts 5-6 | The newer deployment module supersedes older standalone deployment plans. |
| Make It Better | Accessibility Essentials, SEO & Analytics, Website Care and Feeding, Black Swan Bistro Parts 7-8 | Part 7 is now an audit lesson scaffold. Part 8 is now a prioritised improvement scaffold. |
| Become Independent | Professional Practice scaffold, Black Swan Bistro Part 9, Do You Actually Need a CMS?, AI-assisted material | This is the bridge into independent judgement and capstone readiness. |
| Capstone | Rotto Rocks project pages and Capstone Spec | Rotto Rocks should assess decisions from a brief with less hand-holding than Black Swan Bistro. |

## Black Swan Bistro Final Phase

The old Part 7 concept was too broad. It has been split into three focused project lessons:

| Part | Route | Status | Outcome |
|---|---|---|---|
| Part 7 | `/tutorials/advanced/black-swan-bistro-part-7` | Scaffold | Audit the deployed site before changing code. |
| Part 8 | `/tutorials/advanced/black-swan-bistro-part-8` | Scaffold | Prioritise audit findings and make deliberate improvements. |
| Part 9 | `/tutorials/advanced/black-swan-bistro-part-9` | Scaffold | Respond to a client change, test, commit, deploy, and document. |

Part 9 client request:

- Sunday dinner opening
- New dessert: Wattleseed Creme Brulee, $16, with wattleseed custard, caramelised sugar, and native berry compote
- Mothers Day lunch promotion

## SEO and Analytics Sub-pathway

The current complete lesson is `seo-analytics/on-page-seo.vue`. `seo-analytics/analytics-setup.vue` exists but is a stub and remains hidden/config-only. The scaffolded sequence is:

1. SEO Fundamentals / On-page SEO
2. Technical SEO Basics
3. Sitemaps, robots.txt, and Indexing
4. Google Search Console
5. Analytics Setup
6. Measuring and Improving a Website

Missing lessons should be authored from this sequence later. Do not fabricate full content until the author is ready to write it.

## Professional Practice Scaffold

Professional Practice is a new structural section, not a completed pathway. It should combine overlapping future ideas rather than creating unnecessary small lessons:

| Planned lesson | Purpose |
|---|---|
| Developer Portfolio and Project Case Study | Combine portfolio and case-study evidence from completed projects. |
| Choosing the Right Technology for a Project | Build on Frameworks 101 instead of duplicating it. |
| Working Effectively With Coding Agents | Combine AI-assisted workflow, coding-agent collaboration, review, testing, and documentation. |
| Working From a Client Brief | Prepare learners for brief-led work and Rotto Rocks. |
| Documentation and Handover | Teach maintainable notes for future clients or developers. |

## Duplicates and Obsolete Plans

- Do not create a duplicate general Modern Frameworks pathway. Reuse Frameworks 101 and add a later technology-choice lesson under Professional Practice.
- Do not resurface `deployments/static-vs-dynamic.vue` or `deployments/vercel-netlify.vue` as primary cards. They are legacy redirect routes into the newer deployment module.
- Do not treat `advanced/website-care-and-feeding.vue` as the main lesson. It is a legacy redirect to the Website Care and Feeding section.
- Backend pages are present but hidden. They are outside the core frontend-to-capstone journey unless a later curriculum decision brings them forward.

## Content Gaps for Authoring

Priority order:

1. Black Swan Bistro Part 7: write the live-site audit lesson.
2. Black Swan Bistro Part 8: write prioritised improvement workflow.
3. Black Swan Bistro Part 9: write client-change maintenance workflow.
4. Analytics Setup: expand the existing stub or replace it with a full lesson.
5. Technical SEO Basics.
6. Sitemaps, robots.txt, and Indexing.
7. Google Search Console.
8. Measuring and Improving a Website.
9. Professional Practice lessons.

## Capstone Transition

Black Swan Bistro remains the guided applied project. Professional Practice introduces independent judgement. Rotto Rocks is the capstone-style project where learners decide structure, technology fit, reusable patterns, accessibility approach, testing approach, deployment approach, and maintenance considerations from a brief.
