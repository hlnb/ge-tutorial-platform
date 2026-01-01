<template>
	<div>
		<TutorialNavigation />
		
		<!-- Breadcrumb -->
		<div class="breadcrumb">
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li><router-link to="/tutorials/getting-started">{{ category }}</router-link></li>
				<li class="is-active"><a href="#">{{ title }}</a></li>
			</ul>
		</div>
		
		<h1>{{ title }}</h1>
		
		<!-- Hunter Framework Components -->
		
		<!-- 1. Anticipatory Set -->
		<AnticipatorySet 
			:hook="hunterFramework.anticipatorySet.hook"
			:reflection-prompts="hunterFramework.anticipatorySet.reflectionPrompts"
			:connection="hunterFramework.anticipatorySet.connection"
		/>
		
		<!-- 2. Learning Objectives -->
		<LearningObjectives 
			:objectives="hunterFramework.objectives.list"
			:purpose="hunterFramework.objectives.purpose"
			:prerequisites="hunterFramework.objectives.prerequisites"
		/>
		
		<!-- Main Content Sections -->
		<section>
			<h2>What is Web Development?</h2>
			<p>Content here...</p>
		</section>
		
		<!-- 3. First Checkpoint -->
		<CheckpointBox 
			:questions="hunterFramework.checkpoints[0].questions"
			:title="hunterFramework.checkpoints[0].title"
			:description="hunterFramework.checkpoints[0].description"
		/>
		
		<!-- More Content -->
		<section>
			<h2>Client-Server Model</h2>
			<p>Content here...</p>
		</section>
		
		<!-- 4. Second Checkpoint -->
		<CheckpointBox 
			:questions="hunterFramework.checkpoints[1].questions"
			:title="hunterFramework.checkpoints[1].title"
		/>
		
		<!-- 5. Guided Practice -->
		<GuidedPractice 
			:steps="hunterFramework.guidedPractice.steps"
			:success-criteria="hunterFramework.guidedPractice.successCriteria"
		/>
		
		<!-- 6. Independent Practice -->
		<IndependentPractice 
			:task="hunterFramework.independentPractice.task"
			:requirements="hunterFramework.independentPractice.requirements"
			:stretch-goals="hunterFramework.independentPractice.stretchGoals"
			:rubric="hunterFramework.independentPractice.rubric"
		/>
		
		<!-- 7. Closure -->
		<ClosureSection 
			:key-takeaways="hunterFramework.closure.keyTakeaways"
			:objectives="hunterFramework.objectives.list.map(obj => typeof obj === 'string' ? obj : obj.text)"
			:reflection-prompts="hunterFramework.closure.reflectionPrompts"
			:real-world-application="hunterFramework.closure.realWorldApplication"
			:next-steps="hunterFramework.closure.nextSteps"
		/>
		
	</div>
</template>

<script setup>
import { ref } from 'vue';
import TutorialNavigation from '@/components/TutorialNavigation.vue';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

// This data would come from CMS frontmatter
const title = ref('Example CMS-Powered Tutorial');
const category = ref('Getting Started');

