<template>
	<PostVisibility :publish-date="frontmatter.date" :status="frontmatter.status">
		<div class="container">
			<section v-if="frontmatter" class="hero">
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
							<h2 class="title is-1">
								<i class="fa-solid fa-webhook"></i> API Best Practices
								<span class="is-hidden-mobile">: A Beginner's Guide to Building Better Web APIs</span>
								<span class="is-hidden-tablet">: A Beginner's Guide</span>
							</h2>
						</div>

						<!-- Introduction -->
						<p>You might have heard developers talk about APIs, or maybe you've used them without fully understanding what's happening behind the scenes. Think of an API like a restaurant's menu and ordering system—it's the way different software applications talk to each other and share information.</p>

						<p>Today, let's break down some key best practices that make APIs work better for everyone. Even if you're not building APIs yet, understanding these principles will help you work with them more effectively in your projects.</p>

						<!-- Main Content -->
						<h2 class="title is-2">1. Keep It Simple and Clear</h2>
						<p>Remember our first core value at Graphitedge—clarity over complexity? This applies perfectly to APIs. A good API should be:</p>
						<ul><li>
							<p>Easy to understand</p></li>
							<li><p>Predictable in its behavior</p></li>
							<li><p>Well-documented</p></li>
						</ul>
						<p>Imagine walking into a restaurant where the menu is written in a mix of different languages, with no prices or descriptions. Frustrating, right? That's what a poorly designed API feels like to developers.</p>
						<h2>2. Use Clear Naming Conventions</h2>
						<p>Just like how we name our HTML classes or JavaScript functions, API endpoints should be clear about what they do:</p>
						<p><i class="fa-solid fa-check"></i>Good examples:</p>
						<pre>
							<code>/api/users/create/api/orders/123/status
							</code>
					</pre>
					<p><i class="fa-solid fa-xmark"></i> Not so good:</p>
					<pre>
						<code>/api/u/c/api/o/123/s
						</code>
					</pre>
					<h2>3. Version Your APIs</h2>
					<p>Here's something many beginners don't realize: APIs change over time. Just like how websites need updates, APIs need to evolve too. But unlike a website update, API changes can break other applications that depend on them.</p>
					<p>That's why we version our APIs. It's like having different editions of a book—the original stays available while new versions add improvements:</p>
					<pre>
						<code>/api/v1/users/api/v2/users
						</code>
					</pre>
					<h2>4. Use HTTP Methods Correctly</h2>
					<p>Think of HTTP methods as verbs that tell us what action we're taking:</p>
					<ul>
						<li><p>GET: Fetch information (like reading a menu)</p></li>
						<li><p>POST: Create something new (placing an order)</p></li>
						<li><p>PUT/PATCH: Update something (modifying your order)</p></li>
						<li><p>DELETE: Remove something (canceling your order)</p></li>
					</ul>
					<h2>5. Provide Clear Error Messages</h2>
					<p>When something goes wrong (and it will), your API should explain what happened and how to fix it. Good error messages are like having a helpful waiter who tells you why your order couldn't be completed and what you can do about it.</p>
					<h2>6. Security First</h2>
					<p>While we won't dive deep into security today (that's a topic for future tutorials!), always remember:</p>
					<ul>
						<li><p>Never expose sensitive data in your URLs</p></li>
						<li><p>Always use HTTPS</p></li>
						<li><p>Implement proper authentication</p></li>
						<li><p>Validate all input data</p></li>
					</ul>
					<h2>Real-World Impact</h2>
					<p>Poor API practices can lead to:</p>
					<ul>
						<li><p>Confused developers</p></li>
						<li><p>Broken applications</p></li>
						<li><p>Security vulnerabilities</p></li>
						<li><p>Frustrated users</p></li>
					</ul>
					<p>Good API practices lead to:</p>
					<ul>
						<li><p>Faster development</p></li>
						<li><p>Happier developers</p></li><li><p>More reliable applications</p></li>
						<li><p>Better user experiences</p></li>
					</ul>
					<h2>What's Next?</h2>
					<p>APIs are a vast topic, and we've just scratched the surface. In future tutorials, we'll explore how to actually build APIs, work with authentication, and handle more advanced concepts. For now, focus on understanding these core principles—they'll serve you well whether you're building APIs or just using them in your projects.</p>
					<h2>Key Takeaways</h2>
					<ul>
						<li><p>APIs are how applications communicate</p></li>
						<li><p>Clear, simple design is crucial</p></li>
						<li><p>Version your APIs to maintain compatibility</p></li>
						<li><p>Use HTTP methods correctly</p></li>
						<li><p>Provide helpful error messages</p></li>
						<li><p>Always prioritize security</p></li>
					</ul>
					<p>Remember: Every developer started somewhere. If APIs feel overwhelming right now, that's completely normal. Focus on understanding these foundational concepts, and the technical details will make more sense when you're ready to dive deeper.</p>
					<hr>
					<p><em>Want to learn more about web development fundamentals? Check out our tutorials on HTML, CSS, and JavaScript to build a strong foundation for your journey into APIs and beyond.</em></p>

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
	<PostNavigation :current-path="'api-best-practices-beginner'" />
</template>

<script>
export const frontmatter = {
	title: 'API Best Practices: A Beginner\'s Guide to Building Better Web APIs',
	date: '2025-05-29',
	author: 'Helen Burgess',
	image: '/images/posts/api-best-practices-beginner.svg', // Updated image
    description: 'Learn the best practices for building APIs, from clear naming conventions to security tips, in this beginner-friendly guide.', // Updated description
    tags: ['API', 'Web Development', 'Best Practices'], // Updated tags
    status: 'published', // Change to 'published' when ready
};
</script>

<script setup>
import PostVisibility from '@/components/PostVisibility.vue';
import PostNavigation from '@/components/PostNavigation.vue';
import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import BlogSignup from '../../components/BlogSignup.vue';


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
		{ property: 'og:image', content: postData.value.image },
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
	background-image: url('/images/posts/api-best-practices-beginner.svg');
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
/* Code block styling */
pre {
    background-color: #2d2d2d; /* Dark background */
    color: #f8f8f2; /* Light text */
    font-family: 'Courier New', Courier, monospace; /* Monospace font */
		font-weight: 700;
		font-size: 1rem; /* Font size */
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto; /* Horizontal scrolling for long lines */
    margin: 1rem 0;
		width: 30vw;
}

code {
    background-color: #2d2d2d; /* Match pre background */
    color: #f8f8f2; /* Match pre text color */
    font-family: 'Courier New', Courier, monospace; /* Monospace font */
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
}

pre code {
    display: flex; /* Ensure code inside pre takes full width */
		align-items: center;
		white-space: pre-wrap; /* Preserve whitespace */
		word-wrap: break-word; /* Break long words */
		justify-content: flex-start;
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


@media (max-width: 768px) {
    pre {
        font-size: 0.9rem; /* Adjust font size for smaller screens */
    }
}
}
@media (max-width: 480px) {
	.hero h1 {
		font-size: 1.5rem;
	}
}
</style>
