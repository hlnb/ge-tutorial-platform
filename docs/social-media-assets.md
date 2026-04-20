# GraphiteEdge Social Media Asset Plan

Status: first working draft based on the current tutorial registry in `src/data/tutorials.js`.

This plan turns the existing tutorial library into calm, practical social posts. It is designed for reusable Canva templates, static image posts, carousels, and caption-first posts.

## Positioning

GraphiteEdge should sound like a steady mentor, not a hype account.

Use posts to help learners understand what a tutorial helps them do, why the concept matters, and where it fits in the wider learning path.

Core content angles:

- Plain-English web concepts
- Beginner mistakes and how to avoid them
- Design-to-code thinking
- Small business website decisions
- AI as an assistant, not a shortcut around fundamentals
- Project progress through Black Swan Bistro

## Visual System

Suggested reusable formats:

| Format | Best For | Notes |
| --- | --- | --- |
| Tutorial spotlight | Promoting one lesson | Title, one-line promise, pathway tag, URL/CTA |
| Carousel lesson | Explaining one concept | 5-7 slides with one idea per slide |
| Mistake/fix card | Debugging and beginner blockers | "If this happens, check this first" structure |
| Pathway map | Grouping a tutorial sequence | Show how lessons ladder together |
| Project progress | Black Swan Bistro lessons | Before/after or build-step framing |
| Decision guide | CMS, hosting, domains, static/dynamic | Compare choices without pushing one tool |

Brand cues:

- Primary: GraphiteEdge red `#8d0000`
- Neutral: mine shaft `#4d4d4d`
- Light background: snow `#fff9fb` or white
- Accent options from the site: tea green `#c9e4ca`, rackley blue `#4b88a2`, light gray `#d3d4d9`
- Keep layouts spacious, readable, and instructional
- Reuse existing tutorial diagrams from `public/assets/images/tutorials/diagrams/` when they directly explain the topic

Recommended sizes:

- Instagram square: 1080 x 1080
- Instagram/LinkedIn portrait carousel: 1080 x 1350
- LinkedIn feed image: 1200 x 1200 or 1200 x 1500
- Facebook feed image: 1200 x 1200

## Caption Pattern

Use this structure for most posts:

1. Hook: name the learner problem or decision.
2. Teaching point: explain the concept in one or two plain-English sentences.
3. Tutorial fit: say what the lesson helps the learner practice.
4. CTA: invite the learner to continue in the pathway.

Example CTA options:

- Start with the tutorial on GraphiteEdge.
- Work through the lesson, then try the practice step.
- Save this for the next time your CSS behaves strangely.
- Use this as a checklist before you publish a site.

## Launch Batch

These are the first 16 assets to create because they cover the clearest learner journeys and reusable campaign themes.

| Priority | Tutorial | Asset Type | Visual Direction | Caption Hook |
| --- | --- | --- | --- | --- |
| 1 | How the Web Actually Works | Carousel | Browser -> request -> server -> response flow | "Before you write code, it helps to know what happens after someone types a URL." |
| 2 | Web Development Basics | Single post | HTML/CSS/JS three-column explainer | "HTML, CSS, and JavaScript are not interchangeable. They each do a different job." |
| 3 | Files, Folders, and Project Structure | Checklist | Folder tree with good naming examples | "A tidy project folder makes every next step easier." |
| 4 | Browser Development Tools | Mistake/fix card | DevTools panel callouts | "When a page looks wrong, the browser can usually tell you why." |
| 5 | HTML Essentials | Pathway map | 8-step HTML learning ladder | "HTML is not just tags. It is structure, meaning, and navigation." |
| 6 | Working with Images | Quick tip | Image file + alt text annotation | "Adding an image is easy. Adding it well takes a little more care." |
| 7 | CSS Essentials | Pathway map | Selectors -> box model -> layout -> responsive | "CSS starts to make sense when you see the order of the concepts." |
| 8 | Box Model | Carousel | Content, padding, border, margin diagram | "Most spacing problems are box model problems in disguise." |
| 9 | Why Your CSS Isn't Working | Mistake/fix carousel | Specificity/inheritance/typo/debug checklist | "If your CSS is being ignored, do not guess. Check these first." |
| 10 | JavaScript Essentials | Pathway map | Variables -> operators -> conditionals -> loops -> functions | "JavaScript feels less mysterious when you learn the building blocks in order." |
| 11 | Introduction to DOM | Carousel | HTML -> DOM tree -> JavaScript updates | "The DOM is the browser's live version of your page." |
| 12 | How to Think About Layouts | Carousel | Big shapes before code | "Good layout starts before you open the CSS file." |
| 13 | How to Read a Design | Carousel | Annotated design callouts | "A mockup is full of coding clues if you know what to look for." |
| 14 | Git & GitHub Basics | Pathway map | Commit -> branch -> merge -> remote workflow | "Git is not just for teams. It helps solo learners work safely too." |
| 15 | Hosting and Deployment | Decision guide | Hosting options comparison | "Publishing a site is not one magic button. It is a set of clear decisions." |
| 16 | AI-Powered Workflow | Principles card | Human judgement + AI assistant workflow | "AI can speed up development, but it works best when you understand the work." |

## Ready-To-Build Carousel Drafts

### How the Web Actually Works

Slide 1: What happens when you type a URL?

Slide 2: Your browser asks for a page. It sends a request across the internet.

Slide 3: A server receives that request and decides what to send back.

Slide 4: The response might include HTML, CSS, JavaScript, images, and other files.

Slide 5: The browser reads those files and builds the page you see.

