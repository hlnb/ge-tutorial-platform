<template>
  <div class="content">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/">
            <i class="fa-solid fa-house mr-2"></i> Home
          </router-link>
        </li>
        <li><router-link to="/tutorials">Tutorials</router-link></li>
        <li><router-link to="/tutorials/git-basics">Git Basics</router-link></li>
        <li class="is-active">
          <a href="#" aria-current="page">Conclusion</a>
        </li>
      </ul>
    </nav>

    <div class="tags">
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">10 minutes</span>
      <span class="tag is-success">Git</span>
      <span class="tag is-success">Level 2</span>
    </div>

    <h1 class="title is-1">
      <i class="fas fa-check-circle mr-2"></i>
      Conclusion
    </h1>

    <div class="box highlight-box mb-6">
      <h3 class="title is-4">
        <i class="fas fa-graduation-cap"></i> Congratulations!
      </h3>
      <p>
        You've completed the Git Basics tutorial! Here's a quick summary of what you've learned:
      </p>
      <ul>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i> How to install and configure Git</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i> Basic Git commands for staging, committing, and viewing history</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i> How to create and manage branches</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i> How to merge branches and resolve conflicts</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i> How to work with remote repositories</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i> The typical Git workflow for collaboration</li>
      </ul>
    </div>

    <h2 class="title is-2">Next Steps</h2>
    <p>
      Now that you have a solid foundation in Git, here are some suggestions for what to do next:
    </p>
    <ul>
      <li>
        <i class="fas fa-arrow-right has-text-info mr-2"></i>
        Explore advanced Git topics, such as rebasing, cherry-picking, and stashing
      </li>
      <li>
        <i class="fas fa-arrow-right has-text-info mr-2"></i>
        Learn about GitHub workflows, including pull requests and code reviews
      </li>
      <li>
        <i class="fas fa-arrow-right has-text-info mr-2"></i>
        Practice by contributing to open-source projects on GitHub
      </li>
      <li>
        <i class="fas fa-arrow-right has-text-info mr-2"></i>
        Check out our <router-link to="/tutorials/git-advanced">Advanced Git Tutorial</router-link>
      </li>
    </ul>

    <h2 class="title is-2">Keep Practicing</h2>
    <p>
      The best way to master Git is through practice. Here are some exercises you can try:
    </p>
    <ul>
      <li>Create a new repository and practice branching, merging, and resolving conflicts</li>
      <li>Set up a remote repository and practice pushing and pulling changes</li>
      <li>Collaborate with a friend or colleague on a shared repository</li>
    </ul>

    <h2 class="title is-2">Feedback</h2>
    <p>
      We'd love to hear your thoughts on this tutorial! If you have any feedback or suggestions, please <router-link to="/contact">contact us</router-link>.
    </p>

    <TutorialQuiz :quiz-id="'git-basics-conclusion'" />

    <div class="level mt-6">
      <div class="level-left">
        <div class="level-item">
          <router-link to="/tutorials/git-basics/workflow" class="button is-info">
            <i class="fas fa-arrow-left mr-2"></i> Previous: Workflow
          </router-link>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <router-link to="/tutorials" class="button is-success">
            Back to Tutorials <i class="fas fa-arrow-right ml-2"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProgressTracking } from '@/utils/progressUtils';
import TutorialQuiz from '@/components/TutorialQuiz.vue';

// Initialize progress tracking
const { trackTutorial } = useProgressTracking();

// Track tutorial on mount
onMounted(() => {
  trackTutorial('/tutorials/git-basics/conclusion');
});
</script>

<script>
// Frontmatter for the tutorial
export default {
  frontmatter: {
    title: 'Conclusion',
    description: 'Wrap up the Git Basics tutorial with a summary and next steps',
    category: 'Git Basics',
    level: 'Beginner',
    order: 7,
    tags: ['git', 'conclusion', 'tutorial'],
    lastUpdated: '2025-05-12',
  },
};
</script>

<style scoped>
.highlight-box {
  background-color: #fafafa;
  border-left: 4px solid #f05033;
}
</style>