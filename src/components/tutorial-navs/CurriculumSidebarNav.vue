<template>
  <nav class="menu tutorial-nav" :aria-label="navigation.title">
    <h2 class="title is-4">{{ navigation.title }}</h2>

    <div v-if="hasPageSections" class="page-sections">
      <h3 class="menu-label">On This Page</h3>
      <ul class="menu-list page-sections-list">
        <li v-for="section in pageSections" :key="section.id">
          <a :href="`#${section.id}`">{{ section.title }}</a>
          <ul v-if="section.subsections?.length">
            <li v-for="subsection in section.subsections" :key="subsection.id">
              <a :href="`#${subsection.id}`">{{ subsection.title }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <details
      v-for="group in navigation.groups"
      :key="`${currentPath}:${group.id}`"
      :open="navigation.project || group.items.some(isActive)"
      class="curriculum-group"
    >
      <summary>{{ group.title }}</summary>
      <ul class="menu-list">
        <li v-for="item in group.items" :key="item.path">
          <span v-if="item.comingSoon" class="planned-lesson">
            {{ item.title }} <small>(Coming soon)</small>
          </span>
          <router-link
            v-else
            :to="item.path"
            :class="{ 'is-active': isActive(item) }"
            :aria-current="isActive(item) ? 'page' : undefined"
          >
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </details>

    <div class="sidebar-footer">
      <router-link v-if="!navigation.project" to="/projects/black-swan-bistro">
        Black Swan Bistro Project
      </router-link>
      <router-link to="/tutorials">Full Curriculum</router-link>
      <router-link v-if="navigation.project" to="/projects"
        >All Projects</router-link
      >
      <router-link to="/my-progress">My Progress</router-link>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { usePageNavigation } from "@/composables/usePageNavigation";
import { getTutorialSidebarByPath } from "@/data/tutorials";

const { currentPath, pageSections, hasPageSections } = usePageNavigation();
const navigation = computed(() => getTutorialSidebarByPath(currentPath.value));
const isActive = (item) => item.path === currentPath.value.replace(/\/+$/, "");
</script>

<style scoped>
@import "./nav.css";

.tutorial-nav {
  --tutorial-accent: #27647a;
}

.curriculum-group {
  margin-block: 1rem;
}

summary {
  cursor: pointer;
  padding-block: 0.75rem;
  font-weight: 600;
}

.planned-lesson {
  display: block;
  padding: 0.75rem 1rem;
  color: #595959;
}

summary:focus-visible,
a:focus-visible {
  outline: 3px solid #27647a;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .tutorial-nav .menu-list a {
    transition: none;
  }
}
</style>
