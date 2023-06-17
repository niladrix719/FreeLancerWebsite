import styles from '../styles/Categories.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Categories() {
  return (
    <div className={styles.categories}>
      <Link href='/explore/photographer' className={styles.category}>
        <Image src='/photographer.png' width='75' height='75' className={styles.image} alt='photographer logo' />
        <p className={styles.minText}>Photographer</p>
      </Link>
      <Link href='/explore/cinematographer' className={styles.category}>
        <Image src='/cinematographerr.png' width={72} height={72} className={styles.image} alt='cinematographer logo' />
        <p className={styles.minText}>Cinematographer</p>
      </Link>
      <Link href='/explore/drone_operator' className={styles.category}>
        <Image src='/drone.png' width='90' height='90' className={styles.image} alt='drone logo' />
        <p className={styles.minText}>Drone Operator</p>
      </Link>
    </div>
  )
}