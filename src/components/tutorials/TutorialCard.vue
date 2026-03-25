<template>
  <!-- Single tutorial card used in grids and lists -->
  <div class="box tutorial-card" :class="{ 'is-project-card': tutorial.isProject }">
    <!-- Badge (top-right) -->
    <span v-if="tutorial.badge" class="tutorial-badge" :class="badgeClass">
      {{ tutorial.badge }}
    </span>

    <!-- Title -->
    <h4 class="title is-5 tutorial-card__title">
      <i v-if="tutorial.isProject" class="fas fa-hammer"></i>
      {{ tutorial.title }}
    </h4>

    <!-- Summary -->
    <p class="tutorial-card__summary">{{ tutorial.summary }}</p>

    <!-- Meta row: time + difficulty -->
    <div class="tutorial-card__meta">
      <span class="tag is-light">
        <i class="far fa-clock"></i>&nbsp;{{ tutorial.estimatedTime }}
      </span>
      <span class="tag" :class="difficultyTagClass">
        {{ tutorial.difficulty }}
      </span>
      <span v-if="tutorial.isProject && tutorial.projectPart" class="tag is-dark">
        Part {{ tutorial.projectPart }}
      </span>
      <span v-if="tutorial.lessonCount" class="tag is-info is-light">
        <i class="fas fa-layer-group"></i>&nbsp;{{ tutorial.lessonCount }} lessons
      </span>
    </div>

    <!-- Tags -->
    <div v-if="tutorial.tags && tutorial.tags.length" class="tags mt-2">
      <span
        v-for="tag in tutorial.tags.slice(0, 4)"
        :key="tag"
        class="tag is-light is-small"
      >
        {{ tag }}
      </span>
    </div>

    <!-- CTA button (pushed to bottom via flex) -->
    <router-link
      :to="`/tutorials/${tutorial.slug}`"
      class="button is-primary is-outlined mt-3"
    >
      {{ tutorial.isProject ? 'Start Project' : 'Start Tutorial' }}
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  /** The tutorial data object */
  tutorial: {
    type: Object,
    required: true,
  },
});

// Map badge text to a Bulma-compatible class
const badgeClass = computed(() => {
  const map = {
    'Start here': 'badge--start',
    'Project': 'badge--project',
    'Recommended next': 'badge--recommended',
    'Troubleshooting': 'badge--troubleshooting',
  };
  return map[props.tutorial.badge] || 'badge--default';
});

// Map difficulty to tag colour
const difficultyTagClass = computed(() => {
  const map = {
    easy: 'is-success is-light',
    medium: 'is-warning is-light',
    hard: 'is-danger is-light',
  };
  return map[props.tutorial.difficulty] || 'is-light';
});
</script>

<style scoped>
.tutorial-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.tutorial-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Project card left-border accent */
.is-project-card {
  border-left: 4px solid var(--color-rackley, #4b88a2);
}

.tutorial-card__title {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.tutorial-card__title i {
  color: var(--color-rackley, #4b88a2);
  margin-right: 0.35rem;
}

.tutorial-card__summary {
  flex: 1;
  margin-bottom: 0.75rem;
  color: var(--color-mine-shaft-2, #444);
  font-size: 0.95rem;
  line-height: 1.5;
}

.tutorial-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
}

.tutorial-card__meta .tag i {
  font-size: 0.8em;
}

.tutorial-card .button {
  margin-top: auto;
}

/* Badge — positioned top-right inside the card */
.tutorial-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  line-height: 1.4;
}

.badge--start {
  background-color: #48c774;
  color: #fff;
}

.badge--project {
  background-color: var(--color-rackley, #4b88a2);
  color: #fff;
}

.badge--recommended {
  background-color: #ffdd57;
  color: #363636;
}

.badge--troubleshooting {
  background-color: #f14668;
  color: #fff;
}

.badge--default {
  background-color: #f5f5f5;
  color: #363636;
}
</style>
