<template>
  <div class="menu tutorial-nav">
    <h2 class="nav-title">
      <i class="fas fa-universal-access accessibility-icon"></i> Accessibility Essentials
    </h2>
    <ul class="menu-list">
      <li v-for="(item, index) in navItems" :key="item.path">
        <router-link
          v-if="!item.comingSoon"
          :to="item.path"
          :class="{
            'is-active': isActive(item.path),
            'is-next': isNextTutorial(index),
          }"
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
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { usePageNavigation } from "@/composables/usePageNavigation";
import { getSectionNavItems } from "@/data/tutorials";

const route = useRoute();
const { pageSections, hasPageSections } = usePageNavigation();

const navItems = getSectionNavItems("accessibility-essentials", {
  includeOverview: false,
});
const openSubsections = ref({});

const currentIndex = computed(() =>
  navItems.findIndex((tutorial) => isActive(tutorial.path)),
);

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
@import "./nav.css";

.accessibility-icon {
  color: #4f8f7b;
  margin-right: 0.4rem;
}

.tutorial-nav {
  --tutorial-accent: #4f8f7b;
}
</style>
