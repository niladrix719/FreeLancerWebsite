import styles from '../styles/Register.module.css'
import FeatureCard from '@/components/FeatureCard';
import Image from 'next/image';
import Link from 'next/link';

function Register() {
  return (
    <div className={styles.features}>
      <Image src='/mac4.png' width={700} className={styles.image} height={700} />
      <div className={styles.container}>
        <div className={styles.btns}>
          <Link href='/register/freelancer' className={styles.btn}>
            <h1>Register as a Freelancer</h1>
            <p className={styles.p}>Fill up the form -&gt;</p>
          </Link>
          <Link href='/register/company' className={styles.btn}>
            <h1>Register as a Company</h1>
            <p className={styles.p}>Fill up the form -&gt;</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register;