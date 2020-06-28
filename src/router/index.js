import Vue from 'vue';
import VueRouter from 'vue-router';
import { Auth } from 'aws-amplify';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeResolve(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth) {
    try {
      await Auth.currentAuthenticatedUser();
      next();
    } catch (e) {
      next({ name: 'Login' });
    }
  } else {
    next();
  }
});

export default router;
