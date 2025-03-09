<script setup>
import { ref, onMounted, inject } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import { usePageSections } from '@/composables/usePageSections';

// Define frontmatter
const frontmatter = {
	title: 'Text Manipulation with CSS',
	description: 'Learn how to style and manipulate text using CSS properties',
	difficulty: 'Beginner',
	duration: '30 minutes',
	tags: ['CSS', 'Typography', 'Styling'],
};
// Define the page navigation structure
const sections = [
	{
		id: 'typography-basics',
		title: 'Understanding Typography',
		subsections: [],
	},
	{
		id: 'historical-evolution',
		title: 'Historical Evolution',
		subsections: [
			{ id: 'movable-type', title: 'Movable Type' },
			{ id: 'digital-era', title: 'Digital Era' },
			{ id: 'historical-context', title: 'Historical Context' },
		],
	},
	{
		id: 'basic-text-properties',
		title: 'Basic Text Properties',
		subsections: [
			{ id: 'font-family', title: 'Font Family' },
			{ id: 'web-safe-fonts', title: 'Web Safe Fonts' },
			{ id: 'font-stacks', title: 'Font Stacks' },
			{ id: 'font-categories', title: 'Font Categories' },
			{ id: 'font-size', title: 'Font Size' },
			{ id: 'font-weight', title: 'Font Weight' },
			{ id: 'font-style', title: 'Font Style' },
			{ id: 'text-color', title: 'Text Color' },
		],
	},
	{
		id: 'vertical-alignment',
		title: 'Vertical Alignment',
		subsections: [
			{ id: 'baseline-alignment', title: 'Baseline Alignment' },
			{ id: 'vertical-align-properties', title: 'Vertical Align Properties' },
			{ id: 'text-spacing', title: 'Text Spacing' },
		],
	},
	{
		id: 'text-properties',
		title: 'Additional Text Properties',
		subsections: [
			{ id: 'text-decoration', title: 'Text Decoration' },
			{ id: 'text-transform', title: 'Text Transform' },
			{ id: 'text-spacing', title: 'Text Spacing' },
			{ id: 'text-shadow', title: 'Text Shadow' },
		],
	},
	{
		id: 'exercises',
		title: 'Practical Exercises',
		subsections: [
			{ id: 'black-swan-exercise', title: 'Black Swan Bistro' },
			{ id: 'rotto-rocks-exercise', title: 'Rotto Rocks' },
		],
	},
];

const { pageSections } = usePageSections(sections);

// CodeMirror examples
const fontStackExample = ref(`/* Modern system font stack */
body {
	font-family: -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, Oxygen-Sans,
		Ubuntu, Cantarell, 'Helvetica Neue',
		sans-serif;
}

/* Classic serif stack */
.serif-text {
	font-family: Georgia, 'Times New Roman',
		Times, serif;
}

/* Monospace stack for code */
.code {
	font-family: 'Courier New', Courier,
		monospace;
}`);

const fontSizeExample = ref(`/* Base sizes */
html {
	font-size: 16px; /* Root font size */
}

body {
	font-size: 1rem; /* Equal to root size */
}

/* Responsive headings */
h1 {
	font-size: 2rem;    /* 32px */
}

h2 {
	font-size: 1.5rem;  /* 24px */
}

h3 {
	font-size: 1.25rem; /* 20px */
}

/* Smaller text */
.small-text {
	font-size: 0.875rem; /* 14px */
}`);

const fontWeightExample = ref(`/* Common text weights */
.page-title {
	font-weight: 700;  /* Bold */
}

body {
	font-weight: 400;  /* Regular */
}

.subtitle {
	font-weight: 300;  /* Light */
}

/* Emphasis */
.important {
	font-weight: 600;  /* Semi-bold */
}

.highlight {
	font-weight: 500;  /* Medium */
}`);

const textColorExample = ref(`/* Basic text colors */
body {
	color: #333333;  /* Default text color */
}

.secondary-text {
	color: #666666;  /* Less prominent text */
}

.muted {
	color: #999999;  /* Muted text */
}`);

// Add text-align example
const textAlignExample = ref(`/* Text alignment examples */
.text-left {
  text-align: left;    /* Default alignment */
}

.text-center {
  text-align: center;  /* Center alignment */
}

.text-right {
  text-align: right;   /* Right alignment */
}

.text-justify {
  text-align: justify; /* Justified text */
}`);

const textSpacingExample = ref(`/* Text spacing examples */
.default-spacing {
  line-height: 1.5;          /* Line height */
  letter-spacing: normal;     /* Letter spacing */
  word-spacing: normal;       /* Word spacing */
}

.expanded-text {
  line-height: 2;            /* Double line height */
  letter-spacing: 0.1em;     /* Wider letter spacing */
  word-spacing: 0.3em;       /* Wider word spacing */
}

.condensed-text {
  line-height: 1.2;          /* Tighter line height */
  letter-spacing: -0.05em;   /* Tighter letter spacing */
  word-spacing: -0.1em;      /* Tighter word spacing */
}`);

const textDecorationExample = ref(`/* Text decoration examples */
.underline {
  text-decoration: underline;
}

.custom-underline {
  text-decoration: underline;
  text-decoration-color: #ff6b6b;
  text-decoration-thickness: 2px;
  text-decoration-style: wavy;
}

.line-through {
  text-decoration: line-through;
}

.overline {
  text-decoration: overline;
}

.no-decoration {
  text-decoration: none;  /* Removes decoration */
}

/* Multiple decorations */
.multiple-lines {
  text-decoration: underline overline;
  text-decoration-color: #4a90e2;
}`);

// Add vertical alignment example
const verticalAlignExample = ref(`/* Vertical alignment examples */
.v-baseline {
  vertical-align: baseline;  /* Default */
}

.v-super {
  vertical-align: super;     /* Superscript */
}

.v-sub {
  vertical-align: sub;       /* Subscript */
}

.v-text-top {
  vertical-align: text-top;  /* Align with top of text */
}

.v-text-bottom {
  vertical-align: text-bottom; /* Align with bottom of text */
}

/* Pixel values for fine-tuning */
.v-custom {
  vertical-align: -2px;     /* Negative moves down */
}`);

const fontFaceExample = ref(`/* Modern font-face declaration */
@font-face {
  font-family: 'MyWebFont';
  src: local('MyWebFont'),                          /* Try local font first */
       url('fonts/myfont.woff2') format('woff2'),  /* Modern browsers */
       url('fonts/myfont.woff') format('woff');    /* Older browsers */
  font-weight: 400;
  font-style: normal;
  font-display: swap;                              /* Control font loading behavior */
}

/* Variable font example */
@font-face {
  font-family: 'MyVariableFont';
  src: url('fonts/variable.woff2') format('woff2-variations');
  font-weight: 100 900;                           /* Weight range */
  font-stretch: 75% 125%;                         /* Width range */
  font-style: normal;
}

/* Using the fonts */
.my-text {
  font-family: 'MyWebFont', system-ui, sans-serif;
  font-weight: 400;
}

.variable-text {
  font-family: 'MyVariableFont', system-ui, sans-serif;
  font-weight: 375;                               /* Any value in the range */
  font-stretch: 110%;                             /* Any value in the range */
}`);

