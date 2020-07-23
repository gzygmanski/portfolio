<template>
  <header id="header" :style="{'min-height': headerHeight + 'px'}">
    <div class="container">
      <div class="box landing-content">
        <h1>Grzegorz Zygmański</h1>
        <h2>Junior Front-end Developer</h2>
        <p>Zajmuję się projektowaniem i tworzeniem responsywnych stron internetowych. Okazyjnie
          piszę aplikację i skrypty w Pythonie oraz Bash'u. Sprawdź niektóre z moich projektów.</p>
        <p></p>
        <button v-scroll-to="'#projects'">Dowiedz się więcej</button>
      </div>
    </div>
  </header>
</template>

<script charset="utf-8">
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters(['headerHeight'])
  }
}
</script>

<style lang="less" scoped>
@import "../less/vars.less";

#header {
  position: relative;
  height: 750px;
  background-color: @base-bg-blend;
  background-image: url(../assets/header.png);
  background-position: center;
  background-size: cover;
  background-blend-mode: overlay;
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
  }

  @media @sm {
    .container {
      transform: translateY(-50%) translateX(-50%);
      text-align: center;
    }
  }
}
</style>
