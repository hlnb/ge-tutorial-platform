<template>
  <MarkdownTutorialPage
    :source="source"
    current-path="/tutorials/website-performance-optimisation/how-browsers-load-and-render-websites"
    section-id="website-performance-optimisation"
  />
</template>

<script setup>
import MarkdownTutorialPage from '@/components/tutorials/MarkdownTutorialPage.vue';
import source from './how-browsers-load-and-render-websites.md?raw';
</script>
