import Tanks from '../views/Tanks/Tanks.vue';
import Activities from '../views/Activities/Activities.vue';
import Beers from '../views/Beers/Beers.vue';
import TankDetails from '../views/TankDetails/TankDetails.vue';
import Layout from '../views/Layout.vue';

const routes = [
  { path: '/entrar', name: 'Login', meta: { title: 'Login' } },
  {
    path: '/',
    component: Layout,
    redirect: '/tanques',
    name: 'Main',
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
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];

export default routes;
