<template>
	<div class="container section">
		<div class="content tutorial-content">
			<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/"
						><i class="fa-solid fa-house mr-2"></i> Home</router-link
					>
				</li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link :to="'/tutorials/beginner/html-basics/'">HTML Basics</router-link>
				</li>
				<li class="is-active">
					<a href="#" aria-current="page">Working with Text</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">30 minutes</span>
			<span class="tag is-success">Theory</span>
			<span class="tag is-primary">Practice</span>
			<span class="tag is-link">Project</span>
		</div>

		<section id="concept" class="section">
			<h1 class="title is-1">
				<i class="fab fa-html5 html-icon"></i> Working with Text Elements
			</h1>

			<!-- Hunter Element 1: Anticipatory Set -->
			<AnticipatorySet
				title="📝 Text is Everywhere"
				:hook="`<p>Think about every website you visit: blogs, news sites, social media, online stores. What do they all have in common? <strong>Text!</strong> How that text looks and is organized makes the difference between a professional site and a messy one.</p>
				<p>Did you know that 90% of web content is text-based? Learning to structure and format text properly is one of the most important skills in web development.</p>`"
				:reflection-prompts="[
					'Have you noticed how some websites have clear, organized text while others look cluttered?',
					'Why do headings on a page get smaller as you go down?',
					'How does proper text structure help people read faster?'
				]"
				connection="In this lesson, you'll master the art of organizing and formatting text—skills you'll use on every single website you build."
			/>

			<!-- Hunter Element 2: Learning Objectives -->
			<LearningObjectives
				:objectives="[
					'Understand heading hierarchy (h1-h6) and why it matters for SEO and accessibility',
					'Apply semantic text formatting elements (strong, em, mark) correctly',
					'Create well-structured content with paragraphs and line breaks',
					'Build organized lists (ordered, unordered, and description lists)'
				]"
				purpose="Text structure is the backbone of content on the web. Master this and you'll create websites that are easy to read, rank well in search engines, and are accessible to everyone—including people using screen readers."
			/>

			<!-- Practice Options -->
			<CodingOptions filename="text.html" class="mt-4 mb-2" />
			<h2 class="title is-3">Understanding Heading Hierarchy</h2>
			<p>
				HTML provides six levels of headings, from <code>&lt;h1&gt;</code> to
				<code>&lt;h6&gt;</code>.
			</p>

			<div class="box">
				<h4 class="title is-4">Example:</h4>
				<CodeMirror v-model="headingExample" :height="250" :readonly="true" />
				<div
					class="preview-container mt-4"
					v-html="sanitizedHeadingPreview"
				></div>
			</div>

			<div class="box is-warning">
				<h3 class="title is-4">
					<i class="fas fa-exclamation-triangle"></i> Best Practices for
					Headings
				</h3>
				<ul>
					<li>Use only one <code>&lt;h1&gt;</code> per page</li>
					<li>Don't skip heading levels (e.g., don't go from h2 to h4)</li>
					<li>Keep your heading hierarchy logical</li>
					<li>Use headings to create a clear content structure</li>
				</ul>
			</div>

			<h2 class="title is-3">Text Formatting</h2>
			<p>HTML provides various ways to format and structure your text:</p>

			<div class="box">
				<h4 class="title is-4">Key Text Elements:</h4>
				<CodeMirror
					v-model="formattingExample"
					:height="300"
					:readonly="true"
				/>
				<div
					class="preview-container mt-4"
					v-html="sanitizedFormattingPreview"
				></div>
			</div>

			<div class="box is-info">
				<h3 class="title is-4">
					<i class="fas fa-info-circle"></i> Text Element Reference
				</h3>
				<ul>
					<li><code>&lt;p&gt;</code> - Paragraphs</li>
					<li><code>&lt;strong&gt;</code> - Important text</li>
					<li><code>&lt;em&gt;</code> - Emphasized text</li>
					<li><code>&lt;br&gt;</code> - Line break</li>
					<li><code>&lt;hr&gt;</code> - Horizontal rule</li>
					<li><code>&lt;small&gt;</code> - Smaller text</li>
					<li><code>&lt;mark&gt;</code> - Highlighted text</li>
				</ul>
				<p class="mt-3">
					<i class="fas fa-book"></i> <strong>Further Reading:</strong> Check
					the
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#text_content"
						target="_blank"
						rel="noopener"
					>
						MDN documentation on text elements
					</a>
					for detailed information.
				</p>
			</div>

			<h2 class="title is-3">Working with Lists</h2>
			<p>HTML provides two main types of lists for organizing content:</p>

			<div class="box">
				<h4 class="title is-4">List Examples:</h4>
				<CodeMirror v-model="listExample" :height="300" :readonly="true" />
				<div class="preview-container mt-4" v-html="sanitizedListPreview"></div>
			</div>

			<div class="box is-success">
				<h3 class="title is-4"><i class="fas fa-list"></i> Types of Lists</h3>
				<ul>
					<li><code>&lt;ul&gt;</code> - Unordered list (bullet points)</li>
					<li><code>&lt;ol&gt;</code> - Ordered list (numbers)</li>
					<li><code>&lt;li&gt;</code> - List items</li>
				</ul>
			</div>

			<h2 class="title is-3">Practice Project: Restaurant Website</h2>
			<p>
				Create a complete restaurant page using all the elements we've learned:
			</p>

			<div class="columns">
				<div class="column is-6">
					<h4 class="title is-4"><i class="fas fa-code"></i> Code</h4>
					<CodeMirror
						v-model="practiceCode"
						:height="400"
						@change="updatePracticePreview"
					/>
				</div>
				<div class="column is-6">
					<h4 class="title is-4"><i class="fas fa-eye"></i> Preview</h4>
					<div
						class="preview-container"
						v-html="sanitizedPracticePreview"
					></div>
				</div>
			</div>

			<div class="box mt-6">
				<h2 class="title is-3"><i class="fas fa-laptop-code"></i> Your Task</h2>
				<p>
					Now that you've learned about headings, text formatting, and lists,
					let's put it all together! You'll create a restaurant menu page that
					uses all these elements effectively.
				</p>

				<div class="notification is-info is-light mt-4">
					<h3 class="title is-4">What You'll Practice:</h3>
					<ul>
						<li>Using heading hierarchy (h1-h6)</li>
						<li>Formatting text for emphasis and readability</li>
						<li>Creating organized lists</li>
						<li>Structuring content logically</li>
					</ul>
				</div>
			</div>
		<!-- Checkpoint: Check Understanding -->
		<CheckpointBox
			title="⏸️ Pause & Check: Text Formatting"
			description="Before the practice exercise, test your understanding:"
			:questions="checkpointQuestions"
		/>
			<div class="box is-info mt-4">
				<h3 id="black-swan" class="title is-4">
					<i class="fas fa-tasks"></i> Restaurant Menu Task
				</h3>
				<p>
					Using the content below, create a well-structured restaurant menu
					page. Think about how to organize the information to make it easy to
					read and navigate.
				</p>

				<div class="content mt-4">
					<h4>Restaurant Information:</h4>
					<pre v-pre class="has-background-grey-lighter p-3">
Restaurant Name: Black Swan Bistro
Tagline: Elegant Dining, Modern Australian Cuisine

Description: Welcome to Black Swan Bistro, where we blend traditional Australian 
flavors with modern culinary techniques. Our innovative menu showcases the finest 
local ingredients in a sophisticated yet welcoming atmosphere.

Special Announcement: Join us for our Winter Degustation Series!

Hours of Operation:
Tuesday-Saturday: 5:30pm-10pm
Sunday Lunch: 12pm-3pm
Closed Mondays
				</pre
					>

					<h4 class="mt-4">Menu Sections:</h4>
					<pre v-pre class="has-background-grey-lighter p-3">
STARTERS
Small Plates
- Sydney Rock Oysters
- Kangaroo Carpaccio
- Native Mushroom Bruschetta

Soups & Salads
- Pumpkin & Macadamia Soup
- Quinoa & Roasted Vegetable Salad
- Grilled Prawns & Mango Salad
				</pre
					>
				</div>

				<div class="notification is-warning is-light mt-4">
					<p><strong>Remember to:</strong></p>
					<ul>
						<li>Use <code>&lt;h1&gt;</code> for the restaurant name</li>
						<li>
							Use <code>&lt;h2&gt;</code> for main menu sections (Starters, Main
							Courses, Desserts)
						</li>
						<li>
							Use <code>&lt;h3&gt;</code> for subsections (From the Garden, From
							the Sea, etc.)
						</li>
						<li>
							Use <code>&lt;strong&gt;</code> for emphasis where appropriate
						</li>
						<li>Use <code>&lt;em&gt;</code> for the tagline</li>
						<li>Use <code>&lt;mark&gt;</code> for the special announcement</li>
						<li>Use <code>&lt;small&gt;</code> for the hours of operation</li>
						<li>Use lists (<code>&lt;ul&gt;</code>) for menu items</li>
					</ul>
				</div>
			</div>

			<!-- Add this before the completion section -->
			<!-- Quiz Section -->
			<QuizComponent
				title="Text Elements Quiz"
				description="Test your understanding of HTML text elements and formatting."
				:questions="quizQuestions"
				:tutorial-path="route.path"
				@quiz-completed="handleQuizCompleted"
			/>

			<!-- Tutorial Completion Section -->
			<div class="box mt-6">
				<h2 id="solutions" class="title is-3 mt-6">Exercise Solutions</h2>

				<h3 class="title">HTML Text Elements</h3>
				<p class="subtitle">
					You have learned how to structure and format text content using HTML.
					Compare your solution to the example solutions below for the Black
					Swan Bistro. Take this knowledge and apply it to the Rotto Rocks
					project.
				</p>

				<!-- 3. Solutions -->
				<div id="basic-solution">
					<SolutionViewer
						title="Basic Page Structure"
						description="Solution showing how to structure the restaurant's basic information"
						:solution="basicSolution"
						:explanation="explanation"
					/>
				</div>

				<div id="menu-solution">
					<SolutionViewer
						title="Menu Structure"
						description="Solution demonstrating how to organize the menu"
						:solution="menuSolution"
						:explanation="explanation"
					/>
				</div>
			</div>

			<div class="box mt-6">
				<h2 class="title is-3"><i class="fas fa-forward"></i> What's Next?</h2>

				<div class="content">
					<p>Great work! You've learned how to:</p>
					<ul>
						<li>Structure content with headings</li>
						<li>Format text for emphasis and readability</li>
						<li>Create organized lists</li>
						<li>Build real-world page layouts</li>
					</ul>

					<p class="mt-4">In the next lessons, you'll learn about:</p>

					<div class="columns mt-2">
						<div class="column">
							<div class="box has-background-primary-light">
								<h4 class="title is-4"><i class="fas fa-link"></i> Links</h4>
								<p>Connect your pages and link to external content</p>
								<router-link
									:to="'/tutorials/beginner/html-basics/html-links'"
									class="button is-primary is-outlined mt-2"
								>
									Start Links Tutorial
								</router-link>
							</div>
						</div>

						<div class="column">
							<div class="box has-background-info-light">
								<h4 class="title is-4"><i class="fas fa-image"></i> Images</h4>
								<p>Add visual content to make your pages engaging</p>
								<router-link
									:to="'/tutorials/beginner/html-basics/html-images'"
									class="button is-info is-outlined mt-2"
								>
									Start Images Tutorial
								</router-link>
							</div>
						</div>
					</div>

					Swan Bistro a
					<div class="notification is-success is-light mt-4">
						<p>
							<strong>Pro Tip:</strong> Practice what you've learned by updating
							your restaurant menu or Rottnest activities page as you complete
							the next tutorials. Try adding links to booking pages and images
							of the food or activities!
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>

	<!-- Closure Section -->
	<ClosureSection
		title="🏁 Lesson Complete: You're a Text Master!"
		:key-takeaways="closureKeyTakeaways"
		:objectives="closureObjectives"
		:reflection-prompts="closureReflectionPrompts"
		real-world-application="<p>Every blog post, article, documentation page, and content-heavy website relies on the text formatting you learned today. These are the most frequently used HTML elements in professional web development!</p>"
		next-steps="<p>In the next lesson, <strong>Working with Links</strong>, you'll learn how to connect pages together and create navigation—the foundation of the web itself!</p>"
	/>

	</div>
</template>

<script setup>
import { ref, computed, inject, onMounted } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import DOMPurify from 'dompurify';
import { useHead } from '@vueuse/head';
import CodingOptions from '@/components/CodingOptions.vue';
import SolutionViewer from '@/components/SolutionViewer.vue';
import TutorialNavigation from '@/components/TutorialNavigation.vue';
import QuizComponent from '@/components/QuizComponent.vue';
import { useRoute } from 'vue-router';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

const checkpointQuestions = [
	{
		question: "What's the difference between <strong> and <b> tags?",
		answer:
			`<strong> indicates semantic importance (meaning), while <b> is just visual boldness without meaning. Use <strong> for better accessibility and SEO.`,
	},
	{
		question: 'When would you use <em> instead of <i>?',
		answer:
			'Use <em> when you want to emphasize something for meaning/importance. Use <i> for technical terms, foreign words, or titles where italics is just a visual style.',
	},
	{
		question: 'How do you create a nested list (a list within a list)?',
		answer:
			'Place a complete <ul> or <ol> element inside an <li> element of the parent list.',
	},
	{
		question: "What's the proper heading hierarchy and why does it matter?",
		answer:
			"Start with h1 (main title), then h2 (sections), h3 (subsections), etc. Don't skip levels. This helps screen readers, SEO, and logical document structure.",
	},
];

const closureKeyTakeaways = [
	'Semantic HTML elements like <strong> and <em> convey meaning, not just visual styling',
	'Proper heading hierarchy (h1→h2→h3) creates accessible and SEO-friendly documents',
	'Lists (ul, ol, dl) organize information clearly for both humans and machines',
	'Text formatting elements make content scannable and emphasize important points',
	'Combining these elements creates professional, well-structured content',
];

const closureObjectives = [
	'Use semantic text elements for bold, italic, and emphasis',
	'Create proper heading hierarchies in HTML documents',
	'Build ordered, unordered, and description lists',
	'Apply text formatting for readability and meaning',
	'Structure restaurant menu content with proper HTML',
];

const closureReflectionPrompts = [
	{
		title: 'Semantic Thinking',
		icon: '🧠',
		questions: [
			'Look at a news article online. How many different heading levels can you spot?',
			'Why do you think accessibility tools like screen readers need semantic HTML?'
		],
	},
	{
		title: 'Professional Practice',
		icon: '💼',
		content: `<p>Browse through some restaurant websites. Notice how they use headings, lists, and formatting. What makes some menus easier to read than others?</p>`,
	},
];

useHead({
	title: 'Working with Text - HTML Basics - GraphitEdge Tutorials',
	meta: [
		{
			name: 'description',
			content:
				'Learn how to work with HTML text elements, including headings, paragraphs, formatting, and lists.',
		},
	],
});

const pageSections = inject('pageSections');

// Define your page sections
onMounted(() => {
	pageSections.value = [
		{ id: 'concept', title: 'Concept Explanation' },
		{ id: 'black-swan', title: 'Black Swan Bistro Exercise' },
		{ id: 'rotto-rocks', title: 'Project: Rotto Rocks' },
		{
			id: 'solutions',
			title: 'Example Solutions',
			subsections: [
				{ id: 'basic-solution', title: 'Basic Page Structure' },
				{ id: 'menu-solution', title: 'Menu Structure' },
			],
		},
	];
});

const headingExample = ref(`<h1>Main Title</h1>
<h2>Major Section</h2>
<h3>Subsection</h3>
<h4>Minor Section</h4>
<h5>Small Heading</h5>
<h6>Smallest Heading</h6>`);

const formattingExample = ref(`<p><strong>Black Swan Bistro</strong></p>
<p><em>Where elegance meets culinary excellence</em></p>

