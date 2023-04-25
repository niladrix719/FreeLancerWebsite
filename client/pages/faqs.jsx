import Navbar from '@/components/Navbar'
import styles from '../styles/Faqs.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function faqs() {
  function privacyShow() {
    const general = document.getElementById(styles.general);
    const privacy = document.getElementById(styles.privacy);
    const services = document.getElementById(styles.services);

    general.style.display = "none";
    privacy.style.display = "block";
    services.style.display = "none";

    const generalTab = document.getElementById(styles.generalTab);
    const privacyTab = document.getElementById(styles.privacyTab);
    const servicesTab = document.getElementById(styles.servicesTab);

    generalTab.style.color = 'black';
    privacyTab.style.color = '#00aaff';
    servicesTab.style.color = 'black';
  }

  function generalShow() {
    const general = document.getElementById(styles.general);
    const privacy = document.getElementById(styles.privacy);
    const services = document.getElementById(styles.services);

    general.style.display = "block";
    privacy.style.display = "none";
    services.style.display = "none";

    const generalTab = document.getElementById(styles.generalTab);
    const privacyTab = document.getElementById(styles.privacyTab);
    const servicesTab = document.getElementById(styles.servicesTab);

    generalTab.style.color = '#00aaff';
    privacyTab.style.color = 'black';
    servicesTab.style.color = 'black';
  }

  function servicesShow() {
    const general = document.getElementById(styles.general);
    const privacy = document.getElementById(styles.privacy);
    const services = document.getElementById(styles.services);

    general.style.display = "none";
    privacy.style.display = "none";
    services.style.display = "block";

    const generalTab = document.getElementById(styles.generalTab);
    const privacyTab = document.getElementById(styles.privacyTab);
    const servicesTab = document.getElementById(styles.servicesTab);

    generalTab.style.color = 'black';
    privacyTab.style.color = 'black';
    servicesTab.style.color = '#00aaff';
  }

  return (
    <div className={styles.faqs}>
      <Navbar />
      <div className={styles.body}>
        <h1 className={styles.heading}>Questions? Look here.</h1>
        <div className={styles.container}>
          <Link className={styles.subHeading} href='/contact'>Can't find an Answer contact us on fipezocare@gmail.com</Link>
          <hr className={styles.divider} />
        </div>
        <div className={styles.content}>
          <div className={styles.categories}>
            <h1 className={styles.top}>Table of Content</h1>
            <ul className={styles.lists}>
              <li className={styles.list} onClick={generalShow} id={styles.generalTab}>General</li>
              <li className={styles.list} onClick={privacyShow} id={styles.privacyTab}>Safety and Privacy</li>
              <li className={styles.list} onClick={servicesShow} id={styles.servicesTab}>Services</li>
            </ul>
          </div>
          <ul className={styles.qnas} id={styles.general}>
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
          </ul>
          <ul className={styles.qnas} id={styles.privacy}>
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
          </ul>
          <ul className={styles.qnas} id={styles.services}>
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
          </ul>
        </div>
      </div>
    </div>
  )
}

export default faqs;