import Image from 'next/image'
import styles from '../styles/ProfileCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import Link from 'next/link';
import { useState } from 'react';
import { faCameraRetro, faVideo, faClapperboard, faStar } from '@fortawesome/free-solid-svg-icons';

export default function ProfileCard(props) {
  const profession = props.profile.profession.charAt(0).toUpperCase() + props.profile.profession.slice(1);
  const [display, setDisplay] = useState('none');
  return (
    <Link className={styles.profileCard} href={`/profile/${props.profile.uid}`} target='_blank'>
      <div className={styles.cover} style={{ backgroundImage: `url(${process.env.SERVER_URL}/images/${props.profile.coverPicture})` }}>
        {props.profile.featured && <div className={styles.tag}>
          <><AiOutlineThunderbolt style={{ color: 'yellow' }} /><p>&nbsp;Featured Freelancer</p></>
        </div>}
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
      <h3 className={styles.name}>{props.profile.firstname} {props.profile.lastname} &nbsp;&nbsp;{props.profile.featured && <span className={styles.container}><Image className={styles.blueTick} onMouseOver={() => setDisplay('flex')} onMouseOut={() => setDisplay('none')} src='/tick.png' height='40' width='40' alt="verified-tick" />
      <div className={styles.overTick} style={{ display: display }}><span>Verified</span><div className={styles.rectangle}></div></div></span>}</h3>
      <p className={styles.bio}>{props.profile.bio}</p>
      <div className={styles.category}>
        {profession === 'Photographer' && <FontAwesomeIcon icon={faCameraRetro} className={styles.logo} />}
        {profession === 'Cinematographer' && <FontAwesomeIcon icon={faVideo} className={styles.logo} />}
        {profession === 'Drone_operator' && <FontAwesomeIcon icon={faClapperboard} className={styles.logo} />}
        <h4>{profession}</h4>
        <div className={styles.rate}>
          <p>Rs.{props.profile.rate} / Day</p>
        </div>
      </div>
    </Link>
  )
}