<p>Experience fine dining in a relaxed atmosphere. 
Our chef creates seasonal menus using the finest 
local ingredients.</p>

<p><mark>Now taking bookings for Valentine's Day!</mark></p>

<hr>

<p><small>
  Open Monday-Saturday: 5pm-10pm<br>
  Sunday Brunch: 10am-3pm
</small></p>`);

const listExample = ref(`<!-- Unordered List -->
<h2>Why Choose Us?</h2>
<ul>
    <li>Farm-to-table ingredients</li>
    <li>Award-winning chef</li>
    <li>Waterfront location</li>
    <li>Private dining available</li>
</ul>

<!-- Ordered List -->
<h2>Today's Specials</h2>
<ol>
    <li>Butternut Squash Soup</li>
    <li>Grilled Sea Bass</li>
    <li>Chocolate Lava Cake</li>
</ol>`);

const practiceCode = ref(`<!-- Start with your restaurant page here -->
<h1>Your Restaurant Name</h1>

`);

// Add computed properties for sanitized previews
const sanitizedHeadingPreview = computed(() =>
	DOMPurify.sanitize(headingExample.value),
);
const sanitizedFormattingPreview = computed(() =>
	DOMPurify.sanitize(formattingExample.value),
);
const sanitizedListPreview = computed(() =>
	DOMPurify.sanitize(listExample.value),
);
const sanitizedPracticePreview = computed(() =>
	DOMPurify.sanitize(practiceCode.value),
);

const updatePracticePreview = () => {
	// Preview updates automatically through computed property
};

// Solution for basic text structure
const basicSolution = ref(`
<div class="restaurant-info">
  <h1>Black Swan Bistro</h1>
  <p class="tagline">Elegant Dining, Modern Australian Cuisine</p>

  <h2>Hours of Operation</h2>
  <p>Tuesday-Saturday: 5:30pm-10pm</p>
  <p>Sunday Lunch: 12pm-3pm</p>
  <p>Closed Mondays</p>

  <p><strong>Special Announcement:</strong> Join us for our Winter Degustation Series!</p>
