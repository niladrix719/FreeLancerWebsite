import Image from 'next/image';
import styles from '../styles/ProfileBioCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'

function ProfileBioCard(props) {
  return (
    <div className={styles.profile_bio_card}>
      <Image src={`http://localhost:3000/uploads/${props.profilePicture}`} width={220} height={220} className={styles.profile_pic} alt='display picture'></Image>
      <h1 className={styles.name}>{props.firstname} {props.lastname}</h1>
      <p className={styles.bio}>{props.bio}</p>
      <div className={styles.equipment_available}>
        <FontAwesomeIcon icon={faCameraRetro} style={{ color: "#060f1e", }} /> &nbsp;<h1 className={styles.title}>Equipments Available</h1>
        {/* <ul className={styles.equipment}>
          <li>Canon EOS R6</li>
          <li>Sigma 35mm F1.4ART</li>
          <li>Canon 16-35 F4</li>
          <li>Canon 85MM F1.8</li>
          <li>Ronin RSC 2</li>
        </ul> */}
        <p>{props.equipments}</p>
      </div>
    </div>
  )
}

export default ProfileBioCard