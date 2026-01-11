<template>
	<div class="container section">
		<div class="content tutorial-content">
			<!-- Breadcrumb -->
			<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/"
						><i class="fa-solid fa-house mr-2"></i> Home</router-link
					>
				</li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link to="/tutorials/beginner/html-basics/">HTML Basics</router-link>
				</li>
				<li class="is-active">
					<a href="#" aria-current="page">Document Structure</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">20 minutes</span>
			<span class="tag is-success">Theory</span>
			<span class="tag is-primary">Practice</span>
		</div>

		<h1 class="title is-1">
			<i class="fab fa-html5 html-icon"></i> HTML Document Structure
		</h1>

		<!-- Hunter Element 1: Anticipatory Set -->
		<AnticipatorySet
			title="🏛️ Building the Foundation"
			:hook="`<p>Think of HTML structure like building a house. You need a solid foundation, walls that make sense, and rooms organized logically. The same goes for web pages—proper structure is invisible but absolutely essential.</p>
			<p><strong>Here's why this matters:</strong> Google and other search engines rely heavily on document structure to understand and rank your content. Screen readers use it to help blind users navigate. Poor structure = poor SEO + poor accessibility.</p>`"
			:reflection-prompts="[
				'Have you noticed that well-organized websites are easier to navigate?',
				'Why do some websites rank higher in Google search results?',
				'How do blind users navigate websites without seeing them?'
			]"
			connection="In this tutorial, you'll learn to build properly structured HTML documents that work beautifully for humans, search engines, and assistive technologies."
		/>

		<!-- Hunter Element 2: Learning Objectives -->
		<LearningObjectives
			:objectives="[
				'Create a properly structured HTML document with all required elements',
				'Use semantic HTML elements to organize content meaningfully',
				'Implement important metadata in the head section for SEO',
				'Build accessible and SEO-friendly page structures',
				'Apply common layout patterns using semantic HTML',
				'Use heading hierarchy to create clear document outlines',
				'Implement WAI-ARIA roles for improved accessibility'
			]"
			purpose="Document structure is the invisible skeleton that holds everything together. Master this and your websites will be more accessible, rank better in search engines, and be easier to maintain. This is professional-level web development."
		/>

		<!-- 2. Document Structure Diagram -->
		<div class="box mt-6">
			<h2 class="title is-3">Building a Proper HTML Document</h2>
			<p>
				Every HTML page needs a proper structure to work correctly. Let's
				visualize how different elements work together to create a complete
				webpage:
			</p>

			<div class="webpage-diagram mt-4">
				<svg width="600" height="400" viewBox="0 0 600 400">
					<!-- Browser Window Frame -->
					<rect
						x="10"
						y="10"
						width="580"
						height="380"
						fill="#f5f5f5"
						stroke="#666"
						stroke-width="2"
					/>

					<!-- Browser Tab Bar -->
					<rect
						x="10"
						y="10"
						width="580"
						height="30"
						fill="#e8e8e8"
						stroke="#666"
						stroke-width="2"
					/>
					<text x="30" y="30" fill="#333" font-family="Arial" font-size="14">
						My Web Page - Browser Tab (
						<tspan fill="#0066cc">&lt;title&gt;</tspan>
						)
					</text>

					<!-- Content Area with Labels -->
					<g>
						<!-- Header Area -->
						<rect
							x="20"
							y="50"
							width="560"
							height="80"
							fill="#FFE0B2"
							stroke="#FB8C00"
							stroke-width="2"
						/>
						<text x="30" y="70" fill="#333" font-family="Arial" font-size="14">
							&lt;header&gt;
						</text>

						<!-- Navigation -->
						<rect
							x="30"
							y="80"
							width="540"
							height="40"
							fill="#FFCCBC"
							stroke="#FF5722"
							stroke-width="2"
						/>
						<text x="40" y="105" fill="#333" font-family="Arial" font-size="14">
							&lt;nav&gt;
						</text>

						<!-- Main Content Area -->
						<rect
							x="20"
							y="140"
							width="560"
							height="200"
							fill="#C8E6C9"
							stroke="#4CAF50"
							stroke-width="2"
						/>
						<text x="30" y="160" fill="#333" font-family="Arial" font-size="14">
							&lt;main&gt;
						</text>

						<!-- Article within Main -->
						<rect
							x="40"
							y="170"
							width="520"
							height="100"
							fill="#B3E5FC"
							stroke="#03A9F4"
							stroke-width="2"
						/>
						<text x="50" y="190" fill="#333" font-family="Arial" font-size="14">
							&lt;article&gt;
						</text>

						<!-- Aside -->
						<rect
							x="40"
							y="280"
							width="520"
							height="50"
							fill="#E1BEE7"
							stroke="#9C27B0"
							stroke-width="2"
						/>
						<text x="50" y="300" fill="#333" font-family="Arial" font-size="14">
							&lt;aside&gt;
						</text>

						<!-- Footer -->
						<rect
							x="20"
							y="350"
							width="560"
							height="30"
							fill="#FFE0B2"
							stroke="#FB8C00"
							stroke-width="2"
						/>
						<text x="30" y="370" fill="#333" font-family="Arial" font-size="14">
							&lt;footer&gt;
						</text>
					</g>

					<!-- Move Labels to the side and add background -->
					<g transform="translate(420, 50)">
						<!-- Semi-transparent background for legend -->
						<rect
							x="0"
							y="0"
							width="150"
							height="170"
							fill="white"
							fill-opacity="0.9"
							stroke="#666"
							stroke-width="1"
							rx="4"
						/>

						<!-- Legend title -->
						<text
							x="10"
							y="20"
							fill="#333"
							font-family="Arial"
							font-weight="bold"
							font-size="12"
						>
							Page Structure
						</text>

						<!-- Legend items with more spacing -->
						<g transform="translate(10, 35)">
							<circle cx="10" cy="0" r="5" fill="#FB8C00" />
							<text x="25" y="5" fill="#333" font-family="Arial" font-size="12">
								Header
							</text>

							<circle cx="10" cy="25" r="5" fill="#FF5722" />
							<text
								x="25"
								y="30"
								fill="#333"
								font-family="Arial"
								font-size="12"
							>
								Navigation
							</text>

							<circle cx="10" cy="50" r="5" fill="#4CAF50" />
							<text
								x="25"
								y="55"
								fill="#333"
								font-family="Arial"
								font-size="12"
							>
								Main Content
							</text>

							<circle cx="10" cy="75" r="5" fill="#03A9F4" />
							<text
								x="25"
								y="80"
								fill="#333"
								font-family="Arial"
								font-size="12"
							>
								Article
							</text>

							<circle cx="10" cy="100" r="5" fill="#9C27B0" />
							<text
								x="25"
								y="105"
								fill="#333"
								font-family="Arial"
								font-size="12"
							>
								Aside
							</text>

							<circle cx="10" cy="125" r="5" fill="#FB8C00" />
							<text
								x="25"
								y="130"
								fill="#333"
								font-family="Arial"
								font-size="12"
							>
								Footer
							</text>
						</g>
					</g>
				</svg>

				<div class="notification is-info is-light mt-4">
					<p>
						<strong>Note:</strong> This diagram shows how semantic HTML elements
						create a structured webpage. Each element has a specific purpose and
						helps organize your content logically.
					</p>
				</div>
			</div>

			<p class="mt-4">
				Now that we understand the visual structure of a webpage, let's explore
				how to set up the technical foundation with proper metadata.
			</p>
		</div>

		<!-- 3. Essential Metadata -->
		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-code section-icon"></i> Essential Metadata
			</h2>

			<div class="notification is-info is-light">
				<p>
					<i class="fas fa-backward mr-2"></i> In
					<router-link to="/tutorials/beginner/html-basics/html-first-page"
						>Your First HTML Page</router-link
					>, we learned about the basic HTML structure and essential meta tags.
					Now, let's dive deeper into metadata and explore additional tags that
					make our pages more powerful.
				</p>
			</div>

			<p>
				The <code>&lt;head&gt;</code> section contains crucial information that
				enhances your webpage's functionality, searchability, and social media
				presence:
			</p>

			<div class="tutorial-card mt-4">
				<h3 class="title is-4">Beyond the Basics: Advanced Metadata</h3>
				<p>
					Building on our previous knowledge, let's explore additional metadata
					that can improve our pages:
				</p>

				<h3 class="title is-4 mt-5">SEO and Social Media Metadata</h3>
				<CodeMirror v-model="metadataAdvanced" :readonly="true" :height="250" />

				<!-- Interactive Metadata Builder -->
				<div class="box mt-4">
					<h4 class="title is-5">Try It: Metadata Builder</h4>
					<div class="field">
						<label class="label">Page Title</label>
						<div class="control">
							<input
								v-model="metaTitle"
								class="input"
								type="text"
								placeholder="Enter your page title"
							/>
						</div>
					</div>
					<div class="field">
						<label class="label">Description</label>
						<div class="control">
							<textarea
								v-model="metaDescription"
								class="textarea"
								placeholder="Enter page description"
							></textarea>
						</div>
					</div>
					<div class="field">
						<label class="label">Keywords</label>
						<div class="control">
							<input
								v-model="metaKeywords"
								class="input"
								type="text"
								placeholder="Enter keywords, separated by commas"
							/>
						</div>
					</div>

					<div class="notification is-light mt-4">
						<h5 class="title is-6">Generated Metadata:</h5>
						<CodeMirror
							v-model="generatedMetadata"
							:readonly="true"
							:height="200"
						/>
					</div>
				</div>
			</div>

			<p class="mt-4">
				With our metadata properly configured, we can now focus on structuring
				our visible content using semantic HTML elements.
			</p>
		</div>

		<!-- 4. Semantic HTML -->
		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-puzzle-piece section-icon"></i> Semantic HTML
			</h2>
			<p>
				Semantic HTML gives meaning to our content structure, making it more
				accessible and easier to maintain. Let's explore the key elements:
			</p>

			<div class="tutorial-card mt-4">
				<h3 class="title is-4">Common Semantic Elements</h3>
				<CodeMirror v-model="semanticExample" :readonly="true" :height="200" />

				<div class="notification is-info is-light mt-4">
					<h4 class="title is-5">Benefits of Semantic HTML:</h4>
					<ul>
						<li>
							<strong>Accessibility:</strong> Screen readers can better
							understand the content
						</li>
						<li>
							<strong>SEO:</strong> Search engines better understand your
							content
						</li>
						<li>
							<strong>Maintainability:</strong> Code is easier to read and
							understand
						</li>
					</ul>
				</div>
			</div>

			<p class="mt-4">
				Now that we understand semantic elements, let's look at common ways to
				combine them into full page layouts.
			</p>
		</div>

		<!-- 5. Common Page Layouts -->
		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-columns section-icon"></i> Common Page Layouts
			</h2>

			<p>
				These patterns represent tried-and-tested ways to structure different
				types of webpages. While we'll focus on HTML structure now, these
				layouts become even more powerful when we add CSS.
			</p>

			<div class="tutorial-card">
				<!-- Layout Patterns Section -->
				<div class="notification is-info is-light mt-4">
					<h4 class="title is-5">
						<i class="fas fa-book section-icon"></i> Layout Patterns
					</h4>
					<p>
						The book "Every Layout" by Andy Bell and Heydon Pickering introduces
						several fundamental layout patterns that we'll encounter throughout
						our web development journey. Here are the key layouts you'll work
						with:
					</p>

					<div class="columns is-multiline mt-4">
						<div class="column is-one-third">
							<h5 class="title is-6">Basic Patterns</h5>
							<ul>
								<li>
									<strong>The Stack</strong> - Vertical spacing between elements
								</li>
								<li>
									<strong>The Box</strong> - Contained content with padding
								</li>
								<li>
									<strong>The Center</strong> - Horizontally centered content
								</li>
							</ul>
						</div>

						<div class="column is-one-third">
							<h5 class="title is-6">Common Structures</h5>
							<ul>
								<li><strong>The Cluster</strong> - Groups of related items</li>
								<li><strong>The Sidebar</strong> - Main + aside content</li>
								<li><strong>The Grid</strong> - Regular grid layouts</li>
							</ul>
						</div>

						<div class="column is-one-third">
							<h5 class="title is-6">Advanced Patterns</h5>
							<ul>
								<li><strong>The Cover</strong> - Full-viewport layouts</li>
								<li><strong>The Frame</strong> - Fixed-ratio containers</li>
								<li><strong>The Reel</strong> - Horizontal scrolling</li>
							</ul>
						</div>
					</div>

					<div class="mt-4">
						<p><strong>Additional Patterns:</strong></p>
						<ul>
							<li>
								<strong>The Switcher</strong> - Responsive column arrangements
							</li>
							<li><strong>The Imposter</strong> - Overlaid content</li>
							<li><strong>The Icon</strong> - Icon management</li>
							<li><strong>The Container</strong> - Content width management</li>
						</ul>
					</div>

					<p class="mt-4">
						<small
							>Reference:
							<a href="https://every-layout.dev/" target="_blank" rel="noopener"
								>Every Layout</a
							>
							by Andy Bell and Heydon Pickering</small
						>
					</p>
				</div>

				<!-- Visual Layout Diagrams -->
				<h4 class="title is-4 mt-5">Visual Guide to Layout Patterns</h4>
				<p>Here's how these layout patterns look visually:</p>

				<!-- SVG Diagrams -->

				<!-- Add this after the layout descriptions -->
				<div class="layout-diagrams mt-4">
					<div class="columns is-multiline">
						<!-- The Stack -->
						<div class="column is-one-third">
							<div class="box">
								<h6 class="title is-6">The Stack</h6>
								<svg width="200" height="150" viewBox="0 0 200 150">
									<rect
										x="20"
										y="10"
										width="160"
										height="30"
										fill="#E3F2FD"
										stroke="#2196F3"
										stroke-width="2"
									/>
									<rect
										x="20"
										y="60"
										width="160"
										height="30"
										fill="#E3F2FD"
										stroke="#2196F3"
										stroke-width="2"
									/>
									<rect
										x="20"
										y="110"
										width="160"
										height="30"
										fill="#E3F2FD"
										stroke="#2196F3"
										stroke-width="2"
									/>
									<!-- Spacing indicators -->
									<line
										x1="100"
										y1="40"
										x2="100"
										y2="60"
										stroke="#666"
										stroke-dasharray="4"
									/>
									<line
										x1="100"
										y1="90"
										x2="100"
										y2="110"
										stroke="#666"
										stroke-dasharray="4"
									/>
								</svg>
							</div>
						</div>

						<!-- The Box -->
						<div class="column is-one-third">
							<div class="box">
								<h6 class="title is-6">The Box</h6>
								<svg width="200" height="150" viewBox="0 0 200 150">
									<rect
										x="20"
										y="10"
										width="160"
										height="130"
										fill="#F5F5F5"
										stroke="#666"
										stroke-width="2"
									/>
									<rect
										x="35"
										y="25"
										width="130"
										height="100"
										fill="#E8F5E9"
										stroke="#4CAF50"
										stroke-width="2"
									/>
									<!-- Padding indicators -->
									<line
										x1="20"
										y1="75"
										x2="35"
										y2="75"
										stroke="#666"
										stroke-dasharray="4"
									/>
									<line
										x1="165"
										y1="75"
										x2="180"
										y2="75"
										stroke="#666"
										stroke-dasharray="4"
									/>
								</svg>
							</div>
						</div>

						<!-- The Center -->
						<div class="column is-one-third">
							<div class="box">
								<h6 class="title is-6">The Center</h6>
								<svg width="200" height="150" viewBox="0 0 200 150">
									<rect
										x="20"
										y="10"
										width="160"
										height="130"
										fill="#F5F5F5"
										stroke="#666"
										stroke-width="2"
									/>
									<rect
										x="60"
										y="50"
										width="80"
										height="50"
										fill="#FFE0B2"
										stroke="#FF9800"
										stroke-width="2"
									/>
									<!-- Center indicators -->
									<line
										x1="20"
										y1="75"
										x2="60"
										y2="75"
										stroke="#666"
										stroke-dasharray="4"
									/>
									<line
										x1="140"
										y1="75"
										x2="180"
										y2="75"
										stroke="#666"
										stroke-dasharray="4"
									/>
								</svg>
							</div>
						</div>

						<!-- The Cluster -->
						<div class="column is-one-third">
							<div class="box">
								<h6 class="title is-6">The Cluster</h6>
								<svg width="200" height="150" viewBox="0 0 200 150">
									<rect
										x="20"
										y="20"
										width="50"
										height="30"
										fill="#E1BEE7"
										stroke="#9C27B0"
										stroke-width="2"
									/>
									<rect
										x="80"
										y="20"
										width="40"
										height="30"
										fill="#E1BEE7"
										stroke="#9C27B0"
										stroke-width="2"
									/>
									<rect
										x="130"
										y="20"
										width="45"
										height="30"
										fill="#E1BEE7"
										stroke="#9C27B0"
										stroke-width="2"
									/>
									<rect
										x="40"
										y="60"
										width="55"
										height="30"
										fill="#E1BEE7"
										stroke="#9C27B0"
										stroke-width="2"
									/>
									<rect
									x="105"
										y="60"
										width="50"
										height="30"
										fill="#E1BEE7"
										stroke="#9C27B0"
										stroke-width="2"
									/>
								</svg>
							</div>
						</div>

						<!-- The Sidebar -->
						<div class="column is-one-third">
							<div class="box">
								<h6 class="title is-6">The Sidebar</h6>
								<svg width="200" height="150" viewBox="0 0 200 150">
									<rect
										x="20"
										y="10"
										width="50"
										height="130"
										fill="#FFCDD2"
										stroke="#F44336"
										stroke-width="2"
									/>
									<rect
										x="80"
										y="10"
										width="100"
										height="130"
										fill="#C8E6C9"
										stroke="#4CAF50"
										stroke-width="2"
									/>
								</svg>
							</div>
						</div>

						<!-- The Grid -->
						<div class="column is-one-third">
							<div class="box">
								<h6 class="title is-6">The Grid</h6>
								<svg width="200" height="150" viewBox="0 0 200 150">
									<rect
										x="20"
										y="10"
										width="45"
										height="45"
										fill="#B3E5FC"
										stroke="#03A9F4"
										stroke-width="2"
									/>
									<rect
										x="75"
										y="10"
										width="45"
										height="45"
										fill="#B3E5FC"
										stroke="#03A9F4"
										stroke-width="2"
									/>
									<rect
										x="130"
										y="10"
										width="45"
										height="45"
										fill="#B3E5FC"
										stroke="#03A9F4"
										stroke-width="2"
									/>
									<rect
										x="20"
										y="65"
										width="45"
										height="45"
										fill="#B3E5FC"
										stroke="#03A9F4"
										stroke-width="2"
									/>
									<rect
										x="75"
										y="65"
										width="45"
										height="45"
										fill="#B3E5FC"
										stroke="#03A9F4"
										stroke-width="2"
									/>
									<rect
										x="130"
										y="65"
										width="45"
										height="45"
										fill="#B3E5FC"
										stroke="#03A9F4"
										stroke-width="2"
									/>
								</svg>
							</div>
						</div>

						<!-- The Cover -->
						<div class="column is-one-third">
							<div class="box">
								<h6 class="title is-6">The Cover</h6>
								<svg width="200" height="150" viewBox="0 0 200 150">
									<rect
										x="20"
										y="10"
										width="160"
										height="30"
										fill="#FFE0B2"
										stroke="#FF9800"
										stroke-width="2"
									/>
									<rect
										x="20"
										y="50"
										width="160"
										height="50"
										fill="#FFECB3"
										stroke="#FFC107"
										stroke-width="2"
									/>
									<rect
										x="20"
										y="110"
										width="160"
										height="30"
										fill="#FFE0B2"
										stroke="#FF9800"
										stroke-width="2"
									/>
								</svg>
							</div>
						</div>

						<!-- The Frame -->
						<div class="column is-one-third">
							<div class="box">
								<h6 class="title is-6">The Frame</h6>
								<svg width="200" height="150" viewBox="0 0 200 150">
									<rect
										x="20"
										y="10"
										width="160"
										height="130"
										fill="#F5F5F5"
										stroke="#666"
										stroke-width="2"
									/>
									<rect
										x="35"
										y="25"
										width="130"
										height="100"
										fill="#DCEDC8"
										stroke="#8BC34A"
										stroke-width="2"
									/>
									<line
										x1="35"
										y1="75"
										x2="165"
										y2="75"
										stroke="#8BC34A"
										stroke-dasharray="4"
									/>
									<line
										x1="100"
										y1="25"
										x2="100"
										y2="125"
										stroke="#8BC34A"
										stroke-dasharray="4"
									/>
								</svg>
							</div>
						</div>

						<!-- The Reel -->
						<div class="column is-one-third">
							<div class="box">
								<h6 class="title is-6">The Reel</h6>
								<svg width="200" height="150" viewBox="0 0 200 150">
									<rect
										x="20"
										y="40"
										width="45"
										height="70"
										fill="#E1BEE7"
										stroke="#9C27B0"
										stroke-width="2"
									/>
									<rect
										x="75"
										y="40"
										width="45"
										height="70"
										fill="#E1BEE7"
										stroke="#9C27B0"
										stroke-width="2"
									/>
									<rect
										x="130"
										y="40"
										width="45"
										height="70"
										fill="#E1BEE7"
										stroke="#9C27B0"
										stroke-width="2"
									/>
									<line
										x1="180"
										y1="75"
										x2="195"
										y2="75"
										stroke="#666"
										stroke-width="2"
										marker-end="url(#arrow)"
									/>
									<!-- Arrow marker definition -->
									<defs>
										<marker
											id="arrow"
											markerWidth="10"
											markerHeight="10"
											refX="9"
											refY="5"
											orient="auto"
										>
											<path d="M0,0 L10,5 L0,10 z" fill="#666" />
										</marker>
									</defs>
								</svg>
							</div>
						</div>
					</div>

					<div class="notification is-info is-light mt-4">
						<p>
							<strong>Note:</strong> These diagrams show the basic concept of
							each layout pattern. The actual implementation will use CSS to
							achieve these layouts while maintaining semantic HTML structure.
						</p>
					</div>
				</div>

				<!-- Example Section -->
				<h3 class="title is-4 mt-5">
					Example: Blog Layout Using Common Patterns
				</h3>
				<p>This example combines several layout patterns:</p>
				<CodeMirror v-model="blogLayout" :readonly="true" :height="300" />

				<div class="notification is-warning is-light mt-4">
					<p>
						<strong>Note:</strong> While we're focusing on HTML structure now,
						these layouts will become more meaningful when we learn CSS. The
						semantic HTML structure we create here will provide a solid
						foundation for implementing these layout patterns.
					</p>
				</div>
			</div>
		</div>

		<!-- Hunter Element: Checkpoint -->
		<CheckpointBox
			:questions="checkpointQuestions"
		/>

		<!-- Add this section before the practice projects -->
		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-exclamation-triangle section-icon"></i> Common Mistakes
				to Avoid
			</h2>

			<div class="tutorial-card">
				<h3 class="title is-4">Document Structure Mistakes</h3>
				<div class="columns">
					<div class="column">
						<div class="notification is-danger is-light">
							<h4 class="title is-5">❌ Wrong</h4>
							<pre
								class="wrong-code-block"
							><code>&lt;title&gt;My Page&lt;/title&gt;
