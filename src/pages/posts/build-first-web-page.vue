<script>
export const frontmatter = {
	title: 'Getting Started with HTML and CSS: Building Your First Web Page',
	date: '2025-01-15',
	author: 'Helen Burgess',
	image: '/images/posts/first-webpage-guide.svg',
	description:
		'Learn how to create your first web page using HTML and CSS. A beginner-friendly guide to web development fundamentals.',
	tags: ['HTML', 'CSS', 'Web Development', 'Beginner', 'Tutorial'],
	status: 'published',
};
</script>

<script setup>
import BlogPost from '../../components/BlogPost.vue';
import Mirror from '../../components/Mirror.vue';
import PostVisibility from '@/components/PostVisibility.vue';
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

// Emit frontmatter to parent layout
const emit = defineEmits(['update:frontmatter']);

onMounted(() => {
	emit('update:frontmatter', frontmatter);
});
</script>

<template>
	<PostVisibility :publish-date="frontmatter.date" :status="frontmatter.status">
		<BlogPost>
			<template #title
				>Getting Started with HTML and CSS: Building Your First Web
				Page</template
			>

			<template #content>
				<p>
					Want to create your own website but don't know where to start? This
					beginner-friendly guide will walk you through creating a simple web
					page using HTML and CSS. By the end of this tutorial, you'll have a
					basic understanding of web development fundamentals and a working
					webpage to show for it!
				</p>

				<h2>Prerequisites:</h2>
				<ul>
					<li>A computer with internet access</li>
					<li>Basic familiarity with using a text editor</li>
					<li>No prior coding experience required</li>
				</ul>

				<p>
					Creating your first web page can be both exciting and rewarding. HTML
					(HyperText Markup Language) forms the structure of a webpage, while
					CSS (Cascading Style Sheets) enhances its visual appearance.
				</p>

				<h2>Step 1: Setting Up Your Project</h2>
				<p>
					Before we begin, you'll need a code editor like VS Code or Sublime
					Text. These tools make writing and organising your HTML and CSS files
					easier. They provide features like syntax highlighting and
					auto-completion that make coding much easier than using a basic text
					editor.
				</p>

				<p>
					Create a new folder on your computer and name it "my-first-website".
					Inside this folder, create two files:
				</p>
				<ul>
					<li>index.html (for the HTML structure)</li>
					<li>style.css (for styling with CSS)</li>
				</ul>

				<h2>Step 2: Writing Your First HTML</h2>
				<p>
					HTML uses tags to structure your content. Each tag serves a specific
					purpose in organizing your webpage. Here's a basic template to get you
					started:
				</p>

				<p>Open index.html in your code editor and add the following code:</p>

				<Mirror lang="html"
					><!DOCTYPE html>
					<html lang="en">
						<head>
							<meta charset="UTF-8" />
							<meta
								name="viewport"
								content="width=device-width, initial-scale=1.0"
							/>
							<title>My First Web Page</title>
							<link rel="stylesheet" href="style.css" />
						</head>
						<body>
							<header>
								<h1>Welcome to My Website</h1>
							</header>
							<main>
								<p>This is my first webpage. I'm learning HTML and CSS!</p>
							</main>
							<footer>
								<p>&copy; 2025 My First Website</p>
							</footer>
						</body>
					</html></Mirror
				>

				<p>Let's break down what each main section does:</p>
				<ul>
					<li>
						The &lt;head&gt; section contains information about your webpage
						that isn't visible to users
					</li>
					<li>The &lt;body&gt; section contains all the visible content</li>
					<li>
						&lt;header&gt;, &lt;main&gt;, and &lt;footer&gt; are semantic tags
						that help organize your content in a meaningful way
					</li>
					<li>&lt;h1&gt; is the most important heading on your page</li>
					<li>&lt;p&gt; tags contain paragraph text</li>
				</ul>

				<h2>Step 3: Adding CSS for Styling</h2>
				<p>
					Now, let's make the page look better by adding styles in style.css.
					CSS uses selectors to target HTML elements and properties to define
					their appearance:
				</p>

				<Mirror lang="css"
					>/* Basic reset and body styles */ body { font-family: Arial,
					sans-serif; margin: 0; padding: 0; text-align: center;
					background-color: #f4f4f4; } /* Header styling */ header { background:
					#333; color: white; padding: 20px; } /* Main content area styling */
					main { margin: 20px; padding: 20px; background: white; border-radius:
					5px; } /* Footer styling */ footer { margin-top: 20px; padding: 10px;
					background: #222; color: white; }</Mirror
				>

				<h2>Understanding CSS Properties:</h2>
				<ul>
					<li>
						font-family: Specifies what fonts to use, with fallbacks after the
						comma
					</li>
					<li>margin: Controls space outside an element</li>
					<li>padding: Controls space inside an element</li>
					<li>
						background-color/background: Sets the background color (can use
						color names, hex codes, or RGB values)
					</li>
					<li>color: Sets the text color</li>
					<li>border-radius: Rounds the corners of an element</li>
					<li>text-align: Controls how text is aligned within an element</li>
				</ul>

				<h2>Common Issues and Troubleshooting</h2>
				<ul>
					<li>
						If your styles aren't appearing, make sure your CSS file is in the
						same folder as your HTML file
					</li>
					<li>Check that the file names match exactly in your link tag</li>
					<li>
						Verify that all your CSS curly braces {} and semicolons ; are in
						place
					</li>
					<li>
						Use your browser's developer tools (F12) to inspect elements and
						debug issues
					</li>
				</ul>

				<h2>Try These Modifications!</h2>
				<p>
					Now that you have a basic page, try these simple changes to practice:
				</p>
				<ul>
					<li>Change the background color to your favorite color</li>
					<li>Add a new paragraph in the main section</li>
					<li>Modify the header text to say something different</li>
					<li>Try adding an image using the &lt;img&gt; tag</li>
				</ul>

				<h2>Next Steps</h2>
				<p>
					Congratulations! You've built your first web page using HTML and CSS.
				</p>

				<p>You've learned about:</p>
				<ul>
					<li>Basic HTML structure</li>
					<li>CSS styling fundamentals</li>
					<li>File organization</li>
					<li>How to view your page in a browser</li>
				</ul>

				<p>Ready for More?</p>
				<ul>
					<li>Learn about responsive design</li>
					<li>Explore JavaScript basics</li>
					<li>Discover CSS flexbox and grid</li>
					<li>Start building more complex layouts</li>
				</ul>

				<p>
					If you have any questions, drop an email or join our community! Happy
					coding! 🎉
				</p>
			</template>
		</BlogPost>
	</PostVisibility>
</template>
