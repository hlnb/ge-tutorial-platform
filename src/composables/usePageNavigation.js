import { ref, inject, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

export function usePageNavigation() {
	const route = useRoute();
	const pageSections = inject('pageSections', ref([]));

	// Determine the current active page path
	const currentPath = computed(() => route.path);

	// Check if the current page has sections
	const hasPageSections = computed(() => pageSections.value.length > 0);

	// Watch for route changes to update active state
	watch(
		() => route.path,
		() => {
			// Any additional logic needed when route changes
		},
	);

	return {
		currentPath,
		pageSections,
		hasPageSections,
	};
}
