import Image from 'next/image';
import styles from '../styles/ProfileBioCard.module.css';
import { RWebShare } from 'react-web-share';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { FaShareSquare } from 'react-icons/fa';
import { AiOutlineThunderbolt } from 'react-icons/ai';

function ProfileBioCard(props) {
  const links = JSON.parse(props.freelancer.links);
  const [display, setDisplay] = useState('none');
  const router = useRouter();
  return (
    <div className={styles.profile_bio_card}>
      <div className={styles.profile_pic} style={{ backgroundImage: `url(${process.env.SERVER_URL}/images/${props.freelancer.profilePicture})` }}>
      </div>
      <h1 className={styles.name}><span className='truncate' style={{ maxWidth: '12.5rem', fontSize: '1.15rem' }}>{props.freelancer.firstname} {props.freelancer.lastname}</span> <span className={styles.con}><Image className={styles.blueTick} onMouseOver={() => setDisplay('flex')} onMouseOut={() => setDisplay('none')}
        src={props.freelancer.verified ? '/tick.png' : '/tickG.png'} height='40' width='40' alt="verified-tick" /> {props.freelancer.verified && <div className={styles.overTick} style={{ display: display }}><span>Verified</span><div className={styles.rectangle}></div></div>}</span>
        <IoLocationSharp style={{ fontSize: 12, color: 'red' }} />&nbsp;
        <span className={styles.location}>{props.freelancer.location}</span>
      </h1>
      <div className='flex w-full justify-start px-4 gap-4 flex-wrap'>
        <p className='bg-red-500 p-2 text-sm text-white rounded-3xl px-3 mb-8'>
          {props.freelancer.profession
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}
        </p>
        {props.freelancer.featured && <p className='bg-violet-500 text-sm p-2 mb-8 text-white rounded-3xl px-3 flex items-center'><AiOutlineThunderbolt style={{ color: 'yellow' }} className='mr-2' />Featured Freelancer</p>}
      </div>
      {props.copied && (
        <div className={styles.copy}>
          URL copied to clipboard!
        </div>
      )}
      <div className='flex w-full px-4 flex-wrap'>
        <p className='bg-white p-2 text-sm w-full text-black border-2 flex justify-center mb-8 rounded-3xl'>Rs. {props.freelancer.rate} / Day</p>
      </div>
      <h1 className={styles.title} style={{textAlign: 'left', width: '100%', paddingLeft: '2rem'}}>About Me</h1>
      <p className={`w-full ${styles.bio} break-words max-w-xs border-2 rounded-lg`}>{props.freelancer.bio}</p>
      <div className={styles.equipment_available}>
        <h1 className={styles.title}>Equipments Available</h1>
        <p className={`w-full break-words max-w-xs border-2 p-4 rounded-lg`}>{props.freelancer.equipments}</p>
      </div>
      <RWebShare
        data={{
          text: "Share the profile of " + props.freelancer.firstname + " " + props.freelancer.lastname + " on your social media!",
          url: window.location.origin + router.asPath,
          title: "Fipezo",
        }}
      >
        <button className={styles.share}><FaShareSquare style={{ color: "white", }} /> Share Profile</button>
      </RWebShare>
    </div>
  );
}

export default ProfileBioCard;