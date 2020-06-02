import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth.module";
import search from "./search.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    search,
  }
});
