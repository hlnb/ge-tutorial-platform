<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const menuItems = [
	{ title: 'Introduction', route: { name: 'css-basics-introduction' } },
	{ title: 'Selectors & Properties', route: { name: 'css-basics-selectors' } },
	{ title: 'Colors & Typography', route: { name: 'css-basics-colors' } },
	{ title: 'Box Model', route: { name: 'css-basics-box-model' } },
	{ title: 'Layout Fundamentals', route: { name: 'css-basics-layout' } },
	{ title: 'Flexbox Basics', route: { name: 'css-basics-flexbox' } },
	{ title: 'Responsive Design', route: { name: 'css-basics-responsive' } },
	{ title: 'Modern CSS Features', route: { name: 'css-basics-modern' } },
];

const currentIndex = computed(() =>
	menuItems.findIndex((item) => item.name === route.name),
);

const isCurrentRoute = (name) => name === route.name;
const isNextRoute = (index) => index === currentIndex.value + 1;
const isCompletedRoute = (index) => index < currentIndex.value;
</script>

<template>
	<div class="box">
		<h2 class="title is-4">
			<i class="fa-brands fa-css"></i>
			CSS Basics
		</h2>
		<div class="menu">
			<ul class="menu-list">
				<li v-for="(item, index) in menuItems" :key="index">
					<router-link
						:to="item.route"
						:class="{
							'is-active': isCurrentRoute(item.name),
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

.css-icon {
	display: inline-block;
	margin-right: 0.5rem;
	width: 1em;
	height: 1em;
	position: relative;
	background: #264de4;
	transform: rotate(45deg);
}

.css-icon::before,
.css-icon::after {
	content: '3';
	position: absolute;
	color: white;
	font-size: 0.65em;
	font-weight: bold;
	transform: rotate(-45deg);
	top: 0.15em;
	left: 0.25em;
}

.css-icon::after {
	content: '';
	position: absolute;
	top: 0.25em;
	left: 0.25em;
	right: 0.25em;
	bottom: 0.25em;
	background: white;
	transform: rotate(0deg);
}
</style>
