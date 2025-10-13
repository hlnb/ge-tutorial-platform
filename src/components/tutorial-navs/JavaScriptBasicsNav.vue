<template>
  <div class="tutorial-nav">
    <h3 class="title is-5">
      <span class="js-logo-container">
       <i class="fa-brands fa-js js-logo"></i>
      </span>
      JavaScript Basics
    </h3>
    <aside class="menu tutorial-nav">
      <ul class="menu-list">
        <li v-for="item in navItems" :key="item.path">
          <router-link :to="item.path" :class="{ 'is-active': isActive(item.path) }">
            <i :class="['fas', item.icon]"></i> {{ item.title }}
          </router-link>
          <div v-if="isActive(item.path) && hasPageSections" class="page-sections mt-2">
            <div class="page-sections-header">
              <h4 class="title is-6">On This Page</h4>
              <span class="icon"><i class="fas fa-chevron-up"></i></span>
            </div>
            <ul class="menu-list page-sections-list">
              <li v-for="section in pageSections" :key="section.id">
                <div class="section-header">
                  <a :href="`#${section.id}`" @click="scrollToSection(section.id)">{{ section.title }}</a>
                  <span v-if="section.subsections && section.subsections.length" class="icon toggle-icon" @click="toggleSubsection(section.id)">
                    <i class="fas" :class="isSubsectionOpen(section.id) ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                  </span>
                </div>
                <ul v-if="section.subsections && section.subsections.length" :style="{ display: isSubsectionOpen(section.id) ? 'block' : 'none' }">
                  <li v-for="subsection in section.subsections" :key="subsection.id">
                    <a :href="`#${subsection.id}`" @click="scrollToSection(subsection.id)">{{ subsection.title }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="sidebar-footer">
        <router-link to="/tutorials" class="button is-small is-fullwidth"><i class="fas fa-arrow-left"></i> All Tutorials</router-link>
        <router-link to="/progress" class="button is-small is-fullwidth mt-2"><i class="fas fa-chart-line"></i> My Progress</router-link>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePageNavigation } from '@/composables/usePageNavigation';

const route = useRoute();
const isMainExpanded = ref(true);
const expandedSections = ref(new Set());
const { pageSections, hasPageSections } = usePageNavigation();
const pageSectionsInject = inject('pageSections', ref([]));

const navItems = [
  { path: '/tutorials/javascript-basics/', title: 'Overview', icon: 'fa-home' },
  { path: '/tutorials/javascript-basics/introduction', title: 'Getting  Started', icon: 'fa-flag' },
  { path: '/tutorials/javascript-basics/variables-data-types', title: 'Variables & Data Types', icon: 'fa-cube' },
  { path: '/tutorials/javascript-basics/operators', title: 'Operators & Expressions', icon: 'fa-calculator' },
  { path: '/tutorials/javascript-basics/conditionals', title: 'Control Flow', icon: 'fa-code-branch' },
  { path: '/tutorials/javascript-basics/loops', title: 'Loops', icon: 'fa-sync' },
  { path: '/tutorials/javascript-basics/functions', title: 'Functions', icon: 'fa-cogs' },
];

function isCurrentPath(path) { return route.path === path; }
function isActive(path) { return route.path === path; }
const openSubsections = ref({});
function toggleSubsection(id) { openSubsections.value[id] = !openSubsections.value[id]; }
function isSubsectionOpen(id) { return !!openSubsections.value[id]; }
function scrollToSection(id) { const element = document.getElementById(id); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }
</script>

<script>
export default {};
</script>

<style scoped>
@import './nav.css';

/* JavaScript yellow — use accent and darker icon stroke */
.js-logo-container { margin-right: 0.5rem; }
.js-logo { color: #f7df1e; 
  font-size: 1.5rem;
background-color: #000;
  padding: 0.2rem 0.3rem;
  border-radius: 0.1rem;
}
.tutorial-nav {
  --tutorial-accent: #f7df1e;
  /* darker variants for hover/active states */
  --tutorial-accent-hover: #d6c515;
  --tutorial-accent-hover-active: #c9b00f;
}

/* Base icon color and smooth transitions */
.tutorial-nav i { color: #323330; transition: color .12s ease; }

/* Link transition for hover/active feedback */
.tutorial-nav .menu-list a {
  transition: background-color .12s ease, color .12s ease, box-shadow .12s ease;
}

/* Active state: keep dark text for contrast */
.tutorial-nav .menu-list a.is-active {
  background-color: var(--tutorial-accent);
  color: #1b1b1b;
}
.tutorial-nav .menu-list a.is-active i { color: #1b1b1b; }

/* Hover and focus: slightly darken the accent and add depth */
.tutorial-nav .menu-list a:hover,
.tutorial-nav .menu-list a:focus {
  background-color: var(--tutorial-accent-hover);
  color: #0f0f0f;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}
.tutorial-nav .menu-list a:hover i,
.tutorial-nav .menu-list a:focus i { color: #0f0f0f; }

/* Active + hover: make a slightly stronger darkening so the active item still reads */
.tutorial-nav .menu-list a.is-active:hover {
  background-color: var(--tutorial-accent-hover-active);
  color: #0d0d0d;
}

/* Keyboard focus visible for accessibility */
.tutorial-nav .menu-list a:focus-visible {
  outline: 3px solid rgba(0,0,0,0.12);
  outline-offset: 2px;
}

.tutorial-nav .menu-list a.is-next { border-left-color: var(--tutorial-accent); }
</style>
