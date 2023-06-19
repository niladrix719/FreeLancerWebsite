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
import Modal from '@/components/Modal';

function Name() {
  const router = useRouter();
  const uid = router.query.name;
  const [freelancer, setFreelancer] = useState({});
  const [reviewBox, setReviewBox] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [hireBox, setHireBox] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isFreelancerLoaded, setIsFreelancerLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg('https://fipezo-server.vercel.app/uploads/'+item);
  };

  const handelRotationRight = () => {
    const totalLength = freelancer.works.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = 'https://fipezo-server.vercel.app/uploads/'+freelancer.works[0];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = freelancer.works.filter((item) => {
      return freelancer.works.indexOf(item) === newIndex;
    });
    const newItem = 'https://fipezo-server.vercel.app/uploads/'+newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = freelancer.works.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = 'https://fipezo-server.vercel.app/uploads/'+freelancer.works[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = freelancer.works.filter((item) => {
      return freelancer.works.indexOf(item) === newIndex;
    });
    const newItem = 'https://fipezo-server.vercel.app/uploads/'+newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    if (token) {
      fetch('https://fipezo-server.vercel.app/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      })
        .then(res => res.json())
        .then(data => {
          setUser(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);

  useEffect(() => {
    async function fetchFreelancer() {
      try {
        const response = await fetch(`https://fipezo-server.vercel.app/profile/freelancer/${uid}`);
        const data = await response.json();
        if (data.error) {
          router.push('/404');
        }
        setFreelancer(data);
        setIsFreelancerLoaded(true);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFreelancer();
  }, [uid]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(`https://fipezo-server.vercel.app/reviews/${freelancer._id}`);
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
        {isFreelancerLoaded && <Details works={freelancer.works} reviews={reviews} handleClick={handleClick} />}
        <div className={styles.btnBox}>
          {!loggedIn && <Link href='/login' className={styles.btn} id={styles.hire}>Hire</Link>}
          {loggedIn && <button className={styles.btn} id={styles.hire} onClick={handleHireBox}>Hire</button>}
          {loggedIn && (
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
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </div>
    </div>
  );
}

export default Name;