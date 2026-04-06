# Tutorial Writing Schedule

> 21 tutorials · 1–2 per day · Start date: 25 March 2026

Use the checkboxes to track your progress. Tick each tutorial once committed to the repo.

---

## Week 1 — Foundation & Beginner (easiest wins first)

| Day | Date   | Tutorial                                       | Slug                                              | Time   | Source Content                                        | Done |
| --- | ------ | ---------------------------------------------- | ------------------------------------------------- | ------ | ----------------------------------------------------- | ---- |
| 1   | 25 Mar | Files, Folders & Project Structure             | `getting-started/files-folders-project-structure` | 20 min | Write from scratch                                    | [ ]  |
| 2   | 26 Mar | Why Your CSS Isn't Working (And How to Fix It) | `beginner/why-your-css-isnt-working`              | 30 min | Partial — `responsive-design` post                    | [ ]  |
| 3   | 27 Mar | From Idea to Live Website                      | `beginner/idea-to-live-website`                   | 25 min | Seed from `internet-everywhere` + `javascript-basics` | [ ]  |
| 4   | 28 Mar | Black Swan Bistro — Part 1 (First Web Page)    | `beginner/black-swan-bistro-part-1`               | 60 min | Adapt from `build-first-web-page` post                | [ ]  |

---

## Week 2 — Builder Path (design-to-code post carries you)

| Day | Date   | Tutorial                                       | Slug                                          | Time   | Source Content                          | Done |
| --- | ------ | ---------------------------------------------- | --------------------------------------------- | ------ | --------------------------------------- | ---- |
| 5   | 31 Mar | How to Think About Layouts                     | `intermediate/think-about-layouts`            | 30 min | Write from scratch                      | [ ]  |
| 6   | 1 Apr  | How to Read a Design                           | `intermediate/how-to-read-a-design`           | 35 min | Strong — `design-to-code` post          | [ ]  |
| 7   | 2 Apr  | Breaking Layouts into Sections                 | `intermediate/breaking-layouts-into-sections` | 30 min | Strong — `design-to-code` post (Step 1) | [ ]  |
| 8   | 3 Apr  | Black Swan Bistro (BSB) Part 2: Build the Homepage Wireframe Layout with CSS | `intermediate/black-swan-bistro-part-2`       | 60 min | Write from scratch (applies Days 5–7)   | [ ]  |

Builder-path intent for this week:

- Day 5 teaches layout thinking before code
- Day 6 teaches how to read spacing, colour, hierarchy, and structure from a design
- Day 7 teaches how to translate that design into page sections
- Day 8 applies those ideas in Black Swan Bistro with reusable CSS patterns

Tooling emphasis for the builder path:

- use Flexbox for simple one-dimensional alignment such as nav bars and header/footer layouts
- use Grid when learners meet repeated two-dimensional layouts such as card groups and galleries
- keep the main focus on layout decisions and design thinking, not syntax overload

---

## Week 3 — Components & Multi-page

| Day | Date   | Tutorial                                     | Slug                                        | Time   | Source Content                            | Done |
| --- | ------ | -------------------------------------------- | ------------------------------------------- | ------ | ----------------------------------------- | ---- |
| 9   | 7 Apr  | Building Reusable Components                 | `intermediate/building-reusable-components` | 40 min | Moderate — `design-to-code` post (Step 2) | [ ]  |
| 10  | 8 Apr  | Black Swan Bistro — Part 3 (Components)      | `intermediate/black-swan-bistro-part-3`     | 55 min | Write from scratch (applies Day 9)        | [ ]  |
| 11  | 9 Apr  | Multi-page Structure                         | `intermediate/multi-page-structure`         | 35 min | Write from scratch                        | [ ]  |
| 12  | 10 Apr | Black Swan Bistro — Part 4 (Multi-page Site) | `intermediate/black-swan-bistro-part-4`     | 65 min | Write from scratch (applies Day 11)       | [ ]  |

---

## Week 4 — Debugging, Tooling & Deployment

| Day | Date   | Tutorial                                            | Slug                                 | Time   | Source Content              | Done |
| --- | ------ | --------------------------------------------------- | ------------------------------------ | ------ | --------------------------- | ---- |
| 13  | 14 Apr | How to Debug a Broken Web Page                      | `intermediate/debug-broken-web-page` | 35 min | Write from scratch          | [ ]  |
| 14  | 15 Apr | Working with Vite                                   | `intermediate/working-with-vite`     | 35 min | Write from scratch          | [ ]  |
| 15  | 16 Apr | Black Swan Bistro — Part 5 (Prepare for Deployment) | `advanced/black-swan-bistro-part-5`  | 45 min | Seed from `git-basics` post | [ ]  |
| 16  | 17 Apr | Black Swan Bistro — Part 6 (Deploy the Site)        | `advanced/black-swan-bistro-part-6`  | 50 min | Seed from `git-basics` post | [ ]  |

---

## Week 5 — Advanced & Maintenance

| Day | Date   | Tutorial                                        | Slug                                | Time   | Source Content                                                      | Done |
| --- | ------ | ----------------------------------------------- | ----------------------------------- | ------ | ------------------------------------------------------------------- | ---- |
| 17  | 21 Apr | Domains, DNS & Going Live                       | `advanced/domains-dns-going-live`   | 35 min | Strong — `dns-web-browsing` post                                    | [ ]  |
| 18  | 22 Apr | Do You Actually Need a CMS?                     | `advanced/do-you-need-a-cms`        | 25 min | Write from scratch                                                  | [ ]  |
| 19  | 23 Apr | Black Swan Bistro — Part 7 (Maintain & Improve) | `advanced/black-swan-bistro-part-7` | 40 min | Seed from `web-performance-optimization` post                       | [ ]  |
| 20  | 24 Apr | Website Care and Feeding                        | `advanced/website-care-and-feeding` | 30 min | Strong — `web-performance-optimization` + `web-security-essentials` | [ ]  |
| 21  | 25 Apr | Accessibility Essentials                        | `advanced/accessibility-essentials` | 40 min | Write from scratch                                                  | [ ]  |

---

## Notes

- **Weekends skipped** in the schedule (Sat/Sun).
- Each tutorial page already exists as a placeholder at `src/pages/tutorials/{slug}.vue`.
- All slugs are mapped in `src/data/tutorials.js`.
- Blog posts that can be adapted live in `src/pages/posts/`.
- The pattern for each concept → project pair: write the concept tutorial first, then write the BSB project part that applies it.
- See `docs/TUTORIAL_STRUCTURE.md` for the Hunter component template to follow.