&lt;body&gt;
&lt;H1&gt;Welcome To My Page!!!&lt;/h1&gt;
&lt;IMG SRC="LOGO.PNG"&gt;
&lt;p&gt;This is my website
&lt;br&gt;
&lt;br&gt;
This is a new line
&lt;div&gt;This is inside a div
&lt;/body&gt;</code></pre>
							<div class="mt-3">
								<p><strong>Problems with this code:</strong></p>
								<ul class="ml-5">
									<li>Missing DOCTYPE declaration</li>
									<li>No html or head elements</li>
									<li>Inconsistent capitalization (H1, IMG)</li>
									<li>Unclosed tags</li>
									<li>Missing alt attribute</li>
									<li>Improper line breaks</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="column">
						<div class="notification is-success is-light">
							<h4 class="title is-5">✅ Correct</h4>
							<CodeMirror
								v-model="correctStructure"
								:readonly="true"
								:height="200"
								language="html"
							/>
						</div>
					</div>
				</div>

				<div class="notification is-warning is-light mt-4">
					<h4 class="title is-5">Common HTML Structure Mistakes:</h4>
					<ul>
						<li>
							<strong>Missing DOCTYPE:</strong> Always include
							<!DOCTYPE html> at the start
						</li>
						<li>
							<strong>Incorrect nesting:</strong> Elements must be properly
							nested and closed
						</li>
						<li>
							<strong
								>Multiple <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>,
								or <code>&lt;body&gt;</code> tags:</strong
							>
							These should only appear once
						</li>
						<li>
							<strong>Missing required meta tags:</strong> charset and viewport
							are essential
						</li>
						<li>
							<strong>No language attribute:</strong> Always include lang
							attribute in the html tag
						</li>
					</ul>
				</div>

				<h3 class="title is-4 mt-5">File Organization Mistakes</h3>
				<div class="notification is-warning is-light">
					<h4 class="title is-5">Common File Structure Mistakes:</h4>
					<ul>
						<li>
							<strong>Using spaces in filenames:</strong> Use hyphens instead
							(bad: "about us.html", good: "about-us.html")
						</li>
						<li>
							<strong>Inconsistent capitalization:</strong> Keep all filenames
							lowercase
						</li>
						<li>
							<strong>Mixing file locations:</strong> Keep similar files
							together in appropriate folders
						</li>
						<li>
							<strong>Poor image naming:</strong> Use descriptive names (bad:
							"img1.jpg", good: "hero-banner.jpg")
						</li>
						<li>
							<strong>Incorrect file paths:</strong> Double-check all relative
							paths in your links and images
						</li>
					</ul>
				</div>

				<h3 class="title is-4 mt-5">Path Reference Mistakes</h3>
				<div class="notification is-info is-light mb-4">
					<p>
						<i class="fas fa-link mr-2"></i> For a complete guide on working
						with file paths, check out the
						<router-link to="/tutorials/beginner/html-basics/html-links"
							>HTML Links and Navigation</router-link
						>
						tutorial, where we cover absolute paths, relative paths, and best
						practices for linking files in detail.
					</p>
				</div>

				<div class="columns">
					<div class="column">
						<div class="notification is-danger is-light">
							<h4 class="title is-5">❌ Wrong Path Usage</h4>
							<pre
								class="wrong-code-block"
							><code>&lt;img src="C:\Users\Me\Pictures\logo.png"&gt;
