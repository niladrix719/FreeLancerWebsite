import ProfileCard from '@/components/ProfileCard';
import styles from '../../styles/Explore.module.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import SearchBox from '@/components/SearchBox';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

function Explore() {
  const [currentPage, setCurrentPage] = useState(1);
  const [freelancers, setFreelancers] = useState([]);
  const [showPhotographers, setShowPhotographers] = useState(true);
  const [showCinematographers, setShowCinematographers] = useState(false);
  const [showDroneOperators, setShowDroneOperators] = useState(false);
  const [rateSort, setRateSort] = useState('1000');

  const increPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const decrePage = () => {
    setCurrentPage(currentPage - 1);
  }

  useEffect(() => {
    async function fetchFreelancer() {
      try {
        const response = await fetch(`https://fipezo-server.vercel.app/profiles/verified/freelancer`);
        const data = await response.json();
        setFreelancers(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFreelancer();
  }, []);

  const filteredFreelancers = freelancers.filter((freelancer) => {
    if (!showPhotographers && !showCinematographers && !showDroneOperators) {
      return true;
    }
    if (showPhotographers && showCinematographers && showDroneOperators) {
      return (
        freelancer.profession === 'photographer' ||
        freelancer.profession === 'cinematographer' ||
        freelancer.profession === 'drone_operator'
      );
    }
    if (showPhotographers && showCinematographers) {
      return (
        freelancer.profession === 'photographer' ||
        freelancer.profession === 'cinematographer'
      );
    }
    if (showPhotographers && showDroneOperators) {
      return (
        freelancer.profession === 'photographer' ||
        freelancer.profession === 'drone_operator'
      );
    }
    if (showCinematographers && showDroneOperators) {
      return (
        freelancer.profession === 'cinematographer' ||
        freelancer.profession === 'drone_operator'
      );
    }
    if (showPhotographers) {
      return freelancer.profession === 'photographer';
    }
    if (showCinematographers) {
      return freelancer.profession === 'cinematographer';
    }
    if (showDroneOperators) {
      return freelancer.profession === 'drone_operator';
    }
    return true;
  });

  const filtered = filteredFreelancers.filter((freelancer) => {
    if (freelancer.rate <= rateSort) {
      return true;
    }
    return false;
  });

  const pages = Math.ceil(filtered.length / 5);
  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  const displayedFreelancers = filtered.slice(startIndex, endIndex);

  return (
    <div className={styles.explore}>
      <Navbar />
      <div className={styles.search}>
        <SearchBox border={true} />
      </div>
      <div className={styles.body}>
        <div className={styles.sidebar}>
          <Sidebar
            setShowPhotographers={setShowPhotographers}
            setShowCinematographers={setShowCinematographers}
            setShowDroneOperators={setShowDroneOperators}
            showPhotographers={showPhotographers}
            showCinematographers={showCinematographers}
            showDroneOperators={showDroneOperators}
            setRateSort={setRateSort}
            rateSort={rateSort}
          />
        </div>
        <div className={styles.main}>
          <div className={styles.cards}>
            {displayedFreelancers.map((freelancer, index) => {
              return (
                <ProfileCard key={index} profile={freelancer} />
              )
            })}
          </div>
          <nav className={styles.nav}>
            <div className={styles.pages}>
              <button className={styles.btn} onClick={decrePage}>Back</button>
              {Array.from({ length: pages }, (_, index) => (
                <div
                  className={styles.page}
                  style={currentPage === index + 1 ? { backgroundColor: 'black', color: 'white' } : {}}
                  onClick={() => setCurrentPage(index + 1)}
                  key={index}
                >
                  <span>{index + 1}</span>
                </div>
              ))}
              <button className={styles.btn} onClick={increPage}>Next</button>
            </div>
          </nav>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Explore;