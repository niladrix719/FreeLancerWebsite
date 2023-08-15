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
import DialogBox from '@/components/DialogBox';
import Modal from '@/components/Modal';

function Name(props) {
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
  const [copied, setCopied] = useState(false);
  const [showDialogBox, setShowDialogBox] = useState(false);
  const [showReviewDialogBox, setShowReviewDialogBox] = useState(false);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(`${process.env.SERVER_URL}/images/`+item);
  };

  const handelRotationRight = () => {
    const totalLength = freelancer.works.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = `${process.env.SERVER_URL}/images/`+freelancer.works[0];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = freelancer.works.filter((item) => {
      return freelancer.works.indexOf(item) === newIndex;
    });
    const newItem = `${process.env.SERVER_URL}/images/`+newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = freelancer.works.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = `${process.env.SERVER_URL}/images/`+freelancer.works[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = freelancer.works.filter((item) => {
      return freelancer.works.indexOf(item) === newIndex;
    });
    const newItem = `${process.env.SERVER_URL}/images/'+newUrl[0]`;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    if (token) {
      fetch(`${process.env.SERVER_URL}/profile`, {
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
        const response = await fetch(`${process.env.SERVER_URL}/profile/freelancer/${uid}`);
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
        const response = await fetch(`${process.env.SERVER_URL}/reviews/${freelancer._id}`);
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

  const copyURL = () => {
    const currentURL = window.location.origin + router.asPath;
    navigator.clipboard.writeText(currentURL).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    })
    .catch((error) => {
      console.error('Failed to copy URL:', error);
    });
  };

  const handleDialogBox = (val) => {
    setShowDialogBox(val);
  };

  const handleReviewDialogBox = (val) => {
    setShowReviewDialogBox(val);
  };

  return (
    <div className={styles.profile}>
      <Navbar color='white' checkLoggedIn={checkLoggedIn} user={props.user} company={props.company} setCompany={props.setCompany} setUser={props.setUser} />
      <Cover coverPicture={freelancer.coverPicture} />
      <div className={styles.btnBox2}>
          {!loggedIn && <Link href='/login' className={styles.btn} id={styles.hire}>Hire Me</Link>}
          {loggedIn && <button className={styles.btn} id={styles.hire} onClick={handleHireBox}>Hire Me</button>}
          {loggedIn && (
            <button className={styles.btn} id={styles.msg} onClick={() => handleReviewBox(true)}>
              Give Review
            </button>
          )}
          {!loggedIn && (
            <Link href='/login' className={styles.btn} id={styles.msg}>
              Give Review
            </Link>
          )}
          {reviewBox && (
            <div id={styles.boxContainer}>
              <ReviewBox handleReviewBox={handleReviewBox} appendReview={appendReview} freelancer={freelancer} setShowReviewDialogBox={setShowReviewDialogBox} />
            </div>
          )}
          {hireBox && (
            <div id={styles.boxContainer2}>
              <HireBox handleHireBox={handleHireBox} freelancer={freelancer} user={user} setShowDialogBox={setShowDialogBox} />
            </div>
          )}
        </div>
      {showDialogBox && <DialogBox title='Sent Successfully!' text='Your Request has been sent to the Freelancer. You will be contacted within 24hours via sms. If you have any queries fell free to reach out to us.' handleDialogBox={handleDialogBox} />}
      {showReviewDialogBox && <DialogBox title='Review Sent Successfully!' text="Thank you for the review. Your valuable feedback will help us enhance our services and better serve our clients." handleDialogBox={handleReviewDialogBox} />}
      <div className={styles.profile_details}>
        {freelancer.links && <ProfileBioCard freelancer={freelancer} copyURL={copyURL} copied={copied} />}
        {isFreelancerLoaded && <Details profession={freelancer.profession} works={freelancer.works} reviews={reviews} handleClick={handleClick} />}
        <div className={styles.btnBox}>
          {!loggedIn && <Link href='/login' className={styles.btn} id={styles.hire}>Hire Me</Link>}
          {loggedIn && <button className={styles.btn} id={styles.hire} onClick={handleHireBox}>Hire Me</button>}
          {loggedIn && (
            <button className={styles.btn} id={styles.msg} onClick={() => handleReviewBox(true)}>
              Give Review
            </button>
          )}
          {!loggedIn && (
            <Link href='/login' className={styles.btn} id={styles.msg}>
              Give Review
            </Link>
          )}
          {reviewBox && (
            <div id={styles.boxContainer} className=''>
              <ReviewBox handleReviewBox={handleReviewBox} appendReview={appendReview} freelancer={freelancer} setShowReviewDialogBox={setShowReviewDialogBox} />
            </div>
          )}
          {hireBox && (
            <div id={styles.boxContainer2}>
              <HireBox handleHireBox={handleHireBox} freelancer={freelancer} user={user} setShowDialogBox={setShowDialogBox} />
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