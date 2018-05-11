import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import 'normalize.css'

Vue.config.productionTip = false
Vue.use(Vuex)

router.beforeEach((to, from, next) => {
  if (to.name === 'Edit') {
    const drawingIdx = to.params.drawingIdx;
    if (!store.state.drawings[drawingIdx]) {
      next(from.path);
      return;
    }
  }

  next();
});

store.commit('loadFromLocalStorage');

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,
  store
})
