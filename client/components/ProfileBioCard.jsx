import Image from 'next/image';
import styles from '../styles/ProfileBioCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot , faShareFromSquare } from '@fortawesome/free-solid-svg-icons';

function ProfileBioCard(props) {
  const links = JSON.parse(props.freelancer.links);
  return (
    <div className={styles.profile_bio_card}>
      <div className={styles.profile_pic} style={{backgroundImage: `url(${process.env.SERVER_URL}/images/${props.freelancer.profilePicture})`}}>
      </div>
      <h1 className={styles.name}>{props.freelancer.firstname} {props.freelancer.lastname} <Image className={styles.blueTick} src={props.freelancer.verified ? '/tick.png' : '/tickG.png'} height='40' width='40' alt="verified" />
        &nbsp;<FontAwesomeIcon icon={faLocationDot} style={{ fontSize: 12, color: 'red' }} />&nbsp;
        <span className={styles.location}>{props.freelancer.location}</span>
      </h1>
      {props.copied && (
        <div className={styles.copy}>
          URL copied to clipboard!
        </div>
      )}
      <p className={styles.bio}>{props.freelancer.bio}</p>
      <button className={styles.share} onClick={props.copyURL}><FontAwesomeIcon icon={faShareFromSquare} style={{color: "white",}} />Share Profile</button>
      <div className={styles.equipment_available}>
        <h1 className={styles.title}>Equipments Available</h1>
        <p>{props.freelancer.equipments}</p>
      </div>
    </div>
  );
}

export default ProfileBioCard;