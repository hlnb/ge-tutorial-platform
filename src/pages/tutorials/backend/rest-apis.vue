<template>
  <div class="content">
    <h1 class="title is-1">REST APIs</h1>
    <p>Designing and building RESTful APIs with Express or native Node.</p>
  </div>

</template>

<script>
export const frontmatter = { title: 'REST APIs', date: '2025-10-12' };
</script>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';

useTutorialHead({
  title: "REST APIs Explained",
  description: "Design and build RESTful APIs with Node.js and Express — HTTP methods, routing, and JSON responses explained.",
  path: "/tutorials/backend/rest-apis",
});
</script>
