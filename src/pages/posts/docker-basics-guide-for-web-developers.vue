
<template>
    <PostVisibility :publish-date="frontmatter.date" :status="frontmatter.status">
        <div class="container">
            <section class="hero">
                <div class="hero-content">
                    <h1>{{ frontmatter.title }}</h1>
                    <div class="meta">
                        <time class="date">{{ formatDate(frontmatter.date) }}</time>
                        <span v-if="frontmatter.tags?.length" class="tags">
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
                            <h1 class="title is-1">
                                <i class="fas fa-code section-icon"></i> Example Post Title
                            </h1>
                        </div>

                        <h1><strong>🐳 Docker for Web Developers: Simplifying Setup and Deployment</strong></h1><blockquote><p>How containers, images, and Docker Compose can streamline your dev and deploy workflow</p></blockquote><hr><p>Ever had your code work perfectly on your computer, only to break when you share it with someone else? That's a common headache in web development—where different Node versions, package conflicts, and mysterious configuration issues can turn simple setups into debugging marathons. Enter <strong>Docker</strong>.</p><p>Docker brings order to the chaos with <strong>containers</strong>—lightweight, portable environments that bundle up your app, its dependencies, and its configuration into something that runs <em>anywhere</em>. If you're new to containers, think of them like perfectly packed lunchboxes—everything your app needs to run, all packed up and ready to go. Whether you’re building a static site, a React app, or a full-stack Node/Express API, Docker can help you tame your dev setup and streamline your deployments.</p><p>In this guide, we’ll explore:</p><ul><li><p>🧱 What containers and images actually are</p></li><li><p>🧰 How to use docker-compose for local dev</p></li><li><p>🚀 A basic deployment workflow using Docker</p></li><li><p>✅ Practical setup tips for web developers</p></li></ul><hr><h2><strong>🔹 Containers vs Images: What’s the Deal?</strong></h2><p>Let's break down two of Docker's most important concepts. Don't worry if they feel a bit abstract at first—even experienced developers sometimes mix them up!</p><p>A <strong>Docker image</strong> is like a cooking recipe that lists everything your app needs: the code, the operating system, all the dependencies, and configuration. A <strong>container</strong> is what happens when you follow that recipe—it's your actual running application, ready to serve users.</p><h3><strong>📦 Image</strong></h3><p>Think of an image as your app's blueprint. Here's a basic example of what one looks like (don't worry if the syntax feels new—we'll break it down step by step in future tutorials):</p><pre><code><code># A basic Node app image
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]</code></code></pre><h3><strong>🛠️ Container</strong></h3><p>This is your live, running app—like taking that blueprint and building an actual house. Here's how we create one (we'll explain each part of these commands later):</p><pre><code><code>docker build -t my-node-app .
docker run -p 3000:3000 my-node-app</code></code></pre><hr><h2><strong>🧩 Docker Compose: Multi-Container Made Easy</strong></h2><p>Most modern web apps need multiple pieces to work together—like a Node.js backend talking to a MongoDB database. That's where Docker Compose comes in. It's a tool that helps you run multiple containers together, making sure they can all communicate properly.</p><p>If you've ever struggled to get your database working with your application locally, you'll appreciate how Docker Compose simplifies this. Instead of installing MongoDB on your computer and hoping it works, you can let Docker handle it all.</p><h3><strong>docker-compose.yml</strong></h3><p>Here's what a basic setup looks like (don't worry about memorizing this—we'll explore each part in detail):</p><pre><code><code>version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    depends_on:
      - db
  db:
    image: mongo
    ports:
      - "27017:27017"</code></code></pre><p></p><h3><strong>Run the whole stack:</strong></h3><pre><code><code>docker-compose up</code></code></pre><p>With just one command, you've launched both your API and database in their own containers, perfectly configured to work together. No need to worry about installing MongoDB locally or dealing with version conflicts.</p><p>🔗 <a target="_blank" rel="noopener noreferrer nofollow" href="https://docs.docker.com/compose/">Docker Compose Docs</a></p><hr><h2><strong>🧑‍💻 Local Setup Tips for Web Devs</strong></h2><p>Let's walk through setting up a Docker environment for your web development. We'll break it down into three manageable steps, and I'll explain why each one matters:</p><h3><strong>1. Create a&nbsp;Dockerfile &nbsp;in your project root</strong></h3><p>The Dockerfile is like your project's recipe card. Each line tells Docker exactly what your app needs to run:</p><pre><code><code>FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]</code></code></pre><p></p><h3><strong>2. Add a&nbsp;.dockerignore&nbsp;file</strong></h3><p>Just like .gitignore helps keep your Git repository clean, .dockerignore tells Docker what files it can skip. This makes your containers smaller and faster:</p><pre><code><code>node_modules
