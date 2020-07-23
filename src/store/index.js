import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contentHeight: null
  },
  getters: {
    contentHeight: (state) => state.contentHeight,
    headerHeight: (state) => state.contentHeight + 66
  },
  mutations: {
    getWinHeight: (state, contentHeight) => (state.contentHeight = contentHeight)
  },
  actions: {
    changeWinHeight ({ commit }, height) {
      commit('getWinHeight', height)
    }
  },
  modules: {
  }
})
