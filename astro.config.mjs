import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: "https://astro-hackernews.pages.dev",
  output: "server",
  adapter: vercel()
});