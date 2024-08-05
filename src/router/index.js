// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '@/views/About.vue';
import Cart from '@/views/Cart.vue';
import Login from '@/views/Login.vue';
import Favorite from '@/views/Favorite.vue';
import TestComponent from '@/components/testComponent.vue';
import containerComponent from '@/components/containerComponent.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/favorite',
        name: 'Favorite',
        component: Favorite
    },
    {
        path: '/duktest',
        name: 'duktest',
        component: TestComponent
    },
    {
        path: '/containerTest',
        name: 'containerTest',
        component: containerComponent
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
