import styles from '../styles/Verification.module.css';
import Image from 'next/image';
import { faPlus, faCheck, faFile, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import TermsAndConditions from './TermsAndConditions';

function Verification(props) {
  const [images, setImages] = useState([]);
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [incorporationCertificate, setIncorporationCertificate] = useState(null);
  const [links, setLinks] = useState({ instagram: '', facebook: '', twitter: '', youtube: '' });
  const [termsAndConditions, setTermsAndConditions] = useState(true);
  const [cameras, setCameras] = useState([false, false]);
  const [dialogBox, setDialogBox] = useState(false);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (!file) {
      return;
    }

    if (file.size > 1048576 && index === 4) {
      props.setWarns(true, 0);
      props.setPicError(false, 1);
      return;
    }

    if (index === 4) {
      setCameras([cameras[0], true]);
      props.getVerificationDetails(file, 4);
      setProfilePicture(file);
    }

    if (file.size > 1048576 && index === 5) {
      props.setWarns(true, 1);
      props.setPicError(false, 2);
      return;
    }

    if (index === 5) {
      setCameras([true, cameras[1]]);
      props.getVerificationDetails(file, 5);
      setCoverPicture(file);
    }

    if (file.size > 1048576 && index === 6) {
      props.setWarns(true, 2);
      props.setPicError(false, 3);
      return;
    }

    if (index === 6) {
      props.getVerificationDetails(file, 6);
      setPanCard(file);
    }

    if (file.size > 1048576 && index === 7) {
      props.setWarns(true,3);
      props.setPicError(false,4);
      return;
    }

    if (index === 7) {
      props.getVerificationDetails(file, 7);
      setIncorporationCertificate(file);
    }

    if (file.size > 1048576) {
      props.setWarns(true, index);
      return;
    }

    props.setWarns(false, -1);

    reader.onloadend = () => {
      const newImages = [...images];
      newImages[index] = reader.result;
      setImages(newImages);
    };

    reader.readAsDataURL(file);
  };

  function handleImageClick(event) {
    const sibling = event.currentTarget.previousElementSibling;
    if (sibling) {
      sibling.click();
    }
  }

  function handleTermsAndConditions() {
    setDialogBox(true);
  }

  function handleClick(value) {
    setDialogBox(false);
    setTermsAndConditions(value);
  }

  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.navStep}>
          <FontAwesomeIcon icon={faCheck} style={{ color: "white", position: 'absolute', zIndex: 100 }} />
          <p className={styles.navText}>Account Created</p>
        </div>
        <div className={styles.navStep}>
          2
          <p className={styles.navText}>Verification</p>
        </div>
        <div className={styles.navStep}>
          <Image src='/tick.png' width={80} height={80} alt='verified' />
        </div>
        <div className={styles.navRoad}></div>
      </div>
      <h1 className={styles.title}>Verification Form</h1>
      <p className={styles.subTitle}>You&apos;re almost there! Just a final step to complete your profile.</p>
      <div className={styles.imageFields} id={styles.cover} style={{
        backgroundImage: images[5] ? `url(${images[5]})` : `none`,
      }}>
        {!cameras[0] && <Image className={styles.camera} src='/cameraIcon.png' width={40} height={40} alt='camera'
          onClick={handleImageClick}
        />}
        <input type="file" className={styles.coverPreview}
          onChange={(e) => handleImageChange(e, 5)} accept="image/jpeg,image/png"
          name='coverPicture'
        />
        {props.coverPicError && <p className={styles.warn}>Please Provide Cover Picture</p>}
        {props.warns[1] && <p className={styles.warn}>File size exceeds maximum limit of 1MB</p>}
        <span className={styles.instruction}>Please upload images of maximum limit 1MB</span>
      </div>
      <div className={styles.imageFields} id={styles.profile_pic} style={{
        backgroundImage: images[4] ? `url(${images[4]})` : `url(/dp.png)`,
      }}>
        {!cameras[1] && <Image className={styles.camera} id={styles.camera} src='/cameraIcon.png' width={40} height={40} alt='camera'
          onClick={handleImageClick}
        />}
        <input type="file" className={styles.profilePicPreview}
          onChange={(e) => handleImageChange(e, 4)} accept="image/jpeg,image/png"
          name='profilePicture'
        />
        {props.profilePicError && <p className={styles.warn}>Please Provide Profile Picture</p>}
        {props.warns[0] && <p className={styles.warn}>File size exceeds maximum limit of 1MB</p>}
      </div>
      <div className={styles.uploads}>
        <label className={styles.boxC}>
          <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} />
          &nbsp;&nbsp;&nbsp;&nbsp;Pan Card
          <input type="file" className={styles.upload} onChange={(e) => handleImageChange(e, 6)} accept="image/jpeg,image/png" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          {images[6] && <FontAwesomeIcon icon={faFile} style={{ color: "#ffffff", }} />}
          {props.panError && <p className={styles.warn}>Please Provide Pan Card</p>}
          {props.warns[2] && <p className={styles.warn}>File size exceeds maximum limit of 1MB</p>}
        </label>
        <label className={styles.boxC}>
          <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} />
          &nbsp;&nbsp;&nbsp;&nbsp;Incorporation Certificate
          <input type="file" className={styles.upload} onChange={(e) => handleImageChange(e, 7)} accept="image/jpeg,image/png" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          {images[7] && <FontAwesomeIcon icon={faFile} style={{ color: "#ffffff", }} />}
          {props.addharError && <p className={styles.warn}>Please Provide Incorporation Certificate</p>}
          {props.warns[3] && <p className={styles.warn}>File size exceeds maximum limit of 1MB</p>}
        </label>
      </div>
      <div className={styles.socials}>
        <label className={styles.social}>Facebook : <br />
          <input type="url" className={styles.input} placeholder="https://www.facebook.com/example"
            onChange={(e) => {
              props.getVerificationDetails(e.target.value, 8)
              setLinks({ ...links, facebook: e.target.value })
            }} value={links.facebook}
            required
          />
        </label>
        <label className={styles.social}>Instagram : <br />
          <input type="url" className={styles.input} placeholder="https://www.instagram.com/example"
            onChange={(e) => {
              props.getVerificationDetails(e.target.value, 9)
              setLinks({ ...links, instagram: e.target.value })
            }} value={links.instagram}
            required
          />
        </label>
        <label className={styles.social}>Twitter : <br />
          <input type="url" className={styles.input} placeholder="https://www.twitter.com/example"
            onChange={(e) => {
              props.getVerificationDetails(e.target.value, 10)
              setLinks({ ...links, twitter: e.target.value })
            }} value={links.twitter}
            required
          />
        </label>
        <label className={styles.social}>Youtube : <br />
          <input type="url" className={styles.input} placeholder="https://www.youtube.com/example"
            onChange={(e) => {
              props.getVerificationDetails(e.target.value, 11)
              setLinks({ ...links, youtube: e.target.value })
            }} value={links.youtube}
            required
          />
        </label>
      </div>
      <div className={styles.check}><input type="checkbox" required checked={termsAndConditions} className={styles.checkbox}
        onChange={(e) => {
          props.getVerificationDetails(e.target.checked, 16)
          setTermsAndConditions(e.target.checked)
        }}
      />
        I Agree to the <span className={styles.links} ><span onClick={handleTermsAndConditions}>Terms and Conditions</span></span>
      </div>
      <button className={styles.btn} type='submit'>Verify Now</button>
      <div className={styles.dialogBox}>
        {dialogBox && <TermsAndConditions handleClick={handleClick} />}
      </div>
    </>
  )
}

export default Verification;