<template>
  <router-view/>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  :root {
    --color-action: #453efb;
    --color-dark: #000;
    --color-light: #fff;
  }

  html {
    font: 14px / 1.5 'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
</style>
