<template>
  <!-- A single curriculum level group (e.g. Foundation, Beginner, Intermediate, Advanced) -->
  <section class="level-section mb-6">
    <!-- Level header -->
    <h3 class="title is-3">
      <span class="tag is-large mb-2" :class="level.bulmaTag">
        {{ level.title }}
      </span>
    </h3>
    <p v-if="level.description" class="subtitle is-6 mb-4">
      {{ level.description }}
    </p>

    <!-- Tutorial grid -->
    <div class="tutorials-grid">
      <TutorialCard
        v-for="tutorial in tutorials"
        :key="tutorial.id"
        :tutorial="tutorial"
      />
    </div>
  </section>
</template>

<script setup>
import TutorialCard from './TutorialCard.vue';

defineProps({
  /** Level metadata object (from tutorials.js levels array) */
  level: {
    type: Object,
    required: true,
  },
  /** Tutorials that belong to this level (pre-filtered and sorted) */
  tutorials: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.level-section {
  position: relative;
  padding-left: 2rem;
}

/* Vertical progress bar on the left of each level */
.level-section::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: #eee;
  border-radius: 2px;
}

.level-section:not(:last-child) {
  padding-bottom: 2rem;
}

.tutorials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}
</style>
