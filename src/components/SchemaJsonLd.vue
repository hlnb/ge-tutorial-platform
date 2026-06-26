<script>
import { computed, defineComponent, h } from "vue";

export default defineComponent({
  name: "SchemaJsonLd",
  props: {
    schema: {
      type: [Object, Array],
      required: true,
    },
  },
  setup(props) {
    const schemaJson = computed(() =>
      JSON.stringify(props.schema, null, 2).replace(/</g, "\\u003c"),
    );

    return () =>
      h("script", {
        type: "application/ld+json",
        innerHTML: schemaJson.value,
      });
  },
});
</script>
