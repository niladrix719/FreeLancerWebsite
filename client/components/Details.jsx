import styles from '@/styles/Details.module.css'
import ProfileNav from '@/components/ProfileNav'
import Reviews from '@/components/Reviews'

function Details() {
  return (
    <div className={styles.details}>
      <ProfileNav />
      <Reviews />
    </div>
  )
}

export default Details