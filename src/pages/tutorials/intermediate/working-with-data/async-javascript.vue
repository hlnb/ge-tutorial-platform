<template>
  <MarkdownTutorialPage
    :source="source"
    current-path="/tutorials/intermediate/working-with-data/async-javascript"
    section-id="working-with-data"
  />
</template>

<script setup>
import MarkdownTutorialPage from '@/components/tutorials/MarkdownTutorialPage.vue';
import source from './async-javascript.md?raw';
</script>
