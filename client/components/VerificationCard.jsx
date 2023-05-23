import styles from '../styles/VerificationCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function VerificationCard(props) {
  const [screen, setScreen] = useState('');
  const work1 = props.profile.works[0];
  const work2 = props.profile.works[1];
  const work3 = props.profile.works[2];
  const work4 = props.profile.works[3];
  const work5 = props.profile.works[4];
  const work6 = props.profile.works[5];
  const work7 = props.profile.works[6];
  const work8 = props.profile.works[7];
  const aadhaarCard = props.profile.aadhaarCard;
  const panCard = props.profile.panCard;
  const profession = props.profile.profession.charAt(0).toUpperCase() + props.profile.profession.slice(1);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/delete/freelancer/${props.profile._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      props.updateFreelancers(data.id);
    } catch (error) {
      console.error(error);
    }
  }

  const handelVerify = async () => {
    try {
      const response = await fetch(`http://localhost:3000/verify/freelancer/${props.profile._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      props.updateFreelancers(data.id);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.verificationCard}>
      <div className={styles.details}>
        <div className={styles.cover}
          style={{ backgroundImage: `url(http://localhost:3000/uploads/${props.profile.coverPicture})` }}>
        </div>
        <div className={styles.profileImg}>
          <Image className={styles.image} src={`http://localhost:3000/uploads/${props.profile.profilePicture}`}
            height='600' width='600' alt="profile-image"
          />
        </div>
        <div className={styles.socials}>
          <Image className={styles.social} src='/facebook.png' width='160' height='160' alt='facebook'/>
          <Image className={styles.social} src='/instagramC.png' width='160' height='160' alt='instagram'/>
          <Image className={styles.social} src='/twitterC.png' width='160' height='160' alt='twitter'/>
          <Image className={styles.social} src='/youtube.png' width='160' height='160' alt='youtube'/>
        </div>
        <div className={styles.fields}>
          <div className={styles.field}>
            <h1>Name : {props.profile.firstname} {props.profile.lastname}</h1>
          </div>
          <div className={styles.field}>
            <h1>Phone : {props.profile.phone}</h1>
          </div>
          <div className={styles.field}>
            <h1>Location : {props.profile.location}</h1>
          </div>
          <div className={styles.field}>
            <h1>Profession : {profession}</h1>
          </div>
          <div className={styles.field}>
            <h1>Rate/hr : Rs.{props.profile.rate}</h1>
          </div>
          <div className={styles.field}>
            <h1>Bio : {props.profile.bio}</h1>
          </div>
          <div className={styles.field}>
            <h1>Equipments : {props.profile.equipments}</h1>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card} onClick={() => setScreen(aadhaarCard)}>
            <h1>Aadhaar Card</h1>
          </div>
          <div className={styles.card} onClick={() => setScreen(panCard)}>
            <h1>Pan Card</h1>
          </div>
        </div>
        <div className={styles.works}>
          <div className={styles.work} onClick={() => setScreen(work1)}>
            <h1>Work 1</h1>
          </div>
          <div className={styles.work} onClick={() => setScreen(work2)}>
            <h1>Work 2</h1>
          </div>
          <div className={styles.work} onClick={() => setScreen(work3)}>
            <h1>Work 3</h1>
          </div>
          <div className={styles.work} onClick={() => setScreen(work4)}>
            <h1>Work 4</h1>
          </div>
          <div className={styles.work} onClick={() => setScreen(work5)}>
            <h1>Work 5</h1>
          </div>
          <div className={styles.work} onClick={() => setScreen(work6)}>
            <h1>Work 6</h1>
          </div>
          <div className={styles.work} onClick={() => setScreen(work7)}>
            <h1>Work 7</h1>
          </div>
          <div className={styles.work} onClick={() => setScreen(work8)}>
            <h1>Work 8</h1>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.screen}
          style={{ backgroundImage: `url(http://localhost:3000/uploads/${screen})` }}
        >
        </div>
        <div className={styles.btns}>
          <button className={styles.btn} id={styles.verify} onClick={handelVerify}>Verify</button>
          <button className={styles.btn} id={styles.delete} onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default VerificationCard;