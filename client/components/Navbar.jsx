import styles from '../styles/Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import Image from 'next/image';

import {
  faSortDown
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
  return (
    <nav className={styles.navbar} style={{color: props.color}}>
      <div className={styles.left}>
        <Link href='/'>Fipezo</Link>
      </div>
      <div className={styles.right}>
        <ul className={styles.navigations}>
          <Link className={styles.navElement} href='/'>
            <span>
              Home&nbsp;&nbsp;
            </span>
          </Link>
          <li className={styles.navElement}>
            <span>
              Register&nbsp;&nbsp;
            </span>
            <FontAwesomeIcon
              icon={faSortDown}
              style={{ fontSize: 10, color: props.color }}
            />
            <div className={styles.dropDown} id={styles.box}>
              <Link className={styles.optionBox} href='/register/freelancer'>
                <h1 className={styles.mainText}>As a Freelancer</h1>
                <p className={styles.subText}>Empowering Your Career: Registering as a Freelancer</p>
              </Link>
              <Link className={styles.optionBox} href='/register/company'>
                <h1 className={styles.mainText}>As a Company</h1>
                <p className={styles.subText}>Building Success: Registering Your Company</p>
              </Link>
            </div>
          </li>

          <li className={styles.navElement}>
            <span>Help&nbsp;&nbsp;</span>
            <FontAwesomeIcon
              icon={faSortDown}
              style={{ fontSize: 10, color: props.color }}
            />
            <div className={styles.dropDown} id={styles.box}>
              <Link className={styles.optionBox} href='/contact'>
                <h1 className={styles.mainText}>Contact Us</h1>
                <p className={styles.subText}>Reach out to use for an query or help</p>
              </Link>
              <Link className={styles.optionBox} href='/faqs'>
                <h1 className={styles.mainText}>FAQs</h1>
                <p className={styles.subText}>Check out some asked questions</p>
              </Link>
            </div>
          </li>
          {/* <li><Link href='/login' className={styles.login}>Login</Link></li> */}
          <li className={styles.navElement} id={styles.user}>
            <span>Niladri Adhikary&nbsp;</span>
            <FontAwesomeIcon
              icon={faSortDown}
              style={{ fontSize: 10, color: props.color }}
            />
            <div className={styles.profile_card}>
              <Image src='/dp.png' width='90' height='90' className={styles.dp} alt='display picture' />
              <h1 className={styles.name}>Niladri Adhikary</h1>
              <p className={styles.number}>7001599126</p>
              <Link className={styles.btn} href='/profile'>My Profile</Link>
              <button className={styles.btn}>Log Out</button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}