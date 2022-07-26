export default function Tag({ children }) {
    return (
        <p className="text-white text-sm bg-gray-400 dark:bg-gray-600 rounded-full p-1.5 pl-3 pr-3 mr-1.5 inline-block tracking-wide leading-none italic">
            {children}
        </p>
    );
  }
  