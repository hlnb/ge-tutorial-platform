<template>
  <div class="content">
    <h1 class="title is-1"><i class="fas fa-cloud-upload-alt mr-2"></i> Push & Pull</h1>
    <div class="tags mb-4">
      <span class="tag is-success">Git</span>
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">Project</span>
    </div>
    <p>Practice pushing local changes and pulling updates from a remote repository.</p>
    <ol>
      <li>Clone a repository or use an existing one.</li>
      <li>Make a change, add, and commit it:
        <CodeMirror :code="`echo 'Change' > file.txt\ngit add file.txt\ngit commit -m 'Add change'`" language="bash" :read-only="true" />
      </li>
      <li>Push your changes:
        <CodeMirror :code="`git push origin main`" language="bash" :read-only="true" />
      </li>
      <li>Pull the latest changes:
        <CodeMirror :code="`git pull origin main`" language="bash" :read-only="true" />
      </li>
    </ol>
    <div class="notification is-info is-light mt-4">
      <i class="fas fa-lightbulb mr-2"></i> Try collaborating with a friend to see how push and pull work in a team!
    </div>
  </div>
</template>

<script setup>
import CodeMirror from '@/components/CodeMirror.vue';
</script>

<script>
export default {
  frontmatter: {
    title: 'Push & Pull',
    description: 'Push local changes and pull updates from a remote.',
    tags: ['git', 'push', 'pull', 'remote'],
    difficulty: 'Beginner',
    lastUpdated: '2025-05-27',
  },
};
</script>
