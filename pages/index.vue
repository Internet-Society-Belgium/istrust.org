<template>
  <main>
    <section class="h-screen grid gap-4 grid-cols-1 md:grid-cols-2">
      <div class="flex items-center m-6 justify-center md:justify-end">
        <div class="flex flex-col gap-4">
          <div class="flex gap-4 my-4">
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
              >New release
            </span>
            <button class="flex items-center gap-2">
              <p class="italic">v{{ latestVersion }}</p>
              <img src="/svg/chevron-right.svg" class="h-6 w-6" />
            </button>
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
          <button
            class="
              bg-primary
              text-dark-secondary
              m-4
              p-3
              rounded-md
              font-medium
            "
            @click="scrollTo('download')"
          >
            Download
          </button>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center">
        <div class="p-1 flex justify-center gap-1 bg-container rounded-md">
          <div
            class="w-9 h-9 rounded-md bg-secondary bg-opacity-10 filter blur-sm"
          ></div>
          <div
            class="
              w-9
              h-9
              rounded-md
              bg-secondary-light bg-opacity-10
              filter
              blur-sm
            "
          ></div>
          <div
            class="
              w-9
              h-9
              p-2
              rounded-md
              hover:bg-secondary hover:bg-opacity-20
            "
          >
            <img src="/icon/icon.svg" />
          </div>
          <div
            class="w-9 h-9 rounded-md bg-secondary bg-opacity-10 filter blur-sm"
          ></div>
          <div
            class="
              w-9
              h-9
              rounded-md
              bg-secondary-dark-container bg-opacity-10
              filter
              blur-sm
            "
          ></div>
        </div>
        <div class="w-5 mt-1 text-secondary text-opacity-20">
          <svg viewBox="0 0 255 127.5">
            <polygon class="fill-current" points="0,127.5 127.5,0 255,127.5" />
          </svg>
        </div>
        <nuxt-img
          format="webp"
          src="/image/istrust_org.png"
          class="rounded-xl border-4 border-secondary border-opacity-20"
        />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const latestVersion = ref('')

    fetch(
      'https://api.github.com/repos/Internet-Society-Belgium/isTrust/releases/latest'
    )
      .then((res) => res.json())
      .then((data) => (latestVersion.value = data.name))

    const scrollTo = (id: string) => {
      document?.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return { latestVersion, scrollTo }
  },
})
</script>
