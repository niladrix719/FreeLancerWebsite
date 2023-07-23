import styles from '../styles/VerifiedExplore.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

function VerifiedExplore() {
  return (
    <div className={styles.verified}>
      <div className={styles.text}>
        <h1 className={styles.heading}>
          Explore All <span className={styles.span}>Verified Freelancers</span> And Find The Best Talent For Your Project Needs.
        </h1>
        <Link className={styles.btn} href='/explore'>Explore Freelancers &nbsp;&nbsp;
          <BsArrowRight id={styles.arrow} />
        </Link>
      </div>
      <div className={styles.image}>
        <Image src='/verifiedPX.svg' width='300' height='300' alt='verified tick' />
      </div>
    </div>
  )
}

export default VerifiedExplore;