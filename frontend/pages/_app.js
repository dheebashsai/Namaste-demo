import "../styles/global.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> AYUSYNC</title>

        {/* Standard favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Apple devices */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Android + PWA */}
        <link rel="manifest" href="/android-chrome.png" />
        <link rel="manifest" href="/android-chrome2.png" />

        {/* Theme colors */}
        <meta name="theme-color" content="#16a34a" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
