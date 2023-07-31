import Image from 'next/image';
import styles from '../styles/ProfileBioCard.module.css';
import { RWebShare } from 'react-web-share';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { FaShareSquare } from 'react-icons/fa';

function ProfileBioCard(props) {
  const links = JSON.parse(props.freelancer.links);
  const [display, setDisplay] = useState('none');
  const router = useRouter();
  return (
    <div className={styles.profile_bio_card}>
      <div className={styles.profile_pic} style={{backgroundImage: `url(${process.env.SERVER_URL}/images/${props.freelancer.profilePicture})`}}>
      </div>
      <h1 className={styles.name}>{props.freelancer.firstname} {props.freelancer.lastname} <span className={styles.con}><Image className={styles.blueTick} onMouseOver={() => setDisplay('flex')} onMouseOut={() => setDisplay('none')}
       src={props.freelancer.verified ? '/tick.png' : '/tickG.png'} height='40' width='40' alt="verified-tick" /> {props.freelancer.verified && <div className={styles.overTick} style={{ display: display }}><span>Verified</span><div className={styles.rectangle}></div></div>}</span>
        &nbsp;<IoLocationSharp style={{ fontSize: 12, color: 'red' }} />&nbsp;
        <span className={styles.location}>{props.freelancer.location}</span>
      </h1>
      <div className='flex w-full justify-evenly flex-wrap'>
        <p className='bg-red-500 p-2 text-sm text-white rounded-3xl px-6 mb-8'>{props.freelancer.profession.charAt(0).toUpperCase() + props.freelancer.profession.slice(1)}</p>
        {props.freelancer.featured && <p className='bg-violet-500 text-sm p-2 mb-8 text-white rounded-3xl px-6'>Featured Freelancer</p>}
      </div>
      {props.copied && (
        <div className={styles.copy}>
          URL copied to clipboard!
        </div>
      )}
      <p className={styles.bio}>{props.freelancer.bio}</p>
      <RWebShare
        data={{
          text: "Share the profile of " + props.freelancer.firstname + " " + props.freelancer.lastname + " on your social media!",
          url: window.location.origin + router.asPath,
          title: "Fipezo",
        }}
      >
        <button className={styles.share}><FaShareSquare style={{color: "white",}} /> Share Profile</button>
      </RWebShare>
      <div className={styles.equipment_available}>
        <h1 className={styles.title}>Equipments Available</h1>
        <p>{props.freelancer.equipments}</p>
      </div>
    </div>
  );
}

export default ProfileBioCard;