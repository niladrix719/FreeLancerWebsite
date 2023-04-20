import Head from 'next/head';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Bio from '../components/Bio';
import Featured from '../components/Featured';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className='app'>
      <Head>
        <title>Fipezo</title>
      </Head>
      <Navbar />
      <Header />
      <Categories />
      <Bio />
      <Featured />
      <Footer />
    </div>
  )
}