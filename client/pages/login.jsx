import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Login.module.css';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    async function postData() {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            phone: formData.get('phone'),
            type: formData.get('type')
          })
        });
        const data = await response.json();
        localStorage.setItem('phone', data.phone);
        localStorage.setItem('type', data.type);
        router.push('/verifyOTP');
      } catch (error) {
        console.error(error);
      }
    }

    postData();
  }

  return (
    <div className={styles.login}>
      <div className={styles.navbar}>
        <Navbar color='black' />
      </div>
      <div className={styles.body}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <h1 className={styles.heading}>Welcome</h1>
            <p className={styles.subHeading}>Log In To Your Account</p>
          </div>
          <label htmlFor="accType" className={styles.accLabel}>
            <p className={styles.label}>Log in As</p>
            <select className={styles.accType} id='accType' name='type'>
              <option value="user" className={styles.opts}>User</option>
              <option value="freelancer" className={styles.opts}>Freelancer</option>
              <option value="company" className={styles.opts}>Company</option>
            </select>
          </label>
          <div id={styles.phone}>
            <div className={styles.countryCode}>
              +91
            </div>
            <input className={styles.inputs} id={styles.number} name='phone' type='number' placeholder='Enter Your Phone no.' /> <br />
          </div>
          <div>
            <button className={styles.btn} type='submit'>Send OTP</button>
          </div>
          <div className={styles.lower}>
            <Link href='/signup' className={styles.signup}>Don&apos;t have an Account? Sign up now</Link>
          </div>
        </form>
        <div className={styles.presentation}>
          <Image src="/pre.jpg" alt="image" height="1006" width="1000" />
        </div>
      </div>
      <Footer />
    </div>
  )
}