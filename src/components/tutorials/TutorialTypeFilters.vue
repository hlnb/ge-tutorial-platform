<template>
  <!-- Horizontal filter bar for tutorial types (Foundation, Walkthrough, etc.) -->
  <div class="type-filters">
    <button
      v-for="type in types"
      :key="type.id"
      class="type-filters__btn"
      :class="{ 'type-filters__btn--active': activeType === type.id }"
      @click="$emit('select', type.id)"
    >
      <span>{{ type.label }}</span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  /** Array of { id, label, icon } filter definitions */
  types: {
    type: Array,
    required: true,
  },
  /** Currently active type id */
  activeType: {
    type: String,
    default: "all",
  },
});

defineEmits(["select"]);
</script>

<style scoped>
.type-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.type-filters__btn {
  padding: 0.375rem 0.875rem;
  border: 1px solid var(--border-default);
  border-radius: var(--radius-full);
  background: var(--color-white);
  color: var(--fg-muted);
  font-family: var(--font-heading);
  font-size: 0.8125rem;
  font-weight: var(--weight-semibold);
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}

.type-filters__btn--active {
  background: var(--fg-default);
  border-color: var(--fg-default);
  color: var(--color-white);
}
</style>
