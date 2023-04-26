import styles from '@/styles/Review.module.css';
import Image from 'next/image';

function Review() {
  return (
    <div className={styles.review}>
      <div className={styles.user_info}>
        <Image className={styles.avatar} src="/dp.png" alt="User avatar" width='90' height='90' />
        <div className={styles.user_details}>
          <h3 className={styles.user_name}>John Doe</h3>
          <p className={styles.user_location}>New York, NY</p>
        </div>
      </div>
      <div className={styles.review_details}>
        <h4 className={styles.review_title}>Great experience!</h4>
        <p className={styles.review_text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec leo at ex bibendum aliquam ac id enim.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Nullam facilisis risus eros, vel ullamcorper velit consectetur vel. Proin quis ex in tortor suscipit malesuada ac non turpis.
        </p>
      </div>
    </div>
  )
}

export default Review;