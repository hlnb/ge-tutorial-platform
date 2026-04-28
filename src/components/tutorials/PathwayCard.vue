<template>
  <!-- Clickable pathway card — selects a learning pathway -->
  <button
    class="box pathway-card"
    :class="{ 'is-active': isActive }"
    :style="borderStyle"
    @click="$emit('select', pathway.id)"
  >
    <div class="pathway-card__icon">
      <i :class="pathway.icon"></i>
    </div>

    <h3 class="title is-5 pathway-card__title">{{ pathway.title }}</h3>
    <p class="pathway-card__subtitle">{{ pathway.subtitle }}</p>
    <p class="pathway-card__description">{{ pathway.description }}</p>

    <div class="pathway-card__stats">
      <span class="tag is-light">{{ pathway.tutorialCount }} tutorials</span>
      <span class="tag is-light">{{ pathway.estimatedHours }} hrs</span>
    </div>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Pathway metadata object from tutorials.js */
  pathway: {
    type: Object,
    required: true,
  },
  /** Whether this pathway is currently selected */
  isActive: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["select"]);

// Accent border colour when active
const borderStyle = computed(() => {
  if (!props.isActive) return {};
  return { borderColor: props.pathway.color };
});
</script>

<style scoped>
.pathway-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border: 2px solid transparent;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
  background: #fff;
  width: 100%;
  padding: 1.125rem 0.875rem;
  font-family: inherit;
  font-size: inherit;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.pathway-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.pathway-card.is-active {
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
}

.pathway-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  margin-bottom: 0.75rem;
  border-radius: var(--radius-round);
  background: rgba(67, 56, 202, 0.08);
  color: var(--fg-default);
  font-size: 1.125rem;
}

.pathway-card__title {
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
}

.pathway-card__subtitle {
  font-size: 0.75rem;
  color: var(--fg-subtle);
  margin-bottom: 0.5rem;
  font-family: var(--font-heading);
  font-weight: var(--weight-semibold);
}

.pathway-card__description {
  font-size: 0.8125rem;
  color: var(--fg-muted);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.pathway-card__stats {
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
  flex-wrap: wrap;
  justify-content: center;
}

.pathway-card__stats :deep(.tag) {
  font-size: 0.6875rem;
  color: #555;
  background: #f0f0f0;
}
</style>
