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
          <li className={styles.subHeading}>careers</li>
          <li className={styles.subHeading}>Guides and Reviews</li>
        </ul>
        <ul className={styles.help}>
          <li className={styles.heading}>Help and Support</li>
          <Link href='/contact' className={styles.subHeading}>Support</Link>
          <Link href='/faqs' className={styles.subHeading}>FAQs</Link>
        </ul>
        <ul className={styles.law}>
          <li className={styles.heading}>Law and Order</li>
          <Link href="/terms_and_conditions"><span className={styles.subHeading} id={styles.subTerm}>Terms of service</span></Link>
          <li className={styles.subHeading}>Data Protection</li>
          <li className={styles.subHeading}>Privacy Policy</li>
        </ul>
        <ul className={styles.law}>
          <li className={styles.heading}>Freelancing Services</li>
          <Link href='/explore/photographer' className={styles.subHeading}>Photographer</Link>
          <Link href='/explore/cinematographer' className={styles.subHeading}>Cinematographer</Link>
          <Link href='/explore/drone_operator' className={styles.subHeading}>Drone Operator</Link>
        </ul>
        <ul className={styles.law}>
          <li className={styles.heading}>Register as a</li>
          <Link className={styles.subHeading} href='/register/freelancer'>Freelancer</Link>
          <Link className={styles.subHeading} href='/register/company'>Company</Link>
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
            <i style={{fontWeight: '600'}}>Fipezo</i>
          </div>
          <div className={styles.copyri8}>
            <p>Copyright © 2023 Fipezo, All rights reserved.</p>
          </div>
        </div>
        <div className={styles.socials}>
          <Link href='https://www.facebook.com/people/Fipezo/100094694632348/?mibextid=ZbWKwL' target='_blank'><Image src='/fb.png' alt='facebook' width={30} height={30} className={styles.social}></Image></Link>
          <Link href='https://www.instagram.com/fipezoindia' target='_blank'><Image src='/insta.png' alt='Instagram' width={30} height={30} className={styles.social}></Image></Link>
          <Link href='https://twitter.com/fipezoindia' target='_blank'><Image src='/twitter.png' alt='Twitter' width={30} height={30} className={styles.social}></Image></Link>
          <Link href='https://in.pinterest.com/fipezoindia' target='_blank'><Image src='/pinterest.png' alt='Pinterest' width={30} height={30} className={styles.social}></Image></Link>
          <Link href='https://www.youtube.com/@Fipezo' target='_blank'><Image src='/yt.png' alt='Youtube' width={30} height={30} className={styles.social}></Image></Link>
          <Image src='/linkedin.png' alt='Linkedin' width={30} height={30} className={styles.social}></Image>
        </div>
        <div className={styles.app}>
          <div className={styles.google_play}>
            <Link href='/google_play'><Image src='/google-play.png' alt='Google Play' width={130} height={130}></Image></Link>
          </div>
          <div className={styles.app_store}>
            <Link href='/app_store'><Image src='/app_store.png' alt='App Store' width={130} height={130}></Image></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;