import Vue from 'vue';
import Vuex from 'vuex';
import moduleSideBar from './sideBar';
import moduleTanks from './tanks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sidebar: moduleSideBar,
    tanks: moduleTanks,
  },
});
