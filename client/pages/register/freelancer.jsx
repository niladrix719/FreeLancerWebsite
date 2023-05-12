import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '../../styles/Freelancer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Verification from '@/components/Verification'
import profile from '../profile'

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
      location: 'kolkata',
      profession: 'photographer',
      rate: 800,
      bio: '',
      equipments: '',
      profilePicture: null,
      coverPicture: null,
      addharCard: null,
      panCard: null,
      works: [],
      links: { instagram: '', facebook: '', twitter: '', youtube: '' },
      termsAndConditions: false,
      error: false,
      form: false
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

    if (this.state.location === '' && this.state.currentPage === 3) {
      this.setState({ error: true });
      return;
    }

    if (this.state.profession === '' && this.state.currentPage === 4) {
      this.setState({ error: true });
      return;
    }

    if (this.state.rate === '' && this.state.currentPage === 5) {
      this.setState({ error: true });
      return;
    }

    if (this.state.bio === '' && this.state.currentPage === 6) {
      this.setState({ error: true });
      return;
    }

    if (this.state.equipments === '' && this.state.currentPage === 7) {
      this.setState({ error: true });
      return;
    }

    if (this.state.currentPage === 7) {
      this.setState({ error: false });
      this.setState({ form: true });
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
    if (this.state.currentPage === 7) {
      return;
    }

    if (this.state.currentPage === 6) {
      this.setState({ btn: 'Submit' });
    }

    this.setState({ currentPage: this.state.currentPage + 1 });
  }

  decrePage = () => {
    if (this.state.currentPage === 1)
      return;

    if (this.state.currentPage === 7) {
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
      this.setState({ addharCard: val });
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

  handleSubmit = (event) => {
    event.preventDefault();
    const postData = async () => {
      try {
        console.log(this.state);
        const data = new FormData();
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
        data.append('addharCard', this.state.addharCard);
        data.append('panCard', this.state.panCard);
        data.append('works[]', this.state.works[0]);
        data.append('works[]', this.state.works[1]);
        data.append('works[]', this.state.works[2]);
        data.append('works[]', this.state.works[3]);
        data.append('works[]', this.state.works[4]);
        data.append('works[]', this.state.works[5]);
        data.append('works[]', this.state.works[6]);
        data.append('works[]', this.state.works[7]);
        data.append('links', this.state.links);
        data.append('termsAndConditions', this.state.termsAndConditions);
        for (var [key, value] of data.entries()) {
          console.log(key, value);
        }
        const response = await fetch('http://localhost:3000/register/freelancer', {
          method: 'POST',
          body: data
        });

        const responseData = await response.json();
        localStorage.setItem('freelancer', JSON.stringify(responseData));
      } catch (error) {
        console.error(error);
      }
    };

    postData();
  };

  render() {
    return (
      <div className={styles.main}>
        <Navbar />
        <div className={`${this.state.form ? styles.newbody : styles.body}`}>
          <div className={`${this.state.form ? styles.newLeft : styles.left}`}>
            {!this.state.form && <h1 className={styles.heading}>Fill Up The Registration Form.</h1>}
            {!this.state.form && <p className={styles.subHeading}>We only allow verified Freelancers on our website.</p>}
            <form className={`${this.state.form ? styles.newForm : styles.form}`}
              onSubmit={(event) => this.handleSubmit(event)} encType="multipart/form-data"
            >
              {this.state.error && <p className={styles.error}>Please provide all the inputs the fields.</p>}
              {this.state.currentPage === 1 && <div className={styles.inputField} id={styles.firstname}>
                <label htmlFor="firstname" className={styles.label}><span style={{ color: 'red' }}>* </span>First name :</label>
                <input type='text' className={styles.input}
                  placeholder='Enter Your First name'
                  name='firstname' id='firstname' required
                  onChange={(event) => this.setState({ firstName: event.target.value })}
                  value={this.state.firstName}
                  maxLength={15}
                />
              </div>}
              {this.state.currentPage === 1 && <div className={styles.inputField} id={styles.lastname}>
                <label htmlFor="lastname" className={styles.label}><span style={{ color: 'red' }}>* </span>Last name :</label>
                <input type='text' className={styles.input}
                  placeholder='Enter Your Last name'
                  name='lastname' id='lastname' required
                  onChange={(event) => this.setState({ lastName: event.target.value })}
                  value={this.state.lastName}
                  maxLength={15}
                />
              </div>}
              {this.state.currentPage === 2 && <div className={styles.inputField} id={styles.phone}>
                <label htmlFor="phone" className={styles.label}><span style={{ color: 'red' }}>* </span>Phone :</label>
                <input type='number' id={styles.number} className={styles.input}
                  placeholder='Enter Your Phone no.'
                  name='phone' required
                  onChange={(event) => this.setState({ phone: event.target.value })}
                  value={this.state.phone}
                  max={10}
                />
              </div>}
              {this.state.currentPage === 3 && <div className={styles.inputField} id={styles.location}>
                <label htmlFor="location" className={styles.label}><span style={{ color: 'red' }}>* </span>Where do you live?</label>
                <select required className={styles.options} name="location"
                  onChange={(event) => this.setState({ location: event.target.value })} id="location"
                  value={this.state.location}
                >
                  <option className={styles.option} value="kolkata">Kolkata</option>
                  <option className={styles.option} value="outside kolkata">Outside Kolkata</option>
                </select>
              </div>}
              {this.state.currentPage === 4 && <div className={styles.inputField} id={styles.profession}>
                <label htmlFor="profession" className={styles.label}><span style={{ color: 'red' }}>* </span>What is your profession?</label>
                <select required className={styles.options} name="profession"
                  onChange={(event) => this.setState({ profession: event.target.value })} id="profession"
                  value={this.state.profession}
                >
                  <option className={styles.option} value="photographer">Photographer</option>
                  <option className={styles.option} value="cinematographer">Cinematographer</option>
                  <option className={styles.option} value="drone_operator">Drone Operator</option>
                </select>
              </div>}
              {this.state.currentPage === 5 && <div className={styles.inputField} id={styles.rate}>
                <label htmlFor="rate" className={styles.label}><span style={{ color: 'red' }}>* </span>What is your rate per hour?</label>
                {this.state.rate && <p className={styles.rate}>Rs. {this.state.rate} / Hour</p>}
                <input required className={styles.options} name="rate" type='range' min='100' max='2000' step='100'
                  onChange={(event) => this.setState({ rate: event.target.value })} id="rate"
                  value={this.state.rate}
                />
              </div>}
              {this.state.currentPage === 6 && <div className={styles.inputField} id={styles.bio}>
                <label htmlFor="bio" className={styles.label}><span style={{ color: 'red' }}>* </span>Bio :</label>
                <textarea required name="bio" id="bio" cols="30" rows="10"
                  onChange={(event) => this.setState({ bio: event.target.value })}
                  className={styles.textarea} placeholder='Write Your bio here...'
                  value={this.state.bio}>
                </textarea>
              </div>}
              {!this.state.form && this.state.currentPage === 7 && <div className={styles.inputField} id={styles.equipment}>
                <label htmlFor="equipments" className={styles.label}><span style={{ color: 'red' }}>* </span>Equipments Available :</label>
                <textarea required name="equipments" id="equipments" cols="30" rows="10"
                  onChange={(event) => this.setState({ equipments: event.target.value })}
                  className={styles.textarea} placeholder='Write Your equipments here...'
                  value={this.state.equipments}>
                </textarea>
              </div>}
              {!this.state.form && <div className={styles.btns}>
                <button className={styles.NextBtn} type='button' onClick={() => this.increProgress(16.67)}>{this.state.btn}</button>
                <button className={styles.backBtn} type='button' onClick={() => this.decreProgress(16.67)}>Back</button>
              </div>}
              {this.state.form && <Verification
                getVericationDetails={this.getVericationDetails}
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
                  <FontAwesomeIcon icon={faCheck} style={{ color: "#00aaff", }} /><p>Helps You get more reach</p>
                </div>
                <div className={styles.feature}>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "#00aaff", }} /><p>All Verified Companies</p>
                </div>
                <div className={styles.feature}>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "#00aaff", }} /><p>Maintains Privacy and Fully Transparent</p>
                </div>
              </div>
              <Image src='/registration1.png' alt='registration' width='200' height='200' className={styles.img} />
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