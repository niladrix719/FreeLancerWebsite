import Navbar from '@/components/Navbar';
import Cover from '@/components/Cover';
import ProfileBioCard from '@/components/ProfileBioCard';
import Details from '@/components/Details';
import React from 'react'
import styles from '@/styles/Profile.module.css'
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function name() {
  const router = useRouter();
  const { uid } = router.query;
  const [freelancer, setFreelancer] = useState({});

  useEffect(() => {
    async function fetchFreelancer() {
      try {
        const response = await fetch(`http://localhost:3000/profile/dhedh_15f72b9c3`);
        const data = await response.json();
        setFreelancer(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFreelancer();
  }, [uid]);

  return (
    <div className={styles.profile}>
      <Navbar color='white' />
      <Cover coverPicture={freelancer.coverPicture} />
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