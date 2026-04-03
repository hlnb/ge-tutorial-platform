<template>
  <article class="box project-card">
    <div class="project-card__header">
      <div class="project-card__icon">
        <i :class="project.icon || 'fas fa-laptop-code'"></i>
      </div>
      <div>
        <p class="project-card__eyebrow">{{ typeLabel }}</p>
        <h3 class="title is-4 project-card__title">{{ project.title }}</h3>
      </div>
    </div>

    <p class="project-card__summary">{{ project.summary }}</p>

    <div class="project-card__meta">
      <span class="tag is-light">{{ project.difficulty }}</span>
      <span class="tag is-light">{{ project.duration }}</span>
      <span
        v-for="pathway in project.pathways"
        :key="pathway"
        class="tag is-info is-light"
      >
        {{ pathwayLabels[pathway] || pathway }}
      </span>
    </div>

    <div v-if="project.tags.length" class="tags">
      <span
        v-for="tag in project.tags.slice(0, 4)"
        :key="tag"
        class="tag is-light is-small"
      >
        {{ tag }}
      </span>
    </div>

    <router-link :to="project.path" class="button is-primary is-outlined mt-3">
      View Project
    </router-link>
  </article>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const pathwayLabels = {
  beginner: 'Beginner path',
  builder: 'Builder path',
  deployment: 'Deployment path',
};

const typeLabel = computed(() => {
  const labels = {
    guided: 'Guided Project',
    reference: 'Reference Project',
    practice: 'Practice Project',
  };

  return labels[props.project.type] || 'Project';
});
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-left: 4px solid var(--color-rackley, #4b88a2);
}

.project-card__header {
  display: flex;
  gap: 0.9rem;
  align-items: flex-start;
}

.project-card__icon {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(75, 136, 162, 0.12);
  color: var(--color-rackley, #4b88a2);
  flex-shrink: 0;
}

.project-card__eyebrow {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 700;
  color: #5f6b73;
  margin-bottom: 0.35rem;
}

.project-card__title {
  margin-bottom: 0;
}

.project-card__summary {
  margin: 1rem 0;
  color: #44505a;
  line-height: 1.6;
  flex: 1;
}

.project-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 0.75rem;
}

.project-card .button {
  margin-top: auto;
  align-self: flex-start;
}
</style>
