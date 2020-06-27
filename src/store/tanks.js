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
  actions: {
    async requestActiveTanks({ commit }) {
      const tanks = await axios.get('/activeTanks');
      commit('updateActiveTanks', tanks.data);
    },
    async requestInactiveTanks({ commit }) {
      const tanks = await axios.get('/inactiveTanks');
      commit('updateInactiveTanks', tanks.data);
    },
    async addProductionToTank({ commit }, payload) {
      const newProd = await axios.post('/production', {
        tank: payload.tank,
        beerId: payload.beerId,
        batch: payload.batch,
        phase: payload.phase,
        date: payload.date,
      });
      commit('addActiveTank', newProd.data);
    },
  },
  mutations: {
    updateActiveTanks(state, tank) {
      state.activeTanks = tank;
    },
    updateInactiveTanks(state, tank) {
      state.inactiveTanks = tank;
    },
    addActiveTank(state, tank) {
      state.activeTanks.push(tank);
    },
  },
};