&lt;img src="../../../../../../images/photo.jpg"&gt;
&lt;a href="ABOUT.HTML"&gt;About Us&lt;/a&gt;
&lt;img src="my photo.jpg"&gt;</code></pre>
						</div>
					</div>
					<div class="column">
						<div class="notification is-success is-light">
							<h4 class="title is-5">✅ Correct Path Usage</h4>
							<CodeMirror
								v-model="correctPaths"
								:readonly="true"
								:height="150"
								language="html"
							/>
						</div>
					</div>
				</div>

				<div class="notification is-warning is-light mt-3">
					<p><strong>Quick Path Tips:</strong></p>
					<ul>
						<li>Use relative paths within your project</li>
						<li>Avoid absolute file system paths</li>
						<li>Keep file names lowercase and use hyphens instead of spaces</li>
						<li>Double-check folder depth in relative paths</li>
					</ul>
					<p class="mt-2">
						<small
							>See the
							<router-link to="/tutorials/beginner/html-basics/html-links"
								>HTML Links tutorial</router-link
							>
							for more detailed path examples and best practices.</small
						>
					</p>
				</div>
			</div>
		</div>

		<!-- 6. Practice Projects -->
		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-utensils section-icon"></i> Project: Black Swan Bistro
			</h2>
			<p>
				Let's apply what we've learned to improve our bistro website. This
				project will incorporate proper metadata, semantic HTML, and a clear
				content structure:
			</p>

			<CodeMirror v-model="bistroExample" :height="500" />

			<div class="notification is-warning is-light mt-4">
				<h4 class="title is-5">Try it yourself:</h4>
				<ul>
					<li>Convert your bistro page to use semantic HTML</li>
					<li>Add appropriate sections for different content types</li>
					<li>Include proper time and address elements</li>
					<li>Create a navigation structure</li>
				</ul>
			</div>

			<p class="mt-4">
				Ready for a bigger challenge? Let's try creating a more complex website
				structure.
			</p>
		</div>

		<!-- Extension Project -->
		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-star section-icon"></i> Extension Project: Rotto Rocks
			</h2>
			<p>
				Now that you've mastered the basics with the Black Swan Bistro, let's
				create a multi-page website for Rottnest Island!
			</p>

			<div class="tutorial-card">
				<h3 class="title is-4">Project Requirements</h3>
				<ul>
					<li><strong>Home Page</strong> - Welcome section, featured images</li>
					<li>
						<strong>Activities Page</strong> - List of activities with images
					</li>
					<li><strong>Accommodation Page</strong> - Lodging options</li>
					<li><strong>Getting There</strong> - Transport information</li>
				</ul>

				<CodeMirror v-model="rottoExample" :readonly="true" :height="400" />
			</div>
		</div>

		<!-- Add this section after metadata but before semantic HTML -->
		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-folder-tree section-icon"></i> Organizing Your Website
				Files
			</h2>

			<p>
				Before we continue building our websites, let's set up a proper file
				structure. Good organization makes your projects easier to manage and
				maintain.
			</p>

			<div class="tutorial-card">
				<h3 class="title is-4">Basic Project Structure</h3>
				<CodeMirror
					v-model="fileStructure"
					:readonly="true"
					:height="200"
					language="plaintext"
				/>

				<div class="notification is-info is-light mt-4">
					<h4 class="title is-5">File Organization Tips:</h4>
					<ul>
						<li>
							<strong>Root folder:</strong> Create a main project folder (e.g.,
							"black-swan-bistro" or "rotto-rocks")
						</li>
						<li>
							<strong>HTML files:</strong> Place in the root folder with clear
							names (index.html, about.html, etc.)
						</li>
						<li>
							<strong>Assets:</strong> Organize in subfolders by type (images,
							css, js)
						</li>
						<li>
							<strong>Images:</strong> Use descriptive filenames
							(hero-image.jpg, menu-banner.png)
						</li>
						<li>
							<strong>Consistency:</strong> Use lowercase letters and hyphens
							for spaces in filenames
						</li>
					</ul>
				</div>

				<h3 class="title is-4">Example Project Structures</h3>
				<div class="columns">
					<div class="column is-half">
						<h4 class="title is-5">Black Swan Bistro</h4>
						<CodeMirror
							v-model="bistroStructure"
							:readonly="true"
							:height="250"
							language="plaintext"
						/>
					</div>
					<div class="column is-half">
						<h4 class="title is-5">Rotto Rocks</h4>
						<CodeMirror
							v-model="rottoStructure"
							:readonly="true"
							:height="250"
							language="plaintext"
						/>
					</div>
				</div>

				<div class="notification is-warning is-light mt-4">
					<p>
						<strong>Important:</strong> Setting up your file structure correctly
						now will make it easier to:
					</p>
					<ul>
						<li>Link between pages</li>
						<li>Reference images and other assets</li>
						<li>Add CSS and JavaScript files later</li>
						<li>Share or deploy your website</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Hunter Element: Closure -->
		<ClosureSection
			:key-takeaways="closureKeyTakeaways"
			:objectives="closureObjectives"
			:reflection-prompts="closureReflectionPrompts"
			real-world-application="<p>Professional websites rely on proper document structure for SEO, accessibility, and maintainability. Major sites like The New York Times, GitHub, and Medium use semantic HTML to organize content hierarchically, making it easy for both users and search engines to understand.</p><p>Proper structure also makes it easier for teams to collaborate on code. When structure follows semantic conventions, new developers can quickly understand how a page is organized without reading every line of code. This reduces bugs, speeds up development, and creates more maintainable projects.</p>"
			next-steps="<p>Now that you understand proper HTML document structure, you're ready to learn Emmet—a powerful toolkit that helps you write HTML faster using shortcuts and abbreviations. Emmet will dramatically speed up your workflow while reinforcing the HTML patterns you've learned.</p><p>After mastering Emmet, you'll have completed the HTML Basics series and be ready to move into CSS, where you'll learn to style and lay out the semantic HTML structures you've been creating.</p>"
		/>

		<!-- Add recommendations before the quiz -->
		<TutorialRecommendations :current-path="'/tutorials/beginner/html-basics/html-doc-structure'" />

		<!-- Add quiz before the completion section -->
		<TutorialQuiz />

		<!-- Completion Section -->
		<div class="completion-section mt-6">
			<h2 class="title is-3">
				<i class="fas fa-check-circle section-icon"></i> Congratulations!
			</h2>
			<p>
				You've completed the HTML Document Structure tutorial. Keep practicing
				and you'll continue to improve your skills.
			</p>
		</div>

		<TutorialNavigation class="mt-6" />
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, inject, computed } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialNavigation from '@/components/TutorialNavigation.vue';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

