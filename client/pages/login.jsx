import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/login.module.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function login() {
  return (
    <div className={styles.login}>
      <Navbar />
      <form method="post" action='/login' className={styles.form}>
        <div>
          <h1 className={styles.heading}>Welcome</h1>
          <p className={styles.subHeading}>Log In To Your Account</p>
        </div>
        <div id={styles.phone}>
          <div className={styles.countryCode}>
            +91
          </div>
          <input className={styles.inputs} type='text' placeholder='Enter Your Phone no.' /> <br />
        </div>
        <div>
          <button className={styles.btn}>Send OTP</button>
        </div>
      </form>
      <div className={styles.presentation}>
        <img src="/pre1.jpg" alt="login" />
      </div>
    </div>
  )
}