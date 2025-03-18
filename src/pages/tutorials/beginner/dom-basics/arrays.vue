<template>
    <div class="content">
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
            <a href="#" aria-current="page">Arrays</a>
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
          Arrays and Array Methods in JavaScript
        </h1>
        
        <div class="box box-info mb-6">
          <h3 class="title is-4">
            <i class="fas fa-graduation-cap"></i> Learning Objectives
          </h3>
          <p>After completing this tutorial, you'll be able to:</p>
          <ul>
            <li><i class="fas fa-check-circle has-text-success mr-2"></i>Understand how arrays store data in memory</li>
            <li><i class="fas fa-check-circle has-text-success mr-2"></i>Work with multiple DOM elements using array methods</li>
            <li><i class="fas fa-check-circle has-text-success mr-2"></i>Convert DOM collections to arrays</li>
            <li><i class="fas fa-check-circle has-text-success mr-2"></i>Manipulate multiple elements efficiently</li>
          </ul>
        </div>
        
        <div class="box is-info mb-6" style="background-color: #f1f8ff;">
          <h3 class="title is-4">
            <i class="fas fa-lightbulb"></i> Prerequisites
          </h3>
          <p>Before starting this tutorial, you should have:</p>
          <ul>
            <li><i class="fas fa-check"></i> Basic understanding of JavaScript variables</li>
            <li><i class="fas fa-check"></i> Familiarity with basic programming concepts</li>
            <li><i class="fas fa-check"></i> Completed the Introduction to DOM tutorial</li>
          </ul>
        </div>

        <!-- Array Memory Structure Section -->
        <section id="array-memory" class="tutorial-section mb-6">
          <h2>Understanding Array Memory Structure</h2>
          <p>Unlike regular variables that can be scattered in memory, arrays store elements in contiguous (adjacent) memory locations. This makes them efficient for accessing and manipulating multiple elements.</p>

          <div class="memory-visualization">
            <div class="memory-diagram">
              <div class="memory-title">Regular Variables in Memory</div>
              <div class="memory-blocks scattered">
                <div class="memory-block">
                  <div class="block-address">0x01</div>
                  <div class="block-content">var1</div>
                </div>
                <div class="memory-block empty">
                  <div class="block-address">0x02</div>
                  <div class="block-content">—</div>
                </div>
                <div class="memory-block">
                  <div class="block-address">0x03</div>
                  <div class="block-content">var2</div>
                </div>
                <div class="memory-block empty">
                  <div class="block-address">0x04</div>
                  <div class="block-content">—</div>
                </div>
                <div class="memory-block">
                  <div class="block-address">0x05</div>
                  <div class="block-content">var3</div>
                </div>
              </div>
            </div>

            <div class="memory-diagram">
              <div class="memory-title">Array Elements in Memory</div>
              <div class="memory-blocks contiguous">
                <div class="memory-block">
                  <div class="block-address">0x10</div>
                  <div class="block-content">arr[0]</div>
                </div>
                <div class="memory-block">
                  <div class="block-address">0x11</div>
                  <div class="block-content">arr[1]</div>
                </div>
                <div class="memory-block">
                  <div class="block-address">0x12</div>
                  <div class="block-content">arr[2]</div>
                </div>
                <div class="memory-block">
                  <div class="block-address">0x13</div>
                  <div class="block-content">arr[3]</div>
                </div>
                <div class="memory-block">
                  <div class="block-address">0x14</div>
                  <div class="block-content">arr[4]</div>
                </div>
              </div>
            </div>
          </div>

          <div class="info-box mt-4">
            <h4><i class="fas fa-info-circle"></i> Key Benefits of Contiguous Memory:</h4>
            <ul>
              <li>Faster element access using index</li>
              <li>Efficient iteration over elements</li>
              <li>Better memory cache utilization</li>
              <li>Predictable memory patterns</li>
            </ul>
          </div>
        </section>

        <!-- Basic Array Operations Section -->
        <section id="array-basics" class="tutorial-section mb-6">
          <h2>Basic Array Operations</h2>
          <p>Arrays in JavaScript are versatile data structures that can store multiple values in a single variable. Let's explore the fundamental operations:</p>

          <div class="method-examples">
            <div class="method-card" id="creating-arrays">
              <h3>Creating Arrays</h3>
              <pre><code>// Array literal
