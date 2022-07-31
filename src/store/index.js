import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    apis: [],
    filteredRes: [],
  },
  getters: {
    apis(state) {
      return state.apis;
    },
    filteredRes(state) {
      return state.filteredRes;
    },
  },
  mutations: {
    SET_APIS(state, apis) {
      state.apis = apis;
    },
    SET_FILTERED(state, filteredRes) {
      state.filteredRes = filteredRes;
    },
  },
  actions: {
    async fetchApis(context) {
      const result = await axios.get(`https://api.publicapis.org/entries`);
      context.commit("SET_APIS", result.data.entries);
    },
    searchApi(context, { value }) {
      const res = this.state.apis;

      for (let x = 0; x < res.length; x++) {
        console.log(res[x]);
      }

      context.commit("SET_FILTERED", res);
      console.log(value);
    },
  },
  modules: {},
});
