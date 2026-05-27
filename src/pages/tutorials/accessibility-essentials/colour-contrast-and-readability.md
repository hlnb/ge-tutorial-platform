---
title: "Colour, Contrast, and Readability"
slug: accessibility-essentials/colour-contrast-and-readability
description: "Learn how colour, contrast, spacing, text size, and states affect whether people can comfortably read and use a page."
section: Accessibility Essentials
sectionId: accessibility-essentials
pathway: deployment
category: advanced
level: advanced
order: 6
estimatedTime: 35
difficulty: medium
previous: accessibility-essentials/accessible-forms
next: accessibility-essentials/aria-use-with-care
pathwayLanding: accessibility-essentials
tags:
  - accessibility
  - colour
  - contrast
  - readability
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

A design can be beautiful and still hard to read.

Low contrast, tiny text, long lines, colour-only status messages, and subtle hover states may look elegant in a mockup. In the real world, people use screens in glare, with tired eyes, on older devices, at different zoom levels, and with colour vision differences.

Readable design is not boring design.

Readable design is design that does not make people fight the page.

---

<!-- LEARNING OBJECTIVES -->

## What you'll learn

By the end of this lesson, you will be able to:

- explain why colour contrast matters
- avoid relying on colour alone
- improve readability with text size, line height, and spacing
- style link, hover, focus, and active states
- test contrast using browser tools or accessibility checkers
- adjust a component to be easier to read and use

---

## Prerequisites

> **Before you start:**
Learners should understand:
- CSS colour values
- basic typography styles
- links and buttons
- hover and focus states
- responsive layout basics

---

## Core explanation

Colour affects:

- whether text can be read
- whether links are recognisable
- whether buttons look interactive
- whether status messages are understood
- whether focus and hover states are visible
- whether the page remains usable in different environments

Contrast is the difference between foreground and background.

For text, contrast needs to be strong enough that users can read comfortably. This is especially important for:

- body text
- small text
- button text
- navigation links
- error messages
- text over images

---

## Do not rely on colour alone

This is a common issue.

Bad:

```html
<p class="status-red">Unavailable</p>
<p class="status-green">Available</p>
```

If the only difference is colour, some users may miss the meaning.

Better:

```html
<p class="status status-unavailable">
  <span aria-hidden="true">✕</span>
  Unavailable
</p>

<p class="status status-available">
  <span aria-hidden="true">✓</span>
  Available
</p>
```

Or use text labels clearly:

```html
<p><strong>Status:</strong> Available</p>
```

Colour can support meaning. It should not be the only carrier of meaning.

---

## Readability basics

Good readability often comes from ordinary CSS decisions:

```css
body {
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}

.content {
  max-width: 70ch;
}

p {
  margin-bottom: 1rem;
}
```

Useful habits:

- Avoid very small body text.
- Use comfortable line height.
- Limit long line lengths.
- Leave enough spacing between sections.
- Use headings to break up content.
- Avoid placing text over busy images.
- Keep interactive states clear.

---

## Starter code

```html
<section class="pricing-card">
  <p class="eyebrow">Popular</p>
  <h2>Starter Review</h2>
  <p class="price">$149</p>
  <p class="description">A practical homepage review for structure, SEO, and accessibility basics.</p>
  <a class="button" href="/services/starter-review.html">Learn more</a>
</section>
```

```css
.pricing-card {
  background: #f5f5f5;
  color: #999999;
  padding: 1rem;
  border-radius: 0.5rem;
}

.eyebrow {
  color: #ff7a7a;
  font-size: 0.75rem;
  text-transform: uppercase;
}

.price {
  font-size: 2rem;
  color: #bbbbbb;
}

.description {
  font-size: 0.85rem;
  line-height: 1.2;
}

.button {
  display: inline-block;
  background: #cccccc;
  color: #ffffff;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
}
```

---

## Improved code

