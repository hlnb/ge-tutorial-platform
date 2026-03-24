<template>
  <div class="tutorial-content">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/">
            <i class="fa-solid fa-house mr-2"></i> Home
          </router-link>
        </li>
        <li><router-link to="/tutorials">Tutorials</router-link></li>
        <li><router-link to="/tutorials/intermediate/git-basics">Git Basics</router-link></li>
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

    <!-- Hunter Element 1: Anticipatory Set -->
    <AnticipatorySet
      title="Start Here"
      :hook="`<p>You've made it through the entire Git Basics series! Before we wrap up, let's take a moment to reflect on everything you've learned and see just how far you've come.</p>`"
      :reflection-prompts="[
        'Which Git concept was the most surprising or interesting to you?',
        'How confident do you feel using Git in your own projects now?'
      ]"
      connection="Let's review everything you've accomplished and look at what comes next."
    />

    <!-- Hunter Element 2: Learning Objectives -->
    <LearningObjectives
      :objectives="[
        'Review all the key Git concepts covered in this series',
        'Identify next steps for continuing your Git learning journey',
        'Know where to practice and apply your Git skills'
      ]"
      purpose="Reflecting on what you've learned helps solidify the concepts and prepares you for the next stage of your development journey."
    />

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
        Explore advanced Git topics like rebasing, cherry-picking, and Git hooks
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

    <!-- Hunter Bottom Components -->
    <TestYourKnowledgeSection tutorial-path="/tutorials/intermediate/git-basics/conclusion" />

    <ClosureSection
      title="🎓 Series Complete: Git Basics"
      :key-takeaways="closureKeyTakeaways"
      :objectives="closureObjectives"
      :reflection-prompts="closureReflectionPrompts"
      :next-steps="`<p>You now have a strong Git foundation. Continue practicing by contributing to open-source projects or setting up team workflows with pull requests and code reviews.</p>`"
    />

    <TutorialRecommendations :current-path="'/tutorials/intermediate/git-basics/conclusion'" />

    <TutorialCompletion tutorial-path="/tutorials/intermediate/git-basics/conclusion" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';
import TestYourKnowledgeSection from '@/components/TestYourKnowledgeSection.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import TutorialCompletion from '@/components/TutorialCompletion.vue';

const closureKeyTakeaways = [
  'Install and configure Git on any operating system',
  'Use basic commands: init, add, commit, status, and log',
  'Create and manage branches for organized development',
  'Merge branches and resolve conflicts confidently',
  'Connect to remote repositories and push/pull changes',
  'Follow a professional Git workflow for collaboration',
];

const closureObjectives = [
  'Review all the key Git concepts covered in this series',
  'Identify next steps for continuing your Git learning journey',
  'Know where to practice and apply your Git skills',
];

const closureReflectionPrompts = [
  {
    title: '\ud83d\udcad Reflection Questions',
    questions: [
      'Which Git skill are you most excited to use in a real project?',
      'What would you do differently now compared to before this series?',
      'How would you explain Git to someone who has never heard of it?',
    ],
  },
];


</script>

<script>
// Frontmatter for the tutorial
export default {
  frontmatter: {
    title: 'Conclusion',
    description: 'Wrap up the Git Basics tutorial with a summary and next steps',
    category: 'Git Basics',
    level: 'Beginner',
    order: 9,
    tags: ['git', 'conclusion', 'tutorial'],
    lastUpdated: '2025-05-12',
  },
};
</script>

