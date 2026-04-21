<template>
  <div class="content">
    <h1 class="title is-1">Project: AI-generated REST API Scaffold</h1>
    <p>Use AI to scaffold a simple REST API and then review and harden the code.</p>
  </div>

</template>

<script>
export const frontmatter = { title: 'AI REST API Scaffold', date: '2025-10-12' };
</script>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';

useTutorialHead({
  title: "Project: AI-Generated REST API Scaffold",
  description: "Use AI to scaffold a REST API, then review and harden the code — a practical AI-assisted development guide.",
  path: "/tutorials/ai-assisted/projects/ai-rest-api-scaffold",
});
</script>
