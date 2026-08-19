<template>
  <MarkdownTutorialPage
    :source="source"
    current-path="/tutorials/website-performance-optimisation/caching-compression-and-content-delivery"
    section-id="website-performance-optimisation"
  />
</template>

<script setup>
import MarkdownTutorialPage from '@/components/tutorials/MarkdownTutorialPage.vue';
import source from './caching-compression-and-content-delivery.md?raw';
</script>
