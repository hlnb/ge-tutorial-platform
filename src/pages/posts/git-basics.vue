<template>
    <PostVisibility :publish-date="frontmatter.date" :status="frontmatter.status">
        <div class="container">
            <section class="hero" v-if="frontmatter">
                <div class="hero-content">
                    <h1>{{ frontmatter.title }}</h1>
                    <div class="meta">
                        <time class="date">{{ formatDate(frontmatter.date) }}</time>
                        <span class="tags" v-if="frontmatter.tags?.length">
                            Tags: {{ frontmatter.tags.join(', ') }}
                        </span>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="content">
                    <article class="blog-post">
    <!-- Hero Image Section -->
    <div class="post-hero">
        <!-- Background image set in CSS -->
        <h2 class="title is-1">
            <i class="fa-brands fa-git"></i> Git Basics: Version Control Made Simple
        </h2>
    </div>

    <p>Ever saved multiple versions of a file with names like "final", "final_v2", "final_REALLY_FINAL"? Then you already understand why we need version control! Let's demystify Git - the tool that solves this problem and so much more.</p>

    <h2>Why Version Control Matters <i class="fa-solid fa-star"></i></h2>
    <p>Imagine you're working on the Rotto Rocks website, and you want to try something new with the navigation menu. Without version control:</p>
    <ul>
        <li>You might create backup copies of files (leading to confusion)</li>
        <li>You can't easily track what changes you made and when</li>
        <li>If something breaks, returning to a working version is challenging</li>
        <li>Collaborating with others becomes a nightmare</li>
    </ul>
    <p>Git solves these problems by creating a "time machine" for your code. It tracks every change, lets you experiment safely, and makes collaboration smooth and efficient.</p>

    <h2>Git in Plain English</h2>
    <p>Think of Git like a family photo album that automatically takes snapshots of your project. Each snapshot (called a "commit") captures the exact state of your files at that moment. You decide when to take these snapshots and can add notes explaining what changed.</p>

    <h3>Key Concepts for Beginners:</h3>
    <ol>
        <li>
            <strong>Repository (or "repo")</strong>
            <ul>
                <li>Your project's folder that Git watches</li>
                <li>Like a special folder that remembers everything that happens to your files</li>
            </ul>
        </li>
        <li>
            <strong>Commit</strong>
            <ul>
                <li>A snapshot of your project at a specific point</li>
                <li>Think of it as saving a checkpoint in a video game</li>
            </ul>
        </li>
        <li>
            <strong>Branch</strong>
            <ul>
                <li>A separate line of development</li>
                <li>Like creating a parallel universe where you can try new things without affecting your main project</li>
            </ul>
        </li>
    </ol>

    <h2>Real-World Benefits <i class="fa-solid fa-bullseye"></i></h2>
    <h3>For Solo Developers:</h3>
    <ul>
        <li>Safely experiment with new features</li>
        <li>Track when and why you made specific changes</li>
        <li>Restore previous versions if something breaks</li>
        <li>Keep your project organized and documented</li>
    </ul>
    <h3>For Teams:</h3>
    <ul>
        <li>Multiple people can work on the same project without conflicts</li>
        <li>Review others' changes before adding them to the main project</li>
        <li>Keep track of who made what changes and why</li>
        <li>Maintain a single source of truth for the project</li>
    </ul>

    <h2>Getting Started with Git </h2>
    <p>Don't worry - you don't need to learn all of Git's features at once. Start with these basic commands:</p>
    <ol>
        <li><code>git init</code> - Start tracking a project</li>
        <li><code>git add</code> - Choose files for your next snapshot</li>
        <li><code>git commit</code> - Take the snapshot</li>
        <li><code>git status</code> - Check what's changed in your project</li>
    </ol>
    <p>Think of these like your "essential toolkit" - you can learn more advanced features as you need them.</p>

    <h2>Beyond Just Commands</h2>
    <p>Understanding Git isn't just about memorizing commands. It's about:</p>
    <ul>
        <li>Building good habits for managing your code</li>
        <li>Making your development process more organized</li>
        <li>Protecting your work from accidents or mistakes</li>
        <li>Preparing for collaboration with other developers</li>
    </ul>

    <h2>When Should You Start Using Git?</h2>
    <p><strong>Right now!</strong> Even if you're just beginning to code, starting with Git will:</p>
    <ul>
        <li>Build good habits from the start</li>
        <li>Make it easier to track your learning progress</li>
        <li>Prepare you for real-world development workflows</li>
        <li>Give you a safety net while you experiment and learn</li>
    </ul>

    <h2>Next Steps</h2>
    <p>In our next tutorial, we'll walk through setting up Git for our Rotto Rocks project, showing you exactly how to:</p>
    <ul>
        <li>Initialize a new Git repository</li>
        <li>Make your first commit</li>
        <li>Create and switch branches</li>
        <li>Recover from common mistakes</li>
    </ul>
    <p>Remember: Every professional developer uses version control. By learning Git now, you're not just learning a tool - you're adopting a professional development workflow that will serve you throughout your career.</p>
    <p>💡 <strong>Pro Tip:</strong> Start small. Use Git with a simple project first, and gradually incorporate more features as you become comfortable with the basics.</p>

    <h2>Getting Set Up: Your Git Starter Pack <i class="fa-solid fa-screwdriver-wrench"></i></h2>
    <p>To help you get started, we've created a free downloadable "Git Beginners Guide" that includes:</p>
    <ul>
        <li>Step-by-step setup instructions for Windows, Mac, and Linux</li>
        <li>Visual guides for using Git in VSCode</li>
        <li>Recommended GUI tools for visual learners</li>
        <li>Common troubleshooting tips</li>
        <li>A handy command reference sheet</li>
    </ul>
    <p><a href="/pdfs/git-beginners-guide-2025.pdf">Download Git Beginners Guide PDF →</a></p>

    <h3>Choose Your Git Interface</h3>
    <p>Everyone's brain works differently! Here are three ways you can work with Git:</p>
    <ol>
        <li>
            <strong>Command Line</strong>
            <ul>
                <li>Great for understanding Git deeply</li>
                <li>Fastest once you're comfortable</li>
                <li>Essential for advanced operations</li>
            </ul>
        </li>
        <li>
            <strong>VSCode Integration</strong>
            <ul>
                <li>Perfect balance of visual and command-line</li>
                <li>Built-in Git features</li>
                <li>Great for seeing changes in your code</li>
                <li>[Download our VSCode Git cheat sheet → <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf"><i class="fa-brands fa-windows"></i> Windows </a> | <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf"><i class="fa-brands fa-apple"></i> MacOS</a> | <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf"><i class="fa-brands fa-linux"></i> Linux</a> ]</li>
            </ul>
        </li>
        <li>
            <strong>GUI Applications</strong>
            <ul>
                <li>Ideal for visual learners</li>
                <li>Great for understanding branches and history</li>
                <li>Recommended tools:</li>
                <ul>
                    <li><a href="https://desktop.github.com/download/"><i class="fa-brands fa-github"></i> GitHub Desktop </a>(free, great for beginners)</li>
                    <li><a href="https://www.gitkraken.com/download"><i class="fa-brands fa-gitkraken"></i> GitKraken </a>(powerful features, some paid, Windows, MacOS, Linux)</li>
                    <li><a href="https://www.sourcetreeapp.com/"><i class="fa-brands fa-sourcetree"></i> SourceTree </a>(free, feature-rich, Windows and MacOS)</li>
										<li><a href="https://git-scm.com/downloads/guis"><i class="fa-brands fa-git"></i> Git GUI </a>(free, basic features, Windows and MacOS)</li>
                </ul>
            </ul>
        </li>
    </ol>
    <p>Choose what works best for you - there's no "right" way to use Git!</p>
    <p>Let's make version control clearer, together!</p>
</article>
            </div>
								<BlogSignup />
        </section>
		<PostNavigation :current-path="'git-basics'" />

	</div>
    </PostVisibility>
</template>

<script lang="ts">
export const frontmatter = {
	title: 'Git Basics: A Beginner\'s Guide',
	date: '2025-05-15', //furture date for posting
	author: 'Helen Burgess',
	description: 'Learn the fundamentals of Git version control system and how to use it effectively in your development workflow.',
	tags: ['git', 'version control', 'beginners'],
	imageUrl: '/images/posts/git-basics.svg',
	status: 'published',

};
</script>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PostVisibility from '@/components/PostVisibility.vue';
import PostNavigation from '@/components/PostNavigation.vue';
import BlogSignup from '@/components/BlogSignup.vue';
import { useHead } from '@vueuse/head';

const postData = ref(frontmatter);

const formatDate =(dateString) => {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-AU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
};

useHead({
	title: postData.value.title,
	meta: [
		{ name: 'description', content: postData.value.description },
		{ property: 'og:title', content: postData.value.title },
		{ property: 'og:description', content: postData.value.description },
		{ property: 'og:image', content: postData.value.imageUrl },
	],
});

// Emit frontmatter to parent layout
const emit = defineEmits(['update:frontmatter']);

onMounted(() => {
	emit('update:frontmatter', frontmatter);
});
</script>

<style scoped>
.blog-post {
	max-width: 80vw;
	margin: 0 auto;
	padding: 2rem;
}

.content {
	line-height: 1.6;
	font-size: 1.1rem;
}

.hero {
	background-image: url('/images/posts/git-basics.svg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	min-height: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin-bottom: 2rem;
}

.hero::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
}

.hero-content {
	position: relative;
	z-index: 1;
	text-align: center;
	color: white;
	padding: 2rem;
	max-width: 800px;
}

.hero h1 {
	color: white;
	margin-bottom: 1rem;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.meta {
	color: white;
	margin: 1rem 0;
}

.meta .date {
	background: rgba(255, 255, 255, 0.2);
	padding: 0.25rem 0.75rem;
	border-radius: 12px;
	font-family: monospace;
	font-size: 0.9rem;
	letter-spacing: 0.02em;
}

.meta .tags {
	margin-left: 1rem;
	background: rgba(255, 255, 255, 0.2);
	padding: 0.25rem 0.75rem;
	border-radius: 12px;
}

h1 {
	font-size: 2.5rem;
	margin-bottom: 2rem;
	color: var(--color-red-berry);
}

h2 {
	font-size: 1.8rem;
	margin: 2rem 0 1rem;
	color: var(--color-mine-shaft);
}

@media (max-width: 768px) {
	.post-container {
		padding: 1rem;
	}

	.post-content {
		padding: 1.5rem;
	}
}
</style> 