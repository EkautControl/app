import Tanks from '../views/Tanks/Tanks.vue';
import Activities from '../views/Activities/Activities.vue';
import Beers from '../views/Beers/Beers.vue';
import TankDetails from '../views/TankDetails/TankDetails.vue';
import Layout from '../views/Layout.vue';
import Login from '../views/Login/Login.vue';
import BeerDetails from '../views/BeerDetails/BeerDetails.vue';

const routes = [
  {
    path: '/login',
    component: Login,
    name: 'Login',
    meta: { title: 'Login' },
  },
  {
    path: '/app',
    redirect: '/app/tanques',
    component: Layout,
    name: 'Main',
    children: [
      {
        path: '/app/tanques',
        name: 'Tanks',
        component: Tanks,
        meta: { title: 'Controle dos Tanques' },
      },
      {
        path: 'app/tanques/:id',
        name: 'TankDetails',
        component: TankDetails,
        meta: { title: 'Detalhes da Produção' },
      },
      {
        path: 'app/atividades',
        name: 'Activities',
        component: Activities,
        meta: { title: 'Histórico de Atividades' },
      },
      {
        path: 'app/cervejas',
        name: 'Beers',
        component: Beers,
        meta: { title: 'Informações das Cervejas' },
      },
      {
        path: 'app/cervejas/:name',
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
  {
    path: '/',
    redirect: '/login',
  },
];

export default routes;
