---
title: "From URL to Search Result: the Technical SEO System"
slug: seo-analytics/technical-seo-basics
description: Learn how discovery, crawling, rendering, indexing, and serving fit together so you can diagnose technical SEO problems by evidence, not guesswork.
section: SEO & Analytics
sectionId: seo-analytics
pathway: deployment
category: advanced
level: advanced
order: 1
estimatedTime: 40
difficulty: intermediate
prerequisites:
  - seo-analytics/on-page-seo
next: seo-analytics/crawlable-site-architecture
pathwayLanding: seo-analytics
tags:
  - technical-seo
  - crawling
  - indexing
  - diagnostics
hiddenFromCurriculum: true
---

<!-- ANCHOR HOOK -->

The Black Swan Bistro menu opens perfectly when its owner pastes the URL into a browser, yet it does not appear in search. Is the problem content, links, robots rules, rendering, indexing, or simply time?

The page working for one browser visit is useful evidence, but it is not evidence for the whole search pipeline. Technical SEO begins by locating the broken hand-off.

<!-- LEARNING OBJECTIVES -->

## What you'll learn

After this lesson, you will be able to:

- distinguish discovery, crawling, rendering, indexing, and serving
- identify the browser, server, and search-system responsibility at each stage
- explain why "Google found it" does not necessarily mean "Google indexed it"
- classify a symptom by pipeline stage before choosing a tool

> **Before you start:** Complete SEO Fundamentals first. You should also understand links, browser developer tools, deployed URLs, and the idea that search visibility is not guaranteed.

## The Search Pipeline

A search system must discover a URL, be allowed to request it, receive a meaningful HTTP response, render enough useful content, choose whether and how to index it, and later decide whether to show it for a particular query.

Those stages are connected, but they are not the same job:

| Stage | What is being tested | First evidence | What not to assume |
|---|---|---|---|
| Discovery | The system knows a URL exists | crawlable link, sitemap, submission | that the page was crawled |
| Crawling | The system can request the URL | HTTP request and response | that it was indexed |
| Rendering | The returned resources produce content | rendered DOM, mobile render | that all scripts always succeed |
| Indexing | The page is eligible and selected | URL Inspection or index report | that it will rank |
| Serving | The page is chosen for a query | impressions, clicks, result appearance | that one query explains all visibility |

Search is a pipeline, not a simple ladder. A system may revisit a URL many times. It may crawl a page and decide not to index it. It may index a page and rarely serve it because another result better matches the query. That is why ranking advice should wait until crawl and index evidence are checked.

## Evidence Cards

Place each Black Swan Bistro observation at the strongest stage it proves:

- the menu has no internal links pointing to it
- the URL returns `200 OK`
- the initial HTML contains only an empty app shell
- the rendered DOM contains the menu
- URL Inspection reports "Crawled - currently not indexed"

The useful habit is to write both sides of the evidence: what it proves and what it does not prove. A `200 OK` response proves a successful request at that moment. It does not prove discovery, indexing, canonical selection, or search presentation.

## Honest Tool Use

Use tools in pairs. A browser visit shows what one user sees. The Network panel shows the document response. View Source shows the initial HTML. Elements shows the rendered DOM. Search Console and Bing Webmaster Tools show search-engine observations for verified properties, with scope and delay.

> **Screenshot placeholder:** Add a genuine, redacted Chrome DevTools Network screenshot showing the document request, status, final URL, and response headers when a real project capture is available. Do not fabricate this interface.

<!-- CHECKPOINT BOX -->

## Check your understanding

**1. A URL appears in a sitemap but not in the index. Which stage is proven?**
Discovery signal only. A sitemap can tell a search system about a URL, but it does not prove crawling or indexing.

**2. A browser displays a styled 404 page but the response is `200 OK`. Which layers disagree?**
The visible content says "not found" while the HTTP response says "success". That is a soft-404 risk.

**3. Why should ranking advice wait until crawl and index evidence is checked?**
A page cannot be served from an index it never entered. First find whether discovery, crawling, rendering, indexing, or serving is the likely stage.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

## Guided practice

For one public page, collect a small evidence map.

**Step 1 - Open the page normally**

Record the URL you used, the date, and whether the page appears to work for a visitor.

**Step 2 - Inspect the document request**

In DevTools Network, reload the page and select the document request. Record status, final URL, and content type.

**Step 3 - Compare source and rendered DOM**

Use View Source for the initial HTML, then Elements for the rendered DOM. Note whether the main content exists before JavaScript runs.

**Step 4 - Check discovery evidence**

Find at least one internal `<a href>` link pointing to the page. If none exists, record it as a discovery risk.

**Step 5 - Classify the evidence**

Write one observation for discovery, response, rendering, and indexability. Mark your confidence as high, medium, or low.

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

## Independent practice

Create a one-page search pipeline evidence map for a learner-owned page.

**Requirements:**

- include discovery, crawling, rendering, indexing, and serving
- name the tool used for each observation
- separate observed facts from inferences
- include one confidence statement for each stage

**Success criteria:**

- each claim is tied to evidence
- you avoid assuming indexing from discovery alone
- you identify the next test before suggesting a fix

<!-- /IndependentPractice -->

## Before you continue

- I can explain the search pipeline in plain English.
- I know why a working browser page does not prove indexability.
- I can choose a first tool based on the stage I need to test.
- I can state what a piece of evidence does not prove.

## Closure

Technical SEO begins with locating the broken hand-off. If you cannot name the stage, you are still guessing.
