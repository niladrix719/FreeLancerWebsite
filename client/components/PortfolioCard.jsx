import styles from '../styles/PortfolioCard.module.css'

function PortfolioCard(props) {
  return (
    <div className={styles.portfolio_card} style={{backgroundImage: `url(${process.env.SERVER_URL}/images/${props.work})`}} onClick={() => props.handleClick(props.work,props.i)}>
      
    </div>
  )
}

export default PortfolioCard;