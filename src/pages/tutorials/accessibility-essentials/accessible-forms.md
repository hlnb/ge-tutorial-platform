---
title: "Accessible Forms"
slug: accessibility-essentials/accessible-forms
description: "Learn how labels, instructions, field grouping, and error messages make forms easier to complete."
section: Accessibility Essentials
sectionId: accessibility-essentials
pathway: deployment
category: advanced
level: advanced
order: 5
estimatedTime: 40
difficulty: medium
previous: accessibility-essentials/keyboard-navigation-and-focus-states
next: accessibility-essentials/colour-contrast-and-readability
pathwayLanding: accessibility-essentials
tags:
  - accessibility
  - forms
  - labels
  - validation
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

Forms are where websites ask users to do work.

That work might be simple: enter an email address.  
It might be stressful: apply for support, book a medical appointment, submit a payment, or report a problem.

A form is not just a collection of boxes. It is a conversation.

Bad forms mumble.  
Good forms explain what they need, why they need it, and what went wrong when something needs fixing.

---

<!-- LEARNING OBJECTIVES -->

## What you'll learn

By the end of this lesson, you will be able to:

- connect labels to form controls
- write helpful form instructions
- group related controls
- mark required fields clearly
- create useful error messages
- make form controls keyboard accessible
- test a form for basic accessibility issues

---

## Prerequisites

> **Before you start:**
Learners should understand:
- basic form elements
- labels and inputs
- buttons
- simple CSS
- keyboard testing

---

## Core explanation

Forms need clear relationships between:

- labels and inputs
- instructions and fields
- error messages and fields
- grouped questions and their options
- submit buttons and form purpose

The most important habit is simple:

> Every form control needs a clear label.

---

## Labels

Best practice:

```html
<label for="name">Name</label>
<input id="name" name="name" type="text">
```

The `for` attribute on the label matches the `id` on the input.

This gives users a visible label, helps assistive technology identify the field, and lets users click the label to focus the input.

---

## Required fields

Do not rely only on colour or an asterisk with no explanation.

```html
<p class="form-note">Fields marked with * are required.</p>

<label for="email">Email address *</label>
<input id="email" name="email" type="email" required>
```

You can also include the word “required” directly in the label:

```html
<label for="email">Email address <span>(required)</span></label>
```

---

## Help text

Use help text when users need extra guidance.

```html
<label for="password">Password</label>
<p id="password-help">Use at least 12 characters.</p>
<input 
  id="password" 
  name="password" 
  type="password" 
  aria-describedby="password-help"
>
```

`aria-describedby` connects the help text to the input.

---

## Error messages

A useful error message should:

- identify the field
- explain the problem
- suggest how to fix it

Less helpful:

```html
<p class="error">Invalid</p>
```

Better:

```html
<p id="email-error" class="error">Enter an email address in the format name@example.com.</p>
```

Connected input:

```html
<input 
  id="email" 
  name="email" 
  type="email" 
  required 
  aria-describedby="email-error"
  aria-invalid="true"
>
```

---

## Grouped controls

For related radio buttons or checkboxes, use `fieldset` and `legend`.

```html
<fieldset>
  <legend>Preferred contact method</legend>

  <label>
    <input type="radio" name="contact-method" value="email">
    Email
  </label>

  <label>
    <input type="radio" name="contact-method" value="phone">
    Phone
  </label>
</fieldset>
```

The `legend` gives the group a label.

---

## Starter code

```html
<form class="contact-form">
  <div>
    <input type="text" placeholder="Name">
  </div>

  <div>
    <input type="email" placeholder="Email">
  </div>

  <div>
    <textarea placeholder="Message"></textarea>
  </div>

  <div>
    <p>Contact preference</p>
    <input type="radio" name="contact"> Email
    <input type="radio" name="contact"> Phone
  </div>

  <button>Send</button>
</form>
```

---

## Improved code

```html
<form class="contact-form" action="/contact" method="post">
  <p class="form-note">Fields marked with * are required.</p>

  <div class="form-field">
    <label for="name">Name *</label>
    <input id="name" name="name" type="text" autocomplete="name" required>
  </div>

  <div class="form-field">
    <label for="email">Email address *</label>
    <p id="email-help" class="field-help">Use the address you would like us to reply to.</p>
    <input 
      id="email" 
      name="email" 
      type="email" 
      autocomplete="email" 
      aria-describedby="email-help"
      required
    >
  </div>

  <div class="form-field">
    <label for="message">Message *</label>
    <textarea id="message" name="message" rows="6" required></textarea>
  </div>

  <fieldset>
    <legend>Preferred contact method</legend>

    <label>
      <input type="radio" name="contact-method" value="email">
      Email
    </label>

    <label>
      <input type="radio" name="contact-method" value="phone">
      Phone
    </label>
  </fieldset>

  <button type="submit">Send message</button>
</form>
```

