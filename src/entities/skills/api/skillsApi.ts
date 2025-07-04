import { baseApi } from '@/shared/api/base/baseApi.ts'
import type { FiltersQuery, Skill, SkillsResponse } from '@/entities/skills'

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSkills: build.query<SkillsResponse, FiltersQuery>({
      query: (params) => {
        return {
          url: '/skills',
          params: {
            ...params,
          },
        }
      },
    }),
    getSkill: build.query<Skill, number>({
      query: (id) => {
        return {
          url: `/skills/${id}`,
        }
      },
    }),
  }),
})

export const { useGetSkillsQuery, useGetSkillQuery } = skillsApi
