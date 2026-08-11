# Content Writing Plan

Tracks written content that sits around the tutorial library: platform copy, blog posts, supporting resources, worksheets, and authoring collateral.

For tutorial page authoring, use `docs/TUTORIAL_WRITING_SCHEDULE.md`.
For the curriculum source of truth, use `docs/CURRICULUM_ARCHITECTURE.md` and `src/data/tutorials.js`.

Last updated: August 11, 2026

---

## Current Writing Priorities

The new curriculum architecture presents GraphitEdge as a nine-stage learner journey:

1. Understand the Web
2. Build the Foundations
3. Build Real Interactions
4. Build a Real Website
5. Use Professional Tools
6. Launch It
7. Make It Better
8. Become Independent
9. Capstone

The main writing gap is no longer early beginner content. The repo already has strong completed pathways for Getting Started, HTML, CSS, JavaScript, DOM, Applied JavaScript, Working with Data, Design to Code, Git Basics, Frameworks 101, Deployments, Accessibility Essentials, and Website Care.

Writing should now focus on the transition from guided project work into live-site improvement, professional judgement, and capstone independence.

---

## Tutorial-Adjacent Writing Needed First

These are not full tutorial pages by themselves, but they support the tutorials that still need to be authored.

| Priority | Resource | Supports | Purpose |
|---|---|---|---|
| 1 | Black Swan Bistro live-site audit worksheet | BSB Part 7 | Give learners a structured place to record accessibility, responsive, performance, SEO, content, link, console, and maintainability findings. |
| 2 | Black Swan Bistro improvement log template | BSB Part 8 | Help learners prioritise findings, record impact, test before/after, and explain decisions. |
| 3 | Black Swan Bistro client-change brief | BSB Part 9 | Provide the client request for Sunday dinner opening, Wattleseed Creme Brulee, and Mothers Day lunch as a realistic maintenance prompt. |
| 4 | SEO and analytics worksheet set | SEO/Analytics sub-pathway | Support future lessons for technical SEO, sitemaps/robots/indexing, Search Console, Analytics Setup, and measuring improvements. |
| 5 | Professional Practice evidence templates | Professional Practice | Give learners reusable formats for case studies, project decisions, coding-agent notes, client-brief analysis, and handover documentation. |
| 6 | Rotto Rocks capstone assessment checklist | Capstone | Clarify how learners demonstrate independent planning, implementation, testing, deployment, and maintenance decisions. |

---

## Platform Copy To Review

| Area | Status | Required change |
|---|---|---|
| `/tutorials` main page | Structurally updated | Review hero copy after the nine-stage roadmap has been live-tested. It should make the journey obvious without explaining internal repo structure. |
| Professional Practice section | Scaffolded | Write a concise section intro once at least one Professional Practice lesson is authored. Until then, keep it clearly marked as future/scaffold content. |
| SEO & Analytics section | Partial | Update section copy after Analytics Setup and the technical SEO lessons are written. Do not imply the whole sub-pathway is complete yet. |
| Capstone section | Connected to Rotto Rocks | Add a stronger transition once Professional Practice has real content. The current capstone spec is useful, but the learning bridge can become clearer. |
| About page | Needs review | Reflect the curriculum as a complete system: fundamentals, projects, professional practice, and independent capstone work. Avoid overclaiming formal qualification equivalence. |

---

## Blog Posts - Planned

### 1. How GraphitEdge Teaches the Web as a System

**Status:** Planned - high priority
**Proposed title:** Why We Start with DNS, Not Divs

**Audience:** Prospective learners deciding whether GraphitEdge fits them; developers who have written code but do not fully understand how websites work end to end.

**Core argument:** GraphitEdge teaches the web as a connected system. Learners move from how browsers, servers, files, DNS, and hosting work into HTML, CSS, JavaScript, projects, deployment, maintenance, professional practice, and capstone independence.

**Curriculum connection:** This is the clearest public explanation of the new nine-stage architecture.

**Estimated length:** 900-1,200 words
**Format:** Blog post, reusable as About-page copy and social content

### 2. From Guided Project to Independent Build

**Status:** Planned - high priority
**Proposed title:** Why Your Second Website Should Be Less Guided Than Your First

**Audience:** Learners finishing Black Swan Bistro and preparing for Rotto Rocks.

**Core argument:** Black Swan Bistro teaches the workflow with guidance. Professional Practice teaches judgement. Rotto Rocks asks learners to make decisions from a brief. This post explains why that transition matters and how learners should approach it.

**Curriculum connection:** Black Swan Bistro Parts 7-9, Professional Practice, and Rotto Rocks.

**Estimated length:** 800-1,000 words
**Format:** Blog post or learner guide

### 3. What Working with Data Actually Means for Front-End Developers

**Status:** Planned - medium priority
**Proposed title:** fetch(), JSON, and Why Your App Needs to Talk to the Internet

