<template>
  <div
    class="wrapper"
    @mousedown.prevent="startStroke"
    @touchstart.prevent="startStroke"
    @mouseover.prevent="continueStroke"
    @touchmove.prevent="continueStroke"
  >
    <!-- TODO: Pull size from Drawing instead of hardcoding 32 * 32. -->
    <table class="edit-layer">
      <tr v-for="i in 32" :key="i">
        <td v-for="j in 32" :key="j" :data-pixel="32 * (i - 1) + (j - 1)" />
      </tr>
    </table>

    <drawing-preview class="preview-layer" :idx="idx" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";

import DrawingPreview from "./DrawingPreview.vue";

interface Stroke {
  userAction: Event;
  willFill: boolean;
}

export default defineComponent({
  components: {
    DrawingPreview,
  },

  props: {
    idx: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const store = useStore();

    let stroke: Stroke | undefined = undefined;

    onMounted(() => {
      window.addEventListener("mouseup", endStroke);
      window.addEventListener("touchcancel", endStroke);
      window.addEventListener("touchend", endStroke);
    });

    onUnmounted(() => {
      window.removeEventListener("mouseup", endStroke);
      window.removeEventListener("touchcancel", endStroke);
      window.removeEventListener("touchend", endStroke);
    });

    function startStroke(event: Event): void {
      const pixel = getPixel(event);
      if (pixel === null) return;

      stroke = {
        userAction: event,
        willFill: !alreadyFilled(pixel),
      };

      store.commit("flip", {
        drawing: props.idx,
        pixel,
        event,
      });
    }

    function continueStroke(event: Event): void {
      if (stroke === undefined) return;
      const pixel = getPixel(event);
      if (pixel === null) return;
      if (stroke.willFill === alreadyFilled(pixel)) return;

      store.commit("flip", {
        drawing: props.idx,
        pixel,
        event: stroke.userAction,
      });
    }

    function endStroke(): void {
      stroke = undefined;
    }

    function alreadyFilled(pixel: number) {
      return store.state.drawings[props.idx].isFilled(pixel);
    }

    function getPixel(event: Event): number | null {
      let target;
      if (event.type === "touchmove") {
        const touch = (event as TouchEvent).changedTouches[0];
        target = document.elementFromPoint(touch.clientX, touch.clientY);
      } else {
        target = event.target;
      }

      const pixel = (target as HTMLElement).dataset.pixel;
      if (pixel === undefined) return null;

      const pixelAsInt = parseInt(pixel);
      return isNaN(pixelAsInt) ? null : pixelAsInt;
    }

    return {
      startStroke,
      continueStroke,
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  background: #fff;
}

.edit-layer {
  position: absolute;
  height: 100%;
  width: 100%;
  border-collapse: collapse;
  cursor: pointer;
  z-index: 100;

  td {
    border: 1px solid #aaa;
  }
}

.preview-layer {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 99;
}
</style>
