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

			<li>
				<router-link
					to="/tutorials/getting-started/how-internet-works"
					:class="{
						'is-active': isCurrentPath(
							'/tutorials/getting-started/how-internet-works',
						),
						'is-next': isNextPath(
							'/tutorials/getting-started/how-internet-works',
						),
					}"
				>
					How the Internet Works
				</router-link>

				<!-- On this page navigation -->
				<div
					v-if="
						isActive('/tutorials/getting-started/how-internet-works') &&
						hasPageSections
					"
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

				<!-- On this page navigation -->
				<div
					v-if="
						isActive('/tutorials/getting-started/web-basics') && hasPageSections
					"
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

			<li>
				<router-link
					to="/tutorials/getting-started/dev-environment"
					:class="{
						'is-active': isCurrentPath(
							'/tutorials/getting-started/dev-environment',
						),
						'is-next': isNextPath('/tutorials/getting-started/dev-environment'),
					}"
				>
					Setting Up Your Environment
				</router-link>

				<!-- On this page navigation -->
				<div
					v-if="
						isActive('/tutorials/getting-started/dev-environment') &&
						hasPageSections
					"
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

			<li>
				<router-link
					to="/tutorials/getting-started/text-editors"
					:class="{
						'is-active': isCurrentPath(
							'/tutorials/getting-started/text-editors',
						),
						'is-next': isNextPath('/tutorials/getting-started/text-editors'),
					}"
				>
					Text Editors
				</router-link>

				<!-- On this page navigation -->
				<div
					v-if="
						isActive('/tutorials/getting-started/text-editors') &&
						hasPageSections
					"
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

			<li>
				<router-link
					to="/tutorials/getting-started/browser-tools"
					:class="{
						'is-active': isCurrentPath(
							'/tutorials/getting-started/browser-tools',
						),
						'is-next': isNextPath('/tutorials/getting-started/browser-tools'),
					}"
				>
					Browser Development Tools
				</router-link>

				<!-- On this page navigation -->
				<div
					v-if="
						isActive('/tutorials/getting-started/browser-tools') &&
						hasPageSections
					"
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

			<li>
				<router-link
					to="/tutorials/getting-started/domain-hosting"
					:class="{
						'is-active': isCurrentPath(
							'/tutorials/getting-started/domain-hosting',
						),
						'is-next': isNextPath('/tutorials/getting-started/domain-hosting'),
					}"
				>
					Domain Names & Web Hosting
				</router-link>

				<!-- On this page navigation -->
				<div
					v-if="
						isActive('/tutorials/getting-started/domain-hosting') &&
						hasPageSections
					"
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


// Define the order of tutorials for next/prev navigation
const tutorialOrder = [
	'/tutorials/getting-started',
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
</script>

export default {};
<style scoped>
.tutorial-nav {
	padding: 1.5rem;
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
}

.getting-started-icon {
	margin-right: 0.5rem;
	color: #00d1b2;
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
	background-color: #00d1b2;
	color: white;
	font-weight: 600;
}

.menu-list a.is-next {
	background-color: #f0fffc;
	border-left: 3px solid #00d1b2;
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
	color: #00d1b2;
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
	color: #00d1b2;
}

.page-sections ul ul {
	margin-left: 1.5rem;
	font-size: 0.9em;
}

.page-sections li {
	margin: 0.5rem 0;
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
