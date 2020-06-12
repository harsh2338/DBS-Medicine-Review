import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register")
  },
  {
    path: "/overview",
    name: "overview",
    component: () => import("@/views/UserPage")
  },
  {
    path: "/drug/:name",
    name: "drug",
    component: () => import("@/components/DrugPage")
  },
  {
    path: "/add-drug",
    name: "addDrug",
    component: () => import("@/views/AddDrug")
  },
  {
    path: "/add-disease",
    name: "addDisease",
    component: () => import("@/views/AddDisease")
  }

];

const router = new VueRouter({
  routes
});

export default router;
