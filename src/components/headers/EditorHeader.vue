<template>
  <site-header>
    <a @click="undo" :disabled="!isUndoable" title="Undo stroke (cmd + z)">undo</a>
    <a @click="redo" :disabled="!isRedoable" title="Redo stroke (cmd + shift + z)">redo</a>
    <a @click="clear">clear</a>
    <a @click="copy">copy</a>
    <a :href="preview" :download="`kare-pkg-${Date.now()}.png`">save</a>
    <a @click="remove">delete</a>
  </site-header>
</template>

<script lang="ts">
import SiteHeader from "./SiteHeader.vue";
import {Component, Prop, Vue} from "vue-property-decorator";
import {Drawing} from "@/store/drawing";

@Component({
  name: "EditorHeader",
  components: {
    SiteHeader,
  },
})
export default class EditorHeader extends Vue {
  @Prop()
  private drawingIdx!: number;
  private drawing: Drawing = this.$store.state.drawings[this.drawingIdx];

  get isUndoable(): boolean {
    return this.drawing.canUndo;
  }

  get isRedoable(): boolean {
    return this.drawing.canRedo;
  }

  get preview(): string {
    return this.drawing.preview;
  }

  created() {
    window.addEventListener("keydown", event => this.keyboardShortcut(event));
  }

  destroyed() {
    window.removeEventListener("keydown", event =>
      this.keyboardShortcut(event)
    );
  }

  undo() {
    this.$store.commit("undo", {drawingIdx: this.drawingIdx});
  }

  redo() {
    this.$store.commit("redo", {drawingIdx: this.drawingIdx});
  }

  clear() {
    this.$store.commit("clear", {drawingIdx: this.drawingIdx});
  }

  copy() {
    this.$store.commit("copy", {drawingIdx: this.drawingIdx});
    this.$router.push("/");
    setTimeout(() => this.$router.push("/edit/0"));
  }

  remove() {
    if (window.confirm(`This cannot be undone. Are you sure?`)) {
      this.$store.commit("remove", {drawingIdx: this.drawingIdx});
      this.$router.push("/");
    }
  }

  keyboardShortcut(event: KeyboardEvent) {
    if (!event.ctrlKey && !event.metaKey) return;
    if (event.keyCode !== 90) return;
    event.preventDefault();
    if (event.shiftKey) {
      this.redo();
    } else {
      this.undo();
    }
  }
}
</script>
