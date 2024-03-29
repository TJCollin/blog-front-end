import Vue from "vue";
import Vuex from "vuex";
import footer from "./modules/footer";
import keywords from "./modules/keywords";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    footer,
    keywords,
  },
});
