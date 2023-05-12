import styles from '../styles/PortfolioCard.module.css'
import YouTube from 'react-youtube'

function PortfolioCards() {
  const videoId1 = 'eT0eNDXkVC8';
  const videoId2 = 'TLoICmZ44gw';
  const videoId3 = 'LCM8EhPYtU4';
  const videoId4 = 'toLaugF1uIE';
  const opts = {
    height: '240',
    width: '427',
    playerVars: {
      autoplay: 0,
      mute: 1,
      loop: 1,
    },
  }

  return (
    <div className={styles.portfolio_card}>
      <YouTube videoId={videoId1} opts={opts} />
      <YouTube videoId={videoId2} opts={opts} />
      <YouTube videoId={videoId3} opts={opts} />
      <YouTube videoId={videoId4} opts={opts} />
    </div>
  )
}

export default PortfolioCards;