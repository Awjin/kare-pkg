<template>
  <div>
    <app-header>
      <template v-slot:left>
        <router-link to="/">&lt; BACK</router-link>
      </template>
      <template v-slot:right>
        <a @click="undo" :disabled="undoDisabled">undo</a>
        <a @click="redo" :disabled="redoDisabled">redo</a>
        <a @click="clear" :disabled="clearDisabled">clear</a>
        <a @click="copyDrawing">make copy</a>
        <a
          :href="downloadUri"
          :download="`kare.pkg-drawing-${new Date().toLocaleString()}.png`"
          >download</a
        >
        <a @click="deleteDrawing">delete</a>
      </template>
    </app-header>

    <main>
      <drawing-preview class="preview" :idx="drawingIdx" />
      <drawing-editor class="editor" :idx="drawingIdx" />
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import AppHeader from "../components/AppHeader.vue";
import DrawingEditor from "../components/DrawingEditor.vue";
import DrawingPreview from "../components/DrawingPreview.vue";

export default defineComponent({
  components: {
    AppHeader,
    DrawingEditor,
    DrawingPreview,
  },

  props: {
    idx: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    onMounted(() =>
      window.addEventListener("keydown", (event) =>
        handleKeyboardShortcut(event)
      )
    );

    onUnmounted(() =>
      window.removeEventListener("keydown", (event) =>
        handleKeyboardShortcut(event)
      )
    );

    const store = useStore();
    const router = useRouter();

    const drawingIdx = parseInt(props.idx);
    const drawing = store.state.drawings[drawingIdx];
    const downloadUri = computed(() => drawing.preview);
    const undoDisabled = computed(() => !drawing.canUndo);
    const redoDisabled = computed(() => !drawing.canRedo);
    const clearDisabled = computed(() => !drawing.canClear);

    function undo(): void {
      store.commit("undo", { drawing: drawingIdx });
    }

    function redo(): void {
      store.commit("redo", { drawing: drawingIdx });
    }

    function clear(): void {
      store.commit("clear", { drawing: drawingIdx });
    }

    function copyDrawing(): void {
      setTimeout(() => store.commit("copyDrawing", { drawing: drawingIdx }));
      router.push("/");
      setTimeout(() => router.push("/edit/0"));
    }

    function deleteDrawing(): void {
      if (window.confirm(`This cannot be undone. Are you sure?`)) {
        setTimeout(() =>
          store.commit("deleteDrawing", { drawing: drawingIdx })
        );
        router.push("/");
      }
    }

    function handleKeyboardShortcut(event: KeyboardEvent): void {
      if (!event.ctrlKey && !event.metaKey) return;
      if (event.keyCode !== 90) return;
      if (event.shiftKey) {
        redo();
      } else {
        undo();
      }
      event.preventDefault();
    }

    return {
      drawingIdx,
      downloadUri,
      undoDisabled,
      redoDisabled,
      clearDisabled,
      undo,
      redo,
      clear,
      copyDrawing,
      deleteDrawing,
    };
  },
});
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
}

.preview {
  height: 17vmin;
  width: 17vmin;
  margin-left: -6vmin;
  margin-right: 3vmin;
  flex-shrink: 0;
}

.editor {
  height: 74vmin;
  width: 74vmin;
  flex-shrink: 0;
}
</style>
