---
title: "Accessibility Is Not an Add-On"
slug: accessibility-essentials/accessibility-is-not-an-add-on
description: "Learn what web accessibility means, why it belongs at the start of the development process, and how the WCAG POUR principles help you spot common barriers before they become expensive rebuilds."
section: Accessibility Essentials
sectionId: accessibility-essentials
pathway: deployment
category: advanced
level: advanced
order: 1
estimatedTime: 35
difficulty: easy
next: accessibility-essentials/semantic-html-accessibility
pathwayLanding: accessibility-essentials
tags:
  - accessibility
  - wcag
  - workflow
  - html
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

Imagine walking into a building where the front door exists, although only people who can climb a ladder can reach it.

That would be absurd in the physical world. On the web, we accidentally build “ladder doors” all the time: buttons that only work with a mouse, text that cannot be read against its background, forms that do not explain errors, images with no useful alternative text, and layouts that fall apart when users zoom in.

Accessibility is the habit of asking: **Can people actually use this?**

Not “does it look polished in my browser on my screen with my mouse?”  
Can people use it when they are tired, injured, using a keyboard, using a screen reader, zooming the page, dealing with glare, using a phone one-handed, or trying to complete a task quickly?

That is where accessibility starts.

---

<!-- LEARNING OBJECTIVES -->

## What you'll learn

By the end of this lesson, you will be able to:

- explain accessibility in plain English
- describe the four WCAG POUR principles
- identify common barriers in a webpage
- understand why accessibility belongs in planning, design, code, and testing
- complete a simple first-pass accessibility review

---

## Prerequisites

> **Before you start:**
Learners should understand:
- basic HTML page structure
- basic CSS styling
- links, images, headings, and buttons
- the idea that different users browse the web in different ways

---

## Core explanation

Accessibility means designing and building websites so that people with different bodies, devices, abilities, preferences, and contexts can access the same information and complete the same tasks.

It is often discussed in relation to disability, and rightly so. Accessibility supports people with visual, hearing, motor, cognitive, neurological, and speech-related disabilities. It also helps people dealing with temporary or situational barriers.

For example:

- A broken wrist can make mouse use difficult.
- Bright sunlight can make low-contrast text hard to read.
- A sleeping baby nearby can make captions essential.
- A slow connection can make over-complicated pages painful.
- Anxiety or cognitive load can make unclear forms harder to complete.

Accessibility is not separate from usability. It is usability with more people included.

---

## WCAG in plain English

WCAG stands for **Web Content Accessibility Guidelines**. It gives developers, designers, content creators, and organisations a shared way to talk about accessibility.

The four foundation principles are often remembered as **POUR**:

### Perceivable

People need to be able to perceive the information.

This means content should not rely on only one sense or one format. Examples include:

- text alternatives for meaningful images
- captions or transcripts for audio/video content
- readable colour contrast
- content that remains available when zoomed

Plain-English question:

> Can users notice and understand the information being presented?

### Operable

People need to be able to use the interface.

Examples include:

- links and buttons that work with a keyboard
- no keyboard traps
- visible focus indicators
- enough time to complete tasks
- clear navigation

Plain-English question:

> Can users move through the site and use the controls?

### Understandable

People need to understand the content and interface.

Examples include:

- clear language
- predictable navigation
- helpful form labels
- useful error messages
- consistent layout patterns

Plain-English question:

> Does the page make sense, or does it make users do detective work?

### Robust

Content needs to work reliably across browsers, devices, and assistive technologies.

Examples include:

- valid HTML
- semantic elements
- correct form markup
- careful ARIA use
- code that does not break when technology changes

Plain-English question:

> Is the structure strong enough for browsers and assistive tools to interpret it?

---

## Accessibility is a workflow

A common mistake is treating accessibility as a final checklist.

That usually leads to awkward patching:

- adding ARIA to broken HTML
- changing colours after the whole design is built
- trying to fix keyboard traps after JavaScript is already tangled
- writing alt text after everyone has forgotten why images were chosen

A better workflow is:

1. **Plan:** What tasks must users complete?
2. **Structure:** Is the HTML meaningful?
3. **Design:** Is the content readable and responsive?
4. **Build:** Are controls native and keyboard-friendly?
5. **Test:** Can users navigate, read, understand, and complete tasks?
6. **Improve:** Fix barriers as part of normal development.

Accessibility is not one giant heroic effort. It is a set of small, sensible habits.

---

## Starter example

Use this as a deliberately imperfect page for learners to inspect.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Coastal Coffee</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="top">
    <div class="logo">Coastal Coffee</div>
    <div class="menu">
      <span>Home</span>
      <span>Menu</span>
      <span>Contact</span>
    </div>
  </div>

  <div class="hero">
    <img src="coffee.jpg">
    <div class="big-text">Fresh coffee by the coast</div>
    <div class="button">View our menu</div>
  </div>

  <div class="section">
    <div class="heading">Opening hours</div>
    <p>Open daily from 7am to 2pm.</p>
  </div>
