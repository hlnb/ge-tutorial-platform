<template>
  <MainLayout>
    <div class="container section">
      <div class="content tutorial-content">
        <!-- Breadcrumb -->
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><router-link to="/tutorials">Tutorials</router-link></li>
            <li><router-link to="/tutorials/getting-started">Getting Started</router-link></li>
            <li class="is-active"><a href="#" aria-current="page">Web Basics</a></li>
          </ul>
        </nav>

        <!-- Tutorial Metadata -->
        <div class="tutorial-meta">
          <div class="tags">
            <span class="tag is-info">Beginner</span>
            <span class="tag is-light">45 minutes</span>
            <span class="tag is-light">Fundamentals</span>
            <span class="tag is-light">Concepts</span>
          </div>
        </div>

        <h1>Understanding Web Development Basics</h1>

        <p>Before diving into coding, let's understand how websites work and the technologies that power them.</p>

        <div class="box highlight-box">
          <strong>In this lesson, you'll learn:</strong>
          <ul>
            <li>How websites work</li>
            <li>The client-server model</li>
            <li>Core web technologies</li>
            <li>How browsers interpret code</li>
          </ul>
        </div>

        <h2>How Websites Work</h2>

        <p>When you visit a website, several things happen:</p>

        <div class="image-container">
          <img src="/images/tutorials/getting-started/client-server.svg" alt="Client-Server Model" />
        </div>

        <ol>
          <li><strong>Request</strong>: Your browser requests a webpage from a server</li>
          <li><strong>Processing</strong>: The server processes the request</li>
          <li><strong>Response</strong>: The server sends back HTML, CSS, and JavaScript files</li>
          <li><strong>Rendering</strong>: Your browser displays the webpage</li>
        </ol>

        <div class="box analogy-box">
          <strong>Think of it like ordering from a restaurant:</strong>
          <ul>
            <li>You (the browser) request a meal (webpage)</li>
            <li>The kitchen (server) prepares it</li>
            <li>The waiter (internet) delivers it</li>
            <li>You receive and enjoy the meal (rendered page)</li>
          </ul>
        </div>

        <h2>Core Web Technologies</h2>

        <p>The three main technologies that power the web work together like this:</p>
        <div class="image-container">
          <img src="/images/tutorials/getting-started/website-technologies.svg" alt="Web Technologies" />
        </div>

        <h3>HTML (Structure)</h3>
        <ul>
          <li>The backbone of web pages</li>
          <li>Defines content structure</li>
          <li>Like the skeleton of a building</li>
        </ul>

        <pre><code class="language-html">&lt;h1&gt;Welcome&lt;/h1&gt;

&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></pre>

        <h3>CSS (Style)</h3>
        <ul>
          <li>Controls appearance</li>
          <li>Handles layout and design</li>
          <li>Like paint and decorations</li>
        </ul>

        <pre><code class="language-css">h1 {

color: var(--primary-dark-red);
font-size: 24px;
}</code></pre>

        <h3>JavaScript (Behavior)</h3>
        <ul>
          <li>Adds interactivity</li>
          <li>Handles user actions</li>
          <li>Like the electrical system</li>
        </ul>

        <pre><code class="language-javascript">button.addEventListener('click', () => {

alert('Hello!');
});</code></pre>

        <h2>The Client-Server Model</h2>

        <div class="columns">
          <div class="column">
            <h3>Client (Frontend)</h3>
            <ul>
              <li>Web browser</li>
              <li>Displays content</li>
              <li>Handles user interaction</li>
              <li>Runs on user's device</li>
            </ul>
          </div>
          <div class="column">
            <h3>Server (Backend)</h3>
            <ul>
              <li>Stores website files</li>
              <li>Processes requests</li>
              <li>Manages data</li>
              <li>Runs on remote computer</li>
            </ul>
          </div>
        </div>

        <div class="box highlight-box">
          <strong>Local Development</strong>: When developing, your computer acts as both client and server:
          <ul>
            <li>VS Code edits the files</li>
            <li>Live Server acts as your web server</li>
            <li>Chrome displays the results</li>
          </ul>
        </div>

        <h2>How Browsers Work</h2>

        <p>Browsers process web pages in several steps:</p>

        <div class="image-container">
          <img src="/images/tutorials/getting-started/browser-process.svg" alt="Browser Process" />
        </div>

        <ol>
          <li>
            <strong>Parse HTML</strong>
            <ul>
              <li>Read HTML code</li>
              <li>Create Document Object Model (DOM)</li>
            </ul>
          </li>
          <li>
            <strong>Process CSS</strong>
            <ul>
              <li>Apply styles</li>
              <li>Calculate layouts</li>
            </ul>
          </li>
          <li>
            <strong>Execute JavaScript</strong>
            <ul>
              <li>Run scripts</li>
              <li>Add interactivity</li>
            </ul>
          </li>
          <li>
            <strong>Render Page</strong>
            <ul>
              <li>Display final result</li>
              <li>Update as needed</li>
            </ul>
          </li>
        </ol>

        <h2>Try It Yourself</h2>

        <div class="steps">
          <div class="step-item">
            <h3>View Page Source</h3>
            <ul>
              <li>Visit any website</li>
              <li>Right-click > View Page Source</li>
              <li>Observe HTML structure</li>
            </ul>
          </div>

          <div class="step-item">
            <h3>Inspect Elements</h3>
            <ul>
              <li>Right-click > Inspect</li>
              <li>Try modifying text</li>
              <li>Watch changes live</li>
            </ul>
          </div>

          <div class="step-item">
            <h3>Network Tab</h3>
            <ul>
              <li>Open DevTools</li>
              <li>Go to Network tab</li>
              <li>Reload page</li>
              <li>Watch resources load</li>
            </ul>
          </div>
        </div>

        <div class="box practice-box">
          <strong>Practice Exercise:</strong>
          <ol>
            <li>Create a simple HTML file</li>
            <li>View it in Chrome</li>
            <li>Use DevTools to inspect it</li>
            <li>Watch the Network tab as it loads</li>
          </ol>
        </div>

        <h2>Common Terms</h2>
        <dl class="terms-list">
          <dt>URL</dt>
          <dd>Web page address</dd>
          <dt>Domain</dt>
          <dd>Website name (e.g., google.com)</dd>
          <dt>HTTP</dt>
          <dd>Protocol for web communication</dd>
          <dt>DNS</dt>
          <dd>System that converts domains to IP addresses</dd>
          <dt>Hosting</dt>
          <dd>Service that stores website files</dd>
        </dl>

        <!-- Navigation -->
        <div class="tutorial-navigation">
          <router-link to="/tutorials/getting-started/how-internet-works" class="button is-light">
            ← How the Internet Works
          </router-link>
          <router-link to="/tutorials/getting-started/dev-environment" class="button is-primary">
            Development Environment →
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

.box.analogy-box {
  background-color: #f0f7ff;
}

.box.practice-box {
  background-color: #f0fff4;
}

.steps {
  margin: 2rem 0;
}

.step-item {
  margin-bottom: 2rem;
}

.step-item h3 {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.terms-list dt {
  font-weight: bold;
  margin-top: 1rem;
}

.terms-list dd {
  margin-left: 1rem;
}

.tutorial-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}
</style>
