import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import avatar from '../public/avatar.jpg';

const ConListItem = ({ children }) => (
  <li className="flex items-center my-1">
    <svg
      className="h-5 text-red-500 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span className="text-lg font-medium">{children}</span>
  </li>
);

const ProListItem = ({ children }) => (
  <li className="flex items-center my-1">
    <svg
      className="h-5 text-green-500 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span className="text-lg font-medium">{children}</span>
  </li>
);

export default function Index() {
  const meta = {
    title: 'Open Organization',
    description: `We fund and nurtures research and development aiming to build open models for decentralize sustainable organizations`,
    image: 'https://openorganization.org/og.png'
  };

  return (
    <>
      <Head>
        <title>{meta.title} | {meta.description}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://openorganization.org`} />
        <link rel="canonical" href={`https://openorganization.org`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Filippo Benozzi" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@filippobenozzi" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <script async defer
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_DOMAIN_ID}
          src={`${process.env.NEXT_PUBLIC_UMAMI_HOST}/umami.js`}
          data-domains="openorganization.org"
        />
      </Head>
      <header className="bg-gray-50">
        <div className="h-2 w-full bg-gradient-to-r from-[#cd9cf2] from-[#f5f7fa] to-[#dad4ec]" />
        <nav className="max-w-lg px-8 py-4 md:py-8 mx-auto mb-4 mt-14 flex justify-between">
          <Link href="/">
            <a>
              <img className="w-56" alt="Open Organization" src="/logo.svg" />
            </a>
          </Link>
        </nav>
        <section className="max-w-lg p-8 mx-auto pb-8 md:pb-20">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight !leading-[1.25]">
            We fund research and development to build open models and principles for <span className="inline bg-[#dad4ec]">decentralize sustainable organizations</span>
          </h1>
          <p className="text-gray-700 max-w-md text-lg pt-6 mb-4 italic">
            Not finance. Not strategy. Not technology.<br />It is the teamwork that remains the ultimate competitive advantage, both because it is so powerful and so rare.
            <br /><span className="text-sm">— Patrick Lencioni, The Five Dysfunctions of a Team: A Leadership Fable</span>
          </p>
          <a href="mailto:hi@openorganization.org" className="font-bold inline-block mt-4 w-auto italic transition border-b-2 border-[#bdc2e8] hover:border-[#cd9cf2]">Join us</a>
        </section>
      </header>
      <main>
        <section className="m-auto max-w-lg mt-8 px-8 md:px-14 py-4 md:py-12">
          <h2 className="mb-6 text-xl md:text-2xl font-bold tracking-tight">
            Create an <span className="inline px-1 bg-[#dad4ec]">open source culture</span>, that drive innovation and sustainability.
          </h2>
          <p className="text-gray-700 mb-4 line leading-7">
          Today we are seeing the rapid rise of agile organizations that quickly and effectively adapting to the market new ideas with a large scale impact. These companies tend to have something in common: they are drive by talented leaders that encourage the team in order to release their full potential.
          </p>
          <p className="text-gray-700 mb-4 leading-7">
            These organisations are driven by an open culture that facilitate and encourage talented employees to develop their skills, this “flow” let shift employees where they can add the most value based on their talents and skills.
          </p>
          <p className="text-gray-700 mb-4 leading-7">
            Management guru like Peter Drucker famously said “Culture Eats Strategy for breakfast”. Usually companies define their cultural values put them in a PowerPoint and share it. In the best case scenario they print posters with their values and send them to all the offices. But, culture is a living, an ever shifting organism that need to be fed, watered and taken care of.
          </p>
        </section>
        <span className="flex m-auto max-w-lg bg-gray-100 h-[1px] w-full" />
        <section className="m-auto max-w-lg mt-4 mb-16 px-8 md:px-14 py-4 md:py-12">
          <div className="flex items-center mt-6">
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
        </section>
      </main>
    </>
  );
}
