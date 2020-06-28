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
    getUserName(state) {
      return state.userData.name;
    },
    getInitials(state) {
      return state.userData.initials;
    },
  },
  actions: {
    async getUser({ commit }, userEmail) {
      const res = await axios.get(`/user/${userEmail}`);
      const userData = res.data;
      const splitName = userData.name.split(' ');
      userData.initials = splitName[0].charAt(0) + splitName[1].charAt(0);
      commit('setUserData', userData);
      localStorage.setItem('user', JSON.stringify(userData));
    },
    setUserInfo({ commit }) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) commit('setUserData', user);
    },
  },
  mutations: {
    setUserData(state, userData) {
      state.userData = userData;
    },
  },
};
