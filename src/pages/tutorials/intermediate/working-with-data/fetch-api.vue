<template>
  <MarkdownTutorialPage
    :source="source"
    current-path="/tutorials/intermediate/working-with-data/fetch-api"
    section-id="working-with-data"
  />
</template>

<script setup>
import MarkdownTutorialPage from '@/components/tutorials/MarkdownTutorialPage.vue';
import source from './fetch-api.md?raw';
</script>
