export default {
  state: () => ({ sidebar: true }),
  getters: {
    isOpen(state) {
      return state.sidebar;
    },
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('toggleSideBar');
    },
  },
  mutations: {
    toggleSideBar(state) {
      state.sidebar = !state.sidebar;
    },
  },
};
