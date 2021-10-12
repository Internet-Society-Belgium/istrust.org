<template>
  <div class="flex flex-col justify-center items-center">
    <div>
      <div class="flex justify-end">
        <div
          class="
            p-1
            flex
            justify-center
            items-center
            gap-1
            bg-container
            dark:bg-dark-container
            rounded-md
          "
        >
          <button
            type="button"
            aria-label="Previous screenshot"
            class="
              w-9
              h-9
              flex
              justify-center
              items-center
              rounded
              hover:bg-secondary
              dark:hover:bg-dark-secondary
              hover:bg-opacity-10
              dark:hover:bg-opacity-10
              disabled:bg-opacity-0
              text-secondary
              dark:text-dark-secondary
              disabled:text-opacity-20
              dark:disabled:text-opacity-20
              disabled:pointer-events-none
            "
            :disabled="currentScreenshot < 1"
            @click="currentScreenshot -= 1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <path
                d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            class="
              w-9
              h-9
              flex
              justify-center
              items-center
              rounded
              hover:bg-secondary
              dark:hover:bg-dark-secondary
              hover:bg-opacity-10
              dark:hover:bg-opacity-10
              disabled:bg-opacity-0
              text-secondary
              dark:text-dark-secondary
              disabled:text-opacity-20
              dark:disabled:text-opacity-20
              disabled:pointer-events-none
            "
            :disabled="currentScreenshot >= maxScreenshots - 1"
            @click="currentScreenshot += 1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <path
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
              />
            </svg>
          </button>
          <div
            class="
              h-9
              w-60
              sm:w-80
              py-1
              px-3
              flex
              items-center
              rounded
              bg-secondary-container
              dark:bg-secondary-dark-container
            "
          >
            <div
              v-if="
                screenshot.url.protocol &&
                screenshot.url.host &&
                screenshot.url.pathname
              "
              class="flex truncate"
            >
              <span
                class="text-secondary-light dark:text-dark-secondary-light"
                >{{ screenshot.url.protocol }}</span
              ><span
                class="text-secondary-light dark:text-dark-secondary-light"
              >
                //
              </span>
              <span
                class="text-secondary-light dark:text-dark-secondary-light"
                >{{
                  screenshot.url.host.split('.').slice(0, -2).join('.') + '.'
                }}</span
              ><span class="text-secondary dark:text-dark-secondary">{{
                screenshot.url.host.split('.').slice(-2).join('.')
              }}</span>
              <span
                class="text-secondary-light dark:text-dark-secondary-light"
                >{{ screenshot.url.pathname }}</span
              >
            </div>
          </div>
          <div class="w-9 h-9 p-2 rounded">
            <img src="/icon/icon.svg" alt="" class="pointer-events-none" />
          </div>
        </div>
      </div>
      <div v-if="screenshot.image !== ''" class="flex justify-end">
        <div>
          <div class="flex justify-end mr-3">
            <div
              class="
                mt-1
                w-5
                text-secondary
                dark:text-dark-secondary
                text-opacity-20
              "
            >
              <svg viewBox="0 0 255 127.5">
                <polygon
                  class="fill-current"
                  points="0,127.5 127.5,0 255,127.5"
                />
              </svg>
            </div>
          </div>
          <nuxt-img
            format="webp"
            alt=""
            class="
              max-w-full
              rounded-xl
              border-4 border-secondary
              dark:border-dark-secondary
              border-opacity-20
              pointer-events-none
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Screenshots {
  url: string
  lang: {
    [key: string]: {
      light: string
      dark: string
    }
  }
}
const screenshots: Screenshots[] = [
  {
    url: 'https://www.istrust.org/',
    lang: {
      en: {
        light: '/screenshot/istrust_org.png',
        dark: '/screenshot/istrust_org.png',
      },
      fr: {
        light: '/screenshot/istrust_org.png',
        dark: '/screenshot/istrust_org.png',
      },
      nl: {
        light: '/screenshot/istrust_org.png',
        dark: '/screenshot/istrust_org.png',
      },
    },
  },
  {
    url: 'https://www.internetsociety.be/',
    lang: {
      en: {
        light: '/screenshot/internetsociety_be.png',
        dark: '/screenshot/internetsociety_be.png',
      },
      fr: {
        light: '/screenshot/internetsociety_be.png',
        dark: '/screenshot/internetsociety_be.png',
      },
      nl: {
        light: '/screenshot/internetsociety_be.png',
        dark: '/screenshot/internetsociety_be.png',
      },
    },
  },
]

export default Vue.extend({
  data() {
    return {
      dark: false,
      maxScreenshots: screenshots.length,
      currentScreenshot: 0,
      screenshot: { url: {} as URL, image: '' },
    }
  },
  watch: {
    currentScreenshot: {
      immediate: true,
      handler() {
        this.screenshot = {
          url: new URL(screenshots[this.currentScreenshot].url),
          image: this.dark
            ? screenshots[this.currentScreenshot].lang[
                this.$i18n.locale || 'en'
              ].dark
            : screenshots[this.currentScreenshot].lang[
                this.$i18n.locale || 'en'
              ].light,
        }
      },
    },
  },
  mounted() {
    this.dark = window.matchMedia('(prefers-color-scheme: dark)').matches
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        this.dark = e.matches
      })
  },
})
</script>
