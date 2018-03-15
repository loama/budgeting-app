<template>
  <div id="app">
    <div id="nav">
      <router-link to="budget" tag="div" active-class="active" class="navigation">
        budget
      </router-link>

      <router-link to="expenses" tag="div" active-class="active" class="navigation">
        expenses
      </router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    max-width: 100vw;
    overflow-x: hidden;
    background: #F5F7FB;
  }

  @font-face {
    font-family: 'ProductSans';
    src: url('./assets/font/Product_Sans.ttf');
  }

  @font-face {
    font-family: 'ProductSans-Bold';
    src: url('./assets/font/Product_Sans_Bold.ttf');
  }

  #app {
    font-family: 'ProductSans';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #4A4A4A;
    font-size: 16px;
    width: 100vw;
  }

  #nav {
    position: fixed;
    top: 8px;
    left: 8px;
  }

  .navigation {
    width: 160px;
    height: 50px;
    border: 1px solid #e5e5e5;
    background: white;
    color: #9B9B9B;
    text-align: center;
    line-height: 50px;
    display: inline-block;
    border-radius: 2px;
    cursor: pointer;
  }

  .active.navigation {
    font-family: 'ProductSans-Bold';
    color: #4A90E2;
  }
</style>
