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
          <a href="#" aria-current="page">Rotto Rocks</a>
        </li>
      </ul>
    </nav>

    <div class="tags mb-4">
      <span class="tag is-link">Reference Project</span>
      <span class="tag is-info">Beginner and Builder</span>
      <span class="tag is-warning">Multi-page</span>
    </div>

    <h1 class="title is-1">Rotto Rocks</h1>
    <p class="subtitle is-4">
      Explore a second complete site so you can compare decisions, practise transfer, and see how the same web fundamentals adapt to a new context.
    </p>

    <section id="overview" class="box">
      <h2 class="title is-4">Project overview</h2>
      <p>
        Rotto Rocks is a tourism-site reference project for the beginner and builder pathways. It is not a
        step-by-step guided series, but it gives learners a realistic second example to study alongside
        Black Swan Bistro.
      </p>
    </section>

    <section id="concepts" class="box">
      <h2 class="title is-4">What this project helps reinforce</h2>
      <div class="content">
        <ul>
          <li>Multi-page information architecture</li>
          <li>Navigation and content grouping</li>
          <li>Images, figures, and accessible page structure</li>
          <li>Comparing HTML-only and CSS-enhanced versions of the same site</li>
        </ul>
      </div>
    </section>

    <section id="related-lessons" class="box">
      <h2 class="title is-4">Related tutorials</h2>
      <ul>
        <li v-for="tutorial in relatedTutorials" :key="tutorial.slug">
          <router-link :to="`/tutorials/${tutorial.slug}`">{{ tutorial.title }}</router-link>
        </li>
      </ul>
    </section>

    <section id="resources" class="box">
      <h2 class="title is-4">Reference versions</h2>
      <div class="buttons">
        <a
          v-for="link in project?.liveLinks"
          :key="link.url"
          :href="link.url"
          target="_blank"
          class="button is-link"
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
import { getProjectBySlug, getRelatedTutorialsForProject } from '@/data/projects';

const project = getProjectBySlug('rotto-rocks');
const relatedTutorials = getRelatedTutorialsForProject(project);

usePageSections([
  { id: 'overview', title: 'Overview' },
  { id: 'concepts', title: 'Concepts' },
  { id: 'related-lessons', title: 'Related Tutorials' },
  { id: 'resources', title: 'Reference Versions' },
]);

useHead({
  title: 'Rotto Rocks Project - GraphiteEdge',
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
</style>