let fruits = ['apple', 'banana', 'orange'];

// Array constructor
let numbers = new Array(1, 2, 3);

// Empty array with length
let empty = new Array(3); // [undefined, undefined, undefined]</code></pre>
            </div>

            <div class="method-card" id="accessing-elements">
              <h3>Accessing Elements</h3>
              <pre><code>let fruits = ['apple', 'banana', 'orange'];

// Using index (0-based)
console.log(fruits[0]); // 'apple'

// Last element
console.log(fruits[fruits.length - 1]); // 'orange'

// Using at() method (newer)
console.log(fruits.at(-1)); // 'orange'</code></pre>
            </div>

            <!-- Add Zero-Based Indexing -->
            <div class="method-card" id="zero-based-indexing">
              <h3>Understanding Zero-Based Indexing</h3>
              <p>Arrays in JavaScript start counting from 0, not 1. Here's why:</p>
              
              <div class="index-visualization">
                <div class="array-container">
                  <div class="array-header">
                    <div class="index-label">Index:</div>
                    <div class="memory-label">Memory Offset:</div>
                  </div>
                  <div class="array-cells">
                    <div class="array-cell">
                      <div class="index">0</div>
                      <div class="offset">+0</div>
                      <div class="value">'apple'</div>
                    </div>
                    <div class="array-cell">
                      <div class="index">1</div>
                      <div class="offset">+1</div>
                      <div class="value">'banana'</div>
                    </div>
                    <div class="array-cell">
                      <div class="index">2</div>
                      <div class="offset">+2</div>
                      <div class="value">'orange'</div>
                    </div>
                  </div>
                </div>
                <div class="index-explanation">
                  <ul>
                    <li>Index 0 = Start position (no offset)</li>
                    <li>Index 1 = Start + 1 position</li>
                    <li>Index 2 = Start + 2 positions</li>
                  </ul>
                  <p class="tip"><i class="fas fa-lightbulb"></i> Think of the index as "how many steps to move from the start"</p>
                </div>
              </div>
            </div>

            <div class="method-card" id="modifying-arrays">
              <h3>Modifying Arrays</h3>
              <pre><code>let fruits = ['apple', 'banana'];

// Add to end
fruits.push('orange');     // ['apple', 'banana', 'orange']

// Remove from end
fruits.pop();             // ['apple', 'banana']

// Add to start
fruits.unshift('mango');  // ['mango', 'apple', 'banana']

// Remove from start
fruits.shift();          // ['apple', 'banana']</code></pre>
            </div>
          </div>

          <div class="method-examples mt-4">
            <div class="method-card" id="useful-methods">
              <h3>Useful Array Methods</h3>
              <pre><code>let fruits = ['apple', 'banana', 'orange'];

// Check if element exists
fruits.includes('apple');    // true

// Find element index
fruits.indexOf('banana');    // 1

// Join elements
fruits.join(', ');          // "apple, banana, orange"

// Create sub-array
fruits.slice(1, 2);         // ['banana']</code></pre>
            </div>

            <div class="method-card" id="array-transformation">
              <h3>Array Transformation</h3>
              <pre><code>let numbers = [1, 2, 3, 4, 5];

// Map: transform each element
numbers.map(n => n * 2);    // [2, 4, 6, 8, 10]

// Filter: select elements
numbers.filter(n => n > 3); // [4, 5]

// Reduce: combine elements
numbers.reduce((sum, n) => sum + n, 0); // 15</code></pre>
            </div>

            <div class="method-card" id="common-patterns">
              <h3>Common Patterns</h3>
              <pre><code>// Remove duplicates
let array = [1, 2, 2, 3, 3, 4];
let unique = [...new Set(array)]; // [1, 2, 3, 4]

// Find max/min
Math.max(...numbers);    // 5
Math.min(...numbers);    // 1

