---
title: CSS and Web Font Performance
slug: website-performance-optimisation/css-and-web-font-performance
description: Investigate whether CSS and web font delivery are creating unnecessary render-blocking work while preserving maintainable styling decisions.
section: Website Performance & Optimisation
sectionId: website-performance-optimisation
pathway: deployment
category: advanced
level: advanced
order: 5
estimatedTime: 40
difficulty: intermediate
prerequisites:
  - website-performance-optimisation/optimising-images-and-media
previous: website-performance-optimisation/optimising-images-and-media
next: website-performance-optimisation/javascript-and-resource-loading
pathwayLanding: website-performance-optimisation
tags:
  - performance
  - css
  - fonts
  - devtools
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

CSS is part of the browser rendering process.

Fonts are resources too.

Good architecture still matters, and performance optimisation should never become an excuse for incomprehensible CSS.

<!-- LEARNING OBJECTIVES -->

## What you'll learn

After this lesson, you will be able to:

- inspect CSS transfer size
- identify potentially unused CSS
- investigate font requests
- reduce unnecessary font files
- explain `font-display`
- preserve maintainable CSS architecture

---

> **Before you start:** You should understand the browser rendering pathway, the Network panel, and the role CSS plays in layout and paint.

---

## CSS has delivery cost

CSS tells the browser how to present the page. The browser often needs CSS before it can render content correctly, so large or poorly organised stylesheets can affect the initial experience.

This does not mean every stylesheet must be tiny at the expense of clarity. It means developers should understand what is being sent, when it is needed, and whether the organisation supports future work.

## DevTools Coverage

Chrome Coverage can help identify CSS and JavaScript that did not execute or apply during a particular test.

Important: unused during one page load does not automatically mean unused everywhere.

> **Screenshot placeholder:** Add `devtools-coverage.webp` showing resource, total bytes, and unused bytes in the current Chrome Coverage interface.

## Fonts are resources

Use the Network panel and filter by **Font**. Record:

| Font | Format | Weight | Size |
| --- | --- | --- | --- |
| | | | |

Ask:

- Are all downloaded weights actually used?
- Are multiple families necessary?
- Could a variable font help?
- Is a custom font adding sufficient design value?

## font-display

Font-loading behaviour should be intentional.

```css
@font-face {
  font-family: "Example Sans";
  src: url("/fonts/example.woff2") format("woff2");
  font-display: swap;
}
```

`font-display: swap` lets fallback text render while the web font loads, which can improve perceived loading but may create a visible font swap. That tradeoff should be understood rather than hidden.

<!-- CHECKPOINT BOX -->

## Check your understanding

**1. Why should Coverage results be interpreted carefully?**
Because one page load does not prove a rule is unused across the entire site.

**2. What does the Network font filter help you inspect?**
It shows requested font files, formats, weights, transfer sizes, and timing.

**3. Why is CSS performance not just about deleting rules?**
Because maintainability, reuse, and correct rendering still matter.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

## Guided practice

Audit CSS and fonts on one page.

**Step 1 - Inspect CSS requests**

Open the Network panel, reload the page, and record CSS files and transfer sizes.

**Step 2 - Open Coverage**

Use the Command Menu to open Coverage, reload the page, and identify a stylesheet with unused bytes.

**Step 3 - Investigate fonts**

Filter the Network panel by Font and record family, format, weight, and size.

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

## Independent practice

Audit one existing project and recommend one CSS or font improvement.

**Requirements:**

- record CSS transfer size
- list loaded stylesheets
- list font files and weights
- identify obvious duplication or over-delivery
- recommend one improvement with expected benefit

**Success criteria:**

- your recommendation is based on evidence
- you do not delete CSS purely because Coverage flags it once
- your proposed change preserves readable styling architecture

<!-- /IndependentPractice -->

## Before you continue

- I can inspect CSS usage.
- I understand that Coverage requires interpretation.
- I can identify font requests.
- I can explain `font-display`.
- I can justify a CSS or font optimisation.

## Extension activity

Compare a page using one font family and a page using several families and weights. Record whether the design gain is worth the delivery cost.

## Closure

- CSS performance is not about writing the shortest stylesheet imaginable.
- Font performance is not about banning custom typography.
- Professional optimisation balances design, usability, maintainability, and delivery cost.
