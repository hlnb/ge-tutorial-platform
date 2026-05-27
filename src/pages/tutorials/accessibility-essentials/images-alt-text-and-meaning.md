---
title: "Images, Alt Text, and Meaning"
slug: accessibility-essentials/images-alt-text-and-meaning
description: "Learn how to write useful text alternatives by asking what an image is doing on the page."
section: Accessibility Essentials
sectionId: accessibility-essentials
pathway: deployment
category: advanced
level: advanced
order: 3
estimatedTime: 35
difficulty: easy
previous: accessibility-essentials/semantic-html-accessibility
next: accessibility-essentials/keyboard-navigation-and-focus-states
pathwayLanding: accessibility-essentials
tags:
  - accessibility
  - alt-text
  - images
  - html
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

Alt text is not a caption. It is not a file name. It is not a secret SEO stuffing drawer where keywords go to breed.

Alt text is a text alternative for an image when the image cannot be seen or loaded.

The important question is not:

> What does this image look like?

The better question is:

> What job is this image doing here?

The same image might need different alt text in different contexts. A photo of a chocolate cake could be decorative on a café homepage, informative in a menu, or functional if it is the linked image that opens a recipe.

Context decides the alt text.

---

<!-- LEARNING OBJECTIVES -->

## What you'll learn

By the end of this lesson, you will be able to:

- explain what alt text is for
- identify decorative, informative, functional, and complex images
- write appropriate alt text for common image types
- use empty alt text correctly for decorative images
- avoid common alt text mistakes
- test whether page content still makes sense without images

---

## Prerequisites

> **Before you start:**
Learners should understand:
- the `img` element
- the `alt` attribute
- basic page content structure
- links and buttons

---

## Core explanation

The `alt` attribute provides an alternative when an image is not available visually.

```html
<img src="coffee-cup.jpg" alt="Cup of coffee beside a notebook">
```

Every meaningful `img` element needs an `alt` attribute. Sometimes the correct value is descriptive text. Sometimes the correct value is empty:

```html
<img src="decorative-divider.svg" alt="">
```

An empty `alt` tells assistive technology that the image can be ignored.

Leaving the `alt` attribute out is different. Missing `alt` can cause assistive technology to announce the file name, which is rarely useful unless your file names are oddly poetic.

---

## Image types

### Decorative images

Decorative images do not add information. They may create atmosphere, spacing, or visual style.

Example:

```html
<img src="gold-divider.svg" alt="">
```

Use empty alt text:

```html
alt=""
```

Do not write:

```html
alt="Decorative gold divider"
```

That adds noise.

### Informative images

Informative images communicate something useful.

Example:

```html
<img 
  src="webpage-layout-diagram.svg" 
  alt="Diagram showing a webpage divided into header, main content, sidebar, and footer sections"
>
```

The alt text should convey the image’s meaning, not every visual detail.

### Functional images

Functional images perform an action, often inside a link or button.

Example:

```html
<a href="/cart.html">
  <img src="cart-icon.svg" alt="View cart">
</a>
```

The alt text should describe the action or destination, not the object.

Better:

```html
alt="View cart"
```

Less useful:

```html
alt="Shopping cart icon"
```

### Complex images

Complex images include charts, diagrams, maps, infographics, or screenshots where a short phrase is not enough.

Use:
- concise alt text
- nearby explanation
- data table where appropriate
- figure and figcaption if useful

Example:

```html
<figure>
  <img 
    src="traffic-sources-chart.svg" 
    alt="Bar chart comparing website traffic sources"
  >
  <figcaption>
    Organic search was the largest traffic source, followed by direct visits and social referrals.
  </figcaption>
</figure>
```

---

## Starter code

```html
<section class="menu-preview">
  <h2>Today’s specials</h2>

  <article class="menu-card">
    <img src="barramundi.jpg">
    <h3>Grilled barramundi</h3>
    <p>Served with lemon myrtle butter and roasted vegetables.</p>
  </article>

  <article class="menu-card">
    <img src="divider.svg">
    <h3>Chocolate tart</h3>
    <p>Dark chocolate tart with raspberry compote.</p>
  </article>

  <a href="/bookings.html">
    <img src="calendar-icon.svg">
  </a>
</section>
```

---

## Improved code

