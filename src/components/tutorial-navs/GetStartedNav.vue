<template>
    <div class="menu tutorial-nav">
        <h2 class="title is-3">
            <i class="fa-solid fa-rocket getting-started-icon"></i> Getting Started
        </h2>

        <!-- Main Tutorial Navigation -->
        <ul class="menu-list">
            <!-- Manually list each tutorial in the correct order -->
            <li>
                <router-link
                    to="/tutorials/getting-started"
                    :class="{
                        'is-active': isCurrentPath('/tutorials/getting-started'),
                        'is-next': isNextPath('/tutorials/getting-started'),
                    }"
                >
                    Introduction
                </router-link>

                <!-- On this page navigation for Introduction -->
                <div
                    v-if="isActive('/tutorials/getting-started') && hasPageSections"
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

            <!-- Additional tutorial links (copied from original GetStartedNav) -->
            <li>
                <router-link
                    to="/tutorials/getting-started/how-internet-works"
                    :class="{
                        'is-active': isCurrentPath('/tutorials/getting-started/how-internet-works'),
                        'is-next': isNextPath('/tutorials/getting-started/how-internet-works'),
                    }"
                >
                    How the Internet Works
                </router-link>
            </li>

            <li>
                <router-link
                    to="/tutorials/getting-started/web-basics"
                    :class="{
                        'is-active': isCurrentPath('/tutorials/getting-started/web-basics'),
                        'is-next': isNextPath('/tutorials/getting-started/web-basics'),
                    }"
                >
                    Web Basics
                </router-link>
            </li>

            <li>
                <router-link
                    to="/tutorials/getting-started/dev-environment"
                    :class="{
                        'is-active': isCurrentPath('/tutorials/getting-started/dev-environment'),
                        'is-next': isNextPath('/tutorials/getting-started/dev-environment'),
                    }"
                >
                    Setting Up Your Environment
                </router-link>
            </li>

            <li>
                <router-link
                    to="/tutorials/getting-started/text-editors"
                    :class="{
                        'is-active': isCurrentPath('/tutorials/getting-started/text-editors'),
                        'is-next': isNextPath('/tutorials/getting-started/text-editors'),
                    }"
                >
                    Text Editors
                </router-link>
            </li>

            <li>
                <router-link
                    to="/tutorials/getting-started/browser-tools"
                    :class="{
                        'is-active': isCurrentPath('/tutorials/getting-started/browser-tools'),
                        'is-next': isNextPath('/tutorials/getting-started/browser-tools'),
                    }"
                >
                    Browser Development Tools
                </router-link>
            </li>

            <li>
                <router-link
                    to="/tutorials/getting-started/domain-hosting"
                    :class="{
                        'is-active': isCurrentPath('/tutorials/getting-started/domain-hosting'),
                        'is-next': isNextPath('/tutorials/getting-started/domain-hosting'),
                    }"
                >
                    Domain Names & Web Hosting
                </router-link>
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

const route = useRoute();
const expandedSections = ref(new Set()); // Track expanded sections
const { pageSections, hasPageSections } = usePageNavigation();

// Inject pageSections from the current tutorial
const pageSectionsInject = inject('pageSections', ref([]));

// Define the order of tutorials for next/prev navigation
const tutorialOrder = [
    '/tutorials/getting-started/introduction',
    '/tutorials/getting-started/how-internet-works',
    '/tutorials/getting-started/web-basics',
    '/tutorials/getting-started/dev-environment',
    '/tutorials/getting-started/text-editors',
    '/tutorials/getting-started/browser-tools',
    '/tutorials/getting-started/domain-hosting',
];

function isCurrentPath(path) {
    return route.path === path;
}

function isNextPath(path) {
    const currentIndex = tutorialOrder.indexOf(route.path);
    const pathIndex = tutorialOrder.indexOf(path);
    return pathIndex === currentIndex + 1;
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
