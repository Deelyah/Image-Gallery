import { createStore } from "vuex";
import getters from "./Getters.js";
import mutations from "./Mutations.js";
import actions from "./Actions.js";

const Store = createStore({
  state() {
    return {
      DogsList: [],
      filteredDogsList: [],
    };
  },

  getters,
  mutations,
  actions,
});

export default Store;
