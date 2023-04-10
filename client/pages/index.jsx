import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Categories from '../components/Categories';

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Categories />
    </div>
  )
}