<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

html {
  padding: 1vw 1vw 4vw 1vw;
  background: #000;
  color: #fff;
  font-family: "Andale Mono", "Lucida Console", monospace;
  font-size: 15px;
}

a {
  display: block;
  color: #fff;
  outline: none;
  text-decoration: none;
  cursor: pointer;

  &[disabled="true"] {
    pointer-events: none;
    opacity: 0.5;
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

// TODO: Fine-tune these animation timings.
.fade-enter-active {
  transition: all 175ms cubic-bezier(0, 0, 0.2, 1);
}

.fade-leave-active {
  transition: all 125ms cubic-bezier(0.4, 0, 1, 1);
}
</style>
