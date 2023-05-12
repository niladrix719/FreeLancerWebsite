import styles from '@/styles/Details.module.css'
import ProfileNav from '@/components/ProfileNav'
import Reviews from '@/components/Reviews'
import PortfolioCards from '@/components/PortfolioCards'
import { useState } from 'react'

function Details() {
  const [showReviews,setShowReviews] = useState(true);
  const [showPortfolio,setShowPortfolio] = useState(false);
  
  const handelReviews = () => {
    setShowReviews(true);
    setShowPortfolio(false);
  }

  const handelPortfolio = () => {
    setShowReviews(false);
    setShowPortfolio(true);
  }

  return (
    <div className={styles.details}>
      <ProfileNav handelReviews={handelReviews} handelPortfolio={handelPortfolio} />
      {showReviews && <Reviews />}
      {showPortfolio && <PortfolioCards />}
    </div>
  )
}

export default Details;