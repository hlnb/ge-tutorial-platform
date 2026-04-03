<template>
  <router-view v-if="!isMainProjectsPage" />

  <div v-else class="projects-page container section">
    <section class="projects-hero">
      <h1 class="title is-1">Projects by pathway</h1>
      <p class="subtitle is-4">
        Use guided, reference, and practice projects to apply the curriculum in real builds.
      </p>

      <div class="notification is-info is-light">
        <p>
          <strong>Pathway-first learning:</strong> the projects area now follows the same
          curriculum structure as the tutorial system, so learners can move between lessons,
          reference builds, and practice projects without losing context.
        </p>
      </div>
    </section>

    <section
      v-for="group in pathwayGroups"
      :key="group.id"
      class="project-category"
    >
      <h2 class="title is-2">
        <i :class="group.icon"></i> {{ group.title }}
      </h2>
      <p class="subtitle is-5">{{ group.description }}</p>

      <div class="project-grid">
        <ProjectCard
          v-for="project in group.projects"
          :key="project.slug"
          :project="project"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ProjectCard from '@/components/projects/ProjectCard.vue';
import { getPathwayProjectGroups } from '@/data/projects';

const route = useRoute();

const isMainProjectsPage = computed(() => {
  return route.path === '/projects' || route.path === '/projects/';
});

const pathwayGroups = computed(() =>
  getPathwayProjectGroups().filter((group) => group.projects.length > 0),
);
</script>

<style scoped>
.projects-hero {
  margin-bottom: 3rem;
}

.project-category + .project-category {
  margin-top: 3rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
</style>
