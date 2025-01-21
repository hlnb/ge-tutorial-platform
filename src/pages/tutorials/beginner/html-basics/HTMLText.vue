<template>
	<nav class="breadcrumb" aria-label="breadcrumbs">
		<ul>
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/tutorials">Tutorials</router-link></li>
			<li>
				<router-link :to="{ name: 'html-basics' }">HTML Basics</router-link>
			</li>
			<li class="is-active">
				<a href="#" aria-current="page">Working with Text</a>
			</li>
		</ul>
	</nav>

	<div class="tags">
		<span class="tag is-info">Beginner</span>
		<span class="tag is-warning">30 minutes</span>
		<span class="tag is-success">Theory</span>
		<span class="tag is-primary">Practice</span>
		<span class="tag is-link">Project</span>
	</div>
	<section class="section">
		<h1 class="title is-1">
			<i class="fab fa-html5 html-icon"></i> Working with Text Elements
		</h1>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Learning Objectives
			</h3>
			<ul>
				<li>Understand heading hierarchy (h1-h6)</li>
				<li>Learn text formatting elements</li>
				<li>Master basic text structure</li>
				<li>Create organized content with lists</li>
			</ul>
		</div>

		<!-- Practice Options -->
		<CodingOptions filename="text.html" class="mt-4 mb-2" />
		<h2 class="title is-3">Understanding Heading Hierarchy</h2>
		<p>
			HTML provides six levels of headings, from <code>&lt;h1&gt;</code> to
			<code>&lt;h6&gt;</code>.
		</p>

		<div class="box">
			<h4 class="title is-4">Example:</h4>
			<CodeMirror v-model="headingExample" :height="250" :readonly="true" />
			<div
				class="preview-container mt-4"
				v-html="sanitizedHeadingPreview"
			></div>
		</div>

		<div class="box is-warning">
			<h3 class="title is-4">
				<i class="fas fa-exclamation-triangle"></i> Best Practices for Headings
			</h3>
			<ul>
				<li>Use only one <code>&lt;h1&gt;</code> per page</li>
				<li>Don't skip heading levels (e.g., don't go from h2 to h4)</li>
				<li>Keep your heading hierarchy logical</li>
				<li>Use headings to create a clear content structure</li>
			</ul>
		</div>

		<h2 class="title is-3">Text Formatting</h2>
		<p>HTML provides various ways to format and structure your text:</p>

		<div class="box">
			<h4 class="title is-4">Key Text Elements:</h4>
			<CodeMirror v-model="formattingExample" :height="300" :readonly="true" />
			<div
				class="preview-container mt-4"
				v-html="sanitizedFormattingPreview"
			></div>
		</div>

		<div class="box is-info">
			<h3 class="title is-4">
				<i class="fas fa-info-circle"></i> Text Element Reference
			</h3>
			<ul>
				<li><code>&lt;p&gt;</code> - Paragraphs</li>
				<li><code>&lt;strong&gt;</code> - Important text</li>
				<li><code>&lt;em&gt;</code> - Emphasized text</li>
				<li><code>&lt;br&gt;</code> - Line break</li>
				<li><code>&lt;hr&gt;</code> - Horizontal rule</li>
				<li><code>&lt;small&gt;</code> - Smaller text</li>
				<li><code>&lt;mark&gt;</code> - Highlighted text</li>
			</ul>
			<p class="mt-3">
				<i class="fas fa-book"></i> <strong>Further Reading:</strong> Check the
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#text_content"
					target="_blank"
					rel="noopener"
				>
					MDN documentation on text elements
				</a>
				for detailed information.
			</p>
		</div>

		<h2 class="title is-3">Working with Lists</h2>
		<p>HTML provides two main types of lists for organizing content:</p>

		<div class="box">
			<h4 class="title is-4">List Examples:</h4>
			<CodeMirror v-model="listExample" :height="300" :readonly="true" />
			<div class="preview-container mt-4" v-html="sanitizedListPreview"></div>
		</div>

		<div class="box is-success">
			<h3 class="title is-4"><i class="fas fa-list"></i> Types of Lists</h3>
			<ul>
				<li><code>&lt;ul&gt;</code> - Unordered list (bullet points)</li>
				<li><code>&lt;ol&gt;</code> - Ordered list (numbers)</li>
				<li><code>&lt;li&gt;</code> - List items</li>
			</ul>
		</div>

		<h2 class="title is-3">Practice Project: Restaurant Website</h2>
		<p>
			Create a complete restaurant page using all the elements we've learned:
		</p>

		<div class="columns">
			<div class="column is-6">
				<h4 class="title is-4"><i class="fas fa-code"></i> Code</h4>
				<CodeMirror
					v-model="practiceCode"
					:height="400"
					@change="updatePracticePreview"
				/>
			</div>
			<div class="column is-6">
				<h4 class="title is-4"><i class="fas fa-eye"></i> Preview</h4>
				<div class="preview-container" v-html="sanitizedPracticePreview"></div>
			</div>
		</div>

		<div class="box mt-6">
			<h2 class="title is-3"><i class="fas fa-laptop-code"></i> Your Task</h2>
			<p>
				Now that you've learned about headings, text formatting, and lists,
				let's put it all together! You'll create a restaurant menu page that
				uses all these elements effectively.
			</p>

			<div class="notification is-info is-light mt-4">
				<h3 class="title is-4">What You'll Practice:</h3>
				<ul>
					<li>Using heading hierarchy (h1-h6)</li>
					<li>Formatting text for emphasis and readability</li>
					<li>Creating organized lists</li>
					<li>Structuring content logically</li>
				</ul>
			</div>
		</div>

		<div class="box is-info mt-4">
			<h3 class="title is-4">
				<i class="fas fa-tasks"></i> Restaurant Menu Task
			</h3>
			<p>
				Using the content below, create a well-structured restaurant menu page.
				Think about how to organize the information to make it easy to read and
				navigate.
			</p>

			<div class="content mt-4">
				<h4>Restaurant Information:</h4>
				<pre class="has-background-grey-lighter p-3">
