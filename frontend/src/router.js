import { createRouter, createWebHistory } from "vue-router";
import HomePage from './page/HomePage.vue';
import SignIn from './page/SignIn.vue';
import CartPage from './page/CartPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component:HomePage //() => import("../views/Home.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component:SignIn//() => import("../views/List.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component:CartPage //() => import("../views/Cart.vue"),
    },
    
  ],
});

export default router;
