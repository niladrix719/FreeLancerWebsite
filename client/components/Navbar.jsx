import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

import {
  faSortDown
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        Fipezo
      </div>
      <div className={styles.right}>
        <ul className={styles.navigations}>
          <li className={styles.navElement}>
            <span>
              Register as a Freelancer&nbsp;&nbsp;
            </span>
          </li>

          <li className={styles.navElement}>
            <span>Help&nbsp;&nbsp;</span>
            <FontAwesomeIcon
              icon={faSortDown}
              style={{ fontSize: 10, color: "white" }}
            />
            <div className={styles.dropDown} id={styles.box}>
            <div className={styles.optionBox}>
                <h1 className={styles.mainText}>Contact Us</h1>
                <p className={styles.subText}>Reach out to use for an query or help</p>
              </div>
              <div className={styles.optionBox}>
                <h1 className={styles.mainText}>FAQs</h1>
                <p className={styles.subText}>Check out some asked questions</p>
              </div>
            </div>
          </li>
          <li><Link href='/login' className={styles.login}>Login</Link></li>
        </ul>
      </div>
    </nav>
  )
}