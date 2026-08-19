---
title: How Browsers Load and Render Websites
slug: website-performance-optimisation/how-browsers-load-and-render-websites
description: Understand the major steps between requesting a webpage and seeing pixels on the screen, including DOM, CSSOM, layout, paint, and resource dependencies.
section: Website Performance & Optimisation
sectionId: website-performance-optimisation
pathway: deployment
category: advanced
level: advanced
order: 2
estimatedTime: 40
difficulty: intermediate
prerequisites:
  - website-performance-optimisation/understanding-website-performance
previous: website-performance-optimisation/understanding-website-performance
next: website-performance-optimisation/measuring-website-performance
pathwayLanding: website-performance-optimisation
tags:
  - performance
  - browsers
  - rendering
  - html
  - css
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

Think of a browser as a builder.

HTML is not the completed house. CSS is not the completed house. JavaScript is not the completed house.

They are instructions, materials, and behaviours. The browser must assemble them.

<!-- LEARNING OBJECTIVES -->

## What you'll learn

After this lesson, you will be able to:

- describe the browser loading process
- explain the DOM
- explain the CSSOM
- describe layout and paint
- explain why resource dependencies matter

---

> **Before you start:** You should understand HTML elements, CSS stylesheets, links to external files, and the idea that webpages are made from multiple resources.

---

## The browser loading journey

Performance recommendations make much more sense once you understand what the browser is doing.

A simplified loading pathway looks like this:

1. URL
2. DNS lookup
3. Server connection
4. HTML request
5. HTML received
6. DOM built
7. CSS discovered
8. CSSOM built
9. Render tree created
10. Layout calculated
11. Paint
12. Composite
13. Interactive webpage

## The DOM

HTML is parsed into the Document Object Model, or DOM.

```html
<body>
  <main>
    <h1>Black Swan Bistro</h1>
    <p>Seasonal dining in Fremantle.</p>
  </main>
</body>
```

The browser can represent that structure as a tree:

```text
body
+-- main
    +-- h1
    +-- p
```

The DOM is not just the text of the HTML file. It is the browser's structured model of the document.

## The CSSOM

The browser also processes CSS into a CSS Object Model, or CSSOM.

It must determine:

- which styles apply
- which elements are visible
- their dimensions
- their position

DOM and CSS information contribute to the render tree. That is why large, tangled, or blocking CSS can affect how soon useful content appears.

## Layout, paint, and composite

During **layout**, the browser calculates geometry. It answers questions such as:

- how wide is the heading?
- where does the photograph start?
- how tall is this section?
- where does the button sit?

During **paint**, the browser draws visual information such as text, colours, backgrounds, borders, shadows, and images.

During **composite**, the browser combines layers to display the final page.

## Resource dependencies

A webpage is not a single file appearing on the screen. It is the result of multiple resources being discovered, downloaded, parsed, processed, and rendered.

Images, fonts, CSS, and JavaScript all enter the browser-loading process at different points. Some are needed immediately. Others can wait.

When performance problems appear later, return to this question:

> Which part of the browser's work are we making harder?

<!-- CHECKPOINT BOX -->

## Check your understanding

**1. What is the DOM?**
The DOM is the browser's structured model of the HTML document.

**2. What is the CSSOM?**
The CSSOM is the browser's structured model of the CSS rules and how they apply.

**3. Why do layout and paint matter for performance?**
They are part of the browser's visible work. If resources arrive late or dimensions are unknown, the browser may need to recalculate or redraw.

<!-- /CheckpointBox -->

<!-- GUIDED PRACTICE -->

## Guided practice

Recreate the browser rendering pathway on paper or in a drawing tool.

**Step 1 - Draw the main sequence**

Start with URL and finish with interactive webpage.

**Step 2 - Add resource branches**

Show where CSS, JavaScript, images, and fonts are discovered.

**Step 3 - Explain each stage**

Add one sentence beside each major stage explaining what happens.

<!-- /GuidedPractice -->

<!-- INDEPENDENT PRACTICE -->

## Independent practice

Take a simple page you previously created.

Identify the HTML file, stylesheet, scripts, images, and fonts. Draw where each enters the browser-loading process.

**Requirements:**

- include at least one HTML, CSS, image, and script resource if your page has them
- label DOM, CSSOM, layout, paint, and interactive page
- identify one resource that is needed early and one that could wait

**Success criteria:**

- your diagram follows the loading sequence accurately
- resource dependencies are labelled clearly
- you can explain why one resource affects rendering

<!-- /IndependentPractice -->

## Before you continue

- I can explain the DOM.
- I know what the CSSOM represents.
- I understand layout.
- I understand paint.
- I can describe the browser loading pathway.

## Extension activity

Research the term **critical rendering path**. Explain it in your own words and connect it to one page you have built.

## Closure

- A webpage is assembled from multiple resources, not simply displayed as one file.
- DOM, CSSOM, layout, paint, and composite describe different kinds of browser work.
- Performance improves when you understand which work is necessary, which work is delayed, and which work is avoidable.
