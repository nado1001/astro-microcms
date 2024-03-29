import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import image from '@astrojs/image'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://astro-microcms.pages.dev',
  integrations: [
    react(),
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    sitemap(),
  ],
})
