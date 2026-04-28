<script setup>
import '@/assets/styles/tutorials.css';
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import WorkingWithDataVisual from '@/components/tutorials/WorkingWithDataVisual.vue';
import { usePageSections } from '@/composables/usePageSections';
import {
	getSectionById,
	getSectionOverviewPath,
	getTutorialByPath,
} from '@/data/tutorials';
import { renderMarkdown } from '@/utils/markdownRenderer';
import { parseMarkdownTutorial } from '@/utils/markdownTutorialParser';
import { sanitizeHtml } from '@/utils/sanitizeHtml';

const props = defineProps({
	source: {
		type: String,
		required: true,
	},
	currentPath: {
		type: String,
		required: true,
	},
	sectionId: {
		type: String,
		required: true,
	},
});

const parsed = computed(() => parseMarkdownTutorial(props.source));
const tutorial = computed(() => getTutorialByPath(props.currentPath));
const section = computed(() => getSectionById(props.sectionId));

const prerequisiteLinks = computed(() =>
	(parsed.value.frontmatter.prerequisites || []).map((entry) => {
		const path = `/tutorials/${entry}`;
		const prerequisiteTutorial = getTutorialByPath(path);
		return {
			topic: prerequisiteTutorial?.title || entry.split('/').pop().replace(/-/g, ' '),
			link: prerequisiteTutorial ? path : null,
		};
	}),
);

const hookHtml = computed(() => sanitizeHtml(renderMarkdown(parsed.value.hookMarkdown)));
const closureHtml = computed(() =>
	sanitizeHtml(renderMarkdown(parsed.value.closure?.body || '', { headingIds: true })),
);

const conceptSections = computed(() =>
	(parsed.value.conceptSections || []).map((sectionItem) => ({
		...sectionItem,
		html: sanitizeHtml(renderMarkdown(sectionItem.markdown, { headingIds: true })),
	})),
);

const guidedSteps = computed(() =>
	(parsed.value.guidedPractice?.steps || []).map((step) => ({
		title: step.title,
		instructions: sanitizeHtml(renderMarkdown(step.instructions)),
		hints: [],
	})),
);

const independentTaskHtml = computed(() =>
	sanitizeHtml(renderMarkdown(parsed.value.independentPractice?.task || '')),
);

const pageSections = computed(() => {
	const sections = conceptSections.value.map((sectionItem) => ({
		id: sectionItem.id,
		title: sectionItem.title,
	}));

	if (parsed.value.checkpoint) {
		sections.push({ id: 'checkpoint', title: 'Checkpoint' });
	}
	if (parsed.value.guidedPractice) {
		sections.push({ id: 'guided-practice', title: 'Guided Practice' });
	}
	if (parsed.value.independentPractice) {
		sections.push({ id: 'independent-practice', title: 'Independent Practice' });
	}
	if (parsed.value.closure) {
		sections.push({ id: 'closure', title: parsed.value.closure.title });
	}

	return sections;
});

usePageSections(pageSections);

const visualMap = {
	'/tutorials/intermediate/working-with-data/async-javascript': {
		'the-problem-javascript-only-does-one-thing-at-a-time': ['async-flow'],
		'what-is-a-promise': ['promise-states'],
	},
	'/tutorials/intermediate/working-with-data/fetch-api': {
		'what-is-fetch': ['fetch-cycle'],
		'handling-errors-properly': ['response-check'],
	},
	'/tutorials/intermediate/working-with-data/working-with-json': {
		'what-is-json': ['json-pipeline'],
		'reshaping-data-with-array-methods': ['array-reshape'],
	},
	'/tutorials/intermediate/working-with-data/async-await': {
		'the-await-keyword': ['async-await'],
		'running-requests-in-parallel': ['parallel'],
	},
	'/tutorials/intermediate/working-with-data/mini-project': {
		'what-youre-building': ['world-explorer'],
	},
};

function getSectionVisuals(sectionId) {
	return visualMap[props.currentPath]?.[sectionId] || [];
}

useHead(() => ({
	title: `${parsed.value.frontmatter.title} - GraphiteEdge Tutorials`,
	meta: [
		{
			name: 'description',
			content: parsed.value.frontmatter.description,
		},
	],
}));
</script>

