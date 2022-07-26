import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '../.contentlayer/generated/Blog/_index.mjs';

async function generate() {
  const feed = new RSS({
    title: 'Filippo Benozzi',
    site_url: 'https://filippo.im',
    feed_url: 'https://filippo.im/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://filippo.im/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();