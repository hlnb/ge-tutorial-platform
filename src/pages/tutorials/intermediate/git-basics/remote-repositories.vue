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
          <a href="#" aria-current="page">Remote Repositories</a>
        </li>
      </ul>
    </nav>

    <div class="tags">
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">30 minutes</span>
      <span class="tag is-success">Git</span>
      <span class="tag is-success">Level 2</span>
    </div>

    <h1 class="title is-1">
      <i class="fas fa-cloud-upload-alt mr-2"></i>
      Remote Repositories
    </h1>

    <!-- Hunter Element 1: Anticipatory Set -->
    <AnticipatorySet
      title="Start Here"
      :hook="`<p>So far, your Git repository lives only on your computer. But what if your hard drive fails? What if you want to collaborate with others? Remote repositories solve both problems—they're copies of your project hosted online that you can push to and pull from.</p>`"
      :reflection-prompts="[
        'Have you ever lost work because it was only saved on one device?',
        'How do teams currently share code with each other?'
      ]"
      connection="Let's learn how to connect your local Git repository to the cloud using GitHub or GitLab."
    />

    <!-- Hunter Element 2: Learning Objectives -->
    <LearningObjectives
      :objectives="[
        'Understand what remote repositories are and why they are useful',
        'Set up an account on GitHub or GitLab',
        'Connect a local repository to a remote repository',
        'Push and pull changes between local and remote repositories'
      ]"
      :prerequisites="[
        'Be familiar with basic Git commands',
        'Have a Git repository ready to practice with',
        'Create an account on GitHub or GitLab'
      ]"
      purpose="Remote repositories are how real teams collaborate. Understanding push, pull, and remote connections is essential for contributing to any project."
    />

    <h2 class="title is-2">What is a Remote Repository?</h2>
    <p>
      A remote repository is a version of your project hosted on the internet or another network. It allows you to:
    </p>
    <ul>
      <li>Collaborate with others by sharing your code</li>
      <li>Back up your project to prevent data loss</li>
      <li>Access your project from multiple devices</li>
    </ul>
    <p>
      Popular platforms for hosting remote repositories include <strong>GitHub</strong>, <strong>GitLab</strong>, and <strong>Bitbucket</strong>. In this tutorial, we'll focus on GitHub and GitLab.
    </p>

    <h2 class="title is-2">Step 1: Set Up an Account</h2>
    <p>
      Before you can use a remote repository, you need to create an account on a hosting platform. Follow these steps:
    </p>
    <div class="columns">
      <div class="column">
        <div class="box">
          <h3 class="title is-4">GitHub</h3>
          <p>
            Visit <a href="https://github.com" target="_blank">https://github.com</a> and sign up for a free account. Once you've created your account, you can create repositories and collaborate with others.
          </p>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <h3 class="title is-4">GitLab</h3>
          <p>
            Visit <a href="https://gitlab.com" target="_blank">https://gitlab.com</a> and sign up for a free account. GitLab offers similar features to GitHub and is a great alternative.
          </p>
        </div>
      </div>
    </div>

    <h2 class="title is-2">Step 2: Create a Remote Repository</h2>
    <p>
      After setting up your account, create a new repository on your chosen platform. Follow these steps:
    </p>
    <ul>
      <li>Log in to your account on GitHub or GitLab</li>
      <li>Click the "New Repository" button</li>
      <li>Enter a name for your repository (e.g., <code>my-project</code>)</li>
      <li>Choose whether the repository should be public or private</li>
      <li>Click "Create Repository"</li>
    </ul>

    <h2 class="title is-2">Step 3: Connect Your Local Repository</h2>
    <p>
      To connect your local repository to the remote repository, use the following command:
    </p>
    <CodeMirror
      :code="`git remote add origin <repository-url>`"
      language="bash"
      :read-only="true"
    />
    <p>
      Replace <code>&lt;repository-url&gt;</code> with the URL of your remote repository. For example:
    </p>
    <CodeMirror
      :code="`git remote add origin https://github.com/your-username/my-project.git`"
      language="bash"
      :read-only="true"
    />
    <p>
      This command links your local repository to the remote repository and names it <code>origin</code>.
    </p>

    <h2 class="title is-2">Step 4: Push Changes to the Remote Repository</h2>
    <p>
      To upload your local changes to the remote repository, use the following command:
    </p>
    <CodeMirror
      :code="`git push -u origin main`"
      language="bash"
      :read-only="true"
    />
    <p>
      This pushes the changes in your local <code>main</code> branch to the remote repository. The <code>-u</code> flag sets the upstream branch, so you can use <code>git push</code> in the future without specifying the branch.
    </p>

    <h2 class="title is-2">Step 5: Pull Changes from the Remote Repository</h2>
    <p>
      To download changes from the remote repository to your local repository, use the following command:
    </p>
    <CodeMirror
      :code="`git pull origin main`"
      language="bash"
      :read-only="true"
    />
    <p>
      This fetches and merges changes from the remote <code>main</code> branch into your local branch.
    </p>

    <!-- Interactive Demo -->
    <div class="box interactive-demo mb-6">
      <h3 class="title is-4">
        <i class="fas fa-hand-pointer"></i> Try It Yourself
      </h3>
      <p>
        Use the interactive terminal below to practice connecting a local repository to a remote repository and pushing changes:
      </p>
      <CodeMirror
        :code="`# Add a remote repository\ngit remote add origin https://github.com/your-username/my-project.git\n\n# Push changes to the remote repository\ngit push -u origin main\n\n# Pull changes from the remote repository\ngit pull origin main`"
        language="bash"
        :read-only="false"
      />
    </div>

        <h2 class="title is-2">Setting Up Git in VS Code</h2>
    <p>
      Visual Studio Code has built-in Git support, making it easy to manage your repositories directly from the editor. Follow these steps to set up Git in VS Code:
    </p>
    
    <h3 class="title is-4">Step 1: Open the Source Control Panel</h3>
    <p>
      Click on the <i class="fas fa-code-branch"></i> Source Control icon in the Activity Bar on the left side of the editor. If you have a Git repository initialized in your project folder, it will automatically appear here.
    </p>
    
    <h3 class="title is-4">Step 2: Configure Git in VS Code</h3>
    <p>
      If you haven't already configured Git globally, VS Code will prompt you to set your name and email. You can also configure it manually by running the following commands in the integrated terminal:
    </p>
    <CodeMirror
      :code="`git config --global user.name 'Your Name'\ngit config --global user.email 'your.email@example.com'`"
      language="bash"
      :read-only="true"
    />
    
    <h3 class="title is-4">Step 3: Commit Changes</h3>
    <p>
      To commit changes, stage your files by clicking the <i class="fas fa-plus"></i> icon next to the file name in the Source Control panel. Then, enter a commit message in the text box and click the checkmark icon to commit.
    </p>
    
    <h3 class="title is-4">Step 4: Push and Pull Changes</h3>
    <p>
      Use the Source Control panel to push your changes to a remote repository or pull changes from it. You can also use the integrated terminal to run <code>git push</code> and <code>git pull</code> commands.
    </p>
    
    <h3 class="title is-4">Step 5: View Git History</h3>
    <p>
      Install the <a href="https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory" target="_blank">Git History</a> extension to view your commit history in a visual format. This can be helpful for tracking changes and understanding your project's timeline.
    </p>
    <!-- Hunter Bottom Components -->
    <TestYourKnowledgeSection tutorial-path="/tutorials/intermediate/git-basics/remote-repositories" />

    <ClosureSection
      title="🏁 Lesson Complete: Remote Repositories"
      :key-takeaways="closureKeyTakeaways"
      :objectives="closureObjectives"
      :reflection-prompts="closureReflectionPrompts"
      :next-steps="`<p>Now that you can work with remote repositories, you're ready to learn the complete <strong>Git workflow</strong> that professional teams use every day.</p>`"
    />

    <TutorialRecommendations :current-path="'/tutorials/intermediate/git-basics/remote-repositories'" />

    <TutorialCompletion tutorial-path="/tutorials/intermediate/git-basics/remote-repositories" />
  </div>
