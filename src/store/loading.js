export default {
  state: () => ({ loading: true }),
  getters: {
    isLoading(state) {
      return state.loading;
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
