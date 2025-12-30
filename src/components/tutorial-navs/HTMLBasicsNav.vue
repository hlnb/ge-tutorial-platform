<template>
  <div class="menu tutorial-nav">
    <h2 class="title is-3">
      <i class="fa-brands fa-html5 html-icon"></i> HTML Basics
    </h2>
    <ul class="menu-list">
      <li v-for="(tutorial, index) in tutorials" :key="index">
        <router-link
          :to="tutorial.path"
          :class="{
            'is-active': isCurrentPath(tutorial.path),
            'is-next': isNextTutorial(index),
          }"
        >
          <span class="nav-item">
            <i v-if="tutorial.icon" :class="tutorial.icon + ' nav-icon'"></i>
            <span>{{ tutorial.title }}</span>
          </span>
        </router-link>
        <div v-if="isActive(tutorial.path) && hasPageSections" class="page-sections mt-2">
          <div class="page-sections-header">
            <h4 class="title is-6">On This Page</h4>
            <span class="icon">
              <i class="fas fa-chevron-up"></i>
            </span>
          </div>
          <ul class="menu-list page-sections-list">
            <li v-for="section in pageSections" :key="section.id">
              <div class="section-header">
                <a :href="`#${section.id}`">{{ section.title }}</a>
                <span v-if="section.subsections && section.subsections.length" class="icon toggle-icon" @click="toggleSubsection(section.id)">
                  <i class="fas" :class="isSubsectionOpen(section.id) ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                </span>
              </div>
              <ul v-if="section.subsections && section.subsections.length" :style="{ display: isSubsectionOpen(section.id) ? 'block' : 'none' }">
                <li v-for="subsection in section.subsections" :key="subsection.id">
                  <a :href="`#${subsection.id}`">{{ subsection.title }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="sidebar-footer">
      <router-link to="/tutorials" class="button is-small is-fullwidth">
        <i class="fas fa-arrow-left"></i> All Tutorials
      </router-link>
      <router-link to="/progress" class="button is-small is-fullwidth mt-2">
        <i class="fas fa-chart-line"></i> My Progress
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePageNavigation } from '@/composables/usePageNavigation';

const route = useRoute();
const expandedSections = ref(new Set()); // Track expanded sections
const { pageSections, hasPageSections } = usePageNavigation();

// Inject pageSections from the current tutorial
const pageSectionsInject = inject('pageSections', ref([]));

const tutorials = [
  { path: '/tutorials/beginner/html-basics/introduction', title: 'Introduction', icon: 'fab fa-html5' },
  { path: '/tutorials/beginner/html-basics/first-page', title: 'Your First HTML Page', icon: 'fas fa-file-code' },
  { path: '/tutorials/beginner/html-basics/text', title: 'Working with Text' },
  { path: '/tutorials/beginner/html-basics/links', title: 'Links & Navigation' },
  { path: '/tutorials/beginner/html-basics/images', title: 'Images' },
  { path: '/tutorials/beginner/html-basics/doc-structure', title: 'Document Structure' },
  { path: '/tutorials/beginner/html-basics/forms', title: 'Forms' },
  { path: '/tutorials/beginner/html-basics/html-emmet', title: 'HTML Emmet' },
];

const currentIndex = computed(() => tutorials.findIndex((tutorial) => isCurrentPath(tutorial.path)));

function isCurrentPath(path) {
  return route.path === path;
}

function isNextTutorial(index) {
  return index === currentIndex.value + 1;
}

// (toggle helpers removed - not used in this nav component)

// Initialize all sections as expanded
onMounted(() => {
  pageSectionsInject.value.forEach((section) => {
    if (section.subsections?.length) {
      expandedSections.value.add(section.id);
    }
  });
});

const openSubsections = ref({});

function toggleSubsection(id) {
  openSubsections.value[id] = !openSubsections.value[id];
}

function isSubsectionOpen(id) {
  return !!openSubsections.value[id];
}

function isActive(path) {
  return route.path === path;
}
</script>

<style scoped>
@import './nav.css';

/* HTML logo orange */
.html-icon { margin-right: 0.5rem; color: #e34f26; }
.tutorial-nav { --tutorial-accent: #e34f26; }
</style>
