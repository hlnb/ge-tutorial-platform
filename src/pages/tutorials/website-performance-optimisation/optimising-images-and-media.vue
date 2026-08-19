<template>
  <MarkdownTutorialPage
    :source="source"
    current-path="/tutorials/website-performance-optimisation/optimising-images-and-media"
    section-id="website-performance-optimisation"
  />
</template>

<script setup>
import MarkdownTutorialPage from '@/components/tutorials/MarkdownTutorialPage.vue';
import source from './optimising-images-and-media.md?raw';
</script>
