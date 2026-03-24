<template>
  <!-- Shows the parts of a multi-part project as a linear sequence -->
  <div class="project-sequence">
    <div class="project-sequence__header">
      <i :class="icon" class="project-sequence__icon"></i>
      <h4 class="title is-5 project-sequence__title">{{ title }}</h4>
    </div>

    <ol class="project-sequence__list">
      <li
        v-for="part in parts"
        :key="part.id"
        class="project-sequence__item"
      >
        <span class="project-sequence__part-number">
          Part {{ part.projectPart }}
        </span>

        <div class="project-sequence__details">
          <router-link
            :to="`/tutorials/${part.slug}`"
            class="project-sequence__link"
          >
            {{ part.projectTitle }}
          </router-link>
          <p class="project-sequence__summary">{{ part.summary }}</p>
        </div>

        <!-- Connector line between items (not on last) -->
        <div
          v-if="part.projectPart < totalParts"
          class="project-sequence__connector"
        ></div>
      </li>
    </ol>
  </div>
</template>

<script setup>
defineProps({
  /** Display title for the project */
  title: {
    type: String,
    required: true,
  },
  /** FontAwesome icon class string */
  icon: {
    type: String,
    default: 'fas fa-project-diagram',
  },
  /** Array of tutorial objects belonging to this project, sorted by projectPart */
  parts: {
    type: Array,
    required: true,
  },
  /** Total number of parts in the project */
  totalParts: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.project-sequence {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.project-sequence__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.project-sequence__icon {
  font-size: 1.4rem;
  color: var(--color-rackley, #4b88a2);
}

.project-sequence__title {
  margin-bottom: 0;
}

.project-sequence__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-sequence__item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
  padding-bottom: 1.25rem;
}

.project-sequence__item:last-child {
  padding-bottom: 0;
}

/* Numbered circle */
.project-sequence__part-number {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  background-color: var(--color-rackley, #4b88a2);
  border-radius: 9999px;
  white-space: nowrap;
}

.project-sequence__details {
  flex: 1;
}

.project-sequence__link {
  font-weight: 600;
  color: var(--color-red-berry, #8d0000);
  text-decoration: none;
}

.project-sequence__link:hover {
  text-decoration: underline;
}

.project-sequence__summary {
  font-size: 0.85rem;
  color: #7a7a7a;
  margin-top: 0.2rem;
  line-height: 1.4;
}

/* Vertical connector line between steps */
.project-sequence__connector {
  position: absolute;
  left: 1.75rem; /* centre of the pill */
  top: 2.25rem;
  bottom: 0;
  width: 2px;
  background-color: #dbdbdb;
}
</style>
