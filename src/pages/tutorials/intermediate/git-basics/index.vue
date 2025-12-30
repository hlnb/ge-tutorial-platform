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
                <li class="is-active">
                    <a href="#" aria-current="page">Git Basics</a>
                </li>
            </ul>
        </nav>

        <div class="tags">
            <span class="tag is-info">Beginner</span>
            <span class="tag is-warning">15 minutes</span>
            <span class="tag is-success">Git</span>
        </div>

        <h1 class="title is-1">
            <i class="fab fa-git-alt mr-2"></i>
            Git Basics
        </h1>

        <div class="box mb-6">
            <h3 class="title is-4">
                <i class="fas fa-graduation-cap"></i> Learning Path
            </h3>
            <p>
                Welcome to Git Basics! This series of tutorials will teach you
                the fundamentals of version control with Git, even if you've never used
                version control before.
            </p>
            <p>
                By the end of this series, you'll be able to track changes to your code,
                collaborate with others, and understand the core concepts of Git.
            </p>
        </div>

        <div class="notification is-info is-light">
            <p>
                <i class="fas fa-lightbulb mr-2"></i>
                <strong>Prerequisites:</strong> Basic computer skills and familiarity with
                using the command line will be helpful, but not required.
            </p>
        </div>

        <h2 class="title is-2">What is Git?</h2>
        <p>
            Git is a distributed version control system that helps you track changes in your
            code, collaborate with others, and maintain a history of your project.
        </p>
        <p>
            Git helps developers by:
        </p>
        <ul>
            <li>Tracking changes to files over time</li>
            <li>Creating snapshots (called commits) of your project</li>
            <li>Providing a way to revert to previous versions</li>
            <li>Enabling multiple people to work on the same project simultaneously</li>
            <li>Facilitating code sharing and collaboration</li>
        </ul>

        <div class="box">
            <h3 class="title is-4">Real-World Analogy</h3>
            <p>Think of Git like a time machine for your code:</p>

            <div class="git-analogy-illustration">
                <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
                    <!-- Time machine illustration -->
                    <g class="timeline">
                        <!-- Timeline -->
                        <line x1="100" y1="150" x2="500" y2="150" stroke="#f05033" stroke-width="4"/>
                        
                        <!-- Commit points -->
                        <circle cx="150" cy="150" r="15" fill="#f05033"/>
                        <circle cx="250" cy="150" r="15" fill="#f05033"/>
                        <circle cx="350" cy="150" r="15" fill="#f05033"/>
                        <circle cx="450" cy="150" r="15" fill="#f05033"/>
                        
                        <!-- Labels -->
                        <text x="150" y="190" text-anchor="middle" fill="#333" font-size="12">Initial Code</text>
                        <text x="250" y="190" text-anchor="middle" fill="#333" font-size="12">Bug Fix</text>
                        <text x="350" y="190" text-anchor="middle" fill="#333" font-size="12">New Feature</text>
                        <text x="450" y="190" text-anchor="middle" fill="#333" font-size="12">Latest Version</text>
                        
                        <!-- Branches -->
                        <line x1="250" y1="150" x2="250" y2="100" stroke="#4078c0" stroke-width="3"/>
                        <circle cx="250" cy="100" r="15" fill="#4078c0"/>
                        <text x="250" y="80" text-anchor="middle" fill="#333" font-size="12">Experiment</text>
                        
                        <!-- Current position pointer -->
                        <polygon points="450,120 460,130 450,140" fill="#333"/>
                        <text x="470" y="130" fill="#333" font-size="14" font-weight="bold">You are here</text>
                    </g>
                </svg>
            </div>

            <ul>
                <li>
                    <strong>Commits</strong> are like save points in a video game
                </li>
                <li>
                    <strong>Branches</strong> are like alternate timelines where you can experiment
                </li>
                <li>
                    <strong>Merging</strong> is like combining the best parts of different timelines
                </li>
                <li>
                    <strong>Remote repositories</strong> are like shared libraries where everyone can
                    access the code and its history
                </li>
            </ul>
            <p>
                Without Git, developers would have to manually track changes and coordinate
                their work, leading to confusion, lost work, and conflicts.
            </p>
        </div>

        <div class="tutorial-structure">
            <!-- Quick Start Section -->
            <div class="box quick-start">
                <h2 class="title is-3">
                    <i class="fas fa-rocket"></i> Quick Start
                </h2>
                <div class="columns">
                    <div class="column">
                        <div class="card">
                            <div class="card-content">
                                <h4 class="title is-5">How to Use This Tutorial</h4>
                                <ul>
                                    <li>Each section builds on previous knowledge</li>
                                    <li>Practice with hands-on examples</li>
                                    <li>Complete challenges to reinforce learning</li>
                                    <li>Try commands yourself in your own repository</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="card-content">
                                <h4 class="title is-5">What You'll Need</h4>
                                <ul>
                                    <li>Git installed on your computer</li>
                                    <li>A text editor (VS Code, Sublime Text, etc.)</li>
                                    <li>About 20 minutes per section</li>
                                    <li>Willingness to experiment and learn</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Learning Path -->
            <div class="learning-path">
                <h2 class="title is-2">
                    <i class="fas fa-map-signs"></i> Learning Path
                </h2>
                
                <!-- Level 1: Foundations -->
                <div class="level-section">
                    <h3 class="title is-3">Level 1: Foundations</h3>
                    <div class="path-item">
                        <router-link to="git-basics/introduction" class="box" :class="{ 'is-completed': isSectionCompleted('introduction') }">
                            <h4 class="title is-4">
                                <i class="fas fa-flag-checkered"></i> Getting Started
                                <span v-if="isSectionCompleted('introduction')" class="icon has-text-success">
                                    <i class="fas fa-check-circle"></i>
                                </span>
                            </h4>
                            <p>Learn what Git is and why it's essential for modern development.</p>
                            <div class="tags">
                                <span class="tag is-success">Beginner Friendly</span>
                                <span class="tag is-info">15 minutes</span>
                            </div>
                        </router-link>
                    </div>
                </div>

                <!-- Level 2: Basic Concepts -->
                <div class="level-section">
                    <h3 class="title is-3">Level 2: Basic Concepts</h3>
                    <div class="path-item">
                        <router-link to="git-basics/installation" class="box" :class="{ 'is-completed': isSectionCompleted('installation') }">
                            <h4 class="title is-4">
                                <i class="fas fa-download"></i> Installation & Setup
                                <span v-if="isSectionCompleted('installation')" class="icon has-text-success">
                                    <i class="fas fa-check-circle"></i>
                                </span>
                            </h4>
                            <p>Install Git and configure your identity.</p>
                            <div class="tags">
                                <span class="tag is-warning">Core Concept</span>
                                <span class="tag is-info">20 minutes</span>
                            </div>
                        </router-link>
                    </div>
                </div>

                <!-- Level 3: Basic Commands -->
                <div class="level-section">
                    <h3 class="title is-3">Level 3: Basic Commands</h3>
                    <div class="columns">
                        <div class="column">
                            <router-link to="git-basics/basic-commands" class="box" :class="{ 'is-completed': isSectionCompleted('basic-commands') }">
                                <h4 class="title is-4">
                                    <i class="fas fa-terminal"></i> Basic Commands
                                    <span v-if="isSectionCompleted('basic-commands')" class="icon has-text-success">
                                        <i class="fas fa-check-circle"></i>
                                    </span>
                                </h4>
                                <p>Learn essential Git commands for tracking changes.</p>
                                <div class="tags">
                                    <span class="tag is-warning">Core Concept</span>
                                    <span class="tag is-info">30 minutes</span>
                                </div>
                            </router-link>
                        </div>
                        <div class="column">
                            <router-link to="git-basics/branching" class="box" :class="{ 'is-completed': isSectionCompleted('branching') }">
                                <h4 class="title is-4">
                                    <i class="fas fa-code-branch"></i> Branching
                                    <span v-if="isSectionCompleted('branching')" class="icon has-text-success">
                                        <i class="fas fa-check-circle"></i>
                                    </span>
                                </h4>
                                <p>Create and manage branches for feature development.</p>
                                <div class="tags">
                                    <span class="tag is-warning">Core Concept</span>
                                    <span class="tag is-info">45 minutes</span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>

                <!-- Level 4: Collaboration -->
                <div class="level-section">
                    <h3 class="title is-3">Level 4: Collaboration</h3>
                    <div class="columns">
                        <div class="column">
                            <router-link to="git-basics/merging" class="box" :class="{ 'is-completed': isSectionCompleted('merging') }">
                                <h4 class="title is-4">
                                    <i class="fas fa-object-group"></i> Merging
                                    <span v-if="isSectionCompleted('merging')" class="icon has-text-success">
                                        <i class="fas fa-check-circle"></i>
                                    </span>
                                </h4>
                                <p>Combine changes from different branches.</p>
                                <div class="tags">
                                    <span class="tag is-warning">Core Concept</span>
                                    <span class="tag is-info">30 minutes</span>
                                </div>
                            </router-link>
                        </div>
                        <div class="column">
                            <router-link to="git-basics/remote-repositories" class="box" :class="{ 'is-completed': isSectionCompleted('remote-repositories') }">
                                <h4 class="title is-4">
                                    <i class="fas fa-cloud"></i> Remote Repositories
                                    <span v-if="isSectionCompleted('remote-repositories')" class="icon has-text-success">
                                        <i class="fas fa-check-circle"></i>
                                    </span>
                                </h4>
                                <p>Work with GitHub, GitLab, or other remote repositories.</p>
                                <div class="tags">
                                    <span class="tag is-warning">Core Concept</span>
                                    <span class="tag is-info">45 minutes</span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>

                <!-- Level 5: Best Practices -->
                <div class="level-section">
                    <h3 class="title is-3">Level 5: Best Practices</h3>
                    <div class="path-item">
                        <router-link to="git-basics/workflow" class="box" :class="{ 'is-completed': isSectionCompleted('workflow') }">
                            <h4 class="title is-4">
                                <i class="fas fa-sitemap"></i> Git Workflow
                                <span v-if="isSectionCompleted('workflow')" class="icon has-text-success">
                                    <i class="fas fa-check-circle"></i>
                                </span>
                            </h4>
                            <p>Learn common Git workflows and best practices.</p>
                            <div class="tags">
                                <span class="tag is-warning">Core Concept</span>
                                <span class="tag is-info">30 minutes</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- Progress Tracking -->
            <div class="progress-section box">
                <h2 class="title is-3">
                    <i class="fas fa-chart-line"></i> Your Progress
                </h2>
                <progress class="progress is-success" :value="completedSections" :max="totalSections">
                    {{ progressPercentage }}%
                </progress>
                <p class="has-text-centered">
                    {{ completedSections }} of {{ totalSections }} sections completed ({{ progressPercentage }}%)
                </p>
                <div v-if="completedSections < totalSections" class="mt-4">
                    <p class="has-text-centered">
                        <strong>Next up:</strong> 
                        <span v-if="nextSection" class="tag is-primary is-medium">
                            {{ nextSection.name }}
                        </span>
                    </p>
                </div>
                <div v-else class="mt-4">
                    <p class="has-text-centered has-text-success">
                        <i class="fas fa-trophy"></i>
                        <strong>Congratulations!</strong> You've completed all sections!
                    </p>
                </div>
            </div>
        </div>

        <div class="box mt-6">
            <h3 class="title is-4"><i class="fas fa-tools"></i> Tools You'll Need</h3>
            <ul>
                <li>
                    <strong>Git</strong> - Available for Windows, macOS, and Linux
                </li>
                <li>
                    <strong>Terminal or Command Prompt</strong> - To run Git commands
                </li>
                <li>
                    <strong>GitHub Account</strong> - Optional, but recommended for remote repositories
                </li>
                <li>
                    <strong>Patience</strong> - Version control has a learning curve, but it's worth it!
                </li>
            </ul>
        </div>

        <div class="notification is-success is-light mt-6">
            <p>
                <i class="fas fa-check-circle mr-2"></i>
                <strong>Ready to start?</strong> Begin with the
                <router-link to="/tutorials/intermediate/git-basics/introduction">
                    Introduction to Git
                </router-link>
                tutorial to take your first steps into version control!
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';


