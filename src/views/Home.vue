<template>
  <div id="Home">
    <Navigation />
    <Header />
    <About />
    <Skills />
    <Projects />
  </div>
</template>

<script charset="utf-8">
import Navigation from '@/components/Navigation.vue'
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    Header,
    About,
    Skills,
    Projects
  }
}
</script>
