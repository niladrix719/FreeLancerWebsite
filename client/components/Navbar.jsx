import styles from '../styles/Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import {
  faSortDown
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
  const [user, setUser] = useState(null);
  const [background, setBackground] = useState('transparent');
  const [color, setColor] = useState(props.color);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setColor('#000');
        setBackground('#fff');
      } else {
        setColor(props.color);
        setBackground('transparent');
      }
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('user');
      setUser(userData ? JSON.parse(userData) : null);
    }
  }, []);

  function handelLogout () {
    localStorage.removeItem('user');
    setUser(null);
  }

  return (
    <nav className={styles.navbar} style={{ color: color , backgroundColor: background }}>
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
            <FontAwesomeIcon className={styles.icon}
              icon={faSortDown}
              style={{ fontSize: 10, color: color }}
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
            <FontAwesomeIcon className={styles.icon}
              icon={faSortDown}
              style={{ fontSize: 10, color: color }}
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
          {user === null && <li><Link href='/login' className={styles.login}>Login</Link></li>}
          {user && <li className={styles.navElement} id={styles.user}>
            <span>{user ? `${user.firstname} ${user.lastname}` : ''}&nbsp;&nbsp;</span>
            <FontAwesomeIcon
              icon={faSortDown}
              style={{ fontSize: 10, color: props.color }}
            />
            <div className={styles.profile_card}>
              <Image src='/dp.png' width='90' height='90' className={styles.dp} alt='display picture' />
              <h1 className={styles.name}>{user ? `${user.firstname} ${user.lastname}` : ''}</h1>
              <p className={styles.number}>{user ? user.phone : ''}</p>
              <Link className={styles.btn} href='/profile'>My Profile</Link>
              <button className={styles.btn} type='button' onClick={handelLogout}>Log Out</button>
            </div>
          </li>}
        </ul>
      </div>
    </nav>
  )
}