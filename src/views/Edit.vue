<template>
  <div>
    <EditorHeader :drawingIdx="drawingIdx" />
    <main>
      <preview class="edit__preview" :drawingIdx="drawingIdx" />
      <editor class="edit__editor" :drawingIdx="drawingIdx" />
    </main>
  </div>
</template>

<script lang="ts">
import EditorHeader from "@/components/headers/EditorHeader.vue";
import Preview from "@/components/Preview.vue";
import Editor from "@/components/Editor.vue";

export default {
  name: "Edit",
  props: ["drawingIdx"],
  components: {
    EditorHeader,
    Preview,
    Editor,
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  padding: 1.5vmin 6vmin 6vmin 0;
}

.edit__preview {
  flex-shrink: 0;
  height: 17vmin;
  margin-right: 3vmin;
  width: 17vmin;
}

.edit__editor {
  flex-shrink: 0;
  height: 74vmin;
  width: 74vmin;
}
</style>
