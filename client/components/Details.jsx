import styles from '@/styles/Details.module.css'
import ProfileNav from '@/components/ProfileNav'
import Reviews from '@/components/Reviews'
import PortfolioCard from '@/components/PortfolioCard'

function Details() {
  return (
    <div className={styles.details}>
      <ProfileNav />
      <PortfolioCard />
    </div>
  )
}

export default Details