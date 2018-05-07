<template>
  <div class="home">
    <header>
      <div class="header-inner">
        kare.pkg
      </div>
    </header>

    <drawing-board
      v-for="(drawing, idx) in drawings"
      :key="idx"
      :drawingIdx="idx"
      >
    </drawing-board>
  </div>
</template>

<script>
  import DrawingBoard from './DrawingBoard.vue'

  export default {
    name: 'Home',

    components: {
      DrawingBoard: DrawingBoard
    },

    data() {
      return {
      }
    },

    computed: {
      drawings: function() {
        return this.$store.state.drawings;
      }
    },

    methods: {
    }
  }
</script>

<style scoped>
  header {
    align-items: center;
    background: var(--color-dark);
    color: var(--color-light);
    padding: 1rem 0;
    width: 100%;
  }

  .header-inner {
    margin: auto;
    max-width: 94vmin;
  }
</style>
