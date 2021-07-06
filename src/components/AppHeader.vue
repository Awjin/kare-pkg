<template>
  <header class="app-header">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </header>
</template>

<style lang="scss">
.app-header {
  display: flex;
  padding: 0 0.25vw 2vmax 0.25vw;

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
      margin-left: 1.5rem;
    }
  }

  a {
    margin: 0.25vmax 0;
    padding: 0.75vmax;
  }
}
</style>
