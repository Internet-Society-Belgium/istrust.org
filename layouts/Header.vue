<template>
  <header class="sticky top-0 z-50 bg-background dark:bg-dark-background">
    <div
      class="
        border-b-2 border-secondary-light
        dark:border-dark-secondary-light
        border-opacity-20
        dark:border-opacity-20
      "
    >
      <div class="flex justify-between py-4 px-8">
        <nuxt-link :to="localePath('/')">
          <img
            src="~/assets/images/icon/icon.svg?data"
            alt=""
            class="w-12 h-12 pointer-events-none"
          />
        </nuxt-link>

        <div class="flex items-center text-secondary dark:text-dark-secondary">
          <button
            v-for="locale in locales"
            :key="locale.code"
            type="button"
            :disabled="locale.code === $i18n.locale"
            class="w-10 h-8 rounded"
            :class="
              locale.code === $i18n.locale
                ? 'bg-primary bg-opacity-20 text-primary'
                : 'text-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-primary'
            "
            @click="$i18n.setLocale(locale.code)"
          >
            <span class="uppercase text-sm font-semibold">
              {{ locale.code }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { LocaleObject } from '@nuxtjs/i18n'
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      lang: this.$i18n.locale,
    }
  },
  computed: {
    locales() {
      return this.$i18n.locales as LocaleObject[]
    },
  },
})
</script>
