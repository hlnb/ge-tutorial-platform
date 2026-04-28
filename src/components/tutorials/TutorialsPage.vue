<template>
  <div class="tutorials-page container">
    <section class="tutorials-hero">
      <h1>Choose your learning path</h1>
      <p>
        Practical, project-based tutorials that take you from zero to a live
        website one step at a time.
      </p>

      <div class="tutorials-hero__actions">
        <button class="button is-primary" @click="selectPathway('beginner')">
          Start Beginner Path
        </button>
        <a href="#curriculum-roadmap" class="button is-light"
          >Browse Full Curriculum</a
        >
      </div>
    </section>

    <section class="tutorials-section">
      <h2>Learning Pathways</h2>
      <div class="pathway-grid">
        <PathwayCard
          v-for="pathway in pathwayData"
          :key="pathway.id"
          :pathway="pathway"
          :is-active="selectedPathway === pathway.id"
          @select="selectPathway"
        />
      </div>
    </section>

    <LearnerTypeChooser
      :pathways="pathwayData"
      :selected-pathway="selectedPathway"
      @select="selectPathway"
    />

    <ActivePathBanner :pathway="activePathwayObject" @clear="clearPathway" />

    <div class="tutorial-controls">
      <TutorialTypeFilters
        :types="tutorialTypeData"
        :active-type="activeType"
        @select="setActiveType"
      />
      <input
        v-model="searchQuery"
        class="tutorial-search"
        type="search"
        placeholder="Search tutorials"
      />
    </div>

    <div id="curriculum-roadmap" class="curriculum-roadmap">
      <h2>Curriculum Roadmap</h2>

      <CurriculumLevelSection
        v-for="level in levelData"
        v-show="tutorialsByLevel(level.id).length"
        :key="level.id"
        :level="level"
        :tutorials="tutorialsByLevel(level.id)"
      />

      <p v-if="visibleTutorials.length === 0" class="tutorials-empty">
        No tutorials match your current filters.
      </p>
    </div>

    <FeaturedTutorials :tutorials="allTutorials" />

    <GuidedProjects :projects="projectData" :tutorials="allTutorials" />

    <FaqSection :faqs="generalFaqs" class="tutorials-faq" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import {
  pathways as pathwayData,
  levels as levelData,
  tutorials as allTutorials,
  tutorialTypes as tutorialTypeData,
  projects as projectData,
  isTutorialVisibleInCurriculum,
} from "@/data/tutorials";
import generalFaqs from "@/data/faqs";
import PathwayCard from "@/components/tutorials/PathwayCard.vue";
import LearnerTypeChooser from "@/components/tutorials/LearnerTypeChooser.vue";
import ActivePathBanner from "@/components/tutorials/ActivePathBanner.vue";
import TutorialTypeFilters from "@/components/tutorials/TutorialTypeFilters.vue";
import CurriculumLevelSection from "@/components/tutorials/CurriculumLevelSection.vue";
import FeaturedTutorials from "@/components/tutorials/FeaturedTutorials.vue";
import GuidedProjects from "@/components/tutorials/GuidedProjects.vue";
import FaqSection from "@/components/FaqSection.vue";

const selectedPathway = ref(null);
const activeType = ref("all");
const searchQuery = ref("");

const activePathwayObject = computed(() => {
  if (!selectedPathway.value) {
    return null;
  }

  return (
    pathwayData.find((pathway) => pathway.id === selectedPathway.value) || null
  );
});

const visibleTutorials = computed(() => {
  let tutorials = allTutorials.filter((tutorial) =>
    isTutorialVisibleInCurriculum(tutorial),
  );

  if (selectedPathway.value) {
    tutorials = tutorials.filter((tutorial) =>
      tutorial.pathways.includes(selectedPathway.value),
    );
  }

  if (activeType.value !== "all") {
    if (activeType.value === "project") {
      tutorials = tutorials.filter((tutorial) => tutorial.isProject);
    } else if (activeType.value === "troubleshooting") {
      tutorials = tutorials.filter(
        (tutorial) => tutorial.badge === "Troubleshooting",
      );
    } else if (activeType.value === "foundation") {
      tutorials = tutorials.filter(
        (tutorial) => tutorial.level === "foundation",
      );
    } else {
      tutorials = tutorials.filter(
        (tutorial) =>
          tutorial.topic === activeType.value ||
          tutorial.tags.includes(activeType.value),
      );
    }
  }

  if (searchQuery.value.trim()) {
    const query = searchQuery.value.trim().toLowerCase();
    tutorials = tutorials.filter((tutorial) =>
      [
        tutorial.title,
        tutorial.summary,
        tutorial.levelTitle,
        ...(tutorial.tags || []),
      ]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(query)),
    );
  }

  return tutorials.sort(
    (firstTutorial, secondTutorial) =>
      firstTutorial.stage - secondTutorial.stage,
  );
});

function tutorialsByLevel(levelId) {
  const tutorialsForLevel = visibleTutorials.value.filter(
    (tutorial) => tutorial.level === levelId,
  );

  if (levelId === "foundation") {
    return tutorialsForLevel;
  }

  return tutorialsForLevel.filter(
    (tutorial) =>
      tutorial.lessonCount ||
      tutorial.isProject ||
      tutorial.badge === "Recommended next" ||
      tutorial.badge === "Troubleshooting",
  );
}

function selectPathway(id) {
  selectedPathway.value = selectedPathway.value === id ? null : id;
}

function clearPathway() {
  selectedPathway.value = null;
}

function setActiveType(id) {
  activeType.value = id;
}
</script>

<style scoped>
.tutorials-page {
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  padding: 1.5rem clamp(1rem, 3vw, 2rem) 3rem;
  background: var(--color-white);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.tutorials-hero {
  padding: 1.5rem 0 2.25rem;
  text-align: center;
}

.tutorials-hero h1,
.tutorials-section h2,
.curriculum-roadmap h2 {
  font-family: var(--font-heading);
  font-weight: var(--weight-bold);
  color: var(--fg-default);
}

.tutorials-hero h1 {
  font-size: 2rem;
}

.tutorials-hero p {
  max-width: 42rem;
  margin: 0.75rem auto 0;
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--fg-muted);
}

.tutorials-hero__actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.tutorials-section {
  margin-bottom: 2rem;
}

.tutorials-section h2,
.curriculum-roadmap h2 {
  margin-bottom: 1rem;
  font-size: 1.375rem;
}

.pathway-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.875rem;
}

.tutorial-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 1.5rem 0 2rem;
}

.tutorial-search {
  margin-left: auto;
  width: min(100%, 220px);
  padding: 0.5rem 0.875rem;
  border: 1px solid var(--border-default);
  border-radius: var(--radius-full);
  background: var(--color-white);
  font-size: 0.8125rem;
  color: var(--fg-default);
}

.tutorial-search:focus {
  outline: 2px solid rgba(67, 56, 202, 0.14);
  outline-offset: 1px;
}

.curriculum-roadmap {
  margin-bottom: 2.5rem;
}

.tutorials-empty {
  padding: 2rem 0;
  text-align: center;
  color: var(--fg-subtle);
}

.tutorials-faq {
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .tutorials-page {
    margin-top: 1rem;
    padding: 1.25rem 1rem 2.5rem;
    border-radius: var(--radius-md);
  }

  .tutorial-search {
    margin-left: 0;
    width: 100%;
  }
}

</style>
