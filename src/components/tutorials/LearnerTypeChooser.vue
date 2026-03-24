<template>
  <!-- Quick-select shortcuts based on learner experience level -->
  <div class="learner-chooser">
    <p class="learner-chooser__prompt">Where are you in your learning journey?</p>

    <div class="learner-chooser__options">
      <button
        v-for="pathway in pathways"
        :key="pathway.id"
        class="button learner-btn"
        :class="{ 'is-active': selectedPathway === pathway.id }"
        @click="$emit('select', pathway.id)"
      >
        <span class="icon"><i :class="pathway.icon"></i></span>
        <span>
          <strong>{{ pathway.learnerLabel }}</strong>
          <small>{{ pathway.learnerDescription }}</small>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  /** Array of pathway objects (from tutorials.js) */
  pathways: {
    type: Array,
    required: true,
  },
  /** Currently selected pathway id (or null) */
  selectedPathway: {
    type: String,
    default: null,
  },
});

defineEmits(['select']);
</script>

<style scoped>
.learner-chooser {
  text-align: center;
  margin-bottom: 2rem;
}

.learner-chooser__prompt {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-mine-shaft-2, #444);
}

.learner-chooser__options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.learner-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  height: auto;
  white-space: normal;
  text-align: left;
  border: 2px solid #dbdbdb;
  border-radius: 0.5rem;
  background: #fff;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.learner-btn:hover {
  border-color: var(--color-rackley, #4b88a2);
  background-color: #f9f9f9;
}

.learner-btn.is-active {
  border-color: var(--color-red-berry, #8d0000);
  background-color: #fdf5f5;
}

.learner-btn strong {
  display: block;
  font-size: 0.95rem;
}

.learner-btn small {
  display: block;
  font-size: 0.8rem;
  color: #7a7a7a;
  margin-top: 0.15rem;
}
</style>
