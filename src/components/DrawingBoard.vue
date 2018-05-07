<template>
  <div class="drawingBoard">
    <preview :drawingIdx="drawingIdx"></preview>

    <div>
      <editor :drawingIdx="drawingIdx"></editor>

      <div class="controls">
        <button @click="clearDrawing">clear</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Editor from './Editor.vue'
  import Preview from './Preview.vue'

  export default {
    name: 'DrawingBoard',

    components: {
      Editor: Editor,
      Preview: Preview
    },

    props: [
      'drawingIdx'
    ],

    methods: {
      clearDrawing: function(event) {
        event.target.blur();
        const response = window.confirm("Are you sure? This can't be undone");
        if (response) {
          this.$store.dispatch('clearDrawing', {drawingIdx: this.drawingIdx});
        }
      }
    }
  }
</script>

<style scoped>
  .drawingBoard {
    display: flex;
    justify-content: center;
    padding: 3vmin;
  }

  .drawingBoard > * {
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

  .controls {
    margin-top: 2vmin;
    text-align: center;
  }

  button {
    background: var(--color-dark);
    border: none;
    border-radius: 5px;
    color: var(--color-light);
    cursor: pointer;
    letter-spacing: .05rem;
    padding: .55rem .75rem .65rem .75rem;
  }

  button:hover,
  button:focus {
    opacity: .5;
  }

  button:active {
    outline: none;
  }
</style>
