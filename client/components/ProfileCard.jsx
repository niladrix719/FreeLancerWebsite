import Image from 'next/image'
import styles from '../styles/ProfileCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function ProfileCard(props) {
  return (
    <Link className={styles.profileCard} href='/profile'>
      <div className={styles.cover} style={{ backgroundImage: `url(${props.cover})` }}></div>
      <Image className={styles.image} src={`/${props.pic}.jpg`} height='60' width='60' alt="profile-image" />
      <h3 className={styles.name}>{props.name} &nbsp;&nbsp;<Image className={styles.blueTick} src='/tick.png' height='40' width='40' alt="verified" />  </h3>
      <p className={styles.bio}>{props.bio}</p>
      <div className={styles.category}>
        <FontAwesomeIcon icon={props.icon} className={styles.logo} />
        <h4>{props.category}</h4>
        <div className={styles.rate}>
          <p>Rs.1000 / Hr</p>
        </div>
      </div>
    </Link>
  )
}