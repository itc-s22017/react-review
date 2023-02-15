import styles from 'styles/hero.module.css'

const Hero = ({ title, subtitle, imgOn = false }) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={title}>{title}</h1>
        <p className={subtitle}>{subtitle}</p>
      </div>
      {imgOn && <figure>[Image]</figure>}
    </div>
  )
}

export default Hero
