<template>
  <!-- Horizontal filter bar for tutorial types (Foundation, Walkthrough, etc.) -->
  <div class="type-filters">
    <button
      v-for="type in types"
      :key="type.id"
      class="button is-small type-filters__btn"
      :class="{ 'is-primary': activeType === type.id }"
      @click="$emit('select', type.id)"
    >
      <span class="icon is-small"><i :class="type.icon"></i></span>
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
    default: 'all',
  },
});

defineEmits(['select']);
</script>

<style scoped>
.type-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.type-filters__btn {
  border-radius: 9999px;
  transition: background-color 0.2s ease, color 0.2s ease;
}
</style>