const checkpointQuestions = [
	{
		question:
			'What is the purpose of semantic HTML5 elements like <header>, <nav>, <main>, and <footer>?',
		answer:
			'Semantic elements give meaning to content structure, making pages more accessible to screen readers, improving SEO, and creating more maintainable code. They describe the role and purpose of content sections rather than just visual presentation.',
	},
	{
		question: 'Why should every HTML page have only one <main> element?',
		answer:
			'The <main> element identifies the primary content of a document. Having only one <main> helps assistive technologies skip directly to the main content and clearly defines what the page is about, which benefits both users and search engines.',
	},
	{
		question: 'What is the difference between <article> and <section>?',
		answer:
			"<article> represents self-contained, independently distributable content (like blog posts or news articles). <section> groups related content together but isn't independently meaningful. An article could contain sections, and a section could contain articles.",
	},
	{
		question: 'How does proper document structure benefit accessibility?',
		answer:
			'Proper structure with semantic elements, landmarks, headings hierarchy, and ARIA labels allows screen readers to create a page outline, enables keyboard navigation shortcuts, and helps users understand and navigate content efficiently without seeing the visual layout.',
	},
];

const closureKeyTakeaways = [
	'Semantic HTML5 elements like <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> give meaning to page structure',
	'The <head> contains metadata (title, meta tags, links to CSS/JS) while <body> contains visible content',
	'Proper heading hierarchy (h1-h6) creates document outlines for accessibility and SEO',
	"ARIA landmarks and labels enhance accessibility for screen reader users when semantic elements aren't sufficient",
	'Well-structured HTML documents are easier to style with CSS, maintain over time, and rank better in search engines',
];

