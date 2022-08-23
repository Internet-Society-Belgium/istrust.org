<template>
  <div class="flex flex-col gap-20 pt-20 lg:pt-0 pb-20">
    <section
      class="min-h-screen p-20 grid gap-20 lg:gap-10 grid-cols-1 lg:grid-cols-2"
    >
      <div class="flex items-center justify-center">
        <div class="flex flex-col gap-4 items-center lg:items-start">
          <div class="h-10 flex items-center">
            <transition
              enter-active-class="duration-500 ease-in-out"
              enter-class="opacity-0"
              enter-to-class="opacity-100"
            >
              <a
                v-if="latestVersion.name"
                href="https://github.com/Internet-Society-Belgium/isTrust/releases"
                target="_blank"
                rel="noopener noreferrer"
                class="flex gap-4 my-3 items-center w-min whitespace-nowrap"
              >
                <span
                  class="uppercase bg-primary bg-opacity-20 text-primary text-xs font-semibold px-2 py-1 rounded-md"
                  >{{ $t('index.new_release') }}
                </span>
                <span class="text-sm font-medium text-primary"
                  >v{{ latestVersion.name }} -
                  {{
                    $tc(
                      'index.days_ago',
                      latestVersion.days === 0
                        ? 0
                        : latestVersion.days === 1
                        ? 1
                        : 2,
                      {
                        days: latestVersion.days,
                      }
                    )
                  }}
                </span>
              </a>
            </transition>
          </div>
          <h1
            class="text-secondary dark:text-dark-secondary text-5xl font-semibold text-center lg:text-left"
          >
            isTrust
          </h1>
          <h2
            class="text-secondary dark:text-dark-secondary text-2xl text-center lg:text-left"
          >
            {{ $t('index.description') }}
          </h2>
          <div class="mt-9">
            <button
              type="button"
              class="inline-flex items-center gap-3 py-4 px-6 bg-primary text-dark-secondary shadow rounded-md font-medium group hover:bg-opacity-90"
              @click="
                browser.link && browser.icon
                  ? goTo(browser.link)
                  : scrollTo('download')
              "
            >
              <transition
                enter-active-class="duration-500 ease-in-out"
                enter-class="opacity-0"
                enter-to-class="opacity-100"
              >
                <img
                  v-if="browser.link && browser.icon"
                  :src="require(`~/assets/images/browser/${browser.icon}?data`)"
                  alt=""
                  class="h-8 w-8 group-hover:opacity-90 pointer-events-none"
                />
              </transition>
              <p>{{ $t('index.get_the_addon') }}</p>
            </button>
          </div>

          <div class="h-10 flex items-center">
            <transition
              enter-active-class="duration-500 ease-in-out"
              enter-class="opacity-0"
              enter-to-class="opacity-100"
            >
              <div class="flex gap-2">
                <a
                  :href="browser.reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    v-if="browser.rating"
                    class="flex flex-row items-center group"
                  >
                    <img
                      v-for="star in browser.rating.average"
                      :key="star"
                      src="~/assets/images/svg/star.svg?data"
                      alt="star"
                      class="w-6 h-6 pointer-events-none group-hover:opacity-90"
                    />
                    <p
                      class="px-1 py-1 flex text-sm text-secondary-light dark:text-dark-secondary-light"
                    >
                      <span class="font-light">(</span>
                      <span class="font-medium">{{
                        browser.rating.count
                      }}</span>
                      <span class="font-light">)</span>
                    </p>
                  </div>
                  <div v-else class="flex flex-row items-center group">
                    <img
                      v-for="star in 5"
                      :key="star"
                      src="~/assets/images/svg/star.svg?data"
                      alt="star"
                      class="w-6 h-6 opacity-60 group-hover:opacity-50 pointer-events-none"
                    />
                  </div>
                </a>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <Screenshots />
    </section>

    <section class="flex flex-col items-center gap-10 p-20 pt-0">
      <div>
        <h3
          class="text-secondary dark:text-dark-secondary text-4xl text-center font-semibold p-2"
        >
          {{ $t('index.feature.title') }}
        </h3>
        <h4
          class="text-secondary-light dark:text-dark-secondary text-2xl text-center p-2"
        >
          {{ $t('index.feature.subtitle') }}
        </h4>
      </div>
      <div class="grid grid-flow-row md:grid-flow-col gap-10">
        <div class="flex flex-col items-center">
          <div class="p-3 relative -bottom-6 bg-primary rounded">
            <img
              src="~/assets/images/svg/globe-alt.svg?data"
              alt="domain"
              class="w-6 h-6 pointer-events-none"
            />
          </div>
          <div
            class="h-full w-60 p-4 pt-8 flex flex-col justify-evenly items-center bg-container dark:bg-dark-container rounded-lg"
          >
            <h3
              class="p-2 text-secondary dark:text-dark-secondary text-xl font-medium"
            >
              {{ $t('index.feature.domain.title') }}
            </h3>
            <ul class="text-secondary-light dark:text-dark-secondary-light">
              <li class="p-1 flex items-center gap-2">
                <img
                  src="~/assets/images/svg/cake.svg?data"
                  alt="domain"
                  class="w-6 h-6 pointer-events-none"
                />
                <h4>{{ $t('index.feature.domain.creation') }}</h4>
              </li>
              <li class="p-1 flex items-center gap-2">
                <img
                  src="~/assets/images/svg/refresh.svg?data"
                  alt="domain"
                  class="w-6 h-6 pointer-events-none"
                />
                <h4>{{ $t('index.feature.domain.change') }}</h4>
              </li>
              <li class="p-1 flex items-center gap-2">
                <img
                  src="~/assets/images/svg/office-building.svg?data"
                  alt="domain"
                  class="w-6 h-6 pointer-events-none"
                />
                <h4>{{ $t('index.feature.domain.owner') }}</h4>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex flex-col items-center">
          <div class="p-3 relative -bottom-6 bg-primary rounded">
            <img
              src="~/assets/images/svg/switch-vertical.svg?data"
              alt="domain"
              class="w-6 h-6 pointer-events-none"
            />
          </div>
          <div
            class="h-full w-60 p-4 pt-8 flex flex-col justify-evenly items-center bg-container dark:bg-dark-container rounded-lg"
          >
            <h3
              class="p-2 text-secondary dark:text-dark-secondary text-xl font-medium"
            >
              {{ $t('index.feature.communication.title') }}
            </h3>
            <ul class="text-secondary-light dark:text-dark-secondary-light">
              <li class="p-1 flex items-center gap-2">
                <img
                  src="~/assets/images/svg/lock-closed.svg?data"
                  alt="domain"
                  class="w-6 h-6 pointer-events-none"
                />
                <h4>{{ $t('index.feature.communication.secure') }}</h4>
              </li>
              <li class="p-1 flex items-center gap-2">
                <img
                  src="~/assets/images/svg/identification.svg?data"
                  alt="domain"
                  class="w-6 h-6 pointer-events-none"
                />
                <h4>{{ $t('index.feature.communication.subject') }}</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="download" class="px-20 gap-14 flex flex-col items-center">
      <div class="text-center">
        <h3
          class="text-secondary dark:text-dark-secondary text-4xl font-semibold p-4"
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
          class="p-10 flex flex-col gap-4 bg-container dark:bg-dark-container rounded-xl"
        >
          <img
            :src="require(`~/assets/images/browser/${b.icon}?data`)"
            alt=""
            class="h-16 w-16 pointer-events-none"
          />
          <p
            class="text-secondary dark:text-dark-secondary text-lg font-medium text-center"
          >
            {{ b.name }}
          </p>
        </a>
      </div>
    </section>

    <section class="p-20 gap-14 flex flex-col lg:flex-row lg:justify-around">
      <div
        class="flex flex-col gap-4 items-center text-center lg:items-baseline"
      >
        <h3
          class="text-secondary dark:text-dark-secondary text-4xl font-semibold"
        >
          <span
            v-for="(s, i) in $t('index.opensource.title')"
            :key="i"
            :class="s.highlight ? 'text-primary' : ''"
          >
            {{ s.text }}
          </span>
        </h3>
        <h4 class="text-secondary-light dark:text-dark-secondary-light">
          <span
            v-for="(s, i) in $t('index.opensource.description')"
            :key="i"
            :class="s.highlight ? 'font-semibold' : ''"
          >
            {{ s.text }}
          </span>
        </h4>
      </div>
      <div class="flex justify-center items-center">
        <a
          href="https://github.com/Internet-Society-Belgium/isTrust"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex flex-none items-center gap-3 py-4 px-6 bg-primary text-dark-secondary shadow rounded-md font-medium group hover:bg-opacity-90"
        >
          <img
            :src="require(`~/assets/images/svg/github.svg?data`)"
            alt="dark"
            class="h-8 w-8 pointer-events-none"
          />
          <p>{{ $t('index.opensource.view') }}</p>
        </a>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getBrowser, browsers } from '~/utils/browser'
