import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/ibm-plex-sans-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#000000" />
        <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#000000"></link>
        <link
          href="/static/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <meta
          content="/static/favicons/browserconfig.xml"
          name="msapplication-config"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );

}