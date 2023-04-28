import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '../../styles/Company.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Footer from '@/components/Footer'

export default function company() {
  return (
    <div>
      <Navbar />
      <div className={styles.body}>
      {/* <div className={styles.left}>
          <h1 className={styles.heading}>What is your Profession?</h1>
          <p className={styles.subHeading}>Choose any one category to begin with.</p>
          <div className={styles.categories}>
            <div className={styles.category} id={styles.photographer}>Photographer</div>
            <div className={styles.category} id={styles.cinematographer}>Cinematographer</div>
            <div className={styles.category} id={styles.drone_operator}> Drone Operator</div>
          </div>
        </div> */}
        <div className={styles.right}>
          <div className={styles.title}>
            <h1 className={styles.heading}>Get the Best Talents!</h1>
            <p className={styles.subHeading}>Join our Platform and Get all talents!</p>
          </div>
          <div className={styles.features}>
            <div className={styles.company}>
              <h1 className={styles.minHeading}>For Companies</h1>
              <div className={styles.feature}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00aaff", }} /><p>Helps You Find Proper Freelancer</p>
              </div>
              <div className={styles.feature}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00aaff", }} /><p>All Profiles are Verified</p>
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