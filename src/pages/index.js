import styles from '../styles/pages/home.module.sass'
import Particle from 'react-particles-js'
import particlesConfig from '../assets/particlesConfig.json'

export default function Home() {
  return (
    <div className={styles.hero}>
      <Particle params={particlesConfig} className="App-particles__container" />
      <p className={styles.hero__text}>Ad Astra Et Aeternitatem Traveler!</p>
    </div>
  )
}
