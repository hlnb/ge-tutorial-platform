<template>
  <div class="menu tutorial-nav">
    <h2 class="nav-title">
      <i class="fas fa-gauge-high performance-icon"></i>
      Website Performance &amp; Optimisation
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

        <div v-if="isActive(item.path) && hasPageSections" class="page-sections">
          <div class="page-sections-header">
            <h4 class="section-title">On This Page</h4>
            <span class="icon" aria-hidden="true"><i class="fas fa-list-ul"></i></span>
          </div>

          <ul class="menu-list page-sections-list">
            <li v-for="section in pageSections" :key="section.id">
              <a :href="`#${section.id}`">{{ section.title }}</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>

    <div class="sidebar-footer">
      <router-link to="/tutorials" class="button is-small is-fullwidth">
        <i class="fas fa-arrow-left"></i> All Tutorials
      </router-link>
      <router-link to="/my-progress" class="button is-small is-fullwidth">
        <i class="fas fa-chart-line"></i> My Progress
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { usePageNavigation } from "@/composables/usePageNavigation";
import { getSectionNavItems } from "@/data/tutorials";

const route = useRoute();
const { pageSections, hasPageSections } = usePageNavigation();

const navItems = getSectionNavItems("website-performance-optimisation", {
  includeOverview: false,
});

const currentIndex = computed(() =>
  navItems.findIndex((item) => isActive(item.path)),
);

function isActive(path) {
  return route.path === path;
}

function isNextTutorial(index) {
  return index === currentIndex.value + 1;
}
</script>

<style scoped>
@import "./nav.css";

.performance-icon {
  color: #b45309;
  margin-right: 0.4rem;
}

.tutorial-nav {
  --tutorial-accent: #b45309;
}
</style>
