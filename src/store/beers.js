import axios from '@/services/axios';

export default {
  state: () => ({
    beers: [],
  }),
  getters: {
    getBeers(state) {
      return state.beers;
    },
    getActiveBeers(state) {
      return state.beers.filter((beer) => beer.active);
    },
    getInactiveBeers(state) {
      return state.beers.filter((beer) => !beer.active);
    },
  },
  actions: {
    async requestBeers({ commit }) {
      const beersRequest = await axios.get('/beers');
      const beers = beersRequest.data;
      commit('updateBeers', beers);
    },
    async addNewBeer({ commit }, payload) {
      const beer = await axios.post('/beer', {
        name: payload.beerName,
        averageTime: payload.averageTime,
        brewery: payload.brewery,
        type: payload.beerType,
        reporter: payload.reporter,
      });
      commit('addBeer', beer.data);
    },
  },
  mutations: {
    updateBeers(state, beers) {
      state.beers = beers;
    },
    addBeer(state, beer) {
      state.beers.push(beer);
    },
  },
};
