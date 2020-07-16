import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '*', component: NotFound }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