```css
.pricing-card {
  max-width: 28rem;
  background: #ffffff;
  color: #171717;
  padding: 1.5rem;
  border: 1px solid #d4d4d4;
  border-radius: 0.75rem;
}

.eyebrow {
  color: #7c2d12;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.price {
  font-size: 2rem;
  color: #171717;
  font-weight: 700;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
}

.button {
  display: inline-block;
  background: #7c2d12;
  color: #ffffff;
  padding: 0.75rem 1rem;
  text-decoration: none;
  border-radius: 0.4rem;
  font-weight: 700;
}

.button:hover {
  background: #9a3412;
}

.button:focus-visible {
  outline: 3px solid #facc15;
  outline-offset: 3px;
}
```

---

## How and why this improves the card

- Text colour has stronger contrast against the background.
- Body text is larger and more comfortable to read.
- Line height gives the description room to breathe.
- The button text is more readable.
- The focus state is visible.
- The hover state is clear.
- The card spacing creates a stronger reading order.

---

## Links need to look like links

Avoid styling links so subtly that users cannot find them.

Less helpful:

```css
a {
  color: inherit;
  text-decoration: none;
}
```

Better for body content:

```css
.prose a {
  color: #1d4ed8;
  text-decoration: underline;
  text-underline-offset: 0.15em;
}

.prose a:hover {
  text-decoration-thickness: 0.15em;
}

.prose a:focus-visible {
  outline: 3px solid #facc15;
  outline-offset: 3px;
}
```

Navigation links may be styled differently, although they still need clear hover and focus states.

---

## Text over images

Text over images often causes contrast problems because the background changes across the image.

Risky:

```html
<section class="hero-image">
  <h1>Build better websites</h1>
</section>
```

Better options:

- place text outside the image
- add a solid or semi-solid overlay
- use a consistent background panel behind the text
- choose a simpler image
- use CSS gradients carefully

Example:

```css
.hero-content {
  max-width: 42rem;
  background: rgba(0, 0, 0, 0.75);
  color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.75rem;
}
```

<!-- CHECKPOINT BOX -->

<!-- CheckpointBox component -->

## Check your understanding

Learners should be able to answer:

**Why is colour alone not enough to communicate meaning?**
Some users cannot perceive colour differences reliably, so meaning also needs text, icons, labels, patterns, or structure.

**What does contrast affect?**
Contrast affects whether text, controls, links, and states can be comfortably seen and understood.

**Why do links need visible styling?**
Users need to recognise links as interactive text, especially when scanning or using different visual settings.

**What can make text over images difficult?**
Busy image detail, low contrast, and changing image colours can make overlaid text hard to read.

**What should you test besides normal text colour?**
Test hover, focus, disabled states, links, buttons, error states, zoom, line length, spacing, and mobile layouts.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

<!-- GuidedPractice component -->

## Guided Practice

Give learners a card component with low contrast text, tiny body copy, and a pale button. Ask them to:

- increase text contrast
- improve line height
- improve spacing
- make the button easier to read
- add hover and focus states
- check the component at 200% zoom

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

<!-- IndependentPractice component -->

## Independent Practice

Learners choose one component from a previous project and complete:

```md
# Readability review

## Component reviewed

## Text contrast issues

## Colour-only meaning issues

## Link and button state issues

## Spacing or line-height issues

## Changes made

## Testing notes
```

<!-- /IndependentPractice -->

## Accessibility testing task

1. Run a contrast checker on text and buttons.
2. Zoom the page to 200%.
3. Check whether content overlaps or disappears.
4. Use keyboard navigation and inspect focus states.
5. Check whether colour is the only way meaning is communicated.
6. View the page on a mobile-sized viewport.

## Common mistakes

- Pale grey text on white backgrounds.
- Text over busy images.
- Removing underlines from body links.
- Hover states without focus states.
- Colour-only status messages.
- Tiny text in cards, captions, and footers.
- Very long line lengths.
- Treating accessibility-friendly design as visually dull.

## Closure

Colour and contrast are not just decoration. They are part of the interface language.

Good visual design helps people read, understand, decide, and act. If users have to squint, guess, or hunt, the design is working against them.

![Before-and-after readability card comparing low contrast and vague controls with stronger contrast, spacing, and visible focus state.](/assets/images/tutorials/accessibility-essentials/contrast-readability-card.svg)

## Next lesson

Next, learners should study **ARIA: Use With Care**.

---
