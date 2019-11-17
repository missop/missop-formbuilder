import Vue from "vue";
import VueRouter from "vue-router";
import Container from "../views/container.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "container",
    component: Container
  },
  {
    path: "/preview",
    name: "preview",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/preview.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
