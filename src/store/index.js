import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: 0
  },
  mutations: {
    addcart(state){
      this.state.cart++
    }
  },
  actions: {},
  modules: {}
});
