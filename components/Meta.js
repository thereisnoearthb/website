import Head from 'next/head';

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/TINEB.jpeg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/TINEB.jpeg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/TINEB.jpeg"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/assets/TINEB.jpeg"
        color="#2e4a79"
      />
      <link rel="shortcut icon" href="https://thereisnoearthb.org/assets/TINEB.jpeg" />
      <meta name="msapplication-TileColor" content="#2e4a79" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#2e4a79" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="twitter:site" content="@ThereIsNoEarthB" />
      <meta property="og:type" content="website" />
    </Head>
  );
}