// Check if array
Array.isArray(numbers);  // true</code></pre>
            </div>
          </div>

          <div class="info-box mt-4">
            <h4><i class="fas fa-info-circle"></i> Key Points About Arrays:</h4>
            <ul>
              <li>Arrays can store any type of value (numbers, strings, objects, even other arrays)</li>
              <li>Array length is dynamic - it grows and shrinks as needed</li>
              <li>Arrays are zero-indexed - the first element is at position 0</li>
              <li>Negative indices can be used with the newer .at() method</li>
              <li>Array methods can be chained for complex operations</li>
            </ul>
          </div>
        </section>

        <!-- DOM Collections Section -->
        <section id="dom-collections" class="tutorial-section mb-6">
          <h2>Working with DOM Collections</h2>
          <p>When selecting multiple elements from the DOM, you'll encounter two special array-like objects:</p>

          <div class="collection-types">
            <div class="collection-card">
              <h3>HTMLCollection</h3>
              <ul>
                <li>Live collection - updates automatically</li>
                <li>Returned by methods like <code>getElementsByClassName()</code></li>
                <li>Only contains Element nodes</li>
              </ul>
            </div>

            <div class="collection-card">
              <h3>NodeList</h3>
              <ul>
                <li>Usually static (except for <code>childNodes</code>)</li>
                <li>Returned by <code>querySelectorAll()</code></li>
                <li>Can contain any type of Node</li>
              </ul>
            </div>
          </div>

          <!-- Interactive Demo: DOM Collection -->
          <div class="demo-section mt-4">
            <h3>DOM Collection Demo</h3>
            <div class="demo-elements" ref="demoElements">
              <div class="demo-item">Item 1</div>
              <div class="demo-item">Item 2</div>
              <div class="demo-item">Item 3</div>
            </div>
            <div class="controls mt-3">
              <button @click="showHTMLCollection">Get HTMLCollection</button>
              <button @click="showNodeList">Get NodeList</button>
              <button @click="convertToArray">Convert to Array</button>
            </div>
            <div class="result-display" v-if="collectionResult">
              <p>{{ collectionResult }}</p>
            </div>
          </div>
        </section>

        <!-- Array Methods with DOM Section -->
        <section id="array-methods" class="tutorial-section mb-6">
          <h2>Array Methods with DOM Elements</h2>
          <p>After converting DOM collections to arrays, you can use powerful array methods to manipulate elements:</p>

          <div class="method-examples">
            <div class="method-card">
              <h3>forEach</h3>
              <p>Iterate over elements:</p>
              <pre><code>elements.forEach(el => el.style.color = 'blue');</code></pre>
              <button @click="demoForEach">Try It</button>
            </div>

            <div class="method-card">
              <h3>map</h3>
              <p>Transform elements:</p>
              <pre><code>elements.map(el => el.textContent.toUpperCase());</code></pre>
              <button @click="demoMap">Try It</button>
            </div>

            <div class="method-card">
              <h3>filter</h3>
              <p>Select specific elements:</p>
              <pre><code>elements.filter(el => el.textContent.length > 5);</code></pre>
              <button @click="demoFilter">Try It</button>
            </div>
          </div>
        </section>

        <!-- Practice Exercise -->
        <section id="practice" class="exercise-section mb-6">
          <h2>Practice Exercise: DOM Manipulation</h2>
          <p>Create a dynamic list with the following features:</p>
          
          <div class="practice-container">
            <div class="input-section">
              <input v-model="newListItem" placeholder="Enter item text" @keyup.enter="addListItem">
              <button @click="addListItem">Add Item</button>
            </div>

            <ul class="practice-list" ref="practiceList">
              <li v-for="(item, index) in listItems" :key="index">
                {{ item }}
                <button class="delete-btn" @click="removeListItem(index)">×</button>
              </li>
            </ul>

            <div class="controls mt-3">
              <button @click="sortItems">Sort Items</button>
              <button @click="filterItems">Filter > 5 chars</button>
              <button @click="resetItems">Reset</button>
            </div>
          </div>
        </section>

        <!-- Add quiz before the tutorial recommendations -->
        <TutorialQuiz />

        <!-- Tutorial recommendations -->
        <TutorialRecommendations />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import TutorialQuiz from '@/components/TutorialQuiz.vue';
  import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
  import { usePageSections } from '@/composables/usePageSections';

  const sections = [
    {
      id: 'array-memory',
      title: 'Understanding Array Memory Structure',
      subsections: []
    },
    {
      id: 'array-basics',
      title: 'Basic Array Operations',
      subsections: [
        { id: 'creating-arrays', title: 'Creating Arrays' },
        { id: 'accessing-elements', title: 'Accessing Elements' },
        { id: 'zero-based-indexing', title: 'Understanding Zero-Based Indexing' },
        { id: 'modifying-arrays', title: 'Modifying Arrays' },
        { id: 'useful-methods', title: 'Useful Array Methods' },
        { id: 'array-transformation', title: 'Array Transformation' },
        { id: 'common-patterns', title: 'Common Patterns' }
      ]
    },
    {
      id: 'dom-collections',
      title: 'Working with DOM Collections',
      subsections: []
    },
    {
      id: 'array-methods',
      title: 'Array Methods with DOM Elements',
      subsections: []
    },
    {
      id: 'practice',
      title: 'Practice Exercise: DOM Manipulation',
      subsections: []
    }
  ];

  const frontmatter = {
    title: 'Arrays and Array Methods in JavaScript',
    description: 'Learn how to work with arrays and array methods in JavaScript, with a focus on DOM manipulation.',
    difficulty: 'Beginner',
    duration: '30 minutes',
    tags: ['JavaScript', 'DOM', 'Arrays'],
    nextSteps: [
      {
        path: '/tutorials/beginner/javascript/loops',
        title: 'JavaScript Loops',
        description: 'Learn how to use loops to iterate over arrays and perform repeated operations efficiently.'
      },
      {
        path: '/tutorials/beginner/dom-basics/photo-gallery-2',
        title: 'Photo Gallery Project',
        description: 'Build a dynamic photo gallery using arrays to manage and display images.'
      },
      {
        path: '/tutorials/beginner/dom-basics/todo-list-2',
        title: 'Todo List Project',
        description: 'Create a todo list application that uses arrays to manage tasks and their states.'
      },
      {
        path: '/tutorials/beginner/dom-basics/dom-manipulation',
        title: 'DOM Manipulation',
        description: 'Learn how to modify HTML elements and their properties using JavaScript.'
      }
    ]
  };

  const { pageSections } = usePageSections(sections);
  // DOM Collection Demo
  const demoElements = ref(null);
  const collectionResult = ref('');
  
  const showHTMLCollection = () => {
    const collection = demoElements.value.getElementsByClassName('demo-item');
    collectionResult.value = `HTMLCollection (${collection.length} items): ${Array.from(collection).map(el => el.textContent).join(', ')}`;
  };

  const showNodeList = () => {
    const nodeList = demoElements.value.querySelectorAll('.demo-item');
    collectionResult.value = `NodeList (${nodeList.length} items): ${Array.from(nodeList).map(el => el.textContent).join(', ')}`;
  };

  const convertToArray = () => {
    const nodeList = demoElements.value.querySelectorAll('.demo-item');
    const array = Array.from(nodeList);
    collectionResult.value = `Array (${array.length} items): ${array.map(el => el.textContent).join(', ')}`;
  };

  // Array Methods Demo
  const demoForEach = () => {
    const elements = demoElements.value.querySelectorAll('.demo-item');
    elements.forEach(el => {
      el.style.color = el.style.color === 'blue' ? 'black' : 'blue';
    });
  };

  const demoMap = () => {
    const elements = demoElements.value.querySelectorAll('.demo-item');
    elements.forEach(el => {
      el.textContent = el.textContent.toUpperCase();
    });
  };

  const demoFilter = () => {
    const elements = demoElements.value.querySelectorAll('.demo-item');
    elements.forEach(el => {
      el.style.display = el.textContent.length > 5 ? 'block' : 'none';
    });
  };

  // Practice Exercise
  const newListItem = ref('');
  const listItems = ref(['Apple', 'Banana', 'Orange']);
  const practiceList = ref(null);

  const addListItem = () => {
    if (newListItem.value.trim()) {
      listItems.value.push(newListItem.value.trim());
      newListItem.value = '';
    }
  };

  const removeListItem = (index) => {
    listItems.value.splice(index, 1);
  };

  const sortItems = () => {
    listItems.value.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  };

  const filterItems = () => {
    listItems.value = listItems.value.filter(item => item.length > 5);
  };

  const resetItems = () => {
    listItems.value = ['Apple', 'Banana', 'Orange'];
  };
  </script>
  
  <style scoped>
  .memory-visualization {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;
  }

  .memory-diagram {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
  }

  .memory-title {
    font-weight: bold;
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  .memory-blocks {
    display: flex;
    gap: 0.5rem;
  }

  .memory-blocks.scattered {
    justify-content: space-between;
  }

  .memory-blocks.contiguous {
    justify-content: flex-start;
  }

  .memory-block {
    width: 80px;
    height: 80px;
    border: 2px solid #3498db;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .memory-block.empty {
    border-style: dashed;
    opacity: 0.5;
  }

  .block-address {
    background: #3498db;
    color: white;
    padding: 0.25rem;
    font-size: 0.8rem;
    text-align: center;
  }

  .block-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    font-family: monospace;
  }

  .collection-types {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 1.5rem 0;
  }

  .collection-card {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 4px solid #3498db;
  }

  .demo-elements {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
  }

  .demo-item {
    padding: 0.5rem;
    margin: 0.5rem 0;
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 4px;
  }

  .method-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1.5rem;
    margin: 1.5rem 0;
  }

  .method-card {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    border-top: 4px solid #3498db;
  }

  .method-card pre {
    background: #2c3e50;
    color: white;
    padding: 1rem;
    border-radius: 4px;
    margin: 1rem 0;
  }

  .practice-container {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
  }

  .practice-list {
    list-style: none;
    padding: 0;
  }

  .practice-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    margin: 0.5rem 0;
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 4px;
  }

  .delete-btn {
    background: #dc3545;
    color: white;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    padding: 0;
    cursor: pointer;
  }

  .delete-btn:hover {
    background: #c82333;
  }

  .controls {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  button {
    background: #3498db;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  button:hover {
    background: #2980b9;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    margin-right: 0.5rem;
  }

  .result-display {
    margin-top: 1rem;
    padding: 1rem;
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    font-family: monospace;
  }

  @media (max-width: 768px) {
    .memory-visualization {
      flex-direction: column;
    }

    .collection-types,
    .method-examples {
      grid-template-columns: 1fr;
    }

    .controls {
      flex-direction: column;
    }

    button {
      width: 100%;
    }
  }

  .index-visualization {
    background: #fff;
    padding: 1rem;
    border-radius: 8px;
    margin: 1rem 0;
  }

  .array-container {
    margin-bottom: 1rem;
  }

  .array-header {
    display: flex;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #2c3e50;
  }

  .index-label, .memory-label {
    flex: 1;
    text-align: center;
  }

  .array-cells {
    display: flex;
    gap: 2px;
  }

  .array-cell {
    flex: 1;
    text-align: center;
    border: 2px solid #3498db;
    border-radius: 4px;
    overflow: hidden;
  }

  .index {
    background: #3498db;
    color: white;
    padding: 0.25rem;
    font-weight: bold;
  }

  .offset {
    background: #f8f9fa;
    color: #666;
    padding: 0.25rem;
    font-size: 0.9em;
    border-bottom: 1px solid #dee2e6;
  }

  .value {
    padding: 0.5rem;
    font-family: monospace;
    background: white;
  }

  .index-explanation {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
  }

  .index-explanation ul {
    list-style: none;
    padding: 0;
    margin: 0 0 1rem 0;
  }

  .index-explanation li {
    padding: 0.25rem 0;
    color: #2c3e50;
  }

  .tip {
    color: #2c3e50;
    font-style: italic;
    margin: 0;
  }

  .tip i {
    color: #f1c40f;
    margin-right: 0.5rem;
  }
  </style>