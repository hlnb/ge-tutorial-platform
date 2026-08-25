---
title: "Final Project: Technical SEO Audit and Repair Plan"
slug: seo-analytics/measuring-and-improving-a-website
description: Complete a technical SEO audit with evidence, severity, prioritised fixes, and a retest plan for a real or teaching project site.
section: SEO & Analytics
sectionId: seo-analytics
pathway: deployment
category: advanced
level: advanced
order: 10
estimatedTime: 150
difficulty: intermediate
prerequisites:
  - seo-analytics/google-search-console
next: seo-analytics/analytics-setup
pathwayLanding: seo-analytics
tags:
  - audit
  - technical-seo
  - repair-plan
  - evidence
hiddenFromCurriculum: true
---

<!-- ANCHOR HOOK -->

A technical audit is not a 100-point score. It is a defensible set of findings with evidence, ownership, priority, and retests.

Black Swan Bistro is the default teaching project. A learner-owned site is better when permission and access are clear.

<!-- LEARNING OBJECTIVES -->

## What you'll learn

After this project, you will be able to:

- scope a 5-30 page technical SEO audit
- collect evidence for discovery, responses, directives, sitemaps, canonicals, rendering, mobile parity, structured data, and webmaster tools
- classify findings by impact and scope
- prioritise a 30-day repair plan
- retest changes with the original method

> **Before you start:** Complete the previous Technical SEO lessons. Do not collect private analytics, search-query data, verification tokens, or account screenshots unless they are necessary, permitted, and redacted.

## Audit the System, Not the Score

Technical SEO is maintenance of agreements: links point somewhere real, servers answer honestly, directives do not conflict, machine-readable data matches visible content, and monitoring checks whether those agreements still hold.

The audit must cover:

1. discovery and internal links
2. status codes and redirect paths
3. robots and index directives
4. sitemap accuracy
5. canonical consistency
6. initial and rendered content for representative JavaScript routes
7. mobile content parity
8. structured data on at least one eligible page
9. Search Console or Bing evidence when access exists
10. HTTPS and Core Web Vitals integration, referring back to the performance pathway

## Required Workflow

### Phase 1 - Define scope

Name the site, owner or permission, date, environment, and page sample. State business or user outcomes for the most important pages. Identify constraints and unavailable accounts.

### Phase 2 - Collect evidence

Inventory scoped URLs. Capture status, final URL, canonical, index directive, sitemap membership, incoming links, title/H1, and rendered-content check. Retain screenshots only when they prove a finding.

### Phase 3 - Classify findings

| Severity | Definition |
|---|---|
| Critical | blocks access/indexing across the site or exposes a security/privacy issue |
| High | prevents an important page from being discovered, rendered, indexed, or consolidated correctly |
| Medium | creates conflicting signals, wasted requests, or fragile behaviour with limited current impact |
| Low | clarity, maintenance, or resilience improvement without demonstrated material impact |
| Observation | expected behaviour or insufficient evidence; no fix prescribed |

Severity is impact plus scope, not tool colour.

### Evidence standards

Good audit evidence is specific enough for another person to reproduce. For each finding, record:

- exact URL tested
- date and time or reporting date range
- tool and environment
- status code, final URL, directive, canonical, or rendered-content observation
- screenshot or export only when it proves the point
- what the evidence does not prove

Avoid vague findings such as "SEO is bad" or "page not indexed." Replace them with findings like: "`/summer-menu` is listed in the sitemap, redirects to `/menu`, and should be removed from the sitemap generation rule." That finding has evidence, a cause, and a testable fix.

### Severity examples

Severity should reflect harm and scope:

| Finding | Likely severity | Why |
|---|---|---|
| Whole public site blocked by `Disallow: /` after launch | Critical | prevents crawling across important pages |
| Primary service page has no internal links | High | important page may not be discovered |
| Sitemap lists five redirected old URLs | Medium | conflicting discovery signals with limited user impact |
| One page has vague link text | Low | clarity issue, not a system blocker |
| Thank-you page is `noindex` | Observation | expected if intentional |

When unsure, choose the lower severity and explain the uncertainty. Overstating severity makes the audit less useful.

### Phase 4 - Prioritise

For each finding include the finding, affected URLs, evidence, reproduction steps, consequence, smallest fix, owner, dependency, change risk, and verification method. Prioritise blockers and signal conflicts before cosmetic metadata refinements.

