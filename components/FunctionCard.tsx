import Link from 'next/link';
import Tag from 'components/Tag';

export default function FunctionCard({
  title,
  description,
  slug,
  tags,
  ...rest
}) {
  return (
    <Link href={`/snippets/${slug}`}>
      <a
        className="border border-grey-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded p-4 w-full"
        {...rest}
      >
        <h4 className="text-lg font-bold mt-2 tracking-tight w-full !leading-[1.4em] text-gray-900 dark:text-gray-100">
          {title}
        </h4>
        <p className="mt-3 text-gray-600 dark:text-gray-400 text-[95%] pt-1">{description}</p>
        <div className="wrapper-category block mt-4 mb-2">
          {tags && tags.split(',').map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </a>
    </Link>
  );
}
