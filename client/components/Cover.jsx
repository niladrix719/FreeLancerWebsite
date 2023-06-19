import React from 'react'
import styles from '../styles/Cover.module.css'
import Image from 'next/image'

function Cover(props) {
  return (
    <div className={styles.cover} style={{backgroundImage: `url(http://localhost:3000/images/${props.coverPicture})`}}>
      
    </div>
  )
}

export default Cover;