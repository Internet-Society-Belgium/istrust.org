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
              dark:disabled:bg-opacity-0
              text-secondary
              dark:text-dark-secondary
              disabled:text-opacity-20
              dark:disabled:text-opacity-20
              disabled:pointer-events-none
              dark:disabled:pointer-events-none
            "
            :disabled="currentScreenshot < 1"
            @click="previous"
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
              dark:disabled:bg-opacity-0
              text-secondary
              dark:text-dark-secondary
              disabled:text-opacity-20
              dark:disabled:text-opacity-20
              disabled:pointer-events-none
              dark:disabled:pointer-events-none
            "
            :disabled="currentScreenshot >= screenshots.length - 1"
            @click="next"
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
            <div class="flex truncate">
              <span
                class="text-secondary-light dark:text-dark-secondary-light"
                >{{ screenshots[currentScreenshot].url.protocol }}</span
              ><span
                class="text-secondary-light dark:text-dark-secondary-light"
              >
                //
              </span>
              <span
                class="text-secondary-light dark:text-dark-secondary-light"
                >{{
                  screenshots[currentScreenshot].url.host
                    .split('.')
                    .slice(0, -2)
                    .join('.') + '.'
                }}</span
              ><span class="text-secondary dark:text-dark-secondary">{{
                screenshots[currentScreenshot].url.host
                  .split('.')
                  .slice(-2)
                  .join('.')
              }}</span>
              <span
                class="text-secondary-light dark:text-dark-secondary-light"
                >{{ screenshots[currentScreenshot].url.pathname }}</span
              >
            </div>
          </div>
          <div class="w-9 h-9 p-2 rounded">
            <img
              src="~/assets/images/icon/icon-ok.svg?data"
              alt=""
              class="pointer-events-none"
              :class="
                screenshots[currentScreenshot].score === 'ok' ? '' : 'hidden'
              "
            />
            <img
              src="~/assets/images/icon/icon-neutral.svg?data"
              alt=""
              class="pointer-events-none"
              :class="
                screenshots[currentScreenshot].score === 'neutral'
                  ? ''
                  : 'hidden'
              "
            />
            <img
              src="~/assets/images/icon/icon-warning.svg?data"
              alt=""
              class="pointer-events-none"
              :class="
                screenshots[currentScreenshot].score === 'warning'
                  ? ''
                  : 'hidden'
              "
            />
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <div>
          <div class="flex justify-end mr-3">
            <div
              class="
                mt-1
                w-5
                text-secondary
                dark:text-dark-secondary
                text-opacity-20
                dark:text-opacity-20
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

          <div
            v-for="(screenshot, screenshotIndex) in screenshots"
            :key="screenshotIndex"
          >
            <div
              v-for="(file, theme) in screenshot.lang[$i18n.locale]"
              :key="theme"
            >
              <nuxt-img
                format="webp"
                :src="file"
                alt=""
                class="
                  max-w-full
                  rounded-xl
                  border-4 border-secondary
                  dark:border-dark-secondary
                  border-opacity-20
                  dark:border-opacity-20
                  pointer-events-none
                "
                :class="
                  $colorMode.value === theme &&
                  currentScreenshot === screenshotIndex
                    ? ''
                    : 'hidden'
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@vue/composition-api'

interface Screenshots {
  url: URL
  score: 'ok' | 'neutral' | 'warning'
  lang: {
    [key: string]: {
      light: string
      dark: string
    }
  }
}

const screenshots: Screenshots[] = [
  {
    url: new URL('https://www.istrust.org/'),
    score: 'warning',
    lang: {
      en: {
        light: '/screenshot/en/light/istrust_org.png',
        dark: '/screenshot/en/dark/istrust_org.png',
      },
      fr: {
        light: '/screenshot/fr/light/istrust_org.png',
        dark: '/screenshot/fr/dark/istrust_org.png',
      },
      nl: {
        light: '/screenshot/nl/light/istrust_org.png',
        dark: '/screenshot/nl/dark/istrust_org.png',
      },
    },
  },
  {
    url: new URL('https://www.internetsociety.be/'),
    score: 'ok',
    lang: {
      en: {
        light: '/screenshot/en/light/internetsociety_be.png',
        dark: '/screenshot/en/dark/internetsociety_be.png',
      },
      fr: {
        light: '/screenshot/fr/light/internetsociety_be.png',
        dark: '/screenshot/fr/dark/internetsociety_be.png',
      },
      nl: {
        light: '/screenshot/nl/light/internetsociety_be.png',
        dark: '/screenshot/nl/dark/internetsociety_be.png',
      },
    },
  },
]

export default defineComponent({
  setup() {
    const currentScreenshot = ref(0)
    let overrideWaiting = 0
    const previous = () => {
      overrideWaiting = 3
      currentScreenshot.value -= 1
    }
    const next = () => {
      overrideWaiting = 3
      currentScreenshot.value += 1
    }
    onMounted(() => {
      setInterval(() => {
        if (overrideWaiting === 0) {
          currentScreenshot.value =
            currentScreenshot.value === screenshots.length - 1
              ? 0
              : currentScreenshot.value + 1
        } else {
          overrideWaiting -= 1
        }
      }, 5000)
    })
    return { screenshots, currentScreenshot, previous, next }
  },
})
</script>
