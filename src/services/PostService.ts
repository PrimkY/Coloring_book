import { build } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { IPost } from '../models/IPost'

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
  endpoints: (build) => ({
      fetchAllPosts: build.query<IPost[], number>({
        query: (limit: number = 5) => ({
          url: '/posts',
          params: {
            _limit: limit
          }
        })
      })
  }),
})