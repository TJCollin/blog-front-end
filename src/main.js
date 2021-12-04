import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AxiosPlugin from "./utils/axios-plugin";
import { Message, Loading } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.use(AxiosPlugin);
Vue.prototype.$message = Message;
let  loading;
const startLoading = ()=> {
  loading = Loading.service({
    lock: true,
    customClass: 'custom-loading',
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });

}
const endLoading = ()=> {
  loading.close();
}
Vue.prototype.$startLoading = startLoading;
Vue.prototype.$endLoading = endLoading;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
