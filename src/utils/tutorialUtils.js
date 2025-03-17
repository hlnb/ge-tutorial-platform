/**
 * Tutorial Utilities
 * Helper functions for working with tutorials
 */

/**
 * Get recommendations for a tutorial
 * @param {string} path - The current tutorial path
 * @returns {Object} - Object containing next tutorial, related tutorials, practice projects, and resources
 */
export function getTutorialRecommendations(path) {
	// Default empty recommendations
	const defaultRecommendations = {
		nextTutorial: null,
		relatedTutorials: [],
		practiceProjects: [],
		resources: [],
	};

	// If no path provided, return empty recommendations
	if (!path) return defaultRecommendations;

	// Extract section and tutorial from path
	const pathParts = path.split('/').filter(Boolean);

	if (pathParts.length < 3) return defaultRecommendations;

	// Handle different path formats
	let section, tutorial;

	// Check if the path includes 'beginner' segment
	if (pathParts.includes('beginner')) {
		// Format: /tutorials/beginner/html-basics/first-page
		const beginnerIndex = pathParts.indexOf('beginner');
		if (beginnerIndex + 2 >= pathParts.length) return defaultRecommendations;

		section = pathParts[beginnerIndex + 1]; // e.g., 'html-basics'
		tutorial = pathParts[beginnerIndex + 2]; // e.g., 'first-page'
	} else {
		// Format: /tutorials/html-basics/first-page
		section = pathParts[1]; // e.g., 'html-basics'
		tutorial = pathParts[2]; // e.g., 'first-page'
	}

	// Get recommendations based on section and tutorial
	return getRecommendationsForTutorial(section, tutorial);
}

/**
 * Get recommendations for a specific tutorial
 * @param {string} section - The tutorial section (e.g., 'html-basics', 'css-basics')
 * @param {string} tutorial - The specific tutorial (e.g., 'first-page', 'text')
 * @returns {Object} - Object containing next tutorial, related tutorials, practice projects, and resources
 */
function getRecommendationsForTutorial(section, tutorial) {
	// Get the recommendations map for the section
	const recommendationsMap = tutorialRecommendations[section] || {};

	// Get recommendations for the specific tutorial
	return (
		recommendationsMap[tutorial] || {
			nextTutorial: null,
			relatedTutorials: [],
			practiceProjects: [],
			resources: [],
		}
	);
}

/**
 * Map of tutorial recommendations
 * Organized by section and tutorial
 */
