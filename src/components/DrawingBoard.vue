<template>
  <div class="drawingBoard">
    <site-header>
      <div>
        <button
          @click="undo"
          :disabled="isNotUndoable"
          >
          undo
        </button>

        <button
          @click="redo"
          :disabled="isNotRedoable"
          >
          redo
        </button>

        <button
          @click="clearDrawing"
          :disabled="isNotClearable"
          >
          clear
        </button>
      </div>
    </site-header>

    <main>
      <preview :drawingIdx="drawingIdx"></preview>

      <editor :drawingIdx="drawingIdx"></editor>
    </main>
  </div>
</template>

<script>
  import Editor from './Editor.vue'
  import Preview from './Preview.vue'
  import SiteHeader from './SiteHeader.vue'

  export default {
    name: 'DrawingBoard',

    components: {
      Editor: Editor,
      Preview: Preview,
      SiteHeader: SiteHeader
    },

    props: [
      'drawingIdx'
    ],

    computed: {
      isNotClearable: function() {
        const pixels = this.$store.state.drawings[this.drawingIdx].pixels;
        for (let pixelIdx in pixels) {
          if (pixels[pixelIdx]) return false;
        }
        return true;
      },

      isNotUndoable: function() {
        const history = this.$store.state.drawings[this.drawingIdx].history;
        return (history.currIdx < 0);
      },

      isNotRedoable: function() {
        const history = this.$store.state.drawings[this.drawingIdx].history;
        return (history.currIdx >= history.actions.length - 1);
      }
    },

    methods: {
      clearDrawing: function(event) {
        event.target.blur();
        this.$store.commit('clearDrawing', {drawingIdx: this.drawingIdx});
      },

      undo: function(event) {
        event.target.blur();
        this.$store.commit('undo', {drawingIdx: this.drawingIdx});
      },

      redo: function(event) {
        event.target.blur();
        this.$store.commit('redo', {drawingIdx: this.drawingIdx});
      }
    }
  };
</script>

<style scoped>
  main {
    display: flex;
    justify-content: center;
    padding: 3vmin;
  }

  main > * {
    flex-shrink: 0;
  }

  .preview {
    height: 17vmin;
    width: 17vmin;
    margin-right: 3vmin;
  }

  .editor {
    height: 74vmin;
    width: 74vmin;
  }
</style>
