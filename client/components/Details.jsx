import styles from '@/styles/Details.module.css'
import ProfileNav from '@/components/ProfileNav'
import Reviews from '@/components/Reviews'
import PortfolioCard from '@/components/PortfolioCard'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

function Details(props) {
  const [showReviews, setShowReviews] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(true);
  const [works, setWorks] = useState([]);
  const [showMore, setShowMore] = useState(false);

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
          if (index > 5 && !showMore)
            return;
          return (
            <>
              {(props.profession === 'photographer' || props.profession === 'drone_operator') && <PortfolioCard key={index} i={index} work={work} handleClick={props.handleClick} />}
              {props.profession === 'cinematographer' && <div className='mb-4'><ReactPlayer controls={true} width='280px' height='250px' url={work} /></div>}
            </>
          )
        })}
      </div>}
      <div className={styles.cont}>
        {showPortfolio && works.length > 5 && !showMore && <button className={styles.showMore} onClick={() => setShowMore(true)}>Show More...</button>}
        {showPortfolio && works.length > 5 && showMore && <button className={styles.showMore} onClick={() => setShowMore(false)}>Show Less</button>}
      </div>
      {showReviews && <Reviews reviews={props.reviews} />}
    </div>
  )
}

export default Details;