<template>
  <div class="preview">
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
    name: 'Preview',

    props: [
      'drawingIdx'
    ],

    data() {
      return {
        pixels: this.$store.state.drawings[this.drawingIdx].pixels
      }
    }
  }
</script>

<style scoped>
  .preview {
    background: var(--color-light);
    border: 2px solid var(--color-dark);
    display: grid;
    grid-template-columns: repeat(32, 1fr);
    grid-template-rows: repeat(32, 1fr);
  }

  .pixel {
    background: var(--color-light);
  }

  .pixel.filled {
    background: var(--color-dark);
  }
</style>