### Repair planning with confidence

Each proposed repair should answer four questions:

1. What exact behaviour will change?
2. What could break if the change is wrong?
3. How will we verify the result?
4. When should we recheck search-engine reports?

For example, changing a URL slug may create more risk than benefit if the current URL is already indexed, linked, and understandable. Updating internal links to point directly to the canonical URL may be lower risk and still improve signal consistency.

### Phase 5 - Repair a bounded sample

Implement or describe three fixes: one discovery/link or sitemap fix, one response/directive/canonical fix, and one rendering or structured-data fix. If you lack permission, provide exact implementation instructions and a safe local demonstration instead.

### Phase 6 - Retest

Repeat the original test. "Code changed" is not verification. Record actual versus expected results and remaining uncertainty.

## Required Final Artefacts

- executive summary of no more than 250 words
- scope and limitations
- URL inventory/evidence sheet
- issue register with severity and proof
- prioritised 30-day repair plan
- before/after evidence for three fixes
- monitoring plan for after deployment, monthly review, and major route/domain changes
- short reflection: "Which assumption did the evidence overturn?"

## Assessment Rubric

| Criterion | Points | Evidence of mastery |
|---|---:|---|
| Scope and permission | 10 | clear boundary, representative URLs, limitations, and data care |
| System understanding | 15 | findings placed at the correct discovery/crawl/render/index/serve stage |
| Evidence quality | 20 | reproducible requests, purposeful screenshots/exports, facts separated from inference |
| Technical accuracy | 20 | correct links, directives, sitemap, canonicals, status codes, JavaScript checks, and schema |
| Prioritisation | 15 | severity reflects impact/scope; blockers precede low-value polish |
| Remediation quality | 10 | smallest safe fix, ownership, dependency, and change risk are clear |
| Verification | 10 | original tests repeated; remaining uncertainty stated honestly |

Passing recommendation: 70/100 overall and at least half marks in Technical accuracy and Evidence quality. A severe privacy or security mistake is an automatic resubmission condition.

<!-- CHECKPOINT BOX -->

## Check your understanding

**1. Can another person reproduce each high-priority finding?**
They should be able to use your URL, tool, date, environment, evidence, and reproduction steps.

**2. Did the audit distinguish expected exclusions from broken behaviour?**
It must. Intentional redirects, `noindex`, and duplicates should not become fake emergencies.

**3. Did each proposed action include a retest?**
Yes. A fix is incomplete until the original evidence has been checked again.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

## Guided practice

Build the audit pack in six phases.

**Step 1 - Define the scope**

Choose a 5-30 page site or teaching project. Record permission, date, environment, and limitations.

**Step 2 - Collect URL evidence**

Capture status, final URL, canonical, index directive, sitemap membership, incoming links, title/H1, rendered content, and mobile parity.

**Step 3 - Classify findings**

Assign severity using impact and scope. Mark observations where evidence does not justify a fix.

**Step 4 - Prioritise the repair plan**

Choose no more than three first actions for the next 30 days.

**Step 5 - Repair a bounded sample**

Implement or document three fixes across discovery/link or sitemap, response/directive/canonical, and rendering or structured data.

**Step 6 - Retest and reflect**

Repeat the original tests. Record which assumption changed because of evidence.

**Step 7 - Prepare the handoff**

Write the repair plan for a real maintainer. Include exact files, settings, redirects, or CMS fields where possible. Separate tasks you completed from tasks that require account access, deployment, or owner approval.

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

## Independent practice

Submit the final technical SEO audit and repair plan.

**Requirements:**

- include all required final artefacts
- cover the ten audit areas
- include the assessment rubric with self-assessed points
- protect private data and verification material
- include one example finding written in full with evidence, consequence, fix, and retest

**Success criteria:**

- findings are reproducible
- priorities match impact and scope
- three fixes include before/after evidence
- recommendations do not promise rankings, indexing, or rich-result display
- the handoff is clear enough for another maintainer to act on

<!-- /IndependentPractice -->

## Before you continue

- I can explain the scope and permission boundary.
- I can separate observation, inference, action, and retest.
- I can prioritise blockers before polish.
- I can protect private account and verification data.

## Closure

Technical SEO is maintenance of agreements: links point somewhere real, servers answer honestly, directives do not conflict, machine-readable data matches visible content, and monitoring checks whether those agreements still hold.
