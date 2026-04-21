<template>
  <div class="content">
    <h1 class="title is-1">Vercel & Netlify Deployments</h1>
    <p>How to deploy static and serverless apps to Vercel and Netlify.</p>
  </div>

</template>

<script>
export const frontmatter = { title: 'Vercel & Netlify', date: '2025-10-12' };
</script>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';

useTutorialHead({
  title: "Deploying to Vercel & Netlify",
  description: "Deploy static and serverless apps to Vercel or Netlify — a step-by-step guide for beginner web developers.",
  path: "/tutorials/deployments/vercel-netlify",
});
</script>
