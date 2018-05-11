<template>
  <div class="site-header">
    <router-link to="/">
      <button id="home-button">KARE.pkg</button>
    </router-link>

    <div class="slotted">
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
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    padding: 3vh 2vw;
    width: 100%;
  }

  .slotted {
    text-align: right;
  }

  button {
    background: black;
    border: 1px solid transparent;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    padding: .55rem .65rem .6rem .65rem;
    transition: color 100ms cubic-bezier(.4, 0, .2, 1);
  }

  button:active,
  button:focus,
  button:hover {
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

  #home-button {
    border-color: white;
    letter-spacing: .05rem;
    margin-right: 1rem;
    transition: none;
  }

  #home-button:active,
  #home-button:focus,
  #home-button:hover {
    border-color: #888;
    color: #888;
  }
</style>
