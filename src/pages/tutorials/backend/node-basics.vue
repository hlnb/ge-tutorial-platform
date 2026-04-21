<template>
  <div class="content">
    <h1 class="title is-1">Node.js Basics</h1>
    <p>Environment, package.json, modules, and running scripts.</p>
  </div>

</template>

<script>
export const frontmatter = { title: 'Node.js Basics', date: '2025-10-12' };
</script>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';

useTutorialHead({
  title: "Node.js Basics",
  description: "Get started with Node.js — environment setup, package.json, modules, and running your first server-side scripts.",
  path: "/tutorials/backend/node-basics",
});
</script>
