import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'view-design';

import util from '@/libs/util'

import Setting from '@/setting';

import store from '@/store/index';

/**
 * 判断数组中是否存在另个一数组的值
 */
import { includeArray } from '@/libs/system';

// 路由数据
import routes from './routes';

Vue.use(VueRouter);

// 导出路由 在 main.js 里使用
const router = new VueRouter({
    routes,
    mode: Setting.routerMode,
    base: Setting.routerBase
});

/**
 * 路由拦截
 * 权限验证
 */

router.beforeEach(async (to, from, next) => {
    if (Setting.showProgressBar) iView.LoadingBar.start();
    // 判断是否需要登录才可以进入
    if (to.matched.some(_ => _.meta.auth)) {
        // 获取用户权限，这里不能直接从 Vuex 的 user.info 读，因为数据还未准备好
        const userInfo = await store.dispatch('admin/db/get', {
            dbName: 'sys',
            path: 'user.info',
            defaultValue: {},
            user: true
        }, { root: true });
        const access = userInfo.access;
        const isPermission = includeArray(to.meta.auth, access);
        if (isPermission) {
            next();
        } else {
            next({
                name: '403'
            });
        }
    } else {
        // 不需要身份校验 直接通过
        next();
    }
});

router.afterEach(to => {
    if (Setting.showProgressBar) iView.LoadingBar.finish();
    // 多页控制 打开新的页面
    if (!('meta' in to) || (to.meta && !('tabs' in to.meta)) || (to.meta && to.meta.tabs)) {
        store.dispatch('admin/page/open', to);
    }
    // 更改标题
    util.title({
        title: to.meta.title
    });
    // 返回页面顶端
    window.scrollTo(0, 0);
});

export default router;
