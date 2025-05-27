<template>
  <div class="menu tutorial-nav">
    <h2 class="nav-title">
      <i class="fas fa-sitemap fa-rotate-270 dom-icon"></i>
      DOM Basics
    </h2>

    <!-- Main Tutorial Navigation -->
    <ul class="menu-list">
      <li v-for="(item, index) in navItems" :key="index">
        <router-link
          v-if="!item.comingSoon"
          :to="item.path"
          :class="{ 'is-active': isActive(item.path) }"
        >
          {{ item.title }}
        </router-link>
        <span v-else class="nav-link disabled">
          {{ item.title }}
          <span class="soon-badge">Coming Soon</span>
        </span>

        <!-- On this page navigation - only shown under the active page -->
        <div
          v-if="isActive(item.path) && hasPageSections"
          class="page-sections"
        >
          <div class="page-sections-header">
            <h4 class="section-title">On This Page</h4>
            <span class="icon">
              <i class="fas fa-list-ul"></i>
            </span>
          </div>
          <ul class="menu-list page-sections-list">
            <li v-for="section in pageSections" :key="section.id">
              <!-- Topic section header -->
              <div class="section-header">
                <a :href="`#${section.id}`">{{ section.title }}</a>
                <span
                  v-if="section.subsections && section.subsections.length"
                  class="icon toggle-icon"
                  @click="toggleSubsection(section.id)"
                >
                  <i
                    class="fas"
                    :class="
                      isSubsectionOpen(section.id)
                        ? 'fa-chevron-up'
                        : 'fa-chevron-down'
                    "
                  ></i>
                </span>
              </div>

              <!-- Subsections -->
              <ul
                v-if="section.subsections && section.subsections.length"
                :style="{
                  display: isSubsectionOpen(section.id) ? 'block' : 'none',
                }"
                class="subsection-list"
              >
                <li
                  v-for="subsection in section.subsections"
                  :key="subsection.id"
                >
                  <a :href="`#${subsection.id}`">{{ subsection.title }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </li>
    </ul>

    <div class="sidebar-footer">
      <router-link to="/tutorials" class="nav-button">
        <i class="fas fa-arrow-left"></i> All Tutorials
      </router-link>
      <router-link to="/progress" class="nav-button">
        <i class="fas fa-chart-line"></i> My Progress
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePageNavigation } from '@/composables/usePageNavigation';

interface NavItem {
  path: string;
  title: string;
  comingSoon?: boolean;
}

const route = useRoute();
const isMainExpanded = ref(true);
const expandedSections = ref(new Set());
const { pageSections, hasPageSections } = usePageNavigation();

// Inject pageSections from the current tutorial
const pageSectionsInject = inject('pageSections', ref([]));

// Navigation items
const navItems: NavItem[] = [
  {
    path: '/tutorials/dom-basics',
    title: 'Overview',
  },
  {
    path: '/tutorials/dom-basics/introduction',
    title: 'Introduction',
  },
  {
    path: '/tutorials/dom-basics/arrays',
    title: 'Arrays and Methods',
  },
  {
    path: '/tutorials/dom-basics/dom-manipulation',
    title: 'DOM Manipulation',
  },
  {
    path: '/tutorials/dom-basics/dom-events',
    title: 'Event Handling'
  },
];

const currentIndex = computed(() =>
  navItems.findIndex((item) => isCurrentPath(item.path))
);

const isAnyTutorialActive = computed(() =>
  navItems.some((item) => isCurrentPath(item.path))
);

function isCurrentPath(path) {
  return route.path === path;
}

function isNextTutorial(index) {
  return index === currentIndex.value + 1;
}

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

// Initialize all sections as expanded
onMounted(() => {
  pageSectionsInject.value.forEach((section) => {
    if (section.subsections?.length) {
      expandedSections.value.add(section.id);
    }
  });
});
</script>

export default {};
<style scoped>
.tutorial-nav {
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
}

.nav-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e9ecef;
  display: flex;
  align-items: center;
}

.dom-icon {
  color: #ffd43b;
  margin-right: 0.5rem;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-list a {
  display: block;
  padding: 0.75rem 1rem;
  color: #495057;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s ease;
  margin-bottom: 0.5rem;
}

.menu-list a:hover:not(.disabled) {
  background-color: #e9ecef;
  color: #2c3e50;
}

.menu-list a.is-active {
  background-color: #ffd43b;
  color: #000;
  font-weight: 500;
}

.disabled {
  color: #adb5bd;
  cursor: not-allowed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
}

.soon-badge {
  font-size: 0.75rem;
  padding: 0.2rem 0.4rem;
  background-color: #e9ecef;
  border-radius: 4px;
  color: #6c757d;
}

/* Page Sections Styling */
.page-sections {
  margin: 0.5rem 0 1rem 1rem;
  padding: 1rem;
  background-color: #ffffff;
  border-left: 2px solid #e9ecef;
  border-radius: 4px;
}

.page-sections-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.page-sections-list {
  max-height: 300px;
  overflow-y: auto;
  padding-right: 5px;
}

.page-sections-list::-webkit-scrollbar {
  width: 6px;
}

.page-sections-list::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.page-sections-list::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.page-sections-list::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
}

.section-header:hover {
  background-color: #f8f9fa;
  border-radius: 4px;
}

.section-header a {
  padding: 0 !important;
  margin: 0 !important;
  flex: 1;
}

.toggle-icon {
  cursor: pointer;
  padding: 0.25rem;
}

.subsection-list {
  margin-left: 1.5rem !important;
  border-left: 1px solid #e9ecef;
  list-style: none;
  padding: 0;
}

.subsection-list a {
  font-size: 0.85rem;
  padding: 0.4rem 0.75rem !important;
}

/* Icon transitions */
.icon i {
  transition: transform 0.3s ease;
}

.icon i.fa-chevron-up {
  transform: rotate(180deg);
}

/* Sidebar footer */
.sidebar-footer {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
}

.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  color: #495057;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nav-button:hover {
  background-color: #f8f9fa;
  color: #2c3e50;
}

.nav-button i {
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .tutorial-nav {
    margin-bottom: 1rem;
  }
  
  .page-sections {
    margin-left: 0.5rem;
    max-height: 200px;
  }
  
  .nav-button {
    font-size: 0.9rem;
  }
}
</style>
