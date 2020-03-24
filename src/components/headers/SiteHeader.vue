<template>
  <header>
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
  name: "SiteHeader",
})
export default class SiteHeader extends Vue {}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  padding: 2.5vmax 2vmax 0 2vmax;
  width: 100%;
}

.left {
  flex-shrink: 0;
  letter-spacing: 0.05rem;
}

.right {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-left: auto;

  a {
    margin-bottom: 2vmax;
    margin-left: 2.5rem;
  }
}

a {
  color: #fff;
  cursor: pointer;
  display: block;
  text-decoration: none;

  &[disabled] {
    cursor: default;
    opacity: 0.4;
  }
}
</style>
