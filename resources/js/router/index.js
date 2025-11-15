import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path : '/add-new',
        name : 'Add',
        component : () => import('../components/Add.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
