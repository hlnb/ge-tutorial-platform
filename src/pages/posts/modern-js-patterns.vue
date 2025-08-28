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
						<div class="post-hero">
							<h1 class="title is-1">
								<i class="fas fa-bolt section-icon"></i> Modern JavaScript Essentials: A Beginner's Guide to Cleaner Code
							</h1>
						</div>

						<!-- Introduction -->
						<blockquote><p><em>Demystifying arrow functions, destructuring, and modules—because modern JavaScript should be accessible to everyone</em></p></blockquote>
						<p>Remember when JavaScript felt like a maze of function() {} statements and global variables? Don't worry—you're not alone. JavaScript has evolved to become more intuitive and beginner-friendly, and in this guide, we'll explore three powerful features that will make your code cleaner and more manageable.</p>
						<p>Whether you're just starting out or filling in knowledge gaps, we'll walk through <strong>three game-changing ES6+ features</strong> that every developer should know:</p>
						<ul>
							<li>🔹 <strong>Arrow functions</strong></li>
							<li>🔹 <strong>Destructuring</strong></li>
							<li>🔹 <strong>Modules</strong></li>
						</ul>
						<p>And we’ll round out with real-world <strong>modern JavaScript patterns</strong> that make your code more maintainable.</p>
						<hr>

						<h2>🔹 Arrow Functions: A Simpler Way to Write Functions</h2>
						<p>Remember the clunky function() {} syntax? Arrow functions are like its cooler, more streamlined cousin. They not only help you write less code but also make it easier to read. And hey—if they feel strange at first, that's totally normal! Let's break them down step by step.</p>
						<h3>✏️ Old way:</h3>
						<pre><code>function greet(name) {
  return 'Hello, ' + name;
}</code></pre>
						<h3>✅ Modern way:</h3>
						<pre><code>const greet = (name) => `Hello, ${name}`;</code></pre>
						<p>One cool thing about arrow functions is how they handle something called <code>this</code>. Don't worry if that term is new to you—the main thing to know is that arrow functions make it easier to work with timers and events. Let's see how:</p>
						<h3>Example: Timer with arrow function</h3>
						<pre><code>const timer = {
  count: 0,
  start() {
    setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
};

timer.start();</code></pre>
						<p>🔗 <a target="_blank" rel="noopener noreferrer nofollow" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">MDN: Arrow functions</a></p>
						<hr>

						<h2>🔹 Destructuring: A Cleaner Way to Work with Data</h2>
						<p>Think of destructuring like unpacking a suitcase—instead of digging through the whole thing to find what you need, you can pull out exactly what you want in one go. Let's explore how this makes your code more organized and easier to manage.</p>
						<h3>✏️ Old way:</h3>
						<pre><code>const person = { name: 'Helen', age: 30 };
const name = person.name;
const age = person.age;</code></pre>
						<h3>✅ Modern way:</h3>
						<pre><code>const { name, age } = person;</code></pre>
						<h3>In function parameters:</h3>
						<pre><code>function displayUser({ name, email }) {
  console.log(`${name}'s email is ${email}`);
}</code></pre>
						<h3>Array destructuring:</h3>
						<pre><code>const [first, second] = ['HTML', 'CSS', 'JavaScript'];</code></pre>
						<p>🔗 <a target="_blank" rel="noopener noreferrer nofollow" href="http://JavaScript.info">JavaScript.info</a><a target="_blank" rel="noopener noreferrer nofollow" href="https://javascript.info/destructuring-assignment">: Destructuring assignment</a></p>
						<hr>

						<h2>🔹 Modules: Building Blocks for Better Code</h2>
						<p>Remember when all your JavaScript code lived in one giant file? Modules are like organizing your code into neat, labeled boxes. They help keep your code tidy and make it easier to share with others. Let's explore how they work!</p>
						<h3>Exporting multiple named functions:</h3>
						<pre><code>// utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;</code></pre>
						<h3>Importing named functions:</h3>
						<pre><code>import { add, subtract } from './utils.js';

console.log(add(2, 3)); // 5</code></pre>
						<h3>Default export:</h3>
						<pre><code>// math.js
export default function multiply(a, b) {
  return a * b;
}</code></pre>
						<pre><code>import multiply from './math.js';</code></pre>
						<p>🔗 <a target="_blank" rel="noopener noreferrer nofollow" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules">MDN: JavaScript modules</a></p>
						<hr>

						<h2>⚡ Putting It All Together: Real Examples You Can Use</h2>
						<p>Now comes the fun part! Let's see how these features work together in real situations. Feel free to experiment with these patterns—they're more like recipes than rules. Try modifying them for your own needs!</p>
						<h3>1. Getting Data from an API (The Modern Way)</h3>
						<pre><code>const fetchUser = async (id) => {
  const response = await fetch(`/api/users/${id}`);
  const { name, email } = await response.json();
  return { name, email };
};</code></pre>
						<h3>2. Object shorthand + defaults</h3>
						<pre><code>const createUser = ({ name = 'Guest', email }) => ({
  name,
  email,
  createdAt: new Date()
});</code></pre>
						<h3>3. Optional chaining + nullish coalescing (ES2020)</h3>
						<pre><code>const street = user?.address?.street ?? 'Unknown street';</code></pre>
						<p>🔗 <a target="_blank" rel="noopener noreferrer nofollow" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining">MDN: Optional chaining</a></p>
						<p>🔗 <a target="_blank" rel="noopener noreferrer nofollow" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator">MDN: Nullish coalescing operator</a></p>
						<hr>

						<h2>🧰 Quick Reference Guide</h2>
						<table style="min-width: 50px"><colgroup><col><col></colgroup><tbody><tr><th><strong>Feature</strong></th><th><strong>Best For</strong></th></tr><tr><td><strong>Arrow functions</strong></td><td>Callbacks, concise syntax, avoiding manual this</td></tr><tr><td><strong>Destructuring</strong></td><td>Cleaner code, object/array handling</td></tr><tr><td><strong>Modules</strong></td><td>Better structure, reusable code</td></tr></tbody></table>
						<hr>

						<h2>📘 Ready to Explore Further?</h2>
						<ul>
							<li>📚 <a target="_blank" rel="noopener noreferrer nofollow" href="http://JavaScript.info">JavaScript.info</a><a target="_blank" rel="noopener noreferrer nofollow" href="https://javascript.info/"> Full Tutorial</a></li>
							<li>🛠️ <a target="_blank" rel="noopener noreferrer nofollow" href="https://es6-features.org/">ES6 Features Overview</a></li>
							<li>🧑‍💻 <a target="_blank" rel="noopener noreferrer nofollow" href="https://frontendmasters.com/">Frontend Masters – ES6 for Everyone</a></li>
							<li>🎓 <a target="_blank" rel="noopener noreferrer nofollow" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import">MDN: ES6 In Depth Series</a></li>
						</ul>
						<hr>

						<h2>💬 Let's Learn Together</h2>
						<p>We've covered a lot, and it's okay if some concepts still feel fuzzy—that's part of the learning process! What modern JavaScript features are you excited to try? Having trouble with any particular concept? Share your experiments or questions in the comments, or connect with our community on <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/graphitedge">LinkedIn</a> or <a target="_blank" rel="noopener noreferrer" href="https://bsky.app/">Bluesky</a>. Remember, every developer started somewhere, and we're here to help you grow!</p>

						<!-- CTA Box -->
						<div class="cta-box">
							<h3>Ready to level up?</h3>
							<p>
								<i class="fas fa-envelope"></i> Join The Graphite Journal Newsletter for web development insights beyond just code.
							</p>
							<BlogSignup />
						</div>
					</article>
				</div>
			</section>
		</div>
	</PostVisibility>
	<PostNavigation :current-path="'modern-js-patterns'" />
</template>

<script>
export const frontmatter = {
	title: "Modern JavaScript Essentials: A Beginner's Guide to Cleaner Code",
	date: '2025-06-15',
	author: 'Helen Burgess',
	image: '/images/posts/modern-js-patterns.svg',
	description:
		'Demystifying arrow functions, destructuring, and modules—because modern JavaScript should be accessible to everyone.',
	tags: ['JavaScript', 'ES6', 'Patterns', 'Web Development'],
	status: 'published',
};
</script>

<script setup>
import PostVisibility from '@/components/PostVisibility.vue';
import PostNavigation from '@/components/PostNavigation.vue';
import BlogSignup from '@/components/BlogSignup.vue';
import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import { format } from 'date-fns';

const postData = ref(frontmatter);

const formatDate = (date) => {
	return format(new Date(date), 'MMMM do, yyyy');
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
	background-image: url('/images/posts/[your-image-name].svg');
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