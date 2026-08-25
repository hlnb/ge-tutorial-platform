---
title: HTTP Status Codes, Redirects, and Removed Pages
slug: seo-analytics/status-codes-redirects-and-removals
description: Learn how HTTP responses, redirects, 404s, 410s, and soft 404s affect technical SEO diagnosis and site maintenance.
section: SEO & Analytics
sectionId: seo-analytics
pathway: deployment
category: advanced
level: advanced
order: 6
estimatedTime: 55
difficulty: intermediate
prerequisites:
  - seo-analytics/canonical-urls-and-duplicates
next: seo-analytics/javascript-seo-vite-vue
pathwayLanding: seo-analytics
tags:
  - http
  - redirects
  - status-codes
  - technical-seo
hiddenFromCurriculum: true
---

<!-- ANCHOR HOOK -->

Every missing page on a single-page app returns the homepage shell with `200 OK`. The visitor sees "not found" after JavaScript runs, but the server has announced success.

Search systems read the response before they read the apology.

<!-- LEARNING OBJECTIVES -->

## What you'll learn

After this lesson, you will be able to:

- interpret common `2xx`, `3xx`, `4xx`, and `5xx` responses
- choose permanent versus temporary redirects
- detect redirect chains, loops, irrelevant destinations, and soft 404s
- handle deleted or moved content honestly

> **Before you start:** You should understand canonical URLs and be comfortable reading a Network panel document request.

## Status Codes Are Web Semantics

Status codes are not SEO decorations. They are the server's answer to the request. `200` means the request succeeded and the response contains a real representation. `301` and `308` communicate a permanent move. `302` and `307` communicate a temporary destination.

A permanent redirect should lead to the closest real replacement, preferably in one hop. If content is gone without a replacement, `404` or `410` is honest. If the server returns `200 OK` for error-like content, search systems may treat it as a soft 404.

Persistent `5xx` failures can reduce crawling and availability. A custom error page does not change the underlying status.

## Choose the Response From Intent

Start with what actually happened to the resource. Then choose the response.

| Intent | Better response | Reasoning |
|---|---|---|
| The content moved and has a close replacement | `301` or `308` | users and signals should transfer to the new URL |
| The content is temporarily elsewhere | `302` or `307` | the original URL may be useful again |
| The content is gone with no replacement | `404` or `410` | the address should not pretend to succeed |
| The site is temporarily unavailable | `503` | communicates temporary server-side failure |
| The user is not authorised | `401` or `403` | access is denied, not missing |

Do not redirect every missing page to the homepage. That may feel tidy, but it gives users an irrelevant destination and search systems a weak signal. A helpful 404 page with search, navigation, and contact options is often better than a misleading redirect.

## Redirect Quality

A redirect is a promise that the destination is the best available replacement. Check:

- relevance: the new page satisfies the same or very similar intent
- permanence: the status code matches whether the move is lasting
- chain length: the path resolves in one hop where practical
- consistency: internal links and sitemaps use the final URL
- loops: no URL redirects back into itself or a repeating chain
- method preservation: use `307` or `308` when preserving the request method matters

For most learner sites, the highest-value redirect work is simple: map old public URLs to close new URLs, remove redirected URLs from the sitemap, and update internal links so visitors do not rely on redirects during normal navigation.

## Response Decision Table

| Situation | Response | User-facing content | Follow-up |
|---|---:|---|---|
| Menu moved permanently | 301/308 | destination page | update internal links and sitemap |
| Booking paused for a day | usually 200 | clear availability message | restore normal content |
| Old event with useful archive | 200 | archived event page | self-canonical and label date |
| Deleted page with replacement | 301/308 | replacement page | remove old URL from sitemap |
| Deleted page without replacement | 404/410 | helpful not-found page | remove internal links |
| Server overload | 503 | temporary error | fix capacity; do not serve fake 200 |

> **Screenshot placeholder:** Add a real Network-panel or command-line capture showing a redirect chain and final response. Do not invent headers.

<!-- CHECKPOINT BOX -->

## Check your understanding

**1. What does a `200 OK` response claim?**
The request succeeded and the response represents the requested resource.

**2. When is a `404` acceptable?**
When a URL is genuinely not found and there is no close replacement. A helpful 404 page is still a valid outcome.

**3. What is a soft 404?**
Error-like content returned with a success status, such as a missing page that returns `200 OK`.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

## Guided practice

Inspect ten URLs: successful, redirected, missing, and deliberately broken.

**Step 1 - Record the initial request**

Use DevTools or a command-line HTTP client. Capture status, location header if present, and content type.

**Step 2 - Follow redirects**

Record each hop. Note whether the destination is relevant and whether the chain is longer than needed.

**Step 3 - Compare visible content**

Open the final page and check whether content matches the status semantics.

**Step 4 - Decide the repair**

Update internal links, redirect rules, sitemap entries, or deletion handling as needed.

**Step 5 - Retest the exact URL**

Repeat the original request after the repair. Record the new status, final URL, number of hops, and whether the visible content matches the response.

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

## Independent practice

Create a redirect/removal plan for a hypothetical five-page migration.

**Requirements:**

- old URL
- intended outcome
- status code
- destination if any
- internal-link update
- sitemap update
- verification method
- whether the visible page content matches the HTTP response

**Success criteria:**

- moved pages redirect to close replacements
- gone pages return honest 404/410 responses
- no redirect chain is longer than necessary
- internal links point to final URLs rather than relying on redirects

<!-- /IndependentPractice -->

## Before you continue

- I can read status and redirect evidence.
- I can choose permanent or temporary redirects based on intent.
- I understand why a fake `200` error page is risky.
- I can update links and sitemaps after response changes.

## Closure

The most search-friendly response is the truthful one. A moved page should say where it moved; a missing page should admit it is missing.
