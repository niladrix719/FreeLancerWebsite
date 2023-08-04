import '@/styles/globals.css';
import { useState } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [company, setCompany] = useState(null);
  return (
    <div>
      <Head>
        <title>Fipezo | Connecting Freelancers and Clients in India</title>
        <meta name="description" content="Discover top freelance talent and job opportunities in India at Fipezo, your premier platform for connecting skilled freelancers with employers. Find the perfect match for your projects or hire your expertise today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f1c1c" />
      </Head>
      <div>
        <Component {...pageProps} user={user} company={company} setCompany={setCompany} setUser={setUser} />
      </div>
    </div>
  );
};