<template>
  <div class="drawingBoard">
    <site-header>
      <div>
        <a
          @click="undoDrawing"
          :disabled="isNotUndoable"
          title="Undo stroke (cmd + z)"
          >
          undo
        </a>

        <a
          @click="redoDrawing"
          :disabled="isNotRedoable"
          title="Redo stroke (cmd + shift + z)"
          >
          redo
        </a>

        <a
          @click="clearDrawing"
          title="Clear pixels (cmd + x)"
          >
          clear
        </a>

        <a
          @click="saveDrawing"
          title="Download png (cmd + s)"
          :href="imgSrc"
          :download="`kare-pkg-${Date.now()}.png`"
          >
          save
        </a>

        <a
          @click="deleteDrawing"
          title="Delete drawing (cmd + delete)"
          >
          delete
        </a>
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

    data() {
      return {
        drawingIdx: this.$route.params.id
      }
    },

    computed: {
      isNotUndoable() {
        const history = this.$store.state.drawings[this.drawingIdx].history;
        return (history.currIdx < 0);
      },

      isNotRedoable() {
        const history = this.$store.state.drawings[this.drawingIdx].history;
        return (history.currIdx >= history.actions.length - 1);
      },

      isNotClearable() {
        const pixels = this.$store.state.drawings[this.drawingIdx].pixels;
        for (let pixelIdx in pixels) {
          if (pixels[pixelIdx]) return false;
        }
        return true;
      },

      imgSrc() {
        return this.$store.state.drawings[this.drawingIdx].imgSrc;
      }
    },

    methods: {
      clearDrawing({target}) {
        target.blur();
        if (this.isNotClearable) return;
        this.$store.commit('clearDrawing', {drawingIdx: this.drawingIdx});
      },

      undoDrawing({target}) {
        target.blur();
        this.$store.commit('undoDrawing', {drawingIdx: this.drawingIdx});
      },

      redoDrawing({target}) {
        target.blur();
        this.$store.commit('redoDrawing', {drawingIdx: this.drawingIdx});
      },

      saveDrawing({target}) {
        target.blur();
      },

      deleteDrawing({target}) {
        target.blur();
        const result = window.confirm(`Are you sure? This can't be undone!`);
        if (result) {
          this.$store.commit('deleteDrawing', {drawingIdx: this.drawingIdx});
          this.$router.push('/');
        }
      },

      keyboardShortcut() {
        const refreshShortcut = 82;
        const homeShortcut = 191;
        const redoShortcut = 90;
        const undoShortcut = 90;
        const clearShortcut = 88;
        const saveShortcut = 83;
        const deleteShortcut = 8;

        return (event) => {
          if (!event.ctrlKey && !event.metaKey) {
            return;
          }

          if (event.shiftKey) {
            if (event.keyCode === redoShortcut) {
              event.preventDefault();
              this.redoDrawing(event);
            }
            return;
          }

          switch(event.keyCode) {
            case refreshShortcut:
              // event.preventDefault();
              break;
            case homeShortcut:
              event.preventDefault();
              this.$router.push('/');
              break;
            case undoShortcut:
              event.preventDefault();
              this.undoDrawing(event);
              break;
            case clearShortcut:
              event.preventDefault();
              this.clearDrawing(event);
              break;
            case saveShortcut:
              event.preventDefault();
              this.saveDrawing(event);
              break;
            case deleteShortcut:
              event.preventDefault();
              this.deleteDrawing(event);
              break;
          }
        }
      }
    },

    created() {
      window.addEventListener('keydown', this.keyboardShortcut());
    },

    destroyed() {
      window.removeEventListener('keydown', this.keyboardShortcut());
    }
  };
</script>

<style scoped>
  main {
    display: flex;
    justify-content: center;
    padding: 1.5vmin 6vmin 6vmin 0;
  }

  main > * {
    flex-shrink: 0;
  }

  .preview {
    height: 17vmin;
    margin-right: 3vmin;
    width: 17vmin;
  }

  .editor {
    height: 74vmin;
    width: 74vmin;
  }
</style>
