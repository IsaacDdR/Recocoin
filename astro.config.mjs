import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  output: 'static',
  base: '/Recocoin', // Replace with your repository name
  site: 'https://isaacddr.github.io', // Replace with your GitHub username
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});