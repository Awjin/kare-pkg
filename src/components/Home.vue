<template>
  <div class="home">
    <site-header>
      <div>
        <a
          title="Export backup (cmd + s)"
          :href="exportSrc"
          :download="`kare-pkg-backup-${Date.now()}.json`"
          :disabled="isNotExportable"
          >
          export
        </a>

        <form>
          <label for="file"><a>import</a></label>
          <input
            @change="importFile"
            accept=".json"
            hidden
            id="file"
            multiple="false"
            title="Import backup (cmd + o)"
            type="file"
          >
        </form>
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

    computed: {
      isNotExportable() {
        return this.$store.state.drawings.length === 0;
      },

      exportSrc() {
        const drawings = this.$store.state.drawings;
        const jsonExport = [];

        for (let drawing of drawings) {
          jsonExport.push(drawing.pixels);
        }

        const str = JSON.stringify(jsonExport);
        return `data:application/json;charset=utf-8,${encodeURIComponent(str)}`;
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
      },

      importFile({target}) {
        if (target.files.length === 0) return;

        const fileReader = new FileReader();
        fileReader.onload = ({target}) => {
          this.$store.commit('importDrawings', {
            importedPixels: JSON.parse(target.result)
          });
        };

        fileReader.readAsText(target.files[0]);
        target.parentElement.reset();
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
    transition: border-color 100ms cubic-bezier(.4, 0, .2, 1),
                color 100ms cubic-bezier(.4, 0, .2, 1);
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
    background: black;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity 100ms cubic-bezier(.4, 0, .2, 1);
    width: 100%;
  }

  .thumbnail:active > .control-shade,
  .thumbnail:focus > .control-shade,
  .thumbnail:hover  > .control-shade {
    opacity: .4;
  }

  .preview {
    height: 17.6vw;
    width: 17.6vw;
  }

  form {
    display: inline-block;
  }
</style>
