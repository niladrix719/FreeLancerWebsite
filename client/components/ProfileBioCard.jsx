import Image from 'next/image';
import styles from '../styles/ProfileBioCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot , faShareFromSquare } from '@fortawesome/free-solid-svg-icons';

function ProfileBioCard(props) {
  const links = JSON.parse(props.freelancer.links);
  return (
    <div className={styles.profile_bio_card}>
      {/* <Image src={`https://fipezo-server.vercel.app/images/${props.freelancer.profilePicture}`} width={220} height={220}
        className={styles.profile_pic} alt='display picture'>
      </Image> */}
      <div className={styles.profile_pic} style={{backgroundImage: `url(https://fipezo-server.vercel.app/images/${props.freelancer.profilePicture})`}}>
      </div>
      <h1 className={styles.name}>{props.freelancer.firstname} {props.freelancer.lastname} <Image className={styles.blueTick} src='/tick.png' height='40' width='40' alt="verified" />
        &nbsp;<FontAwesomeIcon icon={faLocationDot} style={{ fontSize: 12, color: 'red' }} />&nbsp;
        <span className={styles.location}>{props.freelancer.location}</span>
      </h1>
      {props.copied && (
        <div className={styles.copy}>
          URL copied to clipboard!
        </div>
      )}
      <button className={styles.share} onClick={props.copyURL}><FontAwesomeIcon icon={faShareFromSquare} style={{color: "white",}} />Share Profile</button>
      <p className={styles.bio}>{props.freelancer.bio}</p>
      <div className={styles.equipment_available}>
        <h1 className={styles.title}>Equipments Available</h1>
        <p>{props.freelancer.equipments}</p>
      </div>
    </div>
  );
}

export default ProfileBioCard;