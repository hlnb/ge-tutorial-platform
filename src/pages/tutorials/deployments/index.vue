<script setup>
import '@/assets/styles/tutorials.css';
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import TutorialCard from '@/components/tutorials/TutorialCard.vue';
import { sections, tutorials } from '@/data/tutorials';

const sectionMeta = sections.find((section) => section.id === 'deployments');

const sectionTutorials = computed(() => {
  return tutorials
    .filter((tutorial) => tutorial.section === 'deployments')
    .sort((a, b) => a.stage - b.stage);
});

useHead({
  title: `${sectionMeta?.introCopy?.title || 'Deployments'} - GraphiteEdge Tutorials`,
  meta: [
    {
      name: 'description',
      content:
        sectionMeta?.introCopy?.summary ||
        'Learn how to move from a local project to a live site on the web.',
    },
  ],
});
</script>

<template>
  <div class="container section">
    <div class="content">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link to="/">
              <i class="fa-solid fa-house mr-2"></i> Home
            </router-link>
          </li>
          <li><router-link to="/tutorials">Tutorials</router-link></li>
          <li class="is-active">
            <a href="#" aria-current="page">Deployments</a>
          </li>
        </ul>
      </nav>

      <div>
        <h1 class="title is-1">
          {{ sectionMeta?.introCopy?.title || 'Deployments' }}
        </h1>

        <p class="subtitle is-4 mb-6">
          {{
            sectionMeta?.introCopy?.summary ||
            'Learn how to move from a local project to a live site on the web.'
          }}
        </p>

        <p>
          <strong>🎯 Learning Path:</strong>
          {{
            sectionMeta?.introCopy?.description ||
            'Compare hosting approaches, deployment tools, and going-live decisions in a practical, beginner-friendly way.'
          }}
        </p>
      </div>

      <div class="tutorials-grid">
        <TutorialCard
          v-for="tutorial in sectionTutorials"
          :key="tutorial.id"
          :tutorial="tutorial"
        />
      </div>
    </div>
  </div>
</template>
