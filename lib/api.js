import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY
})

export const getPostBySlug = async (slug) => {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` }
    })
    return post.contents[0]
  } catch (e) {
    console.log(e)
  }
}

export const getAllSlugs = async (limit = 100) => {
  try {
    const slugs = await client.get({
      endpoint: 'blogs',
      queries: { fields: 'title,slug', order: '-publishDate', limit }
    })
    return slugs.contents
  } catch (e) {
    console.log(e)
  }
}

export const getAllPosts = async (limit = 100) => {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: { fields: 'title,slug,eyecatch', order: '-publishDate', limit }
    })
    return posts.contents
  } catch (e) {
    console.log(e)
  }
}

export const getAllCategories = async (limit = 100) => {
  try {
    const categories = await client.get({
      endpoint: 'categories',
      queries: {
        fields: 'name,id,slug',
        limit
      }
    })
    return categories.contents
  } catch (e) {
    console.log(e)
  }
}

export const getAllPostsByCategory = async (catID, limit = 100) => {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        filters: `categories[contains]${catID}`,
        fields: 'title,slug,eyecatch',
        orders: '-publishDate',
        limit
      }
    })
    return posts.contents
  } catch (e) {
    console.log(e)
  }
}
