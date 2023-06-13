import styles from '../styles/HireBox.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function HireBox(props) {
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [budget, setBudget] = useState('');
  const [hireError, setHireError] = useState(false);

  const submitHire = () => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    async function postHire() {
      try {
        if (token) {
          const response = await fetch('http://localhost:3000/add/hire', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              freelancer: props.freelancer._id,
              fullname: `${props.user.firstname} ${props.user.lastname}`,
              phone: props.user.phone,
              description: description,
              address: address,
              date: date,
              startTime: startTime,
              endTime: endTime,
              budget: budget
            })
          });
          const data = await response.json();
        }
        props.handleHireBox(false);
      } catch (error) {
        setHireError(true);
        console.error(error);
      }
    }

    postHire();
  }

  return (
    <div className={styles.hireBox}>
      <span onClick={(() => props.handleHireBox(false))} className={styles.cross}>
        <FontAwesomeIcon icon={faXmark} />
      </span>
      <h1 className={styles.heading}>Send Your Task</h1>
      <p className={styles.error}>{hireError ? 'Please fill all the fields' : ''}</p>
      <div className={styles.fields}>
        <div className={styles.field}>
          <div className={styles.subField}>
            <label htmlFor='name' className={styles.label}>Full Name</label>
            <input className={styles.input} type="text" id='name' name='fullname'
              value={`${props.user.firstname} ${props.user.lastname}`}
            />
          </div>
          <div className={styles.subField}>
            <label htmlFor='phone' className={styles.label}>Phone</label>
            <input className={styles.input} type="number" id='phone' name='phone'
              value={`${props.user.phone}`}
            />
          </div>
        </div>
        <div className={styles.field} id={styles.purpose}>
          <label htmlFor='description' className={styles.label}>Task Description</label>
          <textarea className={styles.textarea} name="description" id="description" cols="30" rows="10"
            onChange={(e) => { setHireError(false); setDescription(e.target.value) }}>
          </textarea>
        </div>
        <div className={styles.field}>
          <label htmlFor='location' className={styles.label}>Address</label>
          <input className={styles.input} type="text" id='address' name='address'
            onChange={(e) => { setHireError(false); setAddress(e.target.value) }} />
        </div>
        <div className={styles.field}>
          <label htmlFor='date' className={styles.label}>Date</label>
          <input className={styles.input} type="date" id='date' name='date'
            onChange={(e) => { setHireError(false); setDate(e.target.value) }} />
        </div>
        <div className={styles.field}>
          <label htmlFor='startTime' className={styles.label}>Start Time</label>
          <input className={styles.input} type="time" id='startTime' name='startTime'
            onChange={(e) => { setHireError(false); setStartTime(e.target.value) }} />
        </div>
        <div className={styles.field}>
          <label htmlFor='endTime' className={styles.label}>End Time</label>
          <input className={styles.input} type="time" id='endTime' name='endTime'
            onChange={(e) => { setHireError(false); setEndTime(e.target.value) }} />
        </div>
        <div className={styles.field}>
          <label htmlFor='budget' className={styles.label}>Total Budget (&#8377;)</label>
          <input className={styles.input} type="number" id='budget' name='budget'
            onChange={(e) => { setHireError(false); setBudget(e.target.value) }} />
        </div>
        <div className={styles.field} id={styles.btn}>
          <button className={styles.btn} onClick={submitHire}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default HireBox;