dist
.env</code></code></pre><p></p><h3><strong>3. Use&nbsp;docker-compose&nbsp;for local development</strong></h3><p>This is where the magic happens. With one command, you'll start your entire development environment:</p><pre><code><code>docker-compose up --build</code></code></pre><p>With volume mapping (.:/app), your local edits are reflected instantly in the container—great for hot reloading.</p><p>When you make changes to your code, they'll automatically appear in your running container—just like you're used to with regular local development. This is especially helpful when you're testing changes or debugging.</p><hr><h2><strong>🚀 Basic Deployment Workflow with Docker</strong></h2><p>Now comes an exciting part—getting your containerized app onto the internet! Let's break down the deployment process into clear, manageable steps. Remember, deploying your first containerized app is a big milestone, so take your time with each step.</p><h3><strong>🏗️ Step 1: Build your image</strong></h3><p>First, we'll package everything your app needs into a Docker image. Think of this like creating a perfect snapshot of your working application:</p><pre><code><code>docker build -t username/my-web-app .</code></code></pre><h3><strong>📤 Step 2: Push to Docker Hub (or GitHub Container Registry)</strong></h3><p>Next, we'll upload your image to Docker Hub—think of it like GitHub, but for Docker images. This makes your containerized app available anywhere:</p><pre><code><code>docker push username/my-web-app</code></code></pre><h3><strong>📦 Step 3: Deploy on your server</strong></h3><p>Now comes the moment of truth—deploying to your server. Whether you're using DigitalOcean, Linode, or another provider, the process is similar:</p><pre><code><code>docker pull username/my-web-app
docker run -d -p 80:3000 username/my-web-app</code></code></pre><p>Congratulations! Your containerised app is now live on the internet. 🎉</p><p>If this is your first Docker deployment, you've just accomplished something significant. Don't worry if it takes a few tries to get everything working—that's completely normal and part of the learning process.</p><h3><strong>🔄 Next Steps for Production</strong></h3><p>As you get more comfortable with Docker deployments, here are some areas you might want to explore (we'll cover each of these in future tutorials):</p><ul><li><p>Use a <strong>reverse proxy</strong> like Nginx to handle multiple websites and SSL certificates</p></li><li><p>Add <strong>Let’s Encrypt SSL</strong> to make your site secure (the padlock in the browser)</p></li><li><p>Deploy with <strong>Docker Swarm</strong> or <strong>Kubernetes</strong> when you're ready to scale (don't worry about these just yet!)</p></li></ul><p>Remember: Every professional developer started exactly where you are now. Take it one step at a time, and reach out to the Graphitedge community if you need help!</p><p>🔗 <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.digitalocean.com/community/tutorial_series/docker">DigitalOcean Guide: Deploy Docker App</a></p><hr><h2><strong>🧠 Key Takeaways</strong></h2><p>Let's recap what we've learned about Docker and why it matters for your web development journey:</p><p><strong>🎯 Consistent Development</strong>Your code works the same way everywhere—whether it's on your computer, your teammate's, or your production server.</p><p><strong>🔄 Simplified Setup</strong>Start your entire development environment with a single command, making it easier to focus on writing code.</p><p><strong>🚀 Smoother Deployments</strong>Package your application once and deploy it anywhere, reducing those nerve-wracking deployment surprises.</p><p><strong>🛡️ Safe Testing</strong>Try new things without worrying about breaking your local setup—containers keep everything neat and isolated.</p><table style="min-width: 50px"><colgroup><col><col></colgroup><tbody><tr><th colspan="1" rowspan="1"><p><strong>Benefit</strong></p></th><th colspan="1" rowspan="1"><p><strong>What It Solves</strong></p></th></tr><tr><td colspan="1" rowspan="1"><p>Containerised Dev Setup</p></td><td colspan="1" rowspan="1"><p>No more “it works on my machine”</p></td></tr><tr><td colspan="1" rowspan="1"><p>Docker Compose</p></td><td colspan="1" rowspan="1"><p>Run your whole stack with one command</p></td></tr><tr><td colspan="1" rowspan="1"><p>Easy Deployment</p></td><td colspan="1" rowspan="1"><p>Package once, run anywhere</p></td></tr><tr><td colspan="1" rowspan="1"><p>Isolation &amp; Portability</p></td><td colspan="1" rowspan="1"><p>Safe, consistent environments</p></td></tr></tbody></table><hr><h2><strong>🛠️ Helpful Resources</strong></h2><p>Ready to explore Docker further? Here are some beginner-friendly resources I've found particularly helpful:</p><ul><li><p>🔎 <a target="_blank" rel="noopener noreferrer nofollow" href="https://labs.play-with-docker.com/">Play with Docker (free sandbox)</a> - A free, interactive environment to practice Docker commands</p></li><li><p>📚 <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/docker/labs/tree/master/beginner">Docker for Beginners on GitHub</a> - Step-by-step tutorials with clear explanations</p></li><li><p>🧰 <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/nodejs/docker-node">Node.js + Docker Starter Repo</a> - Ready-to-use examples for Node.js projects</p></li><li><p>📦 <a target="_blank" rel="noopener noreferrer nofollow" href="https://hub.docker.com/">DockerHub</a> - Find pre-made images to jumpstart your projects</p></li></ul><hr><h2><strong>💬 Final Thoughts</strong></h2><p>Remember when we talked about Docker feeling overwhelming at first? Every developer has been there. The key is to start small—maybe with a simple static site—and gradually work your way up to more complex setups. Each step you take with Docker is making your development workflow more professional and reliable.</p><p>If you're ready to try Docker with your first project, keep an eye out for our upcoming hands-on tutorial. We'll build a real website together, container by container, explaining every step along the way.</p><p>Have questions about getting started with Docker? Join our community of learners at <a target="_blank" rel="noopener noreferrer" href="https://graphitedge.com.au/tutorials">Graphitedge Tutorials</a> where we're all figuring this out together. Your coding journey is unique, and we're here to support you every step of the way.</p><ol class="footnotes"></ol>

                        <!-- CTA Box -->
                        <div class="cta-box">
                            <h3>Ready to level up?</h3>
                            <p>
                                <i class="fas fa-envelope"></i> Join The Graphite Journal
                                Newsletter for web development insights beyond just code.
                            </p>
                            <BlogSignup />
                        </div>
                    </article>
                </div>
            </section>
        </div>
    </PostVisibility>
    <PostNavigation :current-path="'docker-basics-guide-for-web-developers'" />