</body>
</html>
```

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
}

.top {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #222;
  color: #777;
}

.menu span {
  margin-left: 1rem;
}

.hero {
  padding: 2rem;
  text-align: center;
}

.hero img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}

.big-text {
  font-size: 2rem;
}

.button {
  display: inline-block;
  background: #333;
  color: white;
  padding: 0.75rem 1rem;
}
```

---

## Accessibility review prompts

Ask learners to inspect the starter page and answer:

1. Can the navigation items be activated as links?
2. Is the page structure clear to assistive technology?
3. Does the image have an `alt` attribute?
4. Is the button actually a button or link?
5. Is the colour contrast in the header readable?
6. Are headings marked up as headings?
7. Could a keyboard user move through this page sensibly?
8. Is the page language declared?
9. Would the content still make sense without the image?
10. What would be the first three fixes?

---

## Improved direction

Do not fully fix everything in Lesson 1. This lesson should introduce the audit mindset. Show learners that accessibility problems often appear in ordinary code.

A partial improvement could look like this:

```html
<header class="site-header">
  <a class="site-logo" href="/">Coastal Coffee</a>

  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/menu.html">Menu</a></li>
      <li><a href="/contact.html">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <section class="hero">
    <img src="coffee.jpg" alt="Cup of coffee on a table near the coast">
    <h1>Fresh coffee by the coast</h1>
    <a class="button" href="/menu.html">View our menu</a>
  </section>

  <section>
    <h2>Opening hours</h2>
    <p>Open daily from 7am to 2pm.</p>
  </section>
</main>
```

---

## How and why this improves the page

- `header`, `nav`, `main`, and `section` give the page meaningful structure.
- Real links replace inactive `span` elements.
- The hero text becomes a real `h1`.
- The menu call-to-action becomes a link because it takes users to another page.
- The image now has an `alt` attribute.
- The navigation has an accessible label.
- The structure is easier for browsers, screen readers, keyboard users, and future developers to understand.

<!-- CHECKPOINT BOX -->

<!-- CheckpointBox component -->

## Check your understanding

Before moving on, learners should be able to explain:

**What does accessibility mean?**
Accessibility means designing and building websites so people with different abilities, devices, preferences, and situations can access the same information and complete the same tasks.

**What does POUR stand for?**
POUR stands for Perceivable, Operable, Understandable, and Robust: the four WCAG principles for accessible web content.

**Why is accessibility not only about screen readers?**
Screen readers matter, but accessibility also includes keyboard access, readable contrast, captions, clear forms, zoom support, understandable content, and many temporary or situational needs.

**Why is semantic HTML usually the first fix?**
Semantic HTML gives browsers and assistive technologies built-in meaning and behaviour before extra CSS, JavaScript, or ARIA is added.

**Why does visual polish not guarantee usability?**
A page can look clean while still hiding structure, blocking keyboard access, using poor contrast, or providing unclear labels and errors.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

<!-- GuidedPractice component -->

## Guided Practice

Give learners a short page for a fictional business or project. Ask them to create an accessibility issue list using these categories:

- Structure
- Text and readability
- Images
- Links and buttons
- Keyboard access
- Forms, if present
- Content clarity

They should not fix the page yet. The goal is to notice barriers.

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

<!-- IndependentPractice component -->

## Independent Practice

Learners choose one page they have already built and write a short accessibility review:

```md
# Accessibility first-pass review

## Page reviewed

## What works well

## Possible barriers

## First three fixes

## What I need to learn next
```

<!-- /IndependentPractice -->

## Accessibility testing task

Use only the keyboard:

- Press `Tab` to move forward.
- Press `Shift + Tab` to move backward.
- Press `Enter` on links.
- Press `Space` or `Enter` on buttons.
- Watch where focus moves.
- Note anything that cannot be reached or activated.

## Common mistakes

- Thinking accessibility only matters for screen reader users.
- Treating WCAG as a scary legal document instead of a practical guide.
- Waiting until the end of a project.
- Assuming a page is accessible because it looks clean.
- Replacing native HTML controls with clickable `div`s.

## Closure

Accessibility starts with attention. The first skill is not memorising every rule. The first skill is learning to notice when a page quietly assumes that every user sees, moves, reads, hears, and clicks in the same way.

That assumption is where many web problems begin.

![POUR principles diagram showing Perceivable, Operable, Understandable, and Robust supporting an accessible web experience.](/assets/images/tutorials/accessibility-essentials/pour-principles.svg)

## Next lesson

Next, learners should study **Semantic HTML: The First Accessibility Tool**.

---
