import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="antialiased">
      <Head>
        <meta content="#f5f7fa" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <link href="/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/favicons/site.webmanifest" rel="manifest" />
        <link
          href="/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#ffffff"
          href="/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
