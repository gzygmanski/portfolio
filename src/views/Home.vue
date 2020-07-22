<template>
  <div id="Home">
    <Navigation />
    <Header />
    <Projects />
    <Skills />
    <Contact />
  </div>
</template>

<script charset="utf-8">
import Navigation from '@/components/Navigation.vue'
import Header from '@/components/Header.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    Header,
    Projects,
    Skills,
    Contact
  }
}
</script>
