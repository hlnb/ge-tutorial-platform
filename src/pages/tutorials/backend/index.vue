<script setup>
import '@/assets/styles/tutorials.css';
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import TutorialCard from '@/components/tutorials/TutorialCard.vue';
import { sections, tutorials } from '@/data/tutorials';

const sectionMeta = sections.find((section) => section.id === 'backend');

const sectionTutorials = computed(() => {
  return tutorials
    .filter(
      (tutorial) =>
        tutorial.section === 'backend' && tutorial.slug !== sectionMeta?.slug,
    )
    .sort((a, b) => a.stage - b.stage);
});

useHead({
  title: `${sectionMeta?.introCopy?.title || 'Backend Development Basics'} - GraphiteEdge Tutorials`,
  meta: [
    {
      name: 'description',
      content:
        sectionMeta?.introCopy?.summary ||
        'Get a practical introduction to server-side development concepts.',
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
            <a href="#" aria-current="page">Backend Development Basics</a>
          </li>
        </ul>
      </nav>

      <h1 class="title is-1">
        {{ sectionMeta?.introCopy?.title || 'Backend Development Basics' }}
      </h1>
      <p class="subtitle is-4">
        {{
          sectionMeta?.introCopy?.summary ||
          'Get a practical introduction to server-side development concepts.'
        }}
      </p>

      <div class="box">
        <p>
          {{
            sectionMeta?.introCopy?.description ||
            'Cover Node.js, databases, and APIs as part of understanding how full websites work beyond the frontend.'
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
