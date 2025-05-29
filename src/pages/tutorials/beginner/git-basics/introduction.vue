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
          <a href="#" aria-current="page">Introduction</a>
        </li>
      </ul>
    </nav>

    <div class="tags">
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">15 minutes</span>
      <span class="tag is-success">Git</span>
      <span class="tag is-success">Level 1</span>
    </div>

    <h1 class="title is-1">
      <i class="fab fa-git-alt mr-2"></i>
      Introduction to Git
    </h1>

    <!-- Enhanced Learning Objectives -->
    <div class="box highlight-box mb-6">
      <h3 class="title is-4">
        <i class="fas fa-graduation-cap"></i> Learning Objectives
      </h3>
      <p>After completing this introduction, you'll be able to:</p>
      <ul>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Understand what version control is and why it's important</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Explain what Git is and how it differs from other version control systems</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Identify the three main states of Git (modified, staged, committed)</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Understand basic Git terminology and concepts</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Recognize the value Git adds to your development workflow</li>
      </ul>
    </div>

    <!-- Prerequisites Check -->
    <div class="box prerequisite-box mb-6">
      <h3 class="title is-4">
        <i class="fas fa-clipboard-check"></i> Before You Start
      </h3>
      <p>To get the most out of this tutorial, you should be familiar with:</p>
      <ul>
        <li>
          <i class="fas fa-terminal has-text-dark mr-2"></i>
          Basic command line usage - <router-link to="/tutorials/command-line-basics">Review Command Line Basics</router-link>
        </li>
        <li>
          <i class="fas fa-folder has-text-warning mr-2"></i>
          Basic file system operations (creating, moving, and deleting files)
        </li>
      </ul>
    </div>

    <div class="notification is-info is-light">
      <p>
        <i class="fas fa-clock mr-2"></i>
        <strong>Estimated time:</strong> 15 minutes
      </p>
    </div>

    <h2 class="title is-2">What is Version Control?</h2>
    <p>
      Before diving into Git, let's understand what version control is and why it's important.
    </p>
    <p>
      <strong>Version control</strong> is a system that records changes to files over time so that you can recall specific versions later. It allows you to:
    </p>
    <ul>
      <li>Track changes to your code</li>
      <li>See who made each change</li>
      <li>Revert to previous versions if something goes wrong</li>
      <li>Collaborate with others without overwriting each other's work</li>
    </ul>

    <!-- Interactive Demo -->
    <div class="box interactive-demo mb-6">
      <h3 class="title is-4">
        <i class="fas fa-hand-pointer"></i> Try It Yourself
      </h3>
      <p>This interactive timeline shows how Git tracks changes over time:</p>
      
      <div class="content mb-4">
        <ul>
          <li><strong>Commits:</strong> Each point represents a snapshot of your code</li>
          <li><strong>Branching:</strong> Different paths your project can take</li>
          <li><strong>Timeline:</strong> How your project evolves over time</li>
        </ul>
      </div>

      <div class="has-text-centered">
        <div class="interactive-timeline">
          <svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg" class="git-timeline">
            <!-- Main timeline -->
            <line x1="50" y1="75" x2="550" y2="75" stroke="#f05033" stroke-width="4" />
            
            <!-- Commit points -->
            <circle cx="100" cy="75" r="10" :fill="currentCommit === 1 ? '#2ecc71' : '#f05033'" @click="selectCommit(1)" class="clickable-commit" />
            <circle cx="200" cy="75" r="10" :fill="currentCommit === 2 ? '#2ecc71' : '#f05033'" @click="selectCommit(2)" class="clickable-commit" />
            <circle cx="300" cy="75" r="10" :fill="currentCommit === 3 ? '#2ecc71' : '#f05033'" @click="selectCommit(3)" class="clickable-commit" />
            <circle cx="400" cy="75" r="10" :fill="currentCommit === 4 ? '#2ecc71' : '#f05033'" @click="selectCommit(4)" class="clickable-commit" />
            <circle cx="500" cy="75" r="10" :fill="currentCommit === 5 ? '#2ecc71' : '#f05033'" @click="selectCommit(5)" class="clickable-commit" />
            
            <!-- Branch -->
            <line x1="300" y1="75" x2="350" y2="25" stroke="#3498db" stroke-width="3" :stroke-opacity="branchVisible ? 1 : 0" />
            <circle cx="350" cy="25" r="10" fill="#3498db" :fill-opacity="branchVisible ? 1 : 0" @click="selectCommit(6)" class="clickable-commit" />
            <text x="370" y="30" :opacity="branchVisible ? 1 : 0">Experimental Branch</text>
            
            <!-- Labels -->
            <text x="100" y="100" text-anchor="middle">Initial Commit</text>
            <text x="200" y="100" text-anchor="middle">Add Feature</text>
            <text x="300" y="100" text-anchor="middle">Fix Bug</text>
            <text x="400" y="100" text-anchor="middle">Refactor Code</text>
            <text x="500" y="100" text-anchor="middle">Release v1.0</text>
          </svg>
        </div>

        <div class="buttons is-centered mt-4 mb-4">
          <button class="button is-primary" @click="showCommitInfo">
            <i class="fas fa-info-circle mr-2"></i>Show Commit Details
          </button>
          <button class="button is-info" @click="toggleBranch">
            <i class="fas fa-code-branch mr-2"></i>{{ branchVisible ? 'Hide' : 'Show' }} Branch
          </button>
          <button class="button is-success" @click="nextCommit">
            <i class="fas fa-forward mr-2"></i>Next Commit
          </button>
        </div>

        <div v-if="commitMessage" :class="['notification', commitColor]">
          <p class="has-text-weight-bold">{{ commitMessage }}</p>
          <p v-if="commitDetails" class="mt-2">{{ commitDetails }}</p>
        </div>
      </div>

      <div class="mt-4">
        <p class="is-size-7">
          <i class="fas fa-info-circle mr-1"></i>
          <strong>Pro Tip:</strong> Click on any commit in the timeline to see its details!
        </p>
      </div>
    </div>

    <div class="box">
      <h3 class="title is-4">Life Without Version Control</h3>
      <p>Imagine you're working on a project without version control:</p>

      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="has-text-centered">
                <i class="fas fa-folder fa-3x mb-2"></i>
              </p>
              <h4 class="title is-5">Project_v1.py</h4>
              <p>Your first version</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="has-text-centered">
                <i class="fas fa-folder fa-3x mb-2"></i>
              </p>
              <h4 class="title is-5">Project_v2.py</h4>
              <p>After some changes</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="has-text-centered">
                <i class="fas fa-folder fa-3x mb-2"></i>
              </p>
              <h4 class="title is-5">Project_final.py</h4>
              <p>The "final" version</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="has-text-centered">
                <i class="fas fa-folder fa-3x mb-2"></i>
              </p>
              <h4 class="title is-5">Project_FINAL_v2.py</h4>
              <p>Wait, one more change</p>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-4">This approach quickly becomes messy and confusing as your project grows.</p>
    </div>

    <h2 class="title is-2">What is Git?</h2>
    <p>
      <strong>Git</strong> is a distributed version control system created by Linus Torvalds (the creator of Linux) in 2005. It's designed to handle everything from small to very large projects with speed and efficiency.
    </p>

    <div class="columns">
      <div class="column is-two-thirds">
        <h3 class="title is-3">Key Features of Git</h3>
        <ul>
          <li>
            <strong>Distributed:</strong> Every developer has a full copy of the repository, including its history
          </li>
          <li>
            <strong>Speed:</strong> Most operations are performed locally, making Git very fast
          </li>
          <li>
            <strong>Data integrity:</strong> Git uses checksums to ensure your data is never corrupted
          </li>
          <li>
            <strong>Non-linear development:</strong> Support for branching and merging
          </li>
          <li>
            <strong>Staging area:</strong> A middle ground between your working directory and repository
          </li>
        </ul>
      </div>
      <div class="column">
        <div class="box">
          <h4 class="title is-4">Git is not GitHub!</h4>
          <p>
            <strong>Git</strong> is the version control system itself.
          </p>
          <p>
            <strong>GitHub</strong> is a web-based platform that uses Git and adds collaboration features.
          </p>
          <p>
            Other similar platforms include GitLab, Bitbucket, and Azure DevOps.
          </p>
        </div>
      </div>
    </div>

    <h2 class="title is-2">How Git Works</h2>
    <p>
      Git tracks changes to your files by taking "snapshots" over time. Think of each snapshot (called a "commit") as a save point in your project.
    </p>

    <div class="git-workflow-illustration">
      <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Working Directory -->
        <rect x="50" y="50" width="120" height="100" rx="10" fill="#e1e4e8" stroke="#24292e" stroke-width="2"/>
        <text x="110" y="90" text-anchor="middle" fill="#24292e" font-weight="bold">Working Directory</text>
        <text x="110" y="110" text-anchor="middle" fill="#24292e" font-size="12">(Your files)</text>

        <!-- Staging Area -->
        <rect x="240" y="50" width="120" height="100" rx="10" fill="#d1d5da" stroke="#24292e" stroke-width="2"/>
        <text x="300" y="90" text-anchor="middle" fill="#24292e" font-weight="bold">Staging Area</text>
        <text x="300" y="110" text-anchor="middle" fill="#24292e" font-size="12">(Prepared changes)</text>

        <!-- Repository -->
        <rect x="430" y="50" width="120" height="100" rx="10" fill="#c8e1ff" stroke="#24292e" stroke-width="2"/>
        <text x="490" y="90" text-anchor="middle" fill="#24292e" font-weight="bold">Repository</text>
        <text x="490" y="110" text-anchor="middle" fill="#24292e" font-size="12">(Committed history)</text>

        <!-- Arrows -->
        <path d="M170,100 L240,100" stroke="#24292e" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
        <text x="205" y="85" text-anchor="middle" fill="#24292e" font-size="12">git add</text>

        <path d="M360,100 L430,100" stroke="#24292e" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
        <text x="395" y="85" text-anchor="middle" fill="#24292e" font-size="12">git commit</text>

        <!-- Arrowhead marker -->
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#24292e"/>
          </marker>
        </defs>
      </svg>
    </div>

    <h3 class="title is-3">The Three States</h3>
    <p>
      In Git, your files exist in one of three states:
    </p>

    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <h4 class="title is-4">
              <i class="fas fa-edit mr-2"></i>
              Modified (Working Directory)
            </h4>
            <p>
              You've changed the file but haven't committed it to your database yet.
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <h4 class="title is-4">
              <i class="fas fa-plus-square mr-2"></i>
              Staged (Staging Area)
            </h4>
            <p>
              You've marked a modified file to go into your next commit snapshot.
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <h4 class="title is-4">
              <i class="fas fa-save mr-2"></i>
              Committed (Git Directory)
            </h4>
            <p>
              The data is safely stored in your local database.
            </p>
          </div>
        </div>
      </div>
    </div>

    <h2 class="title is-2">Why Learn Git?</h2>
    <div class="columns">
      <div class="column">
        <div class="box">
          <h3 class="title is-4">For Professionals</h3>
          <ul>
            <li>Industry standard for version control</li>
            <li>Essential skill for software development jobs</li>
            <li>Enables collaboration in teams</li>
            <li>Tracks project history and changes</li>
          </ul>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <h3 class="title is-4">For Students</h3>
          <ul>
            <li>Track changes to your assignments</li>
            <li>Collaborate on group projects</li>
            <li>Experiment without fear of breaking things</li>
            <li>Build a portfolio of your work</li>
          </ul>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <h3 class="title is-4">For Everyone</h3>
          <ul>
            <li>Never lose your work</li>
            <li>Time-travel through project history</li>
            <li>Work on multiple features simultaneously</li>
            <li>Understand how software is built</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="notification is-warning is-light">
      <p>
        <i class="fas fa-exclamation-triangle mr-2"></i>
        <strong>Learning Curve Alert:</strong> Git has a reputation for being difficult to learn. Don't worry! We'll break it down into manageable pieces, and with practice, it will become second nature.
      </p>
    </div>

    <h2 class="title is-2">Core Concepts</h2>
    <p>
      Before we dive into installation and commands, let's familiarize ourselves with some core Git terminology:
    </p>

    <div class="table-container">
      <table class="table is-bordered is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Term</th>
            <th>Definition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Repository (Repo)</strong></td>
            <td>A collection of files and their complete history</td>
          </tr>
          <tr>
            <td><strong>Commit</strong></td>
            <td>A snapshot of your project at a specific point in time</td>
          </tr>
          <tr>
            <td><strong>Branch</strong></td>
            <td>A parallel version of your repository where you can make changes without affecting the main version</td>
          </tr>
          <tr>
            <td><strong>Merge</strong></td>
            <td>The process of combining different branches</td>
          </tr>
          <tr>
            <td><strong>Clone</strong></td>
            <td>Creating a copy of a repository</td>
          </tr>
          <tr>
            <td><strong>Pull</strong></td>
            <td>Fetching and integrating changes from a remote repository</td>
          </tr>
          <tr>
            <td><strong>Push</strong></td>
            <td>Sending your committed changes to a remote repository</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="title is-2">Hands-On Example: Your First Git Workflow</h2>
    <p>
      Let's walk through a simple example of how Git might be used in a typical workflow:
    </p>

    <div class="box code-example">
      <h3 class="title is-4">Scenario: Adding a Feature to a Website</h3>
      <p>Imagine you're working on a website and want to add a contact form.</p>

      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4 class="title is-5">Create a branch for your feature</h4>
            <CodeMirror
              :code="branchExample"
              language="bash"
              :read-only="true"
            />
            <p><em>This creates a safe space to work on your form without affecting the main website.</em></p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4 class="title is-5">Make changes to your files</h4>
            <p><em>You create contact.html and add your form code.</em></p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4 class="title is-5">Stage your changes</h4>
            <CodeMirror
              :code="stageExample"
              language="bash"
              :read-only="true"
            />
            <p><em>This tells Git you want to include this file in your next commit.</em></p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4 class="title is-5">Commit your changes</h4>
            <CodeMirror
              :code="commitExample"
              language="bash"
              :read-only="true"
            />
            <p><em>This creates a snapshot of your changes with a descriptive message.</em></p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">5</div>
          <div class="step-content">
            <h4 class="title is-5">Merge your changes into the main branch</h4>
            <CodeMirror
              :code="mergeExample"
              language="bash"
              :read-only="true"
            />
            <p><em>This integrates your contact form into the main website.</em></p>
          </div>
        </div>
      </div>
    </div>

    <h2 class="title is-2">Summary</h2>
    <ul>
      <li>Git is a distributed version control system</li>
      <li>It tracks changes to your files through commits (snapshots)</li>
      <li>Git has three main states: modified, staged, and committed</li>
      <li>Learning Git is essential for professional software development</li>
      <li>Key concepts include repositories, commits, branches, and merges</li>
    </ul>

    <div class="notification is-info is-light">
      <p>
        <i class="fas fa-lightbulb mr-2"></i>
        <strong>Pro Tip:</strong> Don't worry about memorizing commands right now. Focus on understanding the concepts. The commands will become familiar with practice.
      </p>
    </div>

    <div class="box challenge-box">
      <h3 class="title is-4">
        <i class="fas fa-puzzle-piece mr-2"></i> Challenge
      </h3>
      <p>
        Think about a project you're currently working on (it could be homework, a personal website, or even a document you're writing).
      </p>
      <p>
        <strong>Question:</strong> How could version control benefit this project? What specific problems might Git solve for you?
      </p>
      <textarea class="textarea" placeholder="Write your answer here..."></textarea>
      <button class="button is-primary mt-3" @click="submitChallenge">
        <i class="fas fa-paper-plane mr-2"></i> Submit
      </button>
    </div>

    <!-- Tutorial Quiz -->
    <div class="quiz-box mt-6">
      <h2 class="title is-4"><i class="fas fa-question-circle"></i> Quick Quiz: Introduction to Git</h2>
      <TutorialQuiz :quiz-id="'git-basics-introduction'" />
    </div>

    <!-- Tutorial Recommendations -->
    <TutorialRecommendations :current-path="'/tutorials/git-basics/introduction'" />

    <div class="level mt-6">
      <div class="level-left">
        <div class="level-item">
          <router-link to="/tutorials/git-basics" class="button is-info">
            <i class="fas fa-arrow-left mr-2"></i> Tutorial Home
          </router-link>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <router-link to="/tutorials/git-basics/installation" class="button is-success">
            Next: Installation & Setup <i class="fas fa-arrow-right ml-2"></i>
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
import { usePageSections } from '@/composables/usePageSections'; // Import usePageSections from @

