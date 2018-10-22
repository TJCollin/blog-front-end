// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AxiosPlugin from './utils/axios-plugin'
// import axios from 'axios'
import Qs from 'qs'

// axios.defaults.baseURL = 'http://localhost:3000/api/'
// axios.defaults.withCredentials = true
// Vue.prototype.$axios = axios
Vue.use(AxiosPlugin)
Vue.prototype.$qs = Qs
Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  },
  update: function (el) {
    // 聚焦元素
    el.focus()
  },
  componentUpdated: function (el) {
    // 聚焦元素
    el.focus()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
