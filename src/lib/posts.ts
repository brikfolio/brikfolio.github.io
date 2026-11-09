import { getCollection } from 'astro:content';

export const SITE = 'https://brikfolio.com.au';

/** Published posts, newest first. Drafts show only in `npm run dev`. */
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Australia/Melbourne',
  });
}

export function isoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

/** Absolute URL for a site path or an already absolute URL. */
export function absolute(pathOrUrl: string) {
  return new URL(pathOrUrl, SITE).href;
}
