import { ref, inject, onMounted } from 'vue';

export function usePageSections(sections) {
	const pageSections = inject('pageSections', ref([]));

	onMounted(() => {
		pageSections.value = sections;
	});

	return {
		pageSections,
	};
}