// Tutorial sections in order
const tutorialSections = [
    { id: 'introduction', name: 'Introduction', path: '/tutorials/beginner/git-basics/introduction' },
    { id: 'installation', name: 'Installation & Setup', path: '/tutorials/beginner/git-basics/installation' },
    { id: 'basic-commands', name: 'Basic Commands', path: '/tutorials/beginner/git-basics/basic-commands' },
    { id: 'branching', name: 'Branching', path: '/tutorials/beginner/git-basics/branching' },
    { id: 'merging', name: 'Merging', path: '/tutorials/beginner/git-basics/merging' },
    { id: 'remote-repositories', name: 'Remote Repositories', path: '/tutorials/beginner/git-basics/remote-repositories' },
    { id: 'workflow', name: 'Git Workflow', path: '/tutorials/beginner/git-basics/workflow' }
];

const totalSections = tutorialSections.length;
const completedSections = ref(0);

// Check all possible localStorage keys to help debug
const debugLocalStorage = () => {
    console.log('All localStorage keys:');
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        console.log(`${key}:`, localStorage.getItem(key));
    }
};

// Load progress from localStorage
const loadProgress = () => {
    try {
        debugLocalStorage();
        
        // Get cookie consent and settings
        const consent = localStorage.getItem('cookieConsent');
        const settingsStr = localStorage.getItem('cookieSettings');
        
        console.log('Cookie Consent:', consent);
        console.log('Cookie Settings:', settingsStr);
        
        // Check if progress tracking should be enabled
        const isTrackingEnabled = () => {
            try {
                if (consent !== 'true') return false;
                
                const settings = JSON.parse(settingsStr);
                const isEnabled = settings && settings.progress === true;
                console.log('Progress tracking enabled:', isEnabled);
                return isEnabled;
            } catch (error) {
                console.error('Error parsing cookie settings:', error);
                return false;
            }
        };

        if (!isTrackingEnabled()) {
            console.warn('Progress tracking is disabled.');
            return { completed: [], lastVisited: null };
        }

        const savedProgress = localStorage.getItem('git-basics-progress');
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            completedSections.value = progress.completed.length;
            console.log('Loaded progress:', progress);
            return progress;
        }
    } catch (error) {
        console.error('Error loading progress:', error);
        console.error('Error details:', {
            message: error.message,
            stack: error.stack
        });
    }
    return { completed: [], lastVisited: null };
};

