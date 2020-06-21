export default {
  state: () => ({
    activeTanks: [],
    inactiveTanks: [],
  }),
  getters: {
    getActiveTanks(state) {
      return state.activeTanks.filter((tank) => !tank.production.hasProblem);
    },
    getTanksInAlert(state) {
      return state.activeTanks.filter((tank) => tank.production.hasProblem);
    },
    getInactiveTanks(state) {
      return state.inactiveTanks;
    },
  },
  mutations: {
    setActiveTanks(state, tanks) {
      state.activeTanks = tanks;
    },
    setInactiveTanks(state, tanks) {
      state.inactiveTanks = tanks;
    },
  },
};
