import styles from '../styles/VerifiedExplore.module.css';
import Image from 'next/image';
import Link from 'next/link';

function VerifiedExplore() {
  return (
    <div className={styles.verified}>
      <div className={styles.text}>
        <h1 className={styles.heading}>Explore all the verified freelancers And Find the best talent for your project needs.</h1>
        <Link className={styles.btn} href='/explore'>Explore Freelancers</Link>
      </div>
      <div className={styles.image}>
      <Image src='/verified.png' width='300' height='300' />
      </div>
    </div>
  )
}

export default VerifiedExplore;