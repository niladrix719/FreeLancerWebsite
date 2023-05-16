import styles from '@/styles/Details.module.css'
import ProfileNav from '@/components/ProfileNav'
import Reviews from '@/components/Reviews'
import PortfolioCard from '@/components/PortfolioCard'
import { useEffect, useState } from 'react'

function Details(props) {
  const [showReviews, setShowReviews] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [works, setWorks] = useState([]);

  const handleReviews = () => {
    setShowReviews(true);
    setShowPortfolio(false);
  }

  const handlePortfolio = () => {
    setShowReviews(false);
    setShowPortfolio(true);
  }

  useEffect(() => {
    setWorks(props.works);
  }, [props.works]);

  return (
    <div className={styles.details}>
      <ProfileNav handleReviews={handleReviews} handlePortfolio={handlePortfolio} />
      {showReviews && <Reviews />}
      {showPortfolio && <div className={styles.portfolio}>
        {works.map((work, index) => {
          return (
            <PortfolioCard key={index} work={work} />
          )
        })}
      </div>}
    </div>
  )
}

export default Details;