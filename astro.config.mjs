import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  // site: '',
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), sitemap({
  }), robotsTxt()],
  prefetch: true,
  build: {
    assets: '_astro',
  }
});