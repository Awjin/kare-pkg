<template>
  <div class="drawingBoard">
    <preview :pixels="drawing"></preview>
    <editor :pixels="drawing"></editor>
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
      'drawing'
    ],

    data () {
      return {
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

  .editor {
    height: 74vmin;
    width: 74vmin;
  }

  .preview {
    height: 17vmin;
    width: 17vmin;
    margin-right: 3vmin;
  }

  .editor,
  .preview {
    flex-shrink: 0;
  }
</style>
