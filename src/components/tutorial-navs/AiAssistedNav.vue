<template>
  <aside class="menu module-nav">
    <p class="menu-label">AI-Assisted</p>
    <ul class="menu-list">
      <li><router-link :to="{ name: 'ai-assisted-introduction' }">Introduction</router-link></li>
      <li><router-link :to="{ name: 'ai-assisted-workflow-integration' }">Workflow Integration</router-link></li>
      <li><router-link :to="{ name: 'ai-assisted-building-with-ai' }">Building with AI</router-link></li>
      <li><router-link :to="{ name: 'ai-assisted-design-to-code' }">Design to Code</router-link></li>
      <li><router-link :to="{ name: 'ai-assisted-custom-gpt-automation' }">Custom GPTs & Automation</router-link></li>
      <li class="mt-3"><strong>Projects</strong>
        <ul>
          <li><router-link :to="{ name: 'projects' }">AI Landing Page</router-link></li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'AiAssistedNav',
};
</script>

<style scoped>
.module-nav { width: 220px; }
</style>
