import styles from 'styles/hero.module.css'
import Image from 'next/image'
import cube from 'images/cube.jpg'

const Hero = ({ title, subtitle, imgOn = false }) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={title}>{title}</h1>
        <p className={subtitle}>{subtitle}</p>
      </div>
      {imgOn && (
        <figure>
          <Image
            src={cube}
            alt=''
            sizes='(min-width:1152px) 567px, (min-width:768px) 50vw,100vw'
            priority
            placeholder='blur'
            style={{ width: '100%', height: 'auto' }}
          />
        </figure>
      )}
    </div>
  )
}

export default Hero
