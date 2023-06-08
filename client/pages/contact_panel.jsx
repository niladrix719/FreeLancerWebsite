import Navbar from '@/components/Navbar'
import styles from '@/styles/Contact_panel.module.css'
import Footer from '@/components/Footer'

function contact_panel() {
  return (
    <div className={styles.contactPanel}>
      <Navbar color='black' />
      <div className={styles.body}>
        <h1 className={styles.heading}>Contact Panel</h1>
      </div>
      <Footer />
    </div>
  )
}

export default contact_panel