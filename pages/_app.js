import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <title>Makkani</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
