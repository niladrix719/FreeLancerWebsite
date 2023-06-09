import styles from '../styles/Register.module.css'
import FeatureCard from '@/components/FeatureCard';
import Image from 'next/image';
import Link from 'next/link';

function Register() {
  return (
    <div className={styles.features}>
      <Image src='/mac4.png' width={700} height={700} />
      <div className={styles.container}>
        {/* <div className={styles.texts}>
          <h1 className={styles.heading}>Register For Free</h1>
          <span style={{ fontSize: '2.4rem' }}>on </span><i style={{ fontSize: '3.2rem' }}>Fipezo</i>
        </div> */}
        <div className={styles.btns}>
          <Link href='/register/freelancer' className={styles.btn}>Register as a Freelancer</Link>
          <Link href='/register/company' className={styles.btn}>Register as a Company</Link>
        </div>
      </div>
    </div>
  )
}

export default Register;