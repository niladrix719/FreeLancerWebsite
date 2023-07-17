import styles from '../styles/FreelancerPoints.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler , faSuitcase , faHeadphonesSimple} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function FreelancerPoints() {
  return (
    <div className={styles.points}>
      <div className={styles.left}>
        <div className={styles.text}>
          <h1 className={styles.heading}>Why Freelancers turn to <span className={styles.colorful}>Fipezo.</span></h1>
          <h1 className={styles.head}>Access the top 1% of talent on Upwork, and a full suite of hybrid workforce management tools. This is how innovation works now.</h1>
          <ul className={styles.ul}>
            <li>
              <p className={styles.para}><FontAwesomeIcon className={styles.icon} icon={faPenRuler} style={{color: "#9fd9e0",}} /> &nbsp; Get inspired by stories of to build a better future.</p>
            </li>
            <li>
              <p className={styles.para}><FontAwesomeIcon className={styles.icon} icon={faSuitcase} style={{color: "#9fd9e0",}} /> &nbsp; Get inspired by use Fipezo to build a better future.</p>
            </li>
            <li>
              <p className={styles.para}><FontAwesomeIcon className={styles.icon} icon={faHeadphonesSimple} style={{color: "#9fd9e0",}} /> &nbsp; Get inspired that use Fipezo to build a better future.</p>
            </li>
          </ul>
          <Link href='/faqs' className={styles.btn}>Learn More</Link>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  )
}

export default FreelancerPoints;