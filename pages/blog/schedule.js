import { getPostBySlug } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Image from 'next/image'
import ConvertBody from 'components/convert-body'
import PostCategories from 'components/post-categories'
import { extractText } from 'lib/extract-text'
import Meta from 'components/meta'

const Schedule = ({ title, publish, content, eyecatch, categories, desc }) => {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={desc}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.heght}

      />
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
        <TwoColumnSidebar>
          <PostCategories categories={categories} />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}

export const getStaticProps = async () => {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)

  const desc = extractText(post.content)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
      desc
    }
  }
}

export default Schedule