// Add a performance example
const fontPerformanceExample = ref(`/* Font loading strategies */
/* Preload critical fonts */
<link
  rel="preload"
  href="fonts/myfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin
>

/* Control loading behavior */
@font-face {
  font-family: 'MyWebFont';
  src: url('fonts/myfont.woff2') format('woff2');
  font-display: swap;    /* Show fallback until font loads */
}

/* Subset fonts for better performance */
@font-face {
  font-family: 'MyWebFont-Subset';
  src: url('fonts/myfont-latin.woff2') format('woff2');
  unicode-range: U+0000-00FF;  /* Latin characters only */
}`);

const traditionalFontStackExample = ref(`/* Traditional web safe font stacks */
.serif {
  font-family: Georgia, 'Times New Roman', Times, serif;
}`);

const systemFontStackExample = ref(`/* Modern system font stack */
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, 'Helvetica Neue', sans-serif;
}`);

// Add these new refs for the exercise code examples
const blackSwanFontsHTML = ref(
	`<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet">`,
);

const blackSwanBaseCSS = ref(`/* Base typography */
body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #000000;
}

h1, h2, h3, .brand-name {
  font-family: 'Playfair Display', serif;
  line-height: 1.2;
}`);

const blackSwanElementsCSS = ref(`/* Specific elements */
.brand-name {
  font-weight: 700;
  font-size: 2.5rem;
  color: #7D1C20;
}

.menu-section {
  font-size: 2rem;
  font-weight: 600;
}

.menu-item {
  font-size: 1.5rem;
  font-weight: 400;
}

.menu-description {
  font-size: 1rem;
  line-height: 1.5;
}`);

const rottoSystemFonts = ref(`/* Modern system font stack */
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, 
    Cantarell, 'Helvetica Neue', sans-serif;
}`);

const rottoTypographyScale = ref(`/* Typography scale */
h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.2;
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  line-height: 1.3;
}

h3 {
  font-size: clamp(1.25rem, 3vw, 2rem);
  line-height: 1.4;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 70ch;
}`);

const rottoContentStyles = ref(`/* Content sections */
.attraction-card {
  margin-bottom: 2rem;
}

.attraction-title {
  color: #2c5282;
  margin-bottom: 0.5rem;
}

.visitor-info {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 0.5rem;
}

.info-highlight {
  font-weight: 600;
  color: #2c5282;
}`);
</script>

