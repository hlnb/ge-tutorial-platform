<template>
	<PostVisibility :publish-date="frontmatter.date" :status="frontmatter.status">
		<div class="box container">
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

			<article class="content blog-post">
				<h2 class="title is-1">
					<i class="fas fa-globe section-icon"></i>
					Introduction to Backend Programming with PHP and Databases
				</h2>

				<p>
					So you've mastered HTML, CSS, and JavaScript? That's great! But here's
					the thing - those frontend skills are just half of what makes websites
					truly dynamic. Let's talk about the other half: the backend. This is
					where PHP and databases work behind the scenes to make your websites
					come alive.
				</p>
				<p>
					Now, you might be thinking "Wait, can't I use JavaScript for backend
					development too?" And you're absolutely right! Node.js has made
					JavaScript a powerful server-side option. But there's a whole world of
					backend technologies out there, and PHP remains one of the most
					widely-used and beginner-friendly choices. That's why we're focusing
					on PHP in this guide.
				</p>
				<h2>What is Backend Development?</h2>
				<p>
					Think of backend development as the engine room of your website. While
					frontend development creates what users see and interact with, the
					backend is busy processing data, handling user accounts, and making
					sure everything works smoothly behind the curtain. It's like the
					difference between a store's display window and its stockroom - both
					are essential, but they serve very different purposes.
				</p>
				<p>A backend typically consists of three main components:</p>
				<ol>
					<li>
						<p>
							<strong>The Server</strong> – Think of this as your website's home
							on the internet. It's like a computer that's always on, ready to
							serve your website to visitors.
						</p>
					</li>
					<li>
						<p>
							<strong>The Application</strong> – This is your PHP code that
							makes decisions and handles tasks, like checking if a user's
							password is correct or calculating shopping cart totals.
						</p>
					</li>
					<li>
						<p>
							<strong>The Database</strong> – This is like your website's filing
							cabinet, where all the important information is stored (like user
							accounts, blog posts, or product details)..
						</p>
					</li>
				</ol>

				<div class="architecture-diagram">
					<svg
						width="100%"
						height="400"
						viewBox="0 0 800 400"
						xmlns="http://www.w3.org/2000/svg"
					>
						<!-- Client/Browser Section -->
						<g transform="translate(50, 50)">
							<rect
								x="0"
								y="0"
								width="150"
								height="100"
								rx="10"
								fill="#4A5568"
							/>
							<text
								x="75"
								y="45"
								fill="white"
								text-anchor="middle"
								font-family="Arial"
							>
								Client Browser
							</text>
							<text
								x="75"
								y="70"
								fill="#A0AEC0"
								text-anchor="middle"
								font-size="12"
							>
								HTML, CSS, JS
							</text>
						</g>

						<!-- Request/Response Arrows -->
						<g transform="translate(200, 80)">
							<path
								d="M 10,0 L 140,0"
								stroke="#68D391"
								stroke-width="3"
								marker-end="url(#arrowhead)"
							/>
							<text
								x="75"
								y="-10"
								fill="#4A5568"
								text-anchor="middle"
								font-size="12"
							>
								HTTP Request
							</text>

							<path
								d="M 140,40 L 10,40"
								stroke="#FC8181"
								stroke-width="3"
								marker-end="url(#arrowhead)"
							/>
							<text
								x="75"
								y="60"
								fill="#4A5568"
								text-anchor="middle"
								font-size="12"
							>
								Response
							</text>
						</g>

						<!-- Server Section -->
						<g transform="translate(350, 20)">
							<rect
								x="0"
								y="0"
								width="400"
								height="160"
								rx="10"
								fill="#2D3748"
							/>
							<text
								x="200"
								y="30"
								fill="white"
								text-anchor="middle"
								font-family="Arial"
								font-weight="bold"
							>
								Web Server
							</text>

							<!-- PHP Section -->
							<g transform="translate(20, 50)">
								<rect
									x="0"
									y="0"
									width="150"
									height="80"
									rx="5"
									fill="#4A5568"
								/>
								<text
									x="75"
									y="30"
									fill="#68D391"
									text-anchor="middle"
									font-family="Arial"
								>
									PHP
								</text>
								<text
									x="75"
									y="50"
									fill="#A0AEC0"
									text-anchor="middle"
									font-size="12"
								>
									Application Logic
								</text>
								<text
									x="75"
									y="65"
									fill="#A0AEC0"
									text-anchor="middle"
									font-size="12"
								>
									Data Processing
								</text>
							</g>

							<!-- Database Section -->
							<g transform="translate(230, 50)">
								<path
									d="M 0,15 C 0,5 15,0 75,0 C 135,0 150,5 150,15 L 150,65 C 150,75 135,80 75,80 C 15,80 0,75 0,65 Z"
									fill="#4A5568"
								/>
								<path
									d="M 0,15 C 0,25 15,30 75,30 C 135,30 150,25 150,15"
									fill="none"
									stroke="#68D391"
									stroke-width="2"
								/>
								<text
									x="75"
									y="45"
									fill="white"
									text-anchor="middle"
									font-family="Arial"
								>
									Database
								</text>
							</g>
						</g>

						<!-- Database Operations -->
						<g transform="translate(350, 200)">
							<rect
								x="0"
								y="0"
								width="400"
								height="100"
								rx="10"
								fill="#4A5568"
							/>
							<text
								x="200"
								y="30"
								fill="white"
								text-anchor="middle"
								font-family="Arial"
							>
								Common Database Operations
							</text>
							<text
								x="200"
								y="55"
								fill="#A0AEC0"
								text-anchor="middle"
								font-size="12"
							>
								CREATE • READ • UPDATE • DELETE
							</text>
							<text
								x="200"
								y="75"
								fill="#A0AEC0"
								text-anchor="middle"
								font-size="12"
							>
								Store User Data • Process Forms • Manage Content
							</text>
						</g>

						<!-- Arrow Definitions -->
						<defs>
							<marker
								id="arrowhead"
								markerWidth="10"
								markerHeight="7"
								refX="9"
								refY="3.5"
								orient="auto"
							>
								<polygon points="0 0, 10 3.5, 0 7" fill="#68D391" />
							</marker>
						</defs>
					</svg>
				</div>

				<h2>Why Use PHP for Backend Development?</h2>
				<p>
					PHP is a programming language that's specifically designed for
					websites. It's like the Swiss Army knife of web development - it can
					do pretty much anything you need for a website. But why do so many
					developers choose PHP?
				</p>
				<h3>Benefits of PHP:</h3>
				<ul>
					<li>
						<p>
							<strong>Easy to Learn:</strong> PHP is like the friendly neighbor
							of programming languages - it's welcoming to beginners and doesn't
							overwhelm you with complicated rules.
						</p>
					</li>
					<li>
						<p>
							<strong>Super Flexible:</strong> You can use it for simple things
							(like contact forms) or big projects (like Facebook, which started
							with PHP!).
						</p>
					</li>
					<li>
						<p>
							<strong>Plays Well with Databases:</strong> PHP makes it super
							easy to store and fetch data - crucial for any modern website.
						</p>
					</li>
					<li>
						<p>
							<strong>Everywhere You Look:</strong> Ever used WordPress? That's
							built with PHP! In fact, over 75% of websites use PHP in some way.
						</p>
					</li>
				</ul>
				<h2>What's a Database and Why Do You Need One?</h2>
				<p></p>
				<p>
					Imagine your website is a shop. You need somewhere to keep track of
					your products, customer details, and orders, right? That's exactly
					what a database does! It's like a super-organized digital filing
					system that helps your website remember everything it needs to know.
				</p>
				<p>
					The most common type we use with PHP is called a
					<strong>relational database</strong> - think of it like a bunch of
					Excel spreadsheets that can talk to each other. Cool, right?
				</p>
				<h3>Which Database Should You Use?</h3>
				<p>
					Let's keep it simple - here are the most popular options that work
					great with PHP:
				</p>
				<ul>
					<li>
						<p>
							<strong>MySQL:</strong> The most popular choice. It's like the
							Toyota of databases - reliable, easy to use, and gets the job
							done.
						</p>
					</li>
					<li>
						<p>
							<strong>PostgreSQL:</strong> Think of this as the Tesla - packed
							with fancy features if you need them.
						</p>
					</li>
					<li>
						<p>
							<strong>SQLite:</strong> This is like a compact car - perfect for
							small projects and learning.
						</p>
					</li>
				</ul>
				<h2>Making PHP and Databases Work Together</h2>
				<p>
					Ever wondered how PHP talks to a database? They use a special language
					called <strong>SQL</strong> (Structured Query Language). Think of SQL
					as a waiter at a restaurant:
				</p>
				<ul>
					<li><p>You (PHP) tell the waiter (SQL) what you want</p></li>
					<li><p>The waiter goes to the kitchen (database)</p></li>
					<li><p>And brings back exactly what you asked for!</p></li>
				</ul>
				<p>
					Let's look at a simple example. Don't worry if it looks a bit
					confusing at first - we'll break it down step by step:
				</p>
				<div class="code-example">
					<h3>Connecting to a Database with PHP</h3>
					<CodeMirror
						v-model="phpCode"
						:options="{
							mode: 'php',
							theme: 'monokai',
							lineNumbers: true,
							readOnly: true,
							lineWrapping: true,
							viewportMargin: Infinity,
						}"
					/>
				</div>
				<h2>Ready to Try It Yourself?</h2>
				<p></p>
				<p>
					Want to start playing with PHP and databases? Here's your first step:
					Download something called
					<a href="https://www.apachefriends.org/download.html" target="_blank"
						>XAMPP</a
					>
					(or <a href="https://www.mamp.one/" target="_blank">MAMP</a> if you're
					on a Mac). These are like starter kits that give you everything you
					need to build your first dynamic website on your computer. Think of it
					as your own personal web development laboratory!
				</p>
				<p>
					Don't worry about getting everything perfect - the best way to learn
					is by experimenting and trying things out.
				</p>
				<h3 class="sub-title">Let's Wrap This Up!</h3>
				<p></p>
				<p>
					You've just taken your first peek behind the curtain of web
					development! Remember how websites seemed like magic before? Now you
					know there's actually PHP and databases working together to make that
					magic happen.
				</p>
				<p>Here's what we covered:</p>
				<ul>
					<li><p>The backend is like your website's engine room 🚂</p></li>
					<li><p>PHP is your friendly guide into backend development</p></li>
					<li>
						<p>Databases are just super-organized digital filing cabinets</p>
					</li>
					<li>
						<p>
							Together, they help you build websites that actually
							<em>do</em> things!
						</p>
					</li>
				</ul>
				<h3 class="sub-title">What's Next?</h3>
				<p>In future posts, we'll explore more exciting stuff like:</p>
				<ul>
					<li>
						<p>Making your database super secure (like a digital fort!)</p>
					</li>
					<li>
						<p>
							Using cool PHP tools called frameworks (think of them as pre-built
							shortcuts)
						</p>
					</li>
					<li>
						<p>Building real features like user logins and contact forms</p>
					</li>
				</ul>
				<p>
					Remember: Every amazing web developer started exactly where you are
					now. Take it one step at a time, and before you know it, you'll be
					building dynamic websites that you can be proud of!
				</p>
				<div class="call-to-action">
					<p>
						Ready to start coding? Grab XAMPP or MAMP, and let's begin this
						journey together! 💪
					</p>
					<BlogSignup />
				</div>
			</article>
		</div>
	</PostVisibility>
	<PostNavigation :current-path="'backend-programming'" />
