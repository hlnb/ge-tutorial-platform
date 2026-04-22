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
        <li><router-link to="/projects/black-swan-bistro">Black Swan Bistro</router-link></li>
        <li class="is-active">
          <a href="#" aria-current="page">CSS Project Notes</a>
        </li>
      </ul>
    </nav>

    <div class="tags mb-4">
      <span class="tag is-primary">Project Notes</span>
      <span class="tag is-info">CSS Basics</span>
      <span class="tag is-light">Rendered from Markdown</span>
    </div>

    <h1 class="title is-1">Black Swan Bistro CSS Project Notes</h1>
    <p class="subtitle is-4">
      Reference notes for the CSS-styled version of the Black Swan Bistro project.
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
import { usePageSections } from '@/composables/usePageSections';
import MarkdownWrapper from '@/components/MarkdownWrapper.vue';

const markdownContent = ref('');
const isLoading = ref(true);
const loadError = ref('');

usePageSections([{ id: 'notes', title: 'Project Notes' }]);

useHead({
  title: 'Black Swan Bistro CSS Notes - GraphiteEdge',
  meta: [
    {
      name: 'description',
      content: 'Rendered CSS project notes for the Black Swan Bistro guided project.',
    },
  ],
});

onMounted(async () => {
  try {
    const response = await fetch('/projects/css-basics/black-swan-bistro/README.md');
    if (!response.ok) {
      throw new Error('Could not load the CSS project notes.');
    }
    markdownContent.value = await response.text();
  } catch (error) {
    loadError.value = error instanceof Error ? error.message : 'Could not load the CSS project notes.';
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
