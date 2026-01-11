<template>
  <div class="menu tutorial-nav">
    <h2 class="title is-3">
      <i class="fa-brands fa-css css-icon"></i>
      CSS Basics
    </h2>

    <!-- Main Tutorial Navigation -->
    <ul class="menu-list">
      <li v-for="(item, index) in navItems" :key="index">
        <router-link
          :to="item.path"
          :class="{
            'is-active': isActive(item.path),
            'is-next': isNextTutorial(index),
          }"
        >
          <span class="nav-item">
            <i v-if="item.icon" :class="item.icon + ' nav-icon'"></i>
            <span>{{ item.title }}</span>
          </span>
        </router-link>

        <!-- On this page navigation - only shown under the active page -->
        <div v-if="isActive(item.path) && hasPageSections" class="page-sections mt-2">
          <div class="page-sections-header">
            <h4 class="title is-6">On This Page</h4>
            <span class="icon">
              <i class="fas fa-chevron-up"></i>
            </span>
          </div>
          <ul class="menu-list page-sections-list">
            <li v-for="section in pageSections" :key="section.id">
              <!-- Topic section header -->
              <div class="section-header">
                <a :href="`#${section.id}`">{{ section.title }}</a>
                <span v-if="section.subsections && section.subsections.length" class="icon toggle-icon" @click="toggleSubsection(section.id)">
                  <i class="fas" :class="isSubsectionOpen(section.id) ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                </span>
              </div>

              <!-- Subsections -->
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
      <router-link to="/my-progress" class="button is-small is-fullwidth mt-2">
        <i class="fas fa-chart-line"></i> My Progress
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePageNavigation } from '@/composables/usePageNavigation';

const route = useRoute();
const { pageSections, hasPageSections } = usePageNavigation();

 
const isMainExpanded = ref(true);
 
const expandedSections = ref(new Set()); // Track expanded sections

// Single source of truth for navigation items
const navItems = [
  { path: '/tutorials/beginner/css-basics/', title: 'Overview', icon: 'fas fa-home' },
  { path: '/tutorials/beginner/css-basics/introduction', title: 'Introduction to CSS', icon: 'fas fa-info-circle' },
  { path: '/tutorials/beginner/css-basics/selectors', title: 'CSS Selectors', icon: 'fas fa-mouse-pointer' },
  { path: '/tutorials/beginner/css-basics/box-model', title: 'The Box Model', icon: 'fas fa-th' },
  { path: '/tutorials/beginner/css-basics/text', title: 'Typography & Text', icon: 'fas fa-font' },
  { path: '/tutorials/beginner/css-basics/layout', title: 'Layout Basics' },
  { path: '/tutorials/beginner/css-basics/colors', title: 'Working with Colors' },
  { path: '/tutorials/beginner/css-basics/modern', title: 'Modern CSS' },
  { path: '/tutorials/beginner/css-basics/responsive', title: 'Responsive Design' },
  { path: '/tutorials/beginner/css-basics/flexbox', title: 'Flexbox' },
];

// The following computed values and helpers are present for future
// functionality and are intentionally unused at the moment. Silence
// ESLint for them to keep the code readable.
 
const currentIndex = computed(() => navItems.findIndex((item) => isCurrentPath(item.path)));

/* eslint-disable-next-line no-unused-vars */
const isAnyTutorialActive = computed(() => navItems.some((item) => isCurrentPath(item.path)));

function isCurrentPath(path) {
  return route.path === path;
}

function isNextTutorial(index) {
  return index === currentIndex.value + 1;
}

/* eslint-disable-next-line no-unused-vars */
function toggleMainNav() {
  isMainExpanded.value = !isMainExpanded.value;
}

/* eslint-disable-next-line no-unused-vars */
function toggleSection(sectionId) {
  if (expandedSections.value.has(sectionId)) {
    expandedSections.value.delete(sectionId);
  } else {
    expandedSections.value.add(sectionId);
  }
}

/* eslint-disable-next-line no-unused-vars */
function isExpanded(sectionId) {
  return expandedSections.value.has(sectionId);
}

// Initialize all sections as expanded
onMounted(() => {
  pageSections.value.forEach((section) => {
    if (section.subsections?.length) {
      expandedSections.value.add(section.id);
    }
  });
});

// Track which subsections are open
const openSubsections = ref({});

// Toggle subsection visibility
function toggleSubsection(id) {
  openSubsections.value[id] = !openSubsections.value[id];
}

// Check if subsection is open
function isSubsectionOpen(id) {
  return !!openSubsections.value[id];
}

// Check if a path is active
function isActive(path) {
  return route.path === path;
}
</script>

<script>
export default {};
</script>

<style scoped>
@import './nav.css';

/* Per-nav overrides: set accent color to match CSS logo */
.css-icon {
  margin-right: 0.5rem;
  color: #673399; /* CSS logo blue */
}

.tutorial-nav {
  /* set the accent color for this nav */
  --tutorial-accent: #673399;
}
</style>