const hunterFramework = ref({
	anticipatorySet: {
		hook: `<p>Think about your favorite website. Have you ever wondered what makes it work?</p>
		<p>Every time you load a page, watch a video, or click a button, there's an invisible conversation happening between your computer and servers around the world.</p>`,
		reflectionPrompts: [
			"What's your favorite website? What makes it engaging?",
			"Have you noticed any patterns in how websites are structured?"
		],
		connection: "By the end of this lesson, you'll understand the hidden mechanics behind every website you've ever visited!"
	},
	
	objectives: {
		list: [
			{ text: 'Explain how web browsers communicate with servers', verb: 'Explain', bloomsLevel: 'Understand' },
			{ text: 'Identify the three core technologies of web development (HTML, CSS, JavaScript)', verb: 'Identify', bloomsLevel: 'Remember' },
			{ text: 'Describe the client-server model', verb: 'Describe', bloomsLevel: 'Understand' },
			{ text: 'Create a simple mental model of how the web works', verb: 'Create', bloomsLevel: 'Create' }
		],
		purpose: 'Understanding web fundamentals gives you a solid foundation for all future web development work. You\'ll know not just HOW to code, but WHY your code works the way it does.',
		prerequisites: []
	},
	
	checkpoints: [
		{
			title: 'Pause & Check: Core Concepts',
			description: 'Before moving forward, can you answer these?',
			questions: [
				{
					question: 'What are the three core technologies that make websites work?',
					answer: 'HTML (structure), CSS (styling), and JavaScript (interactivity).'
				},
				{
					question: 'What\'s the difference between a client and a server?',
					answer: 'A client is your web browser that requests content. A server is a powerful computer that stores and sends website files back to your browser.'
				}
			]
		},
		{
			title: 'Pause & Check: Do You Understand?',
			description: 'Quick self-check on the client-server model:',
			questions: [
				{
					question: 'In your own words, explain what happens when you type "google.com" into your browser.',
					answer: 'Your browser (client) sends a request to Google\'s server. The server processes your request and sends back the HTML, CSS, and JavaScript files. Your browser then renders these files to display the Google homepage.'
				}
			]
		}
	],
	
	guidedPractice: {
		steps: [
			{
				title: 'Step 1: Observe a Website\'s Structure',
				instructions: '<p>Open your browser and go to any website. Right-click and select "View Page Source".</p>',
				hints: [
					'Look for tags like <html>, <head>, <body> - these are HTML elements',
					'Try to spot CSS (look for "style" or ".css" files)',
					'Can you find any JavaScript? (look for <script> tags or ".js" files)'
				]
			},
			{
				title: 'Step 2: Identify the Three Technologies',
				instructions: '<p>In the source code, try to identify examples of HTML, CSS, and JavaScript.</p>',
				hints: [
					'HTML uses angle brackets: <div>, <p>, <h1>',
					'CSS often appears in <style> tags or linked .css files',
					'JavaScript is found in <script> tags or .js files'
				]
			}
		],
		successCriteria: [
			'You can open and view the source code of any website',
			'You can identify HTML tags in the source',
			'You can spot where CSS and JavaScript are included'
		]
	},
	
	independentPractice: {
		task: '<p>Visit 3 different types of websites (news site, social media, e-commerce). For each one, identify examples of HTML, CSS, and JavaScript in action.</p>',
		requirements: [
			'Visit at least 3 different websites',
			'View the page source for each',
			'Take notes on what you observe',
			'Identify at least one example of HTML, CSS, and JS for each site'
		],
		stretchGoals: [
			'Try using browser DevTools (F12) instead of just View Source',
			'See if you can modify a website\'s CSS in real-time using DevTools',
			'Research what "responsive design" means'
		],
		rubric: [
			{
				criteria: 'Observation',
				success: 'You examined 3+ websites and noted their differences'
			},
			{
				criteria: 'Identification',
				success: 'You correctly identified HTML, CSS, and JavaScript elements'
			},
			{
				criteria: 'Understanding',
				success: 'You can explain in your own words what each technology does'
			}
		]
	},
	
	closure: {
		keyTakeaways: [
			'The web is built on three core technologies: HTML (structure), CSS (style), JavaScript (behavior)',
			'Websites use a client-server model: your browser requests content, servers deliver it',
			'You can inspect any website\'s code using "View Source" or browser DevTools',
			'Understanding these fundamentals helps you learn web development more effectively'
		],
		reflectionPrompts: [
			{
				title: 'What surprised you?',
				icon: '💭',
				content: '',
				questions: [
					'What was the most interesting thing you learned?',
					'Did anything challenge your previous understanding?'
				]
			},
			{
				title: 'Connections',
				icon: '🔗',
				content: '<p>How does understanding the client-server model change how you think about websites?</p>',
				questions: []
			}
		],
		realWorldApplication: '<p>Next time you visit a website, try to think about what\'s happening behind the scenes. Is the server nearby or on another continent? How fast did the page load? What technologies do you think are being used?</p>',
		nextSteps: '<p>In the next lesson, we\'ll dive deeper into HTML and actually start creating our own web pages!</p>'
	}
});
</script>

<style scoped>
.breadcrumb {
	margin: 1rem 0;
}

h1 {
	font-size: 2.5rem;
	margin: 1.5rem 0;
	color: #1f2937;
}

h2 {
	font-size: 2rem;
	margin: 2rem 0 1rem 0;
	color: #374151;
}

section {
	margin: 2rem 0;
}

p {
	line-height: 1.8;
	margin: 1rem 0;
}
</style>