**Audience:** Learners who have completed JavaScript and DOM basics and are starting Working with Data.

**Core argument:** The jump from JavaScript that runs on a page to JavaScript that fetches data from somewhere else is where many self-taught developers stall. This post explains why async JavaScript exists, what `fetch()` does, and why Working with Data unlocks practical front-end features.

**Curriculum connection:** Build Real Interactions.

**Estimated length:** 700-900 words
**Format:** Blog post, companion to the Working with Data section

### 4. Australian Training Package Alignment and RPL

**Status:** Planned - lower priority until the curriculum audit settles
**Proposed title:** What Australian Web Development Qualifications Actually Cover - and How GraphitEdge Lines Up

**Audience:** Self-taught developers in Australia who want to understand how their skills might map to formal qualifications or RPL evidence.

**Core argument:** GraphitEdge can help learners build evidence for many web-development skills, but formal RPL decisions belong to registered training organisations. This content must be careful, evidence-based, and avoid promising qualification outcomes.

**Important caution:** Do not claim GraphitEdge is equivalent to a qualification. Frame it as learning and portfolio evidence that may support an RPL conversation.

**Key units to investigate before writing:**

- ICTWEB301 - Build a simple web page
- ICTWEB401 - Research and apply web industry standards and practices
- ICTWEB402 - Ensure basic website accessibility
- ICTWEB406 - Test and validate a website
- ICTWEB407 - Plan website development
- ICTWEB411 - Create a website in a content management system
- ICTWEB420 - Apply web authoring tool to convert client data for websites
- ICTWEB422 - Produce digital images for the web
- ICTWEB513 - Research and implement emerging web technology
- ICTWEB514 - Create dynamic web pages
- ICTWEB524 - Optimise a website
- ICTWEB526 - Use web services APIs
- ICTICT418 - Contribute to copyright, ethics and privacy in an ICT environment
- ICTICT532 - Apply IP, ethics and privacy in ICT environments
- ICTPRG556 - Apply introductory programming techniques using an MVC framework

**Estimated length:** 1,500-2,000 words
**Format:** Blog post with a separate unit-to-tutorial mapping resource

---

## Supporting Resources - Planned

### Black Swan Bistro audit pack

**Status:** Not started
**Supports:** BSB Part 7
**Format:** Markdown source plus optional downloadable PDF
**Contents:** audit checklist, findings table, severity/impact guide, evidence notes, links to relevant standalone tutorials

### Black Swan Bistro improvement pack

**Status:** Not started
**Supports:** BSB Part 8
**Format:** Markdown source plus optional downloadable PDF
**Contents:** prioritisation matrix, before/after testing notes, improvement log, commit message prompts, reflection questions

### Black Swan Bistro client-change brief

**Status:** Not started
**Supports:** BSB Part 9
**Format:** Brief page or downloadable handout
**Contents:** Sunday dinner opening, Wattleseed Creme Brulee, Mothers Day lunch promotion, acceptance criteria, testing checklist, deployment checklist

### SEO and analytics worksheets

**Status:** Not started
**Supports:** SEO/Analytics sub-pathway
**Format:** Reusable worksheet set
**Contents:** on-page SEO audit, technical SEO checks, sitemap/robots check, Search Console setup notes, analytics event/goal planning, improvement tracking

### Professional Practice templates

**Status:** Not started
**Supports:** Professional Practice
**Format:** Markdown templates, optionally exported as PDFs later
**Contents:** project case study template, technology decision record, coding-agent review notes, client-brief worksheet, handover checklist

### Rotto Rocks capstone assessment checklist

**Status:** Not started
**Supports:** Capstone
**Format:** Checklist/rubric
**Contents:** information architecture, technology choices, reusable patterns, accessibility approach, testing approach, deployment approach, maintenance considerations

### Unit-to-tutorial mapping table

**Status:** Not started
**Supports:** RPL blog post
**Format:** Dedicated page or PDF
**Caution:** Must be evidence-based and must not imply guaranteed formal recognition.

---

## Backlog Ideas

Keep these as later editorial ideas. Do not let them displace the current tutorial authoring gaps.

- The difference between a static site and a web app
- What Vite actually does
- A beginner's guide to reading error messages
- Why accessibility is not an optional extra
- Version control for people who are scared of Git
- What deployed actually means
- How to review AI-generated code without switching your brain off
- What to include in a project handover note

---

## Do Not Write As New Content

These ideas are already covered or should be handled inside existing/newer structures:

- A duplicate general Modern Frameworks pathway: use Frameworks 101, then write the Professional Practice technology-choice lesson.
- A standalone Static vs Dynamic Sites rewrite: this now belongs inside the deployment module.
- A standalone Vercel/Netlify overview rewrite: this now belongs inside Choosing a Hosting Path and deployment lessons.
- A broad "Maintain and Improve" Black Swan Bistro Part 7: split across Parts 7, 8, and 9.
