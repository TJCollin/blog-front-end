import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AxiosPlugin from "./utils/axios-plugin";
import { Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.use(AxiosPlugin);
Vue.prototype.$message = Message;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
