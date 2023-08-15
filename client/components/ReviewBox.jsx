import styles from '../styles/ReviewBox.module.css'
import { FaStar } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { useState } from 'react'

function ReviewBox(props) {
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [stars, setStars] = useState('');
  const [hover, setHover] = useState(null);
  const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
  const [reviewError, setReviewError] = useState(false);
  const [reviewAlreadyExists, setReviewAlreadyExists] = useState(false);
  const [minErr1, setMinErr1] = useState(false);
  const [minErr2, setMinErr2] = useState(false);

  const submitReview = () => {
    async function postReview() {
      if(title.length < 5) {
        setMinErr1(true);
        return;
      }
      if(review.length < 25) {
        setMinErr2(true);
        return;
      }
      try {
        if (token) {
          const response = await fetch(`${process.env.SERVER_URL}/add/review`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              freelancer: props.freelancer._id,
              title: title,
              review: review,
              stars: stars
            })
          });
          const data = await response.json();
          console.log(data);
          if(data.message === 'Review already exists') {
            setReviewAlreadyExists(true);
            return;
          }
          props.appendReview(data);
        }
        props.setShowReviewDialogBox(true);
        props.handleReviewBox(false);
      } catch (error) {
        if(!reviewAlreadyExists)
        setReviewError(true);
      }
    }

    postReview();
  }

  return (
    <div className={styles.reviewBox}>
      <span onClick={(() => props.handleReviewBox(false))} className={styles.cross}>
        <ImCross />
      </span>
      <h1 className={styles.heading}>Give a Feedback</h1>
      <p className={styles.error}>{reviewError ? 'Please fill all the fields' : ''}</p>
      {reviewAlreadyExists && <p className={styles.error}><span>You have already given a review previously</span></p>}
      {minErr1 && <p className={styles.error}><span>Title must be atleast 5 characters long</span></p>}
      {minErr2 && <p className={styles.error}><span>Review must be atleast 25 characters long</span></p>}
      <div className={styles.stars}>
        {[...Array(5)].map((star, index) => (
          <label key={index}>
            <input className={styles.inputStars} type="radio" name="rating" value={index + 1} onClick={(e) => setStars(e.target.value)} />
            <FaStar size={25} key={index} onMouseEnter={() => setHover(index + 1)} onMouseLeave={() => setHover(null)}
              className={styles.star} color={index + 1 <= (hover || stars) ? '#fbbc04' : '#d0d0d0'}
              onChange={(e) => { setReviewError(false); setStars(e.target.value) }}
            />
          </label>
        ))}
      </div>
      <label htmlFor='title' className={styles.label}><span className='text-red-500'>* </span>Overview</label>
      <input className={styles.input} type="text" id='title' name='title'
        onChange={(e) => { setReviewError(false); setMinErr1(false); setMinErr2(false); setReviewAlreadyExists(false); setTitle(e.target.value) }} maxLength={60} />
      <label htmlFor='review' className={styles.label}><span className='text-red-500'>* </span>Describe in Details</label>
      <textarea className={styles.textarea} name="review" id="review" cols="30" rows="10"
        onChange={(e) => { setReviewError(false); setMinErr1(false); setMinErr2(false); setReviewAlreadyExists(false); setReview(e.target.value) }} maxLength={500}>
      </textarea>
      <button className={styles.btn} onClick={submitReview}>Submit</button>
    </div>
  )
}

export default ReviewBox;