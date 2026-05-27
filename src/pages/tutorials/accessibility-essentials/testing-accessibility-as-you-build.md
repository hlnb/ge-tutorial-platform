---
title: "Testing Accessibility as You Build"
slug: accessibility-essentials/testing-accessibility-as-you-build
description: "Learn a practical accessibility testing workflow that combines manual checks, browser tools, and automated tools."
section: Accessibility Essentials
sectionId: accessibility-essentials
pathway: deployment
category: advanced
level: advanced
order: 8
estimatedTime: 45
difficulty: medium
previous: accessibility-essentials/aria-use-with-care
pathwayLanding: accessibility-essentials
tags:
  - accessibility
  - testing
  - wcag
  - audit
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

Automated accessibility tools are useful.

They are also not magic.

An automated tool can tell you that an image is missing alt text. It cannot always tell you whether the alt text is meaningful.

It can detect some contrast failures. It cannot decide whether your instructions make sense to a stressed human being trying to complete a form before an appointment.

Accessibility testing needs tools and judgement.

The good news: you can start with a small repeatable workflow.

---

<!-- LEARNING OBJECTIVES -->

## What you'll learn

By the end of this lesson, you will be able to:

- run a basic manual accessibility check
- use keyboard testing as a first-line habit
- inspect headings, labels, alt text, contrast, and focus
- use automated tools without over-trusting them
- record accessibility issues clearly
- create a practical fix list

---

## Prerequisites

> **Before you start:**
Learners should understand:
- semantic HTML
- alt text
- keyboard navigation
- forms
- colour contrast
- basic ARIA

---

## Core explanation

Accessibility testing should happen while you build, not only at the end.

A useful beginner workflow combines:

1. **Manual review**
2. **Keyboard testing**
3. **Browser inspection**
4. **Automated scanning**
5. **Fix and retest**
6. **Documenting what changed**

Each method catches different problems.

---

## What automated tools can catch

Automated tools can often detect:

- missing alt attributes
- missing form labels
- some colour contrast failures
- empty buttons or links
- duplicate IDs
- invalid ARIA attributes
- missing document language
- heading structure warnings

---

## What automated tools may miss

Automated tools may not reliably judge:

- whether alt text is meaningful
- whether link text makes sense in context
- whether instructions are clear
- whether a keyboard experience feels logical
- whether focus order is intuitive
- whether content is understandable
- whether ARIA is helpful or misleading
- whether the user journey is emotionally or cognitively difficult

Tools help. Humans still need to think. Annoying, I know. Very rude of reality.

---

## Basic testing workflow

### Step 1: Check page structure

Ask:

- Is there one clear `h1`?
- Do headings follow a logical order?
- Is there a `main` element?
- Are page regions meaningful?
- Is navigation marked up as navigation?

### Step 2: Check links and buttons

Ask:

- Do links go somewhere?
- Do buttons perform actions?
- Does link text make sense?
- Are clickable things real interactive elements?
- Are controls labelled clearly?

### Step 3: Check images

Ask:

- Does every image have an `alt` attribute?
- Are decorative images empty with `alt=""`?
- Does informative alt text preserve meaning?
- Do functional image links describe the action?

### Step 4: Check keyboard access

Ask:

- Can the page be used without a mouse?
- Is focus visible?
- Is focus order logical?
- Are there keyboard traps?
- Can menus, accordions, and forms be operated?

### Step 5: Check forms

Ask:

- Does every input have a label?
- Are labels connected to inputs?
- Is help text connected where needed?
- Are errors clear?
- Are required fields explained?
- Are related options grouped?

### Step 6: Check colour and readability

Ask:

- Is text contrast strong enough?
- Are links recognisable?
- Is colour supported by text or icons?
- Is text readable at 200% zoom?
- Does spacing support scanning?

### Step 7: Run an automated tool

Suggested tools:
- Browser DevTools accessibility tree
- Lighthouse accessibility audit
- WAVE browser extension
- axe DevTools browser extension

Treat results as a starting point, not a final verdict.

---

## Starter audit template

```md
# Accessibility test report

## Page or component tested

## Date tested

## Tested by

## Manual checks

### Structure and headings

### Links and buttons

### Images and alt text

### Keyboard navigation

### Forms

### Colour and readability

### ARIA and dynamic content

## Automated tool used

## Issues found

| Issue | Impact | Suggested fix | Status |
|---|---|---|---|
| Missing form label | High | Add visible label connected with for/id | To do |

## Fixes completed

## Items needing further review
```

---

## Sample test page

Use a deliberately imperfect test page:

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Workshop Signup</title>
</head>
<body>
  <div class="header">
    <div>GraphiteEdge Workshops</div>
    <div>
      <span>Home</span>
      <span>Workshops</span>
      <span>Contact</span>
    </div>
  </div>

  <div class="main">
    <h3>Learn CSS Layout</h3>
    <img src="layout-workshop.jpg">
    <p>Join a practical workshop on layout patterns.</p>

    <form>
      <input placeholder="Name">
      <input placeholder="Email">
      <button>Go</button>
    </form>
  </div>