Slide 6: This is why web development is more than "writing code." You are building something that travels.

Caption:

Before you write your first page, it helps to understand the journey a page takes.

This GraphiteEdge tutorial explains browsers, servers, HTTP, and what really happens after someone types a URL.

Start here if you want web development to feel less mysterious.

CTA: Read "How the Web Actually Works" on GraphiteEdge.

### Why Your CSS Isn't Working

Slide 1: Why is my CSS not working?

Slide 2: Check the selector. Is it actually matching the element?

Slide 3: Check the file. Is the stylesheet linked correctly?

Slide 4: Check the spelling. CSS will often fail quietly.

Slide 5: Check the cascade. Another rule may be winning.

Slide 6: Check DevTools. The browser can show which styles apply, which are crossed out, and where they came from.

Caption:

CSS debugging gets much calmer when you stop guessing.

This tutorial walks through the common reasons styles fail: selector mistakes, inheritance, specificity, typos, and DevTools clues.

Save this one for the next time a style refuses to show up.

CTA: Work through "Why Your CSS Isn't Working" on GraphiteEdge.

### How to Read a Design

Slide 1: A design mockup is not just a picture.

Slide 2: Look for structure first: header, hero, sections, footer.

Slide 3: Notice repeated patterns: cards, buttons, spacing, headings.

Slide 4: Extract design decisions: colours, type scale, alignment, rhythm.

Slide 5: Turn those decisions into reusable CSS instead of one-off fixes.

Slide 6: The goal is not to copy pixels blindly. The goal is to understand the system behind the design.

Caption:

Design-to-code work gets easier when you know what to look for before writing CSS.

This GraphiteEdge tutorial teaches learners how to read spacing, colour, typography, and structure from a mockup, then translate those choices into code.

CTA: Continue with the Design to Code path.

### Git & GitHub Basics

Slide 1: Git is a safety system for your work.

Slide 2: A commit is a saved checkpoint.

Slide 3: A branch lets you try something without risking your main version.

Slide 4: A merge brings finished work back together.

Slide 5: A remote repository lets you back up and share your project.

Slide 6: Learn the workflow before the commands feel urgent.

Caption:

Git can feel intimidating because people often learn the commands before the purpose.

The GraphiteEdge Git Basics series starts with why version control matters, then builds toward commits, branches, merging, remotes, and real workflows.

CTA: Start the Git & GitHub Basics series.

## Pathway Campaigns

### Understand the Web

Audience: absolute beginners and small business owners who want to understand the web without jargon.

Post sequence:

1. How the Web Actually Works
2. Web Development Basics
3. Domains, DNS, and Hosting
4. Files, Folders, and Project Structure
5. Text Editors & VS Code
6. Setting Up Your Development Environment
7. Browser Development Tools

Campaign theme:

"Understand the web before you try to memorise it."

### HTML, CSS, and JavaScript Foundations

Audience: new learners ready to write code.

Post sequence:

1. HTML Essentials
2. Working with Text
3. Links & Navigation
4. Working with Images
5. HTML Forms
6. CSS Essentials
7. Box Model
8. Responsive Design
9. JavaScript Essentials
10. Introduction to DOM

Campaign theme:

"Build the basics in the order your brain can use them."

### From Design to Website

Audience: learners who know some HTML/CSS and want to build real page layouts.

Post sequence:

1. How to Think About Layouts
2. How to Read a Design
3. Breaking Layouts into Sections
4. CSS Systems for Reusable Sections
5. Flexbox for Real Layouts
6. CSS Grid for Repeated Layouts
7. Building Reusable Components
8. Responsive Refinement for Reusable Components
9. Black Swan Bistro Parts 2-4B

Campaign theme:

"Move from copying styles to understanding layout decisions."

### Make It Live

Audience: learners and small business owners ready to publish and maintain a site.

Post sequence:

1. Git & GitHub Basics
2. Working with Vite
3. Black Swan Bistro Part 5
4. Hosting and Deployment
5. Static vs Dynamic Sites
6. Black Swan Bistro Part 6
7. Domains, DNS, and Going Live
8. SEO Fundamentals
9. Analytics Setup
10. Website Care and Feeding

Campaign theme:

"A website is not finished until it can be found, used, and maintained."

## Canva Handoff Notes

Create 4 editable templates first:

1. Single tutorial spotlight
2. Five-slide concept carousel
3. Mistake/fix checklist
4. Pathway map

Each template should include:

- GraphiteEdge logo
- Pathway label
- Tutorial title
- One learner promise
- Short CTA
- Optional URL or QR code area

Keep copy editable and diagrams replaceable. Tutorial diagrams that already exist in `public/assets/images/tutorials/diagrams/` can be exported or placed into posts when they match the topic.

## Generated Assets

The first four carousel sets have been generated as editable SVG assets in:

`public/assets/social/tutorial-carousels/`

Generated sets:

- `how-the-web-works`
- `css-not-working`
- `how-to-read-a-design`
- `git-basics`

Each set includes:

- 6 SVG slide files at 1080 x 1350
- a `caption.md` file with the post caption

Use `public/assets/social/tutorial-carousels/index.html` to preview all generated slides together.

Regenerate the files with:

```sh
node scripts/generate-social-assets.mjs
```

## Next Asset Batch

After the launch batch, create posts for:

- Black Swan Bistro project sequence
- Backend Development Basics
- REST APIs
- Databases (Firebase/Supabase)
- SEO Fundamentals
- Analytics Setup
- Accessibility Essentials
- Do You Actually Need a CMS?
- Website Care and Feeding
- Capstone Project
