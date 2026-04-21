<template>
  <div class="content">
    <h1 class="title is-1">Static vs Dynamic Deployment</h1>
    <p>Understanding trade-offs and hosting options for static and dynamic sites.</p>
  </div>

</template>

<script>
export const frontmatter = { title: 'Static vs Dynamic', date: '2025-10-12' };
</script>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';

useTutorialHead({
  title: "Static vs Dynamic Deployment",
  description: "Understand the difference between static and dynamic site hosting — trade-offs, use cases, and options for each.",
  path: "/tutorials/deployments/static-vs-dynamic",
});
</script>
