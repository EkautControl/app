import axios from '@/services/axios';

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
    async requestActiveTanks(state) {
      const tanks = await axios.get('/activeTanks');
      state.activeTanks = tanks.data;
    },
    async requestInactiveTanks(state) {
      const tanks = await axios.get('/inactiveTanks');
      state.inactiveTanks = tanks.data;
    },
  },
};
