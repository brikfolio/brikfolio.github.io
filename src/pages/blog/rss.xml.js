import rss from '@astrojs/rss';
import { getPosts } from '../../lib/posts';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: 'Brikfolio blog',
    description: 'News, guides and ideas from the Brikfolio team for Australian property investors.',
    site: context.site,
    trailingSlash: true,
    customData: '<language>en-au</language>',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
  });
}
