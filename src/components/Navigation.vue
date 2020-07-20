<template>
  <nav id="navigation" :class="{fixed: !onTop}">
    <div class="container">
      <div class="logo">
        <a href="#" v-scroll-to="'#header'"><span>Grzegorz Zygmański</span> - Portfolio</a>
      </div>
      <div class="links">
        <a href="#" v-scroll-to="'#projects'">Projekty</a>
        <a href="#" v-scroll-to="'#skills'">Umiejętności</a>
        <a href="#" v-scroll-to="'#about'">O Mnie</a>
        <a href="#" v-scroll-to="'#contact'">Kontakt</a>
      </div>
      <div class="menu">
       <span><font-awesome-icon icon="bars" /></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => {
    return {
      onTop: true
    }
  },
  created () {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        this.onTop = true
      } else {
        this.onTop = false
      }
    })
  }
}
</script>

<style lang="less" scoped>
@import "../less/vars.less";

.fixed {
  transition: ease .25s;
  box-shadow: @base-bg-dark 0 0 5px;
  padding: 25px !important;
  background: @base-bg-dark;

  .menu {
    span {
      color: @base-fg-light !important;
    }
  }

  a {
    color: @base-fg-light !important;
  }
}

#navigation {
  transition: ease .25s;
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0;
  padding: 50px 25px 25px 25px;

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 50px;
    text-transform: uppercase;
  }

  .menu {
    display: none;
    cursor: pointer;

    span {
      color: @base-fg-dark;
    }
  }

  .logo {
    a {
      span {
        font-weight: 700;
      }
    }
  }

  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 50%;
  }

  @media @sm {
    .menu {
      display: block;
    }
    .links {
      display: none;
    }
  }
}
</style>
