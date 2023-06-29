import styles from '../styles/BoxSection.module.css'

function BoxSection() {
  return (
    <div className={styles.section}>
      <div className={styles.boxes1}>
        <div className={styles.box} id={styles.box1}>
          <div className={styles.left1}>
          </div>
          <div className={styles.right1}>
          </div>
        </div>
        <div className={styles.box} id={styles.box2}>
          <div className={styles.left2}>
          </div>
          <div className={styles.right2}>
          </div>
        </div>
        <div className={styles.box} id={styles.box3}>
          <div className={styles.left3}>
          </div>
          <div className={styles.right3}>
          </div>
        </div>
        <div className={styles.box} id={styles.box4}>
          <div className={styles.left4}>
          </div>
          <div className={styles.right4}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxSection