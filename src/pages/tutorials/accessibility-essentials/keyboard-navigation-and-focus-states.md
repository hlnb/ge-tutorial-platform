---
title: "Keyboard Navigation and Focus States"
slug: accessibility-essentials/keyboard-navigation-and-focus-states
description: "Learn how to make pages usable without a mouse by testing keyboard navigation, fixing focus styles, and avoiding keyboard traps."
section: Accessibility Essentials
sectionId: accessibility-essentials
pathway: deployment
category: advanced
level: advanced
order: 4
estimatedTime: 40
difficulty: medium
previous: accessibility-essentials/images-alt-text-and-meaning
next: accessibility-essentials/accessible-forms
pathwayLanding: accessibility-essentials
tags:
  - accessibility
  - keyboard
  - focus
  - css
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

A mouse is convenient. It is not universal.

Some people navigate with a keyboard because of disability. Some use keyboard shortcuts because they are faster. Some use switch devices, voice control, or other assistive technologies that depend on keyboard-like focus behaviour.

If your page only works when someone can point and click, the page is quietly making assumptions.

Keyboard testing is one of the simplest accessibility habits you can build. Put the mouse aside. Press `Tab`. Your page will start telling you the truth.

Sometimes rudely.

---

<!-- LEARNING OBJECTIVES -->

## What you'll learn

By the end of this lesson, you will be able to:

- explain keyboard focus
- test a page using only the keyboard
- identify missing or confusing focus states
- create visible `:focus-visible` styles
- add a skip link
- avoid keyboard traps
- understand why native interactive elements matter

---

## Prerequisites

> **Before you start:**
Learners should understand:
- semantic HTML
- links and buttons
- basic CSS pseudo-classes
- simple navigation markup

---

## Core explanation

Keyboard users move through interactive elements using focus.

Common keyboard interactions:

- `Tab`: move to the next focusable element
- `Shift + Tab`: move to the previous focusable element
- `Enter`: activate links and buttons
- `Space`: activate buttons and checkboxes
- arrow keys: move within some controls such as radio groups or menus

Focusable elements include:

- links with `href`
- buttons
- form controls
- summary elements
- elements with appropriate `tabindex`, used carefully

A page should have a logical focus order that follows the visual and document structure.

---

## Visible focus

When an element receives keyboard focus, users need to see where they are.

Do not remove outlines unless you replace them with a clear alternative.

Bad:

```css
*:focus {
  outline: none;
}
```

Better:

```css
:focus-visible {
  outline: 3px solid #facc15;
  outline-offset: 3px;
}
```

You can style focus to match a brand, as long as it remains obvious.

---

## Skip links

A skip link lets keyboard users bypass repeated navigation and jump to the main content.

```html
<a class="skip-link" href="#main-content">Skip to main content</a>

<header>
  <!-- repeated navigation -->
</header>

<main id="main-content">
  <h1>Keyboard Navigation and Focus States</h1>
</main>
```

```css
.skip-link {
  position: absolute;
  left: 1rem;
  top: 1rem;
  transform: translateY(-150%);
  background: #ffffff;
  color: #111111;
  padding: 0.75rem 1rem;
  border: 2px solid currentColor;
  z-index: 100;
}

.skip-link:focus {
  transform: translateY(0);
}
```

The link is visually hidden until focused. When keyboard users press `Tab`, it appears.

---

## Starter code

```html
<header class="site-header">
  <div class="logo">Coastal Studio</div>

  <div class="nav">
    <span>Home</span>
    <span>Services</span>
    <span>Contact</span>
  </div>
</header>

<main>
  <section class="hero">
    <h1>Design support for small businesses</h1>
    <div class="cta" onclick="location.href='/contact.html'">
      Book a consult
    </div>
  </section>
</main>
```

```css
.nav span,
.cta {
  cursor: pointer;
}

.cta {
  display: inline-block;
  padding: 0.75rem 1rem;
  background: #222;
  color: white;
}

a:focus,
button:focus {
  outline: none;
}
```

---

## Improved code

```html
<a class="skip-link" href="#main-content">Skip to main content</a>

<header class="site-header">
  <a class="logo" href="/">Coastal Studio</a>

  <nav aria-label="Main navigation">
    <ul class="nav-list">
      <li><a href="/">Home</a></li>
      <li><a href="/services.html">Services</a></li>
      <li><a href="/contact.html">Contact</a></li>
    </ul>
  </nav>
</header>

<main id="main-content">
  <section class="hero">
    <h1>Design support for small businesses</h1>
    <a class="button" href="/contact.html">Book a consult</a>
  </section>
</main>
```

