---
title: Performance Budgets and Continuous Improvement
slug: website-performance-optimisation/performance-budgets-and-continuous-improvement
description: Turn performance optimisation into a repeatable maintenance process with budgets, prioritisation, before-and-after measurement, and documented decisions.
section: Website Performance & Optimisation
sectionId: website-performance-optimisation
pathway: deployment
category: advanced
level: advanced
order: 8
estimatedTime: 50
difficulty: intermediate
prerequisites:
  - website-performance-optimisation/caching-compression-and-content-delivery
previous: website-performance-optimisation/caching-compression-and-content-delivery
next: seo-analytics/on-page-seo
pathwayLanding: website-performance-optimisation
tags:
  - performance
  - budgets
  - audit
  - continuous-improvement
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

Performance is not a one-time clean-up performed just before launch.

Websites change. Content gets added. Libraries grow. Analytics tools appear. Images get uploaded. Features accumulate.

That is why performance needs a repeatable improvement process.

<!-- LEARNING OBJECTIVES -->

## What you'll learn

By the end of this lesson, you will be able to:

- create a performance budget
- prioritise improvements
- compare before and after measurements
- identify performance regression
- document decisions

---

> **Before you start:** You should have completed a baseline audit and understand images, CSS, fonts, JavaScript, caching, compression, and delivery as parts of the same system.

---

## Performance budget

A performance budget defines acceptable boundaries.

It may include:

- Core Web Vital targets
- maximum page weight
- image limits
- JavaScript limits
- number of third-party services
- requirements to rerun audits after major changes

Do not invent universal limits. The correct budget for an online magazine, restaurant site, interactive application, and photography portfolio will not necessarily be identical.

Students should justify targets according to project needs.

## Prioritisation matrix

Use evidence to choose which problems matter most.

| Issue | User impact | Effort | Risk | Priority |
| --- | --- | --- | --- | --- |
| 6 MB hero photo | High | Low | Low | High |
| Small duplicate CSS rule | Low | Medium | Medium | Low |
| Blocking third-party script | High | Medium | Medium | Investigate |
| Unused font weights | Medium | Low | Low | Medium/High |

## Final performance audit

Return to the website measured earlier.

1. Use the existing baseline.
2. Identify findings.
3. Prioritise issues.
4. Implement targeted changes.
5. Retest using the same tools and conditions.
6. Compare before and after.
7. Reflect on decisions.

| Measurement | Before | After | Change |
| --- | --- | --- | --- |
| Lighthouse Performance | | | |
| LCP | | | |
| INP if available | | | |
| CLS | | | |
| Transfer size | | | |
| Requests | | | |
| Image bytes | | | |
| JavaScript bytes | | | |

## Documenting decisions

A useful audit record explains:

- biggest improvement
- least useful change
- unexpected result
- changes deliberately rejected
- future monitoring requirement

This prepares learners for the later Black Swan Bistro audit, where performance will be combined with accessibility, responsive testing, SEO, and deployed-site analysis.

<!-- CHECKPOINT BOX -->

## Check your understanding

**1. What is a performance budget?**
A set of agreed limits or targets that define acceptable performance boundaries for a specific project.

**2. Why should budgets differ between projects?**
Different sites have different goals, media needs, interactivity, audiences, and risks.

**3. Why compare before and after measurements?**
Comparison shows whether a change improved the measured experience under similar conditions.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

## Guided practice

Create a starter performance budget.

**Step 1 - Choose the page**

Use the page you measured earlier in the pathway.

**Step 2 - Set sensible limits**

Choose limits for Core Web Vitals, total transfer size, image bytes, JavaScript bytes, and third-party services.

**Step 3 - Prioritise findings**

Place at least three findings into the prioritisation matrix.

**Step 4 - Retest one improvement**

Make one targeted improvement, retest with the same conditions, and record the change.

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

## Independent practice

Complete a final performance audit for one website you have built.

**Requirements:**

- include baseline measurements
- list findings
- prioritise issues by user impact, effort, and risk
- implement targeted improvements
- retest using the same conditions
- document rejected changes and future monitoring

**Success criteria:**

- your audit separates evidence from opinion
- improvements are prioritised rather than random
- before and after data is compared
- decisions are documented clearly

<!-- /IndependentPractice -->

## Before you continue

- I created a performance budget.
- I completed an audit.
- I prioritised issues rather than fixing everything.
- I measured before and after.
- I documented my decisions.
- I can explain why performance requires ongoing monitoring.

## Extension activity

Create a reusable audit worksheet for your own future projects. Include URL, date, browser/device, baseline, Lighthouse measurements, Network findings, image notes, CSS notes, JavaScript notes, font notes, caching notes, priority recommendations, before/after results, and reflection.

## Closure

- Performance is not a one-time clean-up.
- The optimisation cycle returns repeatedly to measure, investigate, prioritise, improve, and measure again.
- The most valuable skill in this pathway is learning to make performance decisions from evidence.
