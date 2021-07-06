<template>
  <div>
    <app-header>
      <template v-slot:left>
        <a @click.prevent="newDrawing">+ NEW</a>
      </template>
      <template v-slot:right>
        <form>
          <label for="import">
            <a>import</a>
          </label>
          <input
            @change="importDrawings"
            type="file"
            accept=".json"
            multiple="false"
            id="import"
            hidden
          />
        </form>
        <a
          :href="exportUri"
          :disabled="drawingsEmpty"
          :download="`kare.pkg-export-${new Date().toLocaleString()}.json`"
          >export</a
        >
        <a @click="deleteAllDrawings" :disabled="drawingsEmpty">delete all</a>
      </template>
    </app-header>

    <main class="thumbnail-grid">
      <draggable v-model="drawings" v-bind="dragOptions" item-key="id">
        <template #item="{ index }">
          <router-link class="thumbnail-wrapper" :to="routeForEdit(index)">
            <drawing-preview class="thumbnail" :idx="index" />
          </router-link>
        </template>
      </draggable>
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Draggable from "vuedraggable";

import { Drawing } from "../store/drawing";
import AppHeader from "../components/AppHeader.vue";
import DrawingPreview from "../components/DrawingPreview.vue";

export default defineComponent({
  components: {
    AppHeader,
    Draggable,
    DrawingPreview,
  },

  setup() {
    const store = useStore();
    const router = useRouter();

    const dragOptions = ref({
      direction: "horizontal",
      delay: 250,
      animation: 200,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      chosenClass: "drag-chosen",
      ghostClass: "drag-ghost",
    });

    const drawings = computed({
      get() {
        return store.state.drawings;
      },
      set(newlySorted: Drawing[]) {
        store.commit("setDrawings", newlySorted);
      },
    });

    const drawingsEmpty = computed(() => store.state.drawings.length === 0);

    const exportUri = computed(() => store.getters.uriForDrawingsExport);

    function routeForEdit(idx: number): string {
      return `/edit/${idx}`;
    }

    function newDrawing(): void {
      setTimeout(() => store.commit("newDrawing"));
      router.push(routeForEdit(0));
    }

    function importDrawings(event: InputEvent): void {
      const target = event.target as HTMLInputElement;
      if (!target || !target.files || target.files.length === 0) return;

      const fileReader = new FileReader();
      fileReader.onload = (event: Event) => {
        const file = (event.target as FileReader).result;
        if (!file) return;
        store.commit("loadFromExport", {
          export: file,
        });
      };

      fileReader.readAsText(target.files[0]);
      (target.parentElement as HTMLFormElement).reset();
    }

    function deleteAllDrawings(): void {
      if (window.confirm(`This cannot be undone. Are you sure?`)) {
        store.commit("deleteAllDrawings");
      }
    }

    return {
      dragOptions,
      drawings,
      drawingsEmpty,
      exportUri,
      routeForEdit,
      newDrawing,
      importDrawings,
      deleteAllDrawings,
    };
  },
});
</script>

<style lang="scss" scoped>
.thumbnail-grid {
  display: flex;
  flex-wrap: wrap;
}

.thumbnail-wrapper {
  cursor: pointer;
  display: inline-block;
  margin: 0 1vw 2vw 1vw;
}

.thumbnail {
  height: 22.5vw;
  width: 22.5vw;

  @media (min-width: 769px) {
    height: 17.6vw;
    width: 17.6vw;
  }

  @media (min-width: 1025px) {
    height: 14.3333333333vw;
    width: 14.3333333333vw;
  }
}

.drag-chosen {
  opacity: 0.9;
  transform: scale(1.05, 1.05);
}

.drag-ghost {
  opacity: 0;
}
</style>
