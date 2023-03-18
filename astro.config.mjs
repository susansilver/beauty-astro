import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import partytown from "@astrojs/partytown";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://beautyofmathematics.com',
  integrations: [mdx(), sitemap(), tailwind(), svelte()],
  output: "server",
  adapter: netlify()
});