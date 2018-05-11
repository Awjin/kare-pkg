<template>
  <div class="home">
    <site-header>
      <div>
      </div>
    </site-header>

    <div class="gallery">
      <button
        @click.prevent="newDrawing"
        class="thumbnail"
        id="newDrawing"
        >
        +
      </button>

      <router-link
        v-for="(drawing, idx) in drawings"
        :key="Math.random()"
        :to="getRoute(idx)"
        class="thumbnail"
        >
        <div class="control-shade"></div>

        <preview :drawingIdx="idx" :key="Math.random()"></preview>
      </router-link>
    </div>
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

      newDrawing({target}) {
        target.blur();
        this.$store.commit('newDrawing');
        this.$router.push('/edit/0');
      }
    }
  };
</script>

<style scoped>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    padding: 1vw;
  }

  #newDrawing {
    align-items: center;
    background: black;
    box-shadow: none;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    display: flex;
    font-size: 10vw;
    justify-content: center;
    padding-bottom: .75vw;
  }

  #newDrawing:active,
  #newDrawing:focus,
  #newDrawing:hover {
    border-color: #888;
    color: #888;
  }

  .thumbnail {
    flex-shrink: 0;
    height: 17.6vw;
    margin: 1vw;
    position: relative;
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

  .preview {
    height: 17.6vw;
    width: 17.6vw;
  }
</style>
