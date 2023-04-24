import styles from '../styles/login.module.css'
import Navbar from '@/components/Navbar'
import Head from 'next/head';
import Image from 'next/image'

export default function login() {
  return (
    <div className={styles.login}>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.navbar}>
        <Navbar color='black' />
      </div>
      <div className={styles.body}>
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
          <Image src="/pre.jpg" alt="login" height="1006" width="1000" />
        </div>
      </div>
    </div>
  )
}