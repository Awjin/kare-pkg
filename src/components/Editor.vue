<template>
  <div
    class="editor"
    @mousedown.prevent="trackStart"
    @touchstart.prevent="trackStart"
    @mouseover.prevent="trackMove"
    @touchmove.prevent="trackMove"
    >
    <div
      v-for="i in 1024"
      class="pixel"
      :class="{filled: pixels[i - 1]}"
      :data-pixel-idx="i - 1"
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Editor',

    props: [
      'drawingIdx'
    ],

    data () {
      return {
        pixels: this.$store.state.drawings[this.drawingIdx].pixels,
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

      toggleFill: function(pixelIdx) {
        this.$store.dispatch('updateDrawing', {
          drawingIdx: this.drawingIdx,
          pixelIdx: pixelIdx,
          value: this.isFilling
        });
      },

      trackMove: function(event) {
        if (!this.isDrawing) return;
        const target = this.getTarget(event);
        this.toggleFill(target.dataset.pixelIdx);
      },

      getTarget: function(event) {
        if (event.type === 'touchmove') {
          const currTouch = event.changedTouches[0];
          return document.elementFromPoint(
            currTouch.clientX,
            currTouch.clientY
          );
        } else {
          return event.target;
        }
      },

      trackEnd: function() {
        this.isDrawing = false;
      }
    },

    created: function() {
      window.addEventListener('mouseup', this.trackEnd);
      window.addEventListener('touchcancel', this.trackEnd);
      window.addEventListener('touchend', this.trackEnd);
    },

    destroyed: function() {
      window.removeEventListener('mouseup', this.trackEnd);
      window.removeEventListener('touchcancel', this.trackEnd);
      window.removeEventListener('touchend', this.trackEnd);
    }
  };
</script>

<style scoped>
  .editor {
    border: 2px solid black;
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(32, 1fr);
    grid-template-rows: repeat(32, 1fr);
  }

  .pixel {
    background: white;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
  }

  .pixel.filled {
    background: black;
    border-color: black;
  }
</style>
