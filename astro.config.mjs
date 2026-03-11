import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://GrzesCz.github.io',
  base: '/ds_ai_portfolio',
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static',
});