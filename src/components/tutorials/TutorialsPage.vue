<template>
  <!-- ============================================================
       TutorialsPage — Curriculum map with learning pathways
       ============================================================ -->
  <div class="tutorials-page container section">

    <!-- ──────────────── 1. HERO ──────────────── -->
    <section class="hero-section mb-6">
      <h1 class="title is-1">Choose your learning path</h1>
      <p class="subtitle is-4">
        Practical, project-based tutorials that take you from zero to a live
        website — one step at a time.
      </p>

      <div class="hero-actions">
        <button
          class="button is-primary is-medium"
          @click="selectPathway('beginner')"
        >
          <span class="icon"><i class="fas fa-seedling"></i></span>
          <span>Start Beginner Path</span>
        </button>

        <a href="#curriculum-roadmap" class="button is-light is-medium">
          <span class="icon"><i class="fas fa-map"></i></span>
          <span>Browse Full Curriculum</span>
        </a>
      </div>
    </section>

    <!-- ──────────────── 2. PATHWAY CARDS ──────────────── -->
    <section class="mb-6">
      <h2 class="title is-3">Learning Pathways</h2>
      <div class="pathway-grid">
        <PathwayCard
          v-for="pw in pathwayData"
          :key="pw.id"
          :pathway="pw"
          :is-active="selectedPathway === pw.id"
          @select="selectPathway"
        />
      </div>
    </section>

    <!-- ──────────────── 3. LEARNER TYPE SHORTCUTS ──────────────── -->
    <LearnerTypeChooser
      :pathways="pathwayData"
      :selected-pathway="selectedPathway"
      @select="selectPathway"
    />

    <!-- ──────────────── 4. ACTIVE PATH BANNER ──────────────── -->
    <ActivePathBanner
      :pathway="activePathwayObject"
      @clear="clearPathway"
    />

    <!-- ──────────────── 5. TUTORIAL TYPE FILTERS ──────────────── -->
    <TutorialTypeFilters
      :types="tutorialTypeData"
      :active-type="activeType"
      @select="setActiveType"
    />

    <!-- ──────────────── 6. CURRICULUM ROADMAP ──────────────── -->
    <div id="curriculum-roadmap">
      <h2 class="title is-2 mb-5">Curriculum Roadmap</h2>

      <template v-for="level in levelData" :key="level.id">
        <!-- Only render a level section if it has visible tutorials -->
        <CurriculumLevelSection
          v-if="tutorialsByLevel(level.id).length"
          :level="level"
          :tutorials="tutorialsByLevel(level.id)"
        />
      </template>

      <!-- Empty state when filters result in no matches -->
      <p
        v-if="visibleTutorials.length === 0"
        class="has-text-grey-light has-text-centered mt-6"
      >
        No tutorials match your current filters.
      </p>
    </div>

    <!-- ──────────────── 7. FEATURED SECTION ──────────────── -->
    <FeaturedTutorials :tutorials="allTutorials" />

    <!-- ──────────────── 8. GUIDED PROJECTS ──────────────── -->
    <GuidedProjects
      :projects="projectData"
      :tutorials="allTutorials"
    />

    <!-- ──────────────── 9. BROWSE ALL ──────────────── -->
    <TutorialSearchBrowse
      :tutorials="allTutorials"
      :pathways="pathwayData"
    />

    <!-- ──────────────── 10. FAQ (preserved from original) ──────────────── -->
    <FaqSection :faqs="generalFaqs" class="mt-6" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// -- Data imports --
import {
  pathways as pathwayData,
  levels as levelData,
  tutorials as allTutorials,
  tutorialTypes as tutorialTypeData,
  projects as projectData,
} from '@/data/tutorials';
import generalFaqs from '@/data/faqs';

// -- Component imports --
import PathwayCard from '@/components/tutorials/PathwayCard.vue';
import LearnerTypeChooser from '@/components/tutorials/LearnerTypeChooser.vue';
import ActivePathBanner from '@/components/tutorials/ActivePathBanner.vue';
import TutorialTypeFilters from '@/components/tutorials/TutorialTypeFilters.vue';
import CurriculumLevelSection from '@/components/tutorials/CurriculumLevelSection.vue';
import FeaturedTutorials from '@/components/tutorials/FeaturedTutorials.vue';
import GuidedProjects from '@/components/tutorials/GuidedProjects.vue';
import TutorialSearchBrowse from '@/components/tutorials/TutorialSearchBrowse.vue';
import FaqSection from '@/components/FaqSection.vue';

// ────────────────────────────────────────────────────────────────
// State
// ────────────────────────────────────────────────────────────────

/** Currently selected pathway (null = show all) */
const selectedPathway = ref(null);

/** Currently active tutorial-type filter */
const activeType = ref('all');

// ────────────────────────────────────────────────────────────────
// Computed
// ────────────────────────────────────────────────────────────────

/** The full pathway object for the selected pathway (or null) */
const activePathwayObject = computed(() => {
  if (!selectedPathway.value) return null;
  return pathwayData.find((pw) => pw.id === selectedPathway.value) || null;
});

/**
 * Tutorials visible after applying pathway + type filters.
 * Sorted by stage within each level.
 */
const visibleTutorials = computed(() => {
  let result = [...allTutorials];

  // Filter by pathway
  if (selectedPathway.value) {
    result = result.filter((t) =>
      t.pathways.includes(selectedPathway.value),
    );
  }

  // Filter by tutorial type
  if (activeType.value !== 'all') {
    if (activeType.value === 'project') {
      result = result.filter((t) => t.isProject);
    } else if (activeType.value === 'troubleshooting') {
      result = result.filter((t) => t.badge === 'Troubleshooting');
    } else if (activeType.value === 'foundation') {
      result = result.filter((t) => t.level === 'foundation');
    } else {
      // For other types, match against topic or tags
      result = result.filter(
        (t) =>
          t.topic === activeType.value ||
          t.tags.includes(activeType.value),
      );
    }
  }

  // Sort by stage
  result.sort((a, b) => a.stage - b.stage);

  return result;
});

// ────────────────────────────────────────────────────────────────
// Methods
// ────────────────────────────────────────────────────────────────

/** Return visible tutorials for a given level id, sorted by stage */
function tutorialsByLevel(levelId) {
  return visibleTutorials.value
    .filter((t) => t.level === levelId)
    .sort((a, b) => a.stage - b.stage);
}

/** Select a pathway (toggles off if already selected) */
function selectPathway(id) {
  selectedPathway.value = selectedPathway.value === id ? null : id;
}

/** Clear the pathway filter */
function clearPathway() {
  selectedPathway.value = null;
}

/** Set the active tutorial-type filter */
function setActiveType(id) {
  activeType.value = id;
}
</script>

<style scoped>
/* ── Hero ── */
.hero-section {
  text-align: center;
  padding: 2rem 0;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.25rem;
  flex-wrap: wrap;
}

/* ── Pathway grid ── */
.pathway-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

/* ── Curriculum roadmap vertical connector ── */
#curriculum-roadmap {
  margin-bottom: 3rem;
}
</style>
