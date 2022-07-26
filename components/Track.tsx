export default function Track(track) {
  return (
    <div className="flex flex-row items-baseline border-b border-gray-100 dark:border-gray-800 max-w-3xl w-full mt-8">
      <span className="text-sm font-bold text-gray-400 dark:text-gray-600">
        {track.ranking}
      </span>
      <div className="flex flex-col pl-3">
        <a
          className="font-medium text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <span
          className="text-gray-500 mb-4 mt-1 truncate w-60 sm:w-96 md:w-full"
          color="gray.500"
        >
          {track.artist}
        </span>
      </div>
    </div>
  );
}
