<template>
  <div class="content">
    <h1 class="title is-1">AI-Enhanced Design to Code</h1>
    <p>Using AI to translate mockups into HTML/CSS, reviewing and optimizing output.</p>
  </div>
</template>

<script>
export const frontmatter = { title: 'Design to Code (AI)', date: '2025-10-12' };
</script>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';

useTutorialHead({
  title: "AI-Enhanced Design to Code",
  description: "Learn how to use AI tools to translate mockups into HTML and CSS, then review, refine, and optimise the output.",
  path: "/tutorials/ai-assisted/design-to-code",
});
</script>
