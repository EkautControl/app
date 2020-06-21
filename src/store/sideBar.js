export default {
  state: () => ({ sidebar: true }),
  getters: {
    isOpen(state) {
      return state.sidebar;
    },
  },
  mutations: {
    toggleSideBar(state) {
      state.sidebar = !state.sidebar;
    },
  },
};
