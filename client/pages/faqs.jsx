import Navbar from '@/components/Navbar'
import styles from '../styles/Faqs.module.css'

function faqs() {
  return (
    <div className={styles.faqs}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
    </div>
  )
}

export default faqs