import styles from '@/styles/Login.module.css';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
            <input className={styles.inputs} id={styles.number} type='number' placeholder='Enter Your Phone no.' /> <br />
          </div>
          <div>
            <button className={styles.btn}>Send OTP</button>
          </div>
          <div className={styles.lower}>
            <Link href='/signup' className={styles.signup}>Don&apos;t have an Account? Sign up now</Link>
          </div>
        </form>
        <div className={styles.presentation}>
          <Image src="/pre.jpg" alt="login" height="1006" width="1000" />
        </div>
      </div>
    </div>
  )
}