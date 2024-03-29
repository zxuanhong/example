export default {
  path: 'exception',
  name: 'exception',
  component: () => import('@/views/sys/exception/index.vue'),
  meta: {
    locale: 'menu.exception',
    requiresAuth: true,
    icon: 'icon-exclamation-circle',
  },
  children: [
    {
      path: '403',
      name: '403',
      component: () => import('@/views/sys/exception/403/index.vue'),
      meta: {
        locale: 'menu.exception.403',
        requiresAuth: true,
        role: ['admin'],
      },
    },
    {
      path: '404',
      name: '404',
      component: () => import('@/views/sys/exception/404/index.vue'),
      meta: {
        locale: 'menu.exception.404',
        requiresAuth: true,
        role: ['*'],
      },
    },
    {
      path: '500',
      name: '500',
      component: () => import('@/views/sys/exception/500/index.vue'),
      meta: {
        locale: 'menu.exception.500',
        requiresAuth: true,
        role: ['*'],
      },
    },
  ],
};
