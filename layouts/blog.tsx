import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Tag from 'components/Tag';
import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import ViewCounter from 'components/ViewCounter';
import type { PropsWithChildren } from 'react';
import type { Blog } from 'contentlayer/generated';
import avatar from '/public/avatar.jpg';

const editUrl = (slug) =>
  `https://github.com/filippobenozzi/filippo.im/edit/master/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/share?url=${encodeURIComponent(
    `https://filippo.im/blog/${slug}`
  )}`;

  export default function BlogLayout({
    children,
    post,
    github
  }: PropsWithChildren<{ post: Blog, github: any }>) {
    return (
      <Container
        title={`${post.title} - Blog`}
        description={post.summary}
        date={new Date(post.publishedAt).toISOString()}
        type="article"
        readingTime={post.readingTime.text}
        tags={post.tags}
      >
        <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
          <h1 className="font-bold text-4xl md:text-5xl tracking-tight mb-6 sm:mb-8 text-black dark:text-white">
            {post.title}
          </h1>
          <div className="flex flex-wrap flex-row justify-between items-center w-full mt-2 print:mb-2 mb-3 md:mb-6">
            <div className="flex items-center">
              <Image
                height={24}
                width={24}
                src={avatar}
                alt="Picture of me (Filippo Benozzi)"
                className="rounded-full"
                priority
              />
              <p className="text-sm text-gray-700 dark:text-gray-300 ml-2 w-full inline-block">
                {'Filippo Benozzi / '}
                {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-0 print:hidden">
              {post.readingTime.text}
              {false && (
                <>
                {` • `}
                <ViewCounter slug={post.slug} />
                </>
              )}
            </p>
          </div>
          <div className="w-full mt-4 prose dark:prose-dark max-w-none">
            {children}
          </div>
          {(
            <div className="w-full mt-8 print:hidden">
              <Subscribe />
            </div>
          )}
          <div className="text-sm text-gray-700 dark:text-gray-300 mt-6 print:hidden">
            <a
              href={discussUrl(post.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className='font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400'
            >
              {'Discuss on Twitter'}
            </a>
            {(
              <>
                {` • `}
                <a
                  href={editUrl(post.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {'Edit on GitHub'}
                </a>
              </>
            )}
            {post.source && (
              <>
                {` • `}
                <a
                  href={post.source}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {'Source'}
                </a>
              </>
            )}
          </div>
          <div className="wrapper-category block mb-4 mt-10 md:mb-0 print:hidden">
            {post.tags && post.tags.split(',').map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-4 md:mt-8 print:hidden">
            <span className="font-bold mt-0 block text-base tracking-tight mb-3 text-gray-700 dark:text-gray-200">Contributions</span>
            {github?.map((item) => (
              <div key={item.sha} className="mb-1">
                {format(parseISO(item.commit.author.date), 'dd.MM.yyyy')} • <a href={item.html_url} target="_blank" rel="noopener noreferrer">{(item.sha).substring(0, 7)} @{item.author.login}</a>
              </div>
            ))}
          </div>
        </article>
      </Container>
    );
}