const frontmatter = {
  title: 'Introduction to Git',
  description: 'Learn the basics of Git version control system',
  category: 'Git Basics',
  level: 'Beginner',
  order: 1,
  tags: ['git', 'version control', 'tutorial', 'beginner'],
  lastUpdated: '2025-05-12',
};


//page sections
const sections = [
  { id: 'introduction',title: 'Introduction' },
  { id: 'version-control',title: 'What is Version Control?' },
  { id: 'git-intro',title: 'What is Git?' },
  { id: 'git-workflow',title: 'How Git Works' },
  { id: 'git-commands',title: 'Hands-On Example' },
  { id: 'summary',title: 'Summary' },
  { id: 'challenge',title: 'Challenge' }
];

const { pageSections,} = usePageSections(sections); 



// Initialize progress tracking
const { trackTutorial, saveQuizResult } = useProgress();

onMounted(() => {
  trackTutorial('/tutorials/git-basics/introduction');
});

// Interactive Git timeline demo
const currentCommit = ref(1);
const commitMessage = ref('');
const commitDetails = ref('');
const commitColor = ref('is-primary');
const branchVisible = ref(false);

const commitInfo = [
  {
    id: 1,
    message: 'Initial Commit - Project Created',
    details: 'Created project structure with README.md and basic file organization.',
    color: 'is-primary'
  },
  {
    id: 2,
    message: 'Add Feature - User Authentication',
    details: 'Added login and registration functionality with form validation.',
    color: 'is-success'
  },
  {
    id: 3,
    message: 'Fix Bug - Login Error',
    details: 'Fixed issue where login would fail on certain browsers.',
    color: 'is-warning'
  },
  {
    id: 4,
    message: 'Refactor Code - Improve Performance',
    details: 'Restructured code to improve loading times and reduce redundancy.',
    color: 'is-info'
  },
  {
    id: 5,
    message: 'Release v1.0 - Production Ready',
    details: 'Finalized features, fixed bugs, and prepared for first public release.',
    color: 'is-success'
  },
  {
    id: 6,
    message: 'Experimental Feature - Dark Mode',
    details: 'Created an experimental branch to test new dark mode UI.',
    color: 'is-info'
  }
];

