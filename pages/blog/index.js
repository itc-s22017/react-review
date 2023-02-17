import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import { getAllPosts } from 'lib/api'
import Posts from 'components/posts'
import { getPlaiceholder } from 'plaiceholder'

import { eyecatchLocal } from 'lib/constans'

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

  for (const post of posts) {
    if (!('eyecatch' in post)) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts
    }
  }
}
export default Blog
