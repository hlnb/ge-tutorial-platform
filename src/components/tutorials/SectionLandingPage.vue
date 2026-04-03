<script setup>
import '@/assets/styles/tutorials.css';
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import TutorialCard from '@/components/tutorials/TutorialCard.vue';
import ProjectCard from '@/components/projects/ProjectCard.vue';
import { getProjectsForSection } from '@/data/projects';
import { getSectionById, getSectionLessons, levels } from '@/data/tutorials';

const props = defineProps({
  sectionId: {
    type: String,
    required: true,
  },
});

const sectionMeta = computed(() => getSectionById(props.sectionId));

const sectionTutorials = computed(() => getSectionLessons(props.sectionId));

const relatedProjects = computed(() => getProjectsForSection(props.sectionId));

const levelMeta = computed(() =>
  levels.find((level) => level.id === sectionMeta.value?.level) || null,
);

const levelLabel = computed(() => levelMeta.value?.title || 'Tutorial Section');

const sectionTitle = computed(() => sectionMeta.value?.introCopy?.title || sectionMeta.value?.title);
const sectionSummary = computed(
  () => sectionMeta.value?.introCopy?.summary || 'Explore this part of the GraphiteEdge curriculum.',
);
const sectionDescription = computed(
  () =>
    sectionMeta.value?.introCopy?.description ||
    'Work through these lessons in order, then use the related projects to apply what you learned.',
);

useHead(() => ({
  title: `${sectionTitle.value} - GraphiteEdge Tutorials`,
  meta: [
    {
      name: 'description',
      content: sectionSummary.value,
    },
  ],
}));
</script>

<template>
  <div class="content section-landing">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/">
            <i class="fa-solid fa-house mr-2"></i> Home
          </router-link>
        </li>
        <li><router-link to="/tutorials">Tutorials</router-link></li>
        <li class="is-active">
          <a href="#" aria-current="page">{{ sectionTitle }}</a>
        </li>
      </ul>
    </nav>

    <div class="tags mb-4">
      <span class="tag is-info">{{ levelLabel }}</span>
      <span class="tag is-warning">Section</span>
    </div>

    <h1 class="title is-1">{{ sectionTitle }}</h1>
    <p class="subtitle is-4 mb-5">{{ sectionSummary }}</p>

    <div class="box section-landing__intro">
      <h2 class="title is-5">How to use this section</h2>
      <p>{{ sectionDescription }}</p>
    </div>

    <section v-if="relatedProjects.length" class="section-landing__projects mt-6">
      <h2 class="title is-3">Projects in this section</h2>
      <p class="mb-4">
        Use these guided, reference, and practice projects to connect the lessons to real site work.
      </p>

      <div class="section-landing__project-grid">
        <ProjectCard
          v-for="project in relatedProjects"
          :key="project.slug"
          :project="project"
        />
      </div>
    </section>

    <section class="section-landing__lessons mt-6">
      <h2 class="title is-3">Lessons in this section</h2>
      <div class="section-landing__tutorial-grid">
        <TutorialCard
          v-for="tutorial in sectionTutorials"
          :key="tutorial.id"
          :tutorial="tutorial"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.section-landing {
  width: 100%;
}

.section-landing__intro {
  border-left: 4px solid #d6e8ef;
}

.section-landing__project-grid,
.section-landing__tutorial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
</style>
