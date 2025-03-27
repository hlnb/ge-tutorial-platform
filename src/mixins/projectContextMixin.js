import { computed } from 'vue';
import { getProjectContext, getContextPrerequisites, getContextObjectives, getContextInstructions } from '@/utils/projectUtils';

export default {
    props: {
        currentTutorial: {
            type: String,
            required: true
        }
    },

    setup(props) {
        const context = computed(() => getProjectContext(props.currentTutorial));
        const prerequisites = computed(() => 
            getContextPrerequisites(context.value.section, context.value.tutorial)
        );
        const objectives = computed(() => 
            getContextObjectives(context.value.section, context.value.tutorial)
        );
        const instructions = computed(() => 
            getContextInstructions(context.value.section, context.value.tutorial)
        );

        return {
            context,
            prerequisites,
            objectives,
            instructions
        };
    }
}; 