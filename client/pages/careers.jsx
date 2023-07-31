import React from 'react';
import styles from '../styles/Careers.module.css';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

function Careers(props) {
  return (
    <div className={styles.careersPage}>
      <Navbar color='black' user={props.user} company={props.company} setCompany={props.setCompany} setUser={props.setUser} />
      <div className={styles.body}>
        <h1 className={styles.h1}>Join Our Team</h1>
        <div className={styles.imageContainer}>
          <Image
            src='/careers.webp'
            alt="No Jobs Available"
            width={500}
            height={500}
          />
        </div>

        <div className={`flex flex-col items-center ${styles.p}`}>
          <h2>Current Job Openings:</h2><br />
          <ul className='flex justify-evenly w-4/6'>
            <li>
              <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
                Web Developer
              </button>
            </li>
            <li>
              <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>
                UI/UX Designer
              </button>
            </li>
            <li>
              <button className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded'>
                App Developer
              </button>
            </li>
            <li>
              <button className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded'>
                Management
              </button>
            </li>
            <li>
              <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'>
                Operations Head
              </button>
            </li>
          </ul>
        </div>

        <p className={styles.p}>
          We are hiring! If you are a talented individual looking for exciting opportunities, we&apos;d love to hear from you.
        </p>
        <p className={styles.p}>
          Feel free to send us your resume for future consideration at <Link href='mailto:careers@fipezo.com'>careers@fipezo.com</Link>.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Careers;