Restaurant Name: The Garden Table
Tagline: Fresh, Local, Seasonal

Description: Welcome to The Garden Table, where we celebrate the finest local ingredients 
with creative, seasonal dishes. Our chef-driven menu changes regularly to showcase the 
best produce from nearby farms.

Special Announcement: Now taking bookings for our Summer Garden Party!

Hours of Operation:
Monday-Friday: 11am-10pm
Saturday-Sunday: 9am-11pm
				</pre
				>

				<h4 class="mt-4">Menu Sections:</h4>
				<pre class="has-background-grey-lighter p-3">
STARTERS
Farm Fresh Salads
- Garden Greens (vegan)
- Classic Caesar
- Roasted Beet & Goat Cheese

Seasonal Soups
- Butternut Squash Bisque
- French Onion
- Soup of the Day

MAIN COURSES
From the Garden
- Grilled Vegetable Plate
- Wild Mushroom Risotto
- Eggplant Parmesan

From the Sea
- Grilled Salmon
- Seared Scallops
- Fish of the Day

DESSERTS
House Favorites
- Apple & Berry Crumble
- Dark Chocolate Torte
- Seasonal Fruit Tart
				</pre
				>
			</div>

			<div class="notification is-warning is-light mt-4">
				<p><strong>Remember to:</strong></p>
				<ul>
					<li>Use <code>&lt;h1&gt;</code> for the restaurant name</li>
					<li>
						Use <code>&lt;h2&gt;</code> for main menu sections (Starters, Main
						Courses, Desserts)
					</li>
					<li>
						Use <code>&lt;h3&gt;</code> for subsections (From the Garden, From
						the Sea, etc.)
					</li>
					<li>
						Use <code>&lt;strong&gt;</code> for emphasis where appropriate
					</li>
					<li>Use <code>&lt;em&gt;</code> for the tagline</li>
					<li>Use <code>&lt;mark&gt;</code> for the special announcement</li>
					<li>Use <code>&lt;small&gt;</code> for the hours of operation</li>
					<li>Use lists (<code>&lt;ul&gt;</code>) for menu items</li>
				</ul>
			</div>
		</div>

		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-island-tropical"></i> Rotto Activities Project
			</h2>
			<p>
				Let's create another page using what you've learned! This time, you'll
				build an activities guide for Rottnest Island (Wadjemup).
			</p>

			<div class="notification is-info is-light mt-4">
				<h3 class="title is-4">Project Goals:</h3>
				<ul>
					<li>Create a well-structured activities page</li>
					<li>Organize different types of activities</li>
					<li>Format booking information clearly</li>
					<li>Highlight special experiences</li>
				</ul>
			</div>

			<div class="content mt-4">
				<h4>Use this content to build your page:</h4>
				<pre class="has-background-grey-lighter p-3">
Rottnest Island Activities Guide
Discover Paradise on Wadjemup

Welcome to Rottnest Island, where adventure meets relaxation. Explore our range of 
activities suitable for all ages and interests.

Water Activities
Snorkeling Adventures
- Equipment hire from Pedal & Flipper
- Best spots: The Basin, Little Salmon Bay, Parker Point
- Guided tours available through Rottnest Island Authority

Diving Experiences
- PADI courses at Rottnest Island Dive
- Wreck diving tours
- Reef exploration trips

Land Activities
Cycling Tours
- Bike hire from Pedal & Flipper
- Guided island tours daily at 10am and 2pm
- Self-guided adventure maps available

Walking Trails
- Wadjemup Bidi (45km of trails)
- Guided history walks
- Nature discovery walks

Wildlife Experiences
Quokka Encounters
- Best viewing times: early morning and late afternoon
- Guided quokka walks
- Photography tips sessions

Marine Life
- Whale watching (Sept-Nov)
- Seal spotting at Cathedral Rocks
- Fish feeding at Little Salmon Bay

Special Notice: Book all water activities 24 hours in advance during peak season 
(December-February)

