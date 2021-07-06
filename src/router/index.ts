import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/Home.vue";
import Edit from "../views/Edit.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/edit/:idx",
    component: Edit,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Home,
  },
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
