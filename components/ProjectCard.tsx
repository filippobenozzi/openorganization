const trackGoal = (title) => {
  const goalCodes = {
    'React 2025': '5WGDOKV0',
    'Mastering Next.js': 'HV9HDL0O'
  };


};

export default function ProjectCard({ title, description, href, stats, version }) {
  return (
    <a
      className="item-project-card mb-4 w-full hover:shadow"
      href={href}
      onClick={() => trackGoal(title)}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-wrap items-center border border-grey-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded p-4">
        <div className='flex w-full flex-col md:flex-row justify-between'>
          <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          {version && (
            <p className="text-gray-500 text-left text-sm md:text-right w-52 md:ml-auto mb-4 mt-1 md:mb-0 ">
              {version}
            </p>
          )}
        </div>
        <p className="leading-5 w-full text-gray-700 dark:text-gray-300">
          {description}
        </p>
        {stats && (
          <p className="text-gray-500 text-left text-sm w-full mb-4 mt-4 md:mb-0 ">
            {stats}
          </p>
        )}
      </div>
    </a>
  );
}
