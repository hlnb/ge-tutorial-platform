<template>
  <div class="menu tutorial-nav">
    <h2 class="nav-title">
      <i class="fas fa-layer-group frameworks-icon"></i> Frameworks 101
    </h2>
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
          {{ item.title }}<span class="soon-badge">Coming Soon</span>
        </span>

        <div v-if="isActive(item.path) && hasPageSections" class="page-sections">
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
                    :class="isSubsectionOpen(section.id) ? 'fa-chevron-up' : 'fa-chevron-down'"
                  ></i>
                </span>
              </div>
              <ul
                v-if="section.subsections && section.subsections.length"
                :style="{ display: isSubsectionOpen(section.id) ? 'block' : 'none' }"
                class="subsection-list"
              >
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
      <router-link to="/tutorials" class="nav-button">
        <i class="fas fa-arrow-left"></i> All Tutorials
      </router-link>
      <router-link to="/my-progress" class="nav-button">
        <i class="fas fa-chart-line"></i> My Progress
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePageNavigation } from '@/composables/usePageNavigation';
import { getSectionNavItems } from '@/data/tutorials';

const route = useRoute();
const { pageSections, hasPageSections } = usePageNavigation();
const navItems = getSectionNavItems('frameworks-101');
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

.frameworks-icon {
  color: #5b6ef5;
  margin-right: 0.4rem;
}

.tutorial-nav {
  --tutorial-accent: #5b6ef5;
}
</style>
