import axios from '@/services/axios';

export default {
  state: () => ({
    userData: {
      email: '',
      name: '',
      initials: '',
      notificationType: '',
      phone: '',
    },
  }),
  getters: {
    getUserData(state) {
      return state.userData;
    },
    getInitials(state) {
      return state.userData.initials;
    },
  },
  mutations: {
    setUserData(state, userData) {
      state.userData = userData;
    },
  },
  actions: {
    async getUser({ commit }, userEmail) {
      const res = await axios.get(`/user/${userEmail}`);
      const userData = res.data;
      const splitName = userData.name.split(' ');
      userData.initials = splitName[0].charAt(0) + splitName[1].charAt(0);
      commit('setUserData', userData);
    },
  },
};
