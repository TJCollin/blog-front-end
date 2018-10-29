import Vue from 'vue'
import Vuex from 'vuex'
import route from './modules/route'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    route
  }
})
