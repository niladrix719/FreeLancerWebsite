import Navbar from '@/components/Navbar';
import Cover from '@/components/Cover';
import ProfileBioCard from '@/components/ProfileBioCard';
import Details from '@/components/Details';
import React from 'react'
import styles from '@/styles/Profile.module.css'

function profile() {
  return (
    <div className={styles.profile}>
        <Navbar />
        <Cover />
        <div className={styles.profile_details}>
          <ProfileBioCard />
          <Details />
        </div>
    </div>
  )
}

export default profile;