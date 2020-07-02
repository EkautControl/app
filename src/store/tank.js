import axios from '@/services/axios';

export default {
  state: {
    details: {},
    isLoaded: false,
    temperatures: [],
  },
  getters: {
    getProduction(state) {
      return state.details.production;
    },
    getTemperatures(state) {
      return state.temperatures;
    },
  },
  mutations: {
    success(state, payload) {
      state.details = payload.tank;
      state.isLoaded = true;
    },
    isLoading(state, payload) {
      state.isLoaded = payload.isLoaded;
    },
    updateProductions(state, data) {
      state.details = data;
    },
    newTemperatures(state, data) {
      state.temperatures = data;
    },
  },
  actions: {
    getTemperatures: async ({ commit }, prodId) => {
      const res = await axios.get(`/temperature/${prodId}`);
      console.log(res.data);
      commit('newTemperatures', res.data);
    },
    isLoaded: async ({ commit }, isLoaded) => {
      commit('isLoading', { isLoaded });
    },
    requestTankDetails: async ({ dispatch, commit }, tankId) => {
      const res = await axios.get(`/production?tank=${tankId}`);
      const [tank] = res.data;
      commit('success', { tank });
      dispatch('getTemperatures', res.data[0].production._id);
    },
    updateTankPhase: async ({ dispatch }, { productionId, nextPhase, author }) => {
      const res = await axios.put(`/production/phase/${productionId}`, {
        phase: nextPhase,
        reporter: author,
      });

      if (res.status === 200) {
        dispatch('requestTankDetails', res.data.tank);
      }
    },
    addRegistry: async ({ dispatch }, data) => {
      const finalData = [];

      if (data.volume !== '') finalData.push({ type: 0, value: data.volume });
      if (data.ph !== '') finalData.push({ type: 3, value: data.ph });
      if (data.weight !== '') finalData.push({ type: 4, value: data.weight });
      if (data.extract !== '') finalData.push({ type: 5, value: data.extract });
      if (data.pressure !== '') finalData.push({ type: 1, value: data.pressure });

      const res = await axios.post(`/production/data/${data.productionId}`, {
        data: finalData,
        analysis: data.observation,
        phase: data.phase,
        reporter: data.reporter,
        creationDate: new Date().toISOString(),
      });

      if (res.status === 200) {
        dispatch('requestTankDetails', res.data.tank);
      }
    },
  },
  namespaced: true,
};
