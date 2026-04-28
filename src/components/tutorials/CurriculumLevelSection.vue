<template>
  <!-- A single curriculum level group (e.g. Foundation, Beginner, Intermediate, Advanced) -->
  <section class="level-section">
    <div class="level-header">
      <span
        class="level-badge"
        :style="{
          backgroundColor: level.color,
          color: level.id === 'intermediate' ? '#23272f' : '#ffffff',
        }"
      >
        {{ level.title }}
      </span>
      <p v-if="level.description" class="level-description">
        {{ level.description }}
      </p>
    </div>

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
import TutorialCard from "./TutorialCard.vue";

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
  margin-bottom: 2.5rem;
}

.level-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.level-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.95rem;
  border-radius: 0.25rem;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: var(--weight-bold);
  line-height: 1.2;
}

.level-description {
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--fg-subtle);
}

.tutorials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}
</style>
