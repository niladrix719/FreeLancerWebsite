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
  const uid = router.query.name;
  const [freelancer, setFreelancer] = useState({});
  const [reviewBox, setReviewBox] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [hireBox, setHireBox] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isFreelancerLoaded, setIsFreelancerLoaded] = useState(false);
  const [user, setUser] = useState(null);

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
        const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
        const response = await fetch('http://localhost:3000/requests', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setRequests(data);
      } catch (error) {
        console.error(error);
      }
    }
  
    if (isFreelancerLoaded) {
      fetchReviews();
    }
  }, [freelancer, isFreelancerLoaded]);  

  const handleReviewBox = (val) => {
    setReviewBox(val);
  };

  const handleHireBox = (val) => {
    setHireBox(val);
  };

  const appendReview = (review) => {
    setReviews([...reviews, review]);
  };

  const checkLoggedIn = (val) => {
    setLoggedIn(val);
  };

  return (
    <div className={styles.profile}>
      <Navbar color='white' checkLoggedIn={checkLoggedIn} />
      <Cover coverPicture={freelancer.coverPicture} />
      <div className={styles.profile_details}>
        {freelancer.links && <ProfileBioCard freelancer={freelancer} />}
        {isFreelancerLoaded && <Details works={freelancer.works} reviews={reviews} />}
        <div className={styles.btnBox}>
          {/* <button className={styles.btn} id={styles.hire} onClick={handleHireBox}>Hire</button> */}
          {/* {loggedIn && (
            <button className={styles.btn} id={styles.msg} onClick={() => handleReviewBox(true)}>
              Review
            </button>
          )}
          {!loggedIn && (
            <Link href='/login' className={styles.btn} id={styles.msg}>
              Review
            </Link>
          )}
          {reviewBox && (
            <div id={styles.boxContainer} className=''>
              <ReviewBox handleReviewBox={handleReviewBox} appendReview={appendReview} freelancer={freelancer} />
            </div>
          )}
          {hireBox && (
            <div id={styles.boxContainer2}>
              <HireBox handleHireBox={handleHireBox} freelancer={freelancer} user={user} />
            </div>
          )} */}
          <Link className={styles.btn} id={styles.hire} href='/my_requests'>Requests</Link>
          <div className={styles.btn} id={styles.msg}>
            Edit
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