<template>
  <div class="content">
    <h1 class="title is-1">AI-Assisted Web Development</h1>
    <p class="subtitle is-4">Learn how to use AI as a coding copilot across your web projects.</p>

    <div class="box">
      <h3 class="title is-5">Module overview</h3>
      <ul>
        <li>Introduction to AI tools for developers</li>
        <li>Workflow integration with editors and CI</li>
        <li>Project-driven examples and automation</li>
      </ul>
    </div>

    <div class="tutorials-grid mt-4">
      <div class="card column is-one-third">
        <div class="card-content">
          <h3 class="title is-5"><router-link :to="{ name: 'ai-assisted-introduction' }">Introduction to AI Tools</router-link></h3>
          <p>Overview of AI assistants, prompt engineering, and ethics.</p>
        </div>
      </div>

      <div class="card column is-one-third">
        <div class="card-content">
          <h3 class="title is-5"><router-link :to="{ name: 'ai-assisted-workflow-integration' }">AI-Powered Workflow</router-link></h3>
          <p>Integrating AI into your editor, generating boilerplate, and debugging.</p>
        </div>
      </div>

      <div class="card column is-one-third">
        <div class="card-content">
          <h3 class="title is-5"><router-link :to="{ name: 'ai-assisted-building-with-ai' }">Building with AI</router-link></h3>
          <p>Project applications and examples for AI-assisted builds.</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
// Page stub for AI-Assisted module
</script>

<style scoped>
.tutorials-grid { display:flex; gap:1rem; flex-wrap:wrap }
</style>
