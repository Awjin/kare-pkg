<template>
  <img :src="preview" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    idx: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const store = useStore();

    return {
      preview: computed(() => store.state.drawings[props.idx].preview),
    };
  },
});
</script>

<style lang="scss" scoped>
img {
  border: 1px solid #fff;
}
</style>
