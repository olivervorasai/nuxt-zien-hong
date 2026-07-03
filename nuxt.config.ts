// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-06-24',

    modules: ['@nuxt/eslint'],

    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            titleTemplate: '%s | Zien Hong Restaurant',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                { name: 'format-detection', content: 'telephone=no' },
                {
                    key: 'description',
                    name: 'description',
                    content:
                        'Zien Hong restaurant offers huge portions of traditional Chinese fare in a compact dining room.',
                },
            ],
            link: [
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/apple-touch-icon.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon-16x16.png',
                },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: '',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
                },
            ],
        },
    },

    css: ['~/assets/css/main.css'],

    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/'],
        },
    },
});
