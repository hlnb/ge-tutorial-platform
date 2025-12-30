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
        <li><router-link to="/tutorials/intermediate/git-basics">Git Basics</router-link></li>
        <li class="is-active">
          <a href="#" aria-current="page">Workflow</a>
        </li>
      </ul>
    </nav>

    <div class="tags">
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">20 minutes</span>
      <span class="tag is-success">Git</span>
      <span class="tag is-success">Level 2</span>
    </div>

    <h1 class="title is-1">
      <i class="fas fa-project-diagram mr-2"></i>
      Git Workflow
    </h1>

    <!-- Learning Objectives -->
    <div class="box highlight-box mb-6">
      <h3 class="title is-4">
        <i class="fas fa-graduation-cap"></i> Learning Objectives
      </h3>
      <p>After completing this section, you'll be able to:</p>
      <ul>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Understand the typical Git workflow</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Use Git commands to stage, commit, push, and pull changes</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Collaborate with others using Git</li>
      </ul>
    </div>

    <!-- Prerequisites -->
    <div class="box prerequisite-box mb-6">
      <h3 class="title is-4">
        <i class="fas fa-clipboard-check"></i> Before You Start
      </h3>
      <p>To get the most out of this section, you should:</p>
      <ul>
        <li>
          <i class="fas fa-terminal has-text-dark mr-2"></i>
          Be familiar with basic Git commands - <router-link to="/tutorials/intermediate/git-basics/basic-commands">Review Basic Commands</router-link>
        </li>
        <li>
          <i class="fas fa-code-branch has-text-success mr-2"></i>
          Understand Git branching - <router-link to="/tutorials/intermediate/git-basics/branching">Review Branching</router-link>
        </li>
        <li>
          <i class="fas fa-cloud-upload-alt has-text-info mr-2"></i>
          Know how to connect to a remote repository - <router-link to="/tutorials/intermediate/git-basics/remote-repositories">Review Remote Repositories</router-link>
        </li>
      </ul>
    </div>

    <h2 class="title is-2">What is a Git Workflow?</h2>
    <p>
      A Git workflow is a series of steps that developers follow to manage changes in a project. It ensures that everyone on the team can collaborate effectively and that changes are tracked and versioned properly.
    </p>
    <p>
      The typical Git workflow involves the following steps:
    </p>
    <ul>
      <li>Making changes to files in your working directory</li>
      <li>Staging the changes to prepare them for a commit</li>
      <li>Committing the changes to save them in the local repository</li>
      <li>Pushing the changes to a remote repository</li>
      <li>Pulling changes from the remote repository to stay up-to-date</li>
    </ul>

    <h2 class="title is-2">Step 1: Make Changes</h2>
    <p>
      Start by making changes to the files in your project. These changes will be in your working directory and are not yet tracked by Git.
    </p>

    <h2 class="title is-2">Step 2: Stage Changes</h2>
    <p>
      Use the <code>git add</code> command to stage the changes you want to include in your next commit. For example:
    </p>
    <CodeMirror
      :code="`git add <file-name>`"
      language="bash"
      :read-only="true"
    />
    <p>
      To stage all changes, use:
    </p>
    <CodeMirror
      :code="`git add .`"
      language="bash"
      :read-only="true"
    />

    <h2 class="title is-2">Step 3: Commit Changes</h2>
    <p>
      Once your changes are staged, use the <code>git commit</code> command to save them in your local repository. For example:
    </p>
    <CodeMirror
      :code="`git commit -m 'Your commit message'`"
      language="bash"
      :read-only="true"
    />
    <p>
      The commit message should briefly describe the changes you made.
    </p>

    <h2 class="title is-2">Step 4: Push Changes</h2>
       <p>
      The <code>git push</code> command uploads your local commits to the remote repository. This allows others to access your changes and ensures your work is backed up remotely.
    </p>
    <p>
      The syntax <code>git push origin main</code> means:
    </p>
    <ul>
      <li><code>origin</code>: The name of the remote repository (default name when you add a remote)</li>
      <li><code>main</code>: The branch you want to push your changes to</li>
    </ul>
    <p>
      For example, the following command pushes your local changes to the <code>main</code> branch of the remote repository:
    </p>
    <CodeMirror
      :code="`git push origin main`"
      language="bash"
      :read-only="true"
    />
    <p>
      After the first push, you can simply use <code>git push</code> if the upstream branch is already set.
    </p>

    <h2 class="title is-2">Step 5: Pull Changes</h2>
        <p>
      The <code>git pull</code> command fetches changes from the remote repository and merges them into your local branch. This ensures your local repository is up-to-date with the latest changes made by others.
    </p>
    <p>
      The syntax <code>git pull origin main</code> means:
    </p>
    <ul>
      <li><code>origin</code>: The name of the remote repository</li>
      <li><code>main</code>: The branch you want to pull changes from</li>
    </ul>
    <p>
      For example, the following command fetches changes from the <code>main</code> branch of the remote repository and merges them into your current branch:
    </p>
    <CodeMirror
      :code="`git pull origin main`"
      language="bash"
      :read-only="true"
    />
    <p>
      If there are conflicts between your local changes and the remote changes, Git will notify you and require you to resolve the conflicts before completing the merge.
    </p>

    <h2 class="title is-2">Collaborating with Others</h2>
    <p>
      When working with a team, it's important to communicate and coordinate changes. Here are some tips for effective collaboration:
    </p>
    <ul>
      <li>Pull changes from the remote repository before starting new work</li>
      <li>Use branches to work on new features or bug fixes</li>
      <li>Write clear and descriptive commit messages</li>
      <li>Resolve merge conflicts promptly</li>
    </ul>

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

    <!-- Interactive Demo -->
    <div class="box interactive-demo mb-6">
      <h3 class="title is-4">
        <i class="fas fa-hand-pointer"></i> Try It Yourself
      </h3>
      <p>
        Use the interactive terminal below to practice the Git workflow:
      </p>
      <CodeMirror
        :code="`# Stage changes\ngit add .\n\n# Commit changes\ngit commit -m 'Your commit message'\n\n# Push changes\ngit push origin main\n\n# Pull changes\ngit pull origin main`"
        language="bash"
        :read-only="false"
      />
    </div>

    <!-- Tutorial Quiz -->
    <div class="quiz-box mt-6">
      <h2 class="title is-4"><i class="fas fa-question-circle"></i> Quick Quiz: Git Workflow</h2>
      <TutorialQuiz :quiz-id="'git-basics-workflow'" />
    </div>

    <!-- Tutorial Recommendations -->
    <TutorialRecommendations :current-path="'/tutorials/intermediate/git-basics/workflow'" />

    <div class="level mt-6">
      <div class="level-left">
        <div class="level-item">
          <router-link to="/tutorials/intermediate/git-basics/remote-repositories" class="button is-info">
            <i class="fas fa-arrow-left mr-2"></i> Previous: Remote Repositories
          </router-link>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <router-link to="/tutorials/intermediate/git-basics/conclusion" class="button is-success">
            Next: Conclusion <i class="fas fa-arrow-right ml-2"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { useProgress } from '@/composables/useProgress';

// Initialize progress tracking
const { trackTutorial, saveQuizResult } = useProgress();

onMounted(() => {
  trackTutorial('/tutorials/intermediate/git-basics/workflow');
});

const onQuizCompleted = (results) => {
  saveQuizResult('git-basics-workflow-quiz', results);
};
</script>

<script>
// Frontmatter for the tutorial
export default {
  frontmatter: {
    title: 'Workflow',
    description: 'Learn the typical Git workflow for managing changes and collaborating with others',
    category: 'Git Basics',
    level: 'Beginner',
    order: 6,
    tags: ['git', 'workflow', 'collaboration', 'tutorial'],
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
  border-radius: 0.5rem;
}
</style>