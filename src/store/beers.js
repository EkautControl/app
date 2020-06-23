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
    async addNewBeer(state, payload) {
      const beer = await axios.post('/beer', {
        name: payload.beerName,
        averageTime: payload.averageTime,
        brewery: payload.brewery,
        type: payload.beerType,
      });
      state.beers.push(beer.data);
      state.inactiveBeers.push(beer.data);
    },
  },
};
