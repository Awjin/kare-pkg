<template>
  <transition name="fade" mode="out-in">
    <router-view/>
  </transition>
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style>
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }

  html {
    background: black;
    color: white;
    font: 13px / 1.5 'Andale Mono', 'Lucida Console', monospace;
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
    transform: scale(.9);
  }

  .fade-enter-active {
    transition: all 225ms cubic-bezier(0, 0, .2, 1);
  }

  .fade-leave-active {
    transition: all 195ms cubic-bezier(.4, 0, 1, 1);
  }
</style>