</body>
</html>
```

---

## Example audit findings

```md
# Accessibility test report

## Page or component tested

Workshop Signup page

## Manual checks

### Structure and headings

- Missing `lang` attribute on `html`.
- Header and main content use generic `div` elements.
- First heading is `h3`; page should start with a clear `h1`.

### Links and buttons

- Navigation items are spans, not links.
- Submit button says “Go”, which is vague.

### Images and alt text

- Image is missing an `alt` attribute.

### Keyboard navigation

- Navigation items cannot receive focus.
- Form fields and button can be reached.

### Forms

- Inputs use placeholders instead of visible labels.
- Email input does not use `type="email"`.

## Issues found

| Issue | Impact | Suggested fix | Status |
|---|---|---|---|
| Missing page language | Medium | Add `lang="en"` to `html` | To do |
| Navigation spans | High | Convert to real links | To do |
| Missing form labels | High | Add visible labels connected to inputs | To do |
| Missing alt attribute | Medium | Add appropriate alt text or empty alt | To do |
```

---

## Improved version

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Workshop Signup | GraphiteEdge</title>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to main content</a>

  <header class="site-header">
    <a href="/">GraphiteEdge Workshops</a>

    <nav aria-label="Main navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/workshops.html">Workshops</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main id="main-content">
    <h1>Learn CSS Layout</h1>

    <img 
      src="layout-workshop.jpg" 
      alt="Workshop desk with layout sketches and a laptop"
    >

    <p>Join a practical workshop on layout patterns.</p>

    <form>
      <div>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" autocomplete="name">
      </div>

      <div>
        <label for="email">Email address</label>
        <input id="email" name="email" type="email" autocomplete="email">
      </div>

      <button type="submit">Register for the workshop</button>
    </form>
  </main>
</body>
</html>
```

---

## How and why this improves the page

- `lang="en"` declares the page language.
- Landmarks identify the header, navigation, and main content.
- Navigation items are links.
- The page starts with a clear `h1`.
- The image has alt text.
- Form fields have visible labels.
- The email field uses the correct input type.
- The submit button describes the action.
- The skip link improves keyboard navigation.

<!-- CHECKPOINT BOX -->

<!-- CheckpointBox component -->

## Check your understanding

Learners should be able to answer:

**Why are automated tools not enough?**
Automated tools catch many technical issues, but they cannot reliably judge meaning, clarity, focus logic, or whether a task feels understandable to a person.

**What should you test manually?**
Manually test structure, headings, links, buttons, images, forms, keyboard access, focus order, contrast, readability, and dynamic content.

**Why is keyboard testing essential?**
Keyboard testing quickly reveals whether controls can be reached, operated, understood, and escaped without a mouse.

**What belongs in an accessibility issue report?**
Include the page or component, test method, issue, impact, suggested fix, status, and any items needing further review.

**Why should you retest after fixing issues?**
Fixes can fail, only partially solve the issue, or create new problems, so each fix needs verification.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

<!-- GuidedPractice component -->

## Guided Practice

Give learners the sample test page and ask them to:

- complete the audit template
- identify at least six issues
- fix three issues
- run a keyboard test
- record what changed

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

<!-- IndependentPractice component -->

## Independent Practice

Learners choose a page from their own project and complete a mini audit:

```md
# Mini accessibility audit

## Page tested

## Main user task

## Manual findings

## Automated findings

## Top three fixes

## Fixes completed

## What still needs review
```

<!-- /IndependentPractice -->

## Accessibility testing task

Complete the full workflow:

1. Manual structure review.
2. Keyboard-only test.
3. Image alt text review.
4. Form label review.
5. Colour contrast check.
6. Automated scan.
7. Fix at least three issues.
8. Retest the fixed page.

## Common mistakes

- Treating a perfect automated score as proof of accessibility.
- Ignoring keyboard testing.
- Fixing warnings without understanding them.
- Forgetting to retest after changes.
- Testing only the homepage.
- Testing only at one screen size.
- Testing only with a mouse.
- Keeping accessibility notes in your head instead of recording them.

## Closure

Accessibility testing is not about becoming perfect overnight. It is about building a habit of checking whether people can perceive, operate, understand, and rely on what you have built.

The more often you test, the less dramatic the fixes become.

That is the quiet win: accessibility stops being a rescue mission and becomes part of the craft.

![Accessibility testing workflow loop showing build, manual check, keyboard test, automated scan, fix, and retest.](/assets/images/tutorials/accessibility-essentials/testing-workflow-loop.svg)

## Series closure

By the end of Accessibility Essentials, learners should understand that accessibility is not one technique. It is a way of thinking through structure, content, interaction, design, and testing.

They should now be able to:

- use semantic HTML as the foundation
- write context-aware alt text
- test keyboard navigation
- build clearer forms
- improve readability and contrast
- use ARIA carefully
- run a practical mini accessibility audit

The next step could be a project-based tutorial where learners take a messy landing page and improve it using all eight lessons.

---
