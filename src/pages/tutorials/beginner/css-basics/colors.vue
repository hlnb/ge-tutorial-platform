<script setup>
import { ref, computed, onMounted, inject } from 'vue';
import { useRoute } from 'vue-router';
import progressService from '@/services/ProgressService';
import CodeMirror from '@/components/CodeMirror.vue';
import DOMPurify from 'dompurify';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { usePageSections } from '@/composables/usePageSections';

const frontmatter = {
	title: 'Working with Colors',
	description:
		'Learn how to effectively use colors in your web designs using CSS',
	difficulty: 'Beginner',
	duration: '30 minutes',
	tags: ['CSS', 'Colors', 'Design', 'Styling'],
	order: 4,
	prerequisites: [
		'Understanding of basic CSS syntax',
		'Completion of CSS Selectors tutorial',
		'Completion of CSS Layout tutorial',
	],
};
const sections = [
	{
		id: 'color-theory',
		title: 'Color Theory',
		subsections: [
			{ id: 'rgb-model', title: 'RGB Color Model' },
			{ id: 'color-wheel', title: 'The Color Wheel' },
			{ id: 'color-harmony', title: 'Color Harmony' },
		],
	},
	{
		id: 'css-colors',
		title: 'CSS Colors',
		subsections: [
			{ id: 'color-keywords', title: 'Color Keywords' },
			{ id: 'hex-colors', title: 'Hexadecimal Colors' },
			{ id: 'rgb-rgba', title: 'RGB and RGBA Colors' },
			{ id: 'hsl-hsla', title: 'HSL and HSLA Colors' },
		],
	},
	{
		id: 'backgrounds',
		title: 'Working with Backgrounds',
		subsections: [
			{ id: 'background-color', title: 'Background Color' },
			{ id: 'background-opacity', title: 'Color Opacity' },
			{ id: 'gradients', title: 'Color Gradients' },
		],
	},
	{
		id: 'practical-examples',
		title: 'Practical Examples',
		subsections: [
			{ id: 'color-schemes', title: 'Creating Color Schemes' },
			{ id: 'text-contrast', title: 'Text and Background Contrast' },
			{ id: 'brand-colors', title: 'Working with Brand Colors' },
		],
	},
	{id: 'practical-exercises',
		title: 'Practical Exercises',
		subsections: [
			{ id: 'black-swan-bistro', title: 'Black Swan Bistro' },
			{ id: 'rotto-rocks', title: 'Rotto Rocks' },
		],
	},
];

const { pageSections } = usePageSections(sections);

// Code examples
const rgbExample = ref(`/* RGB Color Examples */
.rgb-color {
	color: rgb(255, 0, 0);    /* Pure red */
	color: rgb(0, 255, 0);    /* Pure green */
	color: rgb(0, 0, 255);    /* Pure blue */
	color: rgb(128, 128, 128); /* Medium gray */
}`);

const hexExample = ref(`/* Hexadecimal Color Examples */
.hex-color {
	color: #FF0000;    /* Pure red */
	color: #00FF00;    /* Pure green */
	color: #0000FF;    /* Pure blue */
	color: #808080;    /* Medium gray */
	color: #FFF;       /* White (shorthand) */
}`);

const hslExample = ref(`/* HSL Color Examples */
.hsl-color {
	color: hsl(0, 100%, 50%);     /* Pure red */
	color: hsl(120, 100%, 50%);   /* Pure green */
	color: hsl(240, 100%, 50%);   /* Pure blue */
	color: hsl(0, 0%, 50%);       /* Medium gray */
}`);

const backgroundOpacityExample = ref(`/* Background with Opacity */
.overlay {
	background-color: rgba(33, 150, 243, 0.3);  /* 30% opacity blue */
}

.modal-backdrop {
	background-color: rgba(0, 0, 0, 0.5);  /* 50% opacity black */
}

/* Using HSLA for opacity */
.overlay-alt {
	background-color: hsla(240, 100%, 50%, 0.3);  /* 30% opacity blue */
}`);

const gradientExample = ref(`/* Gradient Examples */
.gradient {
	/* Linear gradient - top to bottom */
	background: linear-gradient(to bottom, #e66465, #9198e5);
	
	/* Linear gradient - left to right */
	background: linear-gradient(to right, #00c6ff, #0072ff);
	
	/* Radial gradient */
	background: radial-gradient(circle, #00c6ff, #0072ff);
	
	/* Multiple color stops */
	background: linear-gradient(45deg, #ff0000, #00ff00, #0000ff);
}`);

const colorSchemeExample = ref(`/* Traditional way - repeating colors */
.header {
	background-color: #3b82f6;  /* Blue */
	color: white;
}

.button {
	background-color: #3b82f6;  /* Same blue, repeated */
	border: 1px solid #1d4ed8;  /* Darker blue */
}

/* Modern way - using CSS Custom Properties */
:root {
	--primary-color: #3b82f6;
	--primary-dark: #1d4ed8;
	--primary-light: #93c5fd;
	--text-color: #1f2937;
	--background-color: #f9fafb;
}

/* Now we can reuse these colors */
.header {
	background-color: var(--primary-color);
	color: white;
}

.button {
	background-color: var(--primary-color);
	border: 1px solid var(--primary-dark);
}

/* Easy to update all instances */
@media (prefers-color-scheme: dark) {
	:root {
		--primary-color: #93c5fd;
		--background-color: #1f2937;
	}
}`);

const contrastExample = ref(`/* Text Contrast Examples */
.good-contrast {
	background-color: #1a237e;
	color: white;            /* High contrast - Good */
}

.poor-contrast {
	background-color: #e3f2fd;
	color: #a5c7f9;         /* Low contrast - Avoid */
}

/* Always test contrast ratios using tools like:
   - WebAIM Contrast Checker
   - Chrome DevTools
   - Firefox Accessibility Inspector */`);

const brandColorExample = ref(`/* Brand Color System */
:root {
	/* Primary Brand Colors */
	--brand-primary: #3b82f6;
	--brand-primary-light: #93c5fd;
	--brand-primary-dark: #1d4ed8;
	
	/* Secondary Colors */
	--brand-secondary: #f59e0b;
	--brand-secondary-light: #fcd34d;
	--brand-secondary-dark: #d97706;
	
	/* Accent Colors */
	--brand-accent: #10b981;
	--brand-accent-light: #34d399;
	--brand-accent-dark: #059669;
	
	/* Neutral Colors */
	--brand-grey-50: #f9fafb;
	--brand-grey-900: #111827;
}`);

