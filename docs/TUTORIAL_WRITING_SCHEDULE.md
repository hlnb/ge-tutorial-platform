# Tutorial Writing Schedule

> 23 tutorials · 1–2 per day · Start date: 25 March 2026
> Reconciled: 5 May 2026

Use the checkboxes to track your progress. Tick each tutorial once committed to the repo.

---

## Week 1 — Foundation & Beginner (easiest wins first)

| Day | Date   | Tutorial                                       | Slug                                              | Time   | Source Content                                        | Done |
| --- | ------ | ---------------------------------------------- | ------------------------------------------------- | ------ | ----------------------------------------------------- | ---- |
| 1   | 25 Mar | Files, Folders & Project Structure             | `getting-started/files-folders-project-structure` | 20 min | Write from scratch                                    | [x]  |
| 2   | 26 Mar | Why Your CSS Isn't Working (And How to Fix It) | `beginner/why-your-css-isnt-working`              | 30 min | Partial — `responsive-design` post                    | [x]  |
| 3   | 27 Mar | From Idea to Live Website                      | `beginner/idea-to-live-website`                   | 25 min | Seed from `internet-everywhere` + `javascript-basics` | [x]  |
| 4   | 28 Mar | Black Swan Bistro — Part 1 (First Web Page)    | `beginner/black-swan-bistro-part-1`               | 60 min | Adapt from `build-first-web-page` post                | [x]  |

---

## Week 2 — Builder Path (design-to-code post carries you)

| Day | Date   | Tutorial                                       | Slug                                          | Time   | Source Content                          | Done |
| --- | ------ | ---------------------------------------------- | --------------------------------------------- | ------ | --------------------------------------- | ---- |
| 5   | 31 Mar | How to Think About Layouts                     | `intermediate/think-about-layouts`            | 30 min | Write from scratch                      | [x]  |
| 6   | 1 Apr  | How to Read a Design                           | `intermediate/how-to-read-a-design`           | 35 min | Strong — `design-to-code` post          | [x]  |
| 7   | 2 Apr  | Breaking Layouts into Sections                 | `intermediate/breaking-layouts-into-sections` | 30 min | Strong — `design-to-code` post (Step 1) | [x]  |
| 8   | 3 Apr  | Black Swan Bistro (BSB) Part 2: Build the Homepage Wireframe Layout with CSS | `intermediate/black-swan-bistro-part-2`       | 60 min | Write from scratch (applies Days 5–7)   | [x]  |

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
| 9   | 7 Apr  | Building Reusable Components                 | `intermediate/building-reusable-components` | 40 min | Moderate — `design-to-code` post (Step 2) | [x]  |
| 10  | 8 Apr  | Black Swan Bistro — Part 3 (Components)      | `intermediate/black-swan-bistro-part-3`     | 55 min | Write from scratch (applies Day 9)        | [x]  |
| 11  | 9 Apr  | Multi-page Structure                         | `intermediate/multi-page-structure`         | 35 min | Write from scratch                        | [x]  |
| 12  | 10 Apr | Black Swan Bistro — Part 4 (Multi-page Site) | `intermediate/black-swan-bistro-part-4`     | 65 min | Write from scratch (applies Day 11)       | [x]  |

---

## Week 4 — Debugging, Tooling & Deployment

| Day | Date   | Tutorial                                            | Slug                                 | Time   | Source Content              | Done |
| --- | ------ | --------------------------------------------------- | ------------------------------------ | ------ | --------------------------- | ---- |
| 13  | 14 Apr | How to Debug a Broken Web Page                      | `intermediate/debug-broken-web-page` | 35 min | Write from scratch          | [x]  |

Sequence adjustment:

- `intermediate/working-with-vite` no longer belongs in the middle of the builder-to-deployment jump.
- Write it after learners complete `Applied JavaScript`, `Working with Data`, and `Frameworks 101`.
- Treat it as a tooling extension lesson: Vite explains the dev/build workflow around modern frontend projects, not the conceptual introduction to frameworks.

## Week 4.5 — Modern Frontend Tooling Bridge

| Day | Date | Tutorial | Slug | Time | Source Content | Done |
| --- | ---- | -------- | ---- | ---- | -------------- | ---- |
| 14  | TBD  | Working with Vite | `intermediate/working-with-vite` | 35 min | Write from scratch after `Applied JavaScript`, `Working with Data`, and `Frameworks 101` | [x] |
| 15  | TBD  | First Vue App with Vite | `intermediate/first-vue-app-with-vite` | 45 min | Write from scratch using the existing Todo List project as the case study | [x] |
| 16  | TBD  | Using Bulma in a Vue Project | `intermediate/using-bulma-in-a-vue-project` | 40 min | Write from scratch using the existing Todo List project as the styling case study | [x] |

Bridge-path intent for this block:

- Day 14 explains the tooling layer around modern frontend projects
- Day 15 introduces the shape of a small Vue application using an already-familiar project
- Day 16 shows how a CSS framework such as Bulma can speed up interface structure without replacing CSS understanding

---

## Week 5 — Advanced & Maintenance

| Day | Date   | Tutorial                                        | Slug                                | Time   | Source Content                                                      | Done |
| --- | ------ | ----------------------------------------------- | ----------------------------------- | ------ | ------------------------------------------------------------------- | ---- |
| 17  | 21 Apr | Black Swan Bistro — Part 5 (Prepare for Deployment) | `advanced/black-swan-bistro-part-5`  | 45 min | Seed from `git-basics` post | [ ]  |
| 18  | 22 Apr | Black Swan Bistro — Part 6 (Deploy the Site)        | `advanced/black-swan-bistro-part-6`  | 50 min | Seed from `git-basics` post | [ ]  |
| 19  | 23 Apr | Domains, DNS & Going Live                       | `advanced/domains-dns-going-live`   | 35 min | Strong — `dns-web-browsing` post                                    | [ ]  |
| 20  | 24 Apr | Do You Actually Need a CMS?                     | `advanced/do-you-need-a-cms`        | 25 min | Write from scratch                                                  | [ ]  |
| 21  | 25 Apr | Black Swan Bistro — Part 7 (Maintain & Improve) | `advanced/black-swan-bistro-part-7` | 40 min | Seed from `web-performance-optimization` post                       | [ ]  |
| 22  | 28 Apr | Website Care and Feeding                        | `advanced/website-care-and-feeding` | 30 min | Strong — `web-performance-optimization` + `web-security-essentials` | [ ]  |
| 23  | 29 Apr | Accessibility Essentials                        | `advanced/accessibility-essentials` | 40 min | Write from scratch                                                  | [ ]  |

---

## Notes

- **Weekends skipped** in the schedule (Sat/Sun).
- Each tutorial page already exists as a placeholder at `src/pages/tutorials/{slug}.vue`.
- All slugs are mapped in `src/data/tutorials.js`.
- Blog posts that can be adapted live in `src/pages/posts/`.
- The pattern for each concept → project pair: write the concept tutorial first, then write the BSB project part that applies it.
- `Working with Vite`, `First Vue App with Vite`, and `Using Bulma in a Vue Project` are intentionally sequenced after the existing intermediate JavaScript and framework lessons so the bridge can stay focused on implementation and tooling rather than framework theory alone.
- See `docs/TUTORIAL_STRUCTURE.md` for the Hunter component template to follow.
