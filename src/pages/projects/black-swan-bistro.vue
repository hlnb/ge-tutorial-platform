<template>
  <div class="project-page">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/">
            <i class="fa-solid fa-house mr-2"></i> Home
          </router-link>
        </li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li class="is-active">
          <a href="#" aria-current="page">Black Swan Bistro</a>
        </li>
      </ul>
    </nav>

    <div class="tags mb-4">
      <span class="tag is-primary">Guided Project</span>
      <span class="tag is-info">Beginner to Deployment</span>
      <span class="tag is-warning">7 parts</span>
    </div>

    <h1 class="title is-1">Black Swan Bistro</h1>
    <p class="subtitle is-4">
      Follow one restaurant website across the full curriculum so each new concept lands inside a real build.
    </p>

    <section id="overview" class="box">
      <h2 class="title is-4">Project overview</h2>
      <p>
        Black Swan Bistro is the main guided build for GraphiteEdge. It starts with your first HTML page,
        grows through layout and multi-page work, and ends with deployment and maintenance decisions.
      </p>
    </section>

    <section id="pathways" class="box">
      <h2 class="title is-4">How it fits the pathways</h2>
      <div class="content">
        <ul>
          <li>The beginner path introduces the site structure and first page content.</li>
          <li>The builder path turns that structure into layouts, components, and a multi-page site.</li>
          <li>The deployment path prepares the project for launch, publishes it, and covers care after go-live.</li>
        </ul>
      </div>
    </section>

    <section id="parts" class="box">
      <h2 class="title is-4">Project parts</h2>
      <ol class="project-parts">
        <li v-for="part in projectParts" :key="part.slug">
          <router-link :to="`/tutorials/${part.slug}`">{{ part.title }}</router-link>
          <p>{{ part.summary }}</p>
        </li>
      </ol>
    </section>

    <section id="resources" class="box">
      <h2 class="title is-4">Reference versions</h2>
      <p class="mb-3">
        Use these finished versions to compare your work, inspect structure, and understand how the project evolves.
      </p>
      <div class="buttons">
        <router-link to="/projects/black-swan-bistro/brief" class="button is-dark">
          View project brief
        </router-link>
        <a
          v-for="link in project?.liveLinks"
          :key="link.url"
          :href="link.url"
          target="_blank"
          class="button is-primary"
        >
          {{ link.label }}
        </a>
        <a
          v-for="link in project?.sourceLinks"
          :key="link.url"
          :href="link.url"
          target="_blank"
          class="button is-light"
        >
          {{ link.label }}
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import { usePageSections } from '@/composables/usePageSections';
import { getGuidedProjectParts, getProjectBySlug } from '@/data/projects';

const project = getProjectBySlug('black-swan-bistro');
const projectParts = getGuidedProjectParts('black-swan-bistro');

usePageSections([
  { id: 'overview', title: 'Overview' },
  { id: 'pathways', title: 'Pathways' },
  { id: 'parts', title: 'Project Parts' },
  { id: 'resources', title: 'Reference Versions' },
]);

useHead({
  title: 'Black Swan Bistro Project - GraphiteEdge',
  meta: [
    {
      name: 'description',
      content: project.summary,
    },
  ],
});
</script>

<style scoped>
.project-page {
  max-width: 960px;
}

.project-parts {
  display: grid;
  gap: 1rem;
  margin-left: 1.1rem;
}

.project-parts li p {
  color: #4a4a4a;
  margin-top: 0.35rem;
}
</style>
