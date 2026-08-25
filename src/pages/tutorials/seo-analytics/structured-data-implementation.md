---
title: Structured Data That Matches the Page
slug: seo-analytics/structured-data-implementation
description: Learn how to choose Schema.org types, write honest JSON-LD, and validate structured data without promising rich-result display.
section: SEO & Analytics
sectionId: seo-analytics
pathway: deployment
category: advanced
level: advanced
order: 8
estimatedTime: 55
difficulty: intermediate
prerequisites:
  - seo-analytics/javascript-seo-vite-vue
next: seo-analytics/google-search-console
pathwayLanding: seo-analytics
tags:
  - structured-data
  - schema
  - json-ld
  - validation
hiddenFromCurriculum: true
---

<!-- ANCHOR HOOK -->

A JSON-LD block passes a syntax test and still produces no rich result. Another block describes five-star reviews that visitors cannot see.

Valid JSON is only the first gate.

<!-- LEARNING OBJECTIVES -->

## What you'll learn

After this lesson, you will be able to:

- distinguish Schema.org vocabulary from search-engine rich-result eligibility
- select a specific type that matches the page's main visible entity
- write maintainable JSON-LD with accurate URLs and required properties
- test syntax, vocabulary, and Google feature eligibility separately
- recognise misleading, hidden, stale, or incomplete markup

> **Before you start:** You should understand page content, canonical URLs, and the introductory structured-data idea from SEO Fundamentals.

## Three Validation Gates

Schema.org supplies shared types and properties. Search engines choose how to use that vocabulary. Google feature documentation is narrower than the whole Schema.org vocabulary.

JSON-LD is usually easiest to maintain, but its data must agree with visible content. Use the most specific honest type, include required properties for the intended feature, and prefer complete accurate data over many incomplete properties.

Validation has three levels:

| Validation type | Tool | What passing means |
|---|---|---|
| JSON syntax | JSON parser | the code is parseable |
| Schema.org vocabulary | Schema Markup Validator | types and properties are recognised |
| Search feature eligibility | Google Rich Results Test | the page may be eligible for supported features |

Eligibility is not a display guarantee and is not a shortcut to ranking.

## Choose the Main Entity

Most structured-data mistakes begin before the JSON is written. The author has not decided what the page is mainly about.

Ask:

- Is this page a local business homepage, a specific article, a product, an event, a course, a recipe, or something else?
- Which facts are visible to a visitor without needing private knowledge?
- Which URL is the canonical page for this entity?
- Which properties are stable enough to maintain accurately?
- Is the target search feature supported for this page type?

For a tutorial page, `TechArticle` or `LearningResource` may be honest. For a restaurant homepage, `Restaurant` may be honest if the visible page includes business facts. For a menu page, the relationship between the restaurant and its menu may matter more than adding every possible property.

Specific is useful only when it is accurate. An incomplete but truthful block is better than an ambitious block full of stale or unverifiable claims.

## Entity Inventory First

Before writing markup for Black Swan Bistro, list facts visible on the page: business name, page URL, menu URL, address if visible, opening hours if visible, and contact details if visible. Do not invent ratings, prices, addresses, opening hours, or business facts.

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Black Swan Bistro",
  "url": "https://example.com/",
  "menu": "https://example.com/menu"
}
```

This example is deliberately minimal. Production values must come from verified visible business information.

> **Screenshot placeholder:** Add real, current, redacted captures from Schema Markup Validator and Google Rich Results Test after testing a real page.

## Maintenance Is Part of Accuracy

Structured data can quietly become wrong. Opening hours change, events pass, prices move, authorship changes, URLs migrate, and images are replaced.

Before adding a property, decide where that fact will be maintained. Good sources include the same content registry, CMS field, route metadata, or business data source that renders the visible page. Riskier sources include hand-coded JSON-LD copied between pages, hard-coded dates, or claims added only for a test.

Use this rule: if the visible page changes, the structured data should change through the same workflow or an obvious nearby workflow. Otherwise the markup will eventually disagree with the page.

<!-- CHECKPOINT BOX -->

## Check your understanding

**1. Does valid JSON prove rich-result eligibility?**
No. It only proves syntax. Vocabulary and search-feature rules are separate gates.

**2. Can structured data include reviews visitors cannot see?**
No. Markup should match visible, accurate page content.

**3. Does a passing rich-results test guarantee display?**
No. It can indicate eligibility, not guarantee search presentation.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

## Guided practice

Build and validate a small JSON-LD block.

**Step 1 - Inventory visible facts**

List the page's main entity and the facts a visitor can verify.

**Step 2 - Choose a type**

Inspect Schema.org definitions. Choose the most specific honest type.

**Step 3 - Check feature support**

Review Google documentation if you are targeting a supported rich-result feature.

**Step 4 - Write minimal JSON-LD**

Use accurate canonical URLs and required properties only when the facts are available.

**Step 5 - Validate and compare**

Run a syntax check, Schema Markup Validator, and Rich Results Test when relevant. Compare every property with visible content.

**Step 6 - Plan maintenance**

For each property, record where the fact comes from and who or what process would update it.

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

## Independent practice

Create a structured-data evidence pack.

**Requirements:**

- entity inventory
- JSON-LD
- validator results
- visible-content cross-check
- eligibility statement without display promises
- maintenance source for important properties

**Success criteria:**

- markup is accurate and visible-content aligned
- warnings and errors are interpreted separately
- no business facts are invented
- the JSON-LD can stay accurate when page content changes

<!-- /IndependentPractice -->

## Before you continue

- I can separate syntax, vocabulary, and feature eligibility.
- I can choose an honest Schema.org type.
- I know structured data must match visible content.
- I will not promise rankings or rich-result display.

## Closure

Structured data should make an honest page easier for machines to interpret. It should never make the page claim more than a visitor can verify.
