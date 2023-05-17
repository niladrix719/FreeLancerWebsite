import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '../styles/VerificationPanel.module.css'
import VerificationCard from '@/components/VerificationCard';
import { useEffect, useState } from 'react';
function VerificationPanel() {
  const [freelancers, setFreelancers] = useState([]);
  useEffect(() => {
    async function fetchFreelancer() {
      try {
        const response = await fetch(`http://localhost:3000/profiles/unverified/freelancer`);
        const data = await response.json();
        setFreelancers(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFreelancer();
  }, []);

  return (
    <div className={styles.verification}>
      <Navbar />
      <div className={styles.body}>
        <h1 className={styles.heading}>Verification Panel</h1>
        <div className={styles.cards}>
          {freelancers.map((freelancer, index) => {
            return (
              <VerificationCard key={index} profile={freelancer} />
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default VerificationPanel;