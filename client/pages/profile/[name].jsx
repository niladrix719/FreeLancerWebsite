import Navbar from '@/components/Navbar';
import Cover from '@/components/Cover';
import ProfileBioCard from '@/components/ProfileBioCard';
import Details from '@/components/Details';
import React from 'react'
import styles from '@/styles/Profile.module.css'
import Footer from '@/components/Footer';

function name() {
  return (
    <div className={styles.profile}>
      <Navbar color='white' />
      <Cover />
      <div className={styles.profile_details}>
        <ProfileBioCard />
        <Details />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default name;