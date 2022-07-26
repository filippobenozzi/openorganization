import Link from 'next/link';

import Container from 'components/Container';

export default function NotFound() {
  return (
    <Container title="404 – Filippo Benozzi">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-4xl md:text-5xl tracking-tight mb-6 sm:mb-8 text-black dark:text-white">
          451 – Unavailable For Legal Reasons
        </h1>
        <video className="mb-8 rounded-lg" muted loop autoPlay playsInline>
          <source src="/static/video/404.mp4" type="video/mp4"/>
        </video>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Why show a generic 404 when I can make it sound mysterious? It seems
          you have found something that used to exist, or you spelled something
          wrong. I am guessing you spelled something wrong. Can you double check
          that URL?
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
