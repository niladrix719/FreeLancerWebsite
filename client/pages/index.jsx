import Head from 'next/head';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Bio from '../components/Bio';
import Featured from '../components/Featured';
import Footer from '@/components/Footer';
import VerifiedExplore from '@/components/VerifiedExplore';
import Features from '@/components/Features';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Index() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log('useEffect');
    console.log(localStorage.getItem('user'));
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    if (token) {
      fetch('http://localhost:3000/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data.authData.postData);
          setUser(data.authData.postData);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);

  const handelLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  }

  return (
    <div className='app'>
      <Head>
        <title>Fipezo</title>
      </Head>
      <Navbar color='white' user={user} handelLogout={handelLogout} />
      <Header />
      <Categories />
      {/* <Features /> */}
      <Bio />
      <VerifiedExplore />
      {/* <Featured /> */}
      <Footer />
    </div>
  )
}