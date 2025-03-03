<script setup>
import { ref, computed, inject, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMainExpanded = ref(true);
const expandedSections = ref(new Set()); // Track expanded sections

// Inject pageSections from the current tutorial
const pageSections = inject('pageSections', ref([]));

const tutorials = [
	{
		path: '/tutorials/css-basics/introduction',
		title: 'Introduction to CSS',
	},
	{ path: '/tutorials/css-basics/selectors', title: 'CSS Selectors' },
	{ path: '/tutorials/css-basics/box-model', title: 'The Box Model' },
	{ path: '/tutorials/css-basics/text-properties', title: 'Typography & Text' },
	{ path: '/tutorials/css-basics/layout', title: 'Layout Basics' },
	{
		path: '/tutorials/css-basics/colors',
		title: 'Working with Colors',
	},
	{ path: '/tutorials/css-basics/modern', title: 'Modern CSS' },
	{ path: '/tutorials/css-basics/responsive', title: 'Responsive Design' },

	{ path: '/tutorials/css-basics/flexbox', title: 'Flexbox' },

	// ... other tutorials
];

const currentIndex = computed(() =>
	tutorials.findIndex((tutorial) => isCurrentPath(tutorial.path)),
);

const isAnyTutorialActive = computed(() =>
	tutorials.some((tutorial) => isCurrentPath(tutorial.path)),
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
	pageSections.value.forEach((section) => {
		if (section.subsections?.length) {
			expandedSections.value.add(section.id);
		}
	});
});
</script>

<template>
	<aside class="menu tutorial-nav">
		<h2 class="title is-3">
			<i class="fa-brands fa-css css-icon"></i>
			CSS Basics
		</h2>
		<!-- Main Tutorial Navigation -->
		<ul class="menu-list">
			<li v-for="(tutorial, index) in tutorials" :key="tutorial.path">
				<RouterLink
					:to="tutorial.path"
					:class="{
						'is-active': isCurrentPath(tutorial.path),
						'is-next': isNextTutorial(index),
					}"
				>
					{{ tutorial.title }}
				</RouterLink>
			</li>
		</ul>

		<!-- On This Page Navigation -->
		<div
			v-if="isAnyTutorialActive && pageSections.length"
			class="page-sections mt-4"
		>
			<div class="page-sections-header" @click="toggleMainNav">
				<h4 class="title is-6">On This Page</h4>
				<span class="icon">
					<i
						class="fas"
						:class="isMainExpanded ? 'fa-chevron-up' : 'fa-chevron-down'"
					></i>
				</span>
			</div>

			<ul v-show="isMainExpanded" class="menu-list page-sections-list">
				<li v-for="section in pageSections" :key="section.id">
					<!-- Topic section header -->
					<div class="section-header" @click="toggleSection(section.id)">
						<a :href="`#${section.id}`">{{ section.title }}</a>
						<span class="icon" v-if="section.subsections?.length">
							<i
								class="fas"
								:class="
									isExpanded(section.id) ? 'fa-chevron-up' : 'fa-chevron-down'
								"
							></i>
						</span>
					</div>

					<!-- Subsections -->
					<ul
						v-if="section.subsections?.length"
						v-show="isExpanded(section.id)"
					>
						<li v-for="subsection in section.subsections" :key="subsection.id">
							<a :href="`#${subsection.id}`">{{ subsection.title }}</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</aside>
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
</style>