const colorKeywordExample = ref(`/* Basic Color Keywords */
.text-color {
	color: red;
	color: blue;
	color: green;
	color: purple;
}

/* Extended Color Keywords */
.extended-colors {
	color: darkblue;
	color: lightgreen;
	color: mediumseagreen;
	color: rebeccapurple;  /* Yes, this is a real color name! */
}`);

const backgroundExample = ref(`/* Basic Background Colors */
.element {
	background-color: #e3f2fd;  /* Light blue */
}

.dark-bg {
	background-color: #1a237e;  /* Dark blue */
	color: white;  /* Light text for dark backgrounds */
}`);

const blackSwanBasicExample = ref(`/* Black Swan Bistro Basic Exercise */
.primary-color {
	color: #722F37;
}

.accent-color {
	color: #C1A35F;
}

.background-color {
	background-color: #F5F5F5;
}
`);

const blackSwanAdvancedExample = ref(`/* Black Swan Bistro Advanced Challenge */
.header-gradient {
	background: linear-gradient(to right, #5A252C, #722F37);
}

.overlay-color {
	background-color: rgba(114, 47, 55, 0.7);
}
`);

const rottoRocksBasicExample = ref(`/* Rotto Rocks Basic Exercise */
.ocean-blue {
	color: #1E88E5;
}

.sand-light {
	background-color: #F5E6D3;
}

.coral-accent {
	color: #FF6F61;
}
`);

const rottoRocksAdvancedExample = ref(`/* Rotto Rocks Advanced Challenge */
.sunset-gradient {
	background: linear-gradient(to bottom, #FF9A8B, #FF6F61, #1E88E5);
}

.overlay-color {
	background-color: rgba(30, 136, 229, 0.4);
}
`);
</script>

