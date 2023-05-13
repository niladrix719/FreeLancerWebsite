import Navbar from '@/components/Navbar';
import Cover from '@/components/Cover';
import ProfileBioCard from '@/components/ProfileBioCard';
import Details from '@/components/Details';
import React from 'react'
import styles from '@/styles/Profile.module.css'
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Name() {
  const router = useRouter();
  const uid = router.query.name;
  const [freelancer, setFreelancer] = useState({});

  useEffect(() => {
    async function fetchFreelancer() {
      try {
        console.log(uid)
        const response = await fetch(`http://localhost:3000/profile/${uid}`);
        const data = await response.json();
        setFreelancer(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFreelancer();
  }, [uid]);

  return (
    console.log(freelancer),
    <div className={styles.profile}>
      <Navbar color='white' />
      <Cover coverPicture={freelancer.coverPicture} />
      <div className={styles.profile_details}>
        <ProfileBioCard profilePicture={freelancer.profilePicture} firstname={freelancer.firstname}
          lastname={freelancer.lastname} bio={freelancer.bio} equipments={freelancer.equipments}
        />
        <Details />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Name;