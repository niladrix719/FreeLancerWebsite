import styles from '../styles/PortfolioCard.module.css'
import Image from 'next/image'

function PortfolioCard() {
  return (
    <div className={styles.portfolio_card}>
        <div className={styles.portfolio_card_image}>
            <Image src="" />
        </div>
    </div>
  )
}

export default PortfolioCard