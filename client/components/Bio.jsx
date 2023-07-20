import Image from 'next/image'
import styles from '../styles/Bio.module.css'
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Bio() {
  return (
    <div className={styles.bio}>
      <div className={styles.fade}>
        <div className={styles.picturesNText}>
          <div className={styles.pictures}>
            <h1 className={styles.heading} id={styles.head}>One-Stop Platform for Freelance Talent</h1>
            <p className={styles.subHeading}>Find the Right Freelancer for Your Project with Our Easy-to-Use Platform</p>
            <button className={styles.button}><span className={styles.location}><FontAwesomeIcon icon={faLocationDot} /></span><span className={styles.span}>India</span></button>
          </div>
          <div className={styles.Text}>
            <h1 className={styles.boxtext}>Fipezo</h1>
            <h1 className={styles.boxheading}>All Verified Freelancers</h1>
            <div className={styles.container}>
            <p className={styles.boxsubheading}> we believe in quality over quantity. That&apos;s why we carefully verify each freelancer on our platform,
              so you can trust that you&apos;re working with skilled professionals who are committed to delivering top-notch results.</p>
            </div>
            <div className={styles.images}>
              <Image id={styles.photographer} src='/person1.jpg' width={300} height={300} alt='image' />
              <Image id={styles.cinematographer} src='/cover05.jpg' width={300} height={300} alt='image' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.circle}></div>
    </div>
  )
}