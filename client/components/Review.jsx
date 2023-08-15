import styles from '@/styles/Review.module.css';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

function Review(props) {
  const {profilePicture} = props.review.userDetails;
  return (
    <div className={styles.review}>
      <div className={styles.user_info}>
      <div className={styles.avatar} style={{backgroundImage: `url(${profilePicture === undefined ? '/dp.png' : `${process.env.SERVER_URL}/images/${profilePicture}`})`}}></div>
        <div className={styles.user_details}>
          <h3 className={styles.user_name}>{props.review.userDetails.firstname} {props.review.userDetails.lastname}</h3>
        </div>
      </div>
      <div className={styles.stars}>
        {[...Array(5)].map((star, index) => (
          <FaStar size={16} key={index} color={index + 1 <= props.review.stars ? '#fbbc04' : 'white'}/>
        ))}
      </div>
      <div className={styles.review_details}>
        <h4 className={`${styles.review_title} break-words`}>{props.review.title}</h4>
        <p className={`${styles.review_text} break-words`}>
          {props.review.review}
        </p>
      </div>
    </div>
  )
}

export default Review;