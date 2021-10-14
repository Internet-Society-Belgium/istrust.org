<template>
  <div class="p-20 flex justify-center">
    <div
      class="
        max-w-xl
        flex flex-col
        gap-8
        text-secondary
        dark:text-dark-secondary
      "
    >
      <h1 class="text-4xl text-center font-semibold">
        {{ $t('privacy.title') }}
      </h1>

      <h2 class="text-2xl text-center font-semibold">
        {{ $t('privacy.which.title') }}
      </h2>

      <p>
        {{ $t('privacy.which.privacy') }}
      </p>

      <p>
        {{ $t('privacy.which.contact') }}
        <a href="mailto:dpo@isoc.be" class="underline text-primary"
          >dpo@isoc.be</a
        >.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('privacy.description')}`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.$t('privacy.description')}`,
        },
      ],
    }
  },
})
</script>
