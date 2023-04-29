import Navbar from '@/components/Navbar'
import styles from '../styles/Faqs.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';
import Footer from '@/components/Footer';

class faqs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'general',
      currentAnswer: ''
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

  showAnswer = (val) => {
    if (val === this.state.currentAnswer) {
      this.setState({ currentAnswer: '' });
      return;
    }

    this.setState({ currentAnswer: val });
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
              <li onClick={() => this.showAnswer('first')} style={{ cursor: 'pointer' }}>
                {this.state.currentAnswer === 'first' ?
                  <FontAwesomeIcon icon={faMinus} style={{ color: "#00aaff" }} /> :
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                }
                &nbsp; &nbsp; <h1 className={styles.summary}>What is Fipezo?</h1>
                {this.state.currentAnswer === 'first' && <p className={styles.details}>
                  Fipezo is a user-friendly platform that allows clients to easily find and connect with skilled freelancers from various fields
                </p>}
              </li>
              <hr className={styles.divider} />
              <li onClick={() => this.showAnswer('second')} style={{ cursor: 'pointer' }}>
                {this.state.currentAnswer === 'second' ?
                  <FontAwesomeIcon icon={faMinus} style={{ color: "#00aaff" }} /> :
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                }
                &nbsp; &nbsp; <h1 className={styles.summary}>What is Freelancing?</h1>
                {this.state.currentAnswer === 'second' && <p className={styles.details}>
                  Freelancing is a term used to describe a person who is self-employed and not necessarily committed to a particular employer long-term.
                </p>}
              </li>
              <hr className={styles.divider} />
              <li onClick={() => this.showAnswer('third')} style={{ cursor: 'pointer' }}>
                {this.state.currentAnswer === 'third' ?
                  <FontAwesomeIcon icon={faMinus} style={{ color: "#00aaff" }} /> :
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                }
                &nbsp; &nbsp; <h1 className={styles.summary}>How to Register as an Freelancer?</h1>
                {this.state.currentAnswer === 'third' && <p className={styles.details}>
                  To register as an Freelancer, you need to click on the Register button on the top right corner of the page and fill in the details.
                </p>}
              </li>
              <hr className={styles.divider} />
              <li onClick={() => this.showAnswer('fourth')} style={{ cursor: 'pointer' }}>
                {this.state.currentAnswer === 'fourth' ?
                  <FontAwesomeIcon icon={faMinus} style={{ color: "#00aaff" }} /> :
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                }
                &nbsp; &nbsp; <h1 className={styles.summary}>How to Register as an Company?</h1>
                {this.state.currentAnswer === 'fourth' && <p className={styles.details}>
                  To register as an Company, you need to click on the Register button on the top right corner of the page and fill in the details.
                </p>}
              </li>
            </ul>}
            {this.state.currentTab === 'privacy' && <ul className={styles.qnas} id={styles.privacy}>
              <li onClick={() => this.showAnswer('fifth')} style={{ cursor: 'pointer' }}>
                {this.state.currentAnswer === 'fifth' ?
                  <FontAwesomeIcon icon={faMinus} style={{ color: "#00aaff" }} /> :
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                }
                &nbsp; &nbsp; <h1 className={styles.summary}>How is my Privacy of my data safe?</h1>
                {this.state.currentAnswer === 'fifth' && <p className={styles.details}>
                  Fipezo is committed to protecting the privacy of its users. We aim to provide a safe, secure user experience. We will use our best efforts to ensure that the information you submit to us remains private, and is used only for the purposes as set forth herein. The following reflects our commitment to you.
                </p>}
              </li>
              <hr className={styles.divider} />
              <li onClick={() => this.showAnswer('sixth')} style={{ cursor: 'pointer' }}>
                {this.state.currentAnswer === 'sixth' ?
                  <FontAwesomeIcon icon={faMinus} style={{ color: "#00aaff" }} /> :
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                }
                &nbsp; &nbsp; <h1 className={styles.summary}>What sensitive information does Fipezo collect?</h1>
                {this.state.currentAnswer === 'sixth' && <p className={styles.details}>
                  Fipezo collects the following sensitive information:
                </p>}
              </li>
              <hr className={styles.divider} />
              <li onClick={() => this.showAnswer('seventh')} style={{ cursor: 'pointer' }}>
                {this.state.currentAnswer === 'seventh' ?
                  <FontAwesomeIcon icon={faMinus} style={{ color: "#00aaff" }} /> :
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                }
                &nbsp; &nbsp; <h1 className={styles.summary}>what information does Fipezo discloses?</h1>
                {this.state.currentAnswer === 'seventh' && <p className={styles.details}>
                  Fipezo does not disclose any information to third parties.
                </p>}
              </li>
              <hr className={styles.divider} />
              <li onClick={() => this.showAnswer('eighth')} style={{ cursor: 'pointer' }}>
                {this.state.currentAnswer === 'eighth' ?
                  <FontAwesomeIcon icon={faMinus} style={{ color: "#00aaff" }} /> :
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                }
                &nbsp; &nbsp; <h1 className={styles.summary}>Whom is the data disclosed to?</h1>
                {this.state.currentAnswer === 'eighth' && <p className={styles.details}>
                  Fipezo does not disclose any information to third parties.
                </p>}
              </li>
            </ul>}
            {this.state.currentTab === 'services' && <ul className={styles.qnas} id={styles.services}>
              <li onClick={() => this.showAnswer('ninth')} style={{ cursor: 'pointer' }}>
                {this.state.currentAnswer === 'ninth' ?
                  <FontAwesomeIcon icon={faMinus} style={{ color: "#00aaff" }} /> :
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                }
                &nbsp; &nbsp; <h1 className={styles.summary}>What Service does Fipezo provide?</h1>
                {this.state.currentAnswer === 'ninth' && <p className={styles.details}>
                  Fipezo provides a platform for Freelancers and Companies to connect with each other.
                </p>}
              </li>
              <hr className={styles.divider} />
              <li onClick={() => this.showAnswer('tenth')} style={{ cursor: 'pointer' }}>
                {this.state.currentAnswer === 'tenth' ?
                  <FontAwesomeIcon icon={faMinus} style={{ color: "#00aaff" }} /> :
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                }
                &nbsp; &nbsp; <h1 className={styles.summary}>What are the fees associated with your services?</h1>
                {this.state.currentAnswer === 'tenth' && <p className={styles.details}>
                  Fipezo is currently free to use for Freelancers and Companies.
                </p>}
              </li>
              <hr className={styles.divider} />
              <li onClick={() => this.showAnswer('eleventh')} style={{ cursor: 'pointer' }}>
                {this.state.currentAnswer === 'eleventh' ?
                  <FontAwesomeIcon icon={faMinus} style={{ color: "#00aaff" }} /> :
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#00aaff" }} />
                }
                &nbsp; &nbsp; <h1 className={styles.summary}>What are the accepted payment methods?</h1>
                {this.state.currentAnswer === 'eleventh' && <p className={styles.details}>
                  Fipezo accepts all major credit cards and debit cards.
                </p>}
              </li>
            </ul>}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default faqs;