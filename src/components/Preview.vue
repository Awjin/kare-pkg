<template>
  <div class="preview">
     <img :src="imgSrc">
  </div>
</template>

<script>
  export default {
    name: 'Preview',

    props: [
      'drawingIdx',
      'propResolution',
      'propScale'
    ],

    data() {
      return {
        canvas: null,
        resolution: this.propResolution || 32,
        scale: this.propScale || 10,
        pixels: this.$store.state.drawings[this.drawingIdx].pixels
      }
    },

    computed: {
      canvasSize() {
        return this.resolution * this.scale;
      },

      imgSrc() {
        this.pixelsToCanvas;
        return this.canvas.toDataURL('image/png');
      },

      pixelsToCanvas() {
        const context = this.canvas.getContext('2d');

        for (let pixelIdx in this.pixels) {
          context.fillStyle = (this.pixels[pixelIdx]) ? 'black' : 'white';

          const col = pixelIdx % this.resolution;
          const row = Math.floor(pixelIdx / this.resolution);

          context.fillRect(
            col * this.scale,
            row * this.scale,
            this.scale,
            this.scale
          );
        }
      }
    },

    methods: {
      initCanvas() {
        const canvas = document.createElement('canvas');
        canvas.height = this.canvasSize;
        canvas.width = this.canvasSize;

        const context = canvas.getContext('2d');
        context.fillStyle = 'white';
        context.fillRect(0, 0, this.canvasSize, this.canvasSize);
        context.fillStyle = 'black';

        this.canvas = canvas;
      }
    },

    created() {
      this.initCanvas();
    },

    destroyed() {
      this.canvas.remove();
    }
  };
</script>

<style scoped>
  .preview {
    background: white;
    border: 2px solid black;
  }

  img {
    width: 100%;
  }
</style>
