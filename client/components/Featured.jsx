import styles from '../styles/Featured.module.css'
import ProfileCard from './ProfileCard';
import { faCameraRetro, faVideo , faClapperboard} from '@fortawesome/free-solid-svg-icons';

export default function Featured() {
  return (
    <div className={styles.featured}>
      <h1 className={styles.heading}>Featured Freelancers</h1>
      <p className={styles.subHeading}>Discover Skilled Freelancers on Our Platform</p>
      <div className={styles.cards}>
        <ProfileCard
          name="Niladri Adhikary"
          bio="Capturing Moments with love"
          category="Photographer"
          pic="img01"
          cover="/cover01.jpg"
          icon={faCameraRetro}
        />
        <ProfileCard
          name="Banhi Suresh"
          bio="seeking to work on projects"
          category="Cinematographer"
          pic="img02"
          cover="/cover02.jpg"
          icon={faVideo}
        />
        <ProfileCard
          name="Vritika Sood"
          bio="Experienced Photographer"
          category="Drone Operator"
          pic="img03"
          cover="/cover03.jpg"
          icon={faClapperboard}
        />
        <ProfileCard
          name="Richa Saini"
          bio="Here for you"
          category="Cinematographer"
          pic="img04"
          cover="/cover04.jpg"
          icon={faVideo}
        />
        <ProfileCard
          name="Nakul Nagy"
          bio="Freeze Your Emotions"
          category="Drone Operator"
          pic="img05"
          cover="/cover05.jpg"
          icon={faClapperboard}
        />
        <ProfileCard
          name="Advik Chada"
          bio="Checkout my profile"
          category="Photographer"
          pic="img06"
          cover="/cover06.jpg"
          icon={faCameraRetro}
        />
      </div>
    </div>
  )
}