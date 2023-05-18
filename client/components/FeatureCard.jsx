import Link from 'next/link';
import styles from '../styles/FeatureCard.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding , faBriefcase } from '@fortawesome/free-solid-svg-icons';

function FeatureCard(props) {
  return (
    <Link href={props.link} className={styles.feature_card} style={{backgroundColor: props.color}}>
      <Image src={props.image} className={styles.image} height='300' width='300' alt='feature'/>
      {props.type === 'company' && <FontAwesomeIcon className={styles.icon} icon={faBuilding} style={{color: "#1f1c1c",}} />}
      {props.type === 'freelancer' && <FontAwesomeIcon className={styles.icon} icon={faBriefcase} style={{color: "#1f1c1c",}} />}
      <h1 className={styles.heading}>{props.heading}</h1>
      <p>{props.subHeading}</p>
      <button className={styles.btn}>Register</button>
    </Link>
  )
}

export default FeatureCard;