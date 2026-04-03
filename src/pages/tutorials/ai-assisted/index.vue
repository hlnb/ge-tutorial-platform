<script setup>
import '@/assets/styles/tutorials.css';
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import TutorialCard from '@/components/tutorials/TutorialCard.vue';
import { sections, tutorials } from '@/data/tutorials';

const sectionMeta = sections.find((section) => section.id === 'ai-assisted');

const sectionTutorials = computed(() => {
  return tutorials
    .filter(
      (tutorial) =>
        tutorial.section === 'ai-assisted' && tutorial.slug !== sectionMeta?.slug,
    )
    .sort((a, b) => a.stage - b.stage);
});

useHead({
  title: `${sectionMeta?.introCopy?.title || 'AI-Assisted Development'} - GraphiteEdge Tutorials`,
  meta: [
    {
      name: 'description',
      content:
        sectionMeta?.introCopy?.summary ||
        'Learn how to use AI as a practical coding assistant without skipping fundamentals.',
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
            <a href="#" aria-current="page">AI-Assisted Development</a>
          </li>
        </ul>
      </nav>

      <h1 class="title is-1">
        {{ sectionMeta?.introCopy?.title || 'AI-Assisted Development' }}
      </h1>
      <p class="subtitle is-4">
        {{
          sectionMeta?.introCopy?.summary ||
          'Learn how to use AI as a practical coding assistant without skipping fundamentals.'
        }}
      </p>

      <div class="box">
        <h3 class="title is-5">Module overview</h3>
        <p>
          {{
            sectionMeta?.introCopy?.description ||
            'Explore prompt quality, workflow integration, and project-based uses of AI tools within a real development process.'
          }}
        </p>
      </div>

      <div class="tutorials-grid mt-4">
        <TutorialCard
          v-for="tutorial in sectionTutorials"
          :key="tutorial.id"
          :tutorial="tutorial"
        />
      </div>
    </div>
  </div>
</template>