const closureObjectives = [
	'Structure complete HTML documents with head and body sections',
	'Use semantic HTML5 elements appropriately (header, nav, main, article, section, aside, footer)',
	'Implement proper heading hierarchy for accessibility and SEO',
	'Add appropriate metadata and Open Graph tags',
	'Apply ARIA landmarks and labels when needed',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-sitemap',
		title: 'Document Organization',
		questions: [
			'How does semantic structure make your code easier to understand and maintain?',
			'What would happen if you used only <div> elements instead of semantic elements?'
		],
		content:
			'Semantic HTML is like using chapter titles and section headings in a book—it creates structure and meaning that helps everyone (humans and machines) understand your content better.',
	},
	{
		icon: 'fas fa-universal-access',
		title: 'Accessibility Impact',
		questions: [
			'How do screen readers use landmarks and heading structure?',
			'Why is proper document structure a foundation for accessibility?'
		],
		content:
			"Accessible websites benefit everyone. Good structure enables keyboard navigation, screen reader shortcuts, and search engine understanding. It's not just about compliance—it's about building a better web for all users.",
	},
];

// (route not needed in this file)

// Get the pageSections array from the parent component
const pageSections = inject('pageSections');

// Define the sections for this tutorial
onMounted(() => {
	// Track this tutorial
	// trackTutorial(route.path);

	// Set up page sections
	if (pageSections) {
		pageSections.value = [
			{
				id: 'introduction',
				title: 'Introduction to Document Structure',
				subsections: [],
			},
			{
				id: 'semantic-elements',
				title: 'Semantic HTML Elements',
				subsections: [
					{ id: 'header', title: 'Header Element' },
					{ id: 'nav', title: 'Navigation Element' },
					{ id: 'main', title: 'Main Element' },
					{ id: 'section', title: 'Section Element' },
					{ id: 'article', title: 'Article Element' },
					{ id: 'aside', title: 'Aside Element' },
					{ id: 'footer', title: 'Footer Element' },
				],
			},
			{
				id: 'document-outline',
				title: 'Document Outline',
				subsections: [],
			},
			{
				id: 'practice',
				title: 'Practice Exercise',
				subsections: [],
			},
			{
				id: 'next-steps',
				title: 'Next Steps',
				subsections: [],
			},
		];
	}
});

