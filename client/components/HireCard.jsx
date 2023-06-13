import styles from '../styles/RequestCard.module.css';

function HireCard(props) {
  return (
    <div className={styles.requestCard}>
      <h2 className={styles.cardTitle}>{props.hire.fullname}</h2>
      <p className={styles.cardInfo}>Phone: {props.hire.phone}</p>
      <p className={styles.cardInfo}>Description : {props.hire.description}</p>
      <p className={styles.cardInfo}>Address : {props.hire.address}</p>
      <p className={styles.cardInfo}>Date : {props.hire.date}</p>
      <p className={styles.cardInfo}>Time : {props.hire.startTime} - {props.hire.endTime}</p>
      <p className={styles.cardInfo}>Budget : {props.hire.budget}</p>
      <div className={styles.btns}>
        <button className={styles.btn} id={styles.accept}>Accept</button>
        <button className={styles.btn} id={styles.decline}>Decline</button>
      </div>
    </div>
  )
}

export default HireCard;