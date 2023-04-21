import styles from '../styles/Signup.module.css'
import Navbar from '@/components/Navbar'

function Signup() {
  return (
    <div className={styles.login}>
      <Navbar />
      <form method="post" action='/login' className={styles.form}>
        <div>
          <h1 className={styles.heading}>Welcome</h1>
          <p className={styles.subHeading}>Sign Up For a Free Account</p>
        </div>
        <div id={styles.name}>
          {/* <label htmlFor="name">Name : </label> */}
          <input className={styles.inputs} type='text' placeholder='Enter Your name' id='name' /> <br />
        </div>
        <div id={styles.phone}>
          <label htmlFor="phone">+91</label>
          <input className={styles.inputs} type='text' placeholder='Enter Your Phone no.' id='phone' /> <br />
        </div>
        <div>
          <button className={styles.btn}>Send OTP</button>
        </div>
      </form>
      <div className={styles.presentation}>
        <img src="/pre2.jpg" alt="login" />
      </div>
    </div>
  )
}

export default Signup