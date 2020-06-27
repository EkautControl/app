import Vue from 'vue';
import Vuex from 'vuex';
import moduleSideBar from './sideBar';
import moduleLoading from './loading';
import moduleTanks from './tanks';
import moduleUser from './user';
import moduleBeers from './beers';
import moduleActivities from './activities';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sidebar: moduleSideBar,
    loading: moduleLoading,
    tanks: moduleTanks,
    user: moduleUser,
    beers: moduleBeers,
    activities: moduleActivities,
  },
});
