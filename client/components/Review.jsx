import styles from '@/styles/Review.module.css';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

function Review(props) {
  return (
    <div className={styles.review}>
      <div className={styles.user_info}>
        <Image className={styles.avatar} src="/dp.png" alt="User avatar" width='90' height='90' />
        <div className={styles.user_details}>
          <h3 className={styles.user_name}>{props.review.userDetails.firstname} {props.review.userDetails.lastname}</h3>
        </div>
      </div>
      <div className={styles.stars}>
        {[...Array(5)].map((star, index) => (
          <FaStar size={16} key={index} color={index + 1 <= props.review.stars ? '#fff707' : 'white'}/>
        ))}
      </div>
      <div className={styles.review_details}>
        <h4 className={styles.review_title}>{props.review.title}</h4>
        <p className={styles.review_text}>
          {props.review.review}
        </p>
      </div>
    </div>
  )
}

export default Review;