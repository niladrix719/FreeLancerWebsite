import Image from 'next/image';
import styles from '../styles/SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
  return (
    <div>
      <div className={styles.searchBox}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type='text' className={styles.searchInput}></input>
      </div>
    </div>
  )
}