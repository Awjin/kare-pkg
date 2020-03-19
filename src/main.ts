import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";

Vue.config.productionTip = false;
store.commit("load");

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
