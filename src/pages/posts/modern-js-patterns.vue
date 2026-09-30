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
							<h2 class="title is-2">
								<i class="fas fa-bolt section-icon"></i> Modern JavaScript Essentials: A Beginner's Guide to Cleaner Code
							</h2>
						</div>

						<!-- Introduction -->
						<blockquote><p><em>Arrow functions, destructuring, and modules in everyday JavaScript</em></p></blockquote>
						<p>Modern JavaScript gives you shorter ways to write functions, extract values from data, and split code across files. This guide covers three ES6+ features that you will see in current projects:</p>
						<ul>
							<li>🔹 <strong>Arrow functions</strong></li>
							<li>🔹 <strong>Destructuring</strong></li>
							<li>🔹 <strong>Modules</strong></li>
						</ul>
						<p>The final examples combine these features into patterns that are easier to maintain.</p>
						<hr>

						<h2>🔹 Arrow Functions: A Simpler Way to Write Functions</h2>
						<p>Arrow functions provide a compact function syntax. They also handle <code>this</code> differently from regular functions, which matters in callbacks and object methods.</p>
						<h3>✏️ Old way:</h3>
						<pre><code>function greet(name) {
  return 'Hello, ' + name;
}</code></pre>
						<h3>✅ Modern way:</h3>
						<pre><code>const greet = (name) => `Hello, ${name}`;</code></pre>
						<p>Arrow functions inherit <code>this</code> from the surrounding scope. That behaviour is useful in callbacks such as this timer:</p>
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
						<p>Destructuring extracts selected values from an object or array into variables. It can remove repetitive property access when the names remain clear.</p>
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
						<p>Modules let you separate code by responsibility and explicitly choose what each file exports. Other files can then import only what they need.</p>
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

						<h2>Putting the features together</h2>
						<p>These examples combine modern syntax in small tasks. Change the data and function names to test how each pattern behaves.</p>
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

						<h2>Quick reference</h2>
						<table style="min-width: 50px"><colgroup><col><col></colgroup><tbody><tr><th><strong>Feature</strong></th><th><strong>Best For</strong></th></tr><tr><td><strong>Arrow functions</strong></td><td>Callbacks, concise syntax, avoiding manual this</td></tr><tr><td><strong>Destructuring</strong></td><td>Cleaner code, object/array handling</td></tr><tr><td><strong>Modules</strong></td><td>Better structure, reusable code</td></tr></tbody></table>
						<hr>

						<h2>Further reading</h2>
						<ul>
							<li>📚 <a target="_blank" rel="noopener noreferrer nofollow" href="http://JavaScript.info">JavaScript.info</a><a target="_blank" rel="noopener noreferrer nofollow" href="https://javascript.info/"> Full Tutorial</a></li>
							<li>🛠️ <a target="_blank" rel="noopener noreferrer nofollow" href="https://es6-features.org/">ES6 Features Overview</a></li>
							<li>🧑‍💻 <a target="_blank" rel="noopener noreferrer nofollow" href="https://frontendmasters.com/">Frontend Masters: ES6 for Everyone</a></li>
							<li>🎓 <a target="_blank" rel="noopener noreferrer nofollow" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import">MDN: ES6 In Depth Series</a></li>
						</ul>
						<hr>

						<h2>Try the patterns</h2>
						<p>Use one of these features in a small script, then compare it with the version you would have written before. Share your experiment or question in the comments, or connect with the GraphitEdge community on <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/graphitedge">LinkedIn</a> or <a target="_blank" rel="noopener noreferrer" href="https://bsky.app/">Bluesky</a>.</p>

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
		'Learn how arrow functions, destructuring, and modules work in everyday JavaScript.',
	tags: ['JavaScript', 'ES6', 'Patterns', 'Web Development'],
	status: 'published',
};
</script>

<script setup>
import PostVisibility from '@/components/PostVisibility.vue';
import PostNavigation from '@/components/PostNavigation.vue';
import BlogSignup from '@/components/BlogSignup.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import { format } from 'date-fns';

const postData = ref(frontmatter);
const route = useRoute();
const canonicalUrl = `https://www.graphitedge.com.au${route.path}`;

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
	link: [{ rel: 'canonical', href: canonicalUrl }],
	script: [
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'Article',
				headline: postData.value.title,
				description: postData.value.description,
				author: { '@type': 'Person', name: 'Helen Burgess' },
				publisher: {
					'@type': 'Organization',
					name: 'GraphitEdge',
					url: 'https://www.graphitedge.com.au',
				},
				url: canonicalUrl,
			}),
		},
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
	background-image: url('/images/posts/modern-js-patterns.svg');
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