Tour Operators:
Rottnest Express - Ferry and tour bookings
Pedal & Flipper - Bike and snorkel gear
Rottnest Island Authority - Guided walks and nature tours
Rottnest Island Dive - All diving activities
				</pre
				>
			</div>

			<div class="notification is-warning is-light mt-4">
				<p><strong>Formatting Guidelines:</strong></p>
				<ul>
					<li>Use <code>&lt;h1&gt;</code> for the main title</li>
					<li>
						Use <code>&lt;h2&gt;</code> for major activity categories (Water
						Activities, Land Activities, etc.)
					</li>
					<li>
						Use <code>&lt;h3&gt;</code> for specific activities (Snorkeling,
						Cycling, etc.)
					</li>
					<li>Use <code>&lt;em&gt;</code> for the tagline</li>
					<li>Use <code>&lt;mark&gt;</code> for the special notice</li>
					<li>Use <code>&lt;strong&gt;</code> for operator names</li>
					<li>Create lists for activity details and tour operators</li>
					<li>Use appropriate spacing and structure for readability</li>
				</ul>
			</div>
		</div>

		<div class="box mt-6">
			<h2 class="title is-3"><i class="fas fa-forward"></i> What's Next?</h2>

			<div class="content">
				<p>Great work! You've learned how to:</p>
				<ul>
					<li>Structure content with headings</li>
					<li>Format text for emphasis and readability</li>
					<li>Create organized lists</li>
					<li>Build real-world page layouts</li>
				</ul>

				<p class="mt-4">In the next lessons, you'll learn about:</p>

				<div class="columns mt-2">
					<div class="column">
						<div class="box has-background-primary-light">
							<h4 class="title is-4"><i class="fas fa-link"></i> Links</h4>
							<p>Connect your pages and link to external content</p>
							<router-link
								:to="{ name: 'html-basics-links' }"
								class="button is-primary is-outlined mt-2"
							>
								Start Links Tutorial
							</router-link>
						</div>
					</div>

					<div class="column">
						<div class="box has-background-info-light">
							<h4 class="title is-4"><i class="fas fa-image"></i> Images</h4>
							<p>Add visual content to make your pages engaging</p>
							<router-link
								:to="{ name: 'html-basics-images' }"
								class="button is-info is-outlined mt-2"
							>
								Start Images Tutorial
							</router-link>
						</div>
					</div>
				</div>

				<div class="notification is-success is-light mt-4">
					<p>
						<strong>Pro Tip:</strong> Practice what you've learned by updating
						your restaurant menu or Rottnest activities page as you complete the
						next tutorials. Try adding links to booking pages and images of the
						food or activities!
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref, computed } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import DOMPurify from 'dompurify';
import { useHead } from '@vueuse/head';
import CodingOptions from '@/components/CodingOptions.vue';
import HTMLBasicsNav from '@/components/HTMLBasicsNav.vue';
import GetStartedNav from '@/components/GetStartedNav.vue';

useHead({
	title: 'Working with Text - HTML Basics - GraphitEdge Tutorials',
	meta: [
		{
			name: 'description',
			content:
				'Learn how to work with HTML text elements, including headings, paragraphs, formatting, and lists.',
		},
	],
});

// Would you like me to continue with the data setup?

const headingExample = ref(`<h1>Main Title</h1>
<h2>Major Section</h2>
<h3>Subsection</h3>
<h4>Minor Section</h4>
<h5>Small Heading</h5>
<h6>Smallest Heading</h6>`);

const formattingExample = ref(`<p><strong>Black Swan Bistro</strong></p>
<p><em>Where elegance meets culinary excellence</em></p>

<p>Experience fine dining in a relaxed atmosphere. 
Our chef creates seasonal menus using the finest 
local ingredients.</p>

<p><mark>Now taking bookings for Valentine's Day!</mark></p>

<hr>

<p><small>
  Open Monday-Saturday: 5pm-10pm<br>
  Sunday Brunch: 10am-3pm
</small></p>`);

const listExample = ref(`<!-- Unordered List -->
<h2>Why Choose Us?</h2>
<ul>
    <li>Farm-to-table ingredients</li>
    <li>Award-winning chef</li>
    <li>Waterfront location</li>
    <li>Private dining available</li>
</ul>

<!-- Ordered List -->
<h2>Today's Specials</h2>
<ol>
    <li>Butternut Squash Soup</li>
    <li>Grilled Sea Bass</li>
    <li>Chocolate Lava Cake</li>
</ol>`);

const practiceCode = ref(`<!-- Start with your restaurant page here -->
<h1>Your Restaurant Name</h1>

`);

// Add computed properties for sanitized previews
const sanitizedHeadingPreview = computed(() =>
	DOMPurify.sanitize(headingExample.value),
);
const sanitizedFormattingPreview = computed(() =>
	DOMPurify.sanitize(formattingExample.value),
);
const sanitizedListPreview = computed(() =>
	DOMPurify.sanitize(listExample.value),
);
const sanitizedPracticePreview = computed(() =>
	DOMPurify.sanitize(practiceCode.value),
);

const updatePracticePreview = () => {
	// Preview updates automatically through computed property
};
</script>

<style scoped>
.html-icon {
	color: #e34f26;
	margin-right: 0.5rem;
}

.preview-container {
	padding: 1rem;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	background: white;
	min-height: 300px;
	overflow-y: auto;
}
</style>
