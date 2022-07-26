import Image from 'next/image';
import useSWR from 'swr';
import { format } from 'date-fns';
import Link from 'next/link';

export default function RedditComment({
  title,
  permalinksubreddit,
  url,
  width,
  height,
  author,
  date,
  tag,
  tag_color,
  permalink,
  subreddit,
  ups,
  comments,
  text,  
  video,
  video2,
  notionorder
}) {
  const createdAt = new Date(date * 1000);
  const formattedText = text.replace(/\[([^\]]+)\][^\)]+\)/g, '').replace(/http.:([^\s]+)/g, '').replace(/&amp([^\s]+)/g, '').replace(/[\r\n]+$/,'');

  return (
    <div className="tweet rounded-lg border border-gray-200 dark:border-gray-800 px-6 py-4 mt-4 bg-white dark:bg-gray-900 w-full" style={{ 'order': notionorder }}>
      <div className="flex items-center">
        <a
          href={`https://www.reddit.com${permalink}`}
          className="author flex flex-col"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span
            className="flex items-center font-bold text-gray-900 dark:text-gray-100 leading-5"
            title={subreddit}
          >
            {subreddit}
          </span>
          <span className="text-gray-500" title={`u/${author}`}>
            u/{author}
          </span>
        </a>
        <a
          className="ml-auto"
          href={`https://www.reddit.com${permalink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 600 488.4"
            height="34"
            width="34"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M167,414.2c-45.3-28.4-68-63.8-68-106.4l0.5-12.5c-14.8-14.8-22.4-22.2-22.7-22.2c-5.2-8.3-7.9-16.6-7.9-25 c0-12.6,5.5-24.7,16.4-36.3c10.9-11.6,22.6-17.3,34.9-17.3c9.2,0,18.3,2.8,27.3,8.3c5.5,3.7,8.3,5.9,8.3,6.5l28.2-14.8 c35.1-17.3,71.1-26.2,107.8-26.8l19.9-98c3.7-17.3,7.4-26.8,11.1-28.7c2.8,0,17.1,2.6,43,7.9c26.8,5.9,41.3,8.8,43.5,8.8 c2.8-0.6,7-3.8,12.7-9.5c5.7-5.7,10.7-8.7,15-9l8.8-1.4c18.5,0,29.7,10.5,33.8,31.4l0.5,10.6c0,21.6-12.5,32.4-37.5,32.4 c-19.4,0-31-11.9-34.7-35.6l-72.6-14.8c-1.5,5.2-9.4,40.2-23.6,105c60.1,6.2,104.4,20.8,132.7,43.9c9.6-7.4,16.8-11.7,21.7-12.9 c6.5-1.2,12.3-1.8,17.6-1.8c21.3,0,35.6,12.2,43,36.5c2.8,7.4,4.2,14.5,4.2,21.3c0,18.5-9.9,31.9-29.6,40.2v6.9 c0,68.1-40.4,114.1-121.2,137.8c-29,8-57.3,12-85.1,12C248.9,450.7,206.2,438.5,167,414.2z M232.7,315.7c16.6-4.3,25-13.7,25-28.2 c0-26.2-12.6-39.3-37.9-39.3c-23.7,1.5-35.6,10.9-35.6,28.2c0,5.5,1.4,12.3,4.2,20.3c5.9,14.2,15.6,21.3,29.1,21.3 C222.1,318,227.2,317.2,232.7,315.7z M359.2,394.3c19.6-7.7,29.4-16.8,29.4-27.3c-1.5-0.6-3.1-0.9-4.6-0.9 c-4.3,0-12.2,2.9-23.6,8.8c-22.2,11.7-43.3,17.6-63.4,17.6c-26.5,0-51.2-9.7-74-29.1c-6.2,1.8-9.2,4.3-9.2,7.4 c0,2.8,1.5,5.7,4.6,8.8c7.1,6.5,15.6,11.7,25.4,15.7c18.8,7.1,37.5,10.6,56,10.6C319.8,405.8,339.6,402,359.2,394.3z M391.3,316.6 c15.1-4.3,22.7-13.4,22.7-27.3c0-4-0.2-7.9-0.5-11.6c-4-19.7-16-29.6-36.1-29.6c-22.5,1.8-33.8,14-33.8,36.5 c0,9.6,3.8,17.7,11.3,24.3c7.6,6.6,15.6,9.9,24.3,9.9C383.6,318.9,387.6,318.1,391.3,316.6z"
            style={{ fill: '#FF4500' }} />
          </svg>
        </a>
      </div>
      <div className="mt-4 mb-1 leading-normal font-semibold whitespace-pre-wrap text-lg text-gray-700 dark:text-gray-300">
        {title}
      </div>
      <div className="mt-4 mb-1 leading-normal whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-400">
        {url.startsWith("https://i.redd.it") && !(video || video2) && (
          <Image src={url} width={width} height={height} layout='responsive' alt={title} className="rounded object-contain" />
        )}
        {/* {(video || video2) && (
          <video width={width} height={height} className="rounded object-contain" muted autoPlay loop webkit-playsinline playsinline>
            <source src={video ? video : video2} type="video/mp4" />
          </video>
        )} */}
        {!url.startsWith("https://i.redd.it") && formattedText}
      </div>
      <a
        className="text-gray-500 text-sm hover:underline"
        href={`https://www.reddit.com${permalink}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <time
          title={`Time Posted: ${createdAt.toUTCString()}`}
          dateTime={createdAt.toISOString()}
        >
          {format(createdAt, 'h:mm a - MMM d, y')}
        </time>
      </a>
      
      <div className="flex text-gray-700 dark:text-gray-300 mt-2">
        <a
          className="flex items-center mr-4 text-gray-500 hover:text-red-600 transition hover:underline"
          href={`https://www.reddit.com${permalink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="mr-2" width="24" height="24" viewBox="0 0 1000 1000" transform='rotate(180)'>
            <path
              className="fill-current"
              d="M650 43.75H350A56.35 56.35 0 0 0 293.75 100V444.35H106.2A56.25 56.25 0 0 0 64.4 538.25L458.2499999999999 975.35A58.1 58.1 0 0 0 541.75 975.35L935.7 538.15A56.25 56.25 0 0 0 894.05 444.2000000000001L706.25 443.8000000000001V100A56.35 56.35 0 0 0 650 43.75zM356.25 106.25H643.75V506.25L879.95 506.75L500 928.3L120 506.85H356.25zM504.6 933.45H504.6z"
            />
          </svg>
          <span>{ new Number(ups).toLocaleString()}</span>
        </a>
        <a
          className="flex items-center mr-4 text-gray-500 hover:text-blue-600 transition hover:underline"
          href={`https://www.reddit.com${permalink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
            <path
              className="fill-current"
              d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
            />
          </svg>
          <span>{new Number(comments).toLocaleString()}</span>
        </a>
      </div>
    </div>
  );
}
