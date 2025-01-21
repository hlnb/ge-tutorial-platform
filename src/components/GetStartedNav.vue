<template>
	<div class="box">
		<h2 class="title is-4">
			<i class="fas fa-rocket section-icon"></i> Getting Started
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
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const menuItems = [
	{ title: 'Getting Started', route: { name: 'getting-started' } },
	{ title: 'Browser Tools', route: { name: 'getting-started-browser-tools' } },
	{
		title: 'Development Environment',
		route: { name: 'getting-started-dev-environment' },
	},
	{
		title: 'Domain & Hosting',
		route: { name: 'getting-started-domain-hosting' },
	},
	{
		title: 'How the Internet Works',
		route: { name: 'getting-started-how-internet-works' },
	},
	{ title: 'Text Editors', route: { name: 'getting-started-text-editors' } },
	{ title: 'Web Basics', route: { name: 'getting-started-web-basics' } },
];

const currentIndex = computed(() =>
	menuItems.findIndex((item) => item.route.name === route.name),
);

const isCurrentRoute = (itemRoute) => itemRoute.name === route.name;
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
}
</style>
