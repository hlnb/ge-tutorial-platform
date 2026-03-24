<template>
  <!-- Banner showing the currently active pathway with a clear button -->
  <div v-if="pathway" class="active-path-banner" :style="bannerStyle">
    <div class="active-path-banner__content">
      <i :class="pathway.icon"></i>
      <span>
        Viewing: <strong>{{ pathway.title }}</strong>
      </span>
    </div>

    <button
      class="button is-small is-light active-path-banner__clear"
      @click="$emit('clear')"
    >
      <span class="icon is-small"><i class="fas fa-times"></i></span>
      <span>Show all</span>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  /** The currently active pathway object (or null) */
  pathway: {
    type: Object,
    default: null,
  },
});

defineEmits(['clear']);

// Use pathway colour as the accent border
const bannerStyle = computed(() => {
  if (!props.pathway) return {};
  return { borderLeftColor: props.pathway.color };
});
</script>

<style scoped>
.active-path-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background-color: #f5f5f5;
  border-left: 4px solid #dbdbdb;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
}

.active-path-banner__content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
}

.active-path-banner__clear {
  flex-shrink: 0;
}
</style>