```html
<section class="menu-preview" aria-labelledby="specials-heading">
  <h2 id="specials-heading">Today’s specials</h2>

  <article class="menu-card">
    <img 
      src="barramundi.jpg" 
      alt="Grilled barramundi served with roasted vegetables"
    >
    <h3>Grilled barramundi</h3>
    <p>Served with lemon myrtle butter and roasted vegetables.</p>
  </article>

  <article class="menu-card">
    <img src="divider.svg" alt="">
    <h3>Chocolate tart</h3>
    <p>Dark chocolate tart with raspberry compote.</p>
  </article>

  <a href="/bookings.html">
    <img src="calendar-icon.svg" alt="Book a table">
  </a>
</section>
```

---

## How and why this improves the page

- The food image has alt text because it helps identify the dish visually shown.
- The divider image is decorative, so it uses `alt=""`.
- The linked calendar icon uses alt text describing the link purpose: “Book a table”.
- The section has an accessible label connected to its heading.
- Users who cannot see the images still get the relevant meaning.

---

## Writing better alt text

Use these prompts:

1. Why is the image here?
2. What would someone miss if the image disappeared?
3. Is the same information already in nearby text?
4. Is the image decorative, informative, functional, or complex?
5. What is the shortest useful alternative?

---

## Examples

### Decorative hero background

```html
<img src="abstract-shapes.svg" alt="">
```

### Informative team photo

```html
<img 
  src="team-at-workshop.jpg" 
  alt="Three workshop facilitators standing beside a table of web design materials"
>
```

### Functional icon link

```html
<a href="/downloads/accessibility-checklist.pdf">
  <img src="download-icon.svg" alt="Download accessibility checklist">
</a>
```

### Logo

If the logo links to the homepage:

```html
<a href="/">
  <img src="logo.svg" alt="GraphiteEdge home">
</a>
```

If the site name appears next to the logo:

```html
<a href="/">
  <img src="logo-mark.svg" alt="">
  <span>GraphiteEdge</span>
</a>
```

<!-- CHECKPOINT BOX -->

<!-- CheckpointBox component -->

## Check your understanding

Learners should be able to answer:

**What is the purpose of alt text?**
Alt text preserves the meaning or function of an image when the image cannot be seen or loaded.

**When should an image use `alt=""`?**
Use empty alt text when an image is decorative and adds no information or function beyond nearby content.

**Why is `alt="image"` unhelpful?**
It only says that an image exists. It does not explain the image meaning, purpose, or action.

**How should alt text change for image links?**
For linked images, describe the action or destination, such as View photo gallery, rather than only describing the image appearance.

**Why does context matter?**
The same image can serve different purposes on different pages, so useful alt text depends on what the image contributes in that specific context.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

<!-- GuidedPractice component -->

## Guided Practice

Give learners these image contexts and ask them to write alt text:

1. A decorative wave graphic between sections.
2. A photo of a finished website layout in a tutorial about visual hierarchy.
3. A linked Instagram icon in a footer.
4. A screenshot showing an error message in VS Code.
5. A chart comparing three traffic sources.

Suggested answers:

1. `alt=""`
2. `alt="Finished website layout showing a large hero section followed by three content cards"`
3. `alt="Visit us on Instagram"`
4. `alt="VS Code terminal showing a missing dependency error"`
5. `alt="Chart comparing organic search, direct visits, and social traffic"`

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

<!-- IndependentPractice component -->

## Independent Practice

Learners audit one existing project and create an image inventory:

```md
# Image inventory

| Image | Purpose | Type | Current alt | Recommended alt |
|---|---|---|---|---|
| hero.jpg | Sets mood | Decorative | missing | alt="" |
| menu-card.jpg | Shows dish | Informative | "food" | "Grilled barramundi with roasted vegetables" |
```

<!-- /IndependentPractice -->

## Accessibility testing task

1. Temporarily disable images in the browser, or imagine each image is unavailable.
2. Read the page content.
3. Check whether meaning is lost.
4. Inspect each `img` element.
5. Confirm every image has an `alt` attribute.
6. Confirm decorative images use empty alt text.

## Common mistakes

- Writing `alt="image"`.
- Writing file names as alt text.
- Stuffing alt text with keywords.
- Describing decorative images that should be ignored.
- Describing an icon’s appearance instead of its function.
- Making alt text too long when nearby content already explains the image.
- Forgetting that SVGs and icons also need accessible treatment when meaningful.

## Closure

Good alt text is not about describing every pixel. It is about preserving meaning.

Ask what the image is doing. Then write the shortest useful alternative for that job.

![Alt text decision tree showing when to use empty alt text, describe image meaning, describe an action, or add nearby explanation.](/assets/images/tutorials/accessibility-essentials/alt-text-decision-tree.svg)

## Next lesson

Next, learners should study **Keyboard Navigation and Focus States**.

---