// Save progress to localStorage
const saveProgress = (progress) => {
    try {
        const consent = localStorage.getItem('cookieConsent');
        const settingsStr = localStorage.getItem('cookieSettings');
        
        // Check if progress tracking should be enabled
        const isTrackingEnabled = () => {
            try {
                if (consent !== 'true') return false;
                
                const settings = JSON.parse(settingsStr);
                return settings && settings.progress === true;
            } catch {
                return false;
            }
        };

        if (!isTrackingEnabled()) {
            console.warn('Cannot save progress: tracking is disabled');
            return;
        }

        localStorage.setItem('git-basics-progress', JSON.stringify(progress));
        console.log('Saved progress:', progress);
    } catch (error) {
        console.error('Error saving progress:', error);
    }
};

// Check if a section is completed
const isSectionCompleted = (sectionId) => {
    const progress = loadProgress();
    return progress.completed.includes(sectionId);
};

// Mark a section as completed
const markSectionCompleted = (sectionId) => {
    const progress = loadProgress();
    if (!progress.completed.includes(sectionId)) {
        progress.completed.push(sectionId);
        completedSections.value = progress.completed.length;
        saveProgress(progress);
    }
};

// Computed properties
const progressPercentage = computed(() => {
    return Math.round((completedSections.value / totalSections) * 100);
});

