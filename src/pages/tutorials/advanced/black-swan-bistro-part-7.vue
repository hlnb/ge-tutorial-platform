<template>
	<div class="container section">
		<div class="tutorial-content">
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li>
						<router-link to="/">
							<i class="fa-solid fa-house mr-2"></i> Home
						</router-link>
					</li>
					<li>
						<router-link to="/tutorials">Tutorials</router-link>
					</li>
					<li class="is-active">
						<a href="#" aria-current="page">Black Swan Bistro - Part 7</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-warning">Advanced</span>
					<span class="tag is-light">40 min</span>
					<span class="tag is-link">Project</span>
					<span class="tag is-light">Part 7 of 9</span>
				</div>
			</div>

			<h1 class="title is-1">Black Swan Bistro - Part 7</h1>
			<h2 class="subtitle is-4">Audit the Live Website</h2>

			<p class="subtitle is-5">
				Audit the deployed site before changing code.
			</p>

			<div class="notification is-info is-light">
				<p>
					<i class="fas fa-hard-hat mr-2"></i><strong>Under Construction</strong>
				</p>
				<p>
					This scaffold is reserved for a project lesson where learners inspect the live
					Black Swan Bistro site before making changes.
				</p>
			</div>

			<section class="box">
				<h3 class="title is-4">Authoring brief</h3>
				<p>
					This lesson should guide learners through an audit record, not a code change.
					Reference existing GraphitEdge tutorials instead of reteaching each subject.
				</p>
				<ul>
					<li>Accessibility</li>
					<li>Responsive behaviour</li>
					<li>Performance</li>
					<li>SEO and content</li>
					<li>Broken links</li>
					<li>Console errors</li>
					<li>Maintainability</li>
				</ul>
			</section>

			<router-link to="/tutorials" class="button is-primary is-outlined mt-4">
				<span class="icon"><i class="fas fa-arrow-left"></i></span>
				<span>Back to Tutorials</span>
			</router-link>
		</div>
	</div>
</template>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';

useTutorialHead({
  title: "Black Swan Bistro - Part 7",
  description: "Audit the deployed Black Swan Bistro site before changing code.",
  path: "/tutorials/advanced/black-swan-bistro-part-7",
	noindex: true,
});
</script>
