<template>
  <div
    class="editor-wrapper"
    @mousedown.prevent="startStroke"
    @touchstart.prevent="startStroke"
    @mouseover.prevent="continueStroke"
    @touchmove.prevent="continueStroke"
  >
    <div class="edit-layer">
      <div
        v-for="i in 1024"
        :key="i"
        class="pixel"
        :data-pixel-idx="i - 1"
      ></div>
    </div>
    <preview class="preview-layer" :drawingIdx="drawingIdx" />
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";
import {PixelMap, PixelIdx} from "@/store/drawing";
import Preview from "@/components/Preview.vue";

@Component({
  name: "Editor",
  components: {
    Preview,
  },
})
export default class Editor extends Vue {
  @Prop()
  drawingIdx!: number;
  pixelMap: PixelMap = this.$store.state.drawings[this.drawingIdx].pixelMap;
  isStroking = false;
  stroke?: Event;
  fill = false;

  created() {
    window.addEventListener("mouseup", this.endStroke);
    window.addEventListener("touchcancel", this.endStroke);
    window.addEventListener("touchend", this.endStroke);
  }

  destroyed() {
    window.removeEventListener("mouseup", this.endStroke);
    window.removeEventListener("touchcancel", this.endStroke);
    window.removeEventListener("touchend", this.endStroke);
  }

  startStroke(event: Event) {
    const pixelIdx = this.getPixelIdx(event);
    if (!pixelIdx) return;
    this.isStroking = true;
    this.stroke = event;
    this.fill = !this.pixelMap[pixelIdx];
    this.flip(pixelIdx);
  }

  continueStroke(event: Event) {
    if (!this.isStroking) return;
    const pixelIdx = this.getPixelIdx(event);
    if (!pixelIdx) return;
    if (this.fill === !!this.pixelMap[pixelIdx]) return;
    this.flip(pixelIdx);
  }

  endStroke() {
    this.isStroking = false;
  }

  getPixelIdx(event: Event): PixelIdx | undefined {
    let target = event.target;
    if (event.type === "touchmove") {
      const touch = (event as TouchEvent).changedTouches[0];
      target = document.elementFromPoint(
        touch.clientX,
        touch.clientY
      ) as Element;
    }
    return (target as HTMLElement).dataset.pixelIdx;
  }

  flip(pixelIdx: PixelIdx) {
    this.$store.commit("flip", {
      drawingIdx: this.drawingIdx,
      pixelIdx,
      event: this.stroke,
    });
  }
}
</script>

<style lang="scss" scoped>
.editor-wrapper {
  background: #fff;
  position: relative;
}

.edit-layer {
  border-left: 1px solid #bbb;
  border-top: 1px solid #bbb;
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(32, 1fr);
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 100;

  .pixel {
    border-bottom: 1px solid #bbb;
    border-right: 1px solid #bbb;
  }
}

.preview-layer {
  position: absolute;
  z-index: 99;
}
</style>
