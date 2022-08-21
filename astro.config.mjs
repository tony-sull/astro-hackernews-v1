import { defineConfig } from 'astro/config';

import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-hackernews.pages.dev",
  output: "server",
  adapter: deno()
});