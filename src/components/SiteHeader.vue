<template>
  <div class="site-header">
    <div class="header-inner">
      <button>KARE.pkg</button>
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
    border: 1px solid transparent;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    letter-spacing: .05rem;
    padding: .5rem .66rem .66rem .66rem;
    transition: color .2s ease;
  }

  button:active,
  button:focus,
  button:hover {
    outline: none;
    border-color: white;
  }

  button[disabled] {
    color: #888;
    cursor: default;
  }

  button[disabled]:active,
  button[disabled]:focus,
  button[disabled]:hover {
    border-color: transparent;
  }

</style>
