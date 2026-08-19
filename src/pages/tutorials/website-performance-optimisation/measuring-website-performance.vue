<template>
  <MarkdownTutorialPage
    :source="source"
    current-path="/tutorials/website-performance-optimisation/measuring-website-performance"
    section-id="website-performance-optimisation"
  />
</template>

<script setup>
import MarkdownTutorialPage from '@/components/tutorials/MarkdownTutorialPage.vue';
import source from './measuring-website-performance.md?raw';
</script>
