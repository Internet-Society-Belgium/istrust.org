<template>
  <footer class="pt-8 pb-4 flex flex-col items-center gap-4">
    <div class="flex gap-4 text-secondary dark:text-dark-secondary">
      <nuxt-link :to="localePath('legal')">{{ $t('legal') }}</nuxt-link>
      <nuxt-link :to="localePath('privacy')">{{ $t('privacy') }}</nuxt-link>
    </div>
    <p class="text-center text-secondary-light dark:text-dark-secondary-light">
      2021 © Internet Society Chapter Belgium.
      {{ $t('footer.made_by') }}
      <a href="https://progiciel.be" target="_blank" class="underline"
        >Progiciel</a
      >
    </p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({})
</script>
