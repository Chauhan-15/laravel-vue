<template>
    <Layout>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.description }}</td>
                        <td>{{ product.price }}</td>
                        <td>
                            <div class="row gap-3">
                                <router-link :to="`/products/${product.id}/show`" class="p-2 col border btn btn-primary">View</router-link>
                                <router-link :to="`/products/${product.id}/edit`" class="p-2 col border btn btn-success">Edit</router-link>
                                <button @click="deleteProduct(product.id)" type="button" class="p-2 col border btn btn-danger">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Layout>
</template>

<script>
    import Layout from '../Layouts/Layout.vue';
    import axios from 'axios';

    export default {
        components: {
            Layout
        },
        data() {
            return {
                products: []
            }
        },
        async created() {
            try {
                const response = await axios.get('/api/products');
                this.products = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        methods: {
            async deleteProduct(id) {
                try {
                    await axios.delete(`/api/products/${id}`);
                    this.products = this.products.filter(product => product.id !== id);
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }
</script>