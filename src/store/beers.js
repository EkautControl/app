export default {
  state: () => ({
    beers: [],
    activeBeers: [],
    inactiveBeers: [],
  }),
  getters: {
    getBeers(state) {
      return state.beers;
    },
    getActiveBeers(state) {
      return state.activeBeers;
    },
    getInactiveBeers(state) {
      return state.inactiveBeers;
    },
  },
  mutations: {
    setBeers(state, beers) {
      state.beers = beers;
      state.activeBeers = beers.filter((beer) => beer.active);
      state.inactiveBeers = beers.filter((beer) => !beer.active);
    },
  },
};
