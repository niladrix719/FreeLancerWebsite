import React from 'react'
import styles from '../styles/Cover.module.css'
import Image from 'next/image'

function Cover(props) {
  return (
    <div className={styles.cover} style={{backgroundImage: `url(https://fipezo-server.vercel.app/images/${props.coverPicture})`}}>
      
    </div>
  )
}

export default Cover;