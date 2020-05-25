import Vue from "vue";
import VueRouter from "vue-router";
import SiteTopNavBar from "../components/SiteTopNavBar.vue";
import SecondNav from "../components/SecondNav.vue";
import Homemain from "../components/Homemain.vue";
import mainproduct from "../components/Mainproduct.vue"
import about from "../views/About.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      bar1: SiteTopNavBar,
      bar2: SecondNav,
      main: Homemain,
      mainproduct: mainproduct,
    }
  },
  {
    path: "/about",
    name: "About",
    //component: () =>
    //  import( /* webpackChunkName: "about" */ "../views/About.vue"),
    components:{
      bar1: SiteTopNavBar,
      bar2: SecondNav,
      about: about
    },
    params:{id:name}
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
