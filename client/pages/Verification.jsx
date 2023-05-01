import Navbar from '@/components/Navbar';
import styles from '../styles/Verification.module.css';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Verification() {
  return (
    <div className={styles.verification}>
      <Navbar />
      <div className={styles.body}>
        <form className={styles.form}>
          <h1 className={styles.title}>Verification Form</h1>
          <p className={styles.subTitle}>You're almost there! Just a final step to complete your profile.</p>
          <div className={styles.formGroup} id={styles.cover}></div>
          <div className={styles.formGroup} id={styles.profile_pic}>
            <Image className={styles.dp} src='/dp.png' width={180} height={180} />
          </div>
          <div className={styles.uploads}>
            <label className={styles.box}>
              <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} />
              &nbsp;Addhar Card
              <input type="file" className={styles.upload} />
            </label>
            <label className={styles.box}>
              <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} />
              &nbsp;Pan Card
              <input type="file" className={styles.upload} />
            </label>
          </div>
          <div className={styles.socials}>
            <label className={styles.social}>Facebook : <br />
              <input type="text" className={styles.input} placeholder="https://www.facebook.com/example" />
            </label>
            <label className={styles.social}>Instagram : <br />
              <input type="text" className={styles.input} placeholder="https://www.instagram.com/example" />
            </label>
            <label className={styles.social}>Twitter : <br />
              <input type="text" className={styles.input} placeholder="https://www.twitter.com/example" />
            </label>
            <label className={styles.social}>Youtube : <br />
              <input type="text" className={styles.input} placeholder="https://www.youtube.com/example" />
            </label>
          </div>
          <button className={styles.btn}>Verify</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Verification;