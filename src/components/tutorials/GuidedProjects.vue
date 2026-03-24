<template>
  <!-- Dedicated guided-projects section showing all multi-part projects -->
  <section class="guided-projects mb-6">
    <h2 class="title is-3">
      <i class="fas fa-hammer"></i> Guided Projects
    </h2>
    <p class="subtitle is-5">
      Follow a real-world project from start to finish across multiple pathways.
    </p>

    <ProjectSequence
      v-for="project in projectsWithParts"
      :key="project.id"
      :title="project.title"
      :icon="project.icon"
      :parts="project.parts"
      :total-parts="project.totalParts"
    />
  </section>
</template>

<script setup>
import { computed } from 'vue';
import ProjectSequence from './ProjectSequence.vue';

const props = defineProps({
  /** Project metadata array (from tutorials.js) */
  projects: {
    type: Array,
    required: true,
  },
  /** Full tutorials array — used to extract project parts */
  tutorials: {
    type: Array,
    required: true,
  },
});

// Enrich each project with its sorted tutorial parts
const projectsWithParts = computed(() =>
  props.projects.map((proj) => {
    const parts = props.tutorials
      .filter((t) => t.project === proj.id)
      .sort((a, b) => a.projectPart - b.projectPart);

    return { ...proj, parts };
  }),
);
</script>

<style scoped>
.guided-projects .title i {
  color: var(--color-rackley, #4b88a2);
  margin-right: 0.35rem;
}
</style>
