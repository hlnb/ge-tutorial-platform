---
title: "ARIA: Use With Care"
slug: accessibility-essentials/aria-use-with-care
description: "Learn what ARIA is, when it helps, and why native HTML should be your first choice."
section: Accessibility Essentials
sectionId: accessibility-essentials
pathway: deployment
category: advanced
level: advanced
order: 7
estimatedTime: 35
difficulty: medium
previous: accessibility-essentials/colour-contrast-and-readability
next: accessibility-essentials/testing-accessibility-as-you-build
pathwayLanding: accessibility-essentials
tags:
  - accessibility
  - aria
  - javascript
  - semantics
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

ARIA sounds like something you should sprinkle over a page to make it accessible.

Please do not season your HTML like that.

ARIA can help when native HTML does not provide enough meaning for custom or dynamic interfaces. Used badly, it can make a page more confusing than before.

The first rule is simple:

> If native HTML can do the job, use native HTML.

ARIA is a useful tool. It is not a forgiveness spell for chaotic markup.

---

<!-- LEARNING OBJECTIVES -->

## What you'll learn

By the end of this lesson, you will be able to:

- explain what ARIA is for
- describe roles, properties, and states
- recognise when native HTML is better
- use `aria-label`, `aria-labelledby`, and `aria-describedby`
- understand basic expanded/collapsed state
- avoid common ARIA mistakes
- test whether ARIA changes match visible behaviour

---

## Prerequisites

> **Before you start:**
Learners should understand:
- semantic HTML
- keyboard navigation
- basic JavaScript interactions
- accessible forms
- the difference between links and buttons

---

## Core explanation

ARIA stands for **Accessible Rich Internet Applications**.

ARIA attributes can add information for assistive technologies when HTML alone is not enough.

ARIA can describe:

- what something is
- what state it is in
- what it is connected to
- whether content has changed
- whether a control is expanded or collapsed
- what accessible name a control should have

ARIA does not usually change visual appearance or browser behaviour. It changes accessibility information.

That means ARIA can create a mismatch if the code says one thing and the visible interface does another.

---

## Three basic ARIA ideas

### Roles

Roles say what something is.

```html
<div role="button">Open menu</div>
```

This says the `div` should be treated as a button.

However, this is usually worse than:

```html
<button type="button">Open menu</button>
```

The real button already includes keyboard behaviour and correct semantics.

### Properties

Properties describe relationships or extra information.

```html
<input 
  id="email" 
  name="email" 
  type="email" 
  aria-describedby="email-help"
>
<p id="email-help">Use the address you check most often.</p>
```

### States

States describe changing conditions.

```html
<button 
  type="button" 
  aria-expanded="false" 
  aria-controls="site-menu"
>
  Menu
</button>
```

When the menu opens, JavaScript should update the state:

```html
aria-expanded="true"
```

---

## Useful ARIA attributes

### `aria-label`

Gives an accessible name when visible text is not available.

```html
<button type="button" aria-label="Close dialog">
  ×
</button>
```

Use carefully. Visible text is usually better.

### `aria-labelledby`

Uses existing visible text as the accessible name.

```html
<section aria-labelledby="featured-heading">
  <h2 id="featured-heading">Featured tutorials</h2>
  ...
</section>
```

### `aria-describedby`

Connects extra description text.

```html
<label for="username">Username</label>
<p id="username-help">Use 6 to 20 characters.</p>
<input id="username" name="username" aria-describedby="username-help">
```

### `aria-expanded`

Indicates whether a collapsible area is open or closed.

```html
<button 
  type="button" 
  aria-expanded="false" 
  aria-controls="faq-answer-1"
>
  What is accessibility?
</button>

<div id="faq-answer-1" hidden>
  <p>Accessibility means making websites usable by people with different needs and technologies.</p>
</div>
```

---

## Starter code

```html
<div class="accordion">
  <div class="accordion-title" onclick="toggleAnswer()">
    What is semantic HTML?
  </div>

  <div class="accordion-panel">
    <p>Semantic HTML uses elements according to their meaning.</p>
  </div>
</div>
```

Problems:
- The clickable title is a `div`.
- It may not be keyboard accessible.
- It does not communicate expanded or collapsed state.
- The relationship between title and panel is unclear.

---

## Improved code

```html
<div class="accordion">
  <h2>
    <button 
      type="button" 
      class="accordion-trigger"
      aria-expanded="false"
      aria-controls="semantic-html-panel"
      id="semantic-html-trigger"
    >
      What is semantic HTML?
    </button>
  </h2>

  <div 
    id="semantic-html-panel" 
    class="accordion-panel" 
    aria-labelledby="semantic-html-trigger"
    hidden
  >
    <p>Semantic HTML uses elements according to their meaning.</p>
  </div>
</div>
```

