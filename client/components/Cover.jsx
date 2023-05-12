import React from 'react'
import styles from '../styles/Cover.module.css'
import Image from 'next/image'

function Cover(props) {
  return (
    <div className={styles.cover} style={{backgroundImage: `url(./../server/uploads/coverPicture-1683897416513-139656893-img19.jpg)`}}>
      
    </div>
  )
}

export default Cover;