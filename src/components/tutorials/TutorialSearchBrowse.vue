<template>
  <!-- Search + filter panel for browsing the full tutorial catalogue -->
  <section class="browse-section mb-6">
    <h2 class="title is-3">
      <i class="fas fa-search"></i> Browse All Tutorials
    </h2>

    <!-- Search input -->
    <div class="field mb-4">
      <div class="control has-icons-left">
        <input
          v-model="searchQuery"
          class="input"
          type="text"
          placeholder="Search tutorials by title, tag, or topic&hellip;"
        />
        <span class="icon is-left">
          <i class="fas fa-search"></i>
        </span>
      </div>
    </div>

    <!-- Inline filters -->
    <div class="browse-filters mb-4">
      <!-- Pathway filter -->
      <div class="field">
        <label class="label is-small">Pathway</label>
        <div class="control">
          <div class="select is-small">
            <select v-model="filterPathway">
              <option value="">All pathways</option>
              <option
                v-for="pw in pathways"
                :key="pw.id"
                :value="pw.id"
              >
                {{ pw.title }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- Topic filter -->
      <div class="field">
        <label class="label is-small">Topic</label>
        <div class="control">
          <div class="select is-small">
            <select v-model="filterTopic">
              <option value="">All topics</option>
              <option
                v-for="topic in uniqueTopics"
                :key="topic"
                :value="topic"
              >
                {{ topic }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- Difficulty filter -->
      <div class="field">
        <label class="label is-small">Difficulty</label>
        <div class="control">
          <div class="select is-small">
            <select v-model="filterDifficulty">
              <option value="">All levels</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Result count -->
    <p class="browse-count mb-3">
      Showing <strong>{{ filteredTutorials.length }}</strong> of
      {{ tutorials.length }} tutorials
    </p>

    <!-- Tutorial list -->
    <div class="tutorials-grid">
      <TutorialCard
        v-for="tutorial in filteredTutorials"
        :key="tutorial.id"
        :tutorial="tutorial"
      />
    </div>

    <!-- Empty state -->
    <p v-if="filteredTutorials.length === 0" class="has-text-grey mt-4">
      No tutorials match your filters. Try adjusting your search or filters.
    </p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import TutorialCard from './TutorialCard.vue';

const props = defineProps({
  /** Full tutorials array */
  tutorials: {
    type: Array,
    required: true,
  },
  /** Pathway metadata (for the dropdown) */
  pathways: {
    type: Array,
    required: true,
  },
});

// Local filter state
const searchQuery = ref('');
const filterPathway = ref('');
const filterTopic = ref('');
const filterDifficulty = ref('');

// Derive unique topics from the data
const uniqueTopics = computed(() => {
  const set = new Set(props.tutorials.map((t) => t.topic));
  return [...set].sort();
});

// Apply all filters
const filteredTutorials = computed(() => {
  let result = props.tutorials;

  // Text search (title, tags, topic)
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase();
    result = result.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.topic.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q)),
    );
  }

  // Pathway
  if (filterPathway.value) {
    result = result.filter((t) =>
      t.pathways.includes(filterPathway.value),
    );
  }

  // Topic
  if (filterTopic.value) {
    result = result.filter((t) => t.topic === filterTopic.value);
  }

  // Difficulty
  if (filterDifficulty.value) {
    result = result.filter((t) => t.difficulty === filterDifficulty.value);
  }

  return result;
});
</script>

<style scoped>
.browse-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.browse-count {
  font-size: 0.9rem;
  color: #7a7a7a;
}

.tutorials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
</style>
