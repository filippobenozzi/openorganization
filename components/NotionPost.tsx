export default function NotionPost({
  title,
  url,
  text,
  notionorder
}) {

  let domain = (new URL(url));
 
  return (
    <div className="tweet rounded-lg border border-gray-200 dark:border-gray-800 px-6 py-4 mt-4 bg-white dark:bg-gray-900 w-full" style={{ 'order': notionorder }}>
      <div className="flex items-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="author flex flex-col !no-underline"
        >
          <span
            className="flex items-center font-bold !text-gray-900 dark:!text-gray-100 leading-5"
            title={title}
          >
            {title}
          </span>
          <span className="!text-gray-500 italic" title={`@${title}`}>
            {domain.hostname.replace('www.','')}
          </span>
        </a>
        <a
          className="ml-auto opacity-75 mb-auto mt-[7px]"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M19.48 13.03A4 4 0 0 1 16 19h-4a4 4 0 1 1 0-8h1a1 1 0 0 0 0-2h-1a6 6 0 1 0 0 12h4a6 6 0 0 0 5.21-8.98L21.2 12a1 1 0 1 0-1.72 1.03zM4.52 10.97A4 4 0 0 1 8 5h4a4 4 0 1 1 0 8h-1a1 1 0 0 0 0 2h1a6 6 0 1 0 0-12H8a6 6 0 0 0-5.21 8.98l.01.02a1 1 0 1 0 1.72-1.03z"/>
          </svg>
        </a>
      </div>
      <div className="mt-4 mb-1 leading-normal whitespace-pre-wrap text-lg !text-gray-700 dark:!text-gray-300">
        {text}
      </div>
    </div>
  );
}