<template>
  <div class="menu tutorial-nav">
    <h2 class="nav-title">
      <i class="fas fa-sitemap fa-rotate-270 dom-icon"></i>
      DOM Basics
    </h2>
    <ul class="menu-list">
      <li v-for="(item, index) in navItems" :key="index">
        <router-link v-if="!item.comingSoon" :to="item.path" :class="{ 'is-active': isActive(item.path) }">
          <span class="nav-item">
            <i v-if="item.icon" :class="item.icon + ' nav-icon'"></i>
            <span>{{ item.title }}</span>
          </span>
        </router-link>
        <span v-else class="nav-link disabled">{{ item.title }}<span class="soon-badge">Coming Soon</span></span>
        <div v-if="isActive(item.path) && hasPageSections" class="page-sections">
          <div class="page-sections-header">
            <h4 class="section-title">On This Page</h4>
            <span class="icon"><i class="fas fa-list-ul"></i></span>
          </div>
          <ul class="menu-list page-sections-list">
            <li v-for="section in pageSections" :key="section.id">
              <div class="section-header">
                <a :href="`#${section.id}`">{{ section.title }}</a>
                <span v-if="section.subsections && section.subsections.length" class="icon toggle-icon" @click="toggleSubsection(section.id)">
                  <i class="fas" :class="isSubsectionOpen(section.id) ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                </span>
              </div>
              <ul v-if="section.subsections && section.subsections.length" :style="{ display: isSubsectionOpen(section.id) ? 'block' : 'none' }" class="subsection-list">
                <li v-for="subsection in section.subsections" :key="subsection.id"><a :href="`#${subsection.id}`">{{ subsection.title }}</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="sidebar-footer">
      <router-link to="/tutorials" class="nav-button"><i class="fas fa-arrow-left"></i> All Tutorials</router-link>
      <router-link to="/progress" class="nav-button"><i class="fas fa-chart-line"></i> My Progress</router-link>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { ref, computed, inject, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePageNavigation } from '@/composables/usePageNavigation';

const route = useRoute();
const isMainExpanded = ref(true);
const expandedSections = ref(new Set());
const { pageSections, hasPageSections } = usePageNavigation();
const pageSectionsInject = inject('pageSections', ref([]));

const navItems = [
  { path: '/tutorials/dom-basics', title: 'Overview' },
  { path: '/tutorials/dom-basics/introduction', title: 'Introduction' },
  { path: '/tutorials/dom-basics/arrays', title: 'Arrays and Methods', icon: 'fas fa-list-ol' },
  { path: '/tutorials/dom-basics/dom-manipulation', title: 'DOM Manipulation', icon: 'fas fa-code' },
  { path: '/tutorials/dom-basics/dom-events', title: 'Event Handling', icon: 'fas fa-bolt' },
];

const currentIndex = computed(() => navItems.findIndex((item) => isCurrentPath(item.path)));

function isCurrentPath(path) { return route.path === path; }
function isNextTutorial(index) { return index === currentIndex.value + 1; }
const openSubsections = ref({});
function toggleSubsection(id) { openSubsections.value[id] = !openSubsections.value[id]; }
function isSubsectionOpen(id) { return !!openSubsections.value[id]; }
function isActive(path) { return route.path === path; }

onMounted(() => {
  pageSectionsInject.value.forEach((section) => { if (section.subsections?.length) { expandedSections.value.add(section.id); } });
});
</script>

<script>
export default {};
</script>

<style scoped>
@import './nav.css';

/* DOM accent (purple) */
.dom-icon { color: #6f42c1; margin-right: 0.4rem; }
.tutorial-nav { --tutorial-accent: #6f42c1; }
</style>
