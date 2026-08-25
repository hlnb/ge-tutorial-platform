---
title: Crawlable Architecture, Links, and URLs
slug: seo-analytics/crawlable-site-architecture
description: Learn how crawlable links, stable URL design, and connected site architecture help people and search systems reach important pages.
section: SEO & Analytics
sectionId: seo-analytics
pathway: deployment
category: advanced
level: advanced
order: 2
estimatedTime: 45
difficulty: intermediate
prerequisites:
  - seo-analytics/technical-seo-basics
next: seo-analytics/robots-noindex-access-control
pathwayLanding: seo-analytics
tags:
  - technical-seo
  - links
  - urls
  - architecture
hiddenFromCurriculum: true
---

<!-- ANCHOR HOOK -->

The restaurant menu exists, but the only way to open it is a JavaScript click handler on a styled `<div>`. Visitors can click it; a crawler may not discover a usable URL.

Crawlable architecture is not just a sitemap. It is the everyday link structure of the site.

<!-- LEARNING OBJECTIVES -->

## What you'll learn

After this lesson, you will be able to:

- recognise crawlable and non-crawlable link patterns
- draw a small site as a link graph and find orphan or over-deep pages
- design stable, human-readable, crawlable URLs
- distinguish navigation, contextual links, breadcrumbs, and sitemap discovery

> **Before you start:** You should understand HTML links, route paths, and the discovery/crawling stage from the previous lesson.

## Architecture Is a Link System

Search discovery follows addresses exposed through standard web mechanisms. A standard link such as `<a href="/menu">View the seasonal menu</a>` is understandable to browsers, assistive technology, and crawlers.

Buttons perform actions. Links navigate. A JavaScript click handler can still be part of an interface, but it should not replace a real link when the goal is navigation to a page.

```html
<!-- Fragile navigation -->
<div class="menu-link" onclick="goToMenu()">View menu</div>

<!-- Crawlable navigation -->
<a href="/menu">View the seasonal menu</a>
```

Every important page should have at least one meaningful internal link. A shallow, logical hierarchy helps people and crawlers understand relationships, but there is no magic click-depth number. The question is whether the pathway makes sense.

## URL Design

URL paths should be stable, descriptive, consistently encoded, and free of avoidable duplicate parameters. A useful URL does not need to contain every keyword. It should make the address understandable and durable.

Avoid treating fragments as separate indexable pages. A fragment such as `#dietary-options` identifies a location or state inside a document. If dietary information is important enough to search for as its own page, give it a real URL and link to it.

## Link Roles

| Link type | What it helps | Example |
|---|---|---|
| Primary navigation | broad section discovery | Menu, Bookings, Contact |
| Contextual link | next useful step in content | "See dietary information before booking" |
| Breadcrumb | hierarchy and orientation | Home > Menu > Dietary information |
| Footer link | stable utility discovery | Privacy, Contact, Sitemap |
| XML sitemap | discovery hint | canonical URL inventory |

> **Screenshot placeholder:** Add a genuine Elements-panel screenshot showing a real `<a href>` for a project link when available. Redact private URLs if needed.

<!-- CHECKPOINT BOX -->

## Check your understanding

**1. Can the destination be discovered without executing a custom click handler?**
If navigation depends only on a script attached to a non-link element, discovery is weaker than a real anchor or router link that renders as an anchor.

**2. Does link text need to make sense outside its sentence?**
Yes. Clear link text helps users, screen-reader users, and search systems understand the destination.

**3. Can two different URLs accidentally represent the same content?**
Yes. Variants such as trailing slashes, tracking parameters, and duplicate routes can create canonicalisation work later.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

## Guided practice

Audit up to 20 pages from a small project.

**Step 1 - Inventory URLs**

Record page URL, title, incoming links, and click path from the homepage.

**Step 2 - Mark link types**

Label navigation links, contextual links, breadcrumbs, and footer links. Identify pages with weak or missing incoming links.

**Step 3 - Check rendered anchors**

Inspect important navigation in Elements. Confirm Vue router links render to anchors with useful `href` values.

**Step 4 - Sketch the intended graph**

Draw Home -> Menu -> Dietary information -> Booking or an equivalent path for your site.

**Step 5 - Repair one link**

Improve one internal link in a local project. Verify both the visible text and the `href`.

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

## Independent practice

Create a before/after architecture diagram plus a short rationale for three internal-link improvements.

**Requirements:**

- include the homepage and at least four important pages
- mark any orphan or weakly linked pages
- note one URL naming decision
- explain why each new link helps users and discovery

**Success criteria:**

- the diagram shows incoming links to important pages
- links use meaningful text
- URL choices are stable and human-readable

<!-- /IndependentPractice -->

## Before you continue

- I can tell the difference between links and actions.
- I can inspect whether a router link renders a crawlable anchor.
- I can find orphan-page risks in a small site.
- I can explain why a sitemap does not replace internal links.

## Closure

Good architecture tells the truth twice: people can see where to go, and the HTML exposes a real address.
