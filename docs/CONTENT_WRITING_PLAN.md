# Content Writing Plan

> Companion to `TUTORIAL_WRITING_SCHEDULE.md` — covers stubs, standalone projects, and display decisions.
> Updated: 24 March 2026

---

## 1. Tutorial Stubs Needing Content

### Already on the Writing Schedule (21 tutorials)

These stubs are covered in `TUTORIAL_WRITING_SCHEDULE.md` with dates, source content, and time estimates. No action needed here — just follow that schedule.

| Stub                                          | Schedule       |
| --------------------------------------------- | -------------- |
| `beginner/why-your-css-isnt-working`          | Week 1, Day 2  |
| `intermediate/think-about-layouts`            | Week 2, Day 5  |
| `intermediate/how-to-read-a-design`           | Week 2, Day 6  |
| `intermediate/breaking-layouts-into-sections` | Week 2, Day 7  |
| `intermediate/building-reusable-components`   | Week 3, Day 9  |
| `intermediate/multi-page-structure`           | Week 3, Day 11 |
| `intermediate/debug-broken-web-page`          | Week 4, Day 13 |
| `intermediate/working-with-vite`              | Week 4, Day 14 |
| `advanced/domains-dns-going-live`             | Week 5, Day 17 |
| `advanced/do-you-need-a-cms`                  | Week 5, Day 18 |
| `advanced/website-care-and-feeding`           | Week 5, Day 20 |
| `advanced/accessibility-essentials`           | Week 5, Day 21 |
| BSB Parts 2–7                                 | Weeks 2–5      |

### NOT on the Writing Schedule (need to be added)

These stubs exist as pages but aren't in the current schedule. Decide: write them, merge them into existing tutorials, or remove them.

#### AI-Assisted (7 stubs — all ~9 lines)

| File                                         | Content    | Decision                           |
| -------------------------------------------- | ---------- | ---------------------------------- |
| `ai-assisted/introduction.vue`               | Title only | [ ] Write / [ ] Merge / [ ] Remove |
| `ai-assisted/workflow-integration.vue`       | Title only | [ ] Write / [ ] Merge / [ ] Remove |
| `ai-assisted/building-with-ai.vue`           | Title only | [ ] Write / [ ] Merge / [ ] Remove |
| `ai-assisted/design-to-code.vue`             | Title only | [ ] Write / [ ] Merge / [ ] Remove |
| `ai-assisted/custom-gpt-automation.vue`      | Title only | [ ] Write / [ ] Merge / [ ] Remove |
| `ai-assisted/projects/ai-landing-page.vue`   | Title only | [ ] Write / [ ] Merge / [ ] Remove |
| `ai-assisted/projects/ai-component-docs.vue` | Title only | [ ] Write / [ ] Merge / [ ] Remove |

#### Backend (4 stubs — all ~9-15 lines)

| File                      | Content        | Decision                           |
| ------------------------- | -------------- | ---------------------------------- |
| `backend/index.vue`       | Category index | [ ] Write / [ ] Merge / [ ] Remove |
| `backend/node-basics.vue` | Title only     | [ ] Write / [ ] Merge / [ ] Remove |
| `backend/rest-apis.vue`   | Title only     | [ ] Write / [ ] Merge / [ ] Remove |
| `backend/databases.vue`   | Title only     | [ ] Write / [ ] Merge / [ ] Remove |

#### Deployments (4 stubs — all ~9-15 lines)

| File                                | Content        | Decision                           |
| ----------------------------------- | -------------- | ---------------------------------- |
| `deployments/index.vue`             | Category index | [ ] Write / [ ] Merge / [ ] Remove |
| `deployments/vercel-netlify.vue`    | Title only     | [ ] Write / [ ] Merge / [ ] Remove |
| `deployments/firebase-hosting.vue`  | Title only     | [ ] Write / [ ] Merge / [ ] Remove |
| `deployments/static-vs-dynamic.vue` | Title only     | [ ] Write / [ ] Merge / [ ] Remove |

#### SEO & Analytics (3 stubs — all ~9-11 lines)

| File                                | Content        | Decision                           |
| ----------------------------------- | -------------- | ---------------------------------- |
| `seo-analytics/index.vue`           | Category index | [ ] Write / [ ] Merge / [ ] Remove |
| `seo-analytics/on-page-seo.vue`     | Title only     | [ ] Write / [ ] Merge / [ ] Remove |
| `seo-analytics/analytics-setup.vue` | Title only     | [ ] Write / [ ] Merge / [ ] Remove |

#### Other (2 stubs)

| File                 | Content                    | Decision                           |
| -------------------- | -------------------------- | ---------------------------------- |
| `capstone/index.vue` | Category index (~13 lines) | [ ] Write / [ ] Merge / [ ] Remove |
| `capstone/spec.vue`  | Brief spec (~12 lines)     | [ ] Write / [ ] Merge / [ ] Remove |

---

## 2. Standalone Projects

These finished project files live in `public/projects/` and serve as reference examples students can view during tutorials.

### Black Swan Bistro

| Version    | Location                                         | Files                                                              |
| ---------- | ------------------------------------------------ | ------------------------------------------------------------------ |
| HTML-only  | `public/projects/html-basics/black-swan-bistro/` | `index.html`, `menu.html`, `about.html`, `README.md`               |
| HTML + CSS | `public/projects/css-basics/black-swan-bistro/`  | `index.html`, `menu.html`, `about.html`, `styles.css`, `README.md` |

