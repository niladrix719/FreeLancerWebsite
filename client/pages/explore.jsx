import ProfileCard from '@/components/ProfileCard';
import styles from '../styles/Explore.module.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { faCameraRetro, faVideo, faClapperboard } from '@fortawesome/free-solid-svg-icons';
import SearchBox from '@/components/SearchBox';
import Footer from '@/components/Footer';
import { use, useState } from 'react';
import PortfolioCards from '@/components/PortfolioCards';

function Explore() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const increPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const decrePage = () => {
    setCurrentPage(currentPage - 1);
  }

  // useEffect(() => {
  //   fetch(`http://localhost:3000/`)
  // });

  return (
    <div className={styles.explore}>
      <Navbar />
      <div className={styles.search}>
        <SearchBox border={true} />
      </div>
      <div className={styles.body}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.main}>
          <div className={styles.cards}>
            <ProfileCard />
          </div>
          <nav className={styles.nav}>
            <div className={styles.pages}>
              <button className={styles.btn} onClick={decrePage}>Back</button>
              <div className={styles.page} id={currentPage === 1 ? `${styles.current}` : ''}
                onClick={() => setCurrentPage(1)}
              >1</div>
              <div className={styles.page} id={currentPage === 2 ? `${styles.current}` : ''}
                onClick={() => setCurrentPage(2)}
              >2</div>
              <div className={styles.page} id={currentPage === 3 ? `${styles.current}` : ''}
                onClick={() => setCurrentPage(3)}
              >3</div>
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