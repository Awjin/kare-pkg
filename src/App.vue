<template>
  <transition name="fade" mode="out-in" :duration="{leave: 500}">
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
    font: 13px / 1.5 'Andale Mono', 'Lucida Console', sans-serif;
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
    transform: translateY(-100vh);
  }

  .fade-enter-active {
    transition: all 300ms cubic-bezier(0, 0, .2, 1);
  }

  .fade-leave-active {
    transition: all 250ms cubic-bezier(.4, 0, 1, 1);
  }
</style>
