import styles from '@/styles/ProfileNav.module.css'

function ProfileNav() {
  return (
    <nav className={styles.profile_nav}>
      <h1 className={styles.nav} id={styles.review}>Reviews</h1>
      <h1 className={styles.nav} id={styles.portfolio}>Portfolio</h1>
      <button className={styles.btn}>Hire</button>
    </nav>
  )
}

export default ProfileNav