export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const head = {
      title: 'isTrust',
      htmlAttrs: {},
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }

    if (this.$nuxtI18nHead) {
      const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
      if (i18nHead.htmlAttrs) {
        head.htmlAttrs = { ...head.htmlAttrs, ...i18nHead.htmlAttrs }
      }
      if (Array.isArray(i18nHead.meta)) {
        head.meta.concat(i18nHead.meta)
      }
      if (Array.isArray(i18nHead.link)) {
        head.link.concat(i18nHead.link)
      }
    }

    return head
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/composition-api'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxt/image',
      {
        provider: 'static',
        dir: 'assets/images',
      },
    ],
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/i18n',
      {
        strategy: 'prefix_except_default',
        defaultLocale: 'en',
        seo: true,
        locales: [
          {
            code: 'en',
            iso: 'en',
            file: 'en.js',
          },
          {
            code: 'fr',
            iso: 'fr',
            file: 'fr.js',
          },
          {
            code: 'nl',
            iso: 'nl',
            file: 'nl.js',
          },
        ],
        lazy: true,
        langDir: 'lang/',
        detectBrowserLanguage: {
          alwaysRedirect: true,
          useCookie: false,
        },
        parsePages: false,
        baseUrl: 'https://www.istrust.org',
        pages: {
          legal: {
            en: '/legal-mention',
            fr: encodeURI('/mention-légal'),
            nl: '/wettelijke-vermelding',
          },
          privacy: {
            en: '/privacy-policy',
            fr: encodeURI('/politique-de-confidentialité'),
            nl: '/privacybeleid',
          },
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    nojekyll: false,
  },
}
