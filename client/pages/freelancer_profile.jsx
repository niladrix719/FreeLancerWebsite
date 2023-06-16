import Navbar from '@/components/Navbar';
import Cover from '@/components/Cover';
import ProfileBioCard from '@/components/ProfileBioCard';
import Details from '@/components/Details';
import React from 'react';
import styles from '@/styles/Profile.module.css';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReviewBox from '@/components/ReviewBox';
import HireBox from '@/components/HireBox';
import Link from 'next/link';

function Freelancer_Profile() {
  const router = useRouter();
  const [freelancer, setFreelancer] = useState({});
  const [reviews, setReviews] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isFreelancerLoaded, setIsFreelancerLoaded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    if (token) {
      fetch('http://localhost:3000/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setFreelancer(data);
          setIsFreelancerLoaded(true);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(`http://localhost:3000/reviews/${freelancer._id}`);
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    }

    if (isFreelancerLoaded) {
      fetchReviews();
    }
  }, [freelancer, isFreelancerLoaded]);

  const checkLoggedIn = (val) => {
    setLoggedIn(val);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/');  
  }

  return (
    <div className={styles.profile}>
      <Navbar color='white' checkLoggedIn={checkLoggedIn} />
      <Cover coverPicture={freelancer.coverPicture} />
      <div className={styles.profile_details}>
        {freelancer.links && <ProfileBioCard freelancer={freelancer} />}
        {isFreelancerLoaded && <Details works={freelancer.works} reviews={reviews} />}
        <div className={styles.btnBox}>
          <Link className={styles.btn} id={styles.hire} href='/my_requests'>Requests</Link>
          <div className={styles.btn} id={styles.logout} onClick={handleLogout}>
            Log Out
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Freelancer_Profile;