<template>
  <div class="tutorial-content">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/"><i class="fa-solid fa-house mr-2"></i> Home</router-link>
        </li>
        <li><router-link to="/tutorials">Tutorials</router-link></li>
        <li>
          <router-link to="/tutorials/dom-basics">DOM Basics</router-link>
        </li>
        <li class="is-active">
          <a href="#" aria-current="page">Introduction</a>
        </li>
      </ul>
    </nav>

    <div class="tags mb-4">
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">30 minutes</span>
      <span class="tag is-success">JavaScript</span>
      <span class="tag is-success">DOM</span>
    </div>

    <div class="content">
      <h1>
        <i class="fas fa-sitemap fa-rotate-270" style="color: #ffd43b; margin-right: 0.5rem;"></i>
        Introduction to the Document Object Model (DOM)
      </h1>

      <div class="box box-info mb-6">
        <h3 class="title is-4">
          <i class="fas fa-graduation-cap"></i> Learning Objectives
        </h3>
        <p>After completing this introduction, you'll be able to:</p>
        <ul>
          <li><i class="fas fa-check-circle has-text-success mr-2"></i>Understand what the DOM is and its role in web development</li>
          <li><i class="fas fa-check-circle has-text-success mr-2"></i>Navigate and manipulate the DOM tree structure</li>
          <li><i class="fas fa-check-circle has-text-success mr-2"></i>Select and modify HTML elements using JavaScript</li>
          <li><i class="fas fa-check-circle has-text-success mr-2"></i>Handle user interactions with event listeners</li>
        </ul>
      </div>

      <div class="box is-info mb-6" style="background-color: #f1f8ff;">
        <h3 class="title is-4">
          <i class="fas fa-lightbulb"></i> Prerequisites
        </h3>
        <p>Before starting this tutorial, you should have:</p>
        <ul>
          <li><i class="fas fa-check"></i> Basic understanding of HTML</li>
          <li><i class="fas fa-check"></i> Basic understanding of JavaScript</li>
          <li><i class="fas fa-check"></i> A modern web browser with developer tools</li>
        </ul>
      </div>

      <section id="introduction" class="concept-section">
        <h2>What is the DOM?</h2>
        <p>
          The Document Object Model (DOM) is a programming interface for HTML and XML documents. 
          It represents the document as a tree structure where each node is an object representing 
          a part of the document. The DOM provides a way to:
        </p>
        <ul>
          <li>Access and manipulate HTML elements</li>
          <li>Modify content dynamically</li>
          <li>Respond to user interactions</li>
          <li>Create interactive web applications</li>
        </ul>

        <div id="document-types">
          <h3>DOM and Different Document Types</h3>
          <div class="document-types-grid">
            <div id="html-documents" class="document-type-card">
              <h4>HTML Documents</h4>
              <p>
                For HTML documents, the DOM represents every element as a node in the tree structure.
                This includes elements like &lt;div&gt;, &lt;p&gt;, &lt;span&gt;, as well as attributes,
                text content, and comments. The DOM allows you to:
              </p>
              <ul>
                <li>Select elements using methods like querySelector</li>
                <li>Modify element content and attributes</li>
                <li>Add or remove elements from the page</li>
                <li>Change styles and classes dynamically</li>
              </ul>
            </div>

            <div id="svg-documents" class="document-type-card">
              <h4>SVG Documents</h4>
              <p>
                The DOM also provides an interface for SVG (Scalable Vector Graphics) documents.
                SVG elements are represented in the DOM tree just like HTML elements, but with
                special properties and methods for handling vector graphics:
              </p>
              <ul>
                <li>Manipulate SVG paths and shapes</li>
                <li>Animate SVG elements</li>
                <li>Access SVG-specific attributes</li>
                <li>Create dynamic visualizations</li>
              </ul>
            </div>

            <div id="xml-documents" class="document-type-card">
              <h4>XML Documents</h4>
              <p>
                For XML documents, the DOM provides a language-neutral way to access and manipulate
                the document structure. This is particularly useful for:
              </p>
              <ul>
                <li>Processing XML data feeds</li>
                <li>Working with custom XML formats</li>
                <li>Handling XML configurations</li>
                <li>Cross-platform data exchange</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="common-features">
          <h3>Common DOM Features Across Document Types</h3>
          <p>
            Regardless of the document type (HTML, SVG, or XML), the DOM provides consistent ways to:
          </p>
          <ul>
            <li>Navigate the document tree (parent, child, sibling relationships)</li>
            <li>Create, modify, and delete nodes</li>
            <li>Handle events and user interactions</li>
            <li>Access and modify attributes</li>
            <li>Work with text content</li>
          </ul>
        </div>
      </section>

      <section id="tree-structure" class="visual-section">
        <h2>DOM Tree Structure</h2>
        <div class="dom-tree">
          <pre class="tree-visualization">
