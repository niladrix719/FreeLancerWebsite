import styles from '@/styles/Details.module.css'
import ProfileNav from '@/components/ProfileNav'
import Reviews from '@/components/Reviews'
import PortfolioCard from '@/components/PortfolioCard'
import { useEffect, useState } from 'react'

function Details(props) {
  const [showReviews, setShowReviews] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(true);
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
      {showPortfolio && <div className={styles.portfolio}>
        {works.map((work, index) => {
          return (
            <PortfolioCard key={index} work={work} handleClick={props.handleClick} />
          )
        })}
      </div>}
      {showReviews && <Reviews reviews={props.reviews} />}
    </div>
  )
}

export default Details;