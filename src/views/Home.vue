<template>
  <div id="Home">
    <Navigation />
    <Header />
    <Projects />
    <Skills />
    <About />
    <Contact />
  </div>
</template>

<script charset="utf-8">
import { mapActions } from 'vuex'
import Navigation from '@/components/Navigation.vue'
import Header from '@/components/Header.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'
import Contact from '@/components/Contact.vue'
import About from '@/components/About.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    Header,
    Projects,
    Skills,
    Contact,
    About
  },
  data: () => {
    return {
      winHeight: 0
    }
  },
  methods: {
    ...mapActions(['changeWinHeight']),
    getRealHeight () {
      return window.innerHeight - 66
    }
  },
  created () {
    this.winHeight = this.getRealHeight()
    this.changeWinHeight(this.winHeight)
    window.addEventListener('resize', () => {
      this.changeWinHeight(this.getRealHeight())
    })
  }

}
</script>
