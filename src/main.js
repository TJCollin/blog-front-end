// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AxiosPlugin from './utils/axios-plugin'
import store from './store'
import baseConfig from './config'
import "@babel/polyfill"
import Es6Promise from 'es6-promise'

Es6Promise.polyfill()

Vue.use(AxiosPlugin)
Vue.config.productionTip = false
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
