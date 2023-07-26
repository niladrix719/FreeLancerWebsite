import '@/styles/globals.css';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [company, setCompany] = useState(null);
  return (
    <div>
      <Component {...pageProps} user={user} company={company} setCompany={setCompany} setUser={setUser} />
    </div>
  );
};