const routes = [
    {
        path: '/',
        component: () => import('../Products/Index.vue'),
        name: 'products',
    },
    {
        path: '/products/create',
        component: () => import('../Components/Products/Form.vue'),
        name: 'products.create',
    },
    {
        path: '/products/:id/show',
        component: () => import('../Products/Show.vue'),
        name: 'products.show',
    },
    {
        path: '/products/:id/edit',
        component: () => import('../Components/Products/Form.vue'),
        name: 'products.edit',
    }
]
export default routes;