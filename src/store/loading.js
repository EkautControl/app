export default {
  state: () => ({ loading: false }),
  getters: {
    isLoading(state) {
      return state.loading;
    },
  },
  actions: {
    startLoading({ commit }) {
      commit('startLoading');
    },
    stopLoading({ commit }) {
      commit('stopLoading');
    },
  },
  mutations: {
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
  },
};
