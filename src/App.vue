<template>
  <div id="app">
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
</style>
