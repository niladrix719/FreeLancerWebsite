import styles from '../styles/Categories.module.css';
import Image from 'next/image';

export default function Categories() {
  return (
    <div className={styles.categories}>
      <div className={styles.category}>
        <Image src='/photographer.png' width='75' height='75' alt='photographer logo' />
        <p className={styles.minText}>Photographer</p>
      </div>
      <div className={styles.category}>
        <Image src='/cinematographerr.png' width={72} height={72} alt='cinematographer logo' />
        <p className={styles.minText}>Cinematographer</p>
      </div>
      <div className={styles.category}>
        <Image src='/drone.png' width='90' height='90' alt='drone logo' />
        <p className={styles.minText}>Drone Operator</p>
      </div>
    </div>
  )
}