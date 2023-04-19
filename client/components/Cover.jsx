import React from 'react'
import styles from '../styles/Cover.module.css'
import Image from 'next/image'

function Cover() {
  return (
    <div className={styles.cover}>
      <h1 className={styles.name}>Niladri Adhikary</h1>
      <Image src='/img04.jpg' width={220} height={220} className={styles.profile_pic}></Image>
    </div>
  )
}

export default Cover;