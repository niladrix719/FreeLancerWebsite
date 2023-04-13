import Image from 'next/image'
import styles from '../styles/ProfileCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

export default function ProfileCard() {
    return (
        <div className={styles.profileCard}>
            <div className={styles.cover}></div>
            <Image className={styles.image} src='/img8.jpg' height='60' width='60' />
            <h3 className={styles.name}>Niladri Sekhar Adhikary &nbsp;&nbsp;  </h3>
            <p className={styles.bio}>Capturing Moments with love</p>
            <div className={styles.category}>
                <FontAwesomeIcon icon={faCameraRetro} className={styles.logo} />
                <h4>Photographer</h4>
            </div>
        </div>
    )
}