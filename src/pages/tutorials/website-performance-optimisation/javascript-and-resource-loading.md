---
title: JavaScript and Resource Loading
slug: website-performance-optimisation/javascript-and-resource-loading
description: Understand how JavaScript affects download, parsing, execution, responsiveness, third-party loading, and production build decisions.
section: Website Performance & Optimisation
sectionId: website-performance-optimisation
pathway: deployment
category: advanced
level: advanced
order: 6
estimatedTime: 40
difficulty: intermediate
prerequisites:
  - website-performance-optimisation/css-and-web-font-performance
previous: website-performance-optimisation/css-and-web-font-performance
next: website-performance-optimisation/caching-compression-and-content-delivery
pathwayLanding: website-performance-optimisation
tags:
  - performance
  - javascript
  - resource-loading
  - vite
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

JavaScript can make pages interactive and useful.

It can also cost more than its file size suggests, because the browser must download it, parse it, compile it, execute it, and then respond to the page changes it creates.

<!-- LEARNING OBJECTIVES -->

## What you'll learn

By the end of this lesson, you will be able to:

- identify JavaScript resources
- explain script-loading behaviour
- recognise third-party JavaScript
- explain code splitting
- question whether JavaScript is needed

---

> **Before you start:** You should understand basic JavaScript, the Network panel, and the difference between first-party and third-party site resources.

---

## JavaScript costs more than bytes

JavaScript may need to move through this pathway:

1. Download
2. Parse
3. Compile
4. Execute
5. Update page

## Script loading

Script attributes affect when code runs relative to HTML parsing.

```html
<script src="app.js" defer></script>
```

```html
<script type="module" src="app.js"></script>
```

Learners do not need to memorise every loading mode immediately. They do need to understand that scripts can block, delay, or coordinate with page rendering depending on how they are loaded.

## The most effective optimisation

Ask:

> Does this feature actually need JavaScript?

Modern HTML and CSS can provide functionality that previously required scripting. Less unnecessary code means less code to transfer, parse, execute, debug, and maintain.

## Vite production builds

Development builds are designed for fast feedback while you code. Production builds are designed for deployment.

When a project uses Vite, students should run the normal production build and inspect the generated assets rather than manually minifying source files that the build tool already processes.

<!-- CHECKPOINT BOX -->

## Check your understanding

**1. Why can JavaScript cost more than its transfer size?**
Because the browser must parse, compile, and execute it after downloading it.

**2. Why should you identify third-party scripts?**
Because they may load code, make network requests, or affect responsiveness outside your direct source code.

**3. Why is "do we need JavaScript here?" a performance question?**
Because avoiding unnecessary JavaScript removes transfer, execution, and maintenance cost.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

## Guided practice

Create a JavaScript inventory.

**Step 1 - Filter Network requests**

Open Network, reload the page, and filter by JS.

**Step 2 - Classify scripts**

Record transfer size, whether each script is first-party or third-party, its likely purpose, and whether it is needed immediately.

**Step 3 - Inspect a production build**

Run the project's normal production build if available, then inspect generated asset names and sizes.

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

## Independent practice

Choose one JavaScript resource and answer:

1. What does it do?
2. When is it required?
3. Is it first-party or third-party?
4. Does every page need it?
5. Could it load later?
6. Could HTML or CSS provide the functionality instead?

**Requirements:**

- base your answers on Network evidence
- avoid removing code until its purpose is understood
- identify one possible loading improvement

**Success criteria:**

- the script's purpose is clear
- immediate versus later loading is considered
- your recommendation does not break required interaction

<!-- /IndependentPractice -->

## Before you continue

- I can identify JavaScript resources.
- I can explain why JavaScript affects responsiveness.
- I can recognise third-party JavaScript.
- I understand why production builds matter.
- I can question whether JavaScript is needed.

## Extension activity

Find one interaction currently written in JavaScript and research whether HTML or CSS can provide the same behaviour accessibly.

## Closure

- The fastest JavaScript is sometimes JavaScript you never send.
- Removing code blindly is not optimisation.
- Understand purpose first, then decide.
