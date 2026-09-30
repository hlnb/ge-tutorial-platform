<script setup>
import '@/assets/styles/tutorials.css';
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import TutorialCard from '@/components/tutorials/TutorialCard.vue';
import { isTutorialVisibleInCurriculum, levels, tutorials } from '@/data/tutorials';

const props = defineProps({
  levelId: {
    type: String,
    required: true,
  },
});

const levelMeta = computed(() => levels.find((level) => level.id === props.levelId) || null);
const levelTitle = computed(() => levelMeta.value?.title || 'Tutorials');
const levelDescription = computed(
  () => levelMeta.value?.description || 'Browse the tutorials in this level.',
);
const pageTitle = computed(() => `${levelTitle.value} Tutorials`);

const levelTutorials = computed(() =>
  tutorials
    .filter(
      (tutorial) =>
        tutorial.level === props.levelId && isTutorialVisibleInCurriculum(tutorial),
    )
    .sort((firstTutorial, secondTutorial) => firstTutorial.stage - secondTutorial.stage),
);

useHead(() => ({
  title: `${pageTitle.value} - GraphitEdge`,
  meta: [
    {
      name: 'description',
      content: levelDescription.value,
    },
  ],
}));
</script>

<template>
  <div class="content level-landing">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/">
            <i class="fa-solid fa-house mr-2"></i> Home
          </router-link>
        </li>
        <li><router-link to="/tutorials">Tutorials</router-link></li>
        <li class="is-active">
          <a href="#" aria-current="page">{{ pageTitle }}</a>
        </li>
      </ul>
    </nav>

    <div class="tags mb-4">
      <span class="tag is-info">{{ levelTitle }}</span>
      <span class="tag is-warning">Tutorial level</span>
    </div>

    <h1 class="title is-1">{{ pageTitle }}</h1>
    <p class="subtitle is-4 mb-5">{{ levelDescription }}</p>

    <section class="level-landing__lessons">
      <h2 class="title is-3">Lessons at this level</h2>
      <div class="level-landing__tutorial-grid">
        <TutorialCard
          v-for="tutorial in levelTutorials"
          :key="tutorial.id"
          :tutorial="tutorial"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.level-landing {
  width: 100%;
}

.level-landing__tutorial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
</style>
