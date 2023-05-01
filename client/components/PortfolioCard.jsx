import styles from '../styles/PortfolioCard.module.css'

function PortfolioCard() {
  return (
    <div className={styles.portfolio_card}>
      <video controls className={styles.portfolio_card_video} src="https://www.youtube.com/embed/eT0eNDXkVC8" autoPlay loop muted></video>
    </div>
  )
}

export default PortfolioCard;