```css
.skip-link {
  position: absolute;
  left: 1rem;
  top: 1rem;
  transform: translateY(-150%);
  background: #ffffff;
  color: #111111;
  padding: 0.75rem 1rem;
  border: 2px solid currentColor;
  z-index: 100;
}

.skip-link:focus {
  transform: translateY(0);
}

.nav-list {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
}

.button {
  display: inline-block;
  padding: 0.75rem 1rem;
  background: #222;
  color: #ffffff;
  text-decoration: none;
  border-radius: 0.4rem;
}

a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 3px solid #facc15;
  outline-offset: 3px;
}
```

---

## How and why this improves the page

- Navigation items are real links.
- The call-to-action is a real link.
- Keyboard users can tab through the interface.
- Focus is visible.
- The skip link gives users a shortcut to main content.
- The focus order follows the document structure.
- No JavaScript is needed for basic navigation.

---

## Keyboard testing checklist

Ask learners to test:

1. Can I see where focus is?
2. Does focus move in a logical order?
3. Can I reach every link, button, and form field?
4. Can I activate links with `Enter`?
5. Can I activate buttons with `Enter` or `Space`?
6. Can I skip repeated navigation?
7. Does anything trap focus?
8. Does focus disappear behind overlays or hidden elements?
9. Does the page work without a mouse?

---

## About `tabindex`

Use `tabindex` carefully.

```html
<div tabindex="0">Focusable content</div>
```

This makes an element focusable, although it does not give it button or link behaviour.

Avoid positive tabindex values:

```html
<div tabindex="5">Avoid this</div>
```

Positive values create a custom focus order that can become confusing and hard to maintain.

General guidance:

- Prefer native interactive elements.
- Use `tabindex="0"` sparingly.
- Use `tabindex="-1"` when you need to move focus programmatically.
- Avoid `tabindex` as a patch for poor HTML structure.

<!-- CHECKPOINT BOX -->

<!-- CheckpointBox component -->

## Check your understanding

Learners should be able to answer:

**Why does visible focus matter?**
Visible focus shows keyboard users where they are on the page and what will activate next.

**What does a skip link do?**
A skip link lets keyboard users bypass repeated navigation and jump directly to the main content.

**Why are clickable `div`s risky?**
They are not naturally focusable or keyboard-operable and are not announced as controls without extra work.

**What keys should you use in a basic keyboard test?**
Use Tab, Shift + Tab, Enter, Space, Escape where relevant, and arrow keys for widgets that expect arrow-key behaviour.

**Why should positive `tabindex` usually be avoided?**
Positive tabindex creates a custom focus order that can confuse users and become hard to maintain.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

<!-- GuidedPractice component -->

## Guided Practice

Give learners a simple navigation bar where links are styled as spans. Ask them to:

- convert navigation items to links
- add a skip link
- add visible focus styles
- test the page with keyboard only
- write down the focus order

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

<!-- IndependentPractice component -->

## Independent Practice

Learners choose one previous project and complete this report:

```md
# Keyboard test report

## Page tested

## Can all controls be reached?

## Is focus visible?

## Does the focus order make sense?

## Is there a skip link?

## Problems found

## Fixes made
```

<!-- /IndependentPractice -->

## Accessibility testing task

Use the “mouse exile” test:

1. Move the mouse away.
2. Navigate the full page using only the keyboard.
3. Complete the main task on the page.
4. Record where you get stuck, lost, or confused.
5. Fix one issue and test again.

## Common mistakes

- Removing outlines globally.
- Making only hover states, not focus states.
- Using `div` or `span` as buttons.
- Creating custom controls without keyboard support.
- Hiding focus behind sticky headers.
- Forgetting skip links on pages with repeated navigation.
- Assuming tab order is correct because the visual layout looks right.

## Closure

Keyboard testing is wonderfully low-tech. No account, plugin, subscription, moon phase, or ceremonial candle required.

Press `Tab`. Watch what happens. Fix what breaks.

![Keyboard focus path diagram showing skip link, navigation links, main content, call to action, form field, and footer link in logical tab order.](/assets/images/tutorials/accessibility-essentials/keyboard-focus-path.svg)

## Next lesson

Next, learners should study **Accessible Forms**.

---
