import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {register} from "register-service-worker";
import "normalize.css";

/* eslint-disable no-console */
if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log("App is being served from cache by a service worker.");
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh.");
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
}

Vue.config.productionTip = false;
store.commit("load");

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
