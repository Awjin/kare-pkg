import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Home from "@/views/Home.vue";
import Edit from "@/views/Edit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/edit/:drawingIdx",
    name: "Edit",
    component: Edit,
    props: true,
  },
  {
    path: "*",
    component: Home,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Edit") return next();
  const drawingIdx = parseInt(to.params.drawingIdx);
  if (store.state.drawings[drawingIdx]) return next();
  return next(from.path);
});

export default router;
