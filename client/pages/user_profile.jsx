import React from 'react';
import style from '../styles/User_profile.module.css';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function User_profile() {
  return (
    <div className={style.profile}>
      <Navbar color='black' />
      <div className={style.body}>
        <div className={style.profileBox}>
          <div className={style.profileImage}>
            <Image className={style.dp} src="/dp.png" alt="profile" height='100' width='100' />
          </div>
          <div className={style.profileInfo}>
            <h1 className={style.name}>John Doe</h1>
            <p className={style.phone}>
              <span className={style.phoneValue}> 7001599125 </span>
            </p>
          </div>
          <div className={style.options}>
            <p className={style.option}>Freelacners I have Contacted</p>
            <p className={style.option}>Freelacners I have Worked With</p>
            <p className={style.option}>Rate our Services</p>
          </div>
          <div>
            <button className={style.logout}>Logout</button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default User_profile;