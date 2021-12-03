import Vue from "vue";
import VueRouter from "vue-router";
import front from "./front";
import admin from "./admin";

Vue.use(VueRouter);

const routes = [...front, ...admin];

const router = new VueRouter({
  routes,
});

export default router;
