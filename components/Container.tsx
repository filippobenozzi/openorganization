import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';
import Footer from 'components/Footer';
import cn from 'classnames';

export default function Container(props) {

  const { children, ...customMeta } = props;

  const router = useRouter();
  const meta = {
    title: 'Open Organization',
    description: `We fund and nurtures research and development aiming to build open models for decentralize sustainable organizations`,
    image: 'https://openorganization.org/og.png',
    type: 'website',
    ...customMeta
  };
  
  const ogImageTitle = meta.title === 'Filippo Benozzi - Front-end developer, Economic student, Musician.' ? 'default' : meta.title;
  const type = meta.type ? (meta.type === 'article' ? 'blog' : (meta.type != 'website' ? meta.type : undefined)) : undefined;
  const ogImage = 'https://og-image.filippo.im/api/'+encodeURIComponent(ogImageTitle.split("-")[0])+'?dark=false&link='+encodeURI(router.asPath)+'&date='+(meta.date ? encodeURI(format(parseISO(meta.date), 'MMMM dd, yyyy')) : '')+'&readTime='+(meta.readingTime ? encodeURI((meta.readingTime).split('read')[0]) : '')+'&pageType='+(type ? encodeURI(type.charAt(0).toUpperCase() + type.slice(1)) : '') +'&categories='+(meta.tags ? encodeURI(meta.tags) : '');

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
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <main>
        {children}
        <Footer />
      </main>
    </>
  );
}