import styles from '../styles/Signup.module.css'
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

function Signup() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    async function postData() {
      try {
        const response = await fetch('http://localhost:3000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstname: formData.get('firstname'),
            lastname: formData.get('lastname'),
            phone: formData.get('phone')
          })
        });
        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    }

    postData();
  }

  return (
    <div className={styles.signup}>
      <Navbar />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <h1 className={styles.heading}>Welcome</h1>
          <p className={styles.subHeading}>Sign Up For a Free Account</p>
        </div>
        <div className={styles.name}>
          <div className={styles.inputLabels}>
            <label htmlFor="fisrtname">First Name : </label>
            <input className={styles.inputs} type='text' placeholder='Enter Your firstname' id={styles.firstname} name='firstname' /> <br />
          </div>
          <div className={styles.inputLabels}>
            <label htmlFor="lastname">Last Name : </label>
            <input className={styles.inputs} type='text' placeholder='Enter Your lastname' id={styles.lastname} name='lastname' /> <br />
          </div>
        </div>
        <div className={styles.inputLabels}>
          <label htmlFor="phone">Phone No : </label>
          <input className={styles.inputs} type='number' id={styles.number} placeholder='Enter Your Phone no.' name='phone' /> <br />
        </div>
        <div>
          <button type='submit' className={styles.btn}>Submit</button>
        </div>
        <div className={styles.lower}>
          <Link href='/login' className={styles.login}>Already have an Account? Log in</Link>
        </div>
      </form>
      <div className={styles.presentation}>
        <Image src="/pre.jpg" alt="image" height="1006" width="1000" />
      </div>
    </div>
  )
}

export default Signup;