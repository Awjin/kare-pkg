<template>
  <img class="preview" :src="preview" />
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";

@Component({
  name: "Preview",
})
export default class Preview extends Vue {
  @Prop()
  readonly drawingIdx!: number;

  get preview() {
    return this.$store.state.drawings[this.drawingIdx].preview;
  }
}
</script>

<style lang="scss" scoped>
.preview {
  border: 1px solid #fff;
  height: 100%;
}
</style>
