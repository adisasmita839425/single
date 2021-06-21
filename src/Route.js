import Vue from "vue";
import VueRouter from "vue-router";
import CardLogin from "./components/CardLogin.vue";
import Homepage from "./components/Homepage.vue";
import Signup from "./components/Signup.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: CardLogin, name: "cardlogin" },
  { path: "/home", component: Homepage, name: "Homepage" },
  { path: "/signup", component: Signup, name: "Signup" },
];

const router = new VueRouter({
  routes,
  mode: "history",
});
export default router;
