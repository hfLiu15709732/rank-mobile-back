import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const StorageRouter: AppRouteRecordRaw = {
  path: '/storage',
  name: 'storageRouter',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.storageRoute',
    requiresAuth: true,
    icon: 'icon-list',
    order: 2,
  },
  children: [
    {
      path: 'ssd', // The midline path complies with SEO specifications
      name: 'ssdRouter',
      component: () => import('@/views/storage/ssd/index.vue'),
      meta: {
        locale: 'menu.storageRouteSSD',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'disk',
      name: 'diskRouter',
      component: () => import('@/views/storage/disk/index.vue'),
      meta: {
        locale: 'menu.storageRouteDisk',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default StorageRouter;
