import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'dashboard-';

export default {
    path: '/dashboard',
    name: 'dashboard',
    redirect: {
        name: `${pre}console`
    },
    meta,
    component: BasicLayout,
    children: [
        {
            path: 'console',
            name: `${pre}console`,
            meta: {
                ...meta,
                title: '主控台',
                closable: false,
                auth: ['ADMIN'],
            },

            component: () => import(/* webpackChunkName: 'dashboard' */ '@/pages/dashboard/console')
        },
        {
            path: 'monitor',
            name: `${pre}monitor`,
            meta: {
                ...meta,
                title: '监控页',
                auth: ['USER'],
            },

            component: () => import(/* webpackChunkName: 'dashboard' */'@/pages/dashboard/monitor')
        },
        {
            path: 'workplace',
            name: `${pre}workplace`,
            meta: {
                ...meta,
                title: '工作台',
                auth: ['OP'],
            },

            component: () => import(/* webpackChunkName: 'dashboard' */'@/pages/dashboard/workplace')
        }
    ]
};