document
└── html
    ├── head
    │   ├── title
    │   └── meta
    └── body
        ├── h1
        ├── p
        └── div</pre>
        </div>
      </section>

      <section id="interactive-demo" class="interactive-demo">
        <h2>Interactive Example</h2>
        <div class="demo-container">
          <div ref="demoElement" class="demo-element">
            <p>{{ demoText }}</p>
          </div>
          <div class="demo-controls">
            <button @click="changeText">Change Text</button>
            <button @click="changeColor">Change Color</button>
            <button @click="resetDemo">Reset</button>
          </div>
        </div>
      </section>

      <section id="key-concepts" class="key-concepts">
        <h2>Key Concepts</h2>
        <div class="concept-grid">
          <div id="elements" class="concept-card">
            <h3>Elements</h3>
            <p>HTML elements become nodes in the DOM tree. Each element is an object with properties and methods.</p>
          </div>
          <div id="methods" class="concept-card">
            <h3>Methods</h3>
            <p>DOM methods allow you to select, create, modify, and delete elements on the page.</p>
          </div>
          <div id="events" class="concept-card">
            <h3>Events</h3>
            <p>The DOM enables interaction through events like clicks, keyboard input, and form submissions.</p>
          </div>
          <div id="properties" class="concept-card">
            <h3>Properties</h3>
            <p>Elements have properties that can be accessed and modified to change content, styles, and attributes.</p>
          </div>
        </div>
      </section>

      <section id="practice" class="practice-section">
        <h2>Practice: Exploring the DOM</h2>
        <p>Let's use what you already know from JavaScript to explore the DOM. Open your browser's console and try these examples:</p>

        <div class="box practice-box">
          <h3>Exercise 1: Viewing DOM Elements</h3>
          <p>Use the console to inspect DOM elements:</p>
          <div id="example1" class="code-example">
            <p>This is a paragraph element</p>
            <button class="button">This is a button</button>
          </div>
          <div class="codemirror-wrapper">
            <CodeMirror
              :code="viewingElementsCode"
              language="javascript"
              :read-only="true"
            />
          </div>
          <button class="button is-primary mt-3" @click="runViewingExample">Try It</button>
        </div>

        <div class="box practice-box">
          <h3>Exercise 2: Using Console Methods</h3>
          <p>Try different console methods to explore the DOM:</p>
          <div id="example2" class="code-example">
            <div class="sample-element">Sample Element</div>
          </div>
          <div class="codemirror-wrapper">
            <CodeMirror
              :code="consoleMethodsCode"
              language="javascript"
              :read-only="true"
            />
          </div>
          <button class="button is-primary mt-3" @click="runConsoleExample">Try It</button>
        </div>

        <div class="notification is-info is-light">
          <p>
            <i class="fas fa-info-circle mr-2"></i>
            <strong>Key Takeaway:</strong> The DOM makes your HTML elements accessible through JavaScript. Each element becomes an object you can interact with using JavaScript methods and properties.
          </p>
        </div>
      </section>

      <!-- Add quiz before the tutorial recommendations -->
      <TutorialQuiz />

      <!-- Tutorial recommendations -->
      <TutorialRecommendations :current-path="'/tutorials/beginner/dom-basics/introduction'" />
    </div>
  </div>
</template>

<script>
export const frontmatter = {
  title: 'Introduction to the Document Object Model (DOM)',
  description: 'Learn the fundamentals of the Document Object Model (DOM), how it represents HTML, SVG, and XML documents, and how to manipulate web pages dynamically using JavaScript.',
  difficulty: 'Beginner',
  duration: '30 minutes',
  tags: ['JavaScript', 'DOM', 'Web Development'],
  prerequisites: [
    'Basic understanding of HTML',
    'Basic understanding of JavaScript',
    'A modern web browser with developer tools'
  ],
  learningObjectives: [
    'Understand what the DOM is and its role in web development',
    'Navigate and manipulate the DOM tree structure',
    'Select and modify HTML elements using JavaScript',
    'Handle user interactions with event listeners'
  ],
  nextSteps: [
    {
      path: '/tutorials/beginner/dom-basics/arrays',
      title: 'Arrays and Methods',
      description: 'Learn how to work with multiple DOM elements using arrays and array methods.'
    },
    {
      path: '/tutorials/beginner/dom-basics/dom-manipulation',
      title: 'DOM Manipulation',
      description: 'Master the techniques for modifying HTML elements and content dynamically.'
    },
    {
      path: '/tutorials/beginner/dom-basics/dom-events',
      title: 'Event Handling',
      description: 'Discover how to handle user interactions and browser events.'
    }
  ]
}
</script>

<script setup>
import { ref, onMounted } from 'vue'
import TutorialRecommendations from '@/components/TutorialRecommendations.vue'
import TutorialQuiz from '@/components/TutorialQuiz.vue'
import { usePageSections } from '@/composables/usePageSections'

