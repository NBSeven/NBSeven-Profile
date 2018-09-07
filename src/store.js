import Vue from 'vue'
import Vuex from 'vuex'
import theme from 'muse-ui/lib/theme'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'light'
  },
  mutations: {
    setLight (state) {
      state.theme = 'light'
      theme.use('light')
    },
    setDark (state) {
      state.theme = 'dark'
      theme.use('dark')
    }
  },
  actions: {

  }
})
