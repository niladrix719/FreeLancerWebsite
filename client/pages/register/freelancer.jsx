import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '../../styles/Freelancer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

class Freelancer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      currentPage: 1,
    }
  }

  increProgress = (val) => {
    if (this.state.progress + val > 100)
      return;

    this.setState({ progress: this.state.progress + val });
    this.increPage();
  }

  decreProgress = (val) => {
    if (this.state.progress - val < 0)
      return;

    this.setState({ progress: this.state.progress - val });
    this.decrePage();
  }

  increPage = () => {
    if (this.state.currentPage === 5)
      return;

    if (this.state.currentPage === 4) {
      document.querySelector("." + styles.NextBtn).innerHTML = 'Submit';
    }

    this.setState({ currentPage: this.state.currentPage + 1 });
  }

  decrePage = () => {
    if (this.state.currentPage === 1)
      return;

    if (this.state.currentPage === 5) {
      document.querySelector("." + styles.NextBtn).innerHTML = 'Next';
    }

    this.setState({ currentPage: this.state.currentPage - 1 });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className={styles.body}>
          <div className={styles.left}>
            <h1 className={styles.heading}>Fill Up The Registration Form.</h1>
            <p className={styles.subHeading}>We only allow verified Freelancers on our website.</p>
            <form method='post' action='/register/freelancer' className={styles.form}>
              {this.state.currentPage === 1 && <div className={styles.inputField} id={styles.firstname}>
                <label htmlFor="firstname" className={styles.label}>First name :</label>
                <input type='text' className={styles.input} placeholder='Enter Your First name' name='firstname' id='firstname' required />
              </div>}
              {this.state.currentPage === 1 && <div className={styles.inputField} id={styles.lastname}>
                <label htmlFor="lastname" className={styles.label}>Last name :</label>
                <input type='text' className={styles.input} placeholder='Enter Your Last name' name='lastname' id='lastname' required />
              </div>}
              {this.state.currentPage === 2 && <div className={styles.inputField} id={styles.phone}>
                <label htmlFor="phone" className={styles.label}>Phone :</label>
                <input type='number' id={styles.number} className={styles.input} placeholder='Enter Your Phone no.' name='phone' required />
              </div>}
              {this.state.currentPage === 3 && <div className={styles.inputField} id={styles.profession}>
                <label htmlFor="profession" className={styles.label}>What is your profession?</label>
                <select className={styles.options} name="profession" id="profession">
                  <option className={styles.option} value="photographer">Photographer</option>
                  <option className={styles.option} value="cinematographer">Cinematographer</option>
                  <option className={styles.option} value="drone_operator">Drone Operator</option>
                </select>
              </div>}
              {this.state.currentPage === 4 && <div className={styles.inputField} id={styles.bio}>
                <label htmlFor="bio" className={styles.label}>Bio :</label>
                <textarea name="bio" id="bio" cols="30" rows="10" className={styles.textarea} placeholder='Write Your bio here...'></textarea>
              </div>}
              {this.state.currentPage === 5 && <div className={styles.inputField} id={styles.equipment}>
                <label htmlFor="equipments" className={styles.label}>Equipments Available :</label>
                <textarea name="equipments" id="equipments" cols="30" rows="10" className={styles.textarea} placeholder='Write Your equipments here...'></textarea>
              </div>}
              <div className={styles.btns}>
                <button className={styles.NextBtn} type='button' onClick={() => this.increProgress(25)}>Next</button>
                <button className={styles.backBtn} type='button' onClick={() => this.decreProgress(25)}>Back</button>
              </div>
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
              <Image src='/registration.png' alt='registration' width={350} height={350} />
            </div>
            <hr className={styles.divider} />
          </div>
        </div>
        <div className={styles.bar}>
          <div className={styles.progress} style={{ width: `${this.state.progress}%` }}></div>
        </div>
      </div>
    )
  }
}

export default Freelancer;