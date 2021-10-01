<template>
    <div class="bg-background">
        <Hero />
        <Footer />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import Hero from '../sections/Hero.vue'
    import Footer from './Footer.vue'

    export default defineComponent({
        name: 'App',
        components: { Hero, Footer },
    })
</script>
