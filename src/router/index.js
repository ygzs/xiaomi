import Vue from "vue";
import VueRouter from "vue-router";
import SiteTopNavBar from "../components/SiteTopNavBar.vue";
import SecondNav from "../components/SecondNav.vue";
import Homemain from "../components/Homemain.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      bar1: SiteTopNavBar,
      bar2: SecondNav,
      main: Homemain
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
