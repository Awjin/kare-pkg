<template>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

html {
  background: #000;
  color: #fff;
  font: 13px / 1.5 "Andale Mono", "Lucida Console", monospace;
}

body > * {
  min-height: 100vh;
}

a,
button {
  outline: none;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.fade-enter-active {
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
}

.fade-leave-active {
  transition: all 150ms cubic-bezier(0.4, 0, 1, 1);
}
</style>
