import Navbar from '@/components/Navbar';
import Cover from '@/components/Cover';
import ProfileBioCard from '@/components/ProfileBioCard';
import Details from '@/components/Details';
import React from 'react';
import styles from '@/styles/Profile.module.css';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Modal from '@/components/Modal';
import Link from 'next/link';

function Freelancer_Profile() {
  const router = useRouter();
  const [freelancer, setFreelancer] = useState({});
  const [reviews, setReviews] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isFreelancerLoaded, setIsFreelancerLoaded] = useState(false);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg('http://localhost:3000/images/' + item);
  };

  const handelRotationRight = () => {
    const totalLength = freelancer.works.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = 'http://localhost:3000/images/' + freelancer.works[0];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = freelancer.works.filter((item) => {
      return freelancer.works.indexOf(item) === newIndex;
    });
    const newItem = 'http://localhost:3000/images/' + newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = freelancer.works.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = 'http://localhost:3000/images/' + freelancer.works[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = freelancer.works.filter((item) => {
      return freelancer.works.indexOf(item) === newIndex;
    });
    const newItem = 'http://localhost:3000/images/' + newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

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
        {isFreelancerLoaded && <Details works={freelancer.works} reviews={reviews} handleClick={handleClick} />}
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

export default Freelancer_Profile;