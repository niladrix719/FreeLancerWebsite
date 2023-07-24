import Navbar from '@/components/Navbar';
import styles from '../styles/Contact_soon.module.css';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { IoArrowBack } from 'react-icons/io5';
import ReactConfetti from 'react-confetti';
import { useState, useEffect } from 'react';
import Link from 'next/link';
function Contact_soon() {
  const [windowDm, setWindowDm] = useState({ width: 1600, height: 650 });
  const dectectSize = () => {
    setWindowDm({ width: 1600, height: 650 });
  }
  useEffect(() => {
    addEventListener('resize', dectectSize);
    return () => {
      removeEventListener('resize', dectectSize);
    }
  }, [windowDm]);
  return (
    <div className={styles.contactSoon}>
      <ReactConfetti height={windowDm.height} width={windowDm.width} numberOfPieces={150} />
      <Navbar />
      <div className={styles.body}>
        <div className={styles.box}>
          <Image className={styles.image} src='/soon.png' width='1000' height='1000' alt='contacting image' />
          <div className={styles.heading}>
            <i id={styles.fipezo}>Fipezo</i>
            <span className={styles.color}>Congratulations !</span> <br /> <span className={styles.span}>Your registration is currently undergoing verification</span>
            <p className={styles.subHeading}>Our Team will contact you soon .&nbsp;.&nbsp;.</p>
            <Link href='/'><button className={styles.btn}>
              <IoArrowBack style={{display : 'inline'}} id={styles.arrow} />&nbsp;&nbsp;Back to Home
            </button></Link>
            <div className={styles.socials}>
              <Image className={styles.social} src='/facebook.png' width='160' height='160' alt='facebook' />
              <Image className={styles.social} src='/instagramC.png' width='160' height='160' alt='instagram' />
              <Image className={styles.social} src='/twitterC.png' width='160' height='160' alt='twitter' />
              <Image className={styles.social} src='/youtube.png' width='160' height='160' alt='youtube' />
            </div>
            <div className={styles.backBox}>

            </div>
          </div>
          <div className={styles.flex}>
            <h1 className={styles.text}>What&apos;s to do Next?</h1>
            <div className={styles.paras}>
              <p className={styles.para}>
                Wait for the verification process to complete: Sit tight while our team verifies your registration details.
                this may take up to 24 hours. You will receive a SMS once your registration is verified.
              </p>
              <p className={styles.para}>Prepare your Aadhaar and PAN cards: Make sure you have your valid Aadhaar and PAN cards handy.</p>
              <p className={styles.para}>
                Prepare a conducive environment for the video call: Ensure you have a quiet, well-lit space with a stable internet
                connection for the video call. Having a suitable environment will facilitate a seamless verification process.
              </p>
              <p className={styles.para}>Await our call: After a specific timeframe, we will reach out to you via phone to initiate the verification process.</p>
              <p className={styles.para}>Follow the instructions provided: During the call, our representative will guide you through the necessary steps to complete the verification successfully.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact_soon;