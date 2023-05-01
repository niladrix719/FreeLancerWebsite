import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '../../styles/Freelancer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Footer from '@/components/Footer'

class Freelancer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      currentPage: 1,
      btn: 'Next',
      btnType: 'button',
      firstName: '',
      lastName: '',
      phone: '',
      profession: '',
      bio: '',
      equipments: '',
      error: false
    }
  }

  increProgress = (val) => {
    if (this.state.progress + val > 125){
      return;
    }

    if((this.state.firstName === '' || this.state.lastName === '') && this.state.currentPage === 1){
      this.setState({error: true});
      return;
    }
    
    if(this.state.phone === '' && this.state.currentPage === 2){
      this.setState({error: true});
      return;
    }

    if(this.state.profession === '' && this.state.currentPage === 3){
      this.setState({error: true});
      return;
    }

    if(this.state.bio === '' && this.state.currentPage === 4){
      this.setState({error: true});
      return;
    }

    if(this.state.equipments === '' && this.state.currentPage === 5){
      this.setState({error: true});
      return;
    }

    if(this.state.currentPage === 5){
      this.setState({error: false});
      this.handleSubmit();
      return;
    }

    this.setState({ progress: this.state.progress + val });
    this.setState({error: false});
    this.increPage();
  }

  decreProgress = (val) => {
    if (this.state.progress - val < 0)
      return;

    this.setState({ progress: this.state.progress - val });
    this.decrePage();
  }

  increPage = () => {
    if (this.state.currentPage === 5) {
      return;
    }

    if (this.state.currentPage === 4) {
      this.setState({ btn: 'Submit' });
      this.setState({ btnType: 'submit' });
    }

    this.setState({ currentPage: this.state.currentPage + 1 });
  }

  decrePage = () => {
    if (this.state.currentPage === 1)
      return;

    if (this.state.currentPage === 5) {
      this.setState({ btn: 'Next' });
      this.setState({ btnType: 'button' });
    }

    this.setState({ currentPage: this.state.currentPage - 1 });
  }

  handleSubmit = () => {
    const postData = async () => {
      try {
        const response = await fetch('http://localhost:3000/register/freelancer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            phone: this.state.phone,
            profession: this.state.profession,
            bio: this.state.bio,
            equipments: this.state.equipments
          })
        });
        const data = await response.json();
        localStorage.setItem('freelancer', JSON.stringify(data));
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
            <p className={styles.subHeading}>We only allow verified Freelancers on our website.</p>
            <form className={styles.form}>
              {this.state.error && <p className={styles.error}>Please provide all the inputs the fields.</p>}
              {this.state.currentPage === 1 && <div className={styles.inputField} id={styles.firstname}>
                <label htmlFor="firstname" className={styles.label}><span style={{color : 'red'}}>* </span>First name :</label>
                <input type='text' className={styles.input}
                  placeholder='Enter Your First name'
                  name='firstname' id='firstname' required
                  onChange={(event) => this.setState({ firstName: event.target.value })} 
                />
              </div>}
              {this.state.currentPage === 1 && <div className={styles.inputField} id={styles.lastname}>
                <label htmlFor="lastname" className={styles.label}><span style={{color : 'red'}}>* </span>Last name :</label>
                <input type='text' className={styles.input}
                  placeholder='Enter Your Last name'
                  name='lastname' id='lastname' required
                  onChange={(event) => this.setState({ lastName: event.target.value })} 
                />
              </div>}
              {this.state.currentPage === 2 && <div className={styles.inputField} id={styles.phone}>
                <label htmlFor="phone" className={styles.label}><span style={{color : 'red'}}>* </span>Phone :</label>
                <input type='number' id={styles.number}className={styles.input}
                  placeholder='Enter Your Phone no.'
                  name='phone' required
                  onChange={(event) => this.setState({ phone: event.target.value })}
                  max='10' min='10'
                />
              </div>}
              {this.state.currentPage === 3 && <div className={styles.inputField} id={styles.profession}>
                <label htmlFor="profession" className={styles.label}><span style={{color : 'red'}}>* </span>What is your profession?</label>
                <select required className={styles.options} name="profession" onChange={(event) => this.setState({ profession: event.target.value })} id="profession">
                  <option className={styles.option} value="photographer">Photographer</option>
                  <option className={styles.option} value="cinematographer">Cinematographer</option>
                  <option className={styles.option} value="drone_operator">Drone Operator</option>
                </select>
              </div>}
              {this.state.currentPage === 4 && <div className={styles.inputField} id={styles.bio}>
                <label htmlFor="bio" className={styles.label}><span style={{color : 'red'}}>* </span>Bio :</label>
                <textarea required name="bio" id="bio" cols="30" rows="10" onChange={(event) => this.setState({ bio: event.target.value })} className={styles.textarea} placeholder='Write Your bio here...'></textarea>
              </div>}
              {this.state.currentPage === 5 && <div className={styles.inputField} id={styles.equipment}>
                <label htmlFor="equipments" className={styles.label}><span style={{color : 'red'}}>* </span>Equipments Available :</label>
                <textarea required name="equipments" id="equipments" cols="30" rows="10" onChange={(event) => this.setState({ equipments: event.target.value })} className={styles.textarea} placeholder='Write Your equipments here...'></textarea>
              </div>}
              <div className={styles.btns}>
                <button className={styles.NextBtn} type={this.state.btnType} onClick={() => this.increProgress(25)}>{this.state.btn}</button>
                <button className={styles.backBtn} type='button' onClick={() => this.decreProgress(25)}>Back</button>
              </div>
            </form>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>
              <h1 className={styles.heading}>Take Control of Your Career</h1>
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
              <Image src='/registration1.png' alt='registration' width={200} height={200} />
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

export default Freelancer;