import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import deadLinks from "astro-dead-links";
import compress from "astro-compress";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: 'https://beautyofmathematics.com',
  integrations: [mdx(), sitemap(), tailwind(), svelte(), deadLinks(), compress(), compressor()]
});