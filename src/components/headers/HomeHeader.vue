<template>
  <site-header>
    <template v-slot:left>
      <a @click.prevent="newDrawing">+ CREATE</a>
    </template>
    <template v-slot:right>
      <a
        :href="exportFile"
        :disabled="!isExportable"
        :download="`kare-pkg-export-${new Date().toISOString()}.json`"
        >export</a
      >
      <form>
        <label for="file">
          <a>import</a>
        </label>
        <input
          @change="importFile"
          accept=".json"
          hidden
          id="file"
          multiple="false"
          type="file"
        />
      </form>
      <a @click="removeAll">delete all</a>
    </template>
  </site-header>
</template>

<script lang="ts">
import SiteHeader from "./SiteHeader.vue";
import {Component, Vue} from "vue-property-decorator";

@Component({
  name: "HomeHeader",
  components: {
    SiteHeader,
  },
})
export default class HomeHeader extends Vue {
  get isExportable() {
    return this.$store.state.drawings.length > 0;
  }

  get exportFile() {
    return this.$store.getters.exportUrl();
  }

  newDrawing() {
    this.$store.commit("new");
    this.$router.push("/edit/0");
  }

  importFile(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    if (!target || !target.files || target.files.length === 0) return;

    const fileReader = new FileReader();
    fileReader.onload = (event: Event) => {
      const file = (event.target as FileReader).result;
      if (!file) return;
      this.$store.commit("import", {
        drawings: JSON.parse(file.toString()),
      });
    };

    fileReader.readAsText(target.files[0]);
    (target.parentElement as HTMLFormElement).reset();
  }

  removeAll() {
    if (window.confirm(`This cannot be undone. Are you sure?`)) {
      this.$store.commit("removeAll");
    }
  }
}
</script>