</div>
`);

// Solution for menu structure
const menuSolution = ref(`
<div class="menu-section">
  <h2>Our Menu</h2>

  <h3>Starters</h3>
  <h4>Small Plates</h4>
  <ul>
    <li>Sydney Rock Oysters</li>
    <li>Kangaroo Carpaccio</li>
    <li>Native Mushroom Bruschetta</li>
  </ul>

  <h4>Soups & Salads</h4>
  <ul>
    <li>Pumpkin & Macadamia Soup</li>
    <li>Quinoa & Roasted Vegetable Salad</li>
    <li>Grilled Prawns & Mango Salad</li>
  </ul>
</div>
`);

const explanation = ref(`
<h4>Key HTML Text Elements Used</h4>

<ul>
  <li><strong>&lt;h1&gt; to &lt;h4&gt;</strong>: Creates a clear hierarchy of information
    <ul>
      <li>h1 for restaurant name</li>
      <li>h2 for main sections</li>
      <li>h3 and h4 for menu categories</li>
    </ul>
  </li>
  <li><strong>&lt;p&gt;</strong>: Used for descriptions and general text</li>
  <li><strong>&lt;ul&gt; and &lt;li&gt;</strong>: Perfect for menu items</li>
  <li><strong>&lt;strong&gt;</strong>: Emphasizes important text</li>
