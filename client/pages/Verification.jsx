import Navbar from '@/components/Navbar';
import styles from '../styles/Verification.module.css';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function Verification() {
  const [images, setImages] = useState([]);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();

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
          <h1 className={styles.title}>Verification Form</h1>
          <p className={styles.subTitle}>You&apos;re almost there! Just a final step to complete your profile.</p>
          <div className={styles.formGroup} id={styles.cover}></div>
          <div className={styles.formGroup} id={styles.profile_pic}>
            {/* <input type="file" className={styles.profilePicPreview} /> */}
            <Image className={styles.dp} src='/dp.png' width={180} height={180} alt='profile-picture' />
          </div>
          <div className={styles.uploads}>
            <label className={styles.box}>
              <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} />
              &nbsp;&nbsp;&nbsp;&nbsp;Addhar Card
              <input type="file" className={styles.upload} />
            </label>
            <label className={styles.box}>
              <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} />
              &nbsp;&nbsp;&nbsp;&nbsp;Pan Card
              <input type="file" className={styles.upload} />
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
            <div className={styles.addBox}>
              <input type="file" className={styles.work} onChange={(e) => handleImageChange(e, 0)} />
              <FontAwesomeIcon className={styles.plus} icon={faPlus} style={{ color: '#1f1c1c' }} />
              {images[0] && <Image className={styles.preview} src={images[0]} alt="Preview" height='300' width='300' />}
            </div>
            <div className={styles.addBox}>
              <input type="file" className={styles.work} onChange={(e) => handleImageChange(e, 1)} />
              <FontAwesomeIcon className={styles.plus} icon={faPlus} style={{ color: '#1f1c1c' }} />
              {images[1] && <Image className={styles.preview} src={images[1]} alt="Preview" height='300' width='300' />}
            </div>
            <div className={styles.addBox}>
              <input type="file" className={styles.work} onChange={(e) => handleImageChange(e, 2)} />
              <FontAwesomeIcon className={styles.plus} icon={faPlus} style={{ color: '#1f1c1c' }} />
              {images[2] && <Image className={styles.preview} src={images[2]} alt="Preview" height='300' width='300' />}
            </div>
            <div className={styles.addBox}>
              <input type="file" className={styles.work} onChange={(e) => handleImageChange(e, 3)} />
              <FontAwesomeIcon className={styles.plus} icon={faPlus} style={{ color: '#1f1c1c' }} />
              {images[3] && <Image className={styles.preview} src={images[3]} alt="Preview" height='300' width='300' />}
            </div>
          </div>
          <button className={styles.btn}>Verify Now</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Verification;