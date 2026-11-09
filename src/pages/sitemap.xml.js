import { getPosts, isoDate, absolute } from '../lib/posts';

// Hand-written pages in public/: update the date when you change one of them.
const STATIC_PAGES = [
  { path: '/', lastmod: '2026-11-09' },
  { path: '/legal/', lastmod: '2026-11-09' },
  { path: '/features/', lastmod: '2026-11-09' }, // src/pages/features/index.astro
];

export async function GET() {
  const posts = await getPosts();
  const newest = posts[0] ? isoDate(posts[0].data.date) : '2026-11-09';
  const urls = [
    ...STATIC_PAGES,
    { path: '/blog/', lastmod: newest },
    ...posts.map((p) => ({ path: `/blog/${p.id}/`, lastmod: isoDate(p.data.date) })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${absolute(u.path)}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
