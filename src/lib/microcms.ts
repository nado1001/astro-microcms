import { createClient, MicroCMSQueries } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: 'ek6eisemrt',
  apiKey: 'OD6s38CCYPr3FVmqv55qAaQKpweH3Jw98WKi',
})

export type Blog = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  eyecatch: {
    url: string
    height: number
    width: number
  }
  category: {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    name: string
  }
}
export type BlogResponse = {
  totalCount: number
  offset: number
  limit: number
  contents: Blog[]
}

export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({ endpoint: 'blogs', queries })
}
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Blog>({
    endpoint: 'blogs',
    contentId,
    queries,
  })
}