import Screenshots from '~/components/Screenshots.vue'

interface Version {
  name: string
  days: number
}

interface Browser {
  icon: string
  link: string
  reviews: string
  rating?: { average: number; count: number }
}

export default Vue.extend({
  components: { Screenshots },
  data() {
    return {
      browsers,
      latestVersion: {} as Version,
      browser: {} as Browser,
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('index.description')}`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.$t('index.description')}`,
        },
      ],
    }
  },
  mounted() {
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

        this.latestVersion = {
          name: data.name,
          days,
        }
      })

    const uaBrowser = getBrowser(navigator.userAgent)
    const matchedBrowser = browsers.find((b) => b.name === uaBrowser)

    if (matchedBrowser) {
      this.browser = {
        icon: matchedBrowser.icon,
        link: matchedBrowser.link,
        reviews: matchedBrowser.reviews,
      }

      if (uaBrowser === 'Firefox') {
        fetch('https://addons.mozilla.org/api/v5/addons/addon/istrust/')
          .then((res) => res.json())
          .then((data) => {
            this.browser.rating = {
              average: data?.ratings?.average,
              count: data?.ratings?.count,
            }
          })
      }
    }
  },
  methods: {
    scrollTo: (id: string) => {
      document?.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    },
    goTo: (url: string) => {
      window.location.href = url
    },
  },
})
</script>