const selectCommit = (id) => {
  currentCommit.value = id;
  const commit = commitInfo.find(c => c.id === id);
  if (commit) {
    commitMessage.value = commit.message;
    commitDetails.value = commit.details;
    commitColor.value = commit.color;
  }
};

const showCommitInfo = () => {
  const commit = commitInfo.find(c => c.id === currentCommit.value);
  if (commit) {
    commitMessage.value = commit.message;
    commitDetails.value = commit.details;
    commitColor.value = commit.color;
  }
};

const toggleBranch = () => {
  branchVisible.value = !branchVisible.value;
  if (branchVisible.value && !commitMessage.value) {
    commitMessage.value = 'New experimental branch created';
    commitDetails.value = 'Branches allow you to develop features in isolation from the main code.';
    commitColor.value = 'is-info';
  }
};

const nextCommit = () => {
  if (currentCommit.value < 5) {
    currentCommit.value++;
    showCommitInfo();
  } else {
    currentCommit.value = 1;
    showCommitInfo();
  }
};

// Code examples with syntax highlighting
const branchExample = `git branch contact-form
git checkout contact-form

# Or, in one command:
git checkout -b contact-form`;

const stageExample = `git add contact.html

# To check what's staged:
git status`;

const commitExample = `git commit -m "Add contact form"

# To see commit history:
git log`;

