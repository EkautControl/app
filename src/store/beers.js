import axios from '@/services/axios';

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
    async requestBeers(state) {
      const beersRequest = await axios.get('/beers');
      const beers = beersRequest.data;
      state.beers = beers;
      state.activeBeers = beers.filter((beer) => beer.active);
      state.inactiveBeers = beers.filter((beer) => !beer.active);
    },
  },
};
