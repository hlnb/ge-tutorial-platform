<template>
	<div class="menu tutorial-nav">
		<h2 class="title is-3">
			<i class="fa-brands fa-html5 html-icon"></i> HTML Basics
		</h2>

		<!-- Main Tutorial Navigation -->
		<ul class="menu-list">
			<li v-for="(tutorial, index) in tutorials" :key="index">
				<router-link
					:to="tutorial.path"
					:class="{
						'is-active': isCurrentPath(tutorial.path),
						'is-next': isNextTutorial(index),
					}"
				>
					{{ tutorial.title }}
				</router-link>

				<!-- On this page navigation - only shown under the active page -->
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
			<router-link to="/my-progress" class="sidebar-link">My Progress</router-link>
			<router-link to="/tutorials" class="sidebar-link">All Tutorials</router-link>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, inject, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { usePageNavigation } from '@/composables/usePageNavigation';

const route = useRoute();
const router = useRouter();
const isMainExpanded = ref(true);
const expandedSections = ref(new Set()); // Track expanded sections
const { pageSections, hasPageSections } = usePageNavigation();

// Inject pageSections from the current tutorial
const pageSectionsInject = inject('pageSections', ref([]));

// Log the current route and available routes
console.log('Current route in HTMLBasicsNav:', route.name);
console.log(
	'Available routes:',
	router.getRoutes().map((r) => r.name),
);

const tutorials = [
	{ path: '/tutorials/html-basics', title: 'Introduction' },
	{ path: '/tutorials/html-basics/first-page', title: 'Your First HTML Page' },
	{ path: '/tutorials/html-basics/text', title: 'Working with Text' },
	{ path: '/tutorials/html-basics/links', title: 'Links & Navigation' },
	{ path: '/tutorials/html-basics/images', title: 'Images' },
	{ path: '/tutorials/html-basics/doc-structure', title: 'Document Structure' },
	{ path: '/tutorials/html-basics/forms', title: 'Forms' },
	{ path: '/tutorials/html-basics/html-emmet', title: 'HTML Emmet' },
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

<style scoped>
.tutorial-nav {
	padding: 1.5rem;
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
}

.html-icon {
	margin-right: 0.5rem;
	color: #e34c26;
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
	background-color: #e34c26;
	color: white;
	font-weight: 600;
}

.menu-list a.is-next {
	background-color: #fff5f2;
	border-left: 3px solid #e34c26;
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
	color: #e34c26;
}

.page-sections-list {
	margin-top: 0.5rem;
	transition: all 0.3s ease;
	max-height: 300px;
	overflow-y: auto;
	padding-right: 5px;
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
	color: #e34c26;
}

.page-sections ul ul {
	margin-left: 1.5rem;
	font-size: 0.9em;
}

.page-sections li {
	margin: 0.5rem 0;
}

.sidebar-footer {
	margin-top: auto;
	padding: 1rem;
	border-top: 1px solid #dbdbdb;
}

.sidebar-link {
	display: block;
	margin-bottom: 0.5rem;
	color: #3273dc;
	text-decoration: none;
}

.sidebar-link:hover {
	color: #363636;
}

.sidebar-link.router-link-active {
	color: #f0db4f;
}
</style>
