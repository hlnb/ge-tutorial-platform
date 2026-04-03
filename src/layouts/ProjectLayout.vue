<template>
  <div class="project-layout">
    <aside class="sidebar desktop-sidebar">
      <ProjectSidebarNav />
    </aside>

    <main class="main-content">
      <button
        class="project-mobile-toggle"
        type="button"
        @click="toggleMobileNav"
      >
        <span class="icon" aria-hidden="true">
          <i :class="['fas', isMobileNavOpen ? 'fa-times' : 'fa-bars']"></i>
        </span>
        <span>{{ isMobileNavOpen ? 'Hide Project Menu' : 'Project Menu' }}</span>
      </button>

      <div class="content">
        <router-view />
      </div>

      <ProjectNavigation :prev="projectNavigation.prev" :next="projectNavigation.next" />
    </main>

    <transition name="project-drawer">
      <div
        v-if="showMobileNavDrawer"
        class="mobile-sidebar-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Project menu"
      >
        <div class="mobile-drawer-header">
          <h3>Project Menu</h3>
          <button
            class="icon-button"
            type="button"
            aria-label="Close project menu"
            @click="closeMobileNav"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        <ProjectSidebarNav />
      </div>
    </transition>

    <div
      v-if="showMobileNavDrawer"
      class="mobile-sidebar-backdrop"
      aria-hidden="true"
      @click="closeMobileNav"
    ></div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, provide, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import ProjectNavigation from '@/components/projects/ProjectNavigation.vue';
import ProjectSidebarNav from '@/components/projects/ProjectSidebarNav.vue';
import { getProjectByPath, getProjectNavigationByPath } from '@/data/projects';

const route = useRoute();
const pageSections = ref([]);
const isMobileNavOpen = ref(false);

const closeMobileNav = () => {
  isMobileNavOpen.value = false;
};

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
};

const handleDrawerKeydown = (event) => {
  if (event.key === 'Escape') {
    closeMobileNav();
  }
};

const currentProject = computed(() => getProjectByPath(route.path));
const projectNavigation = computed(() => getProjectNavigationByPath(route.path));
const showMobileNavDrawer = computed(() => !!currentProject.value && isMobileNavOpen.value);

watch(
  () => route.path,
  () => {
    pageSections.value = [];
    closeMobileNav();
  },
);

watch(showMobileNavDrawer, (isOpen) => {
  if (typeof document === 'undefined') return;
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

provide('pageSections', pageSections);
provide('currentProject', currentProject);

onMounted(() => {
  window.addEventListener('keydown', handleDrawerKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleDrawerKeydown);
  if (typeof document !== 'undefined') {
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
.project-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.sidebar {
  position: sticky;
  top: 2rem;
  height: fit-content;
  align-self: start;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
}

.main-content {
  min-width: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  margin-bottom: 2rem;
}

.project-mobile-toggle {
  display: none;
  align-items: center;
  gap: 0.6rem;
  border: 1px solid #d9e4ea;
  background: #fff;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  color: #29424d;
  font-weight: 600;
  margin-bottom: 1rem;
}

.mobile-sidebar-drawer {
  position: fixed;
  inset: 0 auto 0 0;
  width: min(320px, 85vw);
  height: 100vh;
  background: #fff;
  z-index: 40;
  padding: 1.25rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
  overflow-y: auto;
}

.mobile-drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.mobile-sidebar-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(17, 24, 39, 0.45);
  z-index: 30;
}

.icon-button {
  border: none;
  background: transparent;
  font-size: 1.1rem;
  cursor: pointer;
}

.project-drawer-enter-active,
.project-drawer-leave-active {
  transition: transform 0.2s ease;
}

.project-drawer-enter-from,
.project-drawer-leave-to {
  transform: translateX(-100%);
}

@media (max-width: 1023px) {
  .project-layout {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  .desktop-sidebar {
    display: none;
  }

  .project-mobile-toggle {
    display: inline-flex;
  }

  .main-content {
    padding: 0;
  }
}
</style>
