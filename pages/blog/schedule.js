import { getPostBySlug } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import Image from 'next/image'

const Schedule = ({ title, publish, content, eyecatch, categories }) => {
  return (
    <Container>
      <PostHeader title={title} subtitle='blog article' publish={publish} />
      <figure>
        <Image
          src={eyecatch.url}
          alt=''
          style={{ width: '100%', height: 'auto' }}
          width={eyecatch.width}
          height={eyecatch.height}
          sizes='(min-width:1152px) 1152px,100vw'
          priority
        />
      </figure>
    </Container>
  )
}

export const getStaticProps = async () => {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories
    }
  }
}

export default Schedule
