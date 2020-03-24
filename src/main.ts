import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {register} from "register-service-worker";
import "normalize.css";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`);
}

window.oncontextmenu = (event: Event) => {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

store.commit("load");

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
