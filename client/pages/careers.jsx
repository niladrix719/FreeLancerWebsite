import React from 'react';
import styles from '../styles/Careers.module.css';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

function Careers(props) {
  return (
    <div className={styles.careersPage}>
      <Navbar color='black' user={props.user} company={props.company} setCompany={props.setCompany} setUser={props.setUser} />
      <div className={styles.body}>
        <h1 className={styles.h1}>Join Our Team</h1>
        <div className={styles.imageContainer}>
          <Image
            src='/nojobs.webp'
            alt="No Jobs Available"
            width={500}
            height={500}
          />
        </div>
        <p className={styles.p}>We don&apos;t have any open positions at the moment, but we are always interested in hearing from talented individuals.</p>
        <p className={styles.p}>Please check back later or feel free to send us your resume for future consideration.</p>
      </div>
    </div>
  );
}

export default Careers;