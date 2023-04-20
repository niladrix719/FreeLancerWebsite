import styles from '../styles/Reviews.module.css'
import Review from '@/components/Review'

function Reviews() {
  return (
    <div className={styles.reviews}>
        <Review />
        <Review />
    </div>
  )
}

export default Reviews