import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import Tag from 'components/Tag';
import type { Blog } from 'contentlayer/generated';

export default function BlogPost({
  title,
  summary,
  slug,
  publishedAt,
  tags,
  readingTime
}: Pick<Blog, 'title' | 'summary' | 'slug' | 'publishedAt' | 'tags' | 'readingTime'>) {

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="mb-12 sm:mb-8 w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-xl font-bold mb-2 tracking-tight w-full text-gray-900 dark:text-gray-100">
              {title}
            </h4>
            <p className="text-gray-500 text-left text-sm md:text-right w-52 mb-4 mt-1 md:mb-0">
              {format(parseISO(publishedAt), 'MMMM dd, yyyy')} • {(readingTime.text).split('read')[0]}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
          <div className="wrapper-category block mb-4 mt-2 md:mb-0">
            {tags && tags.split(',').map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
};
