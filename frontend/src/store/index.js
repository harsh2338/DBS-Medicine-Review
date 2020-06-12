import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth.module";
import search from "./search.module";
import drug from "./drug.module";
import disease from "./disease.module";
import user from "./user.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    search,
    drug,
    disease,
    user,
  }
});
