<template>
  <MainLayout>
    <div class="container section">
      <div class="content tutorial-content">
        <!-- Breadcrumb -->
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><router-link to="/tutorials">Tutorials</router-link></li>
            <li><router-link to="/tutorials/getting-started">Getting Started</router-link></li>
            <li class="is-active"><a href="#" aria-current="page">Working with Text Editors</a></li>
          </ul>
        </nav>

        <!-- Tutorial Metadata -->
        <div class="tutorial-meta">
          <div class="tags">
            <span class="tag is-info">Beginner</span>
            <span class="tag is-light">45 minutes</span>
            <span class="tag is-light">Tools</span>
            <span class="tag is-light">VS Code</span>
          </div>
        </div>

        <h1>Working with Text Editors</h1>

        <p>Visual Studio Code (VS Code) is a powerful editor that makes web development easier and more efficient.</p>

        <div class="box highlight-box">
          <strong>In this tutorial, you'll learn:</strong>
          <ul>
            <li>Essential VS Code features</li>
            <li>Helpful extensions</li>
            <li>Keyboard shortcuts</li>
            <li>Code organization tips</li>
          </ul>
        </div>

        <h2>VS Code Interface</h2>

        <div class="image-container">
          <img src="/images/tutorials/getting-started/vscode-interface.svg" alt="VS Code Interface" />
        </div>

        <h3>Key Areas</h3>
        <ol>
          <li><strong>File Explorer:</strong> Browse and manage files</li>
          <li><strong>Editor Area:</strong> Write and edit code</li>
          <li><strong>Activity Bar:</strong> Switch between views</li>
          <li><strong>Status Bar:</strong> Information and settings</li>
          <li><strong>Integrated Terminal:</strong> Run commands</li>
        </ol>

        <h2>Essential Features</h2>

        <h3>1. IntelliSense</h3>
        <ul>
          <li>Auto-completion</li>
          <li>Syntax highlighting</li>
          <li>Error detection</li>
          <li>Quick fixes</li>
        </ul>

        <h3>2. Multi-cursor Editing</h3>
        <ul>
          <li>Hold Alt/Option + Click for multiple cursors</li>
          <li>Select similar words with Ctrl/Cmd + D</li>
          <li>Edit multiple lines simultaneously</li>
        </ul>

        <h3>3. Integrated Terminal</h3>
        <ul>
          <li>Open: Ctrl + ` (backtick)</li>
          <li>Run commands</li>
          <li>View output</li>
          <li>Multiple terminals</li>
        </ul>

        <h2>Must-Have Extensions</h2>

        <div class="extensions-grid">
          <div class="box extension-box">
            <h3>Live Server</h3>
            <ul>
              <li>Real-time preview</li>
              <li>Auto-refresh</li>
              <li>Local development server</li>
            </ul>
          </div>

          <div class="box extension-box">
            <h3>HTML CSS Support</h3>
            <ul>
              <li>Better HTML/CSS editing</li>
              <li>Class suggestions</li>
              <li>Color previews</li>
            </ul>
          </div>

          <div class="box extension-box">
            <h3>Auto Rename Tag</h3>
            <ul>
              <li>Automatically rename paired HTML tags</li>
              <li>Faster editing</li>
              <li>Fewer errors</li>
            </ul>
          </div>
        </div>

        <h2>Keyboard Shortcuts</h2>
        <div class="box highlight-box">
          <strong>Essential Shortcuts</strong>
          <div class="shortcuts-grid">
            <div class="shortcut">
              <code>Ctrl/Cmd + S</code>
              <span>Save</span>
            </div>
            <div class="shortcut">
              <code>Ctrl/Cmd + F</code>
              <span>Find</span>
            </div>
            <div class="shortcut">
              <code>Ctrl/Cmd + H</code>
              <span>Replace</span>
            </div>
            <div class="shortcut">
              <code>Ctrl + `</code>
              <span>Toggle Terminal</span>
            </div>
            <div class="shortcut">
              <code>Alt + Shift + F</code>
              <span>Format Document</span>
            </div>
          </div>
        </div>

        <h2>File Organization</h2>

        <h3>Workspace Setup</h3>
        <pre><code class="language-text">project-name/

