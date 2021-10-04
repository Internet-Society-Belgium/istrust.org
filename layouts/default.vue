<template>
  <div class="bg-background dark:bg-dark-background min-h-screen">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Footer from './Footer.vue'
import Header from './Header.vue'

export default defineComponent({
  components: { Header, Footer },
})
</script>
