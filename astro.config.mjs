import { defineConfig } from 'astro/config';
import remarkCallouts from './remark-callouts.mjs';

export default defineConfig({
  site: 'https://panepucci.com.br',
  output: 'static',
  markdown: {
    remarkPlugins: [remarkCallouts],
  },
});
