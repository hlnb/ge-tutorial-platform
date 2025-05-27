<template>
  <div class="content">
    <h1 class="title is-1"><i class="fas fa-clone mr-2"></i> Clone and Explore</h1>
    <div class="tags mb-4">
      <span class="tag is-success">Git</span>
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">Project</span>
    </div>
    <p>This project will guide you through cloning a remote repository and exploring its history.</p>
    <ol>
      <li>Find a repository to clone (e.g., <a href="https://github.com/octocat/Hello-World" target="_blank">Hello-World</a>).</li>
      <li>Run:
        <CodeMirror :code="`git clone https://github.com/octocat/Hello-World.git`" language="bash" :read-only="true" />
      </li>
      <li>Change into the project directory and view the log:
        <CodeMirror :code="`cd Hello-World\ngit log --oneline`" language="bash" :read-only="true" />
      </li>
    </ol>
    <div class="notification is-info is-light mt-4">
      <i class="fas fa-lightbulb mr-2"></i> Try exploring the commit history and files in the cloned repo.
    </div>
  </div>
</template>

<script setup>
import CodeMirror from '@/components/CodeMirror.vue';
</script>

<script>
export default {
  frontmatter: {
    title: 'Clone and Explore',
    description: 'Clone a remote repository and explore its history.',
    tags: ['git', 'clone', 'history'],
    difficulty: 'Beginner',
    lastUpdated: '2025-05-27',
  },
};
</script>
