import ProfileCard from '@/components/ProfileCard';
import styles from '../styles/Explore.module.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { faCameraRetro, faVideo, faClapperboard } from '@fortawesome/free-solid-svg-icons';
import SearchBox from '@/components/SearchBox';
import Footer from '@/components/Footer';

function Explore() {
  return (
    <div className={styles.explore}>
      <Navbar />
      <div className={styles.search}>
        <SearchBox />
      </div>
      <div className={styles.body}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
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
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Explore;