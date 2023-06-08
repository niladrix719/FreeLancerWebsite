import Image from 'next/image';
import styles from '../styles/ProfileBioCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function ProfileBioCard(props) {
  const links = JSON.parse(props.freelancer.links);
  return (
    <div className={styles.profile_bio_card}>
      <Image src={`https://fipezo-server.vercel.app/oads/${props.freelancer.profilePicture}`} width={220} height={220}
        className={styles.profile_pic} alt='display picture'>
      </Image>
      <h1 className={styles.name}>{props.freelancer.firstname} {props.freelancer.lastname}
        &nbsp;<FontAwesomeIcon icon={faLocationDot} style={{ fontSize: 12, color: 'red' }} />&nbsp;
        <span className={styles.location}>{props.freelancer.location}</span>
      </h1>
      <p className={styles.bio}>{props.freelancer.bio}</p>
      <div className={styles.equipment_available}>
        <FontAwesomeIcon icon={faCameraRetro} style={{ color: "#060f1e", }} /> &nbsp;
        <h1 className={styles.title}>Equipments Available</h1>
        <p>{props.freelancer.equipments}</p>
      </div>
      <div className={styles.socials}>
        <Link href={links.facebook} target='_black'>
          <Image className={styles.social} src='/facebook.png' width='160' height='160' alt='facebook' />
        </Link>
        <Link href={links.instagram} target='_black'>
          <Image className={styles.social} src='/instagramC.png' width='160' height='160' alt='instagram' />
        </Link>
        <Link href={links.twitter} target='_black'>
          <Image className={styles.social} src='/twitterC.png' width='160' height='160' alt='twitter' />
        </Link>
        <Link href={links.youtube} target='_black'>
          <Image className={styles.social} src='/youtube.png' width='160' height='160' alt='youtube' />
        </Link>
      </div>
    </div>
  );
}

export default ProfileBioCard;