const currentProgress = computed(() => {
    return {
        completed: completedSections.value,
        total: totalSections,
        percentage: progressPercentage.value
    };
});

const nextSection = computed(() => {
    const progress = loadProgress();
    const nextUncompletedSection = tutorialSections.find(section => 
        !progress.completed.includes(section.id)
    );
    return nextUncompletedSection;
});

// Initialize progress on component mount
onMounted(() => {
    const progress = loadProgress();
    completedSections.value = progress.completed.length;
    
    // Update last visited section
    const currentSection = route.path.split('/').pop();
    if (currentSection) {
        progress.lastVisited = currentSection;
        saveProgress(progress);
    }
});
</script>

<script>
// Frontmatter for the tutorial
export default {
    name: 'GitBasics',
    frontmatter: {
        title: 'Git Basics',
        description: 'Learn the fundamentals of version control with Git',
        category: 'Development Tools',
        level: 'Beginner',
        order: 1,
        tags: ['git', 'version control', 'collaboration'],
        lastUpdated: '2025-05-12',
    }
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

.tutorials-list .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tutorials-list .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.media-left .icon {
    color: #3273dc;
}

/* SVG Illustration Styles */
.git-analogy-illustration {
    margin: 2rem 0;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.level-section {
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 8px;
    background-color: #f5f5f5;
}

.path-item {
    margin-bottom: 1rem;
}

.path-item .box {
    transition: transform 0.2s;
}

.path-item .box:hover {
    transform: translateY(-5px);
}

.progress-section {
    margin-top: 3rem;
}

.is-completed {
    border-left: 4px solid #48c774;
    background-color: #f0fdf4;
}

.is-completed:hover {
    background-color: #e1fae5;
}

.progress-section {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.progress {
    height: 1.5rem;
    margin: 1rem 0;
}

.next-section {
    margin-top: 1rem;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 4px;
}
</style>