</template>

<script>
export const frontmatter = {
	title: 'Introduction to Backend Programming with PHP and Databases',
	date: '2025-03-26', // Future date
	author: 'Helen Burgess',
	image: '/images/posts/backend-programming.svg',
	description:
		'Discover the world of backend development with PHP and databases. Learn how these technologies work together to power dynamic websites.',
	tags: ['PHP', 'Databases', 'Backend', 'Web Development', 'MySQL'],
	status: 'published',
	series: 'Web Fundamentals',
	seriesOrder: 5,
	readingTime: '10 min',
	relatedPosts: ['javascript-basics', 'build-first-web-page'],
};
</script>

<script setup>
import PostVisibility from '@/components/PostVisibility.vue';
import PostNavigation from '@/components/PostNavigation.vue';
import CodeMirror from '@/components/CodeMirror.vue';
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

const phpCode = ref(`<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "my_database";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

// Query to retrieve data
$sql = "SELECT id, name FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
		echo "ID: " . $row["id"] . " - Name: " . $row["name"] . "<br>";
	}
} else {
	echo "No results found";
}

$conn->close();
?>`);

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

.hero {
	background-image: url('/images/posts/backend-programming.svg');
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
	font-size: 2.5rem;
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

.code-example {
	margin: 2rem 0;
	background: var(--color-alabaster);
	border-radius: 8px;
	padding: 1.5rem;
}

.code-example h3 {
	color: var(--color-mine-shaft);
	margin-bottom: 1rem;
}

:deep(.CodeMirror) {
	height: auto;
	border-radius: 4px;
	font-family: 'Fira Code', monospace;
	font-size: 0.9rem;
	line-height: 1.5;
}

:deep(.CodeMirror-scroll) {
	max-height: 400px;
}

/* List styling */
ul,
ol {
	padding-left: 1.5rem;
	margin: 1rem 0;
}

li {
	margin-bottom: 0.5rem;
}

/* Typography */
h2.title {
	color: var(--color-redberry);
	margin: 2rem 0 1rem;
}

h3.sub-title {
	color: var(--color-redberry);
	margin: 1.5rem 0 1rem;
}

strong {
	color: var(--color-redberry);
}

@media (max-width: 768px) {
	.blog-post {
		max-width: 95vw;
		padding: 1rem;
	}

	.hero {
		min-height: 300px;
	}

	.code-example {
		padding: 1rem;
	}

	:deep(.CodeMirror) {
		font-size: 0.8rem;
	}
}

.architecture-diagram {
	margin: 2rem 0;
	padding: 1rem;
	background: var(--color-alabaster);
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
	.architecture-diagram {
		padding: 0.5rem;
	}
}

.call-to-action {
	margin-top: 2rem;
}
</style>
