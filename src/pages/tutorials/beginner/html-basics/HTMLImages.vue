<template>
	<div class="tutorial-content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link to="/tutorials/html-basics">HTML Basics</router-link>
				</li>
				<li class="is-active"><a href="#" aria-current="page">Images</a></li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">25 minutes</span>
			<span class="tag is-success">Theory</span>
			<span class="tag is-primary">Practice</span>
			<span class="tag is-link">Project</span>
		</div>

		<h1 class="title is-1">
			<i class="fab fa-html5 html-icon"></i> Images in HTML
		</h1>

		<div class="box">
			<h2 class="title is-4">
				<i class="fas fa-graduation-cap section-icon"></i> Learning Goals
			</h2>
			<div class="tutorial-card">
				<p>After completing this tutorial, you will be able to:</p>
				<ul>
					<li>Add images to your web pages using the img element</li>
					<li>Write descriptive and accessible alt text for images</li>
					<li>Choose appropriate image formats (JPG, PNG, SVG, WebP)</li>
					<li>Optimize images for web performance</li>
					<li>Create responsive images using srcset and sizes</li>
					<li>Use figure and figcaption for image descriptions</li>
					<li>Position and align images within your content</li>
					<li>Implement decorative images appropriately</li>
					<li>Handle image loading and errors gracefully</li>
				</ul>
			</div>

			<div class="notification is-info is-light mt-4">
				<h3 class="title is-5">
					<i class="fas fa-book section-icon"></i> Additional Resources
				</h3>
				<ul>
					<li>
						<a
							href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/images_in_HTML"
							target="_blank"
							rel="noopener"
						>
							MDN: Images in HTML
						</a>
					</li>
					<li>
						<a
							href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"
							target="_blank"
							rel="noopener"
						>
							MDN: The Image Element
						</a>
					</li>
					<li>
						<a
							href="https://web.dev/learn/images/"
							target="_blank"
							rel="noopener"
						>
							web.dev: Image Optimization Guide
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="box">
			<h2 class="title is-3">Making Web Pages Visual</h2>
			<p>
				Images make web pages engaging and help convey information effectively.
				They can be photos, illustrations, icons, or any other visual content.
			</p>

			<div class="notification is-info is-light mt-4">
				<p>
					<strong>Did you know?</strong> The first image ever published on the
					World Wide Web was a promotional shot of Les Horribles Cernettes, a
					parody pop band at CERN!
				</p>
			</div>
		</div>

		<CodingOptions filename="images.html" class="mt-4" />

		<div class="box mt-4">
			<h2 class="title is-3">Adding Images to Your Page</h2>
			<p>
				The <code>&lt;img&gt;</code> element is used to embed images. Unlike
				most elements, it's self-closing and requires specific attributes:
			</p>

			<div class="content">
				<div class="box has-background-light">
					<CodeMirror v-model="basicImage" :height="100" :readonly="true" />
				</div>

				<h3 class="title is-4 mt-5">Essential Image Attributes</h3>
				<ul>
					<li><code>src</code> - The source URL of your image (required)</li>
					<li>
						<code>alt</code> - Alternative text description (required for
						accessibility)
					</li>
					<li><code>width</code> - Image width in pixels</li>
					<li><code>height</code> - Image height in pixels</li>
				</ul>
			</div>
		</div>

		<div class="box mt-4">
			<h2 class="title is-3">Image Best Practices</h2>

			<div class="content">
				<h3 class="title is-4">1. Always Include Alt Text</h3>
				<CodeMirror v-model="altTextExample" :height="150" :readonly="true" />
				<p class="mt-3">Good alt text:</p>
				<ul>
					<li>Describes the image content or function</li>
					<li>Helps screen reader users understand the image</li>
					<li>Displays when images fail to load</li>
					<li>Improves SEO</li>
				</ul>

				<h3 class="title is-4 mt-5">2. Use Figure with Caption</h3>
				<CodeMirror v-model="figureExample" :height="200" :readonly="true" />

				<h3 class="title is-4 mt-5">3. Responsive Images</h3>
				<CodeMirror
					v-model="responsiveExample"
					:height="150"
					:readonly="true"
				/>
			</div>
		</div>

		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-file-image section-icon"></i> Image Formats and
				Optimization
			</h2>

			<div class="content">
				<p>
					Choosing the right image format and optimizing your images is crucial
					for web performance.
				</p>

				<h3 class="title is-4">Common Image Formats</h3>
				<div class="table-container">
					<table class="table is-bordered">
						<thead>
							<tr>
								<th>Format</th>
								<th>Best For</th>
								<th>Features</th>
								<th>Example Use Case</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><strong>JPG/JPEG</strong></td>
								<td>Photographs</td>
								<td>Lossy compression, no transparency</td>
								<td>Hero images, photo galleries</td>
							</tr>
							<tr>
								<td><strong>PNG</strong></td>
								<td>Graphics with transparency</td>
								<td>Lossless compression, supports transparency</td>
								<td>Logos, icons with transparent backgrounds</td>
							</tr>
							<tr>
								<td><strong>WebP</strong></td>
								<td>Modern replacement for JPG/PNG</td>
								<td>Better compression, supports transparency</td>
								<td>General purpose, with fallbacks</td>
							</tr>
							<tr>
								<td><strong>SVG</strong></td>
								<td>Vector graphics</td>
								<td>Scalable, small file size</td>
								<td>Icons, logos, illustrations</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="notification is-info is-light mt-4">
					<h4 class="title is-5">Image Optimization Tips</h4>
					<ul>
						<li>
							<strong>Resize images</strong> to their display size before
							uploading
						</li>
						<li>
							<strong>Compress images</strong> using tools like ImageOptim or
							TinyPNG
						</li>
						<li>
							<strong>Choose appropriate formats</strong> based on content type
						</li>
						<li>
							<strong>Use modern formats</strong> like WebP with fallbacks
						</li>
						<li>
							<strong>Consider lazy loading</strong> for images below the fold
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-mobile-alt section-icon"></i> Responsive Images
			</h2>

			<div class="content">
				<p>
					Make your images adapt to different screen sizes and device
					capabilities:
				</p>

				<h3 class="title is-4">Using srcset and sizes</h3>
				<CodeMirror
					v-model="responsiveImage"
					:readonly="true"
					:height="200"
					language="html"
				/>

				<div class="notification is-warning is-light mt-4">
					<p>
						<strong>Note:</strong> The <code>sizes</code> attribute tells
						browsers what size the image will be displayed at different viewport
						widths.
					</p>
				</div>

				<h3 class="title is-4">Art Direction with picture</h3>
				<CodeMirror
					v-model="pictureElement"
					:readonly="true"
					:height="250"
					language="html"
				/>
			</div>
		</div>

		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-image section-icon"></i> Semantic Image Containers
			</h2>

			<div class="tutorial-card">
				<p>
					Use <code>figure</code> and <code>figcaption</code> elements to
					provide context for your images:
				</p>

				<CodeMirror
					v-model="figureExample"
					:readonly="true"
					:height="200"
					language="html"
				/>

				<div class="notification is-info is-light mt-4">
					<p>
						The <code>figure</code> element can contain multiple images,
						diagrams, or code snippets, with a single
						<code>figcaption</code> describing the group.
					</p>
				</div>
			</div>
		</div>

		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-spinner section-icon"></i> Image Loading and Error
				Handling
			</h2>

			<div class="tutorial-card">
				<h3 class="title is-4">Loading Strategies</h3>
				<CodeMirror
					v-model="loadingExample"
					:readonly="true"
					:height="200"
					language="html"
				/>

				<div class="notification is-info is-light mt-4">
					<h4 class="title is-5">Loading Attributes</h4>
					<ul>
						<li>
							<code>loading="lazy"</code> - Defers loading until near viewport
						</li>
						<li><code>loading="eager"</code> - Loads immediately (default)</li>
						<li><code>decoding="async"</code> - Allows async image decoding</li>
						<li>
							<code>fetchpriority="high"</code> - Signals high-priority images
						</li>
					</ul>
				</div>

				<h3 class="title is-4 mt-4">Error Handling</h3>
				<CodeMirror
					v-model="errorHandling"
					:readonly="true"
					:height="150"
					language="html"
				/>
			</div>
		</div>

		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-universal-access section-icon"></i> Decorative Images
				and ARIA
			</h2>

			<div class="tutorial-card">
				<p>
					Not all images need alternative text. Decorative images should be
					hidden from screen readers:
				</p>

				<div class="columns">
					<div class="column">
						<h4 class="title is-5">Decorative Images</h4>
						<CodeMirror
							v-model="decorativeImage"
							:readonly="true"
							:height="150"
							language="html"
						/>
					</div>
					<div class="column">
						<h4 class="title is-5">Background Images</h4>
						<CodeMirror
							v-model="backgroundImage"
							:readonly="true"
							:height="150"
							language="html"
						/>
					</div>
				</div>

				<div class="notification is-warning is-light mt-4">
					<h4 class="title is-5">When to Use Empty alt=""</h4>
					<ul>
						<li>Purely decorative images (dividers, backgrounds)</li>
						<li>Icons that have accompanying text</li>
						<li>Repeated images in a collection</li>
						<li>Images that provide no additional content</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-star"></i> Restaurant Website Exercise
			</h2>
			<p>Let's practice by adding images to the Black Swan Bistro website:</p>

			<div class="tutorial-card mt-4">
				<div class="columns">
					<div class="column is-one-third">
						<div class="box has-background-light">
							<h3 class="title is-5">The Logo:</h3>
							<img :src="logoPath" alt="Black Swan Bistro logo" width="200" />
							<a :href="logoPath" download class="button is-small is-info mt-4">
								Download SVG Logo
							</a>
						</div>
					</div>

					<div class="column">
						<div class="box">
							<h3 class="title is-5">Your Task:</h3>
							<ul>
								<li>Add the logo to the header</li>
								<li>Set the width to 200 pixels</li>
								<li>Include descriptive alt text</li>
								<li>Keep the existing heading</li>
							</ul>

							<div class="notification is-info is-light mt-4">
								<p>
									<strong>Why SVG?</strong> SVG (Scalable Vector Graphics) is
									perfect for logos because:
								</p>
								<ul>
									<li>Stays sharp at any size</li>
									<li>Smaller file size for simple graphics</li>
									<li>Can be styled with CSS</li>
									<li>Looks great on any screen resolution</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-4">
					<h3 class="title is-4">Try it yourself:</h3>
					<CodeMirror v-model="logoExercise" :height="150" />
				</div>

				<div class="mt-4">
					<details>
						<summary class="button is-info is-light">
							Click to see solution
						</summary>
						<div class="box mt-2">
							<CodeMirror
								v-model="logoSolution"
								:height="150"
								:readonly="true"
							/>
						</div>
					</details>
				</div>

				<div class="tutorial-card mt-6">
					<h3 class="title is-4">More Restaurant Images</h3>
					<p>Here are more examples of how Black Swan Bistro uses images:</p>

					<div class="mt-4">
						<h4 class="title is-5">Homepage Header</h4>
						<CodeMirror
							v-model="restaurantHeader"
							:height="200"
							:readonly="true"
						/>
						<div class="notification is-info is-light mt-4">
							<p>Download the Black Swan Bistro images:</p>
							<ul>
								<li>
									<a :href="images.storefront" download
										>Restaurant Storefront</a
									>
								</li>
								<li>
									<a :href="images.interior" download>Restaurant Interior</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="mt-5">
						<h4 class="title is-5">Menu Items</h4>
						<CodeMirror v-model="menuItems" :height="250" :readonly="true" />
						<div class="notification is-info is-light mt-4">
							<p>Download menu item images:</p>
							<ul>
								<li><a :href="images.pasta" download>Signature Pasta</a></li>
								<li><a :href="images.steak" download>Premium Steak</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="box mt-6">
				<h2 class="title is-3">
					<i class="fas fa-camera"></i> Practice Project: Rottnest Island
					Gallery
				</h2>
				<p>
					Now let's create a gallery showcasing Rottnest Island. Here are some
					images you can use:
				</p>

				<div class="notification is-info is-light mt-4">
					<h3 class="title is-4">Gallery Structure Hint</h3>
					<p>Consider organizing your gallery like this:</p>
					<CodeMirror v-model="galleryHint" :readonly="true" :height="300" />
					<div class="tutorial-card mt-4">
						<p><strong>Tips:</strong></p>
						<ul>
							<li>
								Use a container <code>div</code> with a class for the gallery
							</li>
							<li>
								Wrap each image and caption in a <code>figure</code> element
							</li>
							<li>Group related images together</li>
							<li>Add descriptive captions using <code>figcaption</code></li>
							<li>Consider using CSS later to create a grid layout</li>
						</ul>
					</div>
				</div>

				<div class="mt-4">
					<h3 class="title is-4">Try it yourself:</h3>
					<CodeMirror v-model="practiceCode" :height="400" />
				</div>
				<div class="box is-warning mt-4">
					<h3 class="title is-4">Image File Tips</h3>
					<ul>
						<li>
							Use appropriate file formats:
							<ul>
								<li><strong>JPG</strong> - Photos and complex images</li>
								<li><strong>PNG</strong> - Graphics with transparency</li>
								<li><strong>SVG</strong> - Logos and icons</li>
								<li><strong>WebP</strong> - Modern format for all types</li>
							</ul>
						</li>
						<li>Optimize images for web use (compress files)</li>
						<li>Choose appropriate dimensions for your layout</li>
						<li>Consider loading time and bandwidth usage</li>
					</ul>
				</div>

				<div class="box mt-6">
					<h2 class="title is-3">
						<i class="fas fa-forward"></i> What's Next?
					</h2>
					<p>
						Now that you can work with images, let's learn about how to
						structure your HTML documents properly!
					</p>
				</div>

				<TutorialNavigation class="mt-6" />
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialNavigation from '@/components/TutorialNavigation.vue';
import CodingOptions from '@/components/CodingOptions.vue';

