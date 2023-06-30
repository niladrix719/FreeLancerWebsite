import Image from 'next/image'
import styles from '../styles/ProfileCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import Link from 'next/link';
import { faCameraRetro, faVideo, faClapperboard, faStar } from '@fortawesome/free-solid-svg-icons';

export default function ProfileCard(props) {
  const profession = props.profile.profession.charAt(0).toUpperCase() + props.profile.profession.slice(1);
  return (
    <Link className={styles.profileCard} href={`/profile/${props.profile.uid}`} target='_blank'>
      <div className={styles.cover} style={{ backgroundImage: `url(${process.env.SERVER_URL}/images/${props.profile.coverPicture})` }}>
        <div className={styles.tag}>
        {props.profile.featured && <><AiOutlineThunderbolt style={{color: 'yellow'}} /><p>&nbsp;Featured Freelancer</p></>}
        </div>
      </div>
      <div className={styles.image} style={{ backgroundImage: `url(${process.env.SERVER_URL}/images/${props.profile.profilePicture})` }}></div>
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