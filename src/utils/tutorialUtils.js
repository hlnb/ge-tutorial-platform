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
};