<template>
	<div class="container section">
		<div class="tutorial-content markdown-tutorial-page">
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li>
						<router-link to="/"><i class="fa-solid fa-house mr-2"></i> Home</router-link>
					</li>
					<li><router-link to="/tutorials">Tutorials</router-link></li>
					<li>
						<router-link :to="getSectionOverviewPath(sectionId)">
							{{ section?.title || 'Tutorial Section' }}
						</router-link>
					</li>
					<li class="is-active">
						<a href="#" aria-current="page">{{ parsed.frontmatter.title }}</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">{{ tutorial?.levelTitle || 'Intermediate' }}</span>
					<span class="tag is-light">{{ tutorial?.estimatedTime || `${parsed.frontmatter.estimatedTime} min` }}</span>
					<span
						v-for="tag in (parsed.frontmatter.tags || []).slice(0, 4)"
						:key="tag"
						class="tag is-light"
					>
						{{ tag }}
					</span>
				</div>
			</div>

			<h1 class="title is-1">{{ parsed.frontmatter.title }}</h1>
			<p class="subtitle is-5">{{ parsed.frontmatter.description }}</p>

			<AnticipatorySet
				:hook="hookHtml"
				:reflection-prompts="[
					`Where have you already seen ${parsed.frontmatter.title.toLowerCase()} in a real interface?`,
					'Which part of working with data currently feels most mysterious?'
				]"
				:connection="parsed.frontmatter.description"
			/>

			<LearningObjectives
				:objectives="parsed.objectives.items"
				:purpose="parsed.frontmatter.description"
				:prerequisites="prerequisiteLinks"
			/>

			<section class="content markdown-tutorial-page__content">
				<div
					v-for="sectionItem in conceptSections"
					:key="sectionItem.id"
					class="markdown-tutorial-page__concept-section"
				>
					<div v-html="sectionItem.html"></div>
					<WorkingWithDataVisual
						v-for="variant in getSectionVisuals(sectionItem.id)"
						:key="`${sectionItem.id}-${variant}`"
						:variant="variant"
					/>
				</div>
			</section>

			<section v-if="parsed.checkpoint" id="checkpoint">
				<CheckpointBox
					:title="parsed.checkpoint.title"
					:questions="parsed.checkpoint.questions"
				/>
			</section>

			<section v-if="parsed.guidedPractice" id="guided-practice">
				<GuidedPractice
					:title="parsed.guidedPractice.title"
					:description="parsed.guidedPractice.description"
					:steps="guidedSteps"
				/>
			</section>

			<section v-if="parsed.independentPractice" id="independent-practice">
				<IndependentPractice
					:title="parsed.independentPractice.title"
					:description="parsed.independentPractice.description"
					task-title="Your Task:"
					:task="independentTaskHtml"
					:requirements="parsed.independentPractice.requirements"
					:rubric="
						parsed.independentPractice.successCriteria.map((item) => ({
							criteria: item,
							success: 'Completed clearly and correctly in your solution.',
						}))
					"
				/>
			</section>

			<section v-if="parsed.closure" id="closure">
				<ClosureSection
					:title="parsed.closure.title"
					:key-takeaways="
						parsed.closure.keyTakeaways.length
							? parsed.closure.keyTakeaways
							: parsed.objectives.items
					"
					:objectives="parsed.objectives.items"
					:reflection-prompts="[
						{
							title: 'Pause and reflect',
							icon: '💭',
							questions: [
								'Which idea from this lesson now feels practical rather than abstract?',
								'What would you build or test next to make this stick?'
							]
						}
					]"
					:next-steps="closureHtml"
				/>
			</section>

			<TutorialRecommendations :current-path="currentPath" />
		</div>
	</div>
</template>

<style scoped>
.markdown-tutorial-page__content :deep(hr) {
	margin: 2rem 0;
}

.markdown-tutorial-page__content :deep(blockquote) {
	border-left: 4px solid #3e8ed0;
	padding: 1rem 1.25rem;
	background: #f0f9ff;
	margin: 1.5rem 0;
}

.markdown-tutorial-page__content :deep(.table-container) {
	margin: 1.5rem 0;
}

.markdown-tutorial-page__content :deep(a) {
	text-decoration: underline;
}
</style>
