<template>
  <div>
    <home-header />
    <main>
      <draggable v-model="drawings" v-bind="dragOptions">
        <transition-group>
          <router-link
            class="thumbnail"
            v-for="(drawing, idx) in drawings"
            :key="drawing.id"
            :to="getRoute(idx)"
          >
            <preview :drawingIdx="idx"></preview>
          </router-link>
        </transition-group>
      </draggable>
    </main>
  </div>
</template>

<script lang="ts">
import HomeHeader from "@/components/HomeHeader.vue";
import Preview from "@/components/Preview.vue";
import {Drawing} from "@/store/drawing";
import {Component, Vue} from "vue-property-decorator";
import Draggable from "vuedraggable";

@Component({
  name: "Home",
  components: {
    HomeHeader,
    Preview,
    Draggable,
  },
})
export default class Home extends Vue {
  get drawings(): Drawing[] {
    return this.$store.state.drawings;
  }

  set drawings(drawings) {
    this.$store.commit("setDrawings", {drawings});
  }

  get dragOptions() {
    return {
      direction: "horizontal",
      delay: 500,
      delayOnTouchOnly: true,
      touchStartThreshold: 5,
      fallbackTolerance: 5,
      emptyInsertThreshold: 0,
      animation: 200,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      chosenClass: "drag-chosen",
      ghostClass: "drag-ghost",
    };
  }

  getRoute(drawingIdx: number) {
    return `/edit/${drawingIdx}`;
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-wrap: wrap;
  padding: 1vw;
}

.thumbnail {
  cursor: pointer;
  display: inline-block;
  margin: 0 1vw 2vw 1vw;
}

.preview {
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
