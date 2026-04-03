<template>
  <div class="menu tutorial-nav project-nav">
    <h2 class="title is-4">
      <i class="fas fa-diagram-project nav-header-icon"></i>
      Project Guide
    </h2>

    <p v-if="currentProject" class="project-nav__summary">
      {{ currentProject.summary }}
    </p>

    <div v-if="hasPageSections" class="project-nav__group">
      <p class="menu-label">On This Page</p>
      <ul class="menu-list page-sections-list">
        <li v-for="section in pageSections" :key="section.id">
          <a :href="`#${section.id}`">{{ section.title }}</a>
        </li>
      </ul>
    </div>

    <div v-if="pathwayProjects.length" class="project-nav__group">
      <p class="menu-label">Pathway Projects</p>
      <ul class="menu-list">
        <li v-for="project in pathwayProjects" :key="project.slug">
          <router-link
            :to="project.path"
            :class="{ 'is-active': project.path === currentPath }"
          >
            {{ project.title }}
          </router-link>
        </li>
      </ul>
    </div>

    <div v-if="relatedTutorials.length" class="project-nav__group">
      <p class="menu-label">Related Tutorials</p>
      <ul class="menu-list">
        <li v-for="tutorial in relatedTutorials" :key="tutorial.slug">
          <router-link :to="`/tutorials/${tutorial.slug}`">
            {{ tutorial.title }}
          </router-link>
        </li>
      </ul>
    </div>

    <div class="sidebar-footer">
      <router-link to="/projects" class="button is-small is-fullwidth">
        <i class="fas fa-arrow-left"></i> All Projects
      </router-link>
      <router-link to="/tutorials" class="button is-small is-fullwidth mt-2">
        <i class="fas fa-map"></i> Pathways
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePageNavigation } from '@/composables/usePageNavigation';
import {
  getProjectByPath,
  getProjectsByPathway,
  getRelatedTutorialsForProject,
} from '@/data/projects';

const { currentPath, pageSections, hasPageSections } = usePageNavigation();

const currentProject = computed(() => getProjectByPath(currentPath.value));

const pathwayProjects = computed(() => {
  if (!currentProject.value?.primaryPathway) return [];
  return getProjectsByPathway(currentProject.value.primaryPathway);
});

const relatedTutorials = computed(() => {
  if (!currentProject.value) return [];
  return getRelatedTutorialsForProject(currentProject.value);
});
</script>

<style scoped>
@import '../tutorial-navs/nav.css';

.project-nav {
  --tutorial-accent: #4b88a2;
}

.nav-header-icon {
  margin-right: 0.5rem;
  color: var(--tutorial-accent);
}

.project-nav__summary {
  color: #4a4a4a;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-nav__group + .project-nav__group {
  margin-top: 1.25rem;
}
</style>
