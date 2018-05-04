<template>
  <div
    class="editor"
    @mousedown.prevent="trackStart"
    @touchstart.prevent="trackStart"
    @mouseover.prevent="trackMove"
    @touchmove.prevent="trackMove"
    @mouseleave="trackEnd"
    @mouseup="trackEnd"
    @touchcancel="trackEnd"
    @touchend="trackEnd"
    >
    <div
      v-for="i in 1024"
      class="pixel"
      :class="{filled: pixels[i]}"
      :data-pixel-idx="i"
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Editor',

    props: [
      'pixels'
    ],

    data () {
      return {
        isDrawing: false,
        isFilling: false
      }
    },

    methods: {
      trackStart: function({target}) {
        const idx = target.dataset.pixelIdx;
        if (idx === undefined) return;

        this.isDrawing = true;
        this.isFilling = !this.pixels[idx];

        this.toggleFill(idx);
      },

      toggleFill: function(idx) {
        this.$set(this.pixels, idx, this.isFilling);
      },

      trackMove: function(event) {
        if (!this.isDrawing) return;

        let target;
        if (event.type === 'mouseover') {
          target = event.target;
        } else if (event.type === 'touchmove') {
          const currTouch = event.changedTouches[0];
          target = document.elementFromPoint(
            currTouch.clientX,
            currTouch.clientY
          );
        }

        const idx = target.dataset.pixelIdx;
        this.toggleFill(idx);
      },

      trackEnd: function() {
        this.isDrawing = false;
      }
    }
  }
</script>

<style scoped>
  .editor {
    background: var(--color-dark);
    cursor: pointer;
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(32, 1fr);
    grid-template-rows: repeat(32, 1fr);
    padding: 2px;
  }

  .pixel {
    background: var(--color-light);
  }

  .pixel.filled {
    background: none;
  }
</style>
