import Tanks from '../views/Tanks/Tanks.vue';
import Activities from '../views/Activities/Activities.vue';
import Beers from '../views/Beers/Beers.vue';
import TankDetails from '../views/TankDetails/TankDetails.vue';
import Layout from '../views/Layout.vue';
import Login from '../views/Login/Login.vue';
import BeerDetails from '../views/BeerDetails/BeerDetails.vue';

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
        path: 'tanques/:id',
        name: 'TankDetails',
        component: TankDetails,
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
        path: 'cervejas/:name',
        name: 'Beer',
        component: BeerDetails,
        meta: { title: 'Detalhes da Cerveja' },
        beforeEnter(to, from, next) {
          if (from.name === 'Beers') next();
          else next({ name: 'Beers' });
        },
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];

export default routes;
