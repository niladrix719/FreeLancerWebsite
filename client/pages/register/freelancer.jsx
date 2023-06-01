import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '../../styles/Freelancer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Verification from '@/components/Verification'
import Router from 'next/router';

class Freelancer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      currentPage: 1,
      btn: 'Next',
      firstName: '',
      lastName: '',
      phone: '',
      otp: '',
      location: 'kolkata',
      profession: 'photographer',
      rate: 1000,
      bio: '',
      equipments: '',
      profilePicture: null,
      coverPicture: null,
      aadhaarCard: null,
      panCard: null,
      works: [],
      links: { instagram: '', facebook: '', twitter: '', youtube: '' },
      termsAndConditions: false,
      error: false,
      form: false,
      phoneError: false,
      worksError: false,
      addharError: false,
      panError: false,
      profilePicError: false,
      coverPicError: false,
      textareaError: false,
      warns: [false, false, false, false, false, false, false, false, false, false, false, false],
      blur: 'none'
    }
  }

  increProgress = (val) => {
    if (this.state.progress + val > 125) {
      return;
    }

    if ((this.state.firstName === '' || this.state.lastName === '') && this.state.currentPage === 1) {
      this.setState({ error: true });
      return;
    }

    if ((this.state.phone === '') && this.state.currentPage === 2) {
      this.setState({ error: true });
      return;
    }

    if ((this.state.phone.length !== 10) && this.state.currentPage === 2) {
      this.setState({ phoneError: true });
      return;
    }

    if(this.state.currentPage === 2) {
      this.getOtp();
    }

    if (this.state.otp === '' && this.state.currentPage === 3) {
      this.setState({ error: true });
      return;
    }

    if(this.state.currentPage === 3) {
      this.handelOtp();
    }

    if (this.state.location === '' && this.state.currentPage === 4) {
      this.setState({ error: true });
      return;
    }

    if (this.state.profession === '' && this.state.currentPage === 5) {
      this.setState({ error: true });
      return;
    }

    if (this.state.rate === '' && this.state.currentPage === 6) {
      this.setState({ error: true });
      return;
    }

    if (this.state.bio.length > 300 && this.state.currentPage === 7) {
      this.setState({ textareaError: true });
      return;
    }

    if (this.state.bio === '' && this.state.currentPage === 7) {
      this.setState({ error: true });
      return;
    }

    if (this.state.equipments.length > 300 && this.state.currentPage === 8) {
      this.setState({ textareaError: true });
      return;
    }

    if (this.state.equipments === '' && this.state.currentPage === 8) {
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
    this.increPage();
  }

  decreProgress = (val) => {
    if (this.state.progress - val < 0)
      return;

    this.setState({ error: false });
    this.setState({ phoneError: false });
    this.setState({ textareaError: false });

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

  getVericationDetails = (val, index) => {
    if (index === 4)
      this.setState({ profilePicture: val });
    if (index === 5)
      this.setState({ coverPicture: val });
    if (index === 6)
      this.setState({ aadhaarCard: val });
    if (index === 7)
      this.setState({ panCard: val });
    if (index === 8 || index === 9 || index === 10 || index === 11 || index === 0 || index === 1 || index === 2 || index === 3) {
      this.setState({ works: [...this.state.works, val] });
    }
    if (index === 12) {
      this.setState({ links: { ...this.state.links, instagram: val } });
    }
    if (index === 13) {
      this.setState({ links: { ...this.state.links, facebook: val } });
    }
    if (index === 14) {
      this.setState({ links: { ...this.state.links, twitter: val } });
    }
    if (index === 15) {
      this.setState({ links: { ...this.state.links, youtube: val } });
    }
    if (index === 16) {
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
    if (val === 2) {
      this.setState({ equipments: event.target.value });
      if (this.state.equipments.length > 300)
        this.setState({ textareaError: true });
      else
        this.setState({ textareaError: false });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let c = 0;
    if(this.state.works.length < 8) {
      this.setState({ worksError: true });
      c++;
    }
    if(this.state.profilePicture === null) {
      this.setState({ profilePicError: true });
      this.setState({ warns: [false, ...this.state.warns.slice(1)] });
      return;
    }
    if(this.state.coverPicture === null) {
      this.setState({ coverPicError: true });
      this.setState({ warns: [...this.state.warns.slice(0, 1), false, ...this.state.warns.slice(2)] });
      return;
    }
    if(this.state.aadhaarCard === null) {
      this.setState({ addharError: true });
      this.setState({ warns: [...this.state.warns.slice(0, 2), false, ...this.state.warns.slice(3)] });
      return;
    }
    if(this.state.panCard === null) {
      this.setState({ panError: true });
      this.setState({ warns: [...this.state.warns.slice(0, 3), false, ...this.state.warns.slice(4)] });
      return;
    }
    if(c > 0)
      return;

    const postData = async () => {
      try {
        const data = new FormData();
        data.append('uid', this.state.firstName.toLowerCase() + '_' + parseInt(this.state.phone).toString(16));
        data.append('firstname', this.state.firstName);
        data.append('lastname', this.state.lastName);
        data.append('phone', this.state.phone);
        data.append('location', this.state.location);
        data.append('profession', this.state.profession);
        data.append('rate', this.state.rate);
        data.append('bio', this.state.bio);
        data.append('equipments', this.state.equipments);
        data.append('profilePicture', this.state.profilePicture);
        data.append('coverPicture', this.state.coverPicture);
        data.append('aadhaarCard', this.state.aadhaarCard);
        data.append('panCard', this.state.panCard);
        data.append('works[]', this.state.works[0]);
        data.append('works[]', this.state.works[1]);
        data.append('works[]', this.state.works[2]);
        data.append('works[]', this.state.works[3]);
        data.append('works[]', this.state.works[4]);
        data.append('works[]', this.state.works[5]);
        data.append('works[]', this.state.works[6]);
        data.append('works[]', this.state.works[7]);
        data.append('links', JSON.stringify(this.state.links));
        data.append('termsAndConditions', this.state.termsAndConditions);
        data.append('verified', false);
        const response = await fetch('http://localhost:3000/register/freelancer', {
          method: 'POST',
          body: data
        });

        const responseData = await response.json();
        Router.push('/contact_soon');
      } catch (error) {
        console.error(error);
      }
    };

    postData();
  };

  handelOtp = () => {
    const postData = async () => {
      try {
        await fetch('http://localhost:3000/verify/freelancer/phone', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            otp: this.state.otp,
            phone: this.state.phone,
            type: 'freelancer'
          })
        });
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
        await fetch('http://localhost:3000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            phone: this.state.phone,
            type: 'freelancer'
          })
        });
      }
      catch (error) {
        console.error(error);
      }
    };

    postData();
  }

  checkWorks = (val) => {
    if(val === 1)
    this.setState({ worksError: false });
    if(val === 2)
    this.setState({ addharError: false });
    if(val === 3)
    this.setState({ panError: false });
    if(val === 4)
    this.setState({ profilePicError: false });
    if(val === 5)
    this.setState({ coverPicError: false });
  }

  setPicError = (val,i) => {
    if(i === 1)
    this.setState({ profilePicError: val });
    if(i === 2)
    this.setState({ coverPicError: val });
    if(i === 3)
    this.setState({ addharError: val });
    if(i === 4)
    this.setState({ panError: val });
  }

  setWarns = (val, i) => {
    if(i === -1){
      for(let i = 0; i < 12; i++)
        this.state.warns[i] = val;
    }
    let temp = [...this.state.warns];
    temp[i] = val;
    this.setState({ warns: temp });
  }

  render() {
    return (
      <div className={styles.main} style={{ filter: this.state.blur }}>
        <Navbar />
        <div className={`${this.state.form ? styles.newbody : styles.body}`}>
          <div className={`${this.state.form ? styles.newLeft : styles.left}`}>
            {!this.state.form && <h1 className={styles.heading}>Fill Up The Registration Form.</h1>}
            {!this.state.form && <p className={styles.subHeading}>We only allow verified Freelancers on our website.</p>}
            <form className={`${this.state.form ? styles.newForm : styles.form}`}
              onSubmit={(event) => this.handleSubmit(event)} encType="multipart/form-data"
            >
              {this.state.error && <p className={styles.error}>Please provide all the inputs the fields.</p>}
              {this.state.phoneError && <p className={styles.error}>Please provide a valid phone number of 10 digits.</p>}
              {this.state.currentPage === 1 && <div className={styles.inputField} id={styles.firstname}>
                <label htmlFor="firstname" className={styles.label}><span style={{ color: 'white' }}>* </span>First name :</label>
                <input type='text' className={styles.input}
                  placeholder='Enter Your First name'
                  name='firstname' id='firstname' required
                  onChange={(event) => this.setState({ firstName: event.target.value, error: false })}
                  value={this.state.firstName}
                  maxLength={13}
                />
              </div>}
              {this.state.currentPage === 1 && <div className={styles.inputField} id={styles.lastname}>
                <label htmlFor="lastname" className={styles.label}><span style={{ color: 'white' }}>* </span>Last name :</label>
                <input type='text' className={styles.input}
                  placeholder='Enter Your Last name'
                  name='lastname' id='lastname' required
                  onChange={(event) => this.setState({ lastName: event.target.value, error: false })}
                  value={this.state.lastName}
                  maxLength={13}
                />
              </div>}
              {this.state.currentPage === 2 && <div className={styles.inputField} id={styles.phone}>
                <label htmlFor="phone" className={styles.label}><span style={{ color: 'white' }}>* </span>Phone :</label>
                <input type='number' id={styles.number} className={styles.input}
                  placeholder='Enter Your Phone no.'
                  name='phone' required
                  onChange={(event) => this.setState({ phone: event.target.value, error: false })}
                  value={this.state.phone}
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
              {this.state.currentPage === 4 && <div className={styles.inputField} id={styles.location}>
                <label htmlFor="location" className={styles.label}><span style={{ color: 'white' }}>* </span>Where do you live?</label>
                <select required className={styles.options} name="location"
                  onChange={(event) => this.setState({ location: event.target.value })} id="location"
                  value={this.state.location}
                >
                  <option className={styles.option} value="hyderabad">Hyderabad</option>
                  <option className={styles.option} value="chennai">Chennai</option>
                  <option className={styles.option} value="pune">Pune</option>
                  <option className={styles.option} value="kolkata">Kolkata</option>
                  <option className={styles.option} value="lucknow">Lucknow</option>
                  <option className={styles.option} value="jaipur">Jaipur</option>
                  <option className={styles.option} value="gurgaon">Gurgaon</option>
                  <option className={styles.option} value="goa">Goa</option>
                  <option className={styles.option} value="udaipur">Udaipur</option>
                  <option className={styles.option} value="chandigarh">Chandigarh</option>
                  <option className={styles.option} value="ahmedabad">Ahmedabad</option>
                  <option className={styles.option} value="indore">Indore</option>
                  <option className={styles.option} value="agra">Agra</option>
                  <option className={styles.option} value="kanpur">Kanpur</option>
                  <option className={styles.option} value="bhopal">Bhopal</option>
                  <option className={styles.option} value="kochi">Kochi</option>
                  <option className={styles.option} value="nagpur">Nagpur</option>
                  <option className={styles.option} value="dehradun">Dehradun</option>
                  <option className={styles.option} value="thane">Thane</option>
                  <option className={styles.option} value="surat">Surat</option>
                  <option className={styles.option} value="vadodara">Vadodara</option>
                  <option className={styles.option} value="visakhapatnam">Visakhapatnam</option>
                  <option className={styles.option} value="bhubaneswar">Bhubaneswar</option>
                  <option className={styles.option} value="raipur">Raipur</option>
                  <option className={styles.option} value="coimbatore">Coimbatore</option>
                  <option className={styles.option} value="jalandhar">Jalandhar</option>
                </select>
              </div>}
              {this.state.currentPage === 5 && <div className={styles.inputField} id={styles.profession}>
                <label htmlFor="profession" className={styles.label}><span style={{ color: 'white' }}>* </span>What is your profession?</label>
                <select required className={styles.options} name="profession"
                  onChange={(event) => this.setState({ profession: event.target.value })} id="profession"
                  value={this.state.profession}
                >
                  <option className={styles.option} value="photographer">Photographer</option>
                  <option className={styles.option} value="cinematographer">Cinematographer</option>
                  <option className={styles.option} value="drone_operator">Drone Operator</option>
                </select>
              </div>}
              {this.state.currentPage === 6 && <div className={styles.inputField} id={styles.rate}>
                <label htmlFor="rate" className={styles.label}><span style={{ color: 'white' }}>* </span>What is your rate per hour?</label>
                {this.state.rate && <p className={styles.rate}>Rs. {this.state.rate} / Hour</p>}
                <input required className={styles.range} name="rate" type='range' min='1000' max='50000' step='100'
                  onChange={(event) => this.setState({ rate: event.target.value })} id="rate"
                  value={this.state.rate}
                />
              </div>}
              {this.state.textareaError && <p className={styles.error}>Please provide a bio of less than 100 characters.</p>}
              {this.state.currentPage === 7 && <div className={styles.inputField} id={styles.bio}>
                <label htmlFor="bio" className={styles.label}><span style={{ color: 'white' }}>* </span>Bio :</label>
                <textarea required name="bio" id="bio" cols="30" rows="10"
                  onChange={(event) => this.handleTextChange(event, 1)}
                  className={styles.textarea} placeholder='Write Your bio here...'
                  value={this.state.bio}>
                </textarea>
              </div>}
              {!this.state.form && this.state.currentPage === 8 && <div className={styles.inputField} id={styles.equipment}>
                <label htmlFor="equipments" className={styles.label}><span style={{ color: 'white' }}>* </span>Equipments Available :</label>
                <textarea required name="equipments" id="equipments" cols="30" rows="10"
                  onChange={(event) => this.handleTextChange(event, 2)}
                  className={styles.textarea} placeholder='Write Your equipments here...'
                  value={this.state.equipments}>
                </textarea>
              </div>}
              {!this.state.form && <div className={styles.btns}>
                <button className={styles.NextBtn} type='button' onClick={() => this.increProgress(14.25)}>{this.state.btn}</button>
                <button className={styles.backBtn} type='button' onClick={() => this.decreProgress(14.25)}>Back</button>
              </div>}
              {this.state.form && <Verification
                getVericationDetails={this.getVericationDetails}
                checkWorks={this.checkWorks}
                worksError={this.state.worksError}
                addharError={this.state.addharError}
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
              <h1 className={styles.heading}>Take Control of Your Career.</h1>
              <p className={styles.subHeading}>Join our Platform and Start Earning on Your Own Terms!</p>
              <hr className={styles.divider} />
            </div>
            <div className={styles.features}>
              <div className={styles.freelancer}>
                <h1 className={styles.minHeading}>For Freelancers</h1>
                <div className={styles.feature}>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "black", }} /><p>Helps You get more reach</p>
                </div>
                <div className={styles.feature}>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "black", }} /><p>All Verified Companies</p>
                </div>
                <div className={styles.feature}>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "black", }} /><p>Maintains Privacy and Fully Transparent</p>
                </div>
              </div>
              <Image src='/ani1.png' alt='registration' width='200' height='200' className={styles.img} />
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

export default Freelancer;