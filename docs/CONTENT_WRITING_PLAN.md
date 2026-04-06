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

### NOT on the Writing Schedule (decisioned from audit)

These stubs exist as pages but are not part of the current 21-tutorial writing schedule. The table below records what should happen next so the tutorial system can be cleaned up intentionally instead of leaving ambiguous placeholders in place.

#### AI-Assisted (7 stubs — all ~9 lines)

| File                                         | Pathway role                           | Decision     | Content treatment                                   |
| -------------------------------------------- | -------------------------------------- | ------------ | --------------------------------------------------- |
| `ai-assisted/introduction.vue`               | Section opener for builder learners    | Merge        | Fold into section overview copy, then remove stub   |
| `ai-assisted/workflow-integration.vue`       | Practical builder-path tutorial        | Keep later   | Write full tutorial after core builder path matures |
| `ai-assisted/building-with-ai.vue`           | AI usage principles                    | Merge        | Merge into workflow-focused lesson                  |
| `ai-assisted/design-to-code.vue`             | Design-to-build workflow support       | Keep later   | Write full tutorial tied to builder projects        |
| `ai-assisted/custom-gpt-automation.vue`      | Niche/tool-specific extension          | Remove       | Remove until the pathway needs a concrete version   |
| `ai-assisted/projects/ai-landing-page.vue`   | Project example, not tutorial          | Merge        | Represent as project metadata, not a stub lesson    |
| `ai-assisted/projects/ai-component-docs.vue` | Project example, not tutorial          | Merge        | Represent as project metadata, not a stub lesson    |

#### Backend (4 stubs — all ~9-15 lines)

| File                      | Pathway role                         | Decision   | Content treatment                                         |
| ------------------------- | ------------------------------------ | ---------- | --------------------------------------------------------- |
| `backend/index.vue`       | Advanced section overview            | Keep       | Keep as section landing page                              |
| `backend/node-basics.vue` | Foundational backend concept         | Keep later | Write as a full tutorial when deployment path expands     |
| `backend/rest-apis.vue`   | Full-stack systems concept           | Keep later | Write as a full tutorial when backend pathway is staffed  |
| `backend/databases.vue`   | Data layer introduction              | Keep later | Write as a full tutorial when backend pathway is staffed  |

#### Deployments (4 stubs — all ~9-15 lines)

| File                                | Pathway role                          | Decision   | Content treatment                                                  |
| ----------------------------------- | ------------------------------------- | ---------- | ------------------------------------------------------------------ |
| `deployments/index.vue`             | Advanced section overview             | Keep       | Keep as section landing page                                       |
| `deployments/vercel-netlify.vue`    | Hosting comparison                    | Keep later | Write as a full deployment tutorial                                |
| `deployments/firebase-hosting.vue`  | Platform-specific deployment option   | Merge      | Merge into a broader hosting-comparison lesson until justified     |
| `deployments/static-vs-dynamic.vue` | Systems concept for going live        | Keep later | Write as a full tutorial connected to deployment decision-making   |

#### SEO & Analytics (3 stubs — all ~9-11 lines)

| File                                | Pathway role                      | Decision   | Content treatment                                               |
| ----------------------------------- | --------------------------------- | ---------- | --------------------------------------------------------------- |
| `seo-analytics/index.vue`           | Advanced section overview         | Keep       | Keep as section landing page                                    |
| `seo-analytics/on-page-seo.vue`     | Core live-site improvement topic  | Keep later | Write as a full tutorial for the deployment pathway             |
| `seo-analytics/analytics-setup.vue` | Measurement and feedback topic    | Keep later | Write as a full tutorial for the deployment pathway             |

#### Other (2 stubs)

| File                 | Pathway role                    | Decision   | Content treatment                                         |
| -------------------- | ------------------------------- | ---------- | --------------------------------------------------------- |
| `capstone/index.vue` | Final advanced section overview | Keep       | Keep as section landing page                              |
| `capstone/spec.vue`  | Capstone brief / project spec   | Keep later | Expand into a real capstone spec when the pathway is ready |

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

- [x] Decide on stubs not on the writing schedule
- [x] Decide on project display approach — dedicated project pages, not Hunter lessons
- [x] Decide on project index page location — Vue project landing page grouped by pathways

### During writing schedule

- [ ] Write tutorials per `TUTORIAL_WRITING_SCHEDULE.md`
- [ ] After each tutorial that references a project, verify the cross-reference links work
- [ ] Update this file as decisions are made

### After writing schedule

- [x] Build project index/showcase pages
- [ ] Remove any stubs that were marked for removal
- [ ] Final cross-reference audit between tutorials and projects

---

## 6. Builder Path Shape

