import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'typeface-roboto'
import 'muse-ui-progress/dist/muse-ui-progress.css'
import NProgress from 'muse-ui-progress'
import processConfig from '../public/config/ProgressConfig'
Vue.use(NProgress, processConfig)
Vue.use(MuseUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach((to, from) => {
  NProgress.done()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
