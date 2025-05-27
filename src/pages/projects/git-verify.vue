<template>
  <div class="content">
    <h1 class="title is-1"><i class="fas fa-check-circle mr-2"></i> Verify Git Installation</h1>
    <div class="tags mb-4">
      <span class="tag is-success">Git</span>
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">Project</span>
    </div>
    <p>This project will help you verify your Git installation and configuration.</p>
    <ol>
      <li>Open your terminal and run:
        <CodeMirror :code="`git --version`" language="bash" :read-only="true" />
        <p>You should see the installed Git version.</p>
      </li>
      <li>Check your configuration:
        <CodeMirror :code="`git config --list`" language="bash" :read-only="true" />
        <p>Review your username, email, and other settings.</p>
      </li>
    </ol>
    <div class="notification is-success is-light mt-4">
      <i class="fas fa-check-circle mr-2"></i> If you see your configuration, Git is installed correctly!
    </div>
  </div>
</template>

<script setup>
import CodeMirror from '@/components/CodeMirror.vue';
</script>

<script>
export default {
  frontmatter: {
    title: 'Verify Git Installation',
    description: 'Run git --version and git config --list to verify your setup.',
    tags: ['git', 'verify', 'setup'],
    difficulty: 'Beginner',
    lastUpdated: '2025-05-27',
  },
};
</script>
