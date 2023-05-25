import Navbar from '@/components/Navbar';
import Cover from '@/components/Cover';
import ProfileBioCard from '@/components/ProfileBioCard';
import Details from '@/components/Details';
import React from 'react'
import styles from '@/styles/Profile.module.css'
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReviewBox from '@/components/ReviewBox';

function Name() {
  const router = useRouter();
  const uid = router.query.name;
  const [freelancer, setFreelancer] = useState({});
  const [reviewBox, setReviewBox] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchFreelancer() {
      try {
        const response = await fetch(`http://localhost:3000/profile/freelancer/${uid}`);
        const data = await response.json();
        setFreelancer(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFreelancer();
  }, [uid]);

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

    fetchReviews();
  }, [freelancer, reviews]);

  const handleReviewBox = (val) => {
    setReviewBox(val);
  }

  const appendReview = (review) => {
    setReviews([...reviews, review]);
  }

  return (
    <div className={styles.profile}>
      <Navbar color='white' />
      <Cover coverPicture={freelancer.coverPicture} />
      <div className={styles.profile_details}>
        <ProfileBioCard profilePicture={freelancer.profilePicture} firstname={freelancer.firstname}
          lastname={freelancer.lastname} bio={freelancer.bio} equipments={freelancer.equipments}
          location={freelancer.location}
        />
        <Details works={freelancer.works} reviews={reviews} />
        <div className={styles.btnBox}>
          <button className={styles.btn} id={styles.hire}>Hire</button>
          <button className={styles.btn} id={styles.msg} onClick={() => handleReviewBox(true)}>Review</button>
          {reviewBox && <div className={styles.boxContainer}>
            <ReviewBox handleReviewBox={handleReviewBox} appendReview={appendReview} freelancer={freelancer} />
          </div>}
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Name;