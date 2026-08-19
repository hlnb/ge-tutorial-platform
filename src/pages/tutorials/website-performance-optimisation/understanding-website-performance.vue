<template>
  <MarkdownTutorialPage
    :source="source"
    current-path="/tutorials/website-performance-optimisation/understanding-website-performance"
    section-id="website-performance-optimisation"
  />
</template>

<script setup>
import MarkdownTutorialPage from '@/components/tutorials/MarkdownTutorialPage.vue';
import source from './understanding-website-performance.md?raw';
</script>