The builder path should act as the bridge between:

- beginner lessons that teach individual HTML/CSS concepts
- project parts that ask learners to make layout and design decisions

This means the builder path is not just "more CSS." Its job is to teach students how to:

- move from an idea or mockup to a page plan
- recognise patterns before writing code
- decide when a layout is one-dimensional vs. two-dimensional
- apply repeated visual systems before refactoring into components

### Recommended builder-path sequence

#### Stage 0 — Big-picture setup (beginner)

- `beginner/idea-to-live-website`
- Purpose: show the full journey from idea to deployment so later builder lessons have context
- Teaching role: overview only, not deep implementation

#### Stage 1 — Design and layout thinking (intermediate builder path)

- `intermediate/think-about-layouts`
- `intermediate/how-to-read-a-design`
- `intermediate/breaking-layouts-into-sections`

These lessons should carry the design-to-code mindset:

- look for rows, columns, repeated blocks, and hierarchy
- identify spacing systems, colour usage, and typography clues
- convert a visual design into semantic sections before styling

#### Stage 2 — Apply layout patterns in a real project

- `intermediate/black-swan-bistro-part-2`

This lesson should stay focused on:

- low-fidelity homepage wireframing
- reusable CSS classes and repeated visual patterns
- layout first, polish later
- recognising repetition before components

#### Stage 3 — Structural reuse

- `intermediate/building-reusable-components`
- `intermediate/black-swan-bistro-part-3`

These lessons should make the next step explicit:

- Part 2 = repeated CSS patterns
- Part 3 = repeated HTML structures refactored into reusable components

#### Stage 4 — Site expansion

- `intermediate/multi-page-structure`
- `intermediate/black-swan-bistro-part-4`

This is where students move from a single structured page into a site system.

### Design-to-code post integration

The published `design-to-code` post should be treated as source material for the builder path rather than as a separate competing track.

Current intended fit:

- `How to Read a Design` — reading spacing, colour, hierarchy, and clues from a mockup
- `Breaking Layouts into Sections` — translating design into semantic page regions
- `Building Reusable Components` — using repeated UI pieces intentionally

As additional draft posts are found, map each one to a single lesson in the builder path rather than duplicating similar topics.

### Black Swan Bistro asset plan

The Black Swan Bistro logo and project images should be introduced gradually so they support the teaching goals rather than rushing the site into a polished state too early.

Recommended use:

- Part 2: use the logo for the colour system and optionally 1 to 2 images as layout placeholders
- Part 3: use repeated content/image blocks to justify component refactoring
- Part 4+: increase realism once the layout and component system are in place

The main teaching rule:

- assets should help students see structure, hierarchy, and repetition
- assets should not pull the lesson away from layout thinking into premature visual polish

---

## 7. Flexbox and Grid Teaching Placement

Flexbox and Grid should be introduced as layout decision tools, not just isolated syntax topics.

### Recommendation

- Keep `beginner/css-basics/flexbox` in the beginner CSS sequence
- Do not require full CSS Grid mastery before the builder path starts
- Introduce Grid when learners reach repeated two-dimensional layouts such as galleries, card collections, and dashboard-like blocks

### Suggested teaching progression

#### Beginner CSS essentials

- document flow
- block vs inline behavior
- spacing, box model, and containers
- simple layout patterns
- Flexbox basics for alignment and one-dimensional layouts

At this stage, the student should learn:

- Flexbox is useful when items sit in a row or column
- Flexbox is often the right tool for nav bars, button groups, simple header alignment, and small content clusters

#### Builder path

The builder path should add the decision layer:

- when a layout is mostly one row or one column, reach for Flexbox
- when a layout is a repeated matrix of cards or images, reach for Grid
- when the main job is still page planning, sectioning, and visual consistency, focus on structure before tool complexity

This means `black-swan-bistro-part-2` can use:

- Flexbox for header/footer alignment
- Grid for repeated card or gallery layouts

without needing a full standalone Grid tutorial first, as long as the lesson explains the choice simply.

### Future tutorial to add

Add a dedicated beginner or early-builder lesson later:

- `CSS Grid Basics`
- Goal: explain two-dimensional layout in beginner-friendly language
- Best placement: after `Flexbox Basics` and before or around the builder path project work

Suggested lesson focus:

- how Grid differs from Flexbox
- rows and columns as a system
- simple card gallery and photo grid examples
- when to choose Grid vs Flexbox

### Curriculum rule of thumb

- Flexbox first for alignment and one-dimensional flow
- Grid next for repeated two-dimensional layout
- builder lessons after that for design judgment and application

This keeps the sequence practical:

- beginners learn the tools
- builder learners learn how to choose and apply them
