import 'styles/global.scss';
import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Script async defer
        strategy="afterInteractive"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_DOMAIN_ID}
        src={`${process.env.NEXT_PUBLIC_UMAMI_HOST}/umami.js`}
        data-domains="openorganization.org"
      />
      <Component {...pageProps} />
    </>
  );
}