import Navbar from '@/components/Navbar';
import styles from '../styles/Verification.module.css';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { faPlus, faCheck, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function Verification() {
  const [images, setImages] = useState([]);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (!file) {
      return;
    }

    reader.onloadend = () => {
      const newImages = [...images];
      newImages[index] = reader.result;
      setImages(newImages);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.verification}>
      <Navbar />
      <div className={styles.body}>
        <form className={styles.form}>
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
          <div className={styles.formGroup} id={styles.cover} style={{
            backgroundImage: images[5] ? `url(${images[5]})` : `none`,
          }}>
            <input type="file" className={styles.coverPreview}
              onChange={(e) => handleImageChange(e, 5)} accept="image/jpeg,image/png"
            />
          </div>
          <div className={styles.formGroup} id={styles.profile_pic} style={{
            backgroundImage: images[4] ? `url(${images[4]})` : `url(/dp.png)`,
          }}>
            <input type="file" className={styles.profilePicPreview}
              onChange={(e) => handleImageChange(e, 4)} accept="image/jpeg,image/png"
            />
          </div>
          <div className={styles.uploads}>
            <label className={styles.box}>
              <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} />
              &nbsp;&nbsp;&nbsp;&nbsp;Addhar Card
              <input type="file" className={styles.upload} onChange={(e) => handleImageChange(e, 6)} accept="image/jpeg,image/png" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              {images[6] && <FontAwesomeIcon icon={faFile} style={{ color: "#ffffff", }} />}
            </label>
            <label className={styles.box}>
              <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} />
              &nbsp;&nbsp;&nbsp;&nbsp;Pan Card
              <input type="file" className={styles.upload} onChange={(e) => handleImageChange(e, 7)} accept="image/jpeg,image/png" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              {images[7] && <FontAwesomeIcon icon={faFile} style={{ color: "#ffffff", }} />}
            </label>
          </div>
          <div className={styles.socials}>
            <label className={styles.social}>Facebook : <br />
              <input type="url" className={styles.input} placeholder="https://www.facebook.com/example" />
            </label>
            <label className={styles.social}>Instagram : <br />
              <input type="url" className={styles.input} placeholder="https://www.instagram.com/example" />
            </label>
            <label className={styles.social}>Twitter : <br />
              <input type="url" className={styles.input} placeholder="https://www.twitter.com/example" />
            </label>
            <label className={styles.social}>Youtube : <br />
              <input type="url" className={styles.input} placeholder="https://www.youtube.com/example" />
            </label>
          </div>
          <h1 className={styles.heading}>Add Your Works</h1>
          <div className={styles.portfolio}>
            <div className={styles.addBox} style={{
              backgroundImage: images[0] ? `url(${images[0]})` : `none`,
            }}>
              <input type="file" className={styles.work} onChange={(e) => handleImageChange(e, 0)} accept="image/jpeg,image/png" />
              {!images[0] && <FontAwesomeIcon className={styles.plus} icon={faPlus} style={{ color: '#1f1c1c' }} />}
            </div>
            <div className={styles.addBox} style={{
              backgroundImage: images[1] ? `url(${images[1]})` : `none`,
            }}>
              <input type="file" className={styles.work} onChange={(e) => handleImageChange(e, 1)} accept="image/jpeg,image/png" />
              {!images[1] && <FontAwesomeIcon className={styles.plus} icon={faPlus} style={{ color: '#1f1c1c' }} />}
            </div>
            <div className={styles.addBox} style={{
              backgroundImage: images[2] ? `url(${images[2]})` : `none`,
            }}>
              <input type="file" className={styles.work} onChange={(e) => handleImageChange(e, 2)} accept="image/jpeg,image/png" />
              {!images[2] && <FontAwesomeIcon className={styles.plus} icon={faPlus} style={{ color: '#1f1c1c' }} />}
            </div>
            <div className={styles.addBox} style={{
              backgroundImage: images[3] ? `url(${images[3]})` : `none`,
            }}>
              <input type="file" className={styles.work} onChange={(e) => handleImageChange(e, 3)} accept="image/jpeg,image/png" />
              {!images[3] && <FontAwesomeIcon className={styles.plus} icon={faPlus} style={{ color: '#1f1c1c' }} />}
            </div>
          </div>
          <div className={styles.check}><input type="checkbox" className={styles.checkbox} />
            I Agree to the <span className={styles.links}>Terms and Conditions</span>
          </div>
          <button className={styles.btn}>Verify Now</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Verification;