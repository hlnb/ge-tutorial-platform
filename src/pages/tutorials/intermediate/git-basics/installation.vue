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
          <a href="#" aria-current="page">Installation</a>
        </li>
      </ul>
    </nav>

    <div class="tags">
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">20 minutes</span>
      <span class="tag is-success">Git</span>
      <span class="tag is-success">Level 1</span>
    </div>

    <h1 class="title is-1">
      <i class="fas fa-code-branch mr-2"></i>
      Installing Git & Recommended Tools
    </h1>

    <!-- Learning Objectives -->
    <div class="box highlight-box mb-6">
      <h3 class="title is-4">
        <i class="fas fa-graduation-cap"></i> Learning Objectives
      </h3>
      <p>After completing this section, you'll be able to:</p>
      <ul>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Install Git on your operating system</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Configure Git with your name and email</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Verify your Git installation</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Explore recommended GUI tools for Git</li>
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
          Be comfortable using the command line
        </li>
        <li>
          <i class="fas fa-download has-text-warning mr-2"></i>
          Have administrator privileges on your computer
        </li>
      </ul>
    </div>

    <h2 class="title is-2">Step 1: Install Git</h2>
    <p>
      Git is available for Windows, macOS, and Linux. Follow the instructions below to install Git on your operating system:
    </p>

    <div class="columns">
      <div class="column">
        <div class="box">
          <h3 class="title is-4">Windows</h3>
          <p>
            Visit the official Git website: <a href="https://git-scm.com/" target="_blank">https://git-scm.com/</a>
          </p>
          <p>Download the installer and follow the setup wizard.</p>
          <p>
            During installation, select the following options:
          </p>
          <ul>
            <li>Use Git from the command line and third-party software</li>
            <li>Use the default editor (or choose your preferred editor)</li>
            <li>Use Git from Git Bash only</li>
          </ul>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <h3 class="title is-4">macOS</h3>
          <p>
            Open the Terminal and type the following command:
          </p>
          <CodeMirror
            :code="'xcode-select --install'"
            language="bash"
            :read-only="true"
          />
          <p>
            This will install Git along with the Xcode Command Line Tools.
          </p>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <h3 class="title is-4">Linux</h3>
          <p>
            Use your package manager to install Git. For example:
          </p>
          <CodeMirror
          :code="'sudo apt install git\nsudo yum install git'"
          language="bash"
          :read-only="true"
        />
        </div>
      </div>
    </div>

    <h2 class="title is-2">Step 2: Configure Git</h2>
    <p>
      After installing Git, you need to configure your identity. This information will be attached to your commits.
    </p>
    <CodeMirror
        :code="`git config --global user.name 'Your Name'
git config --global user.email 'your.email@example.com'`"
        language="bash"
        :read-only="true"
    />
    <p>
      To verify your configuration, run:
    </p>
    <CodeMirror
      :code="'git config --list'"
      language="bash"
      :read-only="true"
    />

    <h2 class="title is-2">Step 3: Verify Installation</h2>
    <p>
      To ensure Git is installed correctly, run the following command:
    </p>
    <CodeMirror
      :code="'git --version'"
      language="bash"
      :read-only="true"
    />
    <p>
      You should see the installed version of Git.
    </p>

    <h2 class="title is-2">Recommended GUI Tools</h2>
    <p>
      While Git is primarily used via the command line, there are several GUI tools that make it easier to visualize and manage your repositories:
    </p>
    <div class="columns">
      <div class="column">
        <div class="box">
          <h3 class="title is-4">GitHub Desktop</h3>
          <p>
            A free and user-friendly Git client for Windows and macOS. Ideal for beginners.
          </p>
          <p>
            <a href="https://desktop.github.com/" target="_blank">Download GitHub Desktop</a>
          </p>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <h3 class="title is-4">Sourcetree</h3>
          <p>
            A powerful Git GUI client for Windows and macOS, developed by Atlassian.
          </p>
          <p>
            <a href="https://www.sourcetreeapp.com/" target="_blank">Download Sourcetree</a>
          </p>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <h3 class="title is-4">GitKraken</h3>
          <p>
            A cross-platform Git client with a sleek interface and advanced features.
          </p>
          <p>
            <a href="https://www.gitkraken.com/" target="_blank">Download GitKraken</a>
          </p>
        </div>
      </div>
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
    <!-- Tutorial Quiz -->
    <div class="quiz-box mt-6">
      <h2 class="title is-4"><i class="fas fa-question-circle"></i> Quick Quiz: Installing Git</h2>
      <TutorialQuiz :quiz-id="'git-basics-installation'" />
    </div>

    <!-- Tutorial Recommendations -->
    <TutorialRecommendations :current-path="'/tutorials/intermediate/git-basics/installation'" />

    <div class="level mt-6">
      <div class="level-left">
        <div class="level-item">
          <router-link to="/tutorials/intermediate/git-basics/introduction" class="button is-info">
            <i class="fas fa-arrow-left mr-2"></i> Previous: Introduction
          </router-link>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <router-link to="/tutorials/intermediate/git-basics/basic-commands" class="button is-success">
            Next: Basic Commands <i class="fas fa-arrow-right ml-2"></i>
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
  trackTutorial('/tutorials/intermediate/git-basics/installation');
});

const onQuizCompleted = (results) => {
  saveQuizResult('git-basics-installation-quiz', results);
};
</script>

<script>
// Frontmatter for the tutorial
export default {
  frontmatter: {
    title: 'Installation & Setup',
    description: 'Learn how to install and configure Git on your system',
    category: 'Git Basics',
    level: 'Beginner',
    order: 2,
    tags: ['git', 'installation', 'setup', 'beginner'],
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

.code-example pre {
  background-color: #f6f8fa;
  border-radius: 6px;
  padding: 16px;
  overflow-x: auto;
}

.code-example code {
  color: #24292e;
  font-family: monospace;
}
</style>