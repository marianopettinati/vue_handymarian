import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Colors from "../views/Colors.vue";
import Products from "../views/ProductsSample.vue";
import Admin from "../views/Admin.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/colors",
    name: "colors",
    component: Colors,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
