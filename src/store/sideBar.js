export default {
  state: () => ({ sidebar: true }),
  getters: {
    isOpen(state) {
      return state.sidebar;
    },
  },
  mutations: {
    TOGGLE_SIDE_BAR(state) {
      state.sidebar = !state.sidebar;
    },
  },
};
