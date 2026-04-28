<template>
  <MarkdownTutorialPage
    :source="source"
    current-path="/tutorials/intermediate/working-with-data/working-with-json"
    section-id="working-with-data"
  />
</template>

<script setup>
import MarkdownTutorialPage from '@/components/tutorials/MarkdownTutorialPage.vue';
import source from './working-with-json.md?raw';
</script>
