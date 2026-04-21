<template>
  <div class="content">
    <h1 class="title is-1">AI-Powered Workflow Integration</h1>
    <p>Integrating AI into VS Code/IDE, scaffolding, refactoring, and automation.
    </p>
  </div>
</template>

<script>
export const frontmatter = { title: 'AI-Powered Workflow', date: '2025-10-12' };
</script>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';

useTutorialHead({
  title: "AI-Powered Workflow Integration",
  description: "Integrate AI into your development workflow — scaffolding, refactoring, and automation with VS Code and Copilot.",
  path: "/tutorials/ai-assisted/workflow-integration",
});
</script>
