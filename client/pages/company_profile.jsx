import style from '@/styles/Company_Profile.module.css'
import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

function Company_Profile() {
  const [companyname, setCompanyname] = React.useState('');
  const [companyaddress, setCompanyaddress] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [editProfile, setEditProfile] = React.useState(false);
  const [firstcolor, setFirstcolor] = React.useState('#949494');
  const [lastcolor, setLastcolor] = React.useState('#949494');
  const [user, setUser] = React.useState({});
  const [warns, setWarns] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [profilePicture, setProfilePicture] = React.useState('');
  const [coverPicture, setCoverPicture] = React.useState('');

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
          setUser(data.user);
          setCompanyname(data.user.companyname);
          setProfilePicture(data.user.profilePicture);
          setCoverPicture(data.user.coverPicture);
          setCompanyaddress(data.user.companyaddress);
          setBio(data.user.bio);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);


  const handleEditProfile = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('companyname', companyname);
    data.append('companyaddress', companyaddress);
    data.append('profilePicture', profilePicture);
    data.append('coverPicture', coverPicture);
    data.append('bio', bio);
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    if (token) {
      fetch('http://localhost:3000/profile/company/edit', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: data
      })
        .then(res => res.json())
        .then(data => {
          if (data.error) {
          } else {
            localStorage.setItem('user', JSON.stringify({ token: data.token }));
            setEditProfile(false);
            setCompanyname(data.user.companyname);
            setProfilePicture(data.user.profilePicture);
            setCoverPicture(data.user.coverPicture);
            setCompanyaddress(data.user.companyaddress);
            setBio(data.user.bio);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  function handleImageClick(event) {
    const sibling = event.currentTarget.previousElementSibling;
    if (sibling) {
      sibling.click();
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (!file) {
      return;
    }

    if (file.size > 1048576) {
      props.setWarns(true);
      return;
    }

    setProfilePicture(file);

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    }

    reader.onerror = () => {
      console.error('Something went wrong!');
    }
  };

  return (
    <div className={style.profile}>
      <Navbar color='black' />
      <div className={style.body}>
        <div className={style.profileBox}>
          {!editProfile && <div className={style.form}>
            {!editProfile && <div className={style.coverPicture} style={{ backgroundImage: `url(http://localhost:3000/uploads/${coverPicture})` }}>
            </div>}
            {!editProfile && <div className={style.profileImage}>
              <Image className={style.dp} src={profilePicture === '' ? '/dp.png' : `http://localhost:3000/uploads/${profilePicture}`} alt="profile" height='200' width='200' />
            </div>}
            {!editProfile && <div className={style.profileInfo}>
              <h1 className={style.name}>{companyname}</h1>
              <p className={style.phone}>
                <span className={style.phoneValue}>{user.phone}</span>
              </p>
            </div>}
            {!editProfile && <div className={style.options}>
              <Link className={style.option} href='/my_hires'>Hire Requests</Link>
              <p className={style.option} onClick={() => setEditProfile(true)}>Edit Profile</p>
              <p className={style.option}>Delete Account</p>
              <p className={style.option}>Rate our Services</p>
            </div>}
            {!editProfile && <div>
              <button className={style.logout}>Logout</button>
            </div>}
          </div>}
          {editProfile && <div className={style.editProfile}>
            <form className={style.form} encType="multipart/form-data" onSubmit={handleEditProfile}>
              <div className={style.editCoverPicture} style={{ backgroundImage: `url(http://localhost:3000/uploads/${coverPicture})` }}>
              </div>
              <div className={style.editProfileImage} style={{
                backgroundImage: `url(${image ? image : (profilePicture ? `http://localhost:3000/uploads/${user.profilePicture}` : '/dp.png')})`,
              }}>
                {!image && <Image className={style.camera} id={style.camera} src='/cameraIcon.png'
                  width={35} height={35} alt='camera' onClick={handleImageClick}
                />}
                <input type="file" id="file" accept="image/*" name='profilePicture' onChange={handleImageChange} className={style.fileInput} />
              </div>
              <div className={style.editProfileInfo}>
                <input className={style.input} type="text" value={companyname}
                  onChange={(e) => {
                    setCompanyname(e.target.value);
                    setFirstcolor('black');
                  }}
                  style={{ color: firstcolor }}
                />
                <input className={style.input} type="text" value={companyaddress}
                  onChange={(e) => {
                    setCompanyaddress(e.target.value);
                    setLastcolor('black');
                  }}
                  style={{ color: lastcolor }}
                />
                <textarea className={style.input} type="text" value={bio}
                  onChange={(e) => {
                    setBio(e.target.value);
                    setLastcolor('black');
                  }}
                  style={{ color: lastcolor }}
                ></textarea>
              </div>
              <div className={style.btns}>
                <button className={style.back} type='button' onClick={() => setEditProfile(false)}>Back</button>
                <button className={style.logout} type='submit'>Save</button>
              </div>
            </form>
          </div>}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Company_Profile;