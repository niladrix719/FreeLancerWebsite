import Navbar from '@/components/Navbar';
import styles from '../styles/My_requests.module.css';
import Footer from '@/components/Footer';
import HireCard from '@/components/HireCard';
import { useEffect, useState } from 'react';

export default function My_hires() {
  const [user, setUser] = useState(null);
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [hires, setHires] = useState([]);
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
          setUser(data);
          setIsUserLoaded(true);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    if (token) {
      fetch('http://localhost:3000/hires', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setHires(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [user,isUserLoaded]);

  return (
    <div className={styles.myRequests}>
      <Navbar />
      <div className={styles.requests}>
        <h1 className={styles.heading}>My Requests</h1>
        <div className={styles.requestsContainer}>
          {hires.map(hire => {
            return <HireCard key={hire.id} hire={hire} />
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}