---

## Supporting JavaScript

```js
const trigger = document.querySelector('.accordion-trigger');
const panel = document.querySelector('#semantic-html-panel');

trigger.addEventListener('click', () => {
  const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

  trigger.setAttribute('aria-expanded', String(!isExpanded));
  panel.hidden = isExpanded;
});
```

---

## Supporting CSS

```css
.accordion-trigger {
  width: 100%;
  font: inherit;
  font-weight: 700;
  text-align: left;
  padding: 1rem;
  border: 2px solid #d4d4d4;
  background: #ffffff;
  cursor: pointer;
}

.accordion-trigger:focus-visible {
  outline: 3px solid #facc15;
  outline-offset: 3px;
}

.accordion-panel {
  padding: 1rem;
  border: 2px solid #d4d4d4;
  border-top: 0;
}
```

---

## How and why this improves the component

- The trigger is a native button.
- The button can receive focus and respond to keyboard activation.
- `aria-expanded` communicates whether the panel is open.
- `aria-controls` identifies the controlled panel.
- `hidden` removes collapsed content from the page until it is shown.
- JavaScript keeps the visual state and accessibility state aligned.

---

## Native HTML before ARIA examples

Prefer this:

```html
<button type="button">Open menu</button>
```

Instead of this:

```html
<div role="button" tabindex="0">Open menu</div>
```

Prefer this:

```html
<nav aria-label="Main navigation">
  ...
</nav>
```

Instead of this:

```html
<div role="navigation">
  ...
</div>
```

Prefer this:

```html
<label for="search">Search tutorials</label>
<input id="search" name="search" type="search">
```

Instead of this:

```html
<input type="search" aria-label="Search tutorials">
```

The ARIA version can be valid when no visible label fits the design, although visible labels are often clearer for everyone.

<!-- CHECKPOINT BOX -->

<!-- CheckpointBox component -->

## Check your understanding

Learners should be able to answer:

**What is the first rule of ARIA?**
Do not use ARIA when native HTML can provide the needed semantics and behaviour.

**Does ARIA usually change visual behaviour?**
No. ARIA changes accessibility semantics, not the visual design or interaction by itself.

**Why is `role="button"` on a `div` usually weaker than a real button?**
A real button already has focus, keyboard activation, semantics, and form behaviour built in. A div needs all of that recreated.

**What does `aria-expanded` communicate?**
It tells assistive technology whether a collapsible control or region is currently open or closed.

**Why must JavaScript keep ARIA states updated?**
If the visual state and ARIA state disagree, assistive technology users receive misleading information.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

<!-- GuidedPractice component -->

## Guided Practice

Give learners this poor menu toggle:

```html
<div class="menu-toggle">Menu</div>
<div class="menu">
  <a href="/">Home</a>
  <a href="/tutorials.html">Tutorials</a>
</div>
```

Ask them to:

- convert the trigger to a button
- add `aria-expanded`
- add `aria-controls`
- hide the menu by default
- update the state with JavaScript
- test with keyboard

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

<!-- IndependentPractice component -->

## Independent Practice

Learners choose one interactive pattern and write an ARIA decision note:

```md
# ARIA decision note

## Pattern

## Can native HTML do this?

## What semantic element should be used first?

## Is ARIA needed?

## Which ARIA attributes are needed?

## How will the state be updated?

## Keyboard test notes
```

<!-- /IndependentPractice -->

## Accessibility testing task

1. Test the component with keyboard only.
2. Confirm focus lands on the trigger.
3. Confirm `Enter` and `Space` activate the trigger.
4. Inspect whether `aria-expanded` changes when the panel opens/closes.
5. Confirm hidden content is not reachable when closed.
6. Confirm visible state and accessibility state match.

## Common mistakes

- Adding ARIA when native HTML would work.
- Adding `role="button"` without keyboard behaviour.
- Forgetting to update `aria-expanded`.
- Hiding content visually while leaving it focusable.
- Giving controls accessible names that differ from visible labels.
- Using `aria-label` to hide vague visible text.
- Treating ARIA as a replacement for testing.

## Closure

ARIA is powerful when it fills a real gap. It is risky when used to disguise weak HTML.

Start with native elements. Add ARIA only when it gives users information they would otherwise miss. Then test the result.

![Native HTML before ARIA flowchart showing that native elements should be used first, with ARIA considered only when HTML cannot provide the needed semantics.](/assets/images/tutorials/accessibility-essentials/native-html-before-aria.svg)

## Next lesson

Next, learners should study **Testing Accessibility as You Build**.

---
