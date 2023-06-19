import Image from 'next/image'
import styles from '../styles/ProfileCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faCameraRetro, faVideo, faClapperboard, faStar } from '@fortawesome/free-solid-svg-icons';

export default function ProfileCard(props) {
  const profession = props.profile.profession.charAt(0).toUpperCase() + props.profile.profession.slice(1);
  return (
    <Link className={styles.profileCard} href={`/profile/${props.profile.uid}`} target='_blank'>
      <div className={styles.cover} style={{ backgroundImage: `url(http://localhost:3000/uploads/${props.profile.coverPicture})` }}></div>
      <Image className={styles.image} src={`http://localhost:3000/uploads/${props.profile.profilePicture}`} height='600' width='600' alt="profile-image" />
      <div className={styles.right}>
        <div className={styles.rating}>
          <p>{props.profile.rating.toFixed(1)}</p><FontAwesomeIcon icon={faStar} className={styles.star} />
        </div>
        <div className={styles.noOfReviews}>
          <p className={styles.num}>({props.profile.reviewCount})</p>
        </div>
      </div>
      <h3 className={styles.name}>{props.profile.firstname} {props.profile.lastname} &nbsp;&nbsp;<Image className={styles.blueTick} src='/tick.png' height='40' width='40' alt="verified" />  </h3>
      <p className={styles.bio}>{props.profile.bio}</p>
      <div className={styles.category}>
        {profession === 'Photographer' && <FontAwesomeIcon icon={faCameraRetro} className={styles.logo} />}
        {profession === 'Cinematographer' && <FontAwesomeIcon icon={faVideo} className={styles.logo} />}
        {profession === 'Drone_operator' && <FontAwesomeIcon icon={faClapperboard} className={styles.logo} />}
        <h4>{profession}</h4>
        <div className={styles.rate}>
          <p>Rs.{props.profile.rate} / Hr</p>
        </div>
      </div>
    </Link>
  )
}