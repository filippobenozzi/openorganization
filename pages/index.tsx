import Link from 'next/link';
import Image from 'next/image';
import Container from 'components/Container';
import BlogPost from 'components/BlogPost';
import Subscribe from 'components/Subscribe';
import { pick } from 'lib/utils';
import { allBlogs } from 'contentlayer/generated';

import avatar from '/public/avatar.jpg';

export default function Home({ posts }) {

  const filteredBlogPosts = posts
  .sort(
    (a, b) =>
      Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return (
    <Container>
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
    </Container>
  );
}

export async function getStaticProps() {

  const posts = allBlogs.map((post) =>
    pick(post, ['slug', 'title', 'summary', 'publishedAt', 'tags', 'readingTime'])
  );

  return { props: { posts } };
}