const mergeExample = `git checkout main
git merge contact-form

# If you're done with the branch:
git branch -d contact-form`;

// Challenge submission
const submitChallenge = () => {
  alert('Thanks for your submission! Keep thinking about how Git can help your workflow!');
};

// Quiz handling
const onQuizCompleted = (results) => {
  saveQuizResult('git-basics-intro-quiz', results);
};
</script>

<script>
// Frontmatter for the tutorial
export default {
  frontmatter: {
    title: 'Introduction to Git',
    description: 'Learn the basics of Git version control system',
    category: 'Git Basics',
    level: 'Beginner',
    order: 1,
    tags: ['git', 'version control', 'tutorial', 'beginner'],
    lastUpdated: '2025-05-12',
  },
};
</script>

<style scoped>
.git-logo-container {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  vertical-align: middle;
}

.git-logo {
  width: 100%;
  height: 100%;
}

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

.interactive-timeline {
  margin: 2rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.git-timeline .clickable-commit {
  cursor: pointer;
  transition: r 0.2s ease-in-out;
}

.git-timeline .clickable-commit:hover {
  r: 12;
}

.steps {
  margin-top: 2rem;
}

.step {
  display: flex;
  margin-bottom: 1.5rem;
  align-items: flex-start;
}

.step-number {
  background-color: #f05033;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 1rem;
  flex-shrink: 0;
}

.step-content {
  flex-grow: 1;
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

.git-workflow-illustration {
  margin: 2rem 0;
  max-width: 100%;
}

.challenge-box {
  background-color: #f0f8ff;
  border-left: 5px solid #3273dc;
}

.challenge-box .textarea {
  margin-top: 1rem;
}

table td {
  vertical-align: middle !important;
}

.quiz-box {
  background-color: #fff3e0;
  border-left: 4px solid #ff9800;
}
</style>