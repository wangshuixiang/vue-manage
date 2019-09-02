import Vue from 'vue';
import Router from "vue-router";
import store from '@/store';

import home from "@/views/home.vue";
import login from "@/views/login.vue";
import index from "@/views/design/index.vue"

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            children: [
                {
                    component: index,
                    meta: {},
                    name: "homeIndex",
                    path: "home/index",
                }
            ]
        },
        {
            path: "/login",
            name: "login",
            meta: {},
            component: login,
        }
    ]
});


router.beforeEach((to, from, next) => {
    next();
});

router.afterEach((to, from) => {
    //修改store
});

export default router;
