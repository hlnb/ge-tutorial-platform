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
      <span class="tag is-link">Capstone Project</span>
      <span class="tag is-info">Beginner and Builder</span>
      <span class="tag is-warning">Multi-page</span>
    </div>

    <h1 class="title is-1">Rotto Rocks</h1>
    <p class="subtitle is-4">
      Build a fictional Rottnest Island tourism site from brief and wireframes, then connect the fundamentals into one realistic project.
    </p>

    <section id="overview" class="box">
      <h2 class="title is-4">Project overview</h2>
      <p>
        Rotto Rocks is a capstone-style tourism project for the beginner, builder, and deployment
        pathways. It gives learners a realistic second build to plan from a brief, choose a wireframe
        direction, and bring together structure, styling, responsive design, accessibility, SEO, and
        deployment thinking.
      </p>
      <p class="mt-3">
        The HTML and CSS reference notes are placeholders for the current reference versions. They can
        be rebuilt later to match Variation A of the wireframes without changing the project brief.
      </p>
      <router-link class="button is-link mt-3" to="/projects/rotto-rocks/brief">
        View Student Project Brief
      </router-link>
      <a
        class="button is-light mt-3 ml-2"
        href="/projects/rotto-rocks/rotto-rocks-student-project-brief.pdf"
        download
      >
        Download Brief + Wireframes PDF
      </a>
      <a
        class="button is-light mt-3 ml-2"
        href="/projects/rotto-rocks/wireframes/index.html"
        target="_blank"
        rel="noopener"
      >
        View Wireframe Options
      </a>
    </section>

    <section id="concepts" class="box">
      <h2 class="title is-4">What this project helps reinforce</h2>
      <div class="content">
        <ul>
          <li>Multi-page information architecture</li>
          <li>Navigation and content grouping</li>
          <li>Semantic HTML, images, forms, and accessible page structure</li>
          <li>Reusable CSS patterns, responsive sections, and design-to-code decisions</li>
          <li>Basic SEO, performance awareness, and deployment readiness</li>
        </ul>
      </div>
    </section>

    <section id="related-lessons" class="box">
      <h2 class="title is-4">Related tutorials</h2>
      <p>
        Because Rotto Rocks works as a capstone build, these recommendations span planning,
        structure, styling, accessibility, SEO, and deployment.
      </p>
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
  title: 'Rotto Rocks Project - GraphitEdge',
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
