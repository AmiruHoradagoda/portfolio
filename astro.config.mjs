// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? '';
const isUserPage = repository.endsWith('.github.io');
const pagesBase = process.env.BASE_PATH ?? (process.env.GITHUB_ACTIONS && repository && !isUserPage ? `/${repository}` : '/');
const pagesSite = process.env.SITE ?? (process.env.GITHUB_ACTIONS && owner ? `https://${owner}.github.io${isUserPage ? '' : `/${repository}`}` : undefined);

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: pagesBase,
  site: pagesSite,
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
