import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Login.module.css';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { useState , useEffect } from 'react';

export default function Login(props) {
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('user');
  const [otpForm, setOtpForm] = useState(false);
  const router = useRouter();
  const [loginFailed, setLoginFailed] = useState(false);
  const [otpFailed, setOtpFailed] = useState(false);
  const [count, setCount] = useState(120);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    if (count === 0) {
      clearInterval(timerId);
    }
  }, [count]);

  const startCountdown = () => {
    setCount(120);
    setTimerId(
      setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000)
    );
  };

  const handleSubmitOTP = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    async function postData() {
      try {
        const storedPhone = phone;
        const storedType = type;
        const response = await fetch(`${process.env.SERVER_URL}/otp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            otp: formData.get('otp'),
            phone: storedPhone,
            type: storedType
          })
        });
        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data));
        router.push('/');
      } catch (error) {
        setOtpFailed(true);
        console.error(error);
      }
    }

    postData();
  }

  function handleSubmit() {
    async function postData() {
      try {
        const response = await fetch(`${process.env.SERVER_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            phone: phone,
            type: type
          })
        });
        const data = await response.json();
        setOtpForm(true);
      } catch (error) {
        setLoginFailed(true);
        console.error(error);
      }
    }

    postData();
    startCountdown();
  }

  return (
    <div className={styles.login}>
      <div className={styles.navbar}>
        <Navbar color='black' user={props.user} company={props.company} setCompany={props.setCompany} setUser={props.setUser} />
      </div>
      {!otpForm && <div className={styles.body}>
        <form className={styles.form}>
          <div>
            <h1 className={styles.heading}>Welcome</h1>
            <p className={styles.subHeading}>Log In To Your Account</p>
          </div>
          {loginFailed && <span className={styles.warn}>Login Failed ! Please try again</span>}
          <label htmlFor="accType" className={styles.accLabel}>
            <p className={styles.label}>Log in As</p>
            <select className={styles.accType} id='accType' name='type'
              onChange={(e) => { setType(e.target.value); setLoginFailed(false); setOtpFailed(false); }}
            >
              <option value="user" className={styles.opts}>User</option>
              <option value="freelancer" className={styles.opts}>Freelancer</option>
              <option value="company" className={styles.opts}>Company</option>
            </select>
          </label>
          <div id={styles.phone}>
            <div className={styles.countryCode}>
              +91
            </div>
            <input className={styles.inputs} id={styles.number} name='phone'
              type='number' placeholder='Enter Your Phone no.'
              onChange={(e) => { setPhone(e.target.value); setLoginFailed(false); setOtpFailed(false); }}
            /> <br/>
          </div>
          <div>
            <button className={styles.btn} type='button' onClick={handleSubmit}>Send OTP</button>
          </div>
          <div className={styles.lower}>
            {type === 'user' && <Link href='/signup' className={`${styles.signup} text-green-400`}>Don&apos;t have an Account? Sign up now</Link>}
            {type === 'freelancer' && <Link href='/register/freelancer' className={styles.signup}>Don&apos;t have an Account? Register now As a Freelancer</Link>}
            {type === 'company' && <Link href='/register/company' className={styles.signup}>Don&apos;t have an Account? Register now As a Company</Link>}
          </div>
        </form>
        <div className={styles.presentation}>
          <Image src="/pre.jpg" alt="side-image" height="1006" width="1000" />
        </div>
      </div>}
      {otpForm && <div className={styles.body}>
        <form method="post" className={styles.form} onSubmit={handleSubmitOTP}>
          <div>
            <h1 className={styles.heading}>Welcome</h1>
            <p className={styles.subHeading}>Enter a one-time password (OTP) to verify</p>
          </div>
          {otpFailed && <span className={styles.warn}>OTP verification failed ! Please try again</span>}
          <div id={styles.otp}>
            <input className={styles.inputs} id={styles.otp} type="number" name="otp" placeholder="Enter OTP" />
          </div>
          <div>
            <button className={styles.btn} type='submit'>Submit</button>
          </div>
          <div className={styles.lower}>
            {count > 0 && <p className={styles.resendOtp}>Resend OTP in {count}s?</p>}
            {count === 0 && <p className={styles.resendOtp} onClick={handleSubmit}>Resend OTP</p>}
          </div>
        </form>
        <div className={styles.presentation}>
          <Image src="/pre.jpg" alt="side-image" height="1006" width="1000" />
        </div>
      </div>}
      <Footer />
    </div>
  )
}