import React from 'react';
import style from '../styles/User_profile.module.css';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function User_profile() {
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [editProfile, setEditProfile] = React.useState(false);
  const [firstcolor, setFirstcolor] = React.useState('#949494');
  const [lastcolor, setLastcolor] = React.useState('#949494');
  const [user, setUser] = React.useState({});
  const [warns, setWarns] = React.useState(false);
  const [image, setImage] = React.useState('/dp.png');

  React.useEffect(() => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    if (token) {
      fetch('http://localhost:3000/profile/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data.user);
          setUser(data.user);
          setFirstname(data.user.firstname);
          setLastname(data.user.lastname);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (!file) {
      return;
    }

    if (file.size > 1048576) {
      props.setWarns(true);
      return;
    }

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    }

    reader.onerror = () => {
      console.error('Something went wrong!');
    }
  };

  const handleEdit = () => {
    setEditProfile(false);
  }

  return (
    <div className={style.profile}>
      <Navbar color='black' icon='none' />
      <div className={style.body}>
        <div className={style.profileBox}>
          {!editProfile && <div className={style.profileImage}>
            <Image className={style.dp} src="/dp.png" alt="profile" height='100' width='100' />
          </div>}
          {!editProfile && <div className={style.profileInfo}>
            <h1 className={style.name}>{user.firstname} {user.lastname}</h1>
            <p className={style.phone}>
              <span className={style.phoneValue}>{user.phone}</span>
            </p>
          </div>}
          {!editProfile && <div className={style.options}>
            <p className={style.option}>Hire Requests</p>
            <p className={style.option} onClick={() => setEditProfile(true)}>Edit Profile</p>
            <p className={style.option}>Delete Account</p>
            <p className={style.option}>Rate our Services</p>
          </div>}
          {!editProfile && <div>
            <button className={style.logout}>Logout</button>
          </div>}
          {editProfile && <div className={style.editProfile}>
            <div className={style.editProfileImage}>
              <Image className={style.dpEdit} src={image} alt="profile" height='200' width='200' />
              <Image className={style.camera} id={style.camera} src='/cameraIcon.png' width={35} height={35} alt='camera' />
            </div>
            <div className={style.editProfileInfo}>
              <input className={style.input} type="text" value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                  setFirstcolor('black');
                }}
                style={{ color: firstcolor }}
              />
              <input className={style.input} type="text" value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                  setLastcolor('black');
                }}
                style={{ color: lastcolor }}
              />
            </div>
            <div className={style.btns}>
              <button className={style.logout} onClick={handleEdit}>Save</button>
            </div>
          </div>}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default User_profile;