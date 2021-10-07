<template>
  <div :class="dark ? 'dark' : ''">
    <div class="bg-background dark:bg-dark-background select-none">
      <div class="max-w-6xl mx-auto">
        <Header />
        <main class="min-h-screen">
          <Nuxt />
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import Footer from './Footer.vue'
import Header from './Header.vue'

export default defineComponent({
  components: { Header, Footer },
  setup() {
    const dark = ref(false)

    onMounted(() => {
      dark.value = window.matchMedia('(prefers-color-scheme: dark)').matches

      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => {
          dark.value = e.matches
        })
    })

    return { dark }
  },
})
</script>