const basicStructure = ref(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>`);

const headExample = ref(`<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Description of your page">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
	<script src="script.js">` + ('</' + 'script>') + `
</head>`);

const bodyExample = ref(`<body>
    <header>
        <h1>Website Title</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>Main Content</h2>
            <p>Your content goes here...</p>
        </article>
    </main>

    <footer>
        <p>&copy; 2024 Your Website</p>
    </footer>
</body>`);

const practiceCode = ref(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Black Swan Bistro</title>
</head>
<body>
    <!-- Add your restaurant content here -->
    <!-- Use semantic elements like header, nav, main, etc. -->
    
</body>
</html>`);

const semanticExample = ref(`<header>
  <nav>
    <!-- Navigation content -->
  </nav>
</header>

<main>
  <article>
    <!-- Main content -->
  </article>
</main>

<footer>
  <!-- Footer content -->
</footer>`);

const basicLayout = ref(`<body>
  <header>
    <nav>...</nav>
  </header>
  <main>
    <article>...</article>
    <aside>...</aside>
  </main>
  <footer>...</footer>
</body>`);

const blogLayout = ref(`<main>
  <article>
    <header>
      <h2>Article Title</h2>
      <time datetime="2024-03-20">March 20, 2024</time>
    </header>
    <section>...</section>
    <footer>
      <p>Written by Author Name</p>
    </footer>
  </article>
</main>`);

