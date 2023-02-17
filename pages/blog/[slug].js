import { getPostBySlug, getAllSlugs } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Image from 'next/image'
import ConvertBody from 'components/convert-body'
import PostCategories from 'components/post-categories'
import { extractText } from 'lib/extract-text'
import Meta from 'components/meta'
import { eyecatchLocal } from 'lib/constans'
import { getPlaiceholder } from 'plaiceholder'
import { prevNextPost } from 'lib/prev-next-post'
import Pagination from 'components/pagination'

const Post = ({ title, publish, content, eyecatch, categories, desc, prevPost, nextPost }) => {
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
          key={eyecatch.url}
          src={eyecatch.url}
          alt=''
          style={{ width: '100%', height: 'auto' }}
          width={eyecatch.width}
          height={eyecatch.height}
          sizes='(min-width:1152px) 1152px,100vw'
          priority
          placeholder='blur'
          blurDataURL={eyecatch.blurDataURL}
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

      <Pagination
        prevText={prevPost.title}
        prevUrl={prevPost.slug}
        nextText={nextPost.title}
        nextUrl={nextPost.slug}
      />

    </Container>
  )
}
export const getStaticPaths = async () => {
  const all = await getAllSlugs()
  return {
    paths: all.map(({ slug }) => `/blog/${slug}`),
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const slug = context.params.slug
  // const s = ['music', 'schedule'].map(v => v)

  const post = await getPostBySlug(slug)

  const desc = extractText(post.content)

  const eyecatch = post.eyecatch ?? eyecatchLocal

  // ぼかし？
  const { base64 } = await getPlaiceholder(eyecatch.url)
  eyecatch.blurDataURL = base64

  const all = await getAllSlugs()
  const [prevPost, nextPost] = prevNextPost(all, slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch,
      categories: post.categories,
      desc,
      prevPost,
      nextPost
    }
  }
}

export default Post
