import Link from 'next/link';
import Image from 'next/image';
import avatar from '/public/avatar.jpg';

const ExternalLink = ({ href, className, children }) => (
  <a
    className={className}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="m-auto max-w-lg mt-4 mb-8 px-8 md:px-14 py-4 md:py-12">
      <span className="flex m-auto max-w-lg bg-gray-100 h-[1px] w-full" />

      <div className="flex items-center mt-12">
        <div className="mr-6">
          <Image
            alt="Headshot of Filippo Benozzi"
            src={avatar}
            placeholder="blur"
            width={72}
            height={72}
            className="rounded-full"
          />
        </div>
        <div className="w-full">
          <p className="text-gray-700 mt-4">
            <strong>Filippo Benozzi</strong> <span className='text-sm italic'>— developer, economic student and musician</span>
          </p>
          <a
            href="https://filippo.im"
            className="mt-2 no-underline italic transition border-b-2 border-[#bdc2e8] hover:border-[#cd9cf2] text-sm md:text-base"
          >
            more about me &#187;
          </a>
        </div>
      </div>

      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 sm:grid-cols-3 mt-12 hidden">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/blog">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Blog
            </a>
          </Link>
          <Link href="/snippets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/bookmarks">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Bookmarks
            </a>
          </Link>
          <ExternalLink className="text-gray-500 hover:text-gray-600 transition" href="https://github.com/filippobenozzi">GitHub</ExternalLink>
        </div>
      </div>

    </footer>
  );
}
