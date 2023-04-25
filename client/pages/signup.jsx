import styles from '../styles/Signup.module.css'
import Navbar from '@/components/Navbar'

function Signup() {
  return (
    <div className={styles.signup}>
      <Navbar />
      <form method="post" action='http://localhost:3000/signup' className={styles.form}>
        <div>
          <h1 className={styles.heading}>Welcome</h1>
          <p className={styles.subHeading}>Sign Up For a Free Account</p>
        </div>
        <div id={styles.name}>
          <label htmlFor="name">Name : </label>
          <input className={styles.inputs} type='text' placeholder='Enter Your name' id='name' name='name' /> <br />
        </div>
        <div id={styles.phone}>
          <label htmlFor="phone">Phone : </label>
          <input className={styles.inputs} type='number' id={styles.number} placeholder='Enter Your Phone no.' name='phone' /> <br />
        </div>
        <div>
          <button type='submit' className={styles.btn}>Submit</button>
        </div>
      </form>
      <div className={styles.presentation}>
        <img src="/pre.jpg" alt="login" />
      </div>
    </div>
  )
}

export default Signup;