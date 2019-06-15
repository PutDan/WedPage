import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/copyright',
            name: 'copyright',
            component: () => import(/* webpackChunkName: "copyright" */ './views/Copyright.vue'),
        },
        {
            path: '/photos',
            name: 'photos',
            component: () => import(/* webpackChunkName: "photos" */ './views/Photos.vue'),
        },
    ],
});
