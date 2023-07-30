import styles from '../styles/RequestCard.module.css';

function HireCard(props) {
  return (
    <div className={styles.requestCard}>
      <h2 className={styles.cardTitle}>{props.hire.freelancerDetails.firstname}&nbsp;
      {props.hire.freelancerDetails.lastname} - &nbsp;
      {props.hire.freelancerDetails.profession.charAt(0).toUpperCase()}{props.hire.freelancerDetails.profession.slice(1)}
      </h2>
      {props.hire.status === 'pending' && <div className={styles.tag}><span id={styles.pending} className={styles.status}>Pending</span></div>}
      {props.hire.status === 'accepted' && <div className={styles.tag}><span id={styles.accepted} className={styles.status}>Accepted</span></div>}
      {props.hire.status === 'declined' && <div className={styles.tag}><span id={styles.declined} className={styles.status}>Declined</span></div>}
      <p className={styles.cardInfo}>Phone: {props.hire.phone}</p>
      <p className={styles.cardInfo}>Description : {props.hire.description}</p>
      <p className={styles.cardInfo}>Address : {props.hire.address}</p>
      <p className={styles.cardInfo}>Date : {props.hire.date.slice(0,10)}</p>
      <p className={styles.cardInfo}>Time : {props.hire.startTime} - {props.hire.endTime}</p>
      <p className={styles.cardInfo}>Budget : {props.hire.budget}</p>
      <div className={styles.btns}>
        <button className={styles.btn} type='button' id={styles.accept} onClick={() => props.contactFreelancer(props.hire.status,props.hire.freelancerDetails.phone)}>Contact</button>
        <button
          className={styles.btn}
          type="button"
          id={styles.decline}
          onClick={() => {
            props.setShowDeleteBox(true);
            props.setReqId(props.hire._id);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default HireCard;