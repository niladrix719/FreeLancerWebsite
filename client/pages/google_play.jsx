import Navbar from '@/components/Navbar';
import styles from '../styles/Mobile.module.css'
import Image from 'next/image';
import Footer from '@/components/Footer';

function Mobile(props) {
  return (
    <div className={styles.mobile}>
      <Navbar user={props.user} company={props.company} setCompany={props.setCompany} setUser={props.setUser} />
      <div className={styles.body}>
        <Image className={styles.img} src='/mobile.png' alt='mobile' width={400} height={400}></Image>
        <h1 className={styles.heading}>
          comming soon on Android Devices <br />
          <button className={styles.btn}>Get Notified</button>
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default Mobile;