---
title: Search Console, Bing Webmaster Tools, and Diagnosis
slug: seo-analytics/google-search-console
description: Learn how to use search-engine reports calmly, separating evidence, inference, action, and retest.
section: SEO & Analytics
sectionId: seo-analytics
pathway: deployment
category: advanced
level: advanced
order: 9
estimatedTime: 55
difficulty: intermediate
prerequisites:
  - seo-analytics/structured-data-implementation
next: seo-analytics/measuring-and-improving-a-website
pathwayLanding: seo-analytics
tags:
  - search-console
  - bing
  - diagnostics
  - technical-seo
hiddenFromCurriculum: true
---

<!-- ANCHOR HOOK -->

Search Console reports 40 "not indexed" URLs. The site owner assumes 40 emergencies. Some are redirects, some are intentionally `noindex`, some are duplicates, and one is the important new menu page.

Counts need context.

<!-- LEARNING OBJECTIVES -->

## What you'll learn

After this lesson, you will be able to:

- choose the correct report for a discovery, indexing, enhancement, security, or performance question
- use URL Inspection to compare indexed and live information
- interpret common exclusions without assuming every exclusion is an error
- submit and monitor sitemaps
- use Bing Webmaster Tools and optionally IndexNow for freshness workflows
- write a diagnosis that separates evidence, inference, action, and retest

> **Before you start:** Use verified properties only when you have permission. Redact verification tokens, account names, private URLs, and query data from any screenshots.

## Reports Answer Different Questions

Search Console and Bing Webmaster Tools are diagnostic systems, not daily scoreboards. A report line is an observation with scope, delay, and context.

Verify ownership safely. Page Indexing answers site-wide pattern questions. URL Inspection answers page-level indexed and live questions. Sitemaps reports processing and discovered-URL information, not guaranteed inclusion. Rich-result reports show detected enhancement issues. Core Web Vitals complements the performance pathway. Security Issues and Manual Actions require separate attention.

Bing has its own crawl and index evidence. IndexNow can notify participating search engines about added, updated, or deleted URLs, but it is optional and not an indexing guarantee.

## Interpret Reports With Intent

A report is useful only when compared with what the site intended. A `noindex` thank-you page appearing under excluded URLs may be healthy. A new service page missing from the index may deserve investigation. A redirect reported as not indexed may be expected if the destination is correct.

Use this triage pattern:

| Report observation | First interpretation | Next check |
|---|---|---|
| Submitted URL blocked by robots | sitemap and robots signals conflict | inspect sitemap inclusion and robots rule |
| Crawled - currently not indexed | search engine has seen the URL but not selected it | check content quality, duplication, canonical, and timing |
| Duplicate, chose different canonical | canonical signals may disagree | compare canonical tag, sitemap, redirects, and internal links |
| Page with redirect | often expected | confirm the destination is relevant and listed instead |
| Soft 404 | success status may not match content | inspect HTTP response and visible page |
| Structured-data warning | may be optional or feature-limiting | compare warning with target feature requirements |

Do not optimise by count alone. Sort by important page types, affected templates, recent changes, and whether the behaviour matches the site's decisions.

## Diagnosis Template

| Field | What to record |
|---|---|
| Question | What are we trying to learn? |
| Evidence | Exact report, URL, date range, status, screenshot, or export |
| Interpretation | What the evidence supports |
| Unknowns | What it cannot prove |
| Action | Smallest relevant change |
| Retest | Tool, expected result, and sensible review time |

Monthly or change-triggered review is usually more useful than compulsive daily checking for a small site.

> **Screenshot placeholder:** Use real, redacted Search Console and Bing captures only. Remove verification strings, private queries, account identifiers, and private URLs.

## From Report to Action

A calm diagnosis separates four things:

- Evidence: the exact report, URL, date range, and status.
- Inference: what the evidence probably means.
- Action: the smallest change that addresses the cause.
- Retest: how and when to check whether the change worked.

Some retests are immediate, such as requesting a URL after a redirect change. Search Console reports may take days or weeks to settle. That delay is not failure by itself. Record the expected review window so the site owner does not rework the same issue every morning.

<!-- CHECKPOINT BOX -->

## Check your understanding

**1. Does a Search Console exclusion always require a fix?**
No. Redirects, intentional `noindex` pages, and duplicates can be expected behaviour.

**2. Which tool is better for one specific URL: site search or URL Inspection?**
URL Inspection is the better diagnostic source for a verified property. Search operators are limited and can be unreliable for debugging.

**3. Does IndexNow guarantee indexing?**
No. It is a notification protocol for changed URLs, not a promise of indexing or ranking.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

## Guided practice

Diagnose supplied anonymised examples or a verified property you are allowed to inspect.

**Step 1 - Choose the question**

Classify each case as discovery, indexing, enhancement, security, performance, or monitoring.

**Step 2 - Read the evidence**

Inspect examples such as a redirect URL excluded from indexing, a valid `noindex` page, "Duplicate, Google chose different canonical", a sitemap fetch error, a live URL blocked by robots, and a structured-data warning.

**Step 3 - Triage the result**

Mark each as expected, needs investigation, or action required. Give one reason.

**Step 4 - Write the diagnosis**

Use the diagnosis template and include a retest plan.

**Step 5 - Limit the action list**

Choose the three most important actions only. Put expected exclusions and low-risk observations into a monitoring section instead of pretending everything is urgent.

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

## Independent practice

Write a five-item search-health brief for a real or supplied property.

**Requirements:**

- include no more than three actions
- state which observations need no action
- separate evidence, inference, and recommendation
- include dates, tools, and affected URLs
- include an expected retest window for each action

**Success criteria:**

- report choice matches the question
- sensitive account data is not exposed
- the brief is calm, bounded, and actionable
- expected behaviour is not reported as a defect

<!-- /IndependentPractice -->

## Before you continue

- I can choose the report that matches the question.
- I can recognise expected exclusions.
- I can use evidence without chasing every count.
- I can write a retest plan.

## Closure

The goal is not to make every report line green. The goal is to know whether important pages are discoverable, technically sound, and behaving as intended.
