import styles from '../styles/Header.module.css';
import Image from 'next/image';
import SearchBar from '../components/SearchBar';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headingText}>
      Hire
       Freelancer,
       Anywhere.
      </div>
      
      <SearchBar />

      <div className={styles.categories}>
        <div className={styles.category}>
          <Image src='/photographer.png' width='70' height='70' alt='photographer logo' />
          <p className={styles.minText}>Photographer</p>
        </div>
        <div className={styles.category}>
          <Image src='/cinematographerr.png' width='67' height='67' alt='cinematographer logo' />
          <p className={styles.minText}>Cinematographer</p>
        </div>
        <div className={styles.category}>
          <Image src='/drone.png' width='80' height='80' alt='cinematographer logo' />
          <p className={styles.minText}>Drone</p>
        </div>
      </div>
    </div>
  )
}