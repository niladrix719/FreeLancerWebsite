import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/login.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function login() {
  return (
    <div className={styles.login}>
      <div className={styles.form}>
        <form>
          <label for='email' className={styles.labels}>Email: </label>
          <input className={styles.inputs} type='text' placeholder='Enter Your Email' /> <br/>
          <label for='password' className={styles.labels}>Password: </label>
          <input className={styles.inputs} type='password' placeholder='Enter Your Password' /> <br/>
          <button className={styles.btn}>Log In</button>
        </form>
      </div>
    </div>
  )
}