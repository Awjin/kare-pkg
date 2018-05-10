<template>
  <div class="drawingBoard">
    <site-header>
      <div>
        <button
          @click="undo"
          :disabled="isUndoable"
          >
          &lsh;
        </button>

        <button
          @click="redo"
          :disabled="isRedoable"
          >
          &rsh;
        </button>

        <button
          @click="clearDrawing"
          :disabled="isClearable"
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
      isClearable: function() {
        return false;
      },

      isUndoable: function() {
        return false;
      },

      isRedoable: function() {
        return false;
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
