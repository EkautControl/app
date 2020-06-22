import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import { Amplify } from 'aws-amplify';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './services/axios';
import amplifyConfig from './services/amplify';

Vue.config.productionTip = false;

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: amplifyConfig.region,
    userPoolId: amplifyConfig.userPoolId,
    userPoolWebClientId: amplifyConfig.userPoolWebClientId,
  },
});

Vue.prototype.$http = axios;

Vue.use(Buefy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
