import Navbar from '@/components/Navbar';
import styles from '../styles/My_requests.module.css';
import Footer from '@/components/Footer';
import RequestCard from '@/components/RequestCard';
import { useEffect, useState } from 'react';

export default function My_requests() {
  const [freelancer, setFreelancer] = useState(null);
  const [isFreelancerLoaded, setIsFreelancerLoaded] = useState(false);
  const [requests, setRequests] = useState([]);
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
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    if (token) {
      fetch('http://localhost:3000/requests', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setRequests(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [freelancer,isFreelancerLoaded]);

  return (
    <div className={styles.myRequests}>
      <Navbar />
      <div className={styles.requests}>
        <h1 className={styles.heading}>My Requests</h1>
        <div className={styles.requestsContainer}>
          {requests.map(request => {
            return <RequestCard key={request.id} request={request} />
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}