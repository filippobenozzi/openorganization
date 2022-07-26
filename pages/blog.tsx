import { useState } from 'react';

import Container from 'components/Container';
import BlogPost from 'components/BlogPost';
import { InferGetStaticPropsType } from 'next';
import { pick } from 'lib/utils';
import { allBlogs } from 'contentlayer/generated';

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <Container
        title="Blog - Filippo Benozzi"
        description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
      >
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
          <h1 className="font-bold text-4xl md:text-5xl tracking-tight mb-6 sm:mb-8 text-black dark:text-white">
            Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            {`I've been writing online since 2020, mostly about web development and tech careers.
              In total, I've written ${posts.length} articles on this site.`}
          </p>
          {filteredBlogPosts.map((post) => (
            <BlogPost key={post.title} {...post} />
          ))}
        </div>
      </Container>
    );

}

export function getStaticProps() {
  const posts = allBlogs.map((post) =>
    pick(post, ['slug', 'title', 'summary', 'publishedAt', 'tags', 'readingTime'])
  );

  return { props: { posts } };
}