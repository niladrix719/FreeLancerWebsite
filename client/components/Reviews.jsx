import styles from '../styles/Reviews.module.css';
import Review from '@/components/Review';

function Reviews(props) {
  return (
    <div className={styles.reviews}>
      {props.reviews.map((review) => (
        <Review key={review._id} review={review} />
      ))}
    </div>
  );
}

export default Reviews;