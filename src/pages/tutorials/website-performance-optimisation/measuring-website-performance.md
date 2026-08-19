---
title: Measuring Website Performance
slug: website-performance-optimisation/measuring-website-performance
description: Use Lighthouse and Chrome DevTools Network to establish a repeatable performance baseline before making optimisation decisions.
section: Website Performance & Optimisation
sectionId: website-performance-optimisation
pathway: deployment
category: advanced
level: advanced
order: 3
estimatedTime: 45
difficulty: intermediate
prerequisites:
  - website-performance-optimisation/how-browsers-load-and-render-websites
previous: website-performance-optimisation/how-browsers-load-and-render-websites
next: website-performance-optimisation/optimising-images-and-media
pathwayLanding: website-performance-optimisation
tags:
  - performance
  - lighthouse
  - devtools
  - measurement
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

Developers do not optimise websites because they feel like something might be slow.

They gather evidence. Then they decide what to do with it.

<!-- LEARNING OBJECTIVES -->

## What you'll learn

After this lesson, you will be able to:

- run Lighthouse
- use the Network panel
- sort requests
- identify large resources
- explain lab and field data
- record a repeatable baseline

---

> **Before you start:** You should be able to open Chrome DevTools and explain the browser-loading pathway from the previous lesson.

---

## Chrome DevTools

Chrome DevTools is included with Google Chrome. No additional software is required.

On macOS, open it with `Command + Option + I`. On Windows or Linux, use `Ctrl + Shift + I`. You can also right-click the page and choose **Inspect**.

DevTools is one of the most important tools a frontend developer can learn because it lets you inspect what the browser actually received and did.

## Lighthouse

Lighthouse is built into Chrome DevTools. It is an automated auditing tool, so treat its recommendations as diagnostic evidence rather than a to-do list.

To run your first audit:

1. Open your website in Chrome.
2. Open DevTools.
3. Select Lighthouse.
4. Choose Navigation if prompted for the audit mode.
5. Select Performance.
6. Select the device mode required for the exercise.
7. Run the analysis.
8. Wait for the report.
9. Record the resulting measurements.
10. Read the diagnostics before making changes.

> **Screenshot placeholder:** Add `devtools-lighthouse-annotated.webp` from the current Chrome interface. Annotate the Performance checkbox, mobile/desktop choice, and Analyse button. Keep the screenshot readable rather than crowded.

## Lab data and field data

**Lab data** is measured under controlled conditions. It is useful for debugging, repeat testing, and comparing changes.

**Field data** is collected from real visitors. It is useful for understanding actual devices, networks, locations, and user experiences.

They answer different questions. Lab data helps you reproduce a problem. Field data helps you understand whether real visitors are experiencing it.

## Network panel

The Network panel shows the resources requested by a page.

To find the largest files:

1. Open DevTools.
2. Select Network.
3. Reload the page.
4. Wait until loading settles.
5. Find the Size column.
6. Sort by size.
7. Identify the five largest resources.
8. Record their filename, type, transferred size, and load time.

> **Screenshot placeholder:** Add `devtools-network-annotated.webp` from the current Network panel sorted by Size. Add numbered callouts to resource name, type, size, and waterfall.

## Performance baseline worksheet

Record the same information every time you test:

| Measurement | Result |
| --- | --- |
| Lighthouse Performance | |
| LCP | |
| INP if available | |
| CLS | |
| Total transferred | |
| Number of requests | |
| Image transfer total | |
| JavaScript transfer total | |
| CSS transfer total | |

Then identify three things worth investigating. Do not change them yet.

<!-- CHECKPOINT BOX -->

## Check your understanding

**1. Why should Lighthouse recommendations be investigated rather than blindly followed?**
Because automated tools provide signals. Developers still need to understand context, user impact, effort, and risk.

**2. What is the difference between lab data and field data?**
Lab data is controlled and repeatable. Field data reflects real users and real conditions.

**3. What does the Network panel help you find?**
It helps identify requested resources, transferred sizes, timing, and the loading waterfall.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

## Guided practice

Establish a baseline for one website.

**Step 1 - Run Lighthouse**

Record the Performance score, LCP, INP if shown, and CLS.

**Step 2 - Inspect Network requests**

Reload the page with the Network panel open and sort by Size.

**Step 3 - Record findings**

Fill in the baseline worksheet and list three issues worth investigating.

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

## Independent practice

Run the same measurement process on a page you built earlier.

**Requirements:**

- use the same browser and device setting for each test
- record Lighthouse and Network data
- identify three possible investigation targets
- avoid making changes during measurement

**Success criteria:**

- your baseline can be repeated later
- large resources are identified from evidence
- your notes separate measurement from optimisation

<!-- /IndependentPractice -->

## Before you continue

- I can open DevTools.
- I can run Lighthouse.
- I can inspect Network requests.
- I can find the largest resources.
- I understand lab versus field data.
- I have recorded a baseline.

## Extension activity

Test the same page twice with the same settings. Compare the results and note which numbers changed slightly. This helps you understand normal measurement variation.

## Closure

- Performance optimisation begins with evidence.
- A baseline lets you say: we changed this, and this measurement improved.
- That is considerably more useful than: it seems quicker on my laptop.
