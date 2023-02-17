import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import { getAllPosts } from 'lib/api'
import Posts from 'components/posts'

const Blog = ({ posts }) => {
  return (
    <>
      <Container>
        <Meta pageTitle='Blog' pageDesc='Blog Lists' />
        <Hero
          title='BLOG'
          subtitle='RECENT POST'
        />

        <Posts posts={posts} />
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: {
      posts
    }
  }
}
export default Blog
