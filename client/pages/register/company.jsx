import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '../../styles/Freelancer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Footer from '@/components/Footer'

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      currentPage: 1,
      btn: 'Next',
      companyname: '',
      companyphone: '',
      companytype: 'photography',
      bio: '',
      error: false
    }
  }

  increProgress = (val) => {
    if (this.state.progress + val > 134) {
      return;
    }

    if ((this.state.companyname === '') && this.state.currentPage === 1) {
      this.setState({ error: true });
      return;
    }

    if (this.state.companyphone === '' && this.state.currentPage === 2) {
      this.setState({ error: true });
      return;
    }

    if (this.state.companytype === '' && this.state.currentPage === 3) {
      this.setState({ error: true });
      return;
    }

    if (this.state.bio === '' && this.state.currentPage === 4) {
      this.setState({ error: true });
      return;
    }

    if (this.state.currentPage === 4) {
      this.setState({ error: false });
      this.handleSubmit();
      return;
    }

    this.setState({ progress: this.state.progress + val });
    this.setState({ error: false });
    this.increPage();
  }

  decreProgress = (val) => {
    if (this.state.progress - val < 0)
      return;

    this.setState({ progress: this.state.progress - val });
    this.decrePage();
  }

  increPage = () => {
    if (this.state.currentPage === 4) {
      return;
    }

    if (this.state.currentPage === 3) {
      this.setState({ btn: 'Submit' });
    }

    this.setState({ currentPage: this.state.currentPage + 1 });
  }

  decrePage = () => {
    if (this.state.currentPage === 1)
      return;

    if (this.state.currentPage === 5) {
      this.setState({ btn: 'Next' });
    }

    this.setState({ currentPage: this.state.currentPage - 1 });
  }

  handleSubmit = () => {
    const postData = async () => {
      try {
        const response = await fetch('http://localhost:3000/register/company', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            companyname: this.state.companyname,
            companyphone: this.state.companyphone,
            companytype: this.state.companytype,
            bio: this.state.bio
          })
        });
        const data = await response.json();
        localStorage.setItem('company', JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    }

    postData();
  }

  render() {
    return (
      <div className={styles.main}>
        <Navbar />
        <div className={styles.body}>
          <div className={styles.left}>
            <h1 className={styles.heading}>Fill Up The Registration Form.</h1>
            <p className={styles.subHeading}>We only allow verified Companies on our website.</p>
            <form className={styles.form}>
              {this.state.error && <p className={styles.error}>Please provide all the inputs the fields.</p>}
              {this.state.currentPage === 1 && <div className={styles.inputField} id={styles.firstname}>
                <label htmlFor="companyname" className={styles.label}><span style={{ color: 'red' }}>* </span>Company Name :</label>
                <input type='text' className={styles.input}
                  placeholder='Enter Your Company name'
                  name='companyname' id='companyname' required
                  onChange={(event) => this.setState({ companyname: event.target.value })}
                  value={this.state.companyname !== '' ? this.state.companyname : ''}
                  maxLength={30}
                />
              </div>}
              {this.state.currentPage === 2 && <div className={styles.inputField} id={styles.phone}>
                <label htmlFor="companyphone" className={styles.label}><span style={{ color: 'red' }}>* </span>Company Phone :</label>
                <input type='number' id={styles.number} className={styles.input}
                  placeholder='Enter Company Phone no.'
                  name='companyphone' required
                  onChange={(event) => this.setState({ companyphone: event.target.value })}
                  value={this.state.companyphone !== 'photographer' ? this.state.companyphone : 'photographer'}
                  max={10}
                />
              </div>}
              {this.state.currentPage === 3 && <div className={styles.inputField} id={styles.profession}>
                <label htmlFor="companytype" className={styles.label}><span style={{ color: 'red' }}>* </span>What is your company type?</label>
                <select required className={styles.options} name="companytype"
                  onChange={(event) => this.setState({ companytype: event.target.value })} id="companytype"
                  value={this.state.companytype !== '' ? this.state.companytype : ''}
                >
                  <option className={styles.option} value="photography">Photography</option>
                  <option className={styles.option} value="eCommerce">eCommerce</option>
                  <option className={styles.option} value="business">Business</option>
                </select>
              </div>}
              {this.state.currentPage === 4 && <div className={styles.inputField} id={styles.bio}>
                <label htmlFor="bio" className={styles.label}><span style={{ color: 'red' }}>* </span>Bio :</label>
                <textarea required name="bio" id="bio" cols="30" rows="10"
                  onChange={(event) => this.setState({ bio: event.target.value })}
                  className={styles.textarea} placeholder='Write Your bio here...'
                  value={this.state.bio !== '' ? this.state.bio : ''}>
                </textarea>
              </div>}
              <div className={styles.btns}>
                <button className={styles.NextBtn} type='button' onClick={() => this.increProgress(33.33)}>{this.state.btn}</button>
                <button className={styles.backBtn} type='button' onClick={() => this.decreProgress(33.33)}>Back</button>
              </div>
            </form>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>
              <h1 className={styles.heading}>Take Control of Your Project</h1>
              <p className={styles.subHeading}>Join our Platform and Start your Next Project!</p>
              <hr className={styles.divider} />
            </div>
            <div className={styles.features}>
              <div className={styles.freelancer}>
                <h1 className={styles.minHeading}>For Freelancers</h1>
                <div className={styles.feature}>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "#00aaff", }} /><p>Helps You get The right Talent for your Project</p>
                </div>
                <div className={styles.feature}>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "#00aaff", }} /><p>All Verified Freelancers</p>
                </div>
                <div className={styles.feature}>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "#00aaff", }} /><p>Maintains Privacy and Fully Transparent</p>
                </div>
              </div>
              <Image src='/registration01.png' alt='registration' width={250} height={250} />
            </div>
            <hr className={styles.divider} />
          </div>
        </div>
        <div className={styles.bar}>
          <div className={styles.progress} style={{ width: `${this.state.progress}%` }}></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Company;