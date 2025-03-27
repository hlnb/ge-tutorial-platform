/**
 * Project Utilities
 * Helper functions for working with projects
 */

/**
 * Get project context from tutorial path
 * @param {string} path - The current tutorial path
 * @returns {Object} - Object containing section and tutorial
 */
export function getProjectContext(path) {
    const pathParts = path.split('/').filter(Boolean);
    const section = pathParts[pathParts.length - 2]; // e.g., 'html-basics'
    const tutorial = pathParts[pathParts.length - 1]; // e.g., 'images'
    
    return {
        section,
        tutorial,
        fullPath: path
    };
}

/**
 * Get context-specific prerequisites
 * @param {string} section - The tutorial section
 * @param {string} tutorial - The specific tutorial
 * @returns {Array} - Array of prerequisite tutorials
 */
export function getContextPrerequisites(section, tutorial) {
    const prerequisites = {
        'html-basics': {
            'images': [
                { path: '/tutorials/html-basics/first-page', title: 'Your First HTML Page' },
                { path: '/tutorials/html-basics/text', title: 'Working with Text' }
            ]
        },
        'css-basics': {
            'box-model': [
                { path: '/tutorials/css-basics/introduction', title: 'CSS Introduction' },
                { path: '/tutorials/css-basics/selectors', title: 'CSS Selectors' }
            ],
            'layout': [
                { path: '/tutorials/css-basics/box-model', title: 'The Box Model' },
                { path: '/tutorials/css-basics/responsive', title: 'Responsive Design' }
            ]
        },
        'javascript-basics': {
            'loops': [
                { path: '/tutorials/javascript-basics/conditionals', title: 'Control Flow' }
            ],
            'functions': [
                { path: '/tutorials/javascript-basics/loops', title: 'Loops' }
            ]
        }
    };

    return prerequisites[section]?.[tutorial] || [];
}

/**
 * Get context-specific objectives
 * @param {string} section - The tutorial section
 * @param {string} tutorial - The specific tutorial
 * @returns {Array} - Array of objectives
 */
export function getContextObjectives(section, tutorial) {
    const objectives = {
        'html-basics': {
            'images': [
                'Create a responsive photo gallery using HTML',
                'Implement proper image elements with attributes',
                'Add descriptive captions for each image',
                'Use semantic HTML for better accessibility'
            ]
        },
        'css-basics': {
            'box-model': [
                'Apply box model properties to gallery items',
                'Create consistent spacing between images',
                'Implement proper padding and margins',
                'Use borders to enhance visual hierarchy'
            ],
            'layout': [
                'Create a responsive grid layout for the gallery',
                'Implement proper spacing and alignment',
                'Use CSS Grid and Flexbox for layout',
                'Ensure gallery works well on all screen sizes'
            ]
        },
        'javascript-basics': {
            'loops': [
                'Build a functional todo list application',
                'Practice working with arrays and array methods',
                'Use loops to render and update list items',
                'Store data in the browser\'s local storage'
            ],
            'functions': [
                'Build a functional todo list application',
                'Create reusable functions for CRUD operations',
                'Implement function-based event handlers',
                'Use local storage with helper functions'
            ]
        }
    };

    return objectives[section]?.[tutorial] || [];
}

/**
 * Get context-specific instructions
 * @param {string} section - The tutorial section
 * @param {string} tutorial - The specific tutorial
 * @returns {Object} - Object containing instructions for different sections
 */
export function getContextInstructions(section, tutorial) {
    const instructions = {
        'html-basics': {
            'images': {
                setup: 'Create a new file called gallery.html and set up the basic HTML structure',
                structure: 'Add your gallery header and create the main gallery section',
                content: 'Add images with proper attributes and captions',
                enhancement: 'Add thumbnails and links to larger versions'
            }
        },
        'css-basics': {
            'box-model': {
                setup: 'Create a new CSS file and link it to your HTML',
                structure: 'Apply box model properties to gallery items',
                content: 'Style images and captions with proper spacing',
                enhancement: 'Add hover effects and transitions'
            },
            'layout': {
                setup: 'Set up CSS Grid or Flexbox for the gallery layout',
                structure: 'Create responsive grid/flex container',
                content: 'Style gallery items with proper spacing',
                enhancement: 'Add responsive breakpoints'
            }
        },
        'javascript-basics': {
            'loops': {
                setup: 'Create project files and set up the basic structure',
                structure: 'Create the HTML structure for the todo list',
                content: 'Implement todo list logic using loops',
                enhancement: 'Add advanced features with loops'
            },
            'functions': {
                setup: 'Create project files and set up the basic structure',
                structure: 'Create the HTML structure for the todo list',
                content: 'Implement todo list logic using functions',
                enhancement: 'Add advanced features with functions'
            }
        }
    };

    return instructions[section]?.[tutorial] || {};
} 