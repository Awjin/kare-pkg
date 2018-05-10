<template>
  <div class="site-header">
    <div class="header-inner">
      <button>kare.pkg</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SiteHeader'
  };
</script>

<style scoped>
  .site-header {
    background: black;
    color: white;
    padding: .5rem 1rem;
    width: 100%;
  }

  .header-inner {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: auto;
  }

  button {
    background: black;
    border: 2px solid transparent;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    letter-spacing: .05rem;
    padding: .5rem .7rem .65rem .75rem;
  }

  button:hover,
  button:focus,
  button:active {
    outline: none;
    border-color: white;
  }

  button[disabled] {
    display: none;
  }
</style>
