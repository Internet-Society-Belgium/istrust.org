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
      <h1 class="text-4xl text-center font-semibold">Privacy Policy</h1>

      <h2 class="text-2xl text-center font-semibold">
        Which personal data do we process and for which purpose
      </h2>

      <p>
        As we want to protect your privacy, <b>no</b> personal data is processed
        nor stored on this website. No cookie is used.
      </p>

      <p>
        In case of question related to privacy or data protection, please
        contact
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
    }
  },
})
</script>
