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
    </div>
  )
}