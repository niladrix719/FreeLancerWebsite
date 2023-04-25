import styles from '@/styles/VerifyOTP.module.css'
import Navbar from '@/components/Navbar';
import Image from 'next/image'

function verifyOTP() {
  return (
    <div>
      <div className={styles.navbar}>
        <Navbar color='black' />
      </div>
      <div className={styles.body}>
        <form method="post" action='/verify_otp' className={styles.form}>
          <div>
            <h1 className={styles.heading}>Welcome</h1>
            <p className={styles.subHeading}>Enter a one-time password (OTP) to verify</p>
          </div>
          <div id={styles.otp}>
            {/* <label className={styles.label} htmlFor="otp">OTP</label> */}
            <input className={styles.inputs} type="text" name="otp" id="otp" placeholder="Enter OTP" />
          </div>
          <div>
            <button className={styles.btn}>Submit</button>
          </div>
          <div className={styles.lower}>
            <p className={styles.resendOtp}>Resend OTP?</p>
          </div>
        </form>
        <div className={styles.presentation}>
          <Image src="/pre.jpg" alt="login" height="1006" width="1000" />
        </div>
      </div>
    </div>
  )
}

export default verifyOTP