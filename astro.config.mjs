import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import deadLinks from "astro-dead-links";
import compress from "astro-compress";
import pagefind from "astro-pagefind";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
   },
   build: {
    format: "file",
  },
  site: 'https://beautyofmathematics.com',
  integrations: [mdx(), sitemap(), tailwind(), svelte(), deadLinks(), compress(), pagefind(), compressor()]
});