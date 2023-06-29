import Head from 'next/head';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Bio from '../components/Bio';
import Featured from '../components/Featured';
import Footer from '@/components/Footer';
import VerifiedExplore from '@/components/VerifiedExplore';
import Register from '@/components/Register';
import FreelancerPoints from '@/components/FreelancerPoints';
import BoxSection from '@/components/BoxSection';
export default function Index() {

  return (
    <div className='app'>
      <Navbar color='white' />
      <Header />
      <Categories />
      <Bio />
      <VerifiedExplore />
      <FreelancerPoints />
      <Register />
      <BoxSection />
      <Featured />
      <Footer />
    </div>
  )
}