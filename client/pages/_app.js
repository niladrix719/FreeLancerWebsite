import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Fipezo</title>
        <meta name="description" content="A Freelance Website India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00aaff" />
        <link rel="icon" type="image/png" href="/icon.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};