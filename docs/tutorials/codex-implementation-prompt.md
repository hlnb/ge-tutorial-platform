# Codex Prompt: Add Deployment Fundamentals Tutorial

You are working on the GraphiteEdge tutorial site.

Create a new non-project tutorial using the source content in:

- `/docs/tutorial-content/deployment-fundamentals.md`
- `/docs/tutorial-content/hosting-options.md`
- `/docs/tutorial-content/deployment-checklist.md`

## Goal

Add a new tutorial titled:

**Getting a Website Online: Hosting, Deployment and Continuous Improvement**

This tutorial should appear before Black Swan Bistro Part 5 and should be reusable across future projects.

## Implementation requirements

1. Add the tutorial to the correct tutorial data source.
2. Create the page or route using existing GraphiteEdge tutorial conventions.
3. Use existing lesson components where appropriate:
   - learning objectives
   - checkpoints
   - guided practice
   - independent practice
   - reflection prompts
   - warning/caution boxes
   - summary sections
4. Preserve the lesson structure from the Markdown source files.
5. Convert raw Markdown sections into the site’s existing tutorial component format where appropriate.
6. Keep all code examples working and copyable.
7. Ensure heading hierarchy is semantic.
8. Ensure the page is mobile-friendly.
9. Add SEO metadata:
   - title: Getting a Website Online: Hosting, Deployment and Continuous Improvement
   - description: Learn how to deploy a basic HTML, CSS and JavaScript website using traditional hosting, manual static hosting, GitHub Pages, Netlify, Vercel and a simple continuous improvement workflow.
   - keywords: deployment, web hosting, static hosting, GitHub Pages, Netlify, Vercel, HTML, CSS, JavaScript, beginner web development
10. Add this tutorial to the correct position in the learning pathway before Black Swan Bistro Part 5.
11. Add or expose the deployment checklist as a downloadable or printable student resource if the existing tutorial system supports resource downloads.
12. Add internal links where appropriate:
    - Git basics, if available
    - Vite basics, if available
    - Black Swan Bistro Part 5, if available
    - accessibility checklist, if available

## Important notes

- Do not rewrite the tutorial into a generic tone.
- Keep the GraphiteEdge voice: clear, practical, mentor-like, lightly witty.
- Do not remove cautions about free hosting.
- Make sure the tutorial works for plain HTML/CSS/JavaScript students first.
- Explain Vite deployment as an additional pathway, not the only pathway.
- Do not invent unsupported hosting instructions.
- If any existing component names differ from the source content, adapt the content to the real component names already used in the project.
- Use official provider links only in the final useful resources section if external links are supported.

## Final check

After implementation, confirm:

- the tutorial appears in the correct pathway
- the page renders without errors
- code blocks display correctly
- internal links work
- the checklist section is easy for students to copy, print or download
- the page works on mobile
- deployment-specific code examples are not broken by Markdown fences
