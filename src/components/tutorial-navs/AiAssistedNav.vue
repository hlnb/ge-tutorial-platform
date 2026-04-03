<template>
  <aside class="menu tutorial-nav module-nav">
    <p class="menu-label">AI-Assisted</p>
    <ul class="menu-list">
      <li v-for="(item, index) in navItems" :key="item.path">
        <router-link
          :to="item.path"
          :class="{ 'is-active': isActive(item.path), 'is-next': isNextTutorial(index) }"
        >
          {{ item.title }}
        </router-link>
      </li>
      <li class="mt-3"><strong>Projects</strong>
        <ul>
          <li><router-link :to="'/projects/'">AI Landing Page</router-link></li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { getSectionNavItems } from '@/data/tutorials';

const route = useRoute();
const navItems = getSectionNavItems('ai-assisted', { includeOverview: false });
const currentIndex = computed(() => navItems.findIndex((item) => item.path === route.path));

function isActive(path) {
  return route.path === path;
}

function isNextTutorial(index) {
  return index === currentIndex.value + 1;
}
</script>

<style scoped>
@import './nav.css';

.module-nav { width: 220px; }
/* AI accent (indigo) */
.tutorial-nav { --tutorial-accent: #5b21b6; }
</style>