</template>



<script>
export const frontmatter = {
    title: 'Docker for Web Developers: Simplifying Setup and Deployment',
    date: '2025-07-29',
    author: 'Elizabeth H. Burgess',
    image: '/images/posts/docker-basics-guide.svg',
    description: 'A practical guide to using Docker, containers, and Docker Compose for modern web development and deployment.',
    tags: ['Docker', 'Web Development', 'Containers', 'DevOps', 'Guide'],
    status: 'published'
};
</script>

<script setup>
import PostVisibility from '@/components/PostVisibility.vue';
import PostNavigation from '@/components/PostNavigation.vue';
import BlogSignup from '../../components/BlogSignup.vue';
import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';

const postData = ref(frontmatter);

useHead({
    title: postData.value.title,
    meta: [
        { name: 'description', content: postData.value.description },
        { property: 'og:title', content: postData.value.title },
        { property: 'og:description', content: postData.value.description },
        { property: 'og:image', content: postData.value.image },
    ],
});

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
    background-image: url('/images/posts/example-image.svg');
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

.cta-box {
    background-color: var(--color-snow);
    border-radius: 8px;
    padding: 2rem;
    margin: 2rem 0;
    text-align: center;
}

.cta-box h3 {
    color: var(--color-red-berry);
    margin-bottom: 1rem;
}

.cta-box i {
    color: var(--color-red-berry);
    margin-right: 0.5rem;
}

@media (max-width: 768px) {
    .blog-post {
        padding: 1rem;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    .hero {
        min-height: 300px;
    }

    .hero h1 {
        font-size: 1.8rem;
    }
}
</style> 