export default {
	name: 'html-basics-images',
	components: {
		CodeMirror,
		TutorialNavigation,
		CodingOptions,
	},
	setup() {
		const images = {
			basin: '/images/tutorials/html-basics/basin.jpg',
			lighthouse: '/images/tutorials/html-basics/lighthouse.jpg',
			quokka: '/images/tutorials/html-basics/quokka.jpg',
			cycling: '/images/tutorials/html-basics/cycling.jpg',
			blackSwanLogo: '/images/tutorials/html-basics/black-swan-logo.svg',
			storefront: '/images/tutorials/html-basics/black-swan-storefront.jpg',
			interior: '/images/tutorials/html-basics/black-swan-interior.jpg',
			pasta: '/images/tutorials/html-basics/black-swan-pasta.jpg',
			steak: '/images/tutorials/html-basics/black-swan-steak.jpg',
		};

		const basicImage = ref(
			`<img src="quokka.jpg" alt="A smiling quokka on Rottnest Island" width="400">`,
		);

		const altTextExample = ref(`<!-- Good alt text -->
<img src="beach.jpg" alt="Turquoise waters at The Basin, Rottnest Island">

<!-- Decorative image -->
<img src="divider.png" alt="" role="presentation">`);

		const figureExample = ref(`<figure>
  <img src="lighthouse.jpg" 
       alt="Wadjemup Lighthouse against blue sky"
       width="600">
  <figcaption>Historic Wadjemup Lighthouse, built in 1896</figcaption>
</figure>`);

		const responsiveExample = ref(`<!-- Responsive image -->
<img src="panorama.jpg" 
     alt="Panoramic view of Rottnest Island"
     style="max-width: 100%; height: auto;">`);

		const practiceCode = ref(`<!-- Create your Rottnest Island gallery here -->
<div class="gallery">
  
</div>`);

		const logoPath = ref('/images/tutorials/html-basics/black-swan-logo.svg');

		const restaurantHeader = ref(`<header class="site-header">
  <figure class="logo">
    <img src="/images/tutorials/html-basics/black-swan-logo.svg" 
         alt="Black Swan Bistro logo" 
         width="200">
  </figure>

  <figure class="hero">
    <img src="/images/tutorials/html-basics/black-swan-storefront.jpg"
         alt="Black Swan Bistro exterior at sunset"
         style="width: 100%; max-width: 1200px">
    <figcaption>Welcome to Black Swan Bistro</figcaption>
  </figure>
</header>`);

		const menuItems = ref(`<section class="menu-highlights">
  <h2>Our Signature Dishes</h2>
  
  <div class="dishes">
    <figure class="dish">
      <img src="/images/tutorials/html-basics/black-swan-pasta.jpg"
           alt="Handmade fettuccine with wild mushrooms"
           width="300">
      <figcaption>
        <h3>Wild Mushroom Pasta</h3>
        <p>House-made fettuccine with seasonal mushrooms</p>
      </figcaption>
    </figure>

    <figure class="dish">
      <img src="/images/tutorials/html-basics/black-swan-steak.jpg"
           alt="Grilled ribeye steak with roasted vegetables"
           width="300">
      <figcaption>
        <h3>Premium Ribeye</h3>
        <p>28-day aged beef with seasonal vegetables</p>
      </figcaption>
    </figure>
  </div>
</section>`);

		const logoExercise = ref(
			`<!-- Add the Black Swan Bistro logo here -->
<header>
  <!-- Logo should be 200px wide -->
  
  <h1>Black Swan Bistro</h1>
</header>`,
		);

		const logoSolution = ref(
			`<header>
  <img src="/images/tutorials/html-basics/black-swan-logo.svg" 
       alt="Black Swan Bistro logo" 
       width="200">
  <h1>Black Swan Bistro</h1>
</header>`,
		);

		const galleryHint = ref(
			`<div class="gallery">
  <!-- Wildlife Section -->
  <div class="gallery-section">
    <h2>Wildlife</h2>
    <figure>
      <img src="/images/tutorials/html-basics/quokka.jpg"
           alt="A smiling quokka on Rottnest Island"
           width="400">
      <figcaption>The famous Rottnest quokka</figcaption>
    </figure>
  </div>

  <!-- Beaches Section -->
  <div class="gallery-section">
    <h2>Beautiful Beaches</h2>
    <figure>
      <img src="/images/tutorials/html-basics/basin.jpg"
           alt="Crystal clear waters at The Basin"
           width="400">
      <figcaption>The Basin - Perfect for swimming</figcaption>
    </figure>
  </div>

  <!-- Landmarks Section -->
  <div class="gallery-section">
    <h2>Island Landmarks</h2>
    <figure>
      <img src="/images/tutorials/html-basics/lighthouse.jpg"
           alt="Wadjemup Lighthouse against blue sky"
           width="400">
      <figcaption>Historic Wadjemup Lighthouse</figcaption>
    </figure>
  </div>
</div>`,
		);

		const responsiveImage = ref(
			`<img src="photo-800w.jpg"
     srcset="photo-400w.jpg 400w,
             photo-800w.jpg 800w,
             photo-1200w.jpg 1200w"
     sizes="(max-width: 400px) 100vw,
            (max-width: 800px) 80vw,
            1200px"
     alt="A responsive image example">`,
		);

		const pictureElement = ref(
			`<picture>
  <!-- Mobile portrait crop -->
  <source media="(max-width: 600px)"
          srcset="hero-mobile.jpg">
  <!-- Tablet crop -->
  <source media="(max-width: 1200px)"
          srcset="hero-tablet.jpg">
  <!-- Desktop default -->
  <img src="hero-desktop.jpg" 
       alt="Hero section banner">
</picture>`,
		);

		const loadingExample = ref(
			`<!-- Lazy load images below the fold -->
<img src="gallery-1.jpg"
     alt="Gallery image"
     loading="lazy"
     decoding="async">

<!-- Load hero image immediately -->
<img src="hero.jpg"
     alt="Hero image"
     loading="eager"
     fetchpriority="high">`,
		);

		const errorHandling = ref(
			`<img src="photo.jpg"
     alt="Beach sunset"
     onerror="this.src='placeholder.jpg';
              this.alt='Image failed to load'">`,
		);

		const decorativeImage = ref(
			`<!-- Decorative divider -->
<img src="divider.png" 
     alt="" 
     role="presentation">

<!-- Icon with label -->
<button>
  <img src="save-icon.svg" alt="">
  Save Changes
</button>`,
		);

		const backgroundImage = ref(
			`<!-- Using CSS background -->
<div class="hero-section" 
     role="presentation" 
     aria-hidden="true">
  <!-- Content goes here -->
</div>`,
		);

		return {
			images,
			basicImage,
			altTextExample,
			figureExample,
			responsiveExample,
			practiceCode,
			restaurantHeader,
			menuItems,
			blackSwanLogo: images.blackSwanLogo,
			logoExercise,
			logoSolution,
			logoPath,
			galleryHint,
			responsiveImage,
			pictureElement,
			loadingExample,
			errorHandling,
			decorativeImage,
			backgroundImage,
		};
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
	color: #e34f26; /* HTML5 orange color */
}
</style>