**Referenced by:** `beginner/html-basics/index.vue`, `beginner/html-basics/introduction.vue`, `beginner/html-basics/html-images.vue`, `beginner/css-basics/index.vue`

**Images in:** `public/images/tutorials/html-basics/` (logo, storefront, interior, pasta, lasagna, steak)

**Note:** These represent the "finished" multi-page site. BSB Part 1 tutorial builds a simpler single-page version as a learning exercise. The finished files are intentionally more advanced — students can look at them for reference/inspiration.

### Rotto Rocks

| Version    | Location                                   | Files                                                                                              |
| ---------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| HTML-only  | `public/projects/html-basics/rotto-rocks/` | `index.html`, `activities.html`, `accommodation.html`, `transport.html`, `README.md`               |
| HTML + CSS | `public/projects/css-basics/rotto-rocks/`  | `index.html`, `activities.html`, `accommodation.html`, `transport.html`, `styles.css`, `README.md` |

**Referenced by:** `beginner/html-basics/index.vue`, `beginner/html-basics/introduction.vue`, `beginner/html-basics/html-images.vue`, `beginner/css-basics/index.vue`

**Images in:** `public/images/tutorials/html-basics/` (quokka.jpg)

---

## 3. Projects — What's Needed

### Index Pages

Each standalone project needs a proper landing/index page so students can:

- See a preview of what the finished project looks like
- Understand what concepts it demonstrates
- Access the project files (view source, download)
- See which tutorial lessons reference/build this project

**Options for project index pages:**

- [ ] **Option A: Static HTML page** inside each project directory (e.g. `public/projects/html-basics/index.html`) — simplest, no Vue needed
- [ ] **Option B: Vue page** at `src/pages/projects/[name].vue` — can use components, consistent nav, but adds routing complexity
- [ ] **Option C: Single projects gallery page** at `src/pages/projects.vue` or `src/pages/projects/index.vue` — one page listing all projects with links

### Cross-References to Tutorials

Each project should list which tutorials mention or build it:

**Black Swan Bistro:**

- `beginner/html-basics/index.vue` — Series index with starter file links
- `beginner/html-basics/introduction.vue` — Intro lesson, project links
- `beginner/html-basics/html-images.vue` — Images tutorial, project demo links
- `beginner/css-basics/index.vue` — CSS series index with starter links
- `beginner/black-swan-bistro-part-1.vue` — Part 1 of 7-part build series
- Parts 2–7 (to be written) — Progressive build across intermediate → advanced

**Rotto Rocks:**

- `beginner/html-basics/index.vue` — Series index with starter file links
- `beginner/html-basics/introduction.vue` — Intro lesson, project links
- `beginner/html-basics/html-images.vue` — Images tutorial, project demo links
- `beginner/css-basics/index.vue` — CSS series index with starter links
- No dedicated multi-part build series (used as a practice/reference project)

---

## 4. Display & Hunter Components — Decisions Needed

### Should projects use Hunter components?

The Hunter framework (AnticipatorySet, LearningObjectives, GuidedPractice, CheckpointBox, IndependentPractice, ClosureSection) is designed for **instructional tutorials** — step-by-step lessons with learning goals, guided practice, and assessment.

**Projects are different.** They're finished reference examples, not lessons.

| Approach                                                                                            | Pros                                                                                   | Cons                                                             |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **No Hunter components** — just a clean project showcase page                                       | Feels different from tutorials (which is correct — it IS different). Simpler to build. | Less pedagogical structure                                       |
| **Light Hunter components** — just AnticipatorySet (context) + LearningObjectives (what you'll see) | Gives useful context without full lesson structure                                     | May feel like a tutorial that doesn't actually teach             |
| **Full Hunter components** — treat project pages as "walkthrough" lessons                           | Consistent with rest of site                                                           | Wrong tool — there's no guided practice, it's a finished product |

**Recommendation to consider:** Use a dedicated **ProjectShowcase** component (or simple template) with:

- Project name and description
- Screenshot/preview
- "View Live" button linking to the HTML file
- "View Source" button or expandable code viewer
- List of concepts demonstrated
- Links to related tutorials ("Learn how to build this")
- Difficulty badge

### What information should each project page show?

- [ ] Project name and description
- [ ] Screenshot / live preview embed (iframe?)
- [ ] Difficulty level
- [ ] Concepts demonstrated (list)
- [ ] File structure diagram
- [ ] Links to related tutorial lessons
- [ ] "View source" for each file
- [ ] Download link (zip?)
- [ ] Comparison slider (HTML-only vs HTML+CSS versions?)

---

## 5. Summary of Actions

### Immediate (before starting the writing schedule)

- [ ] Decide on stubs not on the writing schedule — write, merge, or remove?
- [ ] Decide on project display approach — Hunter components, ProjectShowcase, or simple page?
- [ ] Decide on project index page location — static HTML, Vue page, or gallery?

### During writing schedule

- [ ] Write tutorials per `TUTORIAL_WRITING_SCHEDULE.md`
- [ ] After each tutorial that references a project, verify the cross-reference links work
- [ ] Update this file as decisions are made

### After writing schedule

- [ ] Build project index/showcase pages
- [ ] Remove any stubs that were marked for removal
- [ ] Final cross-reference audit between tutorials and projects
