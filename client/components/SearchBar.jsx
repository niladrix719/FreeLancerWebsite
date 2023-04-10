import Image from 'next/image';
import styles from '../styles/SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function SearchBar() {
  return (
    <div>
      <div className={styles.searchBox}>
        <button className={styles.searchIcon}>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{color : 'white'}} />
        </button>
        <input type='text' className={styles.searchInput} placeholder='Search for services'></input>
      </div>
      <div className={styles.suggestions}>
        <Link className={styles.link} href='/photographer'>Photographer, </Link> &nbsp;
        <Link className={styles.link} href='/cinematographer'>Cinematographer, </Link> &nbsp;
        <Link className={styles.link} href='/droneOperator'>Drone Operator</Link>
      </div>
    </div>
  )
}