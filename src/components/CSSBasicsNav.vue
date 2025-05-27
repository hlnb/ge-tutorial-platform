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
	{
		path: '/tutorials/css-basics/introduction',
		title: 'Introduction to CSS',
	},
	{
		path: '/tutorials/css-basics/selectors',
		title: 'CSS Selectors',
	},
	{
		path: '/tutorials/css-basics/box-model',
		title: 'The Box Model',
	},
	{
		path: '/tutorials/css-basics/text',
		title: 'Typography & Text',
	},
	{
		path: '/tutorials/css-basics/layout',
		title: 'Layout Basics',
	},
	{
		path: '/tutorials/css-basics/colors',
		title: 'Working with Colors',
	},
	{
		path: '/tutorials/css-basics/modern',
		title: 'Modern CSS',
	},
	{
		path: '/tutorials/css-basics/responsive',
		title: 'Responsive Design',
	},
	{
		path: '/tutorials/css-basics/flexbox',
		title: 'Flexbox',
	},
];

const currentIndex = computed(() =>
	navItems.findIndex((item) => isCurrentPath(item.path)),
);

const isAnyTutorialActive = computed(() =>
	navItems.some((item) => isCurrentPath(item.path)),
);

function isCurrentPath(path) {
	return route.path === path;
}

function isNextTutorial(index) {
	return index === currentIndex.value + 1;
}

function toggleMainNav() {
	isMainExpanded.value = !isMainExpanded.value;
}

function toggleSection(sectionId) {
	if (expandedSections.value.has(sectionId)) {
		expandedSections.value.delete(sectionId);
	} else {
		expandedSections.value.add(sectionId);
	}
}

function isExpanded(sectionId) {
	return expandedSections.value.has(sectionId);
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

// Check if a path is active
function isActive(path) {
	return route.path === path;
}
</script>

export default {};

<template>
	<div class="menu tutorial-nav">
		<h2 class="title is-3">
			<i class="fa-brands fa-css css-icon"></i>
			CSS Basics
		</h2>

		<!-- Main Tutorial Navigation -->
		<ul class="menu-list">
			<li v-for="(item, index) in navItems" :key="index">
				<router-link
					:to="item.path"
					:class="{ 'is-active': isActive(item.path) }"
				>
					{{ item.title }}
				</router-link>

				<!-- On this page navigation - only shown under the active page -->
				<div
					v-if="isActive(item.path) && hasPageSections"
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
							<!-- Topic section header -->
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

							<!-- Subsections -->
							<ul
								v-if="section.subsections && section.subsections.length"
								:style="{
									display: isSubsectionOpen(section.id) ? 'block' : 'none',
								}"
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
			<router-link to="/tutorials" class="button is-small is-fullwidth">
				<i class="fas fa-arrow-left"></i> All Tutorials
			</router-link>
			<router-link to="/progress" class="button is-small is-fullwidth mt-2">
				<i class="fas fa-chart-line"></i> My Progress
			</router-link>
		</div>
	</div>
</template>

<style scoped>
.tutorial-nav {
	padding: 1.5rem;
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
}

.css-icon {
	margin-right: 0.5rem;
	color: #3273dc;
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
	background-color: #3273dc;
	color: white;
	font-weight: 600;
}

.menu-list a.is-next {
	background-color: #f0f8ff;
	border-left: 3px solid #3273dc;
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
	color: #3273dc;
}

.page-sections-list {
	margin-top: 0.5rem;
	transition: all 0.3s ease;
}

.page-sections-list a {
	padding: 0.5rem 1rem;
	font-size: 0.95em;
}

.page-sections-list ul {
	margin: 0.25rem 0 0.25rem 1rem !important;
	border-left: 1px solid #dbdbdb;
}

.page-sections-list ul a {
	padding-left: 1.5rem;
	font-size: 0.9em;
}

/* Icon transition */
.icon i {
	transition: transform 0.3s ease;
}

.icon i.fa-chevron-up {
	transform: rotate(180deg);
}

.section-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	padding: 0.5rem 1rem;
	color: #4a4a4a;
	transition: all 0.2s ease;
}

.section-header:hover {
	background-color: #f5f5f5;
}

.section-header a {
	flex: 1;
	padding: 0 !important;
	margin: 0 !important;
}

.section-header .icon {
	margin-left: 0.5rem;
}

.section-header:hover a {
	background: none !important;
}

/* Icon transitions */
.icon i {
	transition: transform 0.3s ease;
}

.icon i.fa-chevron-up {
	transform: rotate(180deg);
}

/* Subsection transitions */
.page-sections-list ul {
	transition: all 0.3s ease;
}

.css-icon {
	color: #264de4;
	margin-right: 0.5rem;
}

.tutorial-nav {
	padding: 1rem;
}

.page-sections {
	background-color: var(--color-light, #f8f9fa);
	border-radius: 8px;
	padding: 1rem;
	margin-top: 0.5rem;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.page-sections-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.5rem;
}

.page-sections-list {
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
}

.page-sections a {
	color: #4a4a4a;
	text-decoration: none;
	display: block;
	padding: 0.25rem 0;
	transition: color 0.2s ease;
}

.page-sections a:hover {
	color: #3273dc;
}

.page-sections ul ul {
	margin-left: 1.5rem;
	font-size: 0.9em;
}

.page-sections li {
	margin: 0.5rem 0;
}

/* Ensure the active page is highlighted */
.is-active {
	background-color: #3273dc;
	color: white !important;
	border-radius: 4px;
}

/* Ensure the active page's "On This Page" section is visible */
.is-active + .page-sections {
	display: block;
}

.sidebar-footer {
	padding: 1rem;
	border-top: 1px solid #dbdbdb;
}

.sidebar-footer .button {
	display: flex;
	align-items: center;
	justify-content: center;
}

.sidebar-footer .button i {
	margin-right: 0.5rem;
}
</style>
