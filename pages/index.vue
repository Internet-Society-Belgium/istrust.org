<template>
  <div class="h-screen flex items-center justify-center">
    <div>
      <div class="flex flex-col items-center gap-4 text-center">
        <nuxt-img format="webp" src="/icon/icon.png" width="200" height="200" />
        <h1
          class="text-secondary dark:text-dark-secondary text-3xl font-semibold"
        >
          isTrust
        </h1>
        <h2 class="text-secondary dark:text-dark-secondary">
          Verify the trustability of any website
        </h2>
      </div>

      <div class="flex justify-center gap-8 mt-20">
        <a
          href="https://addons.mozilla.org/firefox/addon/istrust/?utm_source=istrust.org"
        >
          <nuxt-img format="webp" src="/images/firefox.png" height="60" />
        </a>
      </div>
    </div>
  </div>
</template>
