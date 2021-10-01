<template>
  <div
    class="
      flex flex-col
      justify-between
      min-h-screen
      bg-background
      dark:bg-dark-background
    "
  >
    <Nuxt />
    <div class="bottom-0">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Footer from './Footer.vue'

export default defineComponent({
  components: { Footer },
})
</script>
