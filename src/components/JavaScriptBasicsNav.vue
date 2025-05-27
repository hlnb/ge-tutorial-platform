<template>
	<div class="tutorial-nav">
			<h3 class="title is-5">
			<span class="js-logo-container">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 630 630"
					class="js-logo"
				>
					<rect width="630" height="630" fill="#f7df1e" />
					<path
						d="m 165.65,526.47375 48.2125,-29.1775 C 223.16375,513.7875 231.625,527.74 251.92,527.74 c 19.45375,0 31.71875,-7.60975 31.71875,-37.21 l 0,-201.3 59.20375,0 0,202.1375 c 0,61.32 -35.94375,89.23125 -88.385,89.23125 -47.36125,0 -74.8525,-24.52875 -88.8075,-54.13"
						fill="#000000"
					/>
					<path
						d="m 375,520.13 48.20625,-27.91125 c 12.69,20.72375 29.1825,35.9475 58.36125,35.9475 24.53125,0 40.17375,-12.26475 40.17375,-29.18125 0,-20.29875 -16.06875,-27.48875 -43.135,-39.32625 l -14.7975,-6.3475 c -42.715,-18.18125 -71.05,-41.0175 -71.05,-89.2275 0,-44.40375 33.83125,-78.2375 86.695,-78.2375 37.6375,0 64.7025,13.11125 84.15375,47.36625 l -46.09625,29.60125 c -10.15,-18.1825 -21.1425,-25.37125 -38.0575,-25.37125 -17.33875,0 -28.335,10.995 -28.335,25.37125 0,17.7625 10.99625,24.9525 36.3675,35.94875 l 14.8,6.3425 c 50.325,21.56875 78.66,43.5575 78.66,93.03375 0,53.2875 -41.86625,82.465 -98.11,82.465 -54.97625,0 -90.5,-26.2175 -107.83625,-60.47375"
						fill="#000000"
					/>
				</svg>
			</span>
		JavaScript Basics</h3>


			<aside class="menu tutorial-nav">
					<ul class="menu-list">
					<li v-for="item in navItems" :key="item.path">
						<router-link :to="item.path" :class="{ 'is-active': isActive(item.path) }">
							<i :class="['fas', item.icon]"></i> {{ item.title }}
						</router-link>

						<!-- On this page navigation - only shown under the active page -->
						<div v-if="isActive(item.path) && hasPageSections" class="page-sections mt-2">
							<div class="page-sections-header">
								<h4 class="title is-6">On This Page</h4>
								<span class="icon">
									<i class="fas fa-chevron-up"></i>
								</span>
							</div>
							<ul class="menu-list page-sections-list">
								<li v-for="section in pageSections" :key="section.id">
									<!-- Topic section header -->
									<div class="section-header">
										<a :href="`#${section.id}`" @click="scrollToSection(section.id)">{{ section.title }}</a>
										<span v-if="section.subsections && section.subsections.length" class="icon toggle-icon" @click="toggleSubsection(section.id)">
											<i class="fas" :class="isSubsectionOpen(section.id) ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
										</span>
									</div>

									<!-- Subsections -->
									<ul v-if="section.subsections && section.subsections.length" :style="{ display: isSubsectionOpen(section.id) ? 'block' : 'none' }">
										<li v-for="subsection in section.subsections" :key="subsection.id">
											<a :href="`#${subsection.id}`" @click="scrollToSection(subsection.id)">{{ subsection.title }}</a>
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
					<router-link to="/progress" class="button is-small is-fullwidth mt-2">
						<i class="fas fa-chart-line"></i> My Progress
					</router-link>
				</div>
			</aside>
</div>
</template>

<script setup>
import { ref, computed, inject, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePageNavigation } from '@/composables/usePageNavigation';

const route = useRoute();
const isMainExpanded = ref(true);
const expandedSections = ref(new Set()); // Track expanded sections
const { pageSections, hasPageSections } = usePageNavigation();

// Inject pageSections from the current tutorial
const pageSectionsInject = inject('pageSections', ref([]));

// Single source of truth for navigation items
const navItems = [
	{ path: '/tutorials/javascript-basics/', title: 'Overview', icon: 'fa-home' },
	{ path: '/tutorials/javascript-basics/introduction', title: 'Getting  Started', icon: 'fa-flag' },
	{ path: '/tutorials/javascript-basics/variables-data-types', title: 'Variables & Data Types', icon: 'fa-cube' },
	{ path: '/tutorials/javascript-basics/operators', title: 'Operators & Expressions', icon: 'fa-calculator' },
	{ path: '/tutorials/javascript-basics/conditionals', title: 'Control Flow', icon: 'fa-code-branch' },
	{ path: '/tutorials/javascript-basics/loops', title: 'Loops', icon: 'fa-sync' },
	{ path: '/tutorials/javascript-basics/functions', title: 'Functions', icon: 'fa-cogs' },

];

function isCurrentPath(path) {
	return route.path === path;
}

function isActive(path) {
	return route.path === path;
}

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

// Scroll to section
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

export default {};
<style scoped>

.tutorial-nav {
	padding: 1.5rem;
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
}

.js-logo-container {
	width: 40px;
	height: 40px;
	margin-right: 10px;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: visible;
}

.js-logo {
	width: 100%;
	height: 100%;
	display: block;
}


.menu-list a {
	border-radius: 4px;
	padding: 0.75rem 1rem;
	margin-bottom: 0.5rem;
	color: #4a4a4a;
	transition: all 0.2s ease;
}

.menu-list a:hover {
	background-color: #f5f5f5;
}

.menu-list a.is-active {
	background-color: #f0db4f;
	color: black;
	font-weight: 600;
}

.menu-list a.is-next {
	background-color: #fff5f2;
	border-left: 3px solid #f0db4f;
}


.sidebar-footer {
	padding: 1rem;
	border-top: 1px solid #dbdbdb;
}

.sidebar-footer .buttons {
	display: flex;
	justify-content: space-between;
}

/* Page Sections Styling */
.page-sections {
	border-top: 1px solid #f5f5f5;
	margin-top: 1.5rem;
	padding-top: 1rem;
}

.page-sections-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	padding: 0.5rem 0;
}

.page-sections-header:hover {
	color: #f0db4f;
}

.page-sections-list {
	margin-top: 0.5rem;
	transition: all 0.3s ease;
	max-height: 300px;
	overflow-y: auto;
	padding-right: 5px;
}

.section-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.toggle-icon {
	cursor: pointer;
	padding: 0.25rem;
}

.toggle-icon:hover {
	color: #f0db4f;
}
</style>
