<template>
  <div class="home">
    <site-header>
      <div>
      </div>
    </site-header>

    <div class="wrapper">
      <a @click.prevent="newDrawing" id="new">+</a>

      <router-link
        v-for="(drawing, idx) in drawings"
        :key="Math.random()"
        :to="getRoute(idx)"
        class="thumbnail"
        >
        <div class="control-shade"></div>

        <preview :drawingIdx="idx" :key="Math.random()"></preview>
      </router-link>
    </div class="wrapper">
  </div>
</template>

<script>
  import DrawingBoard from './DrawingBoard.vue'
  import Preview from './Preview.vue'
  import SiteHeader from './SiteHeader.vue'

  export default {
    name: 'Home',

    components: {
      DrawingBoard: DrawingBoard,
      Preview: Preview,
      SiteHeader: SiteHeader
    },

    data() {
      return {
        drawings: this.$store.state.drawings
      }
    },

    methods: {
      getRoute(idx) {
        return `/edit/${idx}`;
      },

      newDrawing() {
        this.$store.commit('newDrawing');
      }
    }
  };
</script>

<style scoped>
  .home {
    padding-bottom: 2vw;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 1vw;
  }

  .thumbnail {
    outline: none;
    position: relative;
    flex-shrink: 0;
    margin: 1vw;
    width: 17.6vw;
  }

  .control-shade {
    background: rgba(0, 0, 0, .2);
    height: 100%;
    position: absolute;
    visibility: hidden;
    width: 100%;
  }

  .thumbnail:active > .control-shade,
  .thumbnail:focus > .control-shade,
  .thumbnail:hover  > .control-shade {
    visibility: visible;
  }

  #new {
    align-items: center;
    background: black;
    border-radius: 100%;
    color: white;
    display: flex;
    flex-shrink: 0;
    font-size: 10vw;
    height: 13.6vw;
    justify-content: center;
    margin: 3vw;
    outline: none;
    padding-bottom: 2.5vw;
    padding-left: .4vw;
    text-decoration: none;
    user-select: none;
    width: 13.6vw;
  }

  #new:active,
  #new:focus,
  #new:hover {
    background: #999;
  }
</style>
