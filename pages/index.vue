<template>
  <div>
    <section class="min-h-screen py-10 grid gap-4 grid-cols-1 md:grid-cols-2">
      <div class="flex items-center m-6 justify-center">
        <div class="flex flex-col gap-4">
          <div v-if="latestVersion" class="flex gap-4 my-3">
            <span
              class="
                uppercase
                bg-primary bg-opacity-20
                text-primary text-xs
                font-semibold
                px-2
                py-1
                rounded-md
              "
              >{{ $t('index.new_release') }}
            </span>
            <a
              href="https://github.com/Internet-Society-Belgium/isTrust/blob/main/CHANGELOG.md"
              class="italic text-secondary dark:text-dark-secondary"
              >v{{ latestVersion.name }} -
              {{
                $tc(
                  'index.days_ago',
                  latestVersion.days == 0 ? 0 : latestVersion.days == 1 ? 1 : 2,
                  {
                    days: latestVersion.days,
                  }
                )
              }}
            </a>
          </div>
          <h1
            class="
              text-secondary
              dark:text-dark-secondary
              text-5xl
              font-semibold
            "
          >
            isTrust
          </h1>
          <h2 class="text-secondary dark:text-dark-secondary text-2xl">
            {{ $t('index.description') }}
          </h2>
          <div class="my-9">
            <a
              v-if="browser"
              class="
                inline-flex
                items-center
                gap-3
                py-4
                px-6
                bg-primary
                text-dark-secondary
                shadow
                rounded-md
                font-medium
              "
              :href="browser.link"
            >
              <img :src="browser.icon" class="h-8 w-8" />
              {{ $t('index.get_the_addon') }}
            </a>
            <button
              v-else
              class="
                gap-3
                py-4
                px-6
                bg-primary
                text-dark-secondary
                shadow
                rounded-md
                font-medium
              "
              @click="scrollTo('download')"
            >
              {{ $t('index.get_the_addon') }}
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col m-6 justify-center items-center">
        <div
          class="
            p-1
            flex
            justify-center
            gap-1
            bg-container
            dark:bg-dark-container
            rounded-md
          "
        >
          <button
            v-for="sc in screenshots.images.length"
            :key="sc - 1"
            class="
              w-9
              h-9
              p-2
              rounded-md
              hover:bg-secondary
              hover:dark:bg-dark-secondary
              hover:bg-opacity-20
            "
            :class="
              sc - 1 === screenshots.current.value
                ? 'bg-secondary dark:bg-dark-secondary bg-opacity-20 dark:bg-opacity-20'
                : ''
            "
            @click="screenshots.current.value = sc - 1"
          >
            <img src="/icon/icon.svg" />
          </button>
        </div>
        <div
          class="flex w-full justify-center"
          :style="`transform: translateX(${
            (screenshots.images.length % 2 === 0 ? 20 : 0) +
            -(40 * Math.floor(screenshots.images.length / 2)) +
            40 * screenshots.current.value
          }px);`"
        >
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
          :src="screenshots.images[screenshots.current.value]"
          class="
            rounded-xl
            border-4 border-secondary
            dark:border-dark-secondary
            border-opacity-20
          "
        />
      </div>
    </section>

    <section id="download" class="flex justify-center">
      <div
        class="
          w-1/2
          py-10
          flex
          justify-center
          bg-container
          dark:bg-dark-container
          rounded-md
        "
      >
        <div class="flex gap-6">
          <a v-for="(b, i) in browsers" :key="i" :href="b.link">
            <img :src="b.icon" class="h-14 w-14" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@vue/composition-api'
import { getBrowser } from '~/utils/browser'

export default defineComponent({
  setup() {
    const dark = ref(false)
    const latestVersion = ref<{ name: string; days: number }>()

    const screenshots = {
      current: ref(0),
      images: ['/image/istrust_org.png', '/image/internetsociety_org.png'],
    }

    const browsers = [
      { name: 'Chrome', icon: 'browser/chrome.svg', link: '' },
      {
        name: 'Firefox',
        icon: 'browser/firefox.svg',
        link: 'https://addons.mozilla.org/firefox/addon/istrust/?utm_source=istrust.org',
      },
      {
        name: 'Edge',
        icon: 'browser/edge.svg',
        link: 'https://microsoftedge.microsoft.com/addons/detail/cphlaknpjmlpfaejjabjlgnekfkebeoo',
      },
    ]

    const browser = ref<{ icon: string; link: string } | undefined>()

    onMounted(() => {
      dark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => {
          dark.value = e.matches
        })

      fetch(
        'https://api.github.com/repos/Internet-Society-Belgium/isTrust/releases/latest'
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.name || !data.published_at) return

          const now = new Date().getTime()
          const published = new Date(data.published_at).getTime()
          const days = Math.round(
            Math.abs((published - now) / (24 * 60 * 60 * 1000))
          )

          latestVersion.value = {
            name: data.name,
            days,
          }
        })

      const uaBrowser = getBrowser(navigator.userAgent)
      const browserIndex = browsers.findIndex((b) => b.name === uaBrowser)
      browser.value = {
        icon: browsers[browserIndex].icon,
        link: browsers[browserIndex].link,
      }
    })

    const scrollTo = (id: string) => {
      document?.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return { dark, latestVersion, screenshots, browsers, browser, scrollTo }
  },
})
</script>
