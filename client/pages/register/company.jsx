import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '../../styles/Freelancer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Footer from '@/components/Footer'
import CompanyVerification from '@/components/CompanyVerification'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router'

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      currentPage: 1,
      btn: 'Next',
      companyname: '',
      companyphone: '',
      otp: '',
      companytype: 'photography',
      companyaddress: '',
      firstname: '',
      lastname: '',
      position: '',
      bio: '',
      profilePicture: null,
      coverPicture: null,
      panCard: null,
      incorporationCertificate: null,
      links: { instagram: '', facebook: '', twitter: '', youtube: '' },
      termsAndConditions: true,
      error: false,
      form: false,
      phoneError: false,
      panError: false,
      profilePicError: false,
      coverPicError: false,
      textareaError: false,
      invalidOtp: false,
      registerFailed: false,
      warns: [false],
    }
  }

  increProgress = (val) => {
    if (this.state.progress + val > 125) {
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

    if (this.state.companyphone.length !== 10 && this.state.currentPage === 2) {
      this.setState({ phoneError: true });
      return;
    }

    if (this.state.currentPage === 2) {
      this.getOtp();
    }

    if (this.state.otp === '' && this.state.currentPage === 3) {
      this.setState({ error: true });
      return;
    }

    if (this.state.currentPage === 3) {
      if (this.state.invalidOtp) {
        return;
      }
    }

    if (this.state.companytype === '' && this.state.currentPage === 4) {
      this.setState({ error: true });
      return;
    }

    if (this.state.companyaddress === '' && this.state.currentPage === 5) {
      this.setState({ error: true });
      return;
    }

    if ((this.state.firstname === '' || this.state.lastname === '') && this.state.currentPage === 7) {
      this.setState({ error: true });
      return;
    }

    if (this.state.position === '' && this.state.currentPage === 6) {
      this.setState({ error: true });
      return;
    }

    if ((this.state.bio.length > 300 || this.state.bio.length) < 50 && this.state.currentPage === 8) {
      this.setState({ textareaError: true });
      return;
    }

    if (this.state.bio === '' && this.state.currentPage === 8) {
      this.setState({ error: true });
      return;
    }

    if (this.state.currentPage === 8) {
      this.setState({ error: false });
      this.setState({ form: true });
      return;
    }

    this.setState({ progress: this.state.progress + val });
    this.setState({ error: false });
    this.setState({ phoneError: false });
    this.setState({ textareaError: false });
    this.setState({ registerFailed: false });
    this.increPage();
  }

  decreProgress = (val) => {
    if (this.state.progress - val < 0)
      return;

    this.setState({ error: false });
    this.setState({ phoneError: false });
    this.setState({ textareaError: false });
    this.setState({ registerFailed: false });

    this.setState({ progress: this.state.progress - val });
    this.decrePage();
  }

  increPage = () => {
    if (this.state.currentPage === 8) {
      return;
    }

    if (this.state.currentPage === 7) {
      this.setState({ btn: 'Submit' });
    }

    this.setState({ currentPage: this.state.currentPage + 1 });
  }

  decrePage = () => {
    if (this.state.currentPage === 1)
      return;

    if (this.state.currentPage === 8) {
      this.setState({ btn: 'Next' });
    }

    this.setState({ currentPage: this.state.currentPage - 1 });
  }

  getVerificationDetails = (val, index) => {
    if (index === 4)
      this.setState({ profilePicture: val });
    if (index === 5)
      this.setState({ coverPicture: val });
    if (index === 6)
      this.setState({ panCard: val });
    if (index === 7)
      this.setState({ incorporationCertificate: val });
    if (index === 8) {
      this.setState({ links: { ...this.state.links, instagram: val } });
    }
    if (index === 9) {
      this.setState({ links: { ...this.state.links, facebook: val } });
    }
    if (index === 10) {
      this.setState({ links: { ...this.state.links, twitter: val } });
    }
    if (index === 11) {
      this.setState({ links: { ...this.state.links, youtube: val } });
    }
    if (index === 12) {
      this.setState({ termsAndConditions: val });
    }
  }

  handleTextChange = (event, val) => {
    if (val === 1) {
      this.setState({ bio: event.target.value });
      if (this.state.bio.length > 300)
        this.setState({ textareaError: true });
      else
        this.setState({ textareaError: false });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.profilePicture === null) {
      this.setState({ profilePicError: true });
      this.setState({ warns: [false, ...this.state.warns.slice(1)] });
      return;
    }
    if (this.state.coverPicture === null) {
      this.setState({ coverPicError: true });
      this.setState({ warns: [...this.state.warns.slice(0, 1), false, ...this.state.warns.slice(2)] });
      return;
    }
    if (this.state.panCard === null) {
      this.setState({ panError: true });
      this.setState({ warns: [...this.state.warns.slice(0, 3), false, ...this.state.warns.slice(4)] });
      return;
    }

    const postData = async () => {
      const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
      try {
        const data = new FormData();
        data.append('firstname', this.state.firstname);
        data.append('lastname', this.state.lastname);
        data.append('companyname', this.state.companyname);
        data.append('companyphone', this.state.companyphone);
        data.append('companytype', this.state.companytype);
        data.append('companyaddress', this.state.companyaddress);
        data.append('position', this.state.position);
        data.append('bio', this.state.bio);
        data.append('profilePicture', this.state.profilePicture);
        data.append('coverPicture', this.state.coverPicture);
        data.append('panCard', this.state.panCard);
        data.append('incorporationCertificate', this.state.incorporationCertificate);
        data.append('links', JSON.stringify(this.state.links));
        data.append('termsAndConditions', this.state.termsAndConditions);
        data.append('verified', false);
        const response = await fetch(`${process.env.SERVER_URL}/register/company`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: data
        });

        const responseData = await response.json();
        localStorage.setItem('user', JSON.stringify({ token: responseData.token }));
        Router.push('/contact_soon');
      } catch (error) {
        console.error(error);
        this.setState({ registerFailed: true });
      }
    }

    postData();
  }

  handleOtp = () => {
    const postData = async () => {
      try {
        const response = await fetch(`${process.env.SERVER_URL}/verify/company/phone`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            otp: this.state.otp,
            phone: this.state.companyphone,
            type: 'company'
          })
        });
        if (response.status === 403) {
          this.setState({ invalidOtp: true });
          return;
        }
        else {
          this.setState({ invalidOtp: false });
        }
        const data = await response.json();
        this.increProgress(14.25);
        localStorage.setItem('user', JSON.stringify(data));
      }
      catch (error) {
        console.error(error);
      }
    };

    postData();
  }

  getOtp = () => {
    const postData = async () => {
      try {
        await fetch(`${process.env.SERVER_URL}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            phone: this.state.companyphone,
            type: 'company'
          })
        });
      }
      catch (error) {
        console.error(error);
      }
    };

    postData();
  }

  setPicError = (val, i) => {
    if (i === 1)
      this.setState({ profilePicError: val });
    if (i === 2)
      this.setState({ coverPicError: val });
    if (i === 3)
      this.setState({ panError: val });
    if (i === 4)
      this.setState({ incorporationError: val });
  }

  setWarns = (val, i) => {
    if (i === -1) {
      const temp = Array(1).fill(val);
      this.setState({ warns: temp });
    } else {
      this.setState((prevState) => {
        const temp = [...prevState.warns];
        temp[i] = val;
        return { warns: temp };
      });
    }
  };

  render() {
    return (
      <div className={styles.main}>
        <Navbar />
        <div className={`${this.state.form ? styles.newbody : styles.body}`}>
          <div className={`${this.state.form ? styles.newLeft : styles.left}`}>
            {!this.state.form && <h1 className={styles.heading}>Fill Up The Registration Form.</h1>}
            {!this.state.form && <p className={styles.subHeading}>We only allow verified Companies on our website.</p>}
            <form className={`${this.state.form ? styles.newForm : styles.form}`}
              onSubmit={(event) => this.handleSubmit(event)} encType="multipart/form-data"
            >
              {this.state.error && <p className={styles.error}>Please provide all the inputs the fields.</p>}
              {this.state.phoneError && <p className={styles.error}>Please provide a valid phone number of 10 digits.</p>}
              {this.state.registerFailed && <p className={styles.error}>Registration Failed. Please try again.</p>}
              {this.state.invalidOtp && <p className={styles.error}>Invalid OTP. Please try again.</p>}
              {this.state.currentPage === 1 && <div className={styles.inputField} id={styles.firstname}>
                <label htmlFor="companyname" className={styles.label}><span style={{ color: 'white' }}>* </span>Company Name :</label>
                <input type='text' className={styles.input}
                  placeholder='Enter Your Company name'
                  name='companyname' id='companyname' required
                  onChange={(event) => this.setState({ companyname: event.target.value })}
                  value={this.state.companyname !== '' ? this.state.companyname : ''}
                  maxLength={30}
                />
              </div>}
              {this.state.currentPage === 2 && <div className={styles.inputField} id={styles.phone}>
                <label htmlFor="companyphone" className={styles.label}><span style={{ color: 'white' }}>* </span>Company Phone :</label>
                <input type='number' id={styles.number} className={styles.input}
                  placeholder='Enter Company Phone no.'
                  name='companyphone' required
                  onChange={(event) => this.setState({ companyphone: event.target.value })}
                  value={this.state.companyphone !== 'photographer' ? this.state.companyphone : 'photographer'}
                  max={10}
                />
              </div>}
              {this.state.currentPage === 3 && <div className={styles.inputField} id={styles.otp}>
                <label htmlFor="otp" className={styles.label}><span style={{ color: 'white' }}>* </span>OTP :</label>
                <input type='number' id={styles.number} className={styles.input}
                  placeholder='Enter Your OTP'
                  name='otp' required
                  onChange={(event) => this.setState({ otp: event.target.value, error: false })}
                  value={this.state.otp}
                />
              </div>}
              {this.state.currentPage === 4 && <div className={styles.inputField} id={styles.profession}>
                <label htmlFor="companytype" className={styles.label}><span style={{ color: 'white' }}>* </span>What is your company type?</label>
                <select required className={styles.options} name="companytype"
                  onChange={(event) => this.setState({ companytype: event.target.value })} id="companytype"
                  value={this.state.companytype !== '' ? this.state.companytype : ''}
                >
                  <option className={styles.option} value="photography">Photography Company</option>
                  <option className={styles.option} value="eCommerce">eCommerce Company</option>
                  <option className={styles.option} value="production_house">Production House</option>
                  <option className={styles.option} value="advertising_agency">Advertising agency</option>
                  <option className={styles.option} value="other">Other</option>
                </select>
              </div>}
              {this.state.currentPage === 5 && <div className={styles.inputField} id={styles.address}>
                <label htmlFor="companyaddress" className={styles.label}><span style={{ color: 'white' }}>* </span>Company Address :</label>
                <input type='text' id={styles.number} className={styles.input}
                  placeholder='Enter Company Address no.'
                  name='companyaddress' required
                  onChange={(event) => this.setState({ companyaddress: event.target.value })}
                  value={this.state.companyaddress}
                />
              </div>}
              {this.state.currentPage === 7 && <div className={styles.inputField} id={styles.otp}>
                <label htmlFor="firstname" className={styles.label}><span style={{ color: 'white' }}>* </span>First Name:</label>
                <input type='text' className={styles.input}
                  placeholder='Enter Your First name'
                  name='firstname' required
                  onChange={(event) => this.setState({ firstname: event.target.value, error: false })}
                  value={this.state.firstname}
                  maxLength={13}
                />
              </div>}
              {this.state.currentPage === 7 && <div className={styles.inputField} id={styles.otp}>
                <label htmlFor="lastname" className={styles.label}><span style={{ color: 'white' }}>* </span>Last Name:</label>
                <input type='text' className={styles.input}
                  placeholder='Enter Your Last name'
                  name='lastname' required
                  onChange={(event) => this.setState({ lastname: event.target.value, error: false })}
                  value={this.state.lastname}
                  maxLength={13}
                />
              </div>}
              {this.state.currentPage === 6 && <div className={styles.inputField} id={styles.otp}>
                <label htmlFor="position" className={styles.label}><span style={{ color: 'white' }}>* </span>Designation :</label>
                <input type='text' className={styles.input}
                  placeholder='Enter Your Designation in the Company'
                  name='position' required
                  onChange={(event) => this.setState({ position: event.target.value, error: false })}
                  value={this.state.position}
                />
              </div>}
              {this.state.textareaError && <p className={styles.error}>Please provide less than 300 characters and atleast 50 characters.</p>}
              {!this.state.form && this.state.currentPage === 8 && <div className={styles.inputField} id={styles.bio}>
                <label htmlFor="bio" className={styles.label}><span style={{ color: 'white' }}>* </span>Bio :</label>
                <textarea required name="bio" id="bio" cols="30" rows="10"
                  onChange={(event) => this.setState({ bio: event.target.value })}
                  className={styles.textarea} placeholder='Write Your Company here...'
                  value={this.state.bio !== '' ? this.state.bio : ''}>
                </textarea>
              </div>}
              {!this.state.form && <div className={styles.btns}>
                <button className={styles.backBtn} type='button' onClick={() => this.decreProgress(14.25)}>Back</button>
                {this.state.currentPage !== 3 && <button className={styles.NextBtn} type='button' onClick={() => this.increProgress(14.25)}>{this.state.btn}</button>}
                {this.state.currentPage === 3 && <button className={styles.NextBtn} type='button' onClick={this.handleOtp}>Verify</button>}
                {this.state.currentPage === 3 && <button className={styles.NextBtn} type='button' onClick={this.getOtp}><FontAwesomeIcon icon={faRotateRight} /> Resend</button>}
              </div>}
              {this.state.form && <CompanyVerification
                getVerificationDetails={this.getVerificationDetails}
                certificateError={this.state.certificateError}
                panError={this.state.panError}
                setPicError={this.setPicError}
                coverPicError={this.state.coverPicError}
                profilePicError={this.state.profilePicError}
                warns={this.state.warns}
                setWarns={this.setWarns}
              />}
            </form>
          </div>
          {!this.state.form && <div className={styles.right}>
            <div className={styles.title}>
              <h1 className={styles.heading}>Take Control of Your Project</h1>
              <p className={styles.subHeading}>Join our Platform and Start your Next Project!</p>
              <hr className={styles.divider} />
            </div>
            <div className={styles.features}>
              <div className={styles.freelancer}>
                <h1 className={styles.minHeading}>For Companies</h1>
                <div className={styles.feature}>
                  <FontAwesomeIcon className={styles.check} icon={faCheck} style={{ color: "black", }} /><p>Helps You get The right Talent for your Project</p>
                </div>
                <div className={styles.feature}>
                  <FontAwesomeIcon className={styles.check} icon={faCheck} style={{ color: "black", }} /><p>All Verified Freelancers</p>
                </div>
                <div className={styles.feature}>
                  <FontAwesomeIcon className={styles.check} icon={faCheck} style={{ color: "black", }} /><p>Maintains Privacy and Fully Transparent</p>
                </div>
              </div>
              <Image className={styles.img} src='/ani3.png' alt='registration' width={250} height={250} />
            </div>
            <hr className={styles.divider} />
          </div>}
        </div>
        {!this.state.form && <div className={styles.bar}>
          <div className={styles.progress} style={{ width: `${this.state.progress}%` }}></div>
        </div>}
        <Footer />
      </div>
    )
  }
}

export default Company;