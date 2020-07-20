<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import "less/reset.less";
@import "less/vars.less";

@font-face {
  font-family: 'TeX Adventor';
  src: url(assets/texgyreadventor-regular.otf);
}
@font-face {
  font-family: 'TeX Adventor';
  src: url(assets/texgyreadventor-bold.otf);
  font-weight: bold;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: @base-font-size;
  font-weight: 300;
  color: @base-fg-dark;

  .primary {
    background-color: @base-primary;
    color: @base-fg-light;
  }
  .secondary {
    background-color: @base-secondary;
    color: @base-fg-light;
  }
  .tertiary {
    background-color: @base-tertiary;
    color: @base-fg-light;
  }

  h1 {
    font-family: 'TeX Adventor', Helvetica, Arial, sans-serif;
    font-size: @base-h1-size;
    font-weight: 700;
    margin-bottom: 50px;
  }

  h2 {
    font-family: 'TeX Adventor', Helvetica, Arial, sans-serif;
    font-size: @base-h2-size;
    text-transform: uppercase;
    letter-spacing: 4.25px;
    margin-bottom: 50px;
  }

  h3 {
    font-size: @base-notice-size;
    margin-bottom: 50px;
  }

  p {
    font-size: @base-font-size;
    line-height: @base-font-size * 1.75;
    margin-bottom: 20px;
  }

  a {
    color: @base-fg-dark;
    text-decoration: none;
  }

  button {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size: 16px;
    background: @base-primary;
    color: @base-fg-light;
    padding: 18px 30px;
    border: none;
    cursor: pointer;
    margin-top: 25px;
  }

  .container {
    max-width: @base-container-size;
    margin: 0 auto;
  }

  .box {
    max-width: @base-box-size;
  }
}

</style>
