<template>
  <nav id="navigation">
    <div class="container">
      <div class="logo">
        <a href="#" target="_blank"><span>Grzegorz Zygmański</span> - Portfolio</a>
      </div>
      <div class="links">
        <a href="#" target="_blank">O Mnie</a>
        <a href="#" target="_blank">Umiejętności</a>
        <a href="#" target="_blank">Projekty</a>
        <a href="#" target="_blank">Kontakt</a>
      </div>
      <div class="menu">
        +
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="less" scoped>
@import "../less/vars.less";

#navigation {
  position: absolute;
  width: 100%;
  top: 60px;
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 50px;
    text-transform: uppercase;
  }
  .menu {
    display: none;
  }
  .logo {
    a {
      span {
        font-weight: 700;
      }
    }
  }
  .links {
    a {
      margin-left: 100px;
      white-space: nowrap;
    }
  }
  @media @sm {
    .menu {
      display: block;
    }
    .links {
      display: none;
    }
  }
  @media @md {
    .links {
      a {
        margin-left: 50px;
      }
    }
  }
}
</style>
