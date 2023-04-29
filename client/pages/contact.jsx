import Navbar from '@/components/Navbar';
import styles from '../styles/Contact.module.css';
import Image from 'next/image';
import Footer from '@/components/Footer';

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
                <label htmlFor="name" className={styles.label}>Firstname :</label>
                <input type='text' id='name' className={styles.input} />
                <label htmlFor="name" className={styles.label}>Lastname :</label>
                <input type='text' id='name' className={styles.input} />
                <label htmlFor="email" className={styles.label}>Phone :</label>
                <input type='email' id='email' className={styles.input} />
                <label htmlFor="email" className={styles.label}>Email :</label>
                <input type='email' id='email' className={styles.input} />
                <label htmlFor="issue" className={styles.label}>Issue :</label>
                <select className={styles.options} name="issue">
                  <option className={styles.option} value="issue">Service Related</option>
                  <option className={styles.option} value="issue">Payment Related</option>
                  <option className={styles.option} value="issue">Client Related</option>
                  <option className={styles.option} value="issue">Freelancer Related</option>
                  <option className={styles.option} value="issue">Platform Related</option>
                </select>
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
      <Footer />
    </div>
  )
}

export default contact;