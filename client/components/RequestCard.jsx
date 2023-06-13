import styles from '../styles/RequestCard.module.css';

function RequestCard(props) {
  return (
    <div className={styles.requestCard}>
      <h2 className={styles.cardTitle}>{props.request.fullname}</h2>
      <p className={styles.cardInfo}>Phone: {props.request.phone}</p>
      <p className={styles.cardInfo}>Description : {props.request.description}</p>
      <p className={styles.cardInfo}>Address : {props.request.address}</p>
      <p className={styles.cardInfo}>Date : {props.request.date}</p>
      <p className={styles.cardInfo}>Time : {props.request.startTime} - {props.request.endTime}</p>
      <p className={styles.cardInfo}>Budget : {props.request.budget}</p>
      <div className={styles.btns}>
        <button className={styles.btn} id={styles.accept}>Accept</button>
        <button className={styles.btn} id={styles.decline}>Decline</button>
      </div>
    </div>
  )
}

export default RequestCard;