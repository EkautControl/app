import axios from '@/services/axios';

export default {
  state: () => ({
    activeTanks: [],
    inactiveTanks: [],
  }),
  getters: {
    getActiveTanks(state) {
      return state.activeTanks
        .filter((tank) => !tank.production.hasProblem)
        .sort((a, b) => a.tank - b.tank);
    },
    getTanksInAlert(state) {
      return state.activeTanks
        .filter((tank) => tank.production.hasProblem)
        .sort((a, b) => a.tank - b.tank);
    },
    getInactiveTanks(state) {
      return state.inactiveTanks.sort((a, b) => a.tank - b.tank);
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
    async addProductionToTank(state, payload) {
      const newProd = await axios.post('/production', {
        tank: payload.tank,
        beerId: payload.beerId,
        batch: payload.batch,
        phase: payload.phase,
        date: payload.date,
      });
      state.activeTanks.push(newProd.data);
    },
  },
};
