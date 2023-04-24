import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '../../styles/Freelancer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Footer from '@/components/Footer'

function freelancer() {
  return (
    <div>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.left}>
          <h1 className={styles.heading}>Fill Up The Registration Form.</h1>
          <p className={styles.subHeading}>We only allow verified Freelancers on our website.</p>
          <form method='post' action='/register/freelancer' className={styles.form}>
            <label htmlFor="name" className={styles.label}>Name :</label>
            <input type='text' className={styles.input} placeholder='Enter Your Name' name='name' id='name' required />
            <label htmlFor="phone" className={styles.label}>Phone :</label>
            <input type='number' id={styles.number} className={styles.input} placeholder='Enter Your Phone no.' name='phone' required />
            <label htmlFor="profession" className={styles.label}>What is your profession?</label>
            <select className={styles.options} name="profession" id="profession">
              <option className={styles.option} value="photographer">Photographer</option>
              <option className={styles.option} value="cinematographer">Cinematographer</option>
              <option className={styles.option} value="drone_operator">Drone Operator</option>
            </select>
            <label htmlFor="bio" className={styles.label}>Bio :</label>
            <textarea name="bio" id="bio" cols="30" rows="10" className={styles.textarea} placeholder='Write Your bio here...'></textarea>
            <label htmlFor="bio" className={styles.label}>Equipments Available :</label>
            <textarea name="bio" id="bio" cols="30" rows="10" className={styles.textarea} placeholder='Write Your equipments here...'></textarea>
          </form>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <h1 className={styles.heading}>Take Control of Your Career Today!</h1>
            <p className={styles.subHeading}>Join our Platform and Start Earning on Your Own Terms!</p>
          </div>
          <div className={styles.features}>
            <div className={styles.freelancer}>
              <h1 className={styles.minHeading}>For Freelancers</h1>
              <div className={styles.feature}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00aaff", }} /><p>Helps You get more reach</p>
              </div>
              <div className={styles.feature}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00aaff", }} /><p>All Verified Companies</p>
              </div>
              <div className={styles.feature}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00aaff", }} /><p>Maintains Privacy and Fully Transparent</p>
              </div>
            </div>
          </div>
          <hr className={styles.divider} />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default freelancer;