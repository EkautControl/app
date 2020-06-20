import Tanks from '../views/Tanks.vue';
import Activities from '../views/Activities.vue';
import Beers from '../views/Beers.vue';
import Layout from '../views/Layout.vue';

const routes = [
  { path: '/entrar', name: 'Login', meta: { title: 'Login' } },
  {
    path: '/',
    component: Layout,
    name: 'Main',
    children: [
      {
        path: 'tanques',
        name: 'Tanks',
        component: Tanks,
        meta: { title: 'Controle dos tanques' },
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
];

export default routes;
