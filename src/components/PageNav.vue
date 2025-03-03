<template>
	<div class="box table-of-contents mt-4">
		<div class="nav-header" @click="toggleNav" role="button" tabindex="0">
			<h4 class="title is-5">On This Page</h4>
			<span class="icon">
				<i
					class="fas"
					:class="isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'"
				></i>
			</span>
		</div>

		<ul class="menu-list" v-show="isExpanded">
			<li v-for="section in sections" :key="section.id">
				<a
					:href="`#${section.id}`"
					:class="{ 'is-active': activeSection === section.id }"
				>
					{{ section.title }}
				</a>
				<ul v-if="section.subsections && section.subsections.length">
					<li v-for="subsection in section.subsections" :key="subsection.id">
						<a
							:href="`#${subsection.id}`"
							:class="{ 'is-active': activeSection === subsection.id }"
						>
							{{ subsection.title }}
						</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
	sections: {
		type: Array,
		default: () => [],
	},
});

const isExpanded = ref(true);
const activeSection = ref('');

const toggleNav = () => {
	isExpanded.value = !isExpanded.value;
};

const scrollToSection = (id) => {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
};

// Track active section based on scroll position
const updateActiveSection = () => {
	const sections = [...document.querySelectorAll('[id]')];
	const scrollPosition = window.scrollY + 100; // Offset for better detection

	for (const section of sections.reverse()) {
		if (section.offsetTop <= scrollPosition) {
			activeSection.value = section.id;
			break;
		}
	}
};

onMounted(() => {
	window.addEventListener('scroll', updateActiveSection);
	updateActiveSection();
});

onUnmounted(() => {
	window.removeEventListener('scroll', updateActiveSection);
});
</script>

<style scoped>
.table-of-contents {
	background: white;
	border-radius: 6px;
	box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
}

.nav-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	user-select: none;
}

.title.is-5 {
	margin-bottom: 0 !important;
}

.menu-list {
	margin-top: 1rem;
	transition: all 0.3s ease;
}

.menu-list a {
	color: #4a4a4a;
	padding: 0.5rem 0.75rem;
	transition: all 0.2s ease;
}

.menu-list a:hover {
	background-color: #f5f5f5;
	color: #3273dc;
}

.menu-list a.is-active {
	background-color: #f0f8ff;
	color: #3273dc;
	border-left: 3px solid #3273dc;
}

.menu-list ul {
	margin: 0.5rem 0 0.5rem 1rem !important;
	padding-left: 0.75rem !important;
	border-left: 1px solid #dbdbdb;
}

/* Icon transition */
.icon i {
	transition: transform 0.3s ease;
	color: #4a4a4a;
}

.icon i.fa-chevron-up {
	transform: rotate(180deg);
}
</style>
