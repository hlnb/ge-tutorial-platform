<template>
    <div class="menu tutorial-nav">
        <h2 class="title is-3">
            <i class="fa-solid fa-rocket getting-started-icon"></i> Getting Started
        </h2>

        <ul class="menu-list">
            <li v-for="(tutorial, index) in tutorials" :key="tutorial.path">
                <router-link
                    :to="tutorial.path"
                    :class="{
                        'is-active': isCurrentPath(tutorial.path),
                        'is-next': isNextTutorial(index),
                    }"
                >
                    {{ tutorial.title }}
                </router-link>

                <div
                    v-if="isActive(tutorial.path) && hasPageSections"
                    class="page-sections mt-2"
                >
                    <div class="page-sections-header">
                        <h4 class="title is-6">On This Page</h4>
                        <span class="icon">
                            <i class="fas fa-chevron-up"></i>
                        </span>
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
                                    <i class="fas" :class="isSubsectionOpen(section.id) ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                                </span>
                            </div>
                            <ul
                                v-if="section.subsections && section.subsections.length"
                                :style="{ display: isSubsectionOpen(section.id) ? 'block' : 'none' }"
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
import { ref, inject, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePageNavigation } from '@/composables/usePageNavigation';
import { getSectionNavItems } from '@/data/tutorials';

const route = useRoute();
const expandedSections = ref(new Set()); // Track expanded sections
const { pageSections, hasPageSections } = usePageNavigation();

// Inject pageSections from the current tutorial
const pageSectionsInject = inject('pageSections', ref([]));

const tutorials = getSectionNavItems('getting-started', {
    overviewTitle: 'Introduction',
});

function isCurrentPath(path) {
    return route.path === path;
}

function isNextTutorial(index) {
    const currentIndex = tutorials.findIndex((tutorial) => tutorial.path === route.path);
    return index === currentIndex + 1;
}

function isActive(path) {
    return route.path === path;
}

// Initialize all sections as expanded
onMounted(() => {
    pageSectionsInject.value.forEach((section) => {
        if (section.subsections?.length) {
            expandedSections.value.add(section.id);
        }
    });
});

// Track which subsections are open
const openSubsections = ref({});

// Toggle subsection visibility
function toggleSubsection(id) {
    openSubsections.value[id] = !openSubsections.value[id];
}

// Check if subsection is open
function isSubsectionOpen(id) {
    return !!openSubsections.value[id];
}
</script>

<script>
export default {};
</script>

<style scoped>
@import './nav.css';

/* Getting Started accent (teal) */
.getting-started-icon { margin-right: 0.5rem; color: #00d1b2; }
.tutorial-nav { --tutorial-accent: #00d1b2; }
</style>
