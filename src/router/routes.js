import Tanks from '../views/Tanks/Tanks.vue';
import Activities from '../views/Activities/Activities.vue';
import Beers from '../views/Beers/Beers.vue';
import Layout from '../views/Layout.vue';
import Login from '../views/Login/Login.vue';
import Config from '../views/Configuration/Config.vue';

const routes = [
  {
    path: '/entrar',
    component: Login,
    name: 'Login',
    meta: { title: 'Login' },
  },
  {
    path: '/',
    component: Layout,
    redirect: '/tanques',
    name: 'Main',
    meta: { requiresAuth: true },
    children: [
      {
        path: 'tanques',
        name: 'Tanks',
        component: Tanks,
        meta: { title: 'Controle dos Tanques' },
      },
      {
        path: 'atividades',
        name: 'Activities',
        component: Activities,
        meta: { title: 'Histórico de Atividades' },
      },
      {
        path: 'cervejas',
        name: 'Beers',
        component: Beers,
        meta: { title: 'Informações das Cervejas' },
      },
      {
        path: 'configuracao',
        name: 'Configuration',
        component: Config,
        meta: { title: 'Configurações' },
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];

export default routes;
