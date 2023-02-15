import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'

const Home = () => {
  return (
    <>
      <Container>
        <Meta />
        <Hero
          title='CUBE'
          subtitle='OUTPUT'
          imgOn
        />
      </Container>
    </>
  )
}

export default Home
