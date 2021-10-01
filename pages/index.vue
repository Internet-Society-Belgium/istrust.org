<template>
  <div class="h-screen flex items-center justify-center">
    <div class="flex flex-col items-center gap-4 text-center">
      <nuxt-picture src="/icon.png" width="200" height="200" />
      <h1
        class="text-secondary dark:text-dark-secondary text-3xl font-semibold"
      >
        isTrust
      </h1>
      <h2 class="text-secondary dark:text-dark-secondary">
        Verify the trustability of any website
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({})
</script>