---

## Supporting CSS

```css
.contact-form {
  max-width: 42rem;
}

.form-field {
  margin-bottom: 1rem;
}

label,
legend {
  display: block;
  font-weight: 700;
  margin-bottom: 0.35rem;
}

input,
textarea,
select {
  width: 100%;
  max-width: 100%;
  font: inherit;
  padding: 0.65rem;
  border: 2px solid #737373;
  border-radius: 0.35rem;
}

fieldset {
  margin: 1.5rem 0;
  padding: 1rem;
  border: 2px solid #d4d4d4;
}

fieldset label {
  font-weight: 400;
}

.field-help,
.form-note {
  color: #404040;
}

.error {
  color: #991b1b;
  font-weight: 700;
}

input:focus-visible,
textarea:focus-visible,
button:focus-visible {
  outline: 3px solid #facc15;
  outline-offset: 3px;
}
```

---

## How and why this improves the form

- Each field has a visible label.
- Each label is programmatically connected to the matching input.
- Required fields are explained.
- The email field has helpful instructions.
- Radio buttons are grouped with `fieldset` and `legend`.
- The submit button explains the action.
- Autocomplete hints support easier form completion.
- Keyboard users can move through the form predictably.

---

## Error state example

```html
<div class="form-field">
  <label for="email">Email address *</label>
  <p id="email-help" class="field-help">Use the address you would like us to reply to.</p>
  <p id="email-error" class="error">Enter an email address in the format name@example.com.</p>
  <input 
    id="email" 
    name="email" 
    type="email" 
    autocomplete="email" 
    aria-describedby="email-help email-error"
    aria-invalid="true"
    required
  >
</div>
```

<!-- CHECKPOINT BOX -->

<!-- CheckpointBox component -->

## Check your understanding

Learners should be able to answer:

**Why are visible labels better than placeholders?**
Visible labels stay available while users type, help everyone understand the field, and can be programmatically connected to inputs.

**How do `for` and `id` connect labels to inputs?**
The label for value must match the input id so activating the label focuses the correct input and assistive technology can announce it.

**Why should required fields be explained in text?**
Text instructions do not rely on colour or symbols alone and make expectations clearer before submission.

**What makes an error message useful?**
A useful error identifies the problem, explains how to fix it, and appears near or connected to the relevant field.

**Why use `fieldset` and `legend` for grouped choices?**
They give related controls, such as radio buttons, a shared question or context.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

<!-- GuidedPractice component -->

## Guided Practice

Give learners a newsletter signup form:

```html
<form>
  <input placeholder="Email">
  <button>Go</button>
</form>
```

Ask them to improve it with:

- a visible heading
- a visible label
- useful help text
- a clearer button label
- focus styles

Example result:

```html
<form class="signup-form">
  <h2>Join the tutorial newsletter</h2>
  <p>Get new GraphiteEdge tutorials and project notes by email.</p>

  <label for="signup-email">Email address</label>
  <p id="signup-help">No spam. Just practical web learning notes.</p>
  <input 
    id="signup-email" 
    name="email" 
    type="email" 
    autocomplete="email"
    aria-describedby="signup-help"
    required
  >

  <button type="submit">Subscribe</button>
</form>
```

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

<!-- IndependentPractice component -->

## Independent Practice

Learners choose a form from a previous project and complete:

```md
# Form accessibility review

## Does every field have a visible label?

## Are labels connected to inputs?

## Are required fields explained?

## Are related options grouped?

## Are errors clear and specific?

## Can the form be completed using only the keyboard?

## Fixes made
```

<!-- /IndependentPractice -->

## Accessibility testing task

1. Click each label and confirm the correct field receives focus.
2. Use only the keyboard to complete the form.
3. Submit the form empty and inspect the error experience.
4. Zoom the page to 200% and check readability.
5. Check whether placeholder text disappears when typing.
6. Confirm each field still makes sense after placeholder text disappears.

## Common mistakes

- Using placeholders as the only labels.
- Writing vague errors such as “Invalid field”.
- Marking fields as required using colour alone.
- Forgetting `type="submit"` on submit buttons.
- Not grouping radio buttons.
- Making tiny checkbox/radio click targets.
- Moving focus unexpectedly without explanation.

## Closure

Accessible forms reduce friction. They help users understand what is being asked, complete the task, and recover when something goes wrong.

A good form does not make users feel as though they have failed an exam. It gives clear instructions and a fair path through.

![Annotated accessible form showing visible labels, required field text, connected error message, and descriptive submit button.](/assets/images/tutorials/accessibility-essentials/annotated-form.svg)

## Next lesson

Next, learners should study **Colour, Contrast, and Readability**.

---
