<template>
  <header class="sticky top-0 z-50 bg-background dark:bg-dark-background">
    <div
      class="
        max-w-6xl
        mx-auto
        border-b-2 border-secondary-light border-opacity-20
      "
    >
      <div class="flex justify-between p-4">
        <a href="/">
          <img src="/icon/icon.svg" class="w-12 h-12" />
        </a>

        <div class="flex gap-2 text-secondary dark:text-dark-secondary">
          <select v-model="lang" @change="$i18n.setLocale(lang)">
            <option
              v-for="locale in availableLocales"
              :key="locale.code"
              :value="locale.code"
              :disabled="locale.code === $i18n.locale"
            >
              {{ locale.code }}
            </option>
          </select>
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
    availableLocales() {
      return this.$i18n.locales as LocaleObject[]
    },
  },
})
</script>
