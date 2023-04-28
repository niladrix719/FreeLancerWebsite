import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.upper}>
        <ul className={styles.about}>
          <li className={styles.heading}>About</li>
          <Link href='/faqs' className={styles.subHeading}>Who are we?</Link>
          <li className={styles.subHeading}>Carrers</li>
          <li className={styles.subHeading}>Guides and Reviews</li>
        </ul>
        <ul className={styles.help}>
          <li className={styles.heading}>Help</li>
          <Link href='/contact' className={styles.subHeading}>Contact Us</Link>
          <Link href='/faqs' className={styles.subHeading}>FAQs</Link>
        </ul>
        <ul className={styles.law}>
          <li className={styles.heading}>Law and Order</li>
          <li className={styles.subHeading}>Terms of service</li>
          <li className={styles.subHeading}>Data Protection</li>
          <li className={styles.subHeading}>Cookies</li>
          <li className={styles.subHeading}>Legal notices</li>
        </ul>
        <ul id={styles.socials}>
          <li className={styles.heading}>Socials</li>
          <li className={styles.subHeading}>Facebook</li>
          <li className={styles.subHeading}>Instagram</li>
          <li className={styles.subHeading}>Twitter</li>
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
            <Image src='/google-play.png' alt='Google Play' width={130} height={130}></Image>
          </div>
          <div className={styles.app_store}>
            <Image src='/app_store.png' alt='App Store' width={130} height={130}></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;