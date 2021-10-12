<template>
  <div class="flex flex-col gap-20 pt-20 lg:pt-0 pb-20">
    <section
      class="min-h-screen p-20 grid gap-20 lg:gap-10 grid-cols-1 lg:grid-cols-2"
    >
      <div class="flex items-center justify-center">
        <div class="flex flex-col gap-4 items-center lg:items-start">
          <a
            v-if="latestVersion"
            href="https://github.com/Internet-Society-Belgium/isTrust/releases"
            target="_blank"
            rel="noopener noreferrer"
            class="flex gap-4 my-3 items-center w-min whitespace-nowrap"
          >
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
            <span class="text-sm font-medium text-primary dark:text-primary"
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
            </span>
          </a>
          <h1
            class="
              text-secondary
              dark:text-dark-secondary
              text-5xl
              font-semibold
              text-center
              lg:text-left
            "
          >
            isTrust
          </h1>
          <h2
            class="
              text-secondary
              dark:text-dark-secondary
              text-2xl text-center
              lg:text-left
            "
          >
            {{ $t('index.description') }}
          </h2>
          <div class="mt-9">
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
                group
                hover:bg-opacity-90
              "
              :href="browser.link"
            >
              <img
                :src="browser.icon"
                alt=""
                class="h-8 w-8 group-hover:opacity-90 pointer-events-none"
              />
              {{ $t('index.get_the_addon') }}
            </a>
            <button
              v-else
              type="button"
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

          <div v-if="browser" class="flex gap-2">
            <a
              v-if="browser.rating"
              :href="browser.reviews"
              target="_blank"
              rel="noopener noreferrer"
              class="flex flex-row items-center group"
            >
              <img
                v-for="star in browser.rating.average"
                :key="star"
                src="/svg/star.svg"
                alt="star"
                class="w-6 h-6 pointer-events-none group-hover:opacity-90"
              />
              <p
                class="
                  px-1
                  flex
                  text-sm text-secondary-light
                  dark:text-dark-secondary-light
                "
              >
                <span class="font-light">(</span>
                <span class="font-medium">{{ browser.rating.count }}</span>
                <span class="font-light">)</span>
              </p>
            </a>
            <a
              v-else
              :href="browser.reviews"
              target="_blank"
              rel="noopener noreferrer"
              class="flex flex-row items-center group"
            >
              <img
                v-for="star in 5"
                :key="star"
                src="/svg/star.svg"
                alt="star"
                class="
                  w-6
                  h-6
                  opacity-60
                  group-hover:opacity-50
                  pointer-events-none
                "
              />
            </a>
          </div>
        </div>
      </div>
      <Screenshots />
    </section>

    <section id="download" class="px-20 gap-14 flex flex-col items-center">
      <div class="text-center">
        <h3
          class="
            text-secondary
            dark:text-dark-secondary
            text-4xl
            font-semibold
            p-4
          "
        >
          {{ $t('index.download.title') }}
        </h3>
        <h4 class="text-secondary-light dark:text-dark-secondary-light">
          {{ $t('index.download.description') }}
        </h4>
      </div>
      <div class="flex flex-wrap justify-center max-w-xl gap-10">
        <a
          v-for="(b, i) in browsers"
          :key="i"
          :href="b.link"
          class="
            p-10
            flex flex-col
            gap-4
            bg-container
            dark:bg-dark-container
            rounded-md
          "
        >
          <img :src="b.icon" alt="" class="h-20 w-20 pointer-events-none" />
          <p
            class="
              text-secondary
              dark:text-dark-secondary
              text-lg
              font-medium
              text-center
            "
          >
            {{ b.name }}
          </p>
        </a>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@vue/composition-api'
import { getBrowser } from '~/utils/browser'
import Screenshots from '~/components/Screenshots.vue'

export default defineComponent({
  components: { Screenshots },
  setup() {
    const latestVersion = ref<{ name: string; days: number }>()

    const browsers = [
      {
        name: 'Chrome',
        icon: 'browser/chrome.svg',
        link: 'https://chrome.google.com/webstore/detail/istrust/kinlknncggaihnhdcalijdmpbhbflalm',
        reviews:
          'https://chrome.google.com/webstore/detail/istrust/kinlknncggaihnhdcalijdmpbhbflalm/reviews',
      },
      {
        name: 'Firefox',
        icon: 'browser/firefox.svg',
        link: 'https://addons.mozilla.org/firefox/addon/istrust/?utm_source=istrust.org',
        reviews: 'https://addons.mozilla.org/firefox/addon/istrust/reviews/',
      },
      {
        name: 'Edge',
        icon: 'browser/edge.svg',
        link: 'https://microsoftedge.microsoft.com/addons/detail/cphlaknpjmlpfaejjabjlgnekfkebeoo',
        reviews:
          'https://microsoftedge.microsoft.com/addons/detail/cphlaknpjmlpfaejjabjlgnekfkebeoo',
      },
      {
        name: 'Opera',
        icon: 'browser/opera.svg',
        link: 'https://chrome.google.com/webstore/detail/istrust/kinlknncggaihnhdcalijdmpbhbflalm',
        reviews:
          'https://chrome.google.com/webstore/detail/istrust/kinlknncggaihnhdcalijdmpbhbflalm/reviews',
      },
      {
        name: 'Brave',
        icon: 'browser/brave.svg',
        link: 'https://chrome.google.com/webstore/detail/istrust/kinlknncggaihnhdcalijdmpbhbflalm',
        reviews:
          'https://chrome.google.com/webstore/detail/istrust/kinlknncggaihnhdcalijdmpbhbflalm/reviews',
      },
      {
        name: 'Vivaldi',
        icon: 'browser/vivaldi.svg',
        link: 'https://chrome.google.com/webstore/detail/istrust/kinlknncggaihnhdcalijdmpbhbflalm',
        reviews:
          'https://chrome.google.com/webstore/detail/istrust/kinlknncggaihnhdcalijdmpbhbflalm/reviews',
      },
    ]

    const browser = ref<
      | {
          icon: string
          link: string
          reviews: string
          rating?: { average: number; count: number }
        }
      | undefined
    >()

    onMounted(() => {
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
      const matchedBrowser = browsers.find((b) => b.name === uaBrowser)

      if (matchedBrowser) {
        browser.value = {
          icon: matchedBrowser.icon,
          link: matchedBrowser.link,
          reviews: matchedBrowser.reviews,
        }

        if (uaBrowser === 'Firefox') {
          fetch('https://addons.mozilla.org/api/v5/addons/addon/istrust/')
            .then((res) => res.json())
            .then((data) => {
              if (!data?.ratings?.average || !data?.ratings?.count) return
              if (!browser.value) return
              browser.value.rating = {
                average: data.ratings.average,
                count: data.ratings.count,
              }
            })
        }
      }
    })

    const scrollTo = (id: string) => {
      document?.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return {
      latestVersion,
      browsers,
      browser,
      scrollTo,
    }
  },
})
</script>
