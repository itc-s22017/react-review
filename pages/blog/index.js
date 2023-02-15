import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'

const Blog = () => {
  return (
    <>
      <Container>
        <Meta pageTitle='Blog' pageDesc='Blog Lists' />
        <Hero
          title='BLOG'
          subtitle='RECENT POST'
        />
      </Container>
    </>
  )
}

export default Blog
