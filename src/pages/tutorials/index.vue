<template>
  <!-- Tutorials page — renders TutorialsPage component when on /tutorials -->
  <TutorialsPage v-if="isMainTutorialsPage" />
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import TutorialsPage from '@/components/tutorials/TutorialsPage.vue';

const route = useRoute();

// Only show the curriculum page on the exact /tutorials route;
// child tutorial routes (e.g. /tutorials/beginner/html-basics) are
// handled by file-based routing in their own page components.
const isMainTutorialsPage = computed(() => {
  return route.path === '/tutorials' || route.path === '/tutorials/';
});
</script>
