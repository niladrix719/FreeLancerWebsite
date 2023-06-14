import styles from '../styles/RequestCard.module.css';

function HireCard(props) {
  return (
    <div className={styles.requestCard}>
      <h2 className={styles.cardTitle}>{props.hire.freelancerDetails.firstname}&nbsp;
      {props.hire.freelancerDetails.lastname} - &nbsp;
      {props.hire.freelancerDetails.profession.charAt(0).toUpperCase()}{props.hire.freelancerDetails.profession.slice(1)}
      </h2>
      <h1 className={styles.cardSubTitle}>Your Task Details</h1>
      <p className={styles.cardInfo}>Phone: {props.hire.phone}</p>
      <p className={styles.cardInfo}>Description : {props.hire.description}</p>
      <p className={styles.cardInfo}>Address : {props.hire.address}</p>
      <p className={styles.cardInfo}>Date : {props.hire.date.slice(0,10)}</p>
      <p className={styles.cardInfo}>Time : {props.hire.startTime} - {props.hire.endTime}</p>
      <p className={styles.cardInfo}>Budget : {props.hire.budget}</p>
      <div className={styles.btns}>
        <button className={styles.btn} id={styles.accept}>Contact</button>
        <button className={styles.btn} id={styles.decline}>Cancel</button>
      </div>
    </div>
  )
}

export default HireCard;