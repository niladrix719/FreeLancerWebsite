import Image from 'next/image';
import styles from '../styles/ProfileBioCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function ProfileBioCard(props) {
  const links = JSON.parse(props.freelancer.links);
  return (
    <div className={styles.profile_bio_card}>
      <Image src={`http://localhost:3000/uploads/${props.freelancer.profilePicture}`} width={220} height={220}
        className={styles.profile_pic} alt='display picture'>
      </Image>
      <h1 className={styles.name}>{props.freelancer.firstname} {props.freelancer.lastname}
        &nbsp;<FontAwesomeIcon icon={faLocationDot} style={{ fontSize: 12, color: 'red' }} />&nbsp;
        <span className={styles.location}>{props.freelancer.location}</span>
      </h1>
      <p className={styles.bio}>{props.freelancer.bio}</p>
      <div className={styles.equipment_available}>
        <h1 className={styles.title}>Equipments Available</h1>
        <p>{props.freelancer.equipments}</p>
      </div>
    </div>
  );
}

export default ProfileBioCard;