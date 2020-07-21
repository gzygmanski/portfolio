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
      <div class="menu" v-on:click="toggleSideBar()">
        <span><font-awesome-icon icon="bars" /></span>
      </div>
    </div>
    <transition name="fade">
      <div class="overlay" v-if="sideBar" v-on:click="toggleSideBar()">
      </div>
    </transition>
    <transition name="slide">
      <div class="sidebar" v-if="sideBar">
        <div class="menubar">
          <h2>Menu</h2>
          <a href="#" v-scroll-to="'#projects'">Projekty</a>
          <a href="#" v-scroll-to="'#skills'">Umiejętności</a>
          <a href="#" v-scroll-to="'#about'">O Mnie</a>
          <a href="#" v-scroll-to="'#contact'">Kontakt</a>
          <button v-on:click="toggleSideBar()"><font-awesome-icon icon="window-close" /><span>Zamknij</span></button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => {
    return {
      onTop: true,
      sideBar: false
    }
  },
  methods: {
    toggleSideBar: function () {
      this.sideBar = !this.sideBar
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

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.sideBar = false
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
  z-index: 2;

  .menu {
    span {
      color: @base-fg-light !important;
    }
  }

  a {
    color: @base-fg-light !important;
  }
}

.slide-enter-active, .slide-leave-active {
  transition: all .5s ease-in-out;
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}

.fade-enter-active, .fade-leave-active {
  transition: all .25s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
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

  .overlay, .sidebar {
    display:none;
  }

  @media @sm {
    .menu {
      display: block;
    }

    .links {
      display: none;
    }

    .sidebar {
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      max-width: 500px;
      width: 100%;
      background: @base-bg-dark2;
      box-shadow: 0 0 5px @base-bg-dark;

      .menubar {
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 100%;

        h2 {
          color: @base-fg-light;
          margin-top: 50px;
        }

        a {
          padding: 5% 0;
          color: @base-fg-light;
        }

        button {
          padding: 5% 0;

          span {
            margin-left: 10px;
          }
        }
      }
    }

    .overlay {
      display: block;
      position: fixed;
      height: 100%;
      width: 100%;
      background: @base-bg-blend2;
      top: 0;
      left: 0;
    }
  }
}
</style>