<template>
	<div class="content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/"
						><i class="fa-solid fa-house mr-2"></i> Home</router-link
					>
				</li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link to="/tutorials/beginner/css-basics/">CSS Basics</router-link>
				</li>
				<li class="is-active">
					<a href="#" aria-current="page">Working with Colors</a>
				</li>
			</ul>
		</nav>

		<header class="tutorial-header">
			<div class="tags mb-4">
				<span class="tag is-info">{{ frontmatter.difficulty }}</span>
				<span class="tag is-warning">{{ frontmatter.duration }}</span>
				<span v-for="tag in frontmatter.tags" :key="tag" class="tag is-light">{{
					tag
				}}</span>
			</div>

			<h1 class="title is-1">
				<i class="fa-brands fa-css css-icon"></i>
				Working with Colors
			</h1>
			<p class="subtitle is-4">
				Learn how to effectively use colors in your web designs using CSS
			</p>
		</header>

		<div class="notification is-info is-light">
			<p>
				<strong>Note:</strong> While many English-speaking countries (including
				Australia) spell "colour" with a "u", in web development we always use
				the American spelling "color". This is because CSS properties and values
				must use "color" to work correctly.
			</p>
		</div>

		<section id="color-theory">
			<h2 class="title is-2">Color Theory</h2>
			<p>
				Understanding color theory is essential for creating visually appealing
				and effective web designs. Let's explore the fundamental concepts that
				will help you make better color choices.
			</p>

			<section id="rgb-model">
				<h3 class="title is-3">RGB Color Model</h3>
				<p>
					The RGB color model is the foundation of digital color. It uses three
					primary colors:
				</p>
				<ul>
					<li><strong>R</strong>ed</li>
					<li><strong>G</strong>reen</li>
					<li><strong>B</strong>lue</li>
				</ul>

				<div class="box">
					<h4 class="title is-4">How RGB Works</h4>
					<p>Each color component has a value from 0 to 255, where:</p>
					<ul>
						<li>0 means none of that color</li>
						<li>255 means the maximum amount of that color</li>
					</ul>

					<div class="color-examples">
						<div class="color-demo" style="background-color: rgb(255, 0, 0)">
							<p>Red (255, 0, 0)</p>
						</div>
						<div class="color-demo" style="background-color: rgb(0, 255, 0)">
							<p>Green (0, 255, 0)</p>
						</div>
						<div class="color-demo" style="background-color: rgb(0, 0, 255)">
							<p style="color: white">Blue (0, 0, 255)</p>
						</div>
						<div
							class="color-demo"
							style="background-color: rgb(255, 255, 255)"
						>
							<p>White (255, 255, 255)</p>
						</div>
						<div class="color-demo" style="background-color: rgb(0, 0, 0)">
							<p style="color: white">Black (0, 0, 0)</p>
						</div>
					</div>
				</div>
			</section>

			<section id="color-wheel">
				<h3 class="title is-3">The Color Wheel</h3>
				<p>
					The color wheel is a visual tool that helps us understand color
					relationships:
				</p>

				<div class="box">
					<h4 class="title is-4">Primary Colors</h4>
					<p>The three primary colors are:</p>
					<div class="color-examples">
						<div class="color-demo" style="background-color: #ff0000">
							<p>Red</p>
						</div>
						<div class="color-demo" style="background-color: #0000ff">
							<p style="color: white">Blue</p>
						</div>
						<div class="color-demo" style="background-color: #ffff00">
							<p>Yellow</p>
						</div>
					</div>

					<h4 class="title is-4">Secondary Colors</h4>
					<p>Secondary colors are created by mixing primary colors:</p>
					<div class="color-examples">
						<div class="color-demo" style="background-color: #800080">
							<p style="color: white">Purple (Red + Blue)</p>
						</div>
						<div class="color-demo" style="background-color: #008000">
							<p style="color: white">Green (Blue + Yellow)</p>
						</div>
						<div class="color-demo" style="background-color: #ff8c00">
							<p>Orange (Red + Yellow)</p>
						</div>
					</div>
				</div>
			</section>

			<section id="color-harmony">
				<h3 class="title is-3">Color Harmony</h3>
				<p>
					Color harmony is about creating visually pleasing color combinations.
					Here are some common patterns:
				</p>

				<div class="box">
					<h4 class="title is-4">Complementary Colors</h4>
					<p>Colors opposite each other on the color wheel:</p>
					<div class="color-examples">
						<div class="color-demo" style="background-color: #0000ff">
							<p style="color: white">Blue</p>
						</div>
						<div class="color-demo" style="background-color: #ffa500">
							<p>Orange</p>
						</div>
					</div>

					<h4 class="title is-4">Analogous Colors</h4>
					<p>Colors that are next to each other on the color wheel:</p>
					<div class="color-examples">
						<div class="color-demo" style="background-color: #ff0000">
							<p>Red</p>
						</div>
						<div class="color-demo" style="background-color: #ff4500">
							<p>Red-Orange</p>
						</div>
						<div class="color-demo" style="background-color: #ffa500">
							<p>Orange</p>
						</div>
					</div>
				</div>
			</section>
		</section>

		<section id="color-wheel-comparison" class="mt-6">
			<h3 class="title is-3">Understanding Color Models on the Color Wheel</h3>

			<div class="box">
				<div class="columns">
					<div class="column is-half">
						<svg viewBox="0 0 400 400" class="color-wheel">
							<!-- Outer circle for hue -->
							<defs>
								<!-- Create gradients for each segment -->
								<linearGradient id="redToYellow">
									<stop offset="0%" stop-color="#FF0000" />
									<stop offset="100%" stop-color="#FFFF00" />
								</linearGradient>
								<linearGradient id="yellowToGreen">
									<stop offset="0%" stop-color="#FFFF00" />
									<stop offset="100%" stop-color="#00FF00" />
								</linearGradient>
								<linearGradient id="greenToCyan">
									<stop offset="0%" stop-color="#00FF00" />
									<stop offset="100%" stop-color="#00FFFF" />
								</linearGradient>
								<linearGradient id="cyanToBlue">
									<stop offset="0%" stop-color="#00FFFF" />
									<stop offset="100%" stop-color="#0000FF" />
								</linearGradient>
								<linearGradient id="blueToMagenta">
									<stop offset="0%" stop-color="#0000FF" />
									<stop offset="100%" stop-color="#FF00FF" />
								</linearGradient>
								<linearGradient id="magentaToRed">
									<stop offset="0%" stop-color="#FF00FF" />
									<stop offset="100%" stop-color="#FF0000" />
								</linearGradient>
							</defs>

							<!-- Background circle -->
							<circle cx="200" cy="200" r="180" fill="#f8f9fa" />

							<!-- Color wheel segments -->
							<g transform="translate(200, 200)">
								<!-- 60° segments -->
								<path
									d="M 0 0 L 0 -180 A 180 180 0 0 1 155.88 -90 Z"
									fill="url(#redToYellow)"
								/>
								<path
									d="M 0 0 L 155.88 -90 A 180 180 0 0 1 155.88 90 Z"
									fill="url(#yellowToGreen)"
								/>
								<path
									d="M 0 0 L 155.88 90 A 180 180 0 0 1 0 180 Z"
									fill="url(#greenToCyan)"
								/>
								<path
									d="M 0 0 L 0 180 A 180 180 0 0 1 -155.88 90 Z"
									fill="url(#cyanToBlue)"
								/>
								<path
									d="M 0 0 L -155.88 90 A 180 180 0 0 1 -155.88 -90 Z"
									fill="url(#blueToMagenta)"
								/>
								<path
									d="M 0 0 L -155.88 -90 A 180 180 0 0 1 0 -180 Z"
									fill="url(#magentaToRed)"
								/>
							</g>

							<!-- Inner circles for saturation -->
							<circle cx="200" cy="200" r="120" fill="white" opacity="0.7" />
							<circle cx="200" cy="200" r="60" fill="#333" />

							<!-- Degree markers -->
							<g transform="translate(200, 200)" fill="#666" font-size="12">
								<text x="0" y="-160" text-anchor="middle">0°</text>
								<text x="160" y="0" text-anchor="start">90°</text>
								<text x="0" y="160" text-anchor="middle">180°</text>
								<text x="-160" y="0" text-anchor="end">270°</text>
							</g>
						</svg>

						<div class="text-center mt-4">
							<p class="is-size-7">
								Inspired by
								<a
									href="https://color.adobe.com/create/color-wheel"
									target="_blank"
									>Adobe Color Wheel</a
								>
							</p>
						</div>
					</div>

					<div class="column is-half">
						<h4 class="title is-4">Color Models Compared</h4>
						<div class="content">
							<p>
								The color wheel helps us understand how different color models
								relate:
							</p>

							<ul>
								<li>
									<strong>RGB (Red, Green, Blue)</strong>
									<ul>
										<li>Primary colors in light</li>
										<li>Used by screens and digital devices</li>
										<li>Values: 0-255 for each component</li>
									</ul>
								</li>

								<li>
									<strong>HSL (Hue, Saturation, Lightness)</strong>
									<ul>
										<li>Hue: Position on the wheel (0-360°)</li>
										<li>Saturation: Distance from center (0-100%)</li>
										<li>Lightness: Brightness (0-100%)</li>
									</ul>
								</li>

								<li>
									<strong>Traditional Color Wheel</strong>
									<ul>
										<li>Primary Colors: Red, Yellow, Blue</li>
										<li>Secondary Colors: Orange, Green, Purple</li>
										<li>Tertiary Colors: Mix of primary and secondary</li>
									</ul>
								</li>
							</ul>

							<div class="notification is-info is-light">
								<p>
									<strong>Pro Tip:</strong> HSL is often more intuitive for
									designers as it matches how we think about color adjustments
									(changing hue, making colors more vibrant with saturation, or
									adjusting brightness with lightness).
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="css-colors">
			<h2 class="title is-2">CSS Colors</h2>
			<p>
				CSS provides several ways to specify colors. Each method has its own
				advantages and use cases.
			</p>

			<section id="color-keywords">
				<h3 class="title is-3">Color Keywords</h3>
				<p>
					CSS includes predefined color keywords that you can use by name. While
					easy to remember, they offer limited color options.
				</p>

				<div class="box">
					<div class="color-examples">
						<div class="color-demo" style="background-color: red">
							<p style="color: white">red</p>
						</div>
						<div class="color-demo" style="background-color: blue">
							<p style="color: white">blue</p>
						</div>
						<div class="color-demo" style="background-color: green">
							<p style="color: white">green</p>
						</div>
						<div class="color-demo" style="background-color: purple">
							<p style="color: white">purple</p>
						</div>
					</div>

					<CodeMirror v-model="colorKeywordExample" readonly />
				</div>
			</section>

			<section id="hex-colors">
				<h3 class="title is-3">Hexadecimal Colors</h3>
				<p>
					Hexadecimal (hex) colors use a # followed by six characters
					representing RGB values. Each pair of characters ranges from 00 to FF
					(0-255 in decimal).
				</p>

				<div class="box">
					<div class="color-examples">
						<div class="color-demo" style="background-color: #ff0000">
							<p style="color: white">#FF0000</p>
						</div>
						<div class="color-demo" style="background-color: #00ff00">
							<p>#00FF00</p>
						</div>
						<div class="color-demo" style="background-color: #0000ff">
							<p style="color: white">#0000FF</p>
						</div>
					</div>

					<div class="notification is-info is-light mt-4">
						<p>
							<strong>Pro Tip:</strong> You can use shorthand hex codes when
							both digits in each pair are the same. For example, #FF0000 can be
							written as #F00.
						</p>
					</div>

					<CodeMirror v-model="hexExample" readonly />
				</div>
			</section>

			<section id="rgb-rgba">
				<h3 class="title is-3">RGB and RGBA Colors</h3>
				<p>
					RGB colors specify Red, Green, and Blue values directly. RGBA adds an
					Alpha channel for transparency.
				</p>

				<div class="box">
					<div class="color-examples">
						<div class="color-demo" style="background-color: rgb(255, 0, 0)">
							<p style="color: white">rgb(255, 0, 0)</p>
						</div>
						<div
							class="color-demo"
							style="background-color: rgba(0, 0, 255, 0.5)"
						>
							<p style="color: white">rgba(0, 0, 255, 0.5)</p>
						</div>
					</div>

					<CodeMirror v-model="rgbExample" readonly />
				</div>
			</section>

			<section id="hsl-hsla">
				<h3 class="title is-3">HSL and HSLA Colors</h3>
				<p>
					HSL (Hue, Saturation, Lightness) is often more intuitive for
					designers. HSLA adds an Alpha channel for transparency.
				</p>

				<div class="box">
					<div class="color-examples">
						<div class="color-demo" style="background-color: hsl(0, 100%, 50%)">
							<p style="color: white">hsl(0, 100%, 50%)</p>
						</div>
						<div
							class="color-demo"
							style="background-color: hsla(240, 100%, 50%, 0.5)"
						>
							<p style="color: white">hsla(240, 100%, 50%, 0.5)</p>
						</div>
					</div>

					<div class="notification is-info is-light mt-4">
						<p><strong>Understanding HSL Values:</strong></p>
						<ul>
							<li>Hue: 0-360 degrees on the color wheel</li>
							<li>Saturation: 0% (gray) to 100% (full color)</li>
							<li>Lightness: 0% (black) to 100% (white)</li>
						</ul>
					</div>

					<CodeMirror v-model="hslExample" readonly />
				</div>
			</section>
		</section>

		<section id="backgrounds">
			<h2 class="title is-2">Working with Backgrounds</h2>
			<p>
				CSS provides several properties to control background colors and
				effects. Let's explore how to use them effectively.
			</p>

			<section id="background-color">
				<h3 class="title is-3">Background Color</h3>
				<p>
					The <code>background-color</code> property sets a solid color
					background for elements.
				</p>

				<div class="box">
					<div class="demo-container">
						<div class="background-demo" style="background-color: #e3f2fd">
							<p>Light Blue Background</p>
							<code>.element { background-color: #e3f2fd; }</code>
						</div>
						<div class="background-demo" style="background-color: #1a237e">
							<p style="color: white">Dark Blue Background</p>
							<code style="color: white"
								>.element { background-color: #1a237e; }</code
							>
						</div>
					</div>

					<CodeMirror v-model="backgroundExample" readonly />
				</div>
			</section>

			<section id="background-opacity">
				<h3 class="title is-3">Color Opacity</h3>
				<p>
					You can create semi-transparent backgrounds using RGBA or HSLA colors.
				</p>

				<div class="box">
					<div class="demo-container">
						<div class="background-demo opacity-demo">
							<div style="background-color: rgba(33, 150, 243, 0.3)">
								<p>30% Opacity Blue</p>
								<code
									>.element { background-color: rgba(33, 150, 243, 0.3); }</code
								>
							</div>
						</div>
						<div class="background-demo opacity-demo">
							<div style="background-color: rgba(33, 150, 243, 0.7)">
								<p>70% Opacity Blue</p>
								<code
									>.element { background-color: rgba(33, 150, 243, 0.7); }</code
								>
							</div>
						</div>
					</div>

					<div class="notification is-info is-light mt-4">
						<p>
							<strong>Pro Tip:</strong> Semi-transparent backgrounds are great
							for overlay effects and ensuring text remains readable on various
							background images.
						</p>
					</div>

					<CodeMirror v-model="backgroundOpacityExample" readonly />
				</div>
			</section>

			<section id="gradients">
				<h3 class="title is-3">Color Gradients</h3>
				<p>
					CSS gradients let you create smooth transitions between two or more
					colors.
				</p>

				<div class="box">
					<div class="demo-container">
						<div
							class="background-demo gradient-demo"
							style="background: linear-gradient(to right, #00c6ff, #0072ff)"
						>
							<p style="color: white">Linear Gradient (Left to Right)</p>
							<code style="color: white"
								>.element { background: linear-gradient(to right, #00c6ff,
								#0072ff); }</code
							>
						</div>
						<div
							class="background-demo gradient-demo"
							style="background: radial-gradient(circle, #00c6ff, #0072ff)"
						>
							<p style="color: white">Radial Gradient</p>
							<code style="color: white"
								>.element { background: radial-gradient(circle, #00c6ff,
								#0072ff); }</code
							>
						</div>
					</div>

					<div class="notification is-info is-light mt-4">
						<p><strong>Common Gradient Types:</strong></p>
						<ul>
							<li>
								<code>linear-gradient()</code>: Creates a straight-line
								transition
							</li>
							<li>
								<code>radial-gradient()</code>: Creates a circular transition
							</li>
							<li>You can specify the direction and multiple color stops</li>
						</ul>
					</div>

					<CodeMirror v-model="gradientExample" readonly />
				</div>
			</section>
		</section>

		<section id="practical-examples">
			<h2 class="title is-2">Practical Examples</h2>
			<p>
				Let's explore some real-world examples of working with colors in CSS.
			</p>

			<section id="color-schemes">
				<h3 class="title is-3">Creating Color Schemes</h3>

				<div class="notification is-info is-light mb-5">
					<h4 class="title is-5 mb-2">
						Understanding CSS Custom Properties (Variables)
					</h4>
					<p>
						CSS Custom Properties, also known as CSS Variables, allow you to
						store values that you can reuse throughout your stylesheet. They:
					</p>
					<ul>
						<li>Start with two dashes (--) in their name</li>
						<li>Are accessed using the var() function</li>
						<li>Can be updated using JavaScript</li>
						<li>
							Can be different for different screen sizes using media queries
						</li>
					</ul>
					<p class="mt-2"><strong>Basic Syntax:</strong></p>
					<pre v-pre><code>/* Defining a custom property */
:root {
	--my-color: blue;
}

/* Using a custom property */
.element {
	color: var(--my-color);
}</code></pre>

					<div class="notification is-warning is-light mt-3">
						<p>
							<strong>Note:</strong> While we're using CSS Custom Properties for
							colors in this tutorial, they can be used with any CSS value -
							including sizes, spacing, animations, and more. We'll explore
							these other uses in future tutorials!
						</p>
						<p class="mt-2">For example:</p>
						<pre v-pre><code>:root {
	--spacing-unit: 1rem;
	--main-font: 'Arial', sans-serif;
	--animation-speed: 0.3s;
	--border-style: 2px solid black;
}</code></pre>
					</div>
				</div>

				<p>
					Using CSS custom properties to create a consistent color scheme makes
					it easier to maintain and update your design. Let's see how to
					implement this:
				</p>

				<div class="box">
					<div class="demo-container">
						<div class="themed-component">
							<div class="themed-header">
								<h4>Color Scheme Example</h4>
							</div>
							<div class="themed-content">
								<p>Main content area with primary colors</p>
								<button class="themed-button">Action Button</button>
							</div>
						</div>
					</div>

					<div class="notification is-info is-light mt-4">
						<p>
							<strong>Pro Tip:</strong> Define your color scheme using CSS
							variables in the :root selector to make them globally available.
						</p>
					</div>

					<CodeMirror v-model="colorSchemeExample" readonly />
				</div>
			</section>

			<section id="text-contrast">
				<h3 class="title is-3">Text and Background Contrast</h3>
				<p>
					Ensuring good contrast between text and background colors is crucial
					for readability and accessibility.
				</p>

				<div class="box">
					<div class="demo-container">
						<div class="contrast-demo good-contrast">
							<p>Good Contrast</p>
							<span class="contrast-ratio">Ratio: 7:1</span>
						</div>
						<div class="contrast-demo poor-contrast">
							<p>Poor Contrast</p>
							<span class="contrast-ratio">Ratio: 2.5:1</span>
						</div>
					</div>

					<div class="notification is-warning is-light mt-4">
						<p>
							<strong>Accessibility Tip:</strong> WCAG guidelines recommend:
						</p>
						<ul>
							<li>Minimum contrast ratio of 4.5:1 for normal text</li>
							<li>Minimum contrast ratio of 3:1 for large text</li>
							<li>Higher contrast (7:1) for enhanced accessibility</li>
						</ul>
					</div>

					<CodeMirror v-model="contrastExample" readonly />
				</div>
			</section>

			<section id="brand-colors">
				<h3 class="title is-3">Working with Brand Colors</h3>
				<p>
					Learn how to effectively use and maintain brand colors across your
					website.
				</p>

				<div class="box">
					<div class="demo-container">
						<div class="brand-palette">
							<div class="brand-color primary">
								<span>Primary</span>
								<code>#3b82f6</code>
							</div>
							<div class="brand-color secondary">
								<span>Secondary</span>
								<code>#f59e0b</code>
							</div>
							<div class="brand-color accent">
								<span>Accent</span>
								<code>#10b981</code>
							</div>
						</div>
					</div>

					<div class="notification is-info is-light mt-4">
						<p><strong>Best Practices:</strong></p>
						<ul>
							<li>Define brand colors as CSS variables</li>
							<li>Include lighter and darker variants</li>
							<li>Consider color accessibility from the start</li>
						</ul>
					</div>

					<CodeMirror v-model="brandColorExample" readonly />
				</div>
			</section>
		</section>

		<section id="practical-exercises" class="mt-6">
			<h2 class="title is-2">Practical Exercises</h2>
			<p>
				Let's apply what we've learned about colors to our example websites.
			</p>

			<div class="notification is-info is-light">
				<p>
					<strong>Note:</strong> Complete the basic exercises to finish this
					tutorial. Advanced challenges are optional but will help deepen your
					understanding of color in web design.
				</p>
			</div>

			<section id="black-swan-bistro">
				<h3 class="title is-3">Exercise 1: Black Swan Bistro</h3>
				<p>
					Create a sophisticated color scheme for the Black Swan Bistro website.
				</p>

				<div class="box">
					<h4 class="title is-4">Basic Exercise</h4>
					<div class="color-examples mb-4">
						<div class="color-demo" style="background-color: #722f37">
							<p style="color: white">Primary Color</p>
							<code style="color: white">#722F37</code>
						</div>
						<div class="color-demo" style="background-color: #c1a35f">
							<p class="color-demo-text">Accent Color</p>
							<code>#C1A35F</code>
						</div>
						<div class="color-demo light-bg" style="background-color: #f5f5f5">
							<p>Background</p>
							<code>#F5F5F5</code>
						</div>
					</div>

					<CodeMirror v-model="blackSwanBasicExample" readonly />

					<h4 class="title is-4 mt-6">Advanced Challenge</h4>
					<div class="color-examples mb-4">
						<div
							class="color-demo gradient-demo"
							style="background: linear-gradient(to right, #5a252c, #722f37)"
						>
							<p style="color: white">Header Gradient</p>
						</div>
						<div
							class="color-demo"
							style="background-color: rgba(114, 47, 55, 0.7)"
						>
							<p style="color: white">Overlay Color</p>
							<code style="color: white">rgba(114, 47, 55, 0.7)</code>
						</div>
					</div>

					<CodeMirror v-model="blackSwanAdvancedExample" readonly />
				</div>

				<div class="notification is-info is-light mt-4 mb-4">
					<h4 class="title is-5">Black Swan Bistro Color Guide</h4>
					<div class="color-guide">
						<h5 class="title is-6">Primary Colors</h5>
						<ul>
							<li>
								<strong>Primary:</strong> #722F37 (Deep Burgundy) - Headers,
								navigation background
							</li>
							<li>
								<strong>Primary Light:</strong> #8B3B44 - Hover states,
								highlights
							</li>
							<li>
								<strong>Primary Dark:</strong> #5A252C - Active states, gradient
								ends
							</li>
							<li>
								<strong>Accent:</strong> #C1A35F (Gold) - Call-to-action
								buttons, special highlights
							</li>
						</ul>

						<h5 class="title is-6 mt-3">Text Colors</h5>
						<ul>
							<li><strong>Main Text:</strong> #333333 - Body text</li>
							<li>
								<strong>Light Text:</strong> #FFFFFF - Text on dark backgrounds
							</li>
							<li>
								<strong>Muted Text:</strong> #666666 - Secondary information
							</li>
						</ul>

						<h5 class="title is-6 mt-3">Background Colors</h5>
						<ul>
							<li><strong>Main Background:</strong> #FFFFFF - Content areas</li>
							<li>
								<strong>Secondary Background:</strong> #F5F5F5 - Alternative
								sections
							</li>
							<li>
								<strong>Overlay:</strong> rgba(114, 47, 55, 0.7) - Image
								overlays
							</li>
						</ul>

						<h5 class="title is-6 mt-3">Gradients</h5>
						<ul>
							<li>
								<strong>Header Gradient:</strong> linear-gradient(to right,
								#5A252C, #722F37)
							</li>
						</ul>
					</div>
				</div>

				<div class="layout-preview mt-4 mb-6">
					<h5 class="title is-5">Layout Preview</h5>
					<svg
						width="600"
						height="400"
						viewBox="0 0 600 400"
						class="layout-mockup"
					>
						<!-- Header with gradient -->
						<defs>
							<linearGradient
								id="headerGradient"
								x1="0"
								y1="0"
								x2="100%"
								y2="0"
							>
								<stop offset="0%" stop-color="#5A252C" />
								<stop offset="100%" stop-color="#722F37" />
							</linearGradient>
						</defs>

						<!-- Background -->
						<rect width="600" height="400" fill="#F5F5F5" />

						<!-- Header -->
						<rect width="600" height="80" fill="url(#headerGradient)" />
						<text x="30" y="50" fill="white" font-family="Arial" font-size="24">
							Black Swan Bistro
						</text>

						<!-- Navigation -->
						<g transform="translate(300, 50)">
							<text fill="white" font-family="Arial" font-size="14">
								<tspan x="0" y="0">Menu</tspan>
								<tspan x="60" y="0">About</tspan>
								<tspan x="120" y="0">Contact</tspan>
							</text>
						</g>

						<!-- Hero Section -->
						<g transform="translate(0, 80)">
							<rect width="600" height="200" fill="#722F37" opacity="0.9" />
							<text
								x="300"
								y="100"
								fill="white"
								font-family="Arial"
								font-size="32"
								text-anchor="middle"
							>
								Fine Dining Experience
							</text>
							<rect
								x="250"
								y="130"
								width="100"
								height="40"
								rx="4"
								fill="#C1A35F"
							/>
							<text
								x="300"
								y="157"
								fill="white"
								font-family="Arial"
								font-size="14"
								text-anchor="middle"
							>
								Book Now
							</text>
						</g>

						<!-- Content Section -->
						<g transform="translate(0, 280)">
							<rect width="600" height="120" fill="white" />
							<text
								x="30"
								y="40"
								fill="#333333"
								font-family="Arial"
								font-size="18"
							>
								Our Menu
							</text>
						</g>

						<!-- Annotations -->
						<g
							transform="translate(450, 20)"
							class="annotations"
							font-family="Arial"
							font-size="12"
						>
							<text x="0" y="0" fill="#666">Primary Color: #722F37</text>
							<text x="0" y="20" fill="#666">Accent: #C1A35F</text>
						</g>
					</svg>
				</div>
			</section>

			<section id="rotto-rocks" class="mt-6">
				<h3 class="title is-3">Exercise 2: Rotto Rocks</h3>
				<p>
					Create a vibrant, beach-inspired color scheme for the Rotto Rocks
					website.
				</p>

				<div class="box">
					<h4 class="title is-4">Basic Exercise</h4>
					<div class="color-examples mb-4">
						<div class="color-demo" style="background-color: #1e88e5">
							<p>Ocean Blue</p>
							<code>#1E88E5</code>
						</div>
						<div class="color-demo light-bg" style="background-color: #f5e6d3">
							<p>Sand Light</p>
							<code>#F5E6D3</code>
						</div>
						<div class="color-demo" style="background-color: #ff6f61">
							<p>Coral Accent</p>
							<code>#FF6F61</code>
						</div>
					</div>

					<CodeMirror v-model="rottoRocksBasicExample" readonly />

					<h4 class="title is-4 mt-6">Advanced Challenge</h4>
					<div class="color-examples mb-4">
						<div
							class="color-demo gradient-demo"
							style="
								background: linear-gradient(
									to bottom,
									#ff9a8b,
									#ff6f61,
									#1e88e5
								);
							"
						>
							<p style="color: white">Sunset Gradient</p>
						</div>
						<div
							class="color-demo"
							style="background-color: rgba(30, 136, 229, 0.4)"
						>
							<p>Overlay Color</p>
							<code>rgba(30, 136, 229, 0.4)</code>
						</div>
					</div>

					<CodeMirror v-model="rottoRocksAdvancedExample" readonly />
				</div>

				<div class="notification is-info is-light mt-4 mb-4">
					<h4 class="title is-5">Rotto Rocks Color Guide</h4>
					<div class="color-guide">
						<h5 class="title is-6">Primary Colors</h5>
						<ul>
							<li>
								<strong>Ocean Blue:</strong> #1E88E5 - Headers, primary buttons
							</li>
							<li>
								<strong>Ocean Light:</strong> #81D4FA - Highlights, secondary
								elements
							</li>
							<li><strong>Ocean Dark:</strong> #0D47A1 - Active states</li>
							<li>
								<strong>Coral Accent:</strong> #FF6F61 - Call-to-action buttons,
								important highlights
							</li>
						</ul>

						<h5 class="title is-6 mt-3">Text Colors</h5>
						<ul>
							<li><strong>Main Text:</strong> #2C3E50 - Body text</li>
							<li>
								<strong>Light Text:</strong> #FFFFFF - Text on dark backgrounds
							</li>
							<li>
								<strong>Muted Text:</strong> #607D8B - Secondary information
							</li>
						</ul>

						<h5 class="title is-6 mt-3">Background Colors</h5>
						<ul>
							<li><strong>Sand Light:</strong> #F5E6D3 - Main background</li>
							<li>
								<strong>Sand Dark:</strong> #E6D5B8 - Secondary background
							</li>
							<li><strong>Card Background:</strong> #FFFFFF - Content cards</li>
							<li>
								<strong>Overlay:</strong> rgba(30, 136, 229, 0.4) - Image
								overlays
							</li>
						</ul>

						<h5 class="title is-6 mt-3">Gradients</h5>
						<ul>
							<li>
								<strong>Sunset Gradient:</strong> linear-gradient(to bottom,
								#FF9A8B, #FF6F61, #1E88E5)
							</li>
						</ul>
					</div>
				</div>

				<div class="layout-preview mt-4 mb-6">
					<h5 class="title is-5">Layout Preview</h5>
					<svg
						width="600"
						height="400"
						viewBox="0 0 600 400"
						class="layout-mockup"
					>
						<!-- Sunset Gradient -->
						<defs>
							<linearGradient
								id="sunsetGradient"
								x1="0"
								y1="0"
								x2="0"
								y2="100%"
							>
								<stop offset="0%" stop-color="#FF9A8B" />
								<stop offset="50%" stop-color="#FF6F61" />
								<stop offset="100%" stop-color="#1E88E5" />
							</linearGradient>
						</defs>

						<!-- Background -->
						<rect width="600" height="400" fill="#F5E6D3" />

						<!-- Hero Section -->
						<rect width="600" height="250" fill="url(#sunsetGradient)" />
						<text
							x="300"
							y="120"
							fill="white"
							font-family="Arial"
							font-size="32"
							text-anchor="middle"
						>
							Discover Rottnest Island
						</text>

						<!-- Navigation -->
						<g transform="translate(30, 50)">
							<text fill="white" font-family="Arial" font-size="14">
								<tspan x="0" y="0">Activities</tspan>
								<tspan x="80" y="0">Gallery</tspan>
								<tspan x="160" y="0">Book</tspan>
							</text>
						</g>

						<!-- Activity Cards -->
						<g transform="translate(30, 280)">
							<!-- Card 1 -->
							<rect width="160" height="100" rx="4" fill="white" />
							<rect
								width="160"
								height="60"
								rx="4"
								fill="#1E88E5"
								opacity="0.4"
							/>
							<text
								x="80"
								y="85"
								fill="#2C3E50"
								font-family="Arial"
								font-size="14"
								text-anchor="middle"
							>
								Snorkeling
							</text>

							<!-- Card 2 -->
							<g transform="translate(180, 0)">
								<rect width="160" height="100" rx="4" fill="white" />
								<rect
									width="160"
									height="60"
									rx="4"
									fill="#1E88E5"
									opacity="0.4"
								/>
								<text
									x="80"
									y="85"
									fill="#2C3E50"
									font-family="Arial"
									font-size="14"
									text-anchor="middle"
								>
									Cycling
								</text>
							</g>
						</g>

						<!-- Annotations -->
						<g
							transform="translate(450, 20)"
							class="annotations"
							font-family="Arial"
							font-size="12"
						>
							<text x="0" y="0" fill="#666">Ocean: #1E88E5</text>
							<text x="0" y="20" fill="#666">Sand: #F5E6D3</text>
							<text x="0" y="40" fill="#666">Coral: #FF6F61</text>
						</g>
					</svg>
				</div>
			</section>

			<section id="accessibility-checklist" class="mt-6">
				<h3 class="title is-3">Accessibility Checklist</h3>
				<div class="box">
					<div class="contrast-examples mb-4">
						<div class="contrast-demo good-contrast">
							<p>Good Contrast</p>
							<span class="contrast-ratio">4.5:1 or higher</span>
						</div>
						<div class="contrast-demo poor-contrast">
							<p>Poor Contrast</p>
							<span class="contrast-ratio">Avoid this!</span>
						</div>
					</div>

					<div class="notification is-warning is-light">
						<p>
							<strong>Remember:</strong> Use tools like the WebAIM Contrast
							Checker to verify your color choices meet accessibility standards.
						</p>
					</div>
				</div>
			</section>
		</section>

		<!-- Add recommendations before the quiz -->
		<TutorialRecommendations :current-path="'/tutorials/beginner/css-basics/colors'" />

		<!-- Add quiz before the completion section -->
		<TutorialQuiz />

		<!-- Completion Section -->
		<div v-if="progressEnabled" class="completion-section mt-6">
			<h2 class="title is-2">Summary</h2>

			<div class="box">
				<h3 class="title is-4">What You've Learned</h3>
				<div class="content">
					<ul>
						<li>
							<strong>Color Fundamentals</strong>
							<ul>
								<li>
									Different ways to specify colors in CSS (keywords, hex, RGB,
									HSL)
								</li>
								<li>Understanding opacity and transparency</li>
								<li>Working with gradients and overlays</li>
							</ul>
						</li>
						<li>
							<strong>Color Management</strong>
							<ul>
								<li>
									Using CSS Custom Properties for consistent color schemes
								</li>
								<li>Creating color variations for different states</li>
								<li>Implementing dark mode alternatives</li>
							</ul>
						</li>
						<li>
							<strong>Accessibility</strong>
							<ul>
								<li>Ensuring sufficient color contrast</li>
								<li>Making content readable for all users</li>
								<li>Following WCAG guidelines</li>
							</ul>
						</li>
						<li>
							<strong>Practical Applications</strong>
							<ul>
								<li>Building cohesive color schemes</li>
								<li>Applying colors effectively in layouts</li>
								<li>Using color to enhance user experience</li>
							</ul>
						</li>
					</ul>
				</div>

				<div class="notification is-info is-light mt-5">
					<h4 class="title is-5">Helpful Resources</h4>
					<div class="content">
						<h5 class="title is-6">Color Tools</h5>
						<ul>
							<li>
								<a href="https://coolors.co" target="_blank" rel="noopener"
									>Coolors</a
								>
								- Color scheme generator
							</li>
							<li>
								<a
									href="https://color.adobe.com/create"
									target="_blank"
									rel="noopener"
									>Adobe Color</a
								>
								- Color wheel and palette creation
							</li>
							<li>
								<a href="https://mycolor.space" target="_blank" rel="noopener"
									>ColorSpace</a
								>
								- Color palette generator with gradients
							</li>
						</ul>

						<h5 class="title is-6 mt-4">Accessibility Tools</h5>
						<ul>
							<li>
								<a
									href="https://webaim.org/resources/contrastchecker/"
									target="_blank"
									rel="noopener"
									>WebAIM Contrast Checker</a
								>
								- Verify color contrast ratios
							</li>
							<li>
								<a
									href="https://www.whocanuse.com"
									target="_blank"
									rel="noopener"
									>WhoCanUse</a
								>
								- Color accessibility visualization
							</li>
							<li>
								<a
									href="https://colorable.jxnblk.com"
									target="_blank"
									rel="noopener"
									>Colorable</a
								>
								- Color combination accessibility testing
							</li>
						</ul>

						<h5 class="title is-6 mt-4">Further Reading</h5>
						<ul>
							<li>
								<a
									href="https://web.dev/learn/css/color"
									target="_blank"
									rel="noopener"
									>web.dev: CSS Color Guide</a
								>
							</li>
							<li>
								<a
									href="https://www.smashingmagazine.com/2016/04/web-developer-guide-color"
									target="_blank"
									rel="noopener"
									>Smashing Magazine: A Web Developer's Guide to Color</a
								>
							</li>
							<li>
								<a
									href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
									target="_blank"
									rel="noopener"
									>WCAG Color Contrast Guidelines</a
								>
							</li>
						</ul>
					</div>
				</div>

				<div class="notification is-warning is-light mt-5">
					<h4 class="title is-5">Next Steps</h4>
					<p>Now that you understand colors in CSS, you can:</p>
					<ul>
						<li>Create your own color schemes for future projects</li>
						<li>Implement accessible color combinations</li>
						<li>Use CSS Custom Properties for dynamic theming</li>
						<li>Experiment with gradients and overlays</li>
					</ul>
					<p class="mt-3">
						Continue to the Modern CSS tutorial to learn about current CSS
						features and best practices, including more ways to use the CSS
						Custom Properties we explored here. This will prepare you for
						responsive design and Flexbox in the following tutorials!
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.color-examples {
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
	margin: 1rem 0;
}

.color-demo {
	flex: 1;
	min-width: 150px;
	padding: 1rem;
	border-radius: 4px;
	text-align: center;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.color-demo p {
	margin: 0;
	font-weight: bold;
	background: none;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.color-demo code {
	display: block;
	margin-top: 0.5rem;
	background: none;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.color-demo.light-bg p,
.color-demo.light-bg code {
	color: #333;
	text-shadow: none;
}

.css-icon {
	color: rebeccapurple;
	margin-right: 0.5rem;
}

.tutorial-header {
	margin-bottom: 3rem;
	padding-bottom: 2rem;
	border-bottom: 1px solid var(--color-border);
}

.color-wheel {
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	display: block;
	filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.color-wheel text {
	font-family: system-ui, -apple-system, sans-serif;
	fill: #666;
}

.text-center {
	text-align: center;
}

.demo-container {
	display: flex;
	gap: 1rem;
	margin-bottom: 1.5rem;
}

.background-demo {
	flex: 1;
	padding: 2rem;
	border-radius: 8px;
	text-align: center;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.background-demo p {
	margin-bottom: 1rem;
	font-weight: bold;
}

.background-demo code {
	display: block;
	margin-top: 1rem;
	font-size: 0.9em;
}

.opacity-demo {
	background-image: url('/images/checkerboard.png');
	background-repeat: repeat;
}

.opacity-demo > div {
	padding: 2rem;
	border-radius: 8px;
}

.gradient-demo {
	min-height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.themed-component {
	border: 2px solid var(--primary-color, #3b82f6);
	border-radius: 8px;
	overflow: hidden;
}

.themed-header {
	background-color: var(--primary-color, #3b82f6);
	color: white;
	padding: 1rem;
}

.themed-content {
	padding: 1rem;
	background-color: var(--background-color, #f9fafb);
}

.themed-button {
	background-color: var(--accent-color, #f59e0b);
	color: white;
	border: none;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	cursor: pointer;
}

.contrast-demo {
	flex: 1;
	padding: 2rem;
	border-radius: 8px;
	text-align: center;
}

.good-contrast {
	background-color: #1a237e;
	color: white;
}

.poor-contrast {
	background-color: #e3f2fd;
	color: #a5c7f9;
}

.contrast-ratio {
	display: block;
	margin-top: 1rem;
	font-size: 0.9em;
	opacity: 0.8;
}

.brand-palette {
	display: flex;
	gap: 1rem;
	width: 100%;
}

.brand-color {
	flex: 1;
	padding: 2rem;
	border-radius: 8px;
	text-align: center;
	color: white;
}

.brand-color span {
	display: block;
	margin-bottom: 0.5rem;
}

.brand-color.primary {
	background-color: #3b82f6;
}

.brand-color.secondary {
	background-color: #f59e0b;
}

.brand-color.accent {
	background-color: #10b981;
}

.layout-preview {
	margin-top: 4rem;
	margin-bottom: 6rem;
}

.layout-mockup {
	width: 100%;
	height: auto;
	max-width: 600px;
	margin: 0 auto;
	display: block;
}

.annotations text {
	font-size: 12px;
	opacity: 0.8;
}
</style>
