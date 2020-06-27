import axios from '@/services/axios';
import Activities from '@/enums/activityType';

export default {
  state: () => ({
    activities: [],
  }),
  getters: {
    getActivities(state) {
      return state.activities;
    },
  },
  actions: {
    async requestActivities({ commit }) {
      const activitiesRequest = await axios.get('/activities');
      const activities = activitiesRequest.data.map((res) => ({
        type: Activities[res.type].label,
        description: res.description,
        creationDate: new Date(res.creationDate).toLocaleDateString('en-GB'),
        reporter: res.reporter,
      }));
      commit('updateActivities', activities);
    },
  },
  mutations: {
    updateActivities(state, activities) {
      state.activities = activities;
    },
  },
};
