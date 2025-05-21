/**
 * Tutorial Utilities
 * Helper functions for working with tutorials
 */

/**
 * Get recommendations for a tutorial based on its path
 * @param {string} path - The current tutorial path
 * @returns {Object} - Object containing next tutorial, related tutorials, practice projects, and resources
 */
export function getTutorialRecommendations(path) {
	// Return empty recommendations if path is null or undefined
	if (!path) {
		return {
			nextTutorial: null,
			relatedTutorials: [],
			practiceProjects: [],
			resources: []
		};
	}

	// Extract section and tutorial from path
	const pathParts = path.split('/').filter(Boolean);
	const section = pathParts[pathParts.length - 2]; // e.g., 'dom-basics'
	const tutorial = pathParts[pathParts.length - 1]; // e.g., 'introduction'

	// Get recommendations for the section and tutorial
	const sectionRecs = tutorialRecommendations[section];
	if (!sectionRecs) {
		console.warn(`No recommendations found for section: ${section}`);
		return {
			nextTutorial: null,
			relatedTutorials: [],
			practiceProjects: [],
			resources: []
		};
	}

	const tutorialRecs = sectionRecs[tutorial];
	if (!tutorialRecs) {
		console.warn(`No recommendations found for tutorial: ${tutorial} in section: ${section}`);
		return {
			nextTutorial: null,
			relatedTutorials: [],
			practiceProjects: [],
			resources: []
		};
	}

	return tutorialRecs;
}

/**
 * Get recommendations for a tutorial, handling both direct props and path-based lookup
 * @param {Object} props - Component props containing recommendations and current path
 * @param {Object} providedTutorial - Tutorial info provided by parent component
 * @returns {Object} - Object containing next tutorial, related tutorials, practice projects, and resources
 */
export function getRecommendationsFromProps(props, providedTutorial) {
	if (
		props.nextTutorial ||
		props.relatedTutorials.length > 0 ||
		props.practiceProjects.length > 0 ||
		props.resources.length > 0
	) {
		// Use provided props
		return {
			nextTutorial: props.nextTutorial,
			relatedTutorials: props.relatedTutorials,
			practiceProjects: props.practiceProjects,
			resources: props.resources,
		};
	} else {
		// Get recommendations from utility
		const recs = getTutorialRecommendations(props.currentPath);

		// If no next tutorial is found in recommendations but we have one from the parent, use that
		if (!recs.nextTutorial && providedTutorial && providedTutorial.next) {
			recs.nextTutorial = providedTutorial.next;
		}

		return recs;
	}
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
					title: 'Recipe Page',
					description: 'Create a recipe page with various text formatting',
					tags: ['HTML', 'Text', 'Formatting'],
					path: '/projects/recipe-page',
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
					title: 'Personal Profile',
					description: 'Create a personal profile page with navigation and links',
					tags: ['HTML', 'Links', 'Navigation'],
					path: '/projects/personal-profile',
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
					title: 'Recipe Page',
					description: 'Create a recipe page using semantic HTML elements',
					tags: ['HTML', 'Semantics', 'Structure'],
					path: '/projects/recipe-page',
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
					title: 'Interactive Demo',
					description: 'Build an interactive form with various input types',
					tags: ['HTML', 'Forms', 'Inputs'],
					path: '/projects/interactive-demo',
				},
				{
					title: 'Todo List',
					description: 'Create a todo list with form handling',
					tags: ['HTML', 'Forms', 'Validation'],
					path: '/projects/todo-list',
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
					title: 'Hello World',
					description: 'Practice your HTML skills by creating a simple webpage',
					tags: ['HTML', 'Emmet', 'Productivity'],
					path: '/projects/hello-world',
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
		'introduction': {
			nextTutorial: {
				path: '/tutorials/css-basics/selectors',
				title: 'CSS Selectors',
			},
			relatedTutorials: [
				{
					path: '/tutorials/html-basics/first-page',
					title: 'Creating Your First Page',
				},
			],
			practiceProjects: [
				{
					title: 'Personal Profile',
					description: 'Style your personal profile page with basic CSS',
					tags: ['CSS', 'Beginner', 'Styling'],
					path: '/projects/personal-profile',
				},
				{
					title: 'Photo Gallery',
					description: 'Add basic styling to your photo gallery',
					tags: ['CSS', 'Beginner', 'Images'],
					path: '/projects/photo-gallery',
				},
			],
			resources: [
				{
					title: 'MDN: Getting started with CSS',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started',
					description: 'Comprehensive guide to CSS basics',
				},
			],
		},
		'selectors': {
			nextTutorial: {
				path: '/tutorials/css-basics/box-model',
				title: 'CSS Box Model',
			},
			relatedTutorials: [
				{
					path: '/tutorials/css-basics/introduction',
					title: 'Introduction to CSS',
				},
			],
			practiceProjects: [
				{
					title: 'Selector Challenge',
					description: 'Practice using different CSS selectors to style elements',
					tags: ['CSS', 'Selectors', 'Practice'],
					path: '/projects/selector-challenge',
				},
				{
					title: 'Enhanced Photo Gallery',
					description: 'Use advanced selectors to create a responsive photo gallery',
					tags: ['CSS', 'Intermediate', 'Grid'],
					path: '/projects/photo-gallery-enhanced',
				},
			],
			resources: [
				{
					title: 'MDN: CSS Selectors',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors',
					description: 'Guide to CSS selectors',
				},
			],
		},
		'box-model': {
			nextTutorial: {
				path: '/tutorials/css-basics/layout',
				title: 'CSS Layout',
			},
			relatedTutorials: [
				{
					path: '/tutorials/css-basics/selectors',
					title: 'CSS Selectors',
				},
			],
			practiceProjects: [
				{
					title: 'Enhanced Personal Profile',
					description: 'Create a professional profile page using box model properties',
					tags: ['CSS', 'Intermediate', 'Layout'],
					path: '/projects/personal-profile-enhanced',
				},
				{
					title: 'Card Components',
					description: 'Build different card designs using box model properties',
					tags: ['CSS', 'Beginner', 'Box Model'],
					path: '/projects/card-components',
				},
			],
			resources: [
				{
					title: 'MDN: The Box Model',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model',
					description: 'Guide to CSS box model',
				},
			],
		},
		'layout': {
			nextTutorial: {
				path: '/tutorials/css-basics/typography',
				title: 'Typography',
			},
			relatedTutorials: [
				{
					path: '/tutorials/css-basics/box-model',
					title: 'CSS Box Model',
				},
			],
			practiceProjects: [
				{
					title: 'Enhanced Todo List',
					description: 'Create a modern todo list with CSS layout techniques',
					tags: ['CSS', 'Intermediate', 'Layout'],
					path: '/projects/todo-list-enhanced',
				},
				{
					title: 'Photo Gallery Enhanced',
					description: 'Build a responsive photo gallery using CSS Grid and Flexbox',
					tags: ['CSS', 'Intermediate', 'Grid'],
					path: '/projects/photo-gallery-enhanced',
				},
			],
			resources: [
				{
					title: 'MDN: CSS Layout',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout',
					description: 'Guide to CSS layout techniques',
				},
			],
		},
		'typography': {
			nextTutorial: {
				path: '/tutorials/css-basics/colors',
				title: 'Colors & Backgrounds',
			},
			relatedTutorials: [
				{
					path: '/tutorials/css-basics/layout',
					title: 'CSS Layout',
				},
			],
			practiceProjects: [
				{
					title: 'Enhanced Personal Profile',
					description: 'Style your profile page with typography and layout',
					tags: ['CSS', 'Intermediate', 'Typography'],
					path: '/projects/personal-profile-enhanced',
				},
			],
			resources: [
				{
					title: 'MDN: Fundamental text and font styling',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals',
					description: 'Guide to CSS typography',
				},
			],
		},
		'colors': {
			nextTutorial: {
				path: '/tutorials/css-basics/animations',
				title: 'Animations & Transitions',
			},
			relatedTutorials: [
				{
					path: '/tutorials/css-basics/typography',
					title: 'Typography',
				},
			],
			practiceProjects: [
				{
					title: 'Enhanced Todo List',
					description: 'Add color schemes and visual hierarchy to your todo list',
					tags: ['CSS', 'Intermediate', 'Colors'],
					path: '/projects/todo-list-enhanced',
				},
			],
			resources: [
				{
					title: 'MDN: Applying color to HTML elements using CSS',
					url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Applying_color',
					description: 'Guide to CSS colors',
				},
			],
		},
		'animations': {
			nextTutorial: {
				path: '/tutorials/css-basics/responsive',
				title: 'Responsive Design',
			},
			relatedTutorials: [
				{
					path: '/tutorials/css-basics/colors',
					title: 'Colors & Backgrounds',
				},
			],
			practiceProjects: [
				{
					title: 'Enhanced Todo List',
					description: 'Add smooth animations and transitions to your todo list',
					tags: ['CSS', 'Intermediate', 'Animations'],
					path: '/projects/todo-list-enhanced',
				},
				{
					title: 'Photo Gallery Enhanced',
					description: 'Create an interactive photo gallery with animations',
					tags: ['CSS', 'Intermediate', 'Animations'],
					path: '/projects/photo-gallery-enhanced',
				},
			],
			resources: [
				{
					title: 'MDN: Using CSS animations',
					url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations',
					description: 'Guide to CSS animations',
				},
			],
		},
		'responsive': {
			nextTutorial: {
				path: '/tutorials/css-basics/frameworks',
				title: 'CSS Frameworks',
			},
			relatedTutorials: [
				{
					path: '/tutorials/css-basics/animations',
					title: 'Animations & Transitions',
				},
			],
			practiceProjects: [
				{
					title: 'Enhanced Personal Profile',
					description: 'Make your profile page responsive for all devices',
					tags: ['CSS', 'Intermediate', 'Responsive'],
					path: '/projects/personal-profile-enhanced',
				},
				{
					title: 'Photo Gallery Enhanced',
					description: 'Create a responsive photo gallery that works on all devices',
					tags: ['CSS', 'Intermediate', 'Responsive'],
					path: '/projects/photo-gallery-enhanced',
				},
			],
			resources: [
				{
					title: 'MDN: Responsive design',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design',
					description: 'Guide to responsive design',
				},
			],
		},
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
					path: '/projects/hello-world',
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
					path: '/projects/temperature-converter',
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
					path: '/projects/grade-calculator',
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
					path: '/projects/number-game',
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
	'dom-basics': {
		'introduction': {
			nextTutorial: {
				path: '/tutorials/dom-basics/arrays',
				title: 'Arrays and Array Methods'
			},
			relatedTutorials: [
				{
					path: '/tutorials/javascript-basics/introduction',
					title: 'JavaScript Basics'
				},
				{
					path: '/tutorials/html-basics/doc-structure',
					title: 'HTML Document Structure'
				}
			],
			practiceProjects: [
				{
					title: 'Hello World App',
					description: 'Create a simple interactive greeting application to practice basic DOM manipulation',
					tags: ['DOM', 'JavaScript', 'Beginner'],
					path: '/projects/hello-world'
				}
			],
			resources: [
				{
					title: 'MDN: Introduction to the DOM',
					url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
					description: 'Comprehensive guide to understanding the DOM'
				}
			]
		},
		'arrays': {
			nextTutorial: {
				path: '/tutorials/dom-basics/dom-manipulation',
				title: 'DOM Manipulation'
			},
			relatedTutorials: [
				{
					path: '/tutorials/javascript-basics/arrays',
					title: 'JavaScript Arrays'
				}
			],
			practiceProjects: [
				{
					title: 'Photo Gallery',
					description: 'Build a dynamic photo gallery using arrays to manage and display images',
					tags: ['Arrays', 'DOM', 'JavaScript'],
					path: '/projects/photo-gallery-2'
				},
				{
					title: 'Todo List',
					description: 'Create a todo list application that uses arrays to manage tasks',
					tags: ['Arrays', 'DOM', 'JavaScript'],
					path: '/projects/todo-list-2'
				}
			],
			resources: [
				{
					title: 'MDN: Array Methods',
					url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
					description: 'Complete reference for JavaScript array methods'
				}
			]
		},
		'dom-manipulation': {
			nextTutorial: {
				path: '/tutorials/dom-basics/dom-events',
				title: 'DOM Events'
			},
			relatedTutorials: [
				{
					path: '/tutorials/dom-basics/arrays',
					title: 'Arrays and Array Methods'
				}
			],
			practiceProjects: [
				{
					title: 'Dynamic Form Builder',
					description: 'Create a form that dynamically adds and removes fields',
					tags: ['DOM', 'JavaScript', 'Forms'],
					path: '/projects/form-builder'
				},
				{
					title: 'Color Theme Switcher',
					description: 'Build a theme switcher that changes page colors dynamically',
					tags: ['DOM', 'JavaScript', 'Styling'],
					path: '/projects/theme-switcher'
				}
			],
			resources: [
				{
					title: 'MDN: DOM Manipulation',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents',
					description: 'Guide to DOM manipulation techniques'
				}
			]
		},
		'dom-events': {
			nextTutorial: {
				path: '/tutorials/dom-basics/event-delegation',
				title: 'Event Delegation'
			},
			relatedTutorials: [
				{
					path: '/tutorials/dom-basics/dom-manipulation',
					title: 'DOM Manipulation'
				}
			],
			practiceProjects: [
				{
					title: 'Interactive Calculator',
					description: 'Build a calculator with event handling for user input',
					tags: ['Events', 'DOM', 'JavaScript'],
					path: '/projects/calculator'
				},
				{
					title: 'Drag and Drop Game',
					description: 'Create a simple drag and drop game using DOM events',
					tags: ['Events', 'DOM', 'JavaScript'],
					path: '/projects/drag-drop-game'
				}
			],
			resources: [
				{
					title: 'MDN: Event Reference',
					url: 'https://developer.mozilla.org/en-US/docs/Web/Events',
					description: 'Complete reference for DOM events'
				}
			]
		}
	},
	'git-basics': {
		'install': {
			nextTutorial: {
				path: '/tutorials/git-basics/introduction',
				title: 'Introduction to Git',
			},
			relatedTutorials: [
				{
					path: '/tutorials/getting-started/command-line',
					title: 'Getting Started with the Command Line',
				},
				{
					path: '/tutorials/html-basics/first-page',
					title: 'HTML Basics',
				},
			],
			practiceProjects: [
				{
					title: 'Install and Configure Git',
					description: 'Install Git, set your username/email, and configure your default editor.',
					tags: ['git', 'install', 'config'],
					path: '/projects/git-install',
				},
				{
					title: 'Verify Git Installation',
					description: 'Run git --version and git config --list to verify your setup.',
					tags: ['git', 'verify', 'setup'],
					path: '/projects/git-verify',
				},
			],
			resources: [
				{
					title: 'Official Git Downloads',
					url: 'https://git-scm.com/downloads',
					description: 'Download Git for your operating system.'
				},
				{
					title: 'VS Code Download',
					url: 'https://code.visualstudio.com/',
					description: 'Recommended code editor for Git and web development.'
				},
				{
					title: 'GitHub Desktop',
					url: 'https://desktop.github.com/',
					description: 'A simple GUI for Git workflows.'
				},
				{
					title: 'Atlassian: Set up Git',
				 url: 'https://www.atlassian.com/git/tutorials/install-git',
				 description: 'Step-by-step guide to installing Git.'
				},
			],
		},
		'introduction': {
			nextTutorial: {
				path: '/tutorials/git-basics/commands',
				title: 'Basic Commands',
			},
			relatedTutorials: [
				{
					path: '/tutorials/git-basics/branching',
					title: 'Branching & Merging',
				},
			],
			practiceProjects: [
				{
					title: 'Clone and Explore',
					description: 'Clone a remote repository and explore its history.',
					tags: ['git', 'clone', 'history'],
					path: '/projects/git-clone',
				},
			],
			resources: [
				{
					title: 'Git Basics Video',
					url: 'https://www.youtube.com/watch?v=8JJ101D3knE',
					description: 'A beginner-friendly video introduction to Git.'
				},
			],
		},
		'commands': {
			nextTutorial: {
				path: '/tutorials/git-basics/branching',
				title: 'Branching & Merging',
			},
			relatedTutorials: [
				{
					path: '/tutorials/git-basics/remote',
					title: 'Remote Repositories',
				},
			],
			practiceProjects: [
				{
					title: 'Commit Practice',
					description: 'Make multiple commits and view the log.',
					tags: ['git', 'commit', 'log'],
					path: '/projects/git-commit',
				},
			],
			resources: [
				{
					title: 'Git Cheat Sheet',
					url: 'https://education.github.com/git-cheat-sheet-education.pdf',
					description: 'Handy PDF cheat sheet for Git commands.'
				},
			],
		},
		'branching': {
			nextTutorial: {
				path: '/tutorials/git-basics/remote',
				title: 'Remote Repositories',
			},
			relatedTutorials: [
				{
					path: '/tutorials/git-basics/best-practices',
					title: 'Best Practices',
				},
			],
			practiceProjects: [
				{
					title: 'Branching Exercise',
					description: 'Create, switch, and merge branches in a sample repo.',
					tags: ['git', 'branch', 'merge'],
					path: '/projects/git-branch',
				},
			],
			resources: [
				{
					title: 'Atlassian Branching Guide',
					url: 'https://www.atlassian.com/git/tutorials/using-branches',
					description: 'Guide to branching workflows in Git.'
				},
			],
		},
		'remote': {
			nextTutorial: {
				path: '/tutorials/git-basics/best-practices',
				title: 'Best Practices',
			},
			relatedTutorials: [
				{
					path: '/tutorials/git-basics/introduction',
					title: 'Introduction to Git',
				},
			],
			practiceProjects: [
				{
					title: 'Push & Pull',
					description: 'Push local changes and pull updates from a remote.',
					tags: ['git', 'push', 'pull', 'remote'],
					path: '/projects/git-remote',
				},
			],
			resources: [
				{
					title: 'GitHub Docs: Remote Repositories',
					url: 'https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories',
					description: 'Learn about working with remotes in Git.'
				},
			],
		},
		'best-practices': {
			nextTutorial: null,
			relatedTutorials: [
				{
					path: '/tutorials/html-basics/first-page',
					title: 'HTML Basics',
				},
				{
					path: '/tutorials/css-basics/introduction',
					title: 'CSS Basics',
				},
			],
			practiceProjects: [
				{
					title: 'Team Workflow',
					description: 'Simulate a team workflow with branches and pull requests.',
					tags: ['git', 'workflow', 'team'],
					path: '/projects/git-team',
				},
			],
			resources: [
				{
					title: 'Git Best Practices',
					url: 'https://sethrobertson.github.io/GitBestPractices/',
					description: 'A collection of best practices for using Git.'
				},
			],
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
