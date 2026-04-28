import { ref, inject, onMounted, watch, isRef } from 'vue';

export function usePageSections(sections) {
	const pageSections = inject('pageSections', ref([]));

	const getSectionsValue = () => (isRef(sections) ? sections.value : sections);

	onMounted(() => {
		pageSections.value = getSectionsValue();
	});

	if (isRef(sections)) {
		watch(
			sections,
			(value) => {
				pageSections.value = value;
			},
			{ immediate: true },
		);
	}

	return {
		pageSections,
	};
}
