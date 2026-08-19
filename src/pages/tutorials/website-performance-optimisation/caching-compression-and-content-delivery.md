---
title: Caching, Compression and Content Delivery
slug: website-performance-optimisation/caching-compression-and-content-delivery
description: Understand how browser caching, compression, response headers, hosting, and CDNs influence the performance of delivered website resources.
section: Website Performance & Optimisation
sectionId: website-performance-optimisation
pathway: deployment
category: advanced
level: advanced
order: 7
estimatedTime: 40
difficulty: intermediate
prerequisites:
  - website-performance-optimisation/javascript-and-resource-loading
previous: website-performance-optimisation/javascript-and-resource-loading
next: website-performance-optimisation/performance-budgets-and-continuous-improvement
pathwayLanding: website-performance-optimisation
tags:
  - performance
  - caching
  - compression
  - cdn
  - http
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

Frontend performance does not end at the source code.

How resources are compressed, cached, stored, and delivered also affects the visitor.

<!-- LEARNING OBJECTIVES -->

## What you'll learn

By the end of this lesson, you will be able to:

- explain browser caching
- recognise caching headers
- explain gzip and Brotli
- explain the purpose of a CDN
- inspect response headers

---

> **Before you start:** You should understand Network requests, resource types, and the difference between local development and a deployed website.

---

## Delivery pathway

A simplified delivery pathway looks like this:

1. Visitor requests a page.
2. DNS points the browser toward the host or CDN.
3. The delivery layer checks whether a cached resource can be returned.
4. If yes, the cached resource is returned.
5. If no, the origin may need to handle the request.

## Compression

Text resources commonly benefit from transfer compression.

Examples include:

- HTML
- CSS
- JavaScript
- JSON
- SVG

Common mechanisms include gzip and Brotli. Compression does not change the source file you edit; it changes how bytes are transferred over the network.

## Response headers

Headers tell the browser how a response was delivered and how it may be reused.

In DevTools:

1. Open Network.
2. Reload the page.
3. Select an HTML, CSS, or JavaScript request.
4. Choose Headers.
5. Inspect response headers.

Look for `cache-control`, `content-encoding`, and `content-type`.

> **Screenshot placeholder:** Add a current DevTools response-header screenshot with `cache-control`, `content-encoding`, and `content-type` highlighted.

## CDN concept

A CDN is distributed delivery infrastructure, not a magic speed button.

A badly optimised 8 MB photograph remains badly optimised even if it is delivered through excellent infrastructure. Delivery choices help most when the assets themselves are also sensible.

<!-- CHECKPOINT BOX -->

## Check your understanding

**1. What kinds of resources commonly benefit from compression?**
Text resources such as HTML, CSS, JavaScript, JSON, and SVG.

**2. What does `cache-control` help describe?**
How the browser or intermediary caches may store and reuse a response.

**3. Why is a CDN not a substitute for optimisation?**
Because it may improve delivery distance or caching, but it does not fix oversized or unnecessary assets.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

## Guided practice

Inspect response headers on a deployed site.

**Step 1 - Open a deployed page**

Use a live page rather than localhost if possible.

**Step 2 - Inspect headers**

Select HTML, CSS, JavaScript, and image requests. Record cache-control, content-encoding, and content-type where present.

**Step 3 - Interpret differences**

Describe which resources appear cacheable and which appear compressed.

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

## Independent practice

Compare two deployed projects if available, such as a traditional hosting example and a static CDN platform example.

**Requirements:**

- inspect headers for comparable resources
- record caching and compression differences
- avoid declaring one host universally better
- describe what the differences mean for this specific site

**Success criteria:**

- your comparison is evidence-based
- response headers are interpreted accurately
- delivery is connected to visitor experience

<!-- /IndependentPractice -->

## Before you continue

- I can explain browser caching.
- I can recognise basic caching headers.
- I can explain gzip and Brotli at a beginner level.
- I understand the purpose of a CDN.
- I can inspect response headers in DevTools.

## Extension activity

Find a cache-control header on a static asset and research what its directives mean. Explain whether the value seems sensible for that asset.

## Closure

- Performance is a whole-system concern.
- Source code, asset preparation, hosting, caching, compression, and delivery all contribute to the visitor's experience.
- Good infrastructure helps most when the website itself is thoughtfully prepared.
