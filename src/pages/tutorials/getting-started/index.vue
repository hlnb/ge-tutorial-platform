<script setup>
import '@/assets/styles/tutorials.css';
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import TutorialCard from '@/components/tutorials/TutorialCard.vue';
import { sections, tutorials } from '@/data/tutorials';

const sectionMeta = sections.find((section) => section.id === 'getting-started');

const sectionTutorials = computed(() => {
	return tutorials
		.filter((tutorial) => tutorial.section === 'getting-started')
		.sort((a, b) => a.stage - b.stage);
});

useHead({
	title: `${sectionMeta?.introCopy?.title || 'Getting Started'} - GraphitEdge Tutorials`,
	meta: [
		{
			name: 'description',
			content:
				sectionMeta?.introCopy?.summary ||
				'Essential concepts and tools for web development',
		},
	],
});
</script>

<template>
	<div class="container section">
		<div class="content">
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li>
						<router-link to="/"
							><i class="fa-solid fa-house mr-2"></i> Home</router-link
						>
					</li>
					<li>
						<router-link to="/tutorials">Tutorials</router-link>
					</li>
					<li class="is-active">
						<a href="#" aria-current="page">Getting Started</a>
					</li>
				</ul>
			</nav>

		<div>
			<h1 class="title is-1">{{ sectionMeta?.introCopy?.title || 'Getting Started' }}</h1>

			<p class="subtitle is-4 mb-6">
				{{ sectionMeta?.introCopy?.summary || 'Essential concepts and tools for web development' }}
			</p>
				<p>
					<strong>🎯 Learning Path:</strong>
					{{ sectionMeta?.introCopy?.description || 'Complete these tutorials in order to understand how the web works and set up your development environment.' }}
				</p>
			</div>

			<div class="tutorials-grid">
				<TutorialCard
					v-for="tutorial in sectionTutorials"
					:key="tutorial.id"
					:tutorial="tutorial"
				/>
			</div>
		</div>
	</div>
</template>
