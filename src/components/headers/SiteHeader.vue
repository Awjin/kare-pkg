<template>
  <header>
    <router-link to="/" id="home" title="home">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
      kare.pkg
    </router-link>
    <div class="slotted">
      <slot></slot>
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
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: 3vh 2vw;
  width: 100%;
}

.slotted {
  text-align: right;
}

a {
  background: #000;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin: 1px;
  padding: 0.45rem 0.9rem 0.55rem 0.9rem;
  text-decoration: none;
  transition: opacity 100ms cubic-bezier(0.4, 0, 0.2, 1);

  &:active:not([disabled]),
  &:focus:not([disabled]),
  &:hover:not([disabled]) {
    border-color: #fff;
  }

  &[disabled] {
    color: #888;
    cursor: default;
  }
}

#home {
  align-items: center;
  border-color: #fff;
  display: flex;
  letter-spacing: 0.05rem;
  margin-right: 1rem;
  padding-left: 0.6rem;

  &:active,
  &:focus,
  &:hover {
    border-color: #888;
    color: #888;

    svg {
      fill: #888;
    }
  }

  svg {
    fill: #fff;
    margin-right: 0.4rem;
    padding-bottom: 0.1rem;
    transition-duration: 125ms;
    width: 1.5rem;
  }
}
</style>
