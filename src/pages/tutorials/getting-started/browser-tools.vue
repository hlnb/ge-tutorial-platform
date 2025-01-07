<template>
  <MainLayout>
    <div class="container section">
      <div class="content tutorial-content">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><router-link to="/tutorials">Tutorials</router-link></li>
            <li><router-link to="/tutorials/getting-started">Getting Started</router-link></li>
            <li class="is-active"><a href="#" aria-current="page">Browser Developer Tools</a></li>
          </ul>
        </nav>

        <div class="tutorial-meta mb-6">
          <div class="tags">
            <span class="tag is-info">Beginner</span>
            <span class="tag is-light">30 minutes</span>
            <span class="tag is-light">Tools</span>
          </div>
        </div>

        <h1 class="title is-1">Browser Developer Tools</h1>

        <p class="mb-5">Browser Developer Tools (DevTools) are built-in tools that help you inspect, debug, and modify web pages directly in your browser. In this tutorial, we'll focus on the two most commonly used panels: Elements and Console.</p>

        <div class="box has-background-light mb-6">
          <strong>In this tutorial, you'll learn:</strong>
          <ul>
            <li>How to open DevTools</li>
            <li>Inspect and modify HTML/CSS using the Elements panel</li>
            <li>Use the Console for basic JavaScript debugging</li>
          </ul>
        </div>

        <h2 class="title is-3">Opening DevTools</h2>

        <p>There are several ways to open Chrome DevTools:</p>
        <ul>
          <li>Press <code>F12</code> on Windows/Linux</li>
          <li>Press <code>Cmd + Option + I</code> on Mac</li>
          <li>Right-click any element and select "Inspect"</li>
          <li>Use Chrome menu → More Tools → Developer Tools</li>
        </ul>

        <div class="image-container">
          <img src="/images/tutorials/getting-started/devtools-interface.svg" alt="DevTools Interface" />
        </div>

        <h2 class="title is-3">Working with the Elements Panel</h2>

        <p>The Elements panel shows your page's HTML structure and CSS styles. This is where you'll spend most of your time when working on page layout and design.</p>

        <h3>Inspecting Elements</h3>
        <ul>
          <li>Click the inspect icon (🔍) in the top-left corner of DevTools</li>
          <li>Hover over any element on the page to see its details</li>
          <li>Click an element to select it in the Elements panel</li>
          <li>Use the arrow keys to navigate through the HTML structure</li>
        </ul>

        <h3>Modifying HTML</h3>
        <ul>
          <li>Double-click element text to edit it</li>
          <li>Right-click elements for more options (delete, copy, etc.)</li>
          <li>Drag elements to reorder them</li>
          <li>Press Enter to save changes, Esc to cancel</li>
        </ul>

        <h3>Working with CSS</h3>
        <ul>
          <li>View and edit styles in the Styles pane</li>
          <li>Toggle CSS properties on/off using checkboxes</li>
          <li>Click the color squares to open the color picker</li>
          <li>Add new CSS rules using the + button</li>
        </ul>

        <div class="box has-background-white-ter mb-6">
          <strong>Try it yourself:</strong>
          <ol>
            <li>Right-click this page and select "Inspect"</li>
            <li>Try to find this practice box in the Elements panel</li>
            <li>Look at the CSS styles that make it look this way</li>
          </ol>
        </div>

        <h2 class="title is-3">Using the Console</h2>

        <p>The Console panel is your JavaScript playground and debugging tool. It's great for testing code and viewing errors.</p>

        <h3>Basic Console Usage</h3>
        <ul>
          <li>View JavaScript errors and warnings</li>
          <li>Test JavaScript code snippets</li>
          <li>Log messages from your code</li>
          <li>Interact with the page's JavaScript</li>
        </ul>

        <h3>Common Console Commands</h3>
        <div class="code-example">
          <pre><code>// Log a message

console.log('Hello, DevTools!');

// Show an error
console.error('Something went wrong!');

// Output a warning
console.warn('Be careful!');

// Test JavaScript expressions
2 + 2
document.title
document.querySelector('.practice-box')</code></pre>

</div>

        <div class="box has-background-white-ter mb-6">
          <strong>Console Practice:</strong>
          <ol>
            <li>Open the Console panel (press Esc while in Elements panel)</li>
            <li>Try the example commands above</li>
            <li>Look for any existing errors or warnings on this page</li>
          </ol>
        </div>

        <h2 class="title is-3">Best Practices</h2>
        <ul class="mb-6">
          <li>Keep DevTools open while developing</li>
          <li>Use the Elements panel to experiment with CSS</li>
          <li>Check the Console for JavaScript errors</li>
          <li>Learn keyboard shortcuts to work faster</li>
        </ul>

        <div class="box box-info mb-6">
          <p>
            <strong>💡 Pro Tip:</strong> You can press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> (Windows/Linux) or
            <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> (Mac) to quickly open DevTools and inspect an element.
          </p>
        </div>

        <div class="tutorial-navigation">
          <router-link to="/tutorials/getting-started/text-editors" class="button is-light">
            ← Text Editors
          </router-link>
          <router-link to="/tutorials/getting-started/domain-hosting" class="button is-primary">
            Domain & Hosting →
          </router-link>
        </div>
      </div>
    </div>

  </MainLayout>
</template>

<script setup>
import MainLayout from '../../../components/MainLayout.vue'
import '@/assets/styles/tutorials.css'
</script>
