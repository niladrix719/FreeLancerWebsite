import styles from '../styles/FeatureCard.module.css';
import Image from 'next/image';

function FeatureCard(props) {
  return (
    <div className={styles.feature_card} style={{backgroundColor: props.color}}>
      <h1 className={styles.heading}>{props.heading}</h1>
      <p>{props.subHeading}</p>
      <Image src={props.image} height='300' width='300'/>
    </div>
  )
}

export default FeatureCard;