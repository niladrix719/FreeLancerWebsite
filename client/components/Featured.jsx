import styles from '../styles/Featured.module.css'
import ProfileCard from './ProfileCard';
import { faCameraRetro, faVideo, faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function Featured() {
  const [freelancers, setFreelancers] = useState([]);

  useEffect(() => {
    async function fetchFreelancer() {
      try {
        const response = await fetch(`http://localhost:3000/profiles/featured/freelancer`);
        const data = await response.json();
        setFreelancers(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFreelancer();
  }, []);

  return (
    <div className={styles.featured}>
      <h1 className={styles.heading}>Featured Freelancers</h1>
      <p className={styles.subHeading}>Discover Skilled Freelancers on Our Platform</p>
      <div className={styles.cards}>
        {freelancers.map((freelancer, index) => {
          return (
            <ProfileCard key={index} profile={freelancer} />
          )
        })}
      </div>
    </div>
  )
}