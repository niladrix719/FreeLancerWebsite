import styles from '../styles/Featured.module.css'
import ProfileCard from './ProfileCard';

export default function Featured() {
  return (
    <div className={styles.featured}>
      <h1 className={styles.heading}>Featured Freelancers</h1>
      <p className={styles.subHeading}>Discover Skilled Freelancers on Our Platform</p>
      <div className={styles.cards}>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  )
}