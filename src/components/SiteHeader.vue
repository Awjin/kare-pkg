<template>
  <div class="site-header">
    <div class="header-inner">
      <router-link to="/">
        <button>KARE.pkg</button>
      </router-link>

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

  a {
    outline: none;
  }

  button {
    background: black;
    border: 1px solid transparent;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    letter-spacing: .05rem;
    outline: none;
    padding: .5rem .66rem .66rem .66rem;
    transition: color .2s ease;
  }

  button:active,
  button:focus,
  button:hover {
    border-color: white;
  }

  button[disabled] {
    color: #999;
    cursor: default;
  }

  button[disabled]:active,
  button[disabled]:focus,
  button[disabled]:hover {
    border-color: transparent;
  }
</style>
