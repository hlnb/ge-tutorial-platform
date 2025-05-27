<template>
  <div class="content">
    <h1 class="title is-1"><i class="fas fa-download mr-2"></i> Install and Configure Git</h1>
    <div class="tags mb-4">
      <span class="tag is-success">Git</span>
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">Project</span>
    </div>
    <p>This project will guide you through installing Git, setting your username and email, and configuring your default editor.</p>
    <ol>
      <li>Download and install Git from <a href="https://git-scm.com/downloads" target="_blank">git-scm.com</a>.</li>
      <li>Open your terminal and run:
        <CodeMirror :code="`git config --global user.name 'Your Name'\ngit config --global user.email 'your@email.com'`" language="bash" :read-only="true" />
      </li>
      <li>Optionally, set your default editor:
        <CodeMirror :code="`git config --global core.editor 'code --wait'`" language="bash" :read-only="true" />
      </li>
    </ol>
    <div class="notification is-info is-light mt-4">
      <i class="fas fa-lightbulb mr-2"></i> Tip: Use <code>git config --list</code> to see your current configuration.
    </div>
  </div>
</template>

<script setup>
import CodeMirror from '@/components/CodeMirror.vue';
</script>

<script>
export default {
  frontmatter: {
    title: 'Install and Configure Git',
    description: 'Install Git, set your username/email, and configure your default editor.',
    tags: ['git', 'install', 'config'],
    difficulty: 'Beginner',
    lastUpdated: '2025-05-27',
  },
};
</script>
