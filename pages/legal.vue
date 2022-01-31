<template>
  <div class="p-20 flex justify-center">
    <div
      class="max-w-xl flex flex-col gap-8 text-secondary dark:text-dark-secondary"
    >
      <h1 class="text-4xl text-center font-semibold">
        {{ $t('legal.title') }}
      </h1>
      <h2 class="text-2xl text-center font-semibold">
        {{ $t('legal.who.title') }}
      </h2>
      <p>
        <a href="https://www.istrust.org" class="underline text-primary"
          >www.istrust.org</a
        >
        {{ $t('legal.who.organisation') }}
      </p>

      <div class="flex flex-col gap-2">
        <p>{{ $t('legal.who.postal') }}</p>
        <ol>
          <li>Internet Society Belgium</li>
          <li>Notelaarstraat 285 | Rue du Noyer 285</li>
          <li>1000 Brussels, Belgium</li>
        </ol>
      </div>

      <p>RPR/RPM Brussels: BE 0728.764.958</p>

      <p>
        {{ $t('legal.who.website') }}
        <a href="https://www.internetsociety.be" class="underline text-primary"
          >www.internetsociety.be</a
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: `isTrust - ${this.$t('legal.title')}`,
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('legal.description')}`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.$t('legal.description')}`,
        },
      ],
    }
  },
})
</script>
