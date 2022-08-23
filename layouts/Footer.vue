<template>
  <footer class="pt-8 pb-4 flex flex-col items-center gap-6">
    <div
      class="flex justify-center flex-wrap gap-4 text-secondary dark:text-dark-secondary"
    >
      <nuxt-link :to="localePath('legal')">{{ $t('legal.title') }}</nuxt-link>
      <nuxt-link :to="localePath('privacy')">{{
        $t('privacy.title')
      }}</nuxt-link>
    </div>
    <p
      class="flex flex-col gap-2 justify-center text-center text-secondary-light dark:text-dark-secondary-light"
    >
      <span
        >{{
          new Date().getFullYear() === 2021
            ? `${new Date().getFullYear()}`
            : `2021 - ${new Date().getFullYear()}`
        }}{{ ` © `
        }}<a href="https://internetsociety.be" target="_blank" class="underline"
          >Internet Society Chapter Belgium vzw/asbl</a
        ></span
      >

      <span>
        {{ $t('footer.made_by') }}
        <a href="https://etoo.me" target="_blank" class="underline">etoome</a>
      </span>
    </p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({})
</script>