<template>
	<div class="tutorial-content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/"
						><i class="fa-solid fa-house mr-2"></i> Home</router-link
					>
				</li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link to="/tutorials/css-basics">CSS Basics</router-link>
				</li>
				<li class="is-active"><a href="#" aria-current="page">Box Model</a></li>
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
			<h1 class="title">
				<i class="fa-brands fa-css css-icon"></i>
				Text Manipulation with CSS
			</h1>
			<p class="subtitle">
				Learn how to style and manipulate text using CSS properties
			</p>
		</header>

		<div id="typography-basics" class="box mt-4">
			<h3 class="title is-4">Understanding Typography</h3>
			<p>
				Typography is the art and technique of arranging type to make written
				language legible, readable, and appealing. Its history spans from
				ancient handwritten texts to modern digital displays.
			</p>

			<div class="typography-anatomy mt-4">
				<h4 class="title is-5">Type Anatomy</h4>
				<div class="svg-container">
					<svg
						width="800"
						height="500"
						viewBox="0 0 800 500"
						class="anatomy-diagram"
					>
						<!-- Background -->
						<rect width="800" height="500" fill="#ffffff" />

						<!-- Sample Text -->
						<text
							x="250"
							y="250"
							font-family="Georgia"
							font-size="120"
							fill="#333333"
						>
							Type
						</text>

						<!-- Guidelines and Labels -->
						<!-- Left side labels -->
						<text
							x="50"
							y="135"
							font-size="14"
							fill="#4a90e2"
							font-family="Arial"
						>
							Ascender Line
						</text>
						<text
							x="50"
							y="175"
							font-size="14"
							fill="#ff6b6b"
							font-family="Arial"
						>
							Cap Height
						</text>
						<text
							x="50"
							y="215"
							font-size="14"
							fill="#50c878"
							font-family="Arial"
						>
							Mean Line (x-height)
						</text>
						<text
							x="50"
							y="255"
							font-size="14"
							fill="#333333"
							font-family="Arial"
						>
							Baseline
						</text>
						<text
							x="50"
							y="295"
							font-size="14"
							fill="#9b59b6"
							font-family="Arial"
						>
							Descender Line
						</text>

						<!-- Lines (shifted right to not interfere with labels) -->
						<line
							x1="150"
							y1="130"
							x2="750"
							y2="130"
							stroke="#4a90e2"
							stroke-width="1"
							stroke-dasharray="5,5"
						/>
						<line
							x1="150"
							y1="170"
							x2="750"
							y2="170"
							stroke="#ff6b6b"
							stroke-width="1"
							stroke-dasharray="5,5"
						/>
						<line
							x1="150"
							y1="210"
							x2="750"
							y2="210"
							stroke="#50c878"
							stroke-width="1"
							stroke-dasharray="5,5"
						/>
						<line
							x1="150"
							y1="250"
							x2="750"
							y2="250"
							stroke="#333333"
							stroke-width="2"
						/>
						<line
							x1="150"
							y1="290"
							x2="750"
							y2="290"
							stroke="#9b59b6"
							stroke-width="1"
							stroke-dasharray="5,5"
						/>

						<!-- Measurements (right side) -->
						<g transform="translate(650, 0)">
							<!-- x-height measurement -->
							<line
								x1="0"
								y1="210"
								x2="0"
								y2="250"
								stroke="#50c878"
								stroke-width="1"
							/>
							<text
								x="10"
								y="230"
								font-size="12"
								fill="#50c878"
								font-family="Arial"
							>
								x-height
							</text>

							<!-- Cap height measurement -->
							<line
								x1="30"
								y1="170"
								x2="30"
								y2="250"
								stroke="#ff6b6b"
								stroke-width="1"
							/>
							<text
								x="40"
								y="210"
								font-size="12"
								fill="#ff6b6b"
								font-family="Arial"
							>
								Cap Height
							</text>

							<!-- Ascender height -->
							<line
								x1="60"
								y1="130"
								x2="60"
								y2="250"
								stroke="#4a90e2"
								stroke-width="1"
							/>
							<text
								x="70"
								y="190"
								font-size="12"
								fill="#4a90e2"
								font-family="Arial"
							>
								Ascender
							</text>

							<!-- Descender depth -->
							<line
								x1="90"
								y1="250"
								x2="90"
								y2="290"
								stroke="#9b59b6"
								stroke-width="1"
							/>
							<text
								x="100"
								y="270"
								font-size="12"
								fill="#9b59b6"
								font-family="Arial"
							>
								Descender
							</text>
						</g>

						<!-- Legend box -->
						<rect
							x="50"
							y="330"
							width="300"
							height="150"
							fill="#f8f9fa"
							rx="4"
						/>
						<g transform="translate(60, 350)">
							<text
								class="legend-title"
								font-size="14"
								fill="#333333"
								font-family="Arial"
								font-weight="bold"
							>
								Key Typography Terms
							</text>
							<g transform="translate(0, 30)">
								<text font-size="12" fill="#666666" font-family="Arial">
									<tspan x="0" dy="0">
										• Baseline: The invisible line where most letters sit
									</tspan>
									<tspan x="0" dy="20">
										• x-height: Height of lowercase letters (like 'x')
									</tspan>
									<tspan x="0" dy="20">
										• Cap Height: Height of capital letters
									</tspan>
									<tspan x="0" dy="20">
										• Ascender: Extends above x-height (like in 'h')
									</tspan>
									<tspan x="0" dy="20">
										• Descender: Extends below baseline (like in 'p')
									</tspan>
								</text>
							</g>
						</g>
					</svg>
				</div>
			</div>

			<div id="historical-evolution" class="historical-examples mt-4">
				<h4 class="title is-5">Historical Evolution</h4>
				<div class="columns is-multiline">
					<div class="column is-6">
						<figure id="movable-type" class="image-container">
							<!-- Inline SVG for movable type -->
							<svg
								viewBox="0 0 200 150"
								class="history-image"
								aria-label="Movable Type"
							>
								<!-- Background -->
								<rect width="200" height="150" fill="#f8f9fa" />
								<!-- Simplified movable type blocks -->
								<g transform="translate(20,20)">
									<rect x="0" y="0" width="30" height="30" fill="#666" rx="2" />
									<rect
										x="40"
										y="0"
										width="30"
										height="30"
										fill="#666"
										rx="2"
									/>
									<rect
										x="80"
										y="0"
										width="30"
										height="30"
										fill="#666"
										rx="2"
									/>
									<rect
										x="0"
										y="40"
										width="30"
										height="30"
										fill="#666"
										rx="2"
									/>
									<rect
										x="40"
										y="40"
										width="30"
										height="30"
										fill="#666"
										rx="2"
									/>
									<rect
										x="80"
										y="40"
										width="30"
										height="30"
										fill="#666"
										rx="2"
									/>
									<!-- Add letters on blocks -->
									<text
										x="8"
										y="20"
										fill="white"
										font-family="serif"
										font-size="14"
									>
										A
									</text>
									<text
										x="48"
										y="20"
										fill="white"
										font-family="serif"
										font-size="14"
									>
										B
									</text>
									<text
										x="88"
										y="20"
										fill="white"
										font-family="serif"
										font-size="14"
									>
										C
									</text>
									<text
										x="8"
										y="60"
										fill="white"
										font-family="serif"
										font-size="14"
									>
										D
									</text>
									<text
										x="48"
										y="60"
										fill="white"
										font-family="serif"
										font-size="14"
									>
										E
									</text>
									<text
										x="88"
										y="60"
										fill="white"
										font-family="serif"
										font-size="14"
									>
										F
									</text>
								</g>
							</svg>
							<figcaption>Gutenberg's movable type system (1440s)</figcaption>
						</figure>
					</div>
					<div class="column is-6">
						<figure id="digital-era" class="image-container">
							<svg
								viewBox="0 0 200 150"
								class="history-image"
								aria-label="Digital Typography"
							>
								<!-- Background -->
								<rect width="200" height="150" fill="#f8f9fa" />
								<!-- Digital type representation -->
								<g transform="translate(20,20)">
									<!-- Vector points -->
									<path
										d="M40,20 C60,20 80,40 80,60 C80,80 60,100 40,100"
										fill="none"
										stroke="#4a90e2"
										stroke-width="2"
									/>
									<!-- Bezier handles -->
									<circle cx="40" cy="20" r="3" fill="#ff6b6b" />
									<circle cx="80" cy="60" r="3" fill="#ff6b6b" />
									<circle cx="40" cy="100" r="3" fill="#ff6b6b" />
									<!-- Grid lines -->
									<line
										x1="0"
										y1="0"
										x2="160"
										y2="0"
										stroke="#ddd"
										stroke-width="0.5"
									/>
									<line
										x1="0"
										y1="20"
										x2="160"
										y2="20"
										stroke="#ddd"
										stroke-width="0.5"
									/>
									<line
										x1="0"
										y1="40"
										x2="160"
										y2="40"
										stroke="#ddd"
										stroke-width="0.5"
									/>
									<line
										x1="0"
										y1="60"
										x2="160"
										y2="60"
										stroke="#ddd"
										stroke-width="0.5"
									/>
									<line
										x1="0"
										y1="80"
										x2="160"
										y2="80"
										stroke="#ddd"
										stroke-width="0.5"
									/>
								</g>
							</svg>
							<figcaption>Modern digital type design</figcaption>
						</figure>
					</div>
				</div>
			</div>

			<div class="columns mt-4">
				<div id="historical-context" class="column">
					<h4 class="title is-5">Historical Context</h4>
					<div class="timeline">
						<div class="timeline-item">
							<div class="timeline-marker"></div>
							<div class="timeline-content">
								<p class="heading">3000 BCE</p>
								<p>Early writing systems and pictographs</p>
							</div>
						</div>
						<div class="timeline-item">
							<div class="timeline-marker"></div>
							<div class="timeline-content">
								<p class="heading">1440s</p>
								<p>Gutenberg's movable type revolutionizes printing</p>
							</div>
						</div>
						<div class="timeline-item">
							<div class="timeline-marker"></div>
							<div class="timeline-content">
								<p class="heading">1980s</p>
								<p>Digital typography emerges with desktop publishing</p>
							</div>
						</div>
						<div class="timeline-item">
							<div class="timeline-marker"></div>
							<div class="timeline-content">
								<p class="heading">1990s</p>
								<p>Web fonts and CSS bring typography to the internet</p>
							</div>
						</div>
					</div>
				</div>
				<div id="key-concepts" class="column">
					<h4 class="title is-5">Key Concepts</h4>
					<div class="content">
						<ul>
							<li>
								<strong>Type Anatomy:</strong> The parts of letters (baseline,
								x-height, ascenders, descenders)
							</li>
							<li>
								<strong>Typography Terms:</strong> Leading, kerning, tracking,
								and other essential concepts
							</li>
							<li>
								<strong>Type Classification:</strong> Serif, sans-serif,
								display, and decorative fonts
							</li>
							<li>
								<strong>Digital Evolution:</strong> From bitmap to vector fonts,
								web fonts to variable fonts
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div id="basic-text" class="mt-6">
			<h2 class="title is-3">Basic Text Properties</h2>
			<p>Master the fundamental properties for styling text in CSS.</p>

			<div id="font-family" class="box mt-4">
				<h3 class="title is-4">Font Family</h3>
				<div class="typography-context mb-4">
					<div class="notification is-light">
						<h4 class="title is-6">Historical Context</h4>
						<p>
							The concept of font families emerged from traditional typesetting,
							where related fonts were grouped into families. Each family
							included variations like regular, bold, and italic, designed to
							work harmoniously together.
						</p>
						<p class="mt-2">
							In digital typography, font families help maintain consistency
							across different devices and platforms, leading to the development
							of web-safe fonts and later, web fonts services.
						</p>
					</div>
				</div>
				<p>
					The font-family property specifies the typeface for text elements.
				</p>

				<div class="font-examples mt-4">
					<div class="columns">
						<div id="web-safe-fonts" class="column">
							<h4 class="title is-5">Web Safe Fonts</h4>
							<div class="content">
								<p>
									Web safe fonts are typefaces that are pre-installed across
									most operating systems and devices. They're considered "safe"
									because:
								</p>

								<div class="notification is-light mb-4">
									<h5 class="title is-6">Why They're "Safe"</h5>
									<ul>
										<li>
											<strong>Universal Availability:</strong> Pre-installed on
											99%+ of devices
										</li>
										<li>
											<strong>Zero Loading Time:</strong> No download required,
											instant rendering
										</li>
										<li>
											<strong>Consistent Performance:</strong> No FOUT (Flash of
											Unstyled Text)
										</li>
										<li>
											<strong>Fallback Reliability:</strong> Perfect for system
											font stacks
										</li>
										<li>
											<strong>Legacy Support:</strong> Work on older browsers
											and systems
										</li>
									</ul>
								</div>

								<div class="notification is-light mb-4">
									<h5 class="title is-6">Historical Context</h5>
									<p>
										Web safe fonts emerged in the early days of the web when:
									</p>
									<ul>
										<li>Bandwidth was limited and expensive</li>
										<li>@font-face wasn't widely supported</li>
										<li>Operating systems came with a standard set of fonts</li>
										<li>Web designers needed reliable typography solutions</li>
									</ul>
								</div>
							</div>
						</div>
						<div id="font-stacks" class="column">
							<h4 class="title is-5">Font Stacks</h4>
							<CodeMirror
								v-model="fontStackExample"
								:language="'css'"
								:readonly="true"
							/>

							<h4 class="title is-5 mt-4">Modern System Font Stack</h4>
							<CodeMirror
								v-model="systemFontStackExample"
								:language="'css'"
								:readonly="true"
							/>
							<p class="help mt-2">
								Modern approach: Using system UI fonts for native feel
							</p>
						</div>
					</div>
				</div>
				<div id="font-categories" class="font-table mt-4">
					<h5 class="title is-5">Common Web Safe Fonts by Category</h5>
					<table class="table is-fullwidth">
						<thead>
							<tr>
								<th>Category</th>
								<th>Font Names</th>
								<th>Best Used For</th>
								<th>OS Availability</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Sans-serif</td>
								<td>
									<span style="font-family: Arial">Arial</span>,
									<span style="font-family: Helvetica">Helvetica</span>,
									<span style="font-family: Verdana">Verdana</span>
								</td>
								<td>Body text, UI elements</td>
								<td>Windows, macOS, Linux</td>
							</tr>
							<tr>
								<td>Serif</td>
								<td>
									<span style="font-family: 'Times New Roman'"
										>Times New Roman</span
									>,
									<span style="font-family: Georgia">Georgia</span>
								</td>
								<td>Headlines, long-form content</td>
								<td>Windows, macOS</td>
							</tr>
							<tr>
								<td>Monospace</td>
								<td>
									<span style="font-family: 'Courier New'">Courier New</span>,
									<span style="font-family: monospace">Monaco</span>
								</td>
								<td>Code, technical content</td>
								<td>Universal</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="notification is-warning is-light mt-4">
					<strong>Important Considerations:</strong>
					<ul>
						<li>
							Web safe fonts might render differently across operating systems
						</li>
						<li>
							They often lack the design sophistication of modern web fonts
						</li>
						<li>Limited selection of weights and styles</li>
						<li>Best used as reliable fallbacks in font stacks</li>
					</ul>
				</div>
				<div class="notification is-info is-light mt-4">
					<strong>Best Practices:</strong>
					<ul>
						<li>Always include fallback fonts</li>
						<li>Use web-safe fonts or Google Fonts</li>
						<li>Consider loading times with web fonts</li>
						<li>Test fonts across different devices</li>
						<li>Use quotes for font names with spaces</li>
						<li>End with a generic font family</li>
					</ul>
				</div>
				<div id="font-formats" class="box mt-4">
					<h4 class="title is-5">Web Font Formats</h4>
					<div class="columns">
						<div class="column">
							<div class="content">
								<p>
									Modern web typography uses several font file formats, each
									with specific browser support and use cases:
								</p>

								<table class="table is-fullwidth">
									<thead>
										<tr>
											<th>Format</th>
											<th>Extension</th>
											<th>Description</th>
											<th>Support</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>WOFF2</code></td>
											<td>.woff2</td>
											<td>
												Web Open Font Format 2.0. Best compression and
												performance.
											</td>
											<td>Modern browsers</td>
										</tr>
										<tr>
											<td><code>WOFF</code></td>
											<td>.woff</td>
											<td>
												Original Web Open Font Format. Good fallback option.
											</td>
											<td>Wide support</td>
										</tr>
										<tr>
											<td><code>TTF/OTF</code></td>
											<td>.ttf/.otf</td>
											<td>TrueType/OpenType fonts. Original font formats.</td>
											<td>Legacy support</td>
										</tr>
									</tbody>
								</table>

								<div class="code-example mt-4">
									<h5 class="title is-6">Using @font-face</h5>
									<CodeMirror
										v-model="fontFaceExample"
										:language="'css'"
										:readonly="true"
									/>
								</div>

								<div class="notification is-info is-light mt-4">
									<strong>Best Practices:</strong>
									<ul>
										<li>
											Always include WOFF2 format first for best performance
										</li>
										<li>Provide WOFF as fallback for broader compatibility</li>
										<li>
											Consider using variable fonts for multiple weights/styles
										</li>
										<li>
											Implement font loading strategies to prevent FOUT/FOIT
										</li>
										<li>
											Use local() to leverage system-installed fonts when
											available
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="font-size" class="box mt-4">
				<h3 class="title is-4">Font Size</h3>
				<p>Control the size of your text using different CSS units.</p>

				<div class="columns">
					<div class="column">
						<h4 class="title is-5">Size Units</h4>
						<div class="example-text" style="font-size: 16px">
							Pixels (16px)
						</div>
						<div class="example-text" style="font-size: 1.2em">
							Em units (1.2em)
						</div>
						<div class="example-text" style="font-size: 1.2rem">
							Root Em (1.2rem)
						</div>
						<div class="example-text" style="font-size: 120%">
							Percentage (120%)
						</div>
					</div>
					<div class="column">
						<h4 class="title is-5">Size Examples</h4>
						<CodeMirror
							v-model="fontSizeExample"
							:language="'css'"
							:readonly="true"
						/>
					</div>
				</div>

				<div class="notification is-info is-light mt-4">
					<strong>Size Unit Tips:</strong>
					<ul>
						<li>Use rem for consistent sizing across the site</li>
						<li>Em units are relative to parent element's font size</li>
						<li>Pixels provide precise control but less flexibility</li>
						<li>Consider responsive design when choosing units</li>
					</ul>
				</div>
			</div>

			<div id="font-weight" class="box mt-4">
				<h3 class="title is-4">Font Weight</h3>
				<p>Adjust the thickness of your text with font-weight property.</p>

				<div class="columns">
					<div class="column">
						<h4 class="title is-5">Weight Values</h4>
						<div class="example-text" style="font-weight: 300">Light (300)</div>
						<div class="example-text" style="font-weight: 400">
							Regular (400)
						</div>
						<div class="example-text" style="font-weight: 600">
							Semi-Bold (600)
						</div>
						<div class="example-text" style="font-weight: 700">Bold (700)</div>
						<div class="example-text" style="font-weight: 900">Black (900)</div>
					</div>
					<div class="column">
						<h4 class="title is-5">Weight Examples</h4>
						<CodeMirror
							v-model="fontWeightExample"
							:language="'css'"
							:readonly="true"
						/>
					</div>
				</div>
			</div>

			<div id="text-color" class="box mt-4">
				<h3 class="title is-4">Text Color</h3>
				<p>
					Control the color of your text using CSS. We'll cover the basics here,
					but for a deeper dive into colors, check out the
					<router-link :to="{ name: 'css-basics-colors' }"
						>Colors tutorial</router-link
					>.
				</p>

				<div class="columns">
					<div class="column">
						<div class="example-text" style="color: #333333">
							Basic text color (#333333)
						</div>
						<div class="example-text" style="color: #666666">
							Secondary text (#666666)
						</div>
						<div class="example-text" style="color: #999999">
							Muted text (#999999)
						</div>
					</div>
					<div class="column">
						<h4 class="title is-5">Color Examples</h4>
						<CodeMirror
							v-model="textColorExample"
							:language="'css'"
							:readonly="true"
						/>
					</div>
				</div>
			</div>

			<div id="text-align" class="box mt-4">
				<h3 class="title is-4">Text Alignment</h3>
				<p>
					Control how text is aligned within an element using the text-align
					property.
				</p>

				<div class="columns mt-4">
					<div class="column">
						<h4 class="title is-5">Alignment Examples</h4>
						<div class="example-text" style="text-align: left">
							Left aligned text (default): Lorem ipsum dolor sit amet,
							consectetur adipiscing elit.
						</div>
						<div class="example-text" style="text-align: center">
							Center aligned text: Lorem ipsum dolor sit amet, consectetur
							adipiscing elit.
						</div>
						<div class="example-text" style="text-align: right">
							Right aligned text: Lorem ipsum dolor sit amet, consectetur
							adipiscing elit.
						</div>
						<div class="example-text" style="text-align: justify">
							Justified text: Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris.
						</div>
					</div>
					<div class="column">
						<h4 class="title is-5">Code Example</h4>
						<CodeMirror
							v-model="textAlignExample"
							:language="'css'"
							:readonly="true"
						/>
					</div>
				</div>

				<div class="notification is-info is-light mt-4">
					<strong>Best Practices:</strong>
					<ul>
						<li>
							Use left alignment for most body text (default in left-to-right
							languages)
						</li>
						<li>
							Center alignment works well for headings and short pieces of text
						</li>
						<li>
							Right alignment is useful for numbers in tables or specific design
							elements
						</li>
						<li>
							Use justify with caution as it can create uneven spacing between
							words
						</li>
						<li>
							Consider text direction in different languages when setting
							alignment
						</li>
					</ul>
				</div>
			</div>
			<div id="vertical-alignment" class="box mt-4">
				<h3 class="title is-4">Vertical Alignment</h3>
				<div class="baseline-diagram mb-4">
					<figure class="image-container">
						<svg
							class="baseline-image"
							viewBox="0 0 800 400"
							aria-label="Baseline Grid"
						>
							<!-- Background -->
							<rect width="800" height="400" fill="#ffffff" />

							<!-- Baseline grid lines -->
							<g class="grid-lines">
								<!-- Draw horizontal baseline grid lines every 24px -->
								<line
									x1="0"
									y1="72"
									x2="800"
									y2="72"
									stroke="#e0e0e0"
									stroke-width="1"
								/>
								<line
									x1="0"
									y1="96"
									x2="800"
									y2="96"
									stroke="#e0e0e0"
									stroke-width="1"
								/>
								<line
									x1="0"
									y1="120"
									x2="800"
									y2="120"
									stroke="#e0e0e0"
									stroke-width="1"
								/>
								<line
									x1="0"
									y1="144"
									x2="800"
									y2="144"
									stroke="#e0e0e0"
									stroke-width="1"
								/>
								<line
									x1="0"
									y1="168"
									x2="800"
									y2="168"
									stroke="#e0e0e0"
									stroke-width="1"
								/>
								<line
									x1="0"
									y1="192"
									x2="800"
									y2="192"
									stroke="#e0e0e0"
									stroke-width="1"
								/>
								<line
									x1="0"
									y1="216"
									x2="800"
									y2="216"
									stroke="#e0e0e0"
									stroke-width="1"
								/>
								<line
									x1="0"
									y1="240"
									x2="800"
									y2="240"
									stroke="#e0e0e0"
									stroke-width="1"
								/>
							</g>

							<!-- Column dividers -->
							<line
								x1="266"
								y1="40"
								x2="266"
								y2="360"
								stroke="#e0e0e0"
								stroke-width="1"
							/>
							<line
								x1="533"
								y1="40"
								x2="533"
								y2="360"
								stroke="#e0e0e0"
								stroke-width="1"
							/>

							<!-- Sample text aligned to baseline -->
							<text
								x="50"
								y="96"
								font-family="Georgia"
								font-size="16"
								fill="#333"
							>
								First column text aligned
							</text>
							<text
								x="50"
								y="120"
								font-family="Georgia"
								font-size="16"
								fill="#333"
							>
								to the baseline grid for
							</text>
							<text
								x="50"
								y="144"
								font-family="Georgia"
								font-size="16"
								fill="#333"
							>
								consistent vertical rhythm.
							</text>

							<!-- Second column -->
							<text
								x="286"
								y="96"
								font-family="Georgia"
								font-size="16"
								fill="#333"
							>
								Text in the second column
							</text>
							<text
								x="286"
								y="120"
								font-family="Georgia"
								font-size="16"
								fill="#333"
							>
								maintains the same baseline
							</text>
							<text
								x="286"
								y="144"
								font-family="Georgia"
								font-size="16"
								fill="#333"
							>
								alignment across columns.
							</text>

							<!-- Third column -->
							<text
								x="553"
								y="96"
								font-family="Georgia"
								font-size="16"
								fill="#333"
							>
								The third column shows
							</text>
							<text
								x="553"
								y="120"
								font-family="Georgia"
								font-size="16"
								fill="#333"
							>
								how text aligns perfectly
							</text>
							<text
								x="553"
								y="144"
								font-family="Georgia"
								font-size="16"
								fill="#333"
							>
								with the baseline grid.
							</text>

							<!-- Baseline indicators -->
							<g class="baseline-markers">
								<line
									x1="30"
									y1="96"
									x2="40"
									y2="96"
									stroke="#4a90e2"
									stroke-width="2"
								/>
								<line
									x1="30"
									y1="120"
									x2="40"
									y2="120"
									stroke="#4a90e2"
									stroke-width="2"
								/>
								<line
									x1="30"
									y1="144"
									x2="40"
									y2="144"
									stroke="#4a90e2"
									stroke-width="2"
								/>
							</g>
						</svg>
						<figcaption>
							Traditional baseline grid showing how text aligns across columns
						</figcaption>
					</figure>
				</div>

				<div class="columns mt-4">
					<div class="column">
						<h4 class="title is-5">Text Vertical Alignment Examples</h4>

						<div class="example-box">
							<h5 class="title is-6">Text Vertical Alignment Examples</h5>

							<!-- Basic Text Alignment -->
							<div class="vertical-examples">
								<div class="example-row">
									<span class="label">Base with super/sub:</span>
									<div class="demo-text">
										Base text
										<span class="superscript">superscript</span>
										and
										<span class="subscript">subscript</span>
										example
									</div>
								</div>

								<!-- Text with Icons -->
								<div class="example-row">
									<span class="label">Baseline:</span>
									<div class="demo-text">
										<svg
											class="align-icon"
											style="vertical-align: baseline"
											width="20"
											height="20"
											viewBox="0 0 20 20"
										>
											<rect width="20" height="20" fill="#4a90e2" />
										</svg>
										Baseline (default)
									</div>
								</div>

								<div class="example-row">
									<span class="label">Middle:</span>
									<div class="demo-text">
										<svg
											class="align-icon"
											style="vertical-align: middle"
											width="20"
											height="20"
											viewBox="0 0 20 20"
										>
											<rect width="20" height="20" fill="#4a90e2" />
										</svg>
										Middle alignment
									</div>
								</div>

								<div class="example-row">
									<span class="label">Text-top:</span>
									<div class="demo-text">
										<svg
											class="align-icon"
											style="vertical-align: text-top"
											width="20"
											height="20"
											viewBox="0 0 20 20"
										>
											<rect width="20" height="20" fill="#4a90e2" />
										</svg>
										Text top
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="column">
						<h4 class="title is-5">Code Example</h4>
						<CodeMirror
							v-model="verticalAlignExample"
							:language="'css'"
							:readonly="true"
						/>

						<div class="property-details mt-4">
							<h5 class="title is-6">Vertical Align Properties</h5>
							<ul>
								<li>
									<strong>baseline:</strong> Default, aligns with text baseline
								</li>
								<li><strong>sub:</strong> Subscript alignment</li>
								<li><strong>super:</strong> Superscript alignment</li>
								<li>
									<strong>text-top:</strong> Aligns with top of parent's font
								</li>
								<li>
									<strong>text-bottom:</strong> Aligns with bottom of parent's
									font
								</li>
								<li><strong>middle:</strong> Aligns with middle of parent</li>
								<li>
									<strong>Length values:</strong> Raise or lower by specific
									amount
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="notification is-info is-light mt-4">
					<strong>Best Practices:</strong>
					<ul>
						<li>Use vertical-align only with inline or table-cell elements</li>
						<li>
							Consider using flexbox or grid for complex vertical alignments
						</li>
						<li>Be consistent with baseline alignment in typography</li>
						<li>Test alignment across different font sizes and families</li>
						<li>Use percentage values for responsive designs</li>
					</ul>
				</div>
			</div>
			<div id="text-spacing" class="box mt-4">
				<h3 class="title is-4">Text Spacing</h3>
				<div class="typography-context mb-4">
					<div class="spacing-diagrams">
						<div class="columns">
							<div class="column is-4">
								<figure class="image-container">
									<svg
										class="spacing-image"
										viewBox="0 0 300 200"
										aria-label="Leading in Typography"
									>
										<text
											x="50"
											y="50"
											font-family="Georgia"
											font-size="24"
											fill="#333"
										>
											Line One
										</text>
										<text
											x="50"
											y="90"
											font-family="Georgia"
											font-size="24"
											fill="#333"
										>
											Line Two
										</text>
										<text
											x="50"
											y="130"
											font-family="Georgia"
											font-size="24"
											fill="#333"
										>
											Line Three
										</text>
										<!-- Leading indicators -->
										<line
											x1="30"
											y1="60"
											x2="30"
											y2="100"
											stroke="#4a90e2"
											stroke-width="2"
										/>
										<text
											x="15"
											y="80"
											font-family="Arial"
											font-size="14"
											fill="#4a90e2"
										>
											24px
										</text>
									</svg>
									<figcaption>Traditional leading with metal type</figcaption>
								</figure>
							</div>
							<div class="column is-4">
								<figure class="image-container">
									<svg
										class="spacing-image"
										viewBox="0 0 300 200"
										aria-label="Kerning in Typography"
									>
										<text
											x="50"
											y="100"
											font-family="Georgia"
											font-size="48"
											fill="#333"
										>
											VA
										</text>
										<!-- Kerning indicators -->
										<path
											d="M80,110 L100,110"
											stroke="#ff6b6b"
											stroke-width="2"
										/>
										<text
											x="85"
											y="130"
											font-family="Arial"
											font-size="14"
											fill="#ff6b6b"
										>
											-2px
										</text>
									</svg>
									<figcaption>Kerning adjustments between letters</figcaption>
								</figure>
							</div>
							<div class="column is-4">
								<figure class="image-container">
									<svg
										class="spacing-image"
										viewBox="0 0 300 200"
										aria-label="Tracking in Typography"
									>
										<text
											x="50"
											y="100"
											font-family="Georgia"
											font-size="36"
											fill="#333"
											letter-spacing="0.2em"
										>
											TRACK
										</text>
										<!-- Tracking indicators -->
										<line
											x1="50"
											y1="120"
											x2="250"
											y2="120"
											stroke="#50c878"
											stroke-width="2"
										/>
										<text
											x="130"
											y="140"
											font-family="Arial"
											font-size="14"
											fill="#50c878"
										>
											0.2em spacing
										</text>
									</svg>
									<figcaption>
										Tracking affects overall letter spacing
									</figcaption>
								</figure>
							</div>
						</div>
					</div>
				</div>
				<p>
					Control the spacing between lines, letters, and words to improve
					readability and visual appeal.
				</p>

				<div class="columns mt-4">
					<div class="column">
						<h4 class="title is-5">Spacing Examples</h4>

						<div class="example-box">
							<h5 class="title is-6">Default Spacing</h5>
							<div class="example-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation.
							</div>
						</div>

						<div class="example-box">
							<h5 class="title is-6">Expanded Spacing</h5>
							<div
								class="example-text"
								style="
									line-height: 2;
									letter-spacing: 0.1em;
									word-spacing: 0.3em;
								"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation.
							</div>
						</div>

						<div class="example-box">
							<h5 class="title is-6">Condensed Spacing</h5>
							<div
								class="example-text"
								style="
									line-height: 1.2;
									letter-spacing: -0.05em;
									word-spacing: -0.1em;
								"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation.
							</div>
						</div>
					</div>

					<div class="column">
						<h4 class="title is-5">Code Example</h4>
						<CodeMirror
							v-model="textSpacingExample"
							:language="'css'"
							:readonly="true"
						/>

						<div class="property-details mt-4">
							<h5 class="title is-6">Property Details</h5>
							<ul>
								<li>
									<strong>line-height:</strong> Controls the height of each line
									of text
									<ul>
										<li>Can be unitless (recommended)</li>
										<li>Common values: 1.5-1.7 for body text</li>
									</ul>
								</li>
								<li>
									<strong>letter-spacing:</strong> Adjusts space between
									characters
									<ul>
										<li>Use em units for relative spacing</li>
										<li>Negative values bring letters closer</li>
									</ul>
								</li>
								<li>
									<strong>word-spacing:</strong> Controls space between words
									<ul>
										<li>Default is normal (0)</li>
										<li>Use em units for relative spacing</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="notification is-info is-light mt-4">
					<strong>Best Practices:</strong>
					<ul>
						<li>
							Use unitless values for line-height to maintain proportional
							spacing
						</li>
						<li>Keep letter-spacing subtle for body text (±0.05em or less)</li>
						<li>Test readability across different screen sizes</li>
						<li>Consider using tighter spacing for headings</li>
						<li>Use expanded spacing sparingly for emphasis or style</li>
					</ul>
				</div>
			</div>

			<section id="text-properties" class="mt-6">
				<h3 class="title is-4">Additional Text Properties</h3>

				<!-- Text Decoration -->
				<div class="columns">
					<div class="column">
						<div class="notification is-light">
							<h4 class="title is-5">Text Decoration</h4>
							<div class="example-box">
								<div class="example-row">
									<code>text-decoration: underline;</code>
									<span style="text-decoration: underline"
										>Underlined text</span
									>
								</div>
								<div class="example-row">
									<code>text-decoration: line-through;</code>
									<span style="text-decoration: line-through"
										>Strikethrough text</span
									>
								</div>
								<div class="example-row">
									<code>text-decoration: overline;</code>
									<span style="text-decoration: overline">Overlined text</span>
								</div>
								<div class="example-row">
									<code>text-decoration: underline wavy red;</code>
									<span style="text-decoration: underline wavy red"
										>Styled underline</span
									>
								</div>
							</div>
						</div>
					</div>

					<!-- Text Transform -->
					<div class="column">
						<div class="notification is-light">
							<h4 class="title is-5">Text Transform</h4>
							<div class="example-box">
								<div class="example-row">
									<code>text-transform: uppercase;</code>
									<span style="text-transform: uppercase">uppercase text</span>
								</div>
								<div class="example-row">
									<code>text-transform: lowercase;</code>
									<span style="text-transform: lowercase">LOWERCASE TEXT</span>
								</div>
								<div class="example-row">
									<code>text-transform: capitalize;</code>
									<span style="text-transform: capitalize"
										>capitalized text</span
									>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Text Spacing -->
				<div class="columns mt-4">
					<div class="column">
						<div class="notification is-light">
							<h4 class="title is-5">Text Spacing</h4>
							<div class="example-box">
								<div class="example-row">
									<code>letter-spacing: 0.2em;</code>
									<span style="letter-spacing: 0.2em">Spaced out letters</span>
								</div>
								<div class="example-row">
									<code>word-spacing: 1em;</code>
									<span style="word-spacing: 1em">Words with extra space</span>
								</div>
								<div class="example-row">
									<code>white-space: nowrap;</code>
									<span style="white-space: nowrap"
										>This text won't wrap to new line</span
									>
								</div>
							</div>
						</div>
					</div>

					<!-- Text Shadow -->
					<div class="column">
						<div class="notification is-light">
							<h4 class="title is-5">Text Shadow</h4>
							<div class="example-box">
								<div class="example-row">
									<code>text-shadow: 2px 2px 4px #000;</code>
									<span
										style="
											text-shadow: 2px 2px 4px #000;
											color: #fff;
											background: #666;
											padding: 0.5rem;
										"
										>Basic shadow</span
									>
								</div>
								<div class="example-row">
									<code>text-shadow: 0 0 5px #ff0000;</code>
									<span style="text-shadow: 0 0 5px #ff0000">Glowing text</span>
								</div>
								<div class="example-row">
									<code>text-shadow: 1px 1px #ff0000, -1px -1px #00ff00;</code>
									<span style="text-shadow: 1px 1px #ff0000, -1px -1px #00ff00"
										>Multiple shadows</span
									>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="notification is-info is-light mt-4">
					<h4 class="title is-6">Best Practices</h4>
					<ul>
						<li>Use text-decoration sparingly to maintain readability</li>
						<li>
							Consider accessibility when using text-transform (screen readers
							may read uppercase text as acronyms)
						</li>
						<li>Ensure text shadows maintain sufficient contrast</li>
						<li>
							Be cautious with letter-spacing as it can affect readability at
							extreme values
						</li>
					</ul>
				</div>
			</section>
			<section id="exercises" class="mt-6">
				<h2 class="title is-3">Practical Exercises</h2>

				<div class="exercise-container">
					<!-- Black Swan Exercise -->
					<div class="box exercise">
						<h3 class="title is-4">Exercise 1: Black Swan Bistro Typography</h3>

						<div class="notification is-light">
							<h4 class="title is-5">Requirements</h4>
							<ul>
								<li>
									Implement the brand fonts (Playfair Display and Source Sans
									Pro)
								</li>
								<li>
									Set up proper font sizes and weights as specified in the style
									guide
								</li>
								<li>Ensure proper line heights for readability</li>
								<li>Apply appropriate text colors from the brand palette</li>
							</ul>
						</div>

						<div class="steps mt-4">
							<h4 class="title is-5">Steps</h4>
							<ol>
								<li>
									Add the Google Fonts link to your HTML:
									<CodeMirror v-model="blackSwanFontsHTML" readonly />
								</li>
								<li>
									Set up your base typography CSS:
									<CodeMirror v-model="blackSwanBaseCSS" readonly />
								</li>
								<li>
									Style specific elements:
									<CodeMirror v-model="blackSwanElementsCSS" readonly />
								</li>
							</ol>
						</div>

						<div class="notification is-info is-light mt-4">
							<h4 class="title is-6">Success Criteria</h4>
							<ul>
								<li>Brand name uses Playfair Display (700 weight)</li>
								<li>Headings use correct font sizes (2.5rem, 2rem, 1.5rem)</li>
								<li>Body text uses Source Sans Pro with proper line height</li>
								<li>Menu descriptions are properly styled and readable</li>
							</ul>
						</div>
					</div>

					<!-- Rotto Rocks Exercise -->
					<div class="box exercise">
						<h3 class="title is-4">
							Exercise 2: Rotto Rocks Content Hierarchy
						</h3>

						<div class="notification is-light">
							<h4 class="title is-5">Requirements</h4>
							<ul>
								<li>
									Create a clear typographic hierarchy for content sections
								</li>
								<li>Style headings to distinguish between sections</li>
								<li>Format visitor information for easy scanning</li>
								<li>
									Ensure proper spacing and readability for long-form content
								</li>
							</ul>
						</div>

						<div class="steps mt-4">
							<h4 class="title is-5">Steps</h4>
							<ol>
								<li>
									Set up a system font stack:
									<CodeMirror v-model="rottoSystemFonts" readonly />
								</li>
								<li>
									Create your typography scale:
									<CodeMirror v-model="rottoTypographyScale" readonly />
								</li>
								<li>
									Style content sections:
									<CodeMirror v-model="rottoContentStyles" readonly />
								</li>
							</ol>
						</div>

						<div class="notification is-info is-light mt-4">
							<h4 class="title is-6">Success Criteria</h4>
							<ul>
								<li>Clear distinction between content sections</li>
								<li>Readable paragraphs with appropriate line height</li>
								<li>Consistent spacing between elements</li>
								<li>Proper emphasis for important information</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
		<TutorialNavigation prev="css-basics-box-model" next="css-basics-layout" />
	</div>
</template>

<style scoped>
.content {
	max-width: 960px;
	margin: 0 auto;
	padding: 1rem;
}

.example-text {
	font-size: 1.1rem;
	margin: 1rem 0;
	padding: 0.5rem;
	border: 1px solid #eee;
	border-radius: 4px;
	background-color: white;
	min-height: 60px;
	display: flex;
	align-items: center;
}

.mt-4 {
	margin-top: 1rem;
}

.mt-6 {
	margin-top: 1.5rem;
}

.columns {
	display: flex;
	gap: 1rem;
	margin-top: 1rem;
}

.column {
	flex: 1;
}

pre {
	background-color: #f5f5f5;
	padding: 1rem;
	border-radius: 4px;
	overflow-x: auto;
}

code {
	font-family: monospace;
	color: #2c3e50;
}

@media (max-width: 768px) {
	.columns {
		flex-direction: column;
	}
}

:deep(.cm-editor) {
	height: auto !important;
	border: 1px solid #ddd;
	border-radius: 4px;
	min-height: 200px;
}

:deep(.cm-scroller) {
	overflow: auto;
	min-height: 200px;
}

:deep(.cm-content) {
	white-space: pre-wrap;
}

.example-box {
	margin-bottom: 2rem;
}

.example-text {
	margin: 1rem 0;
	padding: 1rem;
	border: 1px solid #eee;
	border-radius: 4px;
	background-color: white;
}

.property-details ul {
	list-style-type: disc;
	margin-left: 1.5rem;
}

.property-details ul ul {
	margin: 0.5rem 0 0.5rem 1.5rem;
	list-style-type: circle;
}

.property-details li {
	margin-bottom: 0.5rem;
}

.example-box p {
	margin: 1rem 0;
}

.example-text a {
	display: inline-block;
	margin: 0.5rem 0;
}

.timeline {
	margin-left: 1rem;
	padding-left: 1rem;
	border-left: 2px solid #dbdbdb;
}

.timeline-item {
	padding: 1rem 0;
	position: relative;
}

.timeline-marker {
	position: absolute;
	left: -1.3rem;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: #4a90e2;
	border: 2px solid white;
}

.timeline-content {
	padding-left: 1rem;
}

.timeline-content .heading {
	font-weight: bold;
	color: #4a90e2;
}

.typography-context .notification {
	background-color: #f8f9fa;
	padding: 1.25rem;
}

.typography-context .title.is-6 {
	color: #2c3e50;
	margin-bottom: 0.75rem;
}

.example-text img {
	margin: 0 5px;
}

.image-container {
	margin: 1rem 0;
	text-align: center;
}

.anatomy-diagram {
	max-width: 100%;
	height: auto;
	margin-bottom: 1rem;
}

.history-image {
	max-width: 100%;
	height: auto;
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.spacing-image {
	max-width: 100%;
	height: auto;
	border: 1px solid #eee;
	border-radius: 4px;
}

.baseline-image {
	max-width: 100%;
	height: auto;
	border: 1px solid #eee;
	border-radius: 4px;
}

.figcaption {
	font-size: 0.9rem;
	color: #666;
	margin-top: 0.5rem;
	font-style: italic;
}

.diagram-caption {
	background: #f8f9fa;
	padding: 1rem;
	border-radius: 4px;
	margin-top: 1rem;
}

.diagram-caption ol {
	margin-left: 1.5rem;
	margin-top: 0.5rem;
}

.svg-container {
	width: 100%;
	margin: 1rem 0;
	background-color: white;
	border: 1px solid #eee;
	border-radius: 4px;
	padding: 1rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.svg-container svg {
	width: 100%;
	height: auto;
	max-width: 800px;
	margin: 0 auto;
	display: block;
}

/* Ensure text is crisp */
.anatomy-diagram text {
	shape-rendering: geometricPrecision;
	text-rendering: geometricPrecision;
}

/* Make lines crisp */
.anatomy-diagram line {
	shape-rendering: crispEdges;
}

@media (max-width: 768px) {
	.svg-container svg {
		max-width: 100%;
	}
}

.code-example {
	background: #f8f9fa;
	padding: 1rem;
	border-radius: 4px;
}

.table {
	font-size: 0.9rem;
}

.table code {
	background-color: #f1f3f5;
	padding: 0.2rem 0.4rem;
	border-radius: 3px;
}

.font-table .table td span {
	font-size: 1.1em;
	margin-right: 0.5em;
}

.help {
	font-size: 0.875rem;
	color: #666;
}

/* Add some spacing between notifications */
.notification {
	margin-bottom: 1.5rem;
}

/* Make titles in notifications more prominent */
.notification .title.is-6 {
	color: #2c3e50;
	margin-bottom: 1rem;
}

/* Add some padding to lists in notifications */
.notification ul {
	padding-left: 1.2rem;
}

.notification li {
	margin-bottom: 0.5rem;
}

.stack-example {
	background: #f8f9fa;
	padding: 1.5rem;
	border-radius: 4px;
	border: 1px solid #e9ecef;
	margin-bottom: 2rem;
}

.stack-example:not(:last-child) {
	margin-bottom: 2rem;
}

.stack-example .title.is-6 {
	color: #2c3e50;
	margin-bottom: 1rem;
}

.help {
	font-size: 0.875rem;
	color: #666;
	margin-top: 0.5rem;
}

/* Add subtle hover effect to examples */
.stack-example:hover {
	border-color: #dee2e6;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.image-container {
	background: white;
	padding: 1.5rem;
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.history-image {
	width: 100%;
	height: auto;
	display: block;
}

figcaption {
	text-align: center;
	margin-top: 0.5rem;
	font-size: 0.9rem;
	color: #666;
}

.align-icon {
	display: inline-block;
	border-radius: 3px;
}
.exercise {
	margin-bottom: 2rem;
}

.steps ol {
	list-style-type: decimal;
	margin-left: 1.5rem;
}

.steps li {
	margin-bottom: 1.5rem;
}

.notification ul {
	margin-left: 1.5rem;
	list-style-type: disc;
}
/* Optional: Add hover effect to make icons interactive */
.align-icon:hover {
	filter: brightness(1.1);
}

.image-container {
	background: white;
	padding: 1.5rem;
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.spacing-image {
	width: 100%;
	height: auto;
	display: block;
}

figcaption {
	text-align: center;
	margin-top: 1rem;
	font-size: 0.9rem;
	color: #666;
}

/* Ensure SVGs maintain aspect ratio */
svg.spacing-image {
	aspect-ratio: 3/2;
}

/* Optional: Add hover states to highlight measurements */
svg:hover line,
svg:hover path {
	stroke-width: 3;
}

/* Optional: Add hover effects to highlight grid */
.grid-lines line:hover {
	stroke: #4a90e2;
	stroke-width: 2;
}

.baseline-markers line {
	transition: stroke-width 0.2s ease;
}

.baseline-markers line:hover {
	stroke-width: 3;
}

.vertical-examples {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.example-row {
	display: flex;
	align-items: center;
	gap: 1.5rem;
}

.label {
	min-width: 120px;
	font-weight: 500;
	color: #666;
}

.demo-text {
	font-size: 18px;
	line-height: 1.5;
	min-height: 2em;
	display: flex;
	align-items: baseline;
	gap: 0.5rem;
}

.superscript {
	vertical-align: super;
	font-size: 0.8em;
	color: #4a90e2;
}

.subscript {
	vertical-align: sub;
	font-size: 0.8em;
	color: #4a90e2;
	position: relative;
	top: 0.3em; /* Adjust to ensure proper sub positioning */
}

.align-icon {
	display: inline-block;
	border-radius: 3px;
	flex-shrink: 0;
}

/* Optional: Add hover effect */
.align-icon:hover {
	filter: brightness(1.1);
}

/* Add visual guides */
.demo-text {
	position: relative;
}

.demo-text::after {
	content: '';
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	border-bottom: 1px dashed #ddd;
	pointer-events: none;
}

.style-examples {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.example-row {
	display: flex;
	align-items: center;
	gap: 1rem;
}

.example-row code {
	min-width: 70px;
	background: #f5f5f5;
	padding: 0.2rem 0.4rem;
	border-radius: 3px;
}

.example-row span {
	font-size: 1.1rem;
}
</style>