</template>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';
import TestYourKnowledgeSection from '@/components/TestYourKnowledgeSection.vue';
import TutorialCompletion from '@/components/TutorialCompletion.vue';

useTutorialHead({
  title: 'Remote Repositories in Git',
  description: 'Push, pull, and collaborate using remote Git repositories — a practical guide to working with GitHub or GitLab.',
  path: '/tutorials/intermediate/git-basics/remote-repositories',
});

const closureKeyTakeaways = [
  'Remote repositories are copies of your project hosted online (GitHub, GitLab, Bitbucket)',
  'git remote add origin connects your local repo to a remote one',
  'git push uploads your commits to the remote repository',
  'git pull fetches and merges remote changes into your local branch',
  'VS Code has built-in support for pushing, pulling, and managing remotes',
];

const closureObjectives = [
  'Understand what remote repositories are and why they are useful',
  'Set up an account on GitHub or GitLab',
  'Connect a local repository to a remote repository',
  'Push and pull changes between local and remote repositories',
];

const closureReflectionPrompts = [
  {
    title: '\ud83d\udcad Reflection Questions',
    questions: [
      'What are the advantages of having your code hosted on a remote platform?',
      'When should you push your changes to a remote repository?',
      'How does pulling changes help when working on a team?',
    ],
  },
];

const onQuizCompleted = (results) => {
  saveQuizResult('git-basics-remote-repositories-quiz', results);
};
</script>

<script>
// Frontmatter for the tutorial
export default {
  frontmatter: {
    title: 'Remote Repositories',
    description: 'Learn how to connect your local Git repository to a remote repository on GitHub or GitLab',
    category: 'Git Basics',
    level: 'Beginner',
    order: 7,
    tags: ['git', 'remote repositories', 'github', 'gitlab', 'tutorial'],
    lastUpdated: '2025-05-12',
  },
};
</script>

<style scoped>
.highlight-box {
  background-color: #fafafa;
  border-left: 4px solid #f05033;
}

.prerequisite-box {
  background-color: #f8f9fa;
  border-left: 4px solid #3273dc;
}

.interactive-demo {
  background-color: #f0f8ff;
  border-left: 4px solid #00d1b2;
}

.quiz-box {
  background-color: #fff8f0;
  border-left: 4px solid #ffdd57;
  padding: 1.5rem;
  margin-top: 2rem;
  border-radius: 0.5rem;
}
</style>