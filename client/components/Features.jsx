import styles from '../styles/Features.module.css'
import FeatureCard from '@/components/FeatureCard';

function Features() {
  return (
    <div className={styles.features}>
        <FeatureCard
          heading='All Verified Freelancers'
          subHeading="We believe in quality over quantity."
          image='/pc.png'
          color='#bdc8fa'
        />
        <FeatureCard
          heading='All Verified Companies'
          subHeading="We believe in quality over quantity."
          image='/pc.png'
          color='#daf5ef'
        />
    </div>
  )
}

export default Features;