import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'normalize.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,
  store
})