const tutorialRecommendations = {
	'html-basics': {
		'first-page': {
			nextTutorial: {
				path: '/tutorials/html-basics/text',
				title: 'Working with Text',
			},
			relatedTutorials: [
				{
					path: '/tutorials/getting-started/web-basics',
					title: 'Web Basics',
				},
			],
			practiceProjects: [
				{
					title: 'Personal Profile Page',
					description:
						'Create a simple personal profile page with basic HTML structure',
					tags: ['HTML', 'Beginner', 'Structure'],
					path: '/projects/personal-profile',
				},
				{
					title: 'Recipe Page',
					description:
						'Build a page for your favorite recipe using HTML structure',
					tags: ['HTML', 'Beginner', 'Content'],
					path: '/projects/recipe-page',
				},
			],
			resources: [
				{
					title: 'MDN: Getting started with HTML',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started',
					description: 'Comprehensive guide to HTML basics',
				},
				{
					title: 'HTML5 Doctor',
					url: 'http://html5doctor.com/',
					description: 'Articles about HTML5 elements and best practices',
				},
			],
		},
		text: {
			nextTutorial: {
				path: '/tutorials/html-basics/links',
				title: 'Links & Navigation',
			},
			relatedTutorials: [
				{
					path: '/tutorials/css-basics/text-properties',
					title: 'CSS Text Properties',
				},
			],
			practiceProjects: [
				{
					title: 'Blog Post',
					description: 'Create a blog post with various text formatting',
					tags: ['HTML', 'Text', 'Formatting'],
					path: '/projects/blog-post',
				},
			],
			resources: [
				{
					title: 'MDN: HTML text fundamentals',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals',
					description: 'Guide to HTML text elements',
				},
			],
		},
		links: {
			nextTutorial: {
				path: '/tutorials/html-basics/images',
				title: 'Working with Images',
			},
			relatedTutorials: [
				{
					path: '/tutorials/html-basics/doc-structure',
					title: 'Document Structure',
				},
			],
			practiceProjects: [
				{
					title: 'Multi-page Website',
					description: 'Create a simple multi-page website with navigation',
					tags: ['HTML', 'Links', 'Navigation'],
					path: '/projects/multi-page-site',
				},
			],
			resources: [
				{
					title: 'MDN: Creating hyperlinks',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks',
					description: 'Guide to creating effective links',
				},
			],
		},
		images: {
			nextTutorial: {
				path: '/tutorials/html-basics/doc-structure',
				title: 'Document Structure',
			},
			relatedTutorials: [
				{
					path: '/tutorials/css-basics/box-model',
					title: 'CSS Box Model',
				},
			],
			practiceProjects: [
				{
					title: 'Photo Gallery',
					description: 'Build a simple photo gallery with images and captions',
					tags: ['HTML', 'Images', 'Gallery'],
					path: '/projects/photo-gallery',
				},
			],
			resources: [
				{
					title: 'MDN: Images in HTML',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML',
					description: 'Guide to using images effectively',
				},
				{
					title: 'Web.dev: Responsive images',
					url: 'https://web.dev/learn/design/responsive-images/',
					description: 'Best practices for responsive images',
				},
			],
		},
		'doc-structure': {
			nextTutorial: {
				path: '/tutorials/html-basics/forms',
				title: 'HTML Forms',
			},
			relatedTutorials: [
				{
					path: '/tutorials/css-basics/layout',
					title: 'CSS Layout Basics',
				},
			],
			practiceProjects: [
				{
					title: 'Semantic Blog Layout',
					description: 'Create a blog layout using semantic HTML elements',
					tags: ['HTML', 'Semantics', 'Structure'],
					path: '/projects/semantic-blog',
				},
			],
			resources: [
				{
					title: 'MDN: Document and website structure',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure',
					description: 'Guide to structuring HTML documents',
				},
			],
		},
		forms: {
			nextTutorial: {
				path: '/tutorials/html-basics/html-emmet',
				title: 'HTML Emmet',
			},
			relatedTutorials: [
				{
					path: '/tutorials/css-basics/selectors',
					title: 'CSS Selectors',
				},
			],
			practiceProjects: [
				{
					title: 'Contact Form',
					description: 'Build a contact form with various input types',
					tags: ['HTML', 'Forms', 'Inputs'],
					path: '/projects/contact-form',
				},
				{
					title: 'Survey Form',
					description: 'Create a comprehensive survey form with validation',
					tags: ['HTML', 'Forms', 'Validation'],
					path: '/projects/survey-form',
				},
			],
			resources: [
				{
					title: 'MDN: HTML forms',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms',
					description: 'Guide to creating and styling forms',
				},
				{
					title: 'Web.dev: Learn Forms',
					url: 'https://web.dev/learn/forms/',
					description: 'Modern form design and implementation',
				},
			],
		},
		'html-emmet': {
			nextTutorial: {
				path: '/tutorials/css-basics',
				title: 'CSS Basics Introduction',
			},
			relatedTutorials: [
				{
					path: '/tutorials/getting-started/text-editors',
					title: 'Text Editors',
				},
			],
			practiceProjects: [
				{
					title: 'Emmet Speed Challenge',
					description:
						'Practice your Emmet skills by recreating layouts quickly',
					tags: ['HTML', 'Emmet', 'Productivity'],
					path: '/projects/emmet-challenge',
				},
			],
			resources: [
				{
					title: 'Emmet Documentation',
					url: 'https://docs.emmet.io/',
					description: 'Official Emmet documentation',
				},
				{
					title: 'Emmet Cheat Sheet',
					url: 'https://docs.emmet.io/cheat-sheet/',
					description: 'Quick reference for Emmet abbreviations',
				},
			],
		},
	},
	'css-basics': {
		introduction: {
			nextTutorial: {
				path: '/tutorials/css-basics/selectors',
				title: 'CSS Selectors',
			},
			relatedTutorials: [
				{
					path: '/tutorials/html-basics/first-page',
					title: 'Your First HTML Page',
				},
			],
			practiceProjects: [
				{
					title: 'Styled Profile Page',
					description: 'Add CSS styling to a simple profile page',
					tags: ['CSS', 'Styling', 'Beginner'],
					path: '/projects/styled-profile',
				},
			],
			resources: [
				{
					title: 'MDN: CSS first steps',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps',
					description: 'Introduction to CSS concepts',
				},
				{
					title: 'CSS Tricks',
					url: 'https://css-tricks.com/',
					description: 'Articles and tutorials about CSS',
				},
			],
		},
		selectors: {
			nextTutorial: {
				path: '/tutorials/css-basics/box-model',
				title: 'The Box Model',
			},
			relatedTutorials: [
				{
					path: '/tutorials/html-basics/doc-structure',
					title: 'HTML Document Structure',
				},
			],
			practiceProjects: [
				{
					title: 'Selector Challenge',
					description:
						'Practice using different CSS selectors to style elements',
					tags: ['CSS', 'Selectors', 'Specificity'],
					path: '/projects/selector-challenge',
				},
			],
			resources: [
				{
					title: 'MDN: CSS selectors',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors',
					description: 'Comprehensive guide to CSS selectors',
				},
				{
					title: 'CSS Diner',
					url: 'https://flukeout.github.io/',
					description: 'Interactive game to learn CSS selectors',
				},
			],
		},
		'box-model': {
			nextTutorial: {
				path: '/tutorials/css-basics/text-properties',
				title: 'Text Properties',
			},
			relatedTutorials: [
				{
					path: '/tutorials/css-basics/layout',
					title: 'Layout Basics',
				},
			],
			practiceProjects: [
				{
					title: 'Card Components',
					description: 'Create different card designs using the box model',
					tags: ['CSS', 'Box Model', 'Components'],
					path: '/projects/card-components',
				},
			],
			resources: [
				{
					title: 'MDN: The box model',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model',
					description: 'Detailed explanation of the CSS box model',
				},
			],
		},
		// Add more CSS tutorials as needed
	},
	'javascript-basics': {
		'introduction': {
			nextTutorial: {
				path: '/tutorials/javascript-basics/variables-data-types',
				title: 'Variables and Data Types',
			},
			relatedTutorials: [
				{
					path: '/tutorials/getting-started/web-basics',
					title: 'Web Basics',
				},
			],
			practiceProjects: [
				{
					title: 'Hello World App',
					description: 'Create a simple interactive greeting application',
					tags: ['JavaScript', 'Beginner', 'DOM'],
					path: '/projects/hello-world-js',
				},
				{
					title: 'Number Game',
					description: 'Build a number guessing game with basic JavaScript',
					tags: ['JavaScript', 'Beginner', 'Logic'],
					path: '/projects/number-game',
				},
			],
			resources: [
				{
					title: 'MDN: Getting started with JavaScript',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript',
					description: 'Comprehensive guide to JavaScript basics',
				},
				{
					title: 'JavaScript.info',
					url: 'https://javascript.info/intro',
					description: 'Modern JavaScript Tutorial',
				},
			],
		},
		'variables-data-types': {
			nextTutorial: {
				path: '/tutorials/javascript-basics/operators',
				title: 'Operators',
			},
			relatedTutorials: [
				{
					path: '/tutorials/javascript-basics/introduction',
					title: 'Introduction to JavaScript',
				},
			],
			practiceProjects: [
				{
					title: 'Temperature Converter',
					description: 'Create a temperature conversion tool',
					tags: ['JavaScript', 'Variables', 'Math'],
					path: '/projects/temp-converter',
				},
				{
					title: 'Message Board Data Planning',
					description: 'Plan and declare variables for a message board system, practicing with strings, arrays, objects, and different data types.',
					tags: ['variables', 'data types', 'planning'],
					path: '/projects/interactive-demo',
				},
			],
			resources: [
				{
					title: 'MDN: JavaScript data types and data structures',
					url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures',
					description: 'Deep dive into JavaScript data types',
				},
			],
		},
		'operators': {
			nextTutorial: {
				path: '/tutorials/javascript-basics/conditionals',
				title: 'Control Flow',
			},
			relatedTutorials: [
				{
					path: '/tutorials/javascript-basics/functions',
					title: 'JavaScript Functions',
				},
			],
			practiceProjects: [
				{
					title: 'Calculator App',
					description: 'Build a basic calculator with arithmetic operators',
					tags: ['JavaScript', 'Operators', 'Math'],
					path: '/projects/calculator',
				},
				{
					title: 'Grade Calculator',
					description: 'Create a tool to calculate final grades',
					tags: ['JavaScript', 'Operators', 'Logic'],
					path: '/projects/grade-calc',
				},
			],
			resources: [
				{
					title: 'MDN: Expressions and operators',
					url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators',
					description: 'Complete guide to JavaScript operators',
				},
			],
		},
		'conditionals': {
			nextTutorial: {
				path: '/tutorials/javascript-basics/loops',
				title: 'Loops',
			},
			relatedTutorials: [
				{
					path: '/tutorials/javascript-basics/operators',
					title: 'Operators',
				},
			],
			practiceProjects: [
				{
					title: 'Number Guessing Game',
					description: 'Create an interactive number guessing game that uses conditionals to provide feedback to the player. Practice if statements, comparisons, and logical operators while building a fun game.',
					tags: ['conditionals', 'comparison operators', 'user input'],
					path: '/projects/number-guessing-game',
				},
				{
					title: 'Quiz Game',	
					description: 'Build a quiz with conditional logic',
					tags: ['JavaScript', 'Conditionals', 'DOM'],
					path: '/projects/quiz-game',
				},
			],
			resources: [
				{
					title: 'MDN: Making decisions in your code',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals',
					description: 'Guide to conditional statements in JavaScript',
				},
			],
		},
		'loops': {
			nextTutorial: {
				path: '/tutorials/javascript-basics/functions',
				title: 'Functions',
			},
			relatedTutorials: [
				{
					path: '/tutorials/javascript-basics/arrays',
					title: 'Working with Arrays',
				},
			],
			practiceProjects: [
				{
					title: 'Todo List',
					description: 'Build a todo list with array iteration',
					tags: ['JavaScript', 'Loops', 'Arrays'],
					path: '/projects/todo-list',
				},
				{
					title: 'Photo Gallery',
					description: 'Create an image gallery with dynamic content',
					tags: ['JavaScript', 'Loops', 'DOM'],
					path: '/projects/photo-gallery',
				},
			],
			resources: [
				{
					title: 'MDN: Loops and iteration',
					url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration',
					description: 'Complete guide to JavaScript loops',
				},
			],
		},
		'functions': {
			nextTutorial: {
				path: '/tutorials/javascript-basics/arrays',
				title: 'JavaScript Arrays',
			},
			relatedTutorials: [
				{
					path: '/tutorials/javascript-basics/variables',
					title: 'Variables & Data Types',
				},
				{
					path: '/tutorials/javascript-basics/objects',
					title: 'JavaScript Objects',
				}
			],
			practiceProjects: [
				{
					title: 'Calculator',
					description: 'Build a calculator using functions for each operation',
					tags: ['JavaScript', 'Functions', 'DOM Events'],
					path: '/projects/calculator',
				},
				{
					title: 'Todo List',
					description: 'Create a todo list app using functions to manage tasks',
					tags: ['JavaScript', 'Functions', 'Arrays'],
					path: '/projects/todo-list',
				},
				{
					title: 'Quiz Game',
					description: 'Develop a quiz game with functions for game logic',
					tags: ['JavaScript', 'Functions', 'Logic'],
					path: '/projects/quiz-game',
				}
			],
			resources: [
				{
					title: 'MDN: Functions Guide',
					url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions',
					description: 'Comprehensive guide to JavaScript functions',
				},
				{
					title: 'JavaScript.info: Functions',
					url: 'https://javascript.info/function-basics',
					description: 'In-depth tutorial on JavaScript functions',
				},
				{
					title: 'MDN: Arrow Functions',
					url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',
					description: 'Guide to arrow function syntax and usage',
				}
			]
		},
	},
};

export const projects = {
	'variables-data-types': {
		title: 'Message Board Data Planning',
		description: 'Plan and declare variables for a message board system, practicing with strings, arrays, objects, and different data types.',
		tags: ['variables', 'data types', 'planning'],
		difficulty: 'Beginner',
		time: '30 minutes'
	},
	'conditionals': {
		title: 'Number Guessing Game',
		description: 'Create an interactive number guessing game that uses conditionals to provide feedback to the player. Practice if statements, comparisons, and logical operators while building a fun game.',
		tags: ['conditionals', 'comparison operators', 'user input'],
		difficulty: 'Beginner',
		time: '45 minutes',
		prerequisites: ['variables-data-types']
	},
};
