const Hero = ({ title, subtitle, imgOn = false }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {imgOn && <figure>[Image]</figure>}
    </div>
  )
}

export default Hero
