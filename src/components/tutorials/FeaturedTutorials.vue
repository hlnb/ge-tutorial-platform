<template>
  <!-- Featured tutorials section — curated picks to help visitors decide where to start -->
  <section class="featured-section mb-6">
    <h2 class="title is-3">
      <i class="fas fa-star"></i> Recommended Starting Points
    </h2>

    <div class="featured-grid">
      <!-- Start here -->
      <div v-if="startHere" class="featured-group">
        <h4 class="featured-group__label">
          <span class="tag is-success">Start here</span>
        </h4>
        <TutorialCard :tutorial="startHere" />
      </div>

      <!-- Most practical -->
      <div v-if="mostPractical" class="featured-group">
        <h4 class="featured-group__label">
          <span class="tag is-info">Most practical</span>
        </h4>
        <TutorialCard :tutorial="mostPractical" />
      </div>

      <!-- Best for DIY site owners -->
      <div v-if="diyPick" class="featured-group">
        <h4 class="featured-group__label">
          <span class="tag is-warning">Best for DIY site owners</span>
        </h4>
        <TutorialCard :tutorial="diyPick" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import TutorialCard from './TutorialCard.vue';

const props = defineProps({
  /** Full array of all tutorials */
  tutorials: {
    type: Array,
    required: true,
  },
});

// "Start here" — first tutorial with badge === 'Start here'
const startHere = computed(() =>
  props.tutorials.find((t) => t.badge === 'Start here') || null,
);

// "Most practical" — first project tutorial (hands-on)
const mostPractical = computed(() =>
  props.tutorials.find((t) => t.isProject && t.projectPart === 1) || null,
);

// "Best for DIY site owners" — hosting / deployment tutorial
const diyPick = computed(() =>
  props.tutorials.find((t) => t.id === 'hosting-and-deployment') || null,
);
</script>

<style scoped>
.featured-section .title i {
  color: #ffdd57;
  margin-right: 0.35rem;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.featured-group__label {
  margin-bottom: 0.5rem;
}
</style>
