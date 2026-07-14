<template>
  <aside class="menu tutorial-nav module-nav">
    <h2 class="nav-title">
      <i class="fas fa-rocket deployments-icon"></i> Deployments
    </h2>
    <ul class="menu-list">
      <li v-for="(item, index) in navItems" :key="item.path">
        <router-link
          :to="item.path"
          :class="{
            'is-active': isActive(item.path),
            'is-next': isNextTutorial(index),
          }"
        >
          {{ item.title }}
        </router-link>

        <div
          v-if="isActive(item.path) && hasPageSections"
          class="page-sections"
        >
          <div class="page-sections-header">
            <h4 class="section-title">On This Page</h4>
            <span class="icon"><i class="fas fa-list-ul"></i></span>
          </div>
          <ul class="menu-list page-sections-list">
            <li v-for="section in pageSections" :key="section.id">
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
      <router-link to="/my-progress" class="nav-button">
        <i class="fas fa-chart-line"></i> My Progress
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePageNavigation } from '@/composables/usePageNavigation';
import { getSectionNavItems } from '@/data/tutorials';

const route = useRoute();
const { pageSections, hasPageSections } = usePageNavigation();
const navItems = getSectionNavItems('deployments', {
  includeOverview: false,
  includeSectionNavHidden: true,
});
const currentIndex = computed(() =>
  navItems.findIndex((item) => item.path === route.path),
);
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

function isNextTutorial(index) {
  return index === currentIndex.value + 1;
}
</script>

<style scoped>
@import './nav.css';

.module-nav {
  width: 220px;
}
/* Deployments accent (green) */
.tutorial-nav {
  --tutorial-accent: #2ecc71;
}

.deployments-icon {
  color: #2ecc71;
  margin-right: 0.4rem;
}
</style>