const bistroExample = ref(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Black Swan Bistro</title>
</head>
<body>
    <header>
        <h1>Black Swan Bistro</h1>
        <nav>
            <ul>
                <li><a href="menu.html">Menu</a></li>
                <li><a href="reservations.html">Reservations</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>The Restaurant</h2>
            <figure>
                <img src="images/restaurant-front.jpg" 
                     alt="Black Swan Bistro riverside dining area">
                <figcaption>Our riverside dining area at Elizabeth Quay</figcaption>
            </figure>
            <p>The Black Swan Bistro offers casual lunch and dinner fare 
               in a relaxed riverside atmosphere.</p>
        </article>

        <aside>
            <h2>Hours &amp; Location</h2>
            <address>
                Elizabeth Quay, Perth<br>
                Western Australia
            </address>
            <p>
                <time>Monday-Thursday: 11:00</time> - <time>21:00</time><br>
                <time>Friday-Saturday: 11:00</time> - <time>00:00</time>
            </p>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 Black Swan Bistro</p>
    </footer>
</body>
</html>`);

const rottoExample = ref(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rotto Rocks - Experience Rottnest Island</title>
</head>
<body>
    <header>
        <h1>Rotto Rocks</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="activities.html">Activities</a></li>
                <li><a href="stay.html">Accommodation</a></li>
                <li><a href="transport.html">Getting There</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>Welcome to Rottnest Island</h2>
            <figure>
                <img src="images/quokka.jpg" 
                     alt="Smiling quokka on Rottnest Island">
                <figcaption>Meet our friendly local quokkas!</figcaption>
            </figure>
            <p>Just 19 kilometers off the coast of Fremantle, 
               Rottnest Island is Western Australia's premier 
               island destination.</p>
        </article>
    </main>

    <footer>
        <p>&copy; 2024 Rotto Rocks</p>
    </footer>
</body>
</html>`);