├── index.html
├── css/
│ └── style.css
├── js/
│ └── script.js
└── images/
└── logo.png</code></pre>

        <h3>Using the File Explorer</h3>
        <ol>
          <li>Create new files/folders</li>
          <li>Drag and drop</li>
          <li>Context menu options</li>
          <li>Search files</li>
        </ol>

        <h2>Code Snippets</h2>

        <p>VS Code includes helpful snippets for quick coding:</p>

        <h3>1. HTML Boilerplate</h3>
        <pre><code class="language-text">Type '!' or 'html:5'

Press Tab</code></pre>

        <h3>2. CSS Properties</h3>
        <ul>
          <li>Type property name</li>
          <li>Choose from suggestions</li>
        </ul>

        <h3>3. Custom Snippets</h3>
        <ul>
          <li>File > Preferences > User Snippets</li>
          <li>Create your own</li>
        </ul>

        <h2>Emmet Abbreviations</h2>

        <p>VS Code includes Emmet, a powerful tool that speeds up HTML and CSS writing.</p>

        <div class="box info-box">
          <p>
            <strong>💡 Pro Tip:</strong> Check out the complete
            <a href="https://docs.emmet.io/cheat-sheet/" target="_blank" rel="noopener">
              Emmet Cheat Sheet
            </a>
            for all available shortcuts.
          </p>
        </div>

        <h3>Basic HTML Shortcuts</h3>
        <div class="box code-examples">
          <div class="example">
            <strong>HTML Template</strong>
            <pre><code class="language-html">! + Tab</code></pre>
            <p>Creates complete HTML5 boilerplate</p>
          </div>

          <div class="example">
            <strong>Elements with Classes</strong>
            <pre><code class="language-html">div.container + Tab</code></pre>
            <p>Creates: &lt;div class="container"&gt;&lt;/div&gt;</p>
          </div>

          <div class="example">
            <strong>Multiple Elements</strong>
            <pre><code class="language-html">ul>li*3 + Tab</code></pre>
            <p>Creates nested list with 3 items</p>
          </div>
        </div>

        <div class="box highlight-box">
          <strong>Common Emmet Patterns</strong>
          <ul>
            <li><code>p{text}</code> → <code>&lt;p&gt;text&lt;/p&gt;</code></li>
            <li><code>div>p</code> → <code>&lt;div&gt;&lt;p&gt;&lt;/p&gt;&lt;/div&gt;</code></li>
            <li><code>h1+p</code> → <code>&lt;h1&gt;&lt;/h1&gt;&lt;p&gt;&lt;/p&gt;</code></li>
            <li><code>.item</code> → <code>&lt;div class="item"&gt;&lt;/div&gt;</code></li>
          </ul>
        </div>

        <!-- Navigation -->
        <div class="tutorial-navigation">
          <router-link to="/tutorials/getting-started/dev-environment" class="button is-light">
            ← Development Environment
          </router-link>
          <router-link to="/tutorials/getting-started/browser-tools" class="button is-primary">
            Browser Tools →
          </router-link>
        </div>
      </div>
    </div>

  </MainLayout>
</template>

<script setup>
import MainLayout from '../../../components/MainLayout.vue'
</script>

<style scoped>
.tutorial-content {
  max-width: 800px;
  margin: 0 auto;
}

.tutorial-meta {
  margin: 2rem 0;
}

.image-container {
  margin: 2rem 0;
  text-align: center;
}

.image-container img {
  max-width: 100%;
  height: auto;
}

.extensions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.extension-box {
  padding: 1rem;
  background-color: #f5f5f5;
}

.extension-box h3 {
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}

.shortcuts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.shortcut {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.shortcut code {
  background-color: #f0f0f0;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}

.code-examples .example {
  margin-bottom: 1.5rem;
}

.code-examples .example:last-child {
  margin-bottom: 0;
}

pre {
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
  overflow-x: auto;
}

.box.highlight-box {
  background-color: #f5f5f5;
}

.tutorial-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

.box.info-box {
  background-color: #f0f7ff;
  border-left: 4px solid #3273dc;
}

.info-box a {
  color: #3273dc;
  text-decoration: underline;
}

.info-box a:hover {
  color: #363636;
}
</style>
