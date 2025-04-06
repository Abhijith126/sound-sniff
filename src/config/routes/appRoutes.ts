import { lazy } from 'react';

const dataRoutes = [
  {
    key: 'home',
    path: '/',
    component: lazy(() => import('@/views/home')),
  },
  {
    key: 'release',
    path: '/release/:id',
    component: lazy(() => import('@/views/release')),
  },
];

export default dataRoutes;