</ul>

<div class="notification is-info is-light">
  <strong>Pro Tip:</strong> Notice how proper heading levels (h1 → h4) create a natural content hierarchy that's both visually appealing and great for accessibility.
</div>
`);

// Quiz questions
const quizQuestions = [
	{
		text: 'Which heading element has the largest font size by default?',
		options: ['<h6>', '<h4>', '<h2>', '<h1>'],
		correctAnswer: 3,
		explanation:
			'The <h1> element is the highest level heading and has the largest default font size.',
	},
	{
		text: 'Which element is used to emphasize text with italics?',
		options: ['<strong>', '<em>', '<i>', '<mark>'],
		correctAnswer: 1,
		explanation:
			'The <em> element is used for emphasis and is typically displayed as italic text.',
	},
	{
		text: 'What is the correct HTML element for creating an unordered list?',
		options: ['<ol>', '<li>', '<ul>', '<list>'],
		correctAnswer: 2,
		explanation:
			'The <ul> element creates an unordered list, while <li> is used for individual list items.',
	},
	{
		text: 'Which element creates a horizontal rule (line) across the page?',
		options: ['<line>', '<hr>', '<br>', '<divider>'],
		correctAnswer: 1,
		explanation:
			'The <hr> element creates a horizontal rule or thematic break in an HTML page.',
	},
	{
		text: 'What is the best practice for heading hierarchy?',
		options: [
			'Use headings based on their appearance',
			'Skip heading levels for better design',
			'Use multiple <h1> elements on a page',
			'Follow a logical structure without skipping levels',
		],
		correctAnswer: 3,
		explanation:
			'For proper document structure and accessibility, headings should follow a logical hierarchy without skipping levels.',
	},
];

// Add the useRoute import and route constant
const route = useRoute();

// Handle quiz completion
const handleQuizCompleted = (result) => {
	console.log(
		'Quiz completed with score:',
		result.score,
		'out of',
		result.total,
	);
	// You can add additional logic here if needed
};
</script>

<style scoped>
.html-icon {
	color: #e34f26;
	margin-right: 0.5rem;
}

.preview-container {
	padding: 1rem;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	background: white;
	min-height: 300px;
	overflow-y: auto;
}

.is-sticky {
	position: sticky;
	top: 2rem;
}

.table-of-contents {
	padding: 1.5rem;
}

.table-of-contents ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

.table-of-contents li {
	margin: 0.5rem 0;
}

.table-of-contents ul ul {
	margin-left: 1.5rem;
	font-size: 0.9em;
}

.table-of-contents a {
	color: #4a4a4a;
	text-decoration: none;
}

.table-of-contents a:hover {
	color: #3273dc;
}

@media screen and (max-width: 768px) {
	.table-of-contents {
		display: none;
	}

	.column.is-3 {
		display: none;
	}
}

/* Add margin-top to create space between nav and content */
.columns {
	margin-top: 2rem;
}
</style>
