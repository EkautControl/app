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
    setActivities(state, activities) {
      state.activities = activities.map((res) => ({
        type: Activities[res.type].label,
        description: res.description,
        creationDate: new Date(res.creationDate).toLocaleDateString('en-GB'),
        reporter: res.reporter,
      }));
    },
  },
};
