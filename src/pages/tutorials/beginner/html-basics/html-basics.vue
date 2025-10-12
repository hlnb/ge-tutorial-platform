<script setup>
import { ref, computed, onMounted, inject } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';

// Get the pageSections array from the parent component
const pageSections = inject('pageSections');

// Define the sections for this tutorial
onMounted(() => {
	if (pageSections) {
		pageSections.value = [
			{
				id: 'introduction',
				title: 'Introduction to HTML',
				subsections: [],
			},
			{
				id: 'what-is-html',
				title: 'What is HTML?',
				subsections: [],
			},
			{
				id: 'html-elements',
				title: 'HTML Elements',
				subsections: [],
			},
			{
				id: 'html-attributes',
				title: 'HTML Attributes',
				subsections: [],
			},
			{
				id: 'html-structure',
				title: 'HTML Document Structure',
				subsections: [],
			},
			{
				id: 'tutorial-overview',
				title: 'Tutorial Overview',
				subsections: [],
			},
			{
				id: 'getting-started',
				title: 'Getting Started',
				subsections: [],
			},
		];
	}
});

// Rest of your existing code...
</script>

<script>
// Frontmatter for the tutorial
export default {
	frontmatter: {
		title: 'HTML Basics',
		description:
			'Learn the fundamentals of HTML, the building blocks of the web.',
		category: 'HTML Basics',
		level: 'Beginner',
		order: 1,
		tags: ['html', 'web development', 'beginner'],
		lastUpdated: '2024-03-19',
	},
};
</script>
