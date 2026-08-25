---
title: XML Sitemaps and Discovery Signals
slug: seo-analytics/sitemaps-robots-indexing
description: Learn how to create a canonical-only XML sitemap, validate it, and keep it aligned with status, canonical, and index signals.
section: SEO & Analytics
sectionId: seo-analytics
pathway: deployment
category: advanced
level: advanced
order: 4
estimatedTime: 45
difficulty: intermediate
prerequisites:
  - seo-analytics/robots-noindex-access-control
next: seo-analytics/canonical-urls-and-duplicates
pathwayLanding: seo-analytics
tags:
  - sitemap
  - discovery
  - canonical
  - technical-seo
hiddenFromCurriculum: true
---

<!-- ANCHOR HOOK -->

The generated sitemap proudly lists the old menu URL, the redirected booking URL, a `noindex` thank-you page, and the new canonical pages. The file is syntactically valid but tells four different stories.

A sitemap helps when it is boringly accurate.

<!-- LEARNING OBJECTIVES -->

## What you'll learn

After this lesson, you will be able to:

- explain a sitemap as a discovery and canonical hint
- build a valid minimal XML sitemap
- include only indexable, canonical, successful URLs
- use accurate `lastmod` values and understand protocol limits
- submit and inspect sitemap results without expecting instant indexing

> **Before you start:** You should understand crawl/index controls and be able to request a URL and inspect its response.

## Sitemaps Are Discovery Hints

A sitemap inventories preferred URLs. It does not replace internal links, guarantee crawling, or guarantee indexing. It helps search systems find URLs, especially on new or recently changed sites.

Include absolute, canonical URLs that the site genuinely wants indexed. Exclude redirects, errors, blocked or `noindex` URLs, duplicate variants, and internal search results. `lastmod` should describe a meaningful page change, not the build time stamped onto every URL.

`changefreq` and `priority` are optional protocol hints. They are not ranking controls.

## Minimal Valid Sitemap

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2026-08-20</lastmod>
  </url>
  <url>
    <loc>https://example.com/menu</loc>
    <lastmod>2026-08-18</lastmod>
  </url>
</urlset>
```

A single sitemap is limited to 50,000 URLs or 50 MB uncompressed by the protocol. Small learner projects usually do not need sitemap indexes.

## Inclusion Decision Table

| URL evidence | Include in sitemap? | Reason |
|---|---|---|
| `200 OK`, self-canonical, indexable | Yes | preferred URL |
| redirects to another URL | No | list the destination instead |
| returns `404` or `410` | No | removed or unavailable |
| has `noindex` | No | not intended for indexing |
| duplicate tracking URL | No | consolidate to the canonical |

> **Screenshot placeholder:** Add a real, redacted Search Console Sitemaps report only after a verified property is available.

<!-- CHECKPOINT BOX -->

## Check your understanding

**1. Does a sitemap prove a URL is indexed?**
No. It is a discovery hint and canonical signal, not an indexing guarantee.

**2. Should a sitemap list redirected URLs?**
No. It should list the preferred final canonical URL instead.

**3. What does an honest `lastmod` describe?**
A meaningful modification to the page content or representation, not merely a site rebuild.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

## Guided practice

Create and test a sitemap for a five-page project.

**Step 1 - Generate or hand-write the file**

Include absolute URLs only. Keep the first version small enough to inspect by eye.

**Step 2 - Validate XML structure**

Use an XML parser or validator. Fix unescaped ampersands, missing closing tags, and incorrect namespaces.

**Step 3 - Request every listed URL**

Record status, final URL, canonical, and index directive for each entry.

**Step 4 - Add discovery wiring**

Add the full sitemap address to `robots.txt`, then submit it in webmaster tools when you have property access.

**Step 5 - State what each result proves**

Submission proves submission. Discovery proves the system knows the URL. Indexing requires separate evidence.

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

## Independent practice

Deliver a validated sitemap plus an evidence table.

**Requirements:**

- listed URL
- status and final URL
- canonical URL
- index directive
- inclusion decision
- last meaningful modification

**Success criteria:**

- every listed URL is absolute and canonical
- no `noindex`, blocked, redirected, or error URL is listed
- you can explain what the sitemap does and does not prove

<!-- /IndependentPractice -->

## Before you continue

- I can build a minimal valid XML sitemap.
- I can test sitemap entries against status, canonical, and index signals.
- I understand that sitemap submission does not force indexing.
- I can keep `lastmod` honest.

## Closure

A sitemap is useful when it is boringly accurate. Its job is to reduce ambiguity, not decorate a build.
