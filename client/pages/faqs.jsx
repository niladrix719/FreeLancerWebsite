import Navbar from '@/components/Navbar'
import styles from '../styles/Faqs.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';

class faqs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'general',
    }
  }

  generalShow = () => {
    this.setState({ currentTab: 'general' });
  }

  privacyShow = () => {
    this.setState({ currentTab: 'privacy' });
  }

  servicesShow = () => {
    this.setState({ currentTab: 'services' });
  }

  render() {

    return (
      <div className={styles.faqs}>
        <Navbar />
        <div className={styles.body}>
          <h1 className={styles.heading}>Questions? Look here.</h1>
          <div className={styles.container}>
            <Link className={styles.subHeading} href='/contact'>Can&apos;t find an Answer contact us on fipezocare@gmail.com</Link>
            <hr className={styles.divider} />
          </div>
          <div className={styles.content}>
            <div className={styles.categories}>
              <h1 className={styles.top}>Table of Content</h1>
              <ul className={styles.lists}>
                <li className={`${styles.list} ${this.state.currentTab === 'general' ? styles.active : ''}`}
                  onClick={this.generalShow} id={styles.generalTab}>General
                </li>
                <li className={`${styles.list} ${this.state.currentTab === 'privacy' ? styles.active : ''}`}
                  onClick={this.privacyShow} id={styles.privacyTab}>Safety and Privacy
                </li>
                <li className={`${styles.list} ${this.state.currentTab === 'services' ? styles.active : ''}`}
                  onClick={this.servicesShow} id={styles.servicesTab}>Services
                </li>
              </ul>
            </div>
            {this.state.currentTab === 'general' && <ul className={styles.qnas} id={styles.general}>
              <li><FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                &nbsp; &nbsp; <h1 className={styles.summary}>Why Fipezo?</h1>
                <p className={styles.details}>
                  Fipezo is a user-friendly platform that allows clients to easily find and connect with skilled freelancers from various fields
                </p>
              </li>
              <hr className={styles.divider} />
              <li><FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                &nbsp; &nbsp; <h1 className={styles.summary}>What is Freelancing?</h1>
              </li>
              <hr className={styles.divider} />
              <li><FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                &nbsp; &nbsp; <h1 className={styles.summary}>How to Register as an Freelancer?</h1>
              </li>
              <hr className={styles.divider} />
              <li><FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                &nbsp; &nbsp; <h1 className={styles.summary}>How to Register as an Company?</h1>
              </li>
            </ul>}
            {this.state.currentTab === 'privacy' && <ul className={styles.qnas} id={styles.privacy}>
              <li><FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                &nbsp; &nbsp; <h1 className={styles.summary}>How is my Privacy of my data safe?</h1>
              </li>
              <hr className={styles.divider} />
              <li><FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                &nbsp; &nbsp; <h1 className={styles.summary}>What sensitive information does Fipezo collect?</h1>
              </li>
              <hr className={styles.divider} />
              <li><FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                &nbsp; &nbsp; <h1 className={styles.summary}>what information does Fipezo discloses?</h1>
              </li>
              <hr className={styles.divider} />
              <li><FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                &nbsp; &nbsp; <h1 className={styles.summary}>Whom is the data disclosed to?</h1>
              </li>
            </ul>}
            {this.state.currentTab === 'services' && <ul className={styles.qnas} id={styles.services}>
              <li><FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                &nbsp; &nbsp; <h1 className={styles.summary}>What Service does Fipezo provide?</h1>
              </li>
              <hr className={styles.divider} />
              <li><FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                &nbsp; &nbsp; <h1 className={styles.summary}>What are the fees associated with your services?</h1>
              </li>
              <hr className={styles.divider} />
              <li><FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                &nbsp; &nbsp; <h1 className={styles.summary}>What are the accepted payment methods?</h1>
              </li>
            </ul>}
          </div>
        </div>
      </div>
    )
  }
}

export default faqs;