const metadataBasics = ref(
	`<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>`,
);

const metadataAdvanced = ref(
	`<head>
    <!-- Basic Metadata -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Black Swan Bistro - Riverside Dining in Perth</title>
    
    <!-- SEO Metadata -->
    <meta name="description" content="Experience riverside dining at Black Swan Bistro in Elizabeth Quay, Perth. Fresh local ingredients and seasonal menus.">
    <meta name="keywords" content="restaurant, Perth, riverside dining, Elizabeth Quay, Black Swan">
    
    <!-- Social Media Metadata -->
    <meta property="og:title" content="Black Swan Bistro">
    <meta property="og:description" content="Riverside dining in Perth">
    <meta property="og:image" content="https://example.com/images/restaurant.jpg">
    <meta property="og:url" content="https://example.com">
</head>`,
);

// Reactive refs for the interactive metadata builder
const metaTitle = ref('');
const metaDescription = ref('');
const metaKeywords = ref('');

// Computed property for generated metadata
const generatedMetadata = computed(() => {
	return `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${metaTitle.value || 'Page Title'}</title>
    
    <!-- SEO Metadata -->
    <meta name="description" content="${
			metaDescription.value || 'Page description'
		}">
    <meta name="keywords" content="${
			metaKeywords.value || 'keywords, go, here'
		}">
    
    <!-- Social Media Metadata -->
    <meta property="og:title" content="${metaTitle.value || 'Page Title'}">
    <meta property="og:description" content="${
			metaDescription.value || 'Page description'
		}">
</head>`;
});

const fileStructure = ref(
	`# Basic Website Structure
	project-name/
	  index.html
	  about.html
	  contact.html
	  images/
	    logo.png
	    photos/
	      gallery-1.jpg
	  css/
	    styles.css
	  js/
	    script.js`,
);

const bistroStructure = ref(
	`# Black Swan Bistro Website
	black-swan-bistro/
	  index.html
	  menu.html
	  reservations.html
	  about.html
	  contact.html
	  images/
	    logo.png
	    restaurant-front.jpg
	    menu/
	      appetizers.jpg
	      mains.jpg
	  css/
	    styles.css`,
);

const rottoStructure = ref(
	`# Rotto Rocks Website
	rotto-rocks/
	  index.html
	  activities.html
	  accommodation.html
	  transport.html
	  gallery.html
	  contact.html
	  images/
	    logo.png
	    hero-banner.jpg
	    activities/
	      cycling.jpg
	      snorkeling.jpg
	      surfing.jpg
	  css/
	    styles.css`,
);

const wrongStructure = ref(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>`);

const correctStructure = ref(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
</head>
<body>
    <h1>Welcome to My Page</h1>
    <img src="images/logo.png" alt="Logo">
    <p>This is my website</p>
    <p>This is a new line</p>
    <div>This is inside a div</div>
</body>
</html>`);

const wrongPaths = ref(`<img src="C:\\Users\\Me\\Pictures\\logo.png">
<img src="../../../../../../images/photo.jpg">
<a href="ABOUT.HTML">About Us</a>
<img src="my photo.jpg">`);

// (moved) Mark example refs as used to avoid no-unused-vars in this large examples file

const correctPaths = ref(`<img src="images/logo.png" alt="Logo">
<img src="../images/photo.jpg" alt="Photo">
<a href="about.html">About Us</a>
<img src="images/my-photo.jpg" alt="My photo">`);

// Mark example refs as used to avoid no-unused-vars in this large examples file
void [
	basicStructure,
	headExample,
	bodyExample,
	practiceCode,
	semanticExample,
	basicLayout,
	blogLayout,
	bistroExample,
	rottoExample,
	metadataBasics,
	metadataAdvanced,
	fileStructure,
	bistroStructure,
	rottoStructure,
	wrongStructure,
	correctStructure,
	wrongPaths,
	correctPaths,
	generatedMetadata,
];
</script>

<script>
// Frontmatter for the tutorial
export default {
	frontmatter: {
		title: 'Document Structure',
		description:
			'Learn how to structure your HTML documents using semantic elements.',
		category: 'HTML Basics',
		level: 'Beginner',
		order: 6,
		tags: ['html', 'semantics', 'document structure', 'accessibility'],
		lastUpdated: '2024-03-24',
	},
};
</script>

<style scoped>
.tutorial-content {
	max-width: 960px;
	margin: 0 auto;
}

.box {
	width: 100%;
	max-width: 960px;
}

.html-icon {
	color: #e34f26;
}

/* SVG diagram specific styles */
.webpage-diagram svg {
	max-width: 100%;
	height: auto;
}

.webpage-diagram {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem 0;
}

.webpage-diagram svg text {
	font-family: Arial, sans-serif;
	dominant-baseline: middle;
}

.wrong-code-block {
	background: #f5f5f5;
	padding: 1rem;
	border-radius: 4px;
	font-family: monospace;
	white-space: pre-wrap;
	word-wrap: break-word;
	font-size: 0.9em;
	line-height: 1.4;
	margin: 0;
}

.wrong-code-block code {
	color: #ff3860;
	background: none;
	padding: 0;
}
</style>
