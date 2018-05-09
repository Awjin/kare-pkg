<template>
  <div class="home">
    <header>
      <div class="header-inner">
        kare.pkg
      </div>
    </header>

    <!-- <div class="wrapper">
      <a
        v-for="(drawing, idx) in drawings"
        href=""
        @click.prevent=""
        >
        <preview
          :key="idx"
          :drawingIdx="idx"
          >
        </preview>
      </a>
    </div class="wrapper"> -->

    <!-- todo: route this on preview <a> select -->
    <drawing-board :drawingIdx="0"></drawing-board>
  </div>
</template>

<script>
  import DrawingBoard from './DrawingBoard.vue'
  import Preview from './Preview.vue'

  export default {
    name: 'Home',

    components: {
      DrawingBoard: DrawingBoard,
      Preview: Preview
    },

    data() {
      return {
        drawings: this.$store.state.drawings
      }
    }
  };
</script>

<style scoped>
  a:active,
  a:focus,
  a:hover {
    transform: rotate(5deg);
  }

  header {
    align-items: center;
    background: black;
    color: white;
    padding: 1rem 0;
    width: 100%;
  }

  .header-inner {
    margin: auto;
    max-width: 94vmin;
  }

  .preview {
    flex-shrink: 0;
    height: 17.6vw;
    margin: 1vw;
    width: 17.6vw;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 1vw;
  }
</style>
