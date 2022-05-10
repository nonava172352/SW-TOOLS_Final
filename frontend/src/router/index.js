import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'vaccinehome',
        component: () => import('../views/Home-page.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register-page.vue')
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: () => import('../views/Confirm-page.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

// import { createRouter, createWebHistory } from "vue-router";


// const routes = [
//     {
//         path: '/',
//         name: 'vaccinehome',
//         component: () => import('../views/Home-page.vue')
//     },
//     {
//         path: '/register',
//         name: 'register',
//         component: () => import('../views/Register-page.vue')
//     },
//     {
//         path: '/confirm',
//         name: 'confirm',
//         component: () => import('../views/Confirm-page.vue')
//     }
// ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

// export default router;
