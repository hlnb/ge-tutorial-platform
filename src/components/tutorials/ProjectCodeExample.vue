<template>
  <section class="box project-code-example">
    <div class="project-code-example__header">
      <div>
        <h3 class="title is-4">{{ title }}</h3>
        <p class="project-code-example__intro">
          {{ intro }}
          <router-link v-if="projectPath" :to="projectPath" class="ml-1">
            See the full {{ projectName }} project
          </router-link>
        </p>
      </div>
      <span v-if="fileLabel" class="tag is-light">{{ fileLabel }}</span>
    </div>

    <CodeMirror :code="code" :language="language" />

    <p v-if="takeaway" class="project-code-example__takeaway">
      <strong>Why this structure helps:</strong> {{ takeaway }}
    </p>
  </section>
</template>

<script setup>
import CodeMirror from '@/components/CodeMirror.vue';

defineProps({
  title: {
    type: String,
    default: 'Running Project Example',
  },
  intro: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    default: 'project',
  },
  projectPath: {
    type: String,
    default: '',
  },
  fileLabel: {
    type: String,
    default: 'script.js',
  },
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'javascript',
  },
  takeaway: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
.project-code-example {
  border-left: 4px solid #3298dc;
  margin: 2rem 0;
}

.project-code-example__header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-code-example__intro,
.project-code-example__takeaway {
  margin-bottom: 0;
}

.project-code-example__takeaway {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .project-code-example__header {
    flex-direction: column;
  }
}
</style>
