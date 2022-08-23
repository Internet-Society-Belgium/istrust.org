<template>
  <div class="h-screen flex justify-center items-center">
    <h1 class="text-4xl text-center font-semibold">
      {{ $t('get.redirecting') }}
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getBrowser, browsers } from '~/utils/browser'

export default Vue.extend({
  mounted() {
    const uaBrowser = getBrowser(navigator.userAgent)
    const matchedBrowser = browsers.find((b) => b.name === uaBrowser)

    if (matchedBrowser) {
      window.location.href = matchedBrowser.link
    } else {
      window.location.href = '/'
    }
  },
})
</script>
