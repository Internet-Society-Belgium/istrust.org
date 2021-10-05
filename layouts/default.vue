<template>
  <div class="bg-background dark:bg-dark-background">
    <Header />
    <main class="min-h-screen">
      <Nuxt />
    </main>
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
