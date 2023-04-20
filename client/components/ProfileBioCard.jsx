import Image from 'next/image';
import styles from '../styles/ProfileBioCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'

function ProfileBioCard() {
  return (
    <div className={styles.profile_bio_card}>
        <Image src='/img01.jpg' width={220} height={220} className={styles.profile_pic}></Image>                                     
        <h1 className={styles.name}>Niladri Adhikary</h1>
        <p className={styles.bio}>Capturing Moments with love Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className={styles.equipment_available}>
        <FontAwesomeIcon icon={faCameraRetro} style={{color: "#060f1e",}} /> &nbsp;<h1 className={styles.title}>Equipments Available</h1>
          <ul className={styles.equipment}>
            <li>Canon EOS R6</li>
            <li>Sigma 35mm F1.4ART</li>
            <li>Canon 16-35 F4</li>
            <li>Canon 85MM F1.8</li>
            <li>Ronin RSC 2</li>
          </ul>
        </div>
    </div>
  )
}

export default ProfileBioCard