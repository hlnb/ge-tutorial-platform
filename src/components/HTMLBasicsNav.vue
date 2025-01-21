<template>
	<div class="box">
		<h2 class="title is-4">
			<i icon="fa-brands fa-html5" class="section-icon"></i>
			HTML Basics
		</h2>
		<div class="menu">
			<ul class="menu-list">
				<li v-for="(item, index) in menuItems" :key="index">
					<router-link
						:to="item.route"
						:class="{
							'is-active': isCurrentRoute(item.route),
							'is-next': isNextRoute(index),
							'is-completed': isCompletedRoute(index),
						}"
					>
						{{ item.title }}
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const menuItems = [
	{ title: 'Introduction', route: { name: 'html-basics' } },
	{ title: 'Your First HTML Page', route: { name: 'html-basics-first-page' } },
	{ title: 'Working with Text', route: { name: 'html-basics-text' } },
	{ title: 'Links & Navigation', route: { name: 'html-basics-links' } },
	{ title: 'Images', route: { name: 'html-basics-images' } },
	{ title: 'Document Structure', route: { name: 'html-basics-doc-structure' } },
	{ title: 'Forms', route: { name: 'html-basics-forms' } },
	{ title: 'Emmet Workflow', route: { name: 'html-basics-emmet' } },
];

const currentIndex = computed(() =>
	menuItems.findIndex((item) => isCurrentRoute(item.route)),
);

const isCurrentRoute = (itemRoute) => {
	// Check both route name and path
	return (
		route.name === itemRoute.name ||
		route.path ===
			`/tutorials/html-basics/${itemRoute.name.replace('html-basics-', '')}`
	);
};

const isNextRoute = (index) => index === currentIndex.value + 1;
const isCompletedRoute = (index) => index < currentIndex.value;
</script>

<style scoped>
.menu-list a {
	transition: all 0.3s ease;
}

.menu-list a.is-active {
	background-color: #3273dc;
	color: white;
	font-weight: bold;
}

.menu-list a.is-next {
	background-color: #f0f8ff;
	border-left: 3px solid #3273dc;
}

.menu-list a.is-completed {
	color: #888;
	background-color: #f5f5f5;
}

.menu-list a.is-completed:hover {
	background-color: #eee;
	color: #666;
}

.section-icon {
	margin-right: 0.5rem;
	color: #e34f26;
}
</style>
