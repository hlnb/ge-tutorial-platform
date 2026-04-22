<template>
  <ol class="flow-steps" :class="{ 'flow-steps--compact': compact }">
    <li v-for="(step, index) in steps" :key="index" class="flow-step">
      <div class="flow-step__marker" aria-hidden="true">{{ index + 1 }}</div>
      <div class="flow-step__body">
        <h3 class="flow-step__title">{{ step.title }}</h3>
        <p v-if="step.description" class="flow-step__description">{{ step.description }}</p>
      </div>
    </li>
  </ol>
</template>

<script setup>
defineProps({
  steps: {
    type: Array,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.flow-steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.flow-step {
  position: relative;
  background: #f8fbff;
  border: 1px solid #c9dbf7;
  border-radius: 14px;
  padding: 1rem 1rem 1rem 4rem;
  min-height: 100%;
}

.flow-step__marker {
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  background: #3298dc;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.flow-step__title {
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
}

.flow-step__description {
  margin: 0;
  line-height: 1.5;
}

.flow-steps--compact .flow-step {
  min-height: auto;
}

@media (max-width: 768px) {
  .flow-steps {
    grid-template-columns: 1fr;
  }

  .flow-step {
    padding-left: 4.25rem;
  }

  .flow-step:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 2rem;
    top: 3rem;
    bottom: -1rem;
    width: 2px;
    background: #c9dbf7;
  }
}
</style>
