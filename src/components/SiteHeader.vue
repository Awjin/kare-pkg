<template>
  <div class="site-header">
    <router-link
      to="/"
      id="home"
      title="Home (cmd + /)"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
      kare.pkg
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

  a {
    background: black;
    border: 1px solid transparent;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    display: inline-block;
    padding: .4rem .75rem .55rem .75rem;
    text-decoration: none;
    transition: color 100ms cubic-bezier(.4, 0, .2, 1);
  }

  a:active,
  a:focus,
  a:hover {
    border-color: white;
  }

  a[disabled] {
    color: #888;
    cursor: default;
  }

  a:active[disabled],
  a:focus[disabled],
  a:hover[disabled] {
    border-color: transparent;
  }

  #home {
    align-items: center;
    border-color: white;
    display: flex;
    letter-spacing: .05rem;
    margin-right: 1rem;
    padding-left: .6rem;
    transition: none;
  }

  #home > svg {
    fill: white;
    padding-bottom: .1rem;
    width: 1.5rem;
    margin-right: .4rem;
  }

  #home:active,
  #home:focus,
  #home:hover {
    border-color: #888;
    color: #888;
  }

  #home:active > svg,
  #home:focus > svg,
  #home:hover > svg {
    fill: #888;
  }
</style>
