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
  font-family: 'M PLUS 1p', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  font-weight: 300;
  color: @base-fg-dark;

  a {
    color: @base-fg-dark;
    text-decoration: none;
  }
}

</style>
