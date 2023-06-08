import styles from '../styles/PortfolioCard.module.css'

function PortfolioCard(props) {
  return (
    <div className={styles.portfolio_card} style={{backgroundImage: `url(https://fipezo-server.vercel.app/uploads/${props.work})`}}>
      
    </div>
  )
}

export default PortfolioCard;