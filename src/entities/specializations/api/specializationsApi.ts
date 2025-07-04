import { baseApi } from '@/shared/api/base/baseApi.ts'
import type { FiltersQuery, Specialization, SpecializationsResponse } from '@/entities/specializations'

export const specializationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSpecializations: build.query<SpecializationsResponse, FiltersQuery>({
      query: (params) => {
        return {
          url: '/specializations',
          params: {
            ...params,
          },
        }
      },
    }),
    getSpecialization: build.query<Specialization, number>({
      query: (id) => {
        return {
          url: `/specializations/${id}`,
        }
      },
    }),
  }),
})

export const { useGetSpecializationQuery, useGetSpecializationsQuery } = specializationApi
