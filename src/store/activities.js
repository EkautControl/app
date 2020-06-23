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
  mutations: {
    async requestActivities(state) {
      const activitiesRequest = await axios.get('/activities');
      state.activities = activitiesRequest.data.map((res) => ({
        type: Activities[res.type].label,
        description: res.description,
        creationDate: new Date(res.creationDate).toLocaleDateString('en-GB'),
        reporter: res.reporter,
      }));
    },
  },
};
