<template>
    <div>
        <Header></Header>
        <main>
            <div class="card">
                <div class="card-body">
                    <div class="container-fluid">
                        <slot />
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
    components: {
        Header,
    },
}
</script>