// Initialize page sections
const sections = [
  {
    id: 'introduction',
    title: 'What is the DOM?',
    content: 'Understanding the Document Object Model and its role in web development'
  },
  {
    id: 'document-types',
    title: 'DOM and Different Document Types',
    subsections: [
      {
        id: 'html-documents',
        title: 'HTML Documents',
        content: 'How the DOM represents and manipulates HTML elements'
      },
      {
        id: 'svg-documents',
        title: 'SVG Documents',
        content: 'Working with vector graphics in the DOM'
      },
      {
        id: 'xml-documents',
        title: 'XML Documents',
        content: 'Processing and manipulating XML data'
      }
    ]
  },
  {
    id: 'common-features',
    title: 'Common DOM Features',
    content: 'Features available across all document types'
  },
  {
    id: 'tree-structure',
    title: 'DOM Tree Structure',
    content: 'Visual representation of the DOM hierarchy'
  },
  {
    id: 'interactive-demo',
    title: 'Interactive Example',
    content: 'Hands-on demonstration of DOM manipulation'
  },
  {
    id: 'key-concepts',
    title: 'Key Concepts',
    subsections: [
      {
        id: 'elements',
        title: 'Elements',
        content: 'Understanding DOM elements and nodes'
      },
      {
        id: 'methods',
        title: 'Methods',
        content: 'Common methods for DOM manipulation'
      },
      {
        id: 'events',
        title: 'Events',
        content: 'Handling user interactions and events'
      },
      {
        id: 'properties',
        title: 'Properties',
        content: 'Working with element properties'
      }
    ]
  }
];

// Initialize page sections
const { pageSections } = usePageSections(sections);

onMounted(() => {
  // Initialize all sections as expanded
  pageSections.value.forEach((section) => {
    section.subsections?.forEach((subsection) => {
      subsection.isOpen = true;
    });
  });
});

// Demo state
const demoText = ref('Click the buttons below to interact with this element!')
const originalText = 'Click the buttons below to interact with this element!'
const colors = ['#42b983', '#3498db', '#e74c3c', '#f1c40f']
const demoElement = ref(null)

// Demo methods
const changeText = () => {
  demoText.value = 'Text changed through DOM manipulation!';
};

const changeColor = () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  if (demoElement.value) {
    demoElement.value.style.backgroundColor = randomColor;
  }
};

const resetDemo = () => {
  demoText.value = originalText;
  if (demoElement.value) {
    demoElement.value.style.backgroundColor = '#f8f9fa';
  }
};

// Code examples for practice section
const viewingElementsCode = `// Get an element by its ID
console.log(document.getElementById('example1'));

// Look at its properties
const paragraph = document.querySelector('#example1 p');
console.log('Element properties:', {
    tagName: paragraph.tagName,
    textContent: paragraph.textContent,
    innerHTML: paragraph.innerHTML
});

// View the element in the Elements panel
console.dir(paragraph);`;

const consoleMethodsCode = `// Different ways to explore elements
const element = document.querySelector('.sample-element');

// Log the element
console.log('Basic log:', element);

// See detailed object properties
console.dir('Detailed view:', element);

// View element as HTML
console.log('HTML view:', element.outerHTML);

// Check element type
console.log('Is this an HTML element?', element instanceof HTMLElement);`;

// Example methods
const runViewingExample = () => {
  console.clear();
  console.log('Running Element Viewing Example...');
  const example1 = document.getElementById('example1');
  console.log('Full element:', example1);
  
  const paragraph = document.querySelector('#example1 p');
  if (paragraph) {
    console.log('Element properties:', {
      tagName: paragraph.tagName,
      textContent: paragraph.textContent,
      innerHTML: paragraph.innerHTML
    });
    console.dir(paragraph);
  } else {
    console.log('No paragraph found in #example1')
  }
};

const runConsoleExample = () => {
  console.clear();
  console.log('Running Console Methods Example...');
  const element = document.querySelector('.sample-element');
  
  console.log('Basic log:', element);
  console.dir('Detailed view:', element);
  if (element) {
    console.log('HTML view:', element.outerHTML);
    console.log('Is this an HTML element?', element instanceof HTMLElement);
  } else {
    console.log('No element found matching .sample-element')
  }
};
</script>

<style scoped>
.tutorial-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

section {
  margin-bottom: 40px;
}

.concept-section ul {
  padding-left: 20px;
  line-height: 1.6;
}

.document-types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.document-type-card {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.document-type-card h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.document-type-card ul {
  margin-top: 10px;
}

.document-type-card li {
  margin-bottom: 5px;
}

.dom-tree {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  overflow-x: auto;
}

.tree-visualization {
  font-family: monospace;
  white-space: pre;
  margin: 0;
  color: #2c3e50;
  line-height: 1.4;
}

/* Remove the old tree-node styles since we're not using them anymore */
.tree-node,
.tree-node::before,
.tree-node::after,
.root,
.root::before,
.root::after {
  all: unset;
}

.demo-container {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.demo-element {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
}

.demo-controls {
  display: flex;
  gap: 10px;
}

button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3aa876;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.concept-card {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.concept-card h3 {
  color: #2c3e50;
  margin-top: 0;
}

@media (max-width: 768px) {
  .concept-grid {
    grid-template-columns: 1fr;
  }

  .demo-controls {
    flex-direction: column;
  }

  button {
    width: 100%;
  }
}

.practice-section {
  margin-top: 2rem;
}

.practice-box {
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.code-example {
  background-color: white;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
  border: 1px solid #e9ecef;
}

.sample-element {
  padding: 1rem;
  background-color: #e9ecef;
  border-radius: 4px;
  text-align: center;
}
</style>
