import Navbar from '@/components/Navbar';
import styles from '../styles/Contact.module.css';
import Image from 'next/image';

function contact() {
  return (
    <div className={styles.contact}>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.contact_form}>
          <div className={styles.left}>
            <h1 className={styles.heading}>Contact Us</h1>
            <div className={styles.form_body}>
              <form className={styles.form}>
                <label htmlFor="name" className={styles.label}>Name :</label>
                <input type='text' id='name' className={styles.input} />
                <label htmlFor="email" className={styles.label}>Email :</label>
                <input type='email' id='email' className={styles.input} />
                <label htmlFor="message" className={styles.label}>Message :</label>
                <textarea className={styles.textarea} name="message" id="message" cols="30" rows="10"></textarea>
                <button className={styles.btn}>Submit</button>
              </form>
            </div>
          </div>
          <div className={styles.right}>
            <Image src='/contactus.jpg' width='650' height='650' alt='contact_us' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact;