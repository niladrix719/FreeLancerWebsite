import styles from '@/styles/ProfileNav.module.css'

function ProfileNav(props) {
  return (
    <nav className={styles.profile_nav}>
      <h1 className={styles.nav} id={styles.review} onClick={props.handelReviews}>Reviews</h1>
      <h1 className={styles.nav} id={styles.portfolio} onClick={props.handelPortfolio}>Portfolio</h1>
      <button className={styles.btn}>Hire</button>
    </nav>
  )
}

export default ProfileNav;