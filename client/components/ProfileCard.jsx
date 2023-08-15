import Image from 'next/image'
import styles from '../styles/ProfileCard.module.css'
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { ImCamera } from 'react-icons/im';
import { FaVideo, FaStar } from 'react-icons/fa';
import { TbDrone } from 'react-icons/tb';
import Link from 'next/link';
import { useState } from 'react';

export default function ProfileCard(props) {
  const profession = props.profile.profession
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
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
          <p>{props.profile.rating.toFixed(1)}</p><FaStar className={styles.star} />
        </div>
        <div className={styles.noOfReviews}>
          <p className={styles.num}>({props.profile.reviewCount})</p>
        </div>
      </div>
      <h3 className={styles.name}><span className='w-22 truncate' style={{maxWidth: '11rem', letterSpacing: '0'}}>{props.profile.firstname} {props.profile.lastname}</span><Image className={styles.blueTick} onMouseOver={() => setDisplay('flex')} onMouseOut={() => setDisplay('none')} src='/tick.png' height='40' width='40' alt="verified-tick" />{props.profile.featured && <span className={styles.container}>
      <div className={styles.overTick} style={{ display: display }}><span>Verified</span><div className={styles.rectangle}></div></div></span>}</h3>
      <p className={`w-full ${styles.bio} break-words max-w-xs`}>{props.profile.bio}</p>
      <div className={styles.category}>
        {profession === 'Photographer' && <ImCamera className={styles.logo} />}
        {profession === 'Cinematographer' && <FaVideo className={styles.logo} />}
        {profession === 'Drone_operator' && <TbDrone className={styles.logo} />}
        <h4>{profession}</h4>
        <div className={styles.rate}>
          <p>Rs.{props.profile.rate} / Day</p>
        </div>
      </div>
    </Link>
  )
}