import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.upper}>
        <ul className={styles.about}>
          <li className={styles.heading}>About</li>
          <Link href='/about_us' className={styles.subHeading}>About Us</Link>
          <Link href='/careers' className={styles.subHeading}>careers</Link>
          <li className={styles.subHeading}>Guides and Reviews</li>
        </ul>
        <ul className={styles.help}>
          <li className={styles.heading}>Help and Support</li>
          <Link href='/contact' className={styles.subHeading}>Support</Link>
          <Link href='/faqs' className={styles.subHeading}>FAQs</Link>
          <Link target='_blank' href='https://www.facebook.com/profile.php?id=100094694632348&sk=reviews' className={styles.subHeading}>Rate our Services</Link>
        </ul>
        <ul className={styles.law}>
          <li className={styles.heading}>Law and Order</li>
          <Link href="/terms_and_conditions"><span className={styles.subHeading} id={styles.subTerm}>Terms of service</span></Link>
          <Link href="/data_protection" className={styles.subHeading}>Data Protection</Link>
          <Link href="/privacy_and_policy" className={styles.subHeading}>Privacy Policy</Link>
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
          <Link className={styles.subHeading} target='_blank' href='https://www.facebook.com/people/Fipezo/100094694632348/?mibextid=ZbWKwL'>Facebook</Link>
          <Link className={styles.subHeading} target='_blank' href='https://www.instagram.com/fipezoindia'>Instagram</Link>
          <Link className={styles.subHeading} target='_blank' href='https://twitter.com/fipezoindia'>Twitter</Link>
        </ul>
      </div>
      <hr className={styles.divider} />
      <div className={styles.lower}>
        <div className={styles.company}>
          <Link className={styles.logo} href='/'>
            <i style={{fontWeight: '800', letterSpacing: '-0.5px'}}>Fipezo</i>
          </Link>
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
          <Link href='https://www.linkedin.com/in/fipezo' target='_blank'><Image src='/linkedin.png' alt='Linkedin' width={30} height={30} className={styles.social}></Image></Link>
        </div>
        <div className={styles.app}>
          <div className={styles.google_play}>
            <Link href='/google_play'><Image src='/google-play.png' alt='Google Play' width={130} height={130}></Image></Link>
          </div>
          <div className={styles.app_store}>
            <Link href='/app_store'><Image src='/apple-png.png' alt='App Store' width={130} height={130}></Image></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;