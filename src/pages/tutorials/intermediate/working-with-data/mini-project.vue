<template>
  <MarkdownTutorialPage
    :source="source"
    current-path="/tutorials/intermediate/working-with-data/mini-project"
    section-id="working-with-data"
  />
</template>

<script setup>
import MarkdownTutorialPage from '@/components/tutorials/MarkdownTutorialPage.vue';
import source from './mini-project.md?raw';
</script>
