import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/joeyjiron06/grizzly-css',
  integrations: [
    tailwind({ nesting: true }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'github-light' },
    })
  ]
});