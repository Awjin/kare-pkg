<template>
  <div>
    <home-header />
    <main>
      <button class="thumbnail thumbnail--new" @click.prevent="newDrawing">+</button>
      <router-link
        class="thumbnail"
        v-for="(drawing, idx) in drawings"
        :key="idx"
        :to="getRoute(idx)"
      >
        <preview :drawingIdx="idx"></preview>
      </router-link>
    </main>
  </div>
</template>

<script lang="ts">
import HomeHeader from "@/components/headers/HomeHeader.vue";
import Preview from "@/components/Preview.vue";
import {Drawing} from "@/store/drawing";
import {Component, Vue} from "vue-property-decorator";

@Component({
  name: "Home",
  components: {
    HomeHeader,
    Preview,
  },
})
export default class Home extends Vue {
  drawings: Drawing[] = this.$store.state.drawings;

  getRoute(drawingIdx: number) {
    return `/edit/${drawingIdx}`;
  }

  newDrawing() {
    this.$store.commit("new");
    this.$router.push("/edit/0");
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
  margin: 0 1vw 2vw 1vw;
  text-align: center;
  transition: opacity 100ms cubic-bezier(0.4, 0, 0.2, 1);

  &:active,
  &:focus,
  &:hover {
    opacity: 0.4;
  }
}

.thumbnail--new {
  background: #000;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  font-size: 10vw;
  padding-bottom: 0.75vw;
}

.thumbnail--new,
.preview {
  height: 17.6vw;
  width: 17.6vw;
}
</style>
