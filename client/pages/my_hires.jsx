import Navbar from '@/components/Navbar';
import styles from '../styles/My_requests.module.css';
import Footer from '@/components/Footer';
import HireCard from '@/components/HireCard';
import { useEffect, useState } from 'react';
import DeleteBox from '@/components/DeleteBox';
import { useRouter } from 'next/router';

export default function My_hires(props) {
  const [user, setUser] = useState(null);
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [hires, setHires] = useState([]);
  const [showDeleteBox, setShowDeleteBox] = useState(false);
  const [reqId, setReqId] = useState(null);
  const router = useRouter();

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
          setIsUserLoaded(true);
        })
        .catch(error => {
          console.error(error);
        });
    }
    else{
      router.push('/login');
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    if (token) {
      fetch(`${process.env.SERVER_URL}/hires`, {
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
  }, [user, isUserLoaded]);

  const handleDeleteAccount = (id) => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    if (token) {
      fetch(`${process.env.SERVER_URL}/delete/request/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(res => res.json())
        .then(data => {
          if (data.success) {
            setShowDeleteBox(false);
            setReqId(null);
            setHires(hires.filter(hire => hire._id !== id));
          }
        }
        )
        .catch(error => {
          console.error(error);
        }
        );
    }
  }

  return (
    <div className={styles.myRequests}>
      <Navbar user={props.user} company={props.company} setCompany={props.setCompany} setUser={props.setUser} />
      <div className={styles.requests}>
        <h1 className={styles.heading}>My Requests</h1>
        <div className={styles.requestsContainer}>
          {hires.map((hire, i) => {
            return <HireCard setReqId={setReqId} setShowDeleteBox={setShowDeleteBox} key={i} hire={hire} />
          })}
        </div>
        {showDeleteBox && <div className={styles.deleteBox}>
          <DeleteBox reqId={reqId} setShowDeleteBox={setShowDeleteBox} handleDeleteAccount={handleDeleteAccount} delete='Request' />
        </div>}
      </div>
      <Footer />
    </div>
  )
}