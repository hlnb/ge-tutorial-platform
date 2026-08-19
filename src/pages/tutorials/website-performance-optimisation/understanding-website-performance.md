---
title: Understanding Website Performance
slug: website-performance-optimisation/understanding-website-performance
description: Learn what website performance means, why it is measured from the visitor's perspective, and how LCP, INP, and CLS describe real page experience.
section: Website Performance & Optimisation
sectionId: website-performance-optimisation
pathway: deployment
category: advanced
level: advanced
order: 1
estimatedTime: 35
difficulty: intermediate
prerequisites:
  - intermediate/modern-css-architecture
next: website-performance-optimisation/how-browsers-load-and-render-websites
pathwayLanding: website-performance-optimisation
tags:
  - performance
  - core-web-vitals
  - user-experience
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

Imagine two restaurant websites.

Both contain the menu you want. The first shows useful information almost immediately. The second gives you a blank screen, then a heading, then a photograph, then the menu jumps down because something else appeared above it.

You tap **Book a Table**. Nothing happens. You tap again.

Eventually both websites finish loading. Technically, both websites worked. Did they provide the same experience?

No. That difference is web performance.

<!-- LEARNING OBJECTIVES -->

## What you'll learn

By the end of this lesson, you will be able to:

- explain website performance in your own words
- identify factors that influence performance
- describe LCP, INP, and CLS
- explain why mobile performance matters
- explain why developers measure before optimising

---

> **Before you start:** You should already understand basic HTML, CSS, JavaScript, responsive design, and how to open browser developer tools.

---

## Performance is user experience

Website performance describes how quickly and efficiently people can access and interact with a website.

It includes more than page-load time. A visitor experiences several stages:

- something begins to appear
- meaningful content appears
- the interface becomes usable
- interactions respond
- the page remains visually stable

A technically correct website can still feel poor if it keeps people waiting, shifts content unexpectedly, or delays interaction feedback.

## Core Web Vitals

Three important user-centred measurements are known as the Core Web Vitals.

**Largest Contentful Paint (LCP)** examines loading performance. A useful beginner-friendly question is: how long does it take for the main visible content to appear? A good LCP is generally 2.5 seconds or less.

**Interaction to Next Paint (INP)** examines responsiveness. It asks how quickly the interface visually responds after the visitor interacts with it. A good INP is generally 200 milliseconds or less.

**Cumulative Layout Shift (CLS)** examines visual stability. It asks whether content unexpectedly moves while the page is loading. A good CLS is generally 0.1 or less.

## Performance depends on context

A website tested on a powerful desktop, fast NBN, and localhost may behave very differently on an older phone, mobile data, a congested network, or a distant server.

Professional developers therefore test conditions other than their own. The point is not to make every page perfect in every possible situation. The point is to understand the experience people are likely to have and remove avoidable barriers.

## The optimisation cycle

Throughout this pathway we use a repeatable cycle:

1. Measure
2. Investigate
3. Prioritise
4. Improve
5. Measure again

<!-- CHECKPOINT BOX -->

## Check your understanding

**1. Why is performance more than page-load time?**
Because visitors experience several stages: first content, meaningful content, interaction readiness, response speed, and visual stability.

**2. Which Core Web Vital describes visual stability?**
CLS, or Cumulative Layout Shift.

**3. Why should developers measure before optimising?**
Measurement creates evidence. Without it, changes are guesses and you cannot prove whether an improvement helped.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

## Guided practice

Choose two websites and observe them without running any tools. This is a perception exercise before a measurement exercise.

**Step 1 - Load each site on desktop**

Record when useful content appears, whether the layout shifts, and whether menus respond immediately.

**Step 2 - Load each site on mobile**

Repeat the same observation on a phone-sized viewport or physical phone.

**Step 3 - Compare the experience**

Write down the differences you noticed. Focus on what a visitor would feel, not what a score might say.

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

## Independent practice

Choose one website you have built.

Write a short performance hypothesis:

`I think this website may have performance issues because...`

Do not optimise it yet. We measure first.

**Requirements:**

- identify one page to investigate later
- write one hypothesis about loading, interaction, stability, or resource size
- describe the device or network condition you are most concerned about

**Success criteria:**

- your hypothesis is specific enough to test
- you avoid making changes before collecting evidence
- you connect performance to visitor experience

<!-- /IndependentPractice -->

## Before you continue

- I can explain web performance.
- I know what LCP measures.
- I know what INP measures.
- I know what CLS measures.
- I understand that performance differs between devices and networks.
- I have completed my first performance observation.

## Extension activity

Compare the same website using desktop, phone, Wi-Fi, and a slower mobile connection if available. Record whether your perception changes.

## Closure

- Website performance is not simply about making a website "fast".
- It is about creating an experience that feels available, responsive, and stable.
- The most important rule introduced today is: measure before you optimise.

Otherwise, you are guessing.
