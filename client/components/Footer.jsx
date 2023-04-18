import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.upper}>
        <ul className={styles.about}>
          <li className={styles.heading}>About</li>
          <li className={styles.subHeading}>Who are we?</li>
          <li className={styles.subHeading}>Carrers</li>
          <li className={styles.subHeading}>Guides and Reviews</li>
        </ul>
        <ul className={styles.help}>
          <li className={styles.heading}>Help</li>
          <li className={styles.subHeading}>Contact Us</li>
          <li className={styles.subHeading}>FAQs</li>
        </ul>
        <ul className={styles.law}>
          <li className={styles.heading}>Law and Order</li>
          <li className={styles.subHeading}>Terms of service</li>
          <li className={styles.subHeading}>Data Protection</li>
          <li className={styles.subHeading}>Cookies</li>
          <li className={styles.subHeading}>Legal notices</li>
        </ul>
        <ul className={styles.Hello}>
          <li className={styles.heading}>Hello There!</li>
        </ul>
      </div>
      <hr className={styles.divider} />
      <div className={styles.lower}>
        <div className={styles.company}>
          <div className={styles.logo}>
            <h3>Fipezo</h3>
          </div>
          <div className={styles.copyri8}>
            <p>Copyright © 2023 Fipezo, All rights reserved.</p>
          </div>
        </div>
        <div className={styles.socials}>
          <Image src='/fb.png' alt='facebook' width={30} height={30} className={styles.social}></Image>
          <Image src='/insta.png' alt='Instagram' width={30} height={30} className={styles.social}></Image>
          <Image src='/twitter.png' alt='Twitter' width={30} height={30} className={styles.social}></Image>
          <Image src='/pinterest.png' alt='Pinterest' width={30} height={30} className={styles.social}></Image>
          <Image src='/yt.png' alt='Youtube' width={30} height={30} className={styles.social}></Image>
          <Image src='/linkedin.png' alt='Linkedin' width={30} height={30} className={styles.social}></Image>
        </div>
        <div className={styles.app}>
          <div className={styles.google_play}>
            Google Play
          </div>
          <div className={styles.app_store}>
            App Store
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;