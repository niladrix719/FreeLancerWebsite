import styles from '../styles/HireBox.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function HireBox(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [budget, setBudget] = useState('');
  const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
  const [hireError, setHireError] = useState(false);

  const submitHire = () => {
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
              title: title,
              description: description,
              location: location,
              date: date,
              time: time,
              duration: duration,
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
          <label htmlFor='title' className={styles.label}>Title</label>
          <input className={styles.input} type="text" id='title' name='title'
            onChange={(e) => { setHireError(false); setTitle(e.target.value) }} />
        </div>
        <div className={styles.field}>
          <label htmlFor='description' className={styles.label}>Description</label>
          <textarea className={styles.textarea} name="description" id="description" cols="30" rows="10"
            onChange={(e) => { setHireError(false); setDescription(e.target.value) }}>
          </textarea>
        </div>
        <div className={styles.field}>
          <label htmlFor='location' className={styles.label}>Location</label>
          <input className={styles.input} type="text" id='location' name='location'
            onChange={(e) => { setHireError(false); setLocation(e.target.value) }} />
        </div>
        <div className={styles.field}>
          <label htmlFor='date' className={styles.label}>Date</label>
          <input className={styles.input} type="date" id='date' name='date'
            onChange={(e) => { setHireError(false); setDate(e.target.value) }} />
        </div>
        <div className={styles.field}>
          <label htmlFor='time' className={styles.label}>Time</label>
          <input className={styles.input} type="time" id='time' name='time'
            onChange={(e) => { setHireError(false); setTime(e.target.value) }} />
        </div>
        <div className={styles.field}>
          <label htmlFor='duration' className={styles.label}>Duration (Hrs.)</label>
          <input className={styles.input} type="number" id='duration' name='duration'
            onChange={(e) => { setHireError(false); setDuration(e.target.value) }} />
        </div>
        <div className={styles.field}>
          <label htmlFor='budget' className={styles.label}>Total Budget (Rs.)</label>
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