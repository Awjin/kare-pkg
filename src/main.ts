import "normalize.css";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

window.oncontextmenu = (event: Event) => event.preventDefault();
window.onbeforeunload = () => store.commit("saveToLocalStorage");

store.commit("loadFromLocalStorage");
createApp(App).use(store).use(router).mount("#app");
