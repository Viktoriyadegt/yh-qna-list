import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['questions'],
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: import.meta.env.VITE_BASE_API,
    })(args, api, extraOptions)

    if (result.error) {
      console.error('error:', result.error)
    }
    return result
  },
  endpoints: () => ({}),
})
