import { defineConfig } from 'astro/config';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const publicDir = fileURLToPath(new URL('./public/', import.meta.url));

// `astro dev` does not serve public/<dir>/index.html for "/<dir>/" (the built site does).
// This maps "/" and "/legal/" to their index.html so dev matches production.
const publicIndexInDev = {
  name: 'public-index-in-dev',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const [path, query] = (req.url ?? '').split('?');
      if (path.endsWith('/') && existsSync(`${publicDir}${path.slice(1)}index.html`)) {
        req.url = `${path}index.html${query ? `?${query}` : ''}`;
      }
      next();
    });
  },
};

// The landing page, legal page and assets live in public/ and are copied as-is.
// Astro only builds the blog (src/pages/blog), the RSS feed and the sitemap.
export default defineConfig({
  site: 'https://brikfolio.com.au',
  trailingSlash: 'always',
  build: { format: 'directory' },
  vite: { plugins: [publicIndexInDev] },
});
