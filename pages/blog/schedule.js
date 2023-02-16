import { getPostBySlug } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Image from 'next/image'
import ConvertBody from 'components/convert-body'

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
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <ConvertBody contentHTML={content} />
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar> </TwoColumnSidebar>
      </TwoColumn>
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
