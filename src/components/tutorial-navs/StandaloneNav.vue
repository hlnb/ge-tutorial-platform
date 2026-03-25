<template>
  <div class="menu tutorial-nav">
    <h2 class="title is-4">
      <i class="fas fa-bookmark nav-header-icon"></i>
      On This Page
    </h2>

    <ul v-if="hasPageSections" class="menu-list page-sections-list">
      <li v-for="section in pageSections" :key="section.id">
        <div class="section-header">
          <a :href="`#${section.id}`">{{ section.title }}</a>
          <span
            v-if="section.subsections && section.subsections.length"
            class="icon toggle-icon"
            @click="toggleSubsection(section.id)"
          >
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
import { ref } from 'vue';
import { usePageNavigation } from '@/composables/usePageNavigation';

const { pageSections, hasPageSections } = usePageNavigation();

const openSubsections = ref({});

function toggleSubsection(id) {
  openSubsections.value[id] = !openSubsections.value[id];
}

function isSubsectionOpen(id) {
  return !!openSubsections.value[id];
}
</script>

<style scoped>
@import './nav.css';

.nav-header-icon {
  margin-right: 0.5rem;
  color: #3273dc;
}

.tutorial-nav {
  --tutorial-accent: #3273dc;
}
</style>
