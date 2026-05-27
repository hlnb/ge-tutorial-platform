<template>
  <div class="project-notes-page">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/">
            <i class="fa-solid fa-house mr-2"></i> Home
          </router-link>
        </li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/projects/rotto-rocks">Rotto Rocks</router-link></li>
        <li class="is-active">
          <a href="#" aria-current="page">HTML Project Notes</a>
        </li>
      </ul>
    </nav>

    <div class="tags mb-4">
      <span class="tag is-link">Project Notes</span>
      <span class="tag is-info">HTML Basics</span>
      <span class="tag is-light">Rendered from Markdown</span>
    </div>

    <h1 class="title is-1">Rotto Rocks HTML Project Notes</h1>
    <p class="subtitle is-4">
      Reference notes for the HTML-only version of the Rotto Rocks tourism project.
    </p>

    <section id="notes" class="box">
      <div v-if="isLoading" class="content">
        <p>Loading project notes...</p>
      </div>
      <div v-else-if="loadError" class="notification is-danger is-light">
        <p>{{ loadError }}</p>
      </div>
      <MarkdownWrapper v-else :content="markdownContent" />
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useHead } from '@vueuse/head';
import MarkdownWrapper from '@/components/MarkdownWrapper.vue';
import { usePageSections } from '@/composables/usePageSections';

const markdownContent = ref('');
const isLoading = ref(true);
const loadError = ref('');

usePageSections([{ id: 'notes', title: 'Project Notes' }]);

useHead({
  title: 'Rotto Rocks HTML Notes - GraphitEdge',
  meta: [
    {
      name: 'description',
      content: 'Rendered HTML project notes for the Rotto Rocks tourism project.',
    },
  ],
});

onMounted(async () => {
  try {
    const response = await fetch('/projects/html-basics/rotto-rocks/README.md');
    if (!response.ok) {
      throw new Error('Could not load the HTML project notes.');
    }
    markdownContent.value = await response.text();
  } catch (error) {
    loadError.value =
      error instanceof Error ? error.message : 'Could not load the HTML project notes.';
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
.project-notes-page {
  max-width: 960px;
}
</style>
