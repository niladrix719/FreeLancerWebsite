import styles from '../styles/Navbar.module.css'
import Link from 'next/link';
import { BiChevronDown } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Navbar(props) {
  const [background, setBackground] = useState('transparent');
  const [border, setBorder] = useState('0px');
  const [color, setColor] = useState(props.color);
  const [isAdmin, setIsAdmin] = useState(false);
  const [display, setDisplay] = useState('none');
  const [display2, setDisplay2] = useState('none');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    if (token && !props.user && !props.company) {
      fetch(`${process.env.SERVER_URL}/navbar`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.authData.user.phone === 9038578787 && !data.authData.user.location)
            setIsAdmin(true);
          if (data.authData.user.companyname)
            props.setCompany(data.authData.user)
          else
            props.setUser(data.authData.user);
          if (props.checkLoggedIn)
            props.checkLoggedIn(true);
        })
        .catch(error => {
          console.error(error);
        });
    }

    else if (props.user && token) {
      if (props.user.phone && props.user.phone === 9038578787)
        setIsAdmin(true);
      if (props.checkLoggedIn)
        props.checkLoggedIn(true);
    }

    else if (props.company && token) {
      if (props.checkLoggedIn)
        props.checkLoggedIn(true);
    }

    else {
      if (props.checkLoggedIn)
        props.checkLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAdmin(false);
    if (props.user)
      props.setUser(null);
    if (props.company)
      props.setCompany(null);
    if (props.checkLoggedIn)
      props.checkLoggedIn(false);
    router.push('/');
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setColor('#000');
        setBorder('1px solid lightgray');
        setBackground('#fff');
      } else {
        setColor(props.color);
        setBorder('0px');
        setBackground('transparent');
      }
    });
  }, [props.color]);

  return (
    <nav className={styles.navbar} style={{ color: color, backgroundColor: background, borderBottom: border }}>
      <div className={styles.left}>
        <Link href='/'>
          <i className={styles.fipezo}>
            Fipezo
          </i>
        </Link>
      </div>
      <div className={styles.right}>
        <ul className={styles.navigations}>
          <li className={styles.navElement}>
            <Link href='/'>
              <span id={styles.home}>
                Home&nbsp;&nbsp;
              </span>
            </Link>
          </li>

          <li className={styles.navElement} onClick={() => {
            if(display === 'none')
              setDisplay('flex')
            else
              setDisplay('none')
          }} onMouseEnter={() => setDisplay('flex')} onMouseLeave={() => setDisplay('none')}>
            <span>
              Register&nbsp;&nbsp;
            </span>
            <BiChevronDown className={styles.icon}
              style={{ fontSize: 15, color: color }}
            />
            <div className={styles.dropDown} id={styles.box} style={{display: display}}>
              <Link className={styles.optionBox} href='/register/freelancer'>
                <h1 className={styles.mainText}>As a Freelancer</h1>
                <p className={styles.subText}>Empowering Your Career: Registering as a Freelancer</p>
              </Link>
              <Link className={styles.optionBox} href='/register/company'>
                <h1 className={styles.mainText}>As a Company</h1>
                <p className={styles.subText}>Building Success: Registering Your Company</p>
              </Link>
            </div>
          </li>

          <li className={styles.navElement} onClick={() => {
            if(display2 === 'none')
              setDisplay2('flex')
            else
              setDisplay2('none')
          }} onMouseEnter={() => setDisplay2('flex')} onMouseLeave={() => setDisplay2('none')}>
            <span>Help&nbsp;&nbsp;</span>
            <BiChevronDown className={styles.icon}
              style={{ fontSize: 15, color: color }}
            />
            <div className={styles.dropDown} id={styles.box} style={{display: display2}}>
              <Link className={styles.optionBox} href='/contact'>
                <h1 className={styles.mainText}>Contact Us</h1>
                <p className={styles.subText}>Reach out to use for an query or help</p>
              </Link>
              <Link className={styles.optionBox} href='/faqs'>
                <h1 className={styles.mainText}>FAQs</h1>
                <p className={styles.subText}>Check out some asked questions</p>
              </Link>
            </div>
          </li>

          {isAdmin && (
            <li className={styles.navElement}>
              <Link href='/verification' className={styles.navElement}>Verify</Link>
            </li>
          )}

          {!props.user && !props.company && (
            <li className={styles.navElement} id={styles.noUnderline}>
              <Link href='/login' className={styles.login}>Login</Link>
            </li>
          )}

          {props.user && (
            <li className={`${styles.navElement} ${styles.user}`} id={styles.user}>
              <span className='truncate w-5/6'>{props.user && !props.company ? `${props.user.firstname}` : ''}&nbsp;&nbsp;</span>
              <BiChevronDown
                style={{ fontSize: 16, color: color }}
              />
              <div className={styles.profile_card}>
                <div className={styles.dp} style={{ backgroundImage: `url(${props.user.profilePicture ? `${process.env.SERVER_URL}/images/${props.user.profilePicture}` : '/dp.png'})` }}></div>
                <h1 className={styles.name}>{props.user ? `${props.user.firstname} ${props.user.lastname}` : ''}</h1>
                <p className={styles.number}>{props.user ? props.user.phone : ''}</p>
                {props.user.uid && <Link className={styles.btn} href={`/freelancer_profile`}>My Profile</Link>}
                {!props.user.uid && <Link className={styles.btn} href='/user_profile'>My Profile</Link>}
                <button className={styles.btn} type='button' onClick={handleLogout}>Log Out</button>
              </div>
            </li>
          )}

          {props.company && (
            <li className={`${styles.navElement} ${styles.user}`} id={styles.user}>
              <span>{props.company && !props.user ? `${props.company.companyname}` : ''}&nbsp;&nbsp;</span>
              <BiChevronDown
                style={{ fontSize: 16, color: props.color }}
              />
              <div className={styles.profile_card}>
                <div className={styles.dp} style={{ backgroundImage: `url(${process.env.SERVER_URL}/images/${props.company.profilePicture})` }}></div>
                <h1 className={styles.name}>{props.company ? `${props.company.companyname} ` : ''}</h1>
                <p className={styles.number}>{props.company ? props.company.companyphone : ''}</p>
                <Link className={styles.btn} href='/company_profile'>My Profile</Link>
                <button className={styles.btn} type='button' onClick={handleLogout}>Log Out</button>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}