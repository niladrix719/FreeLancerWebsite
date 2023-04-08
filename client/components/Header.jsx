import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headingText}>
      <span className={styles.colorx}>H</span>ire <span className={styles.colorx}>F</span>reelancer, <span className={styles.colorx}>A</span>nywhere.
      </div>
    </div>
  )
}