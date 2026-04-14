/**
 * Editorial recommendation content for tutorial recommendations.
 * Structural navigation and ordering belong in tutorials.js.
 *
 * This file still stores some legacy `nextTutorial` and `relatedTutorials`
 * fields in the raw source data, but the public export strips them so
 * consumers only receive editorial content.
 */

const legacyTutorialEditorialContent = {
	'getting-started': {
		'how-internet-works': {
			practiceProjects: [],
			resources: [
				{
					title: 'MDN: How the Web Works',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works',
					description: 'An overview of how the web works from MDN.',
				},
			],
		},
		'web-basics': {
			practiceProjects: [],
			resources: [
				{
					title: 'MDN: Getting Started with the Web',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web',
					description: 'MDN beginner guide to web development.',
				},
			],
		},
		'text-editors': {
			practiceProjects: [],
			resources: [
				{
					title: 'VS Code Documentation',
					url: 'https://code.visualstudio.com/docs',
					description: 'Official VS Code documentation and tutorials.',
				},
			],
		},
		'dev-environment': {
			practiceProjects: [],
			resources: [
				{
					title: 'MDN: Setting Up a Development Environment',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software',
					description: 'Guide to setting up basic development software.',
				},
			],
		},
		'browser-tools': {
			practiceProjects: [],
			resources: [
				{
					title: 'Chrome DevTools Documentation',
					url: 'https://developer.chrome.com/docs/devtools/',
					description: 'Official Chrome DevTools documentation.',
				},
			],
		},
		'domain-hosting': {
			practiceProjects: [],
			resources: [
				{
					title: 'MDN: What is a Domain Name?',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name',
					description: 'Understanding domain names and how they work.',
				},
			],
		},
		'files-folders-project-structure': {
			practiceProjects: [],
			resources: [
				{
					title: 'MDN: Dealing with Files',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files',
					description: 'How to set up a sensible file structure for your website.',
				},
				{
					title: 'MDN: A Typical HTTP Session',
					url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Session',
					description: 'How browsers request and receive files from servers.',
				},
				{
					title: 'File Paths Explained (CSS-Tricks)',
					url: 'https://css-tricks.com/quick-reminder-about-file-paths/',
					description: 'Quick visual reference for relative and absolute file paths.',
				},
			],
		},
	},
	'html-basics': {
		'introduction': {
			practiceProjects: [],
			resources: [
				{
					title: 'MDN: Getting started with HTML',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started',
					description: 'Comprehensive guide to HTML basics from Mozilla',
				},
				{
					title: 'W3C HTML Specification',
					url: 'https://www.w3.org/TR/html52/',
					description: 'Official HTML specification from W3C',
				},
			],
		},
		'html-first-page': {
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
		'html-text': {
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
		'html-links': {
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
		'html-images': {
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
		'html-doc-structure': {
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
		'html-forms': {
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
		'text': {
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
		'modern': {
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
		'flexbox': {
			practiceProjects: [
				{
					title: 'Flexbox Layout Challenge',
					description: 'Practice Flexbox alignment and distribution techniques',
					tags: ['CSS', 'Flexbox', 'Layout'],
					path: '/projects/flexbox-challenge',
				},
			],
			resources: [
				{
					title: 'MDN: Flexbox',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
					description: 'Guide to CSS Flexbox layout',
				},
			],
		},
	},
	'javascript-basics': {
		'introduction': {
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
		'dom-traversal': {
			practiceProjects: [],
			resources: [
				{
					title: 'MDN: Traversing the DOM',
					url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces',
					description: 'Guide to navigating DOM node relationships'
				}
			]
		},
		'dom-events': {
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
		},
		'advanced-events': {
			practiceProjects: [],
			resources: [
				{
					title: 'MDN: Creating and triggering events',
					url: 'https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events',
					description: 'Guide to custom events and dispatching'
				}
			]
		},
		'dynamic-content': {
			practiceProjects: [],
			resources: [
				{
					title: 'MDN: Document.createElement()',
					url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement',
					description: 'Reference for creating DOM elements'
				}
			]
		}
	},
	// Black Swan Bistro project (spans beginner → intermediate → advanced)
	'beginner': {
		'idea-to-live-website': {
			practiceProjects: [],
			resources: [
				{
					title: 'NN/g: Homepage Design Principles',
					url: 'https://www.nngroup.com/articles/homepage-design-principles/',
					description: 'A strong guide to what homepages should communicate and how people use them.',
				},
				{
					title: 'Atomic Design by Brad Frost',
					url: 'https://atomicdesign.bradfrost.com/chapter-2',
					description: 'A useful introduction to thinking about interfaces as systems of smaller parts.',
				},
			],
		},
		'black-swan-bistro-part-1': {
			practiceProjects: [],
			resources: [
				{
					title: 'MDN: Getting started with HTML',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started',
					description: 'Comprehensive guide to HTML basics from Mozilla.',
				},
			],
		},
		'why-your-css-isnt-working': {
			practiceProjects: [
				{
					title: 'CSS Debug Practice',
					description: 'A broken stylesheet with 4 bugs to find and fix using DevTools.',
					tags: ['CSS', 'Debugging'],
					path: '/projects/css-debug-practice',
				},
			],
			resources: [
				{
					title: 'MDN: Debugging CSS',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS',
					description: 'Mozilla\'s guide to diagnosing and fixing CSS problems.',
				},
				{
					title: 'Chrome DevTools: CSS Reference',
					url: 'https://developer.chrome.com/docs/devtools/css',
					description: 'Official guide to inspecting and editing CSS in Chrome DevTools.',
				},
			],
		},
	},
	'intermediate': {
		'think-about-layouts': {
			practiceProjects: [],
			resources: [
				{
					title: 'Every Layout',
					url: 'https://every-layout.dev',
					description: 'A layout-focused mental-model resource built around reusable composition patterns.',
				},
				{
					title: 'BEM — Block Element Modifier',
					url: 'https://getbem.com',
					description: 'A clear naming approach for repeated layout and interface patterns.',
				},
			],
		},
		'how-to-read-a-design': {
			practiceProjects: [],
			resources: [
				{
					title: 'NN/g: Homepage Design Principles',
					url: 'https://www.nngroup.com/articles/homepage-design-principles/',
					description: 'Helpful for understanding homepage hierarchy, scanning, and user expectations.',
				},
				{
					title: 'Every Layout',
					url: 'https://every-layout.dev',
					description: 'Useful for noticing reusable layout relationships beneath a visual mockup.',
				},
			],
		},
		'breaking-layouts-into-sections': {
			practiceProjects: [],
			resources: [
				{
					title: 'Every Layout',
					url: 'https://every-layout.dev',
					description: 'A strong reference for thinking about sections and composition as reusable patterns.',
				},
				{
					title: 'BEM — Block Element Modifier',
					url: 'https://getbem.com',
					description: 'Useful when naming page regions and repeated blocks in a predictable way.',
				},
			],
		},
		'black-swan-bistro-part-2': {
			practiceProjects: [],
			resources: [
				{
					title: 'MDN: Document and website structure',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure',
					description: 'How to plan and structure a website with semantic HTML.',
				},
				{
					title: 'BEM — Block Element Modifier',
					url: 'https://getbem.com',
					description: 'Useful for naming repeated CSS patterns clearly as your layout grows.',
				},
				{
					title: 'Every Layout',
					url: 'https://every-layout.dev',
					description: 'A practical layout-thinking resource for reusable patterns like stacks, clusters, and grids.',
				},
			],
		},
		'css-systems-reusable-sections': {
			practiceProjects: [],
			resources: [
				{
					title: 'Every Layout',
					url: 'https://every-layout.dev',
					description: 'Practical layout patterns that support reusable section rhythm and shared CSS decisions.',
				},
				{
					title: 'BEM — Block Element Modifier',
					url: 'https://getbem.com',
					description: 'A helpful naming approach when shared section classes start turning into a system.',
				},
			],
		},
		'flexbox-real-layouts': {
			practiceProjects: [],
			resources: [
				{
					title: 'CSS-Tricks: A Complete Guide to Flexbox',
					url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
					description: 'A visual guide for axis thinking, alignment, wrapping, and practical layout decisions.',
				},
				{
					title: 'Every Layout',
					url: 'https://every-layout.dev',
					description: 'Useful for deciding when a row, cluster, or sidebar pattern is really a Flexbox problem.',
				},
			],
		},
		'building-reusable-components': {
			practiceProjects: [],
			resources: [
				{
					title: 'BEM — Block Element Modifier',
					url: 'https://getbem.com',
					description: 'A useful naming model for reusable interface blocks and their internal parts.',
				},
				{
					title: 'Every Layout',
					url: 'https://every-layout.dev',
					description: 'Helpful for understanding reusable layout patterns as small composable building blocks.',
				},
			],
		},
		'black-swan-bistro-part-3': {
			practiceProjects: [],
			resources: [
				{
					title: 'BEM — Block Element Modifier',
					url: 'https://getbem.com',
					description: 'A useful naming model for component shells and internal parts.',
				},
				{
					title: 'CSS-Tricks: A Complete Guide to Flexbox',
					url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
					description: 'Helpful when aligning navigation, footer links, and component interiors.',
				},
				{
					title: 'MDN: Document and website structure',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure',
					description: 'A useful refresher for keeping reusable HTML patterns semantic.',
				},
			],
		},
		'css-grid-repeated-layouts': {
			practiceProjects: [],
			resources: [
				{
					title: 'CSS-Tricks: A Complete Guide to CSS Grid',
					url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
					description: 'A practical visual reference for Grid properties, terminology, and layout examples.',
				},
				{
					title: 'CSS-Tricks: A Complete Guide to Flexbox',
					url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
					description: 'Useful for comparing Flexbox’s one-direction strengths with Grid’s two-dimensional layout model.',
				},
				{
					title: 'MDN: CSS Grid Layout',
					url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout',
					description: 'Reference and guides for using Grid when rows and columns matter together.',
				},
				{
					title: 'MDN: Basic Concepts of Grid Layout',
					url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Basic_concepts',
					description: 'A clear tutorial on grid containers, tracks, lines, cells, areas, gutters, and flexible tracks.',
				},
				{
					title: 'MDN: CSS Flexible Box Layout',
					url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout',
					description: 'Canonical Flexbox reference for concepts, properties, and typical one-dimensional layout use cases.',
				},
				{
					title: 'Every Layout',
					url: 'https://every-layout.dev',
					description: 'Helpful for connecting Grid decisions to repeated layout patterns instead of isolated syntax.',
				},
			],
		},
		'responsive-refinement-reusable-components': {
			practiceProjects: [],
			resources: [
				{
					title: 'MDN: Responsive Design',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design',
					description: 'A solid refresher on media queries, flexible layouts, and responsive decisions.',
				},
				{
					title: 'MDN: Using Media Queries',
					url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries',
					description: 'Reference for writing media queries when component behaviour needs to change.',
				},
				{
					title: 'MDN: CSS Values and Units',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units',
					description: 'Useful background for relative units, viewport units, and flexible CSS values.',
				},
				{
					title: 'MDN: CSS Container Queries',
					url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries',
					description: 'A later extension topic for components that need to respond to their own container size.',
				},
				{
					title: 'web.dev: Responsive design basics',
					url: 'https://web.dev/responsive-web-design-basics/',
					description: 'Useful for reinforcing content-first breakpoint decisions and practical responsive patterns.',
				},
			],
		},
		'multi-page-structure': {
			practiceProjects: [],
			resources: [
				{
					title: 'MDN: Creating hyperlinks',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks',
					description: 'A clear guide to links, URLs, and connecting pages together.',
				},
				{
					title: 'MDN: Dealing with files',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files',
					description: 'Useful for understanding folders, file names, and where assets should live.',
				},
				{
					title: 'MDN: Document and website structure',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure',
					description: 'Helpful background for planning page regions and shared site structure.',
				},
			],
		},
		'black-swan-bistro-part-4': {
			practiceProjects: [],
			resources: [
				{
					title: 'MDN: Creating hyperlinks',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks',
					description: 'How to create effective links between pages.',
				},
				{
					title: 'MDN: Document and website structure',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure',
					description: 'Helpful background for planning page regions and shared site structure across multiple pages.',
				},
				{
					title: 'web.dev: Learn HTML — Navigation',
					url: 'https://web.dev/learn/html/navigation',
					description: 'Practical guidance on navigation patterns, breadcrumbs, and global vs local navigation.',
				},
			],
		},
		'cascade-specificity-debugging-css': {
			practiceProjects: [],
			resources: [
				{
					title: 'MDN: Specificity',
					url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity',
					description: 'Clear explanation of how selectors compete and why some rules win.',
				},
				{
					title: 'MDN: Inheritance',
					url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance',
					description: 'Helpful for understanding which properties inherit and why some styles flow through the document.',
				},
			],
		},
		'styling-details-selectors-pseudo-elements-motion': {
			practiceProjects: [],
			resources: [
				{
					title: 'MDN: Pseudo-elements',
					url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements',
					description: 'Reference for practical decorative and structural pseudo-element use cases.',
				},
				{
					title: 'MDN: Using CSS transitions',
					url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions',
					description: 'A practical guide to restrained motion and transition choices.',
				},
			],
		},
		'bsb-part-4b-polish-and-refine': {
			practiceProjects: [],
			resources: [
				{
					title: 'MDN: prefers-reduced-motion',
					url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion',
					description: 'Accessibility media query for users who prefer less motion.',
				},
				{
					title: 'web.dev: Prefers reduced motion',
					url: 'https://web.dev/articles/prefers-reduced-motion',
					description: 'Practical advice on respecting the reduced motion preference in CSS and JavaScript.',
				},
			],
		},
	},
	'advanced': {
		'black-swan-bistro-part-5': {
			practiceProjects: [],
			resources: [
				{
					title: 'web.dev: Performance',
					url: 'https://web.dev/performance/',
					description: 'Google\'s guide to web performance optimisation.',
				},
			],
		},
		'black-swan-bistro-part-6': {
			practiceProjects: [],
			resources: [
				{
					title: 'GitHub Pages Documentation',
					url: 'https://docs.github.com/en/pages',
					description: 'Official guide to deploying with GitHub Pages.',
				},
			],
		},
		'black-swan-bistro-part-7': {
			practiceProjects: [],
			resources: [
				{
					title: 'web.dev: Lighthouse',
					url: 'https://developer.chrome.com/docs/lighthouse/',
					description: 'Audit your site for performance, accessibility, and SEO.',
				},
			],
		},
	},
	'git-basics': {
		'install': {
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
		'basic-commands': {
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
		'merging': {
			practiceProjects: [
				{
					title: 'Merge Conflict Practice',
					description: 'Practice resolving merge conflicts in a sample repo.',
					tags: ['git', 'merge', 'conflict'],
					path: '/projects/git-merge',
				},
			],
			resources: [
				{
					title: 'Git Merge Documentation',
					url: 'https://git-scm.com/docs/git-merge',
					description: 'Official documentation for git merge.'
				},
			],
		},
		'remote-repositories': {
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
		'workflow': {
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
					title: 'Git Best Practices',
					url: 'https://sethrobertson.github.io/GitBestPractices/',
					description: 'A collection of best practices for using Git.'
				},
			],
		},
	},
};

export const tutorialEditorialContent = Object.fromEntries(
	Object.entries(legacyTutorialEditorialContent).map(([section, sectionTutorials]) => [
		section,
		Object.fromEntries(
			Object.entries(sectionTutorials).map(([slug, tutorialContent]) => [
				slug,
				{
					practiceProjects: tutorialContent.practiceProjects ?? [],
					resources: tutorialContent.resources ?? [],
				},
			]),
		),
	]),
);

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
