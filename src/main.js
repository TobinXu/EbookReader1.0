import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import i18n from './lang'
import './assets/styles/icon.css'
import './assets/styles/global.scss'
import VueLazyLoad from 'vue-lazyload'
import './utils/boost'
import './utils/create-api'
require('./mock/index.js')

Vue.config.productionTip = false
Vue.use(VueLazyLoad)
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
