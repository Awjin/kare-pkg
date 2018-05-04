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
      :drawing="drawing"
      >
    </drawing-board>
  </div>
</template>

<script>
  import DrawingBoard from './DrawingBoard/DrawingBoard.vue'

  export default {
    name: 'Home',

    components: {
      DrawingBoard: DrawingBoard
    },

    data () {
      return {
        drawings: this.$store.state.drawings
      }
    },

    computed: {
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
