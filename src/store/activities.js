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
      const activities = activitiesRequest.data;
      commit('updateActivities', activities);
    },
    async addNewActivity({ commit }, payload) {
      const problemRequest = await axios.post('/activity', {
        type: 0,
        title: payload.title,
        description: payload.description,
        reporter: payload.reporter,
        creationDate: payload.date,
      });
      commit('pushActivity', problemRequest.data);
    },
  },
  mutations: {
    updateActivities(state, activities) {
      state.activities = activities.map((res) => ({
        id: res._id,
        type: Activities[res.type].label,
        title: res.title,
        description: res.description,
        creationDate: new Date(res.creationDate).toLocaleDateString('en-GB'),
        reporter: res.reporter,
      }));
    },
    pushActivity(state, activity) {
      state.activities.unshift({
        id: activity._id,
        type: Activities[activity.type].label,
        title: activity.title,
        description: activity.description,
        creationDate: new Date(activity.creationDate).toLocaleDateString('en-GB'),
        reporter: activity.reporter,
      });
    },
  },
};
