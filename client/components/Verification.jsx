import styles from '../styles/Verification.module.css';
import Image from 'next/image';
import { faPlus, faCheck, faFile, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Link from 'next/link';
import TermsAndConditions from './TermsAndConditions';

function Verification(props) {
  const [images, setImages] = useState([]);
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);
  const [aadhaarCard, setAadhaarCard] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [links, setLinks] = useState({ instagram: '', facebook: '', twitter: '', youtube: '' });
  const [works, setWorks] = useState([]);
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
      props.setWarns(true,0);
      props.setPicError(false,1);
      return;
    }

    if (index === 4) {
      setCameras([cameras[0], true]);
      props.getVericationDetails(file, 4);
      setProfilePicture(file);
    }

    if (file.size > 1048576 && index === 5) {
      props.setWarns(true,1);
      props.setPicError(false,2);
      return;
    }

    if (index === 5) {
      setCameras([true, cameras[1]]);
      props.getVericationDetails(file, 5);
      setCoverPicture(file);
    }

    if (file.size > 1048576 && index === 6) {
      props.setWarns(true,2);
      props.setPicError(false,3);
      return;
    }

    if (index === 6) {
      props.getVericationDetails(file, 6);
      setAadhaarCard(file);
    }

    if (file.size > 1048576 && index === 7) {
      props.setWarns(true,3);
      props.setPicError(false,4);
      return;
    }

    if (index === 7) {
      props.getVericationDetails(file, 7);
      setPanCard(file);
    }

    if (file.size > 1048576) {
      props.setWarns(true,index);
      return;
    }

    if (index === 3 || index === 2 || index === 1 || index === 0 || index === 8 || index === 9 || index === 10 || index === 11) {
      props.getVericationDetails(file, index);
      setWorks([...works, file]);
    }

    props.setWarns(false, -1);

    reader.onloadend = () => {
      const newImages = [...images];
      newImages[index] = reader.result;
      setImages(newImages);
    };

    reader.readAsDataURL(file);

    if(works.length >= 7 && (index === 3 || index === 2 || index === 1 || index === 0 || index === 8 || index === 9 || index === 10 || index === 11)) {
      props.checkWorks(1);
    }

    if(index === 4){
      props.checkWorks(4);
    }

    if(index === 5){
      props.checkWorks(5);
    }

    if(index === 6){
      props.checkWorks(2);
    }

    if(index === 7){
      props.checkWorks(3);
    }
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
        <label className={styles.box}>
          <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} />
          &nbsp;&nbsp;&nbsp;&nbsp;Aadhaar Card
          <input type="file" className={styles.upload} onChange={(e) => handleImageChange(e, 6)} accept="image/jpeg,image/png" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          {images[6] && <FontAwesomeIcon icon={faFile} style={{ color: "#ffffff", }} />}
          {props.addharError && <p className={styles.warn}>Please Provide Addhar Card</p>}
          {props.warns[2] && <p className={styles.warn}>File size exceeds maximum limit of 1MB</p>}
        </label>
        <label className={styles.box}>
          <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} />
          &nbsp;&nbsp;&nbsp;&nbsp;Pan Card
          <input type="file" className={styles.upload} onChange={(e) => handleImageChange(e, 7)} accept="image/jpeg,image/png" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          {images[7] && <FontAwesomeIcon icon={faFile} style={{ color: "#ffffff", }} />}
          {props.panError && <p className={styles.warn}>Please Provide Pan Card</p>}
          {props.warns[3] && <p className={styles.warn}>File size exceeds maximum limit of 1MB</p>}
        </label>
      </div>
      <div className={styles.socials}>
        <label className={styles.social}>Facebook : <br />
          <input type="url" className={styles.input} placeholder="https://www.facebook.com/example"
            onChange={(e) => {
              props.getVericationDetails(e.target.value, 12)
              setLinks({ ...links, facebook: e.target.value })
            }} value={links.facebook}
            required
          />
        </label>
        <label className={styles.social}>Instagram : <br />
          <input type="url" className={styles.input} placeholder="https://www.instagram.com/example"
            onChange={(e) => {
              props.getVericationDetails(e.target.value, 13)
              setLinks({ ...links, instagram: e.target.value })
            }} value={links.instagram}
            required
          />
        </label>
        <label className={styles.social}>Twitter : <br />
          <input type="url" className={styles.input} placeholder="https://www.twitter.com/example"
            onChange={(e) => {
              props.getVericationDetails(e.target.value, 14)
              setLinks({ ...links, twitter: e.target.value })
            }} value={links.twitter}
            required
          />
        </label>
        <label className={styles.social}>Youtube : <br />
          <input type="url" className={styles.input} placeholder="https://www.youtube.com/example"
            onChange={(e) => {
              props.getVericationDetails(e.target.value, 15)
              setLinks({ ...links, youtube: e.target.value })
            }} value={links.youtube}
            required
          />
        </label>
      </div>
      <h1 className={styles.heading}>Add Your Works
      {props.worksError && <p className={styles.err}>Please Provide atleast 8 Works for you</p>}
      </h1>
      <div className={styles.portfolio}>
        <div className={styles.addBox} style={{
          backgroundImage: images[0] ? `url(${images[0]})` : `none`,
        }}>
          <input type="file" className={styles.work} onChange={(e) => handleImageChange(e, 0)} accept="image/jpeg,image/png" />
          {!images[0] && <FontAwesomeIcon className={styles.plus} icon={faPlus} style={{ color: '#1f1c1c' }} />}
          {props.warns[4] && <p className={styles.warn} id={styles.warn}>File size exceeds maximum limit of 1MB</p>}
        </div>
        <div className={styles.addBox} style={{
          backgroundImage: images[1] ? `url(${images[1]})` : `none`,
        }}>
          <input type="file" className={styles.work} onChange={(e) => handleImageChange(e, 1)} accept="image/jpeg,image/png" />
          {!images[1] && <FontAwesomeIcon className={styles.plus} icon={faPlus} style={{ color: '#1f1c1c' }} />}
          {props.warns[5] && <p className={styles.warn} id={styles.warn}>File size exceeds maximum limit of 1MB</p>}
        </div>
        <div className={styles.addBox} style={{
          backgroundImage: images[2] ? `url(${images[2]})` : `none`,
        }}>
          <input type="file" className={styles.work} onChange={(e) => handleImageChange(e, 2)} accept="image/jpeg,image/png" />
          {!images[2] && <FontAwesomeIcon className={styles.plus} icon={faPlus} style={{ color: '#1f1c1c' }} />}
          {props.warns[6] && <p className={styles.warn} id={styles.warn}>File size exceeds maximum limit of 1MB</p>}
        </div>
        <div className={styles.addBox} style={{
          backgroundImage: images[3] ? `url(${images[3]})` : `none`,
        }}>
          <input type="file" className={styles.work} onChange={(e) => handleImageChange(e, 3)} accept="image/jpeg,image/png" />
          {!images[3] && <FontAwesomeIcon className={styles.plus} icon={faPlus} style={{ color: '#1f1c1c' }} />}
          {props.warns[7] && <p className={styles.warn} id={styles.warn}>File size exceeds maximum limit of 1MB</p>}
        </div>
        <div className={styles.addBox} style={{
          backgroundImage: images[8] ? `url(${images[8]})` : `none`,
        }}>
          <input type="file" className={styles.work} onChange={(e) => handleImageChange(e, 8)} accept="image/jpeg,image/png" />
          {!images[8] && <FontAwesomeIcon className={styles.plus} icon={faPlus} style={{ color: '#1f1c1c' }} />}
          {props.warns[8] && <p className={styles.warn} id={styles.warn}>File size exceeds maximum limit of 1MB</p>}
        </div>
        <div className={styles.addBox} style={{
          backgroundImage: images[9] ? `url(${images[9]})` : `none`,
        }}>
          <input type="file" className={styles.work} onChange={(e) => handleImageChange(e, 9)} accept="image/jpeg,image/png" />
          {!images[9] && <FontAwesomeIcon className={styles.plus} icon={faPlus} style={{ color: '#1f1c1c' }} />}
          {props.warns[9] && <p className={styles.warn} id={styles.warn}>File size exceeds maximum limit of 1MB</p>}
        </div>
        <div className={styles.addBox} style={{
          backgroundImage: images[10] ? `url(${images[10]})` : `none`,
        }}>
          <input type="file" className={styles.work} onChange={(e) => handleImageChange(e, 10)} accept="image/jpeg,image/png" />
          {!images[10] && <FontAwesomeIcon className={styles.plus} icon={faPlus} style={{ color: '#1f1c1c' }} />}
          {props.warns[10] && <p className={styles.warn} id={styles.warn}>File size exceeds maximum limit of 1MB</p>}
        </div>
        <div className={styles.addBox} style={{
          backgroundImage: images[11] ? `url(${images[11]})` : `none`,
        }}>
          <input type="file" className={styles.work} onChange={(e) => handleImageChange(e, 11)} accept="image/jpeg,image/png" />
          {!images[11] && <FontAwesomeIcon className={styles.plus} icon={faPlus} style={{ color: '#1f1c1c' }} />}
          {props.warns[11] && <p className={styles.warn} id={styles.warn}>File size exceeds maximum limit of 1MB</p>}
        </div>
      </div>
      <div className={styles.check}><input type="checkbox" required checked={termsAndConditions} className={styles.checkbox}
        onChange={(e) => {
          props.getVericationDetails(e